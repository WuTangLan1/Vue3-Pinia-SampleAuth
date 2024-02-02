<script>
import { useAuthStore } from '@/store/useAuthStore';
import {ref} from 'vue';

export default {
  name: 'RegModal',
  setup() {
    const authStore = useAuthStore();

    const dob = ref('2001-03-03'); 
    
    return {
      authStore,
      dob // only return the store
    };
  }
};
</script>
<template>
  <div class="modal">
    <h2 class="form-heading">Register Form</h2>
    <form @submit.prevent="authStore.signup" class="form-layout">
      <div class="input-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" v-model="authStore.name" required>
      </div>
      <div class="input-group">
        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" v-model="dob" required>
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="authStore.email" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="authStore.password" required>
      </div>
      <div class="button-container">
        <button type="submit" :disabled="authStore.loading">
          Sign Up
          <span v-if="authStore.loading" class="loader"></span>
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #36454F 0%, #1F262E 100%);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
}

.form-heading {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.form-heading::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #FFFFFF;
  transition: width 0.3s ease, left 0.3s ease;
}

.form-heading:hover::after {
  width: 100%;
  left: 0;
}

.form-layout {
  display: grid; /* Changed to grid layout for two-column layout */
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  gap: 20px;
  width: 100%;
  align-items: center;
  margin-bottom: 20px; /* Space for the button */
}

.input-group {
  display: flex;
  flex-direction: column;
}

input[type="email"],
input[type="password"],
input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background: #2B2E33;
  border: 1px solid #444C56;
  color: #FFFFFF;
  border-radius: 4px;
}

.button-container {
  grid-column: 1 / -1; /* Span the button across all columns */
  display: flex;
  justify-content: center; /* Center the button */
  width: 100%;
}

button {
  padding: 10px 15px;
  background: blue;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #3E4B59;
}

button:hover:not(:disabled) {
  background-color: #3B4D67;
}

.loader {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #4B6A88;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .form-layout {
    grid-template-columns: 1fr; /* Single column layout for smaller screens */
  }
  
  .button-container {
    order: 3; /* Ensure button is placed after the input groups on smaller screens */
  }
}
</style>
