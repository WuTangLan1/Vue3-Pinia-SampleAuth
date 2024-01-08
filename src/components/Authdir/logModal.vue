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
      login
    };
  }
};
</script>

<template>
    <div class="login-modal">
      <h2>Login Form</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>