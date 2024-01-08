<!-- This component serves as a modal for the user to register an account on -->


<template>
    <div class="modal-overlay">
      <div class="modal">
        <form @submit.prevent="signup">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="input-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="input-group">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" v-model="dob" required>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/useAuthStore';
  
  export default {
    name: 'RegModal',
    setup() {
      const { email, password, name, dob, signup } = useAuthStore();
  
      return {
        email,
        password,
        name,
        dob,
        signup
      };
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  .input-group {
    margin-bottom: 10px;
    text-align: center;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="email"], input[type="password"], input[type="text"], input[type="date"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: blue;
    color: white;
    border-radius: 4px;
  }
  </style>
  