import { defineStore } from "pinia";
import router from '@/router/index.js';
import { auth, db } from '@/components/Firebase/fbInit.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore'; // Import setDoc and doc

export const useAuthStore = defineStore({
    id:'storeAuth',
    state: () => ({
        email: '',
        password: '',
        name: '',
        dob: null
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
                const res = await signInWithEmailAndPassword(auth, this.email, this.password)

                if (res)
                {
                    router.replace({name:'home'})
                }
            } catch (error ) {
                console.log(error)
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