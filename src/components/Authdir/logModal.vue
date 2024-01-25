<script>
import { ref } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';


export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore();

    const login = async () => {
      authStore.email = email.value;
      authStore.password = password.value;
      await authStore.login();
    };

    return {
      email,
      password,
      login,
      authStore
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
      <button type="submit">
        Login
        <span v-if="authStore.loading" class="loader"></span>
      </button>
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
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"],
input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:disabled {
  background-color: grey;
}

button:hover {
  background-color: darkblue;
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
