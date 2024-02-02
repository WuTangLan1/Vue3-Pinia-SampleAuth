import { defineStore } from "pinia";
import router from '@/router/index.js';
import { auth, db } from '@/components/Firebase/fbInit.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc} from "firebase/firestore";
import { doc, setDoc } from 'firebase/firestore'; // Import setDoc and doc

export const useAuthStore = defineStore({
    id:'storeAuth',
    state: () => ({
        email: '',
        password: '',
        dob: null,
        loading: false,
        fullname : '',
        isAuthenticated : false,
        user : null,


    }),    
    actions: {
        async signup() {
            try {
                this.loading = true;
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
        
                if (user) {
                    // Save user data to Firestore in the "profiles" collection
                    const userProfile = doc(db, "profiles", user.uid);
                    await setDoc(userProfile, {
                        cellphone: "null",
                        email: this.email,
                        fullname : this.fullname
                    });
        
                    router.replace({ name: 'home' });
                }
            } catch (error) {
                console.error("Error signing up: ", error);
            } finally {
                this.loading = false; // Set loading to false regardless of success or failure
            }
        },         

        async login() {
            try {
                this.loading = true; 
                const res = await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log('hello')
                if (res) {
                    const user = res.user;
                    const userProfileRef = doc(db, "profiles", user.uid);
                    const userProfileSnap = await getDoc(userProfileRef);

                    if (userProfileSnap.exists()) {
                        const userData = userProfileSnap.data();
                        this.uid = user.uid;
                        this.fullname = user.fullname
                        this.email = user.email;
                        this.dob = userData.dob; // Convert this back from Timestamp if necessary
                    }

                    router.replace({ name: 'home' });
                }
            } catch (error) {
                console.error("Error logging in: ", error);
            } finally {
                this.loading = false; // Set loading to false regardless of success or failure
            }
        },

        async logout() {
            await signOut(auth);
            router.replace({ name: 'home' });
            this.resetInp();
        },
        

        initializeAuthListener() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.isAuthenticated = true;
                    this.user = user;
                } else {
                    this.isAuthenticated = false;
                    this.user = null;
                }
            });
        },
          
          resetInp() {
            this.email = '',
            this.password = '',
            this.name = '',
            this.dob = null
        },


        //-------------------------------------------------------------------------
    },
})