import { defineStore } from "pinia";
import router from '@/router/index.js';
import { auth, db } from '@/components/Firebase/fbInit.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { doc, setDoc } from 'firebase/firestore'; // Import setDoc and doc

export const useAuthStore = defineStore({
    id:'storeAuth',
    state: () => ({
        email: '',
        password: '',
        name: '',
        dob: null,
        loading: false,
    }),
    actions: {
        async signup() {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
                
                if (user) {
                    // Create a document in Firestore with the same user ID
                    const userProfile = doc(db, "profiles", user.uid);
                    await setDoc(userProfile, {
                        full_name: this.name,
                        dob: this.dob // Make sure dob is in the correct format or use a Timestamp
                    });

                    router.replace({ name: 'home' });
                }
            } catch (error) {
                console.error("Error signing up: ", error);
            }
        },

        async login() {
            try {
                const res = await signInWithEmailAndPassword(auth, this.email, this.password);
                if (res) {
                    const user = res.user;

                    // Fetch user profile from Firestore
                    const userProfileRef = doc(db, "profiles", user.uid);
                    const userProfileSnap = await getDoc(userProfileRef);

                    if (userProfileSnap.exists()) {
                        // Update state with user info
                        const userData = userProfileSnap.data();
                        this.uid = user.uid;
                        this.name = userData.full_name;
                        this.email = user.email;
                        this.dob = userData.dob; // Convert this back from Timestamp if necessary
                    }

                    router.replace({ name: 'home' });
                }
            } catch (error) {
                console.error("Error logging in: ", error);
            }
        },

        async logout() {
            await signOut(auth)
            router.replace({name: 'login'})
            this.resetInp();
        },


        resetInp() {
            this.email = '',
            this.password = '',
            this.name = '',
            this.dob = null
        }
    }
})