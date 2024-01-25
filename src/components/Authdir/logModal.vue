<script>
import { ref } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';
import ForgotPasswordModal from '@/components/Authdir/ForgotPasswordModal.vue'; // Add this import


export default {
  components : {
      ForgotPasswordModal
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore();
    const showForgotPasswordModal = ref(false);

    const openForgotPasswordModal = () => {
      showForgotPasswordModal.value = true;
    };

    const closeForgotPasswordModal = () => {
      showForgotPasswordModal.value = false;
    };


    const login = async () => {
      authStore.email = email.value;
      authStore.password = password.value;
      await authStore.login();
    };

    return {
      email,
      password,
      login,
      authStore,
      showForgotPasswordModal,
      openForgotPasswordModal,
      closeForgotPasswordModal,
    };
  }
};
</script>

<template>
  <div class="modal">
    <h2 class="form-heading">Login Form</h2>
    <form @submit.prevent="login" class="form-layout">
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
     
      <div class="button-group">
        <button type="submit" class="login-button">Login<span v-if="authStore.loading" class="loader"></span></button>
        <button type="button" @click="openForgotPasswordModal" class="forgot-password-button">Forgot Password</button>
      </div>

      <ForgotPasswordModal v-if="showForgotPasswordModal" />
    </form>
  </div>
</template>

<style scoped>
/* Add the same styles as in the RegModal */
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px
}

.form-heading {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 5px;
  text-align: center;
}

.form-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 400px;
}



label {
  display: block;
  margin-bottom: 5px;
  text-align: center;
}


.input-group {
  display: flex;
  flex-direction: column;
  width: 100%; /* Take up full width */
  box-sizing: border-box;
}

input[type="email"],
input[type="password"] {
  width: 100%; /* Take up full width */
  padding: 12px; /* Increased padding for better visibility and aesthetics */
  margin-bottom: 20px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.button-group {
  display: flex;
  gap: 10px; /* Adjust the gap between buttons */
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.login-button {
  background: linear-gradient(135deg, #4CAF50, #2E7D32); /* Green gradient */
  color: white;
}

.forgot-password-button {
  background: linear-gradient(135deg, #2196F3, #1565C0); /* Blue gradient */
  color: white;
}
.loader {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid blue;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-layout {
    flex-direction: column;
  }

  .input-group {
    width: 100%;
  }
}
</style>
