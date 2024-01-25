import { defineStore } from "pinia";
import router from '@/router/index.js';
import { auth, db } from '@/components/Firebase/fbInit.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
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
                this.loading = true; 
                console.log(this.email, this.password)
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
                console.log
                
                if (user) {
                    const userProfile = doc(db, "profiles", user.uid);
                    await setDoc(userProfile, {
                        full_name: this.name,
                        dob: this.dob 
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
                if (res) {
                    const user = res.user;
                    const userProfileRef = doc(db, "profiles", user.uid);
                    const userProfileSnap = await getDoc(userProfileRef);

                    if (userProfileSnap.exists()) {
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
            } finally {
                this.loading = false; // Set loading to false regardless of success or failure
            }
        },

        async logout() {
            await signOut(auth)
            router.replace({name: 'login'})
            this.resetInp();
        },
        async resetPassword(email) {
            try {
              await sendPasswordResetEmail(auth, email);
              // Optionally handle success, display a success message, etc.
            } catch (error) {
              console.error('Error sending password reset email:', error);
              throw error;
            }
          },
          
          resetInp() {
            this.email = '',
            this.password = '',
            this.name = '',
            this.dob = null
        }
    },

})