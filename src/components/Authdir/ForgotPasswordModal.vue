<template>
  <transition name="modal-fade">
    <div v-if="showModal" class="modal-container">
      <div class="modal">
        <h2 class="form-heading">Forgot Password</h2>
        <form @submit.prevent="resetPassword" class="form-layout">
          <div class="input-group">
            <label for="forgotEmail">Email</label>
            <input type="email" id="forgotEmail" v-model="forgotEmail" required>
          </div>
          <div class="button-group">
            <button type="submit" class="reset-button">
              Reset Password
              <span v-if="loading" class="loader"></span>
            </button>
            <button type="button" @click="closeModal" class="close-button">Close</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';

export default {
  setup() {
    const forgotEmail = ref('');
    const loading = ref(false);
    const authStore = useAuthStore();
    const showModal = ref(true); // Added show/hide state for the modal

    const resetPassword = async () => {
      try {
        loading.value = true;
        await authStore.resetPassword(forgotEmail.value);
        // Optionally display a success message or redirect the user
        closeModal(); // Close the modal after resetting the password
      } catch (error) {
        console.error('Error resetting password:', error);
        // Handle error, display error message, etc.
      } finally {
        loading.value = false;
      }
    };

    const closeModal = () => {
      // Implement logic to close the modal
      showModal.value = false;
    };

    return {
      forgotEmail,
      loading,
      showModal,
      resetPassword,
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Slightly blurred background */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1.5s; 
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 1.5s; /* Fade-in and fade-out duration */
}

.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}

/* Add styles similar to LogModal or adjust as needed */

.reset-button,
.close-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.reset-button {
  background: linear-gradient(135deg, #4CAF50, #2E7D32); /* Green gradient */
  color: white;
}

.close-button {
  background: linear-gradient(135deg, #e74c3c, #c0392b); /* Red gradient */
  color: white;
}

.reset-button:hover,
.close-button:hover {
  background-color: darken(var(--primary-color), 10%);
}

.loader {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3498db;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
