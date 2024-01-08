<!-- This component serves as a modal for the user to register an account on -->

  
<script>
import { useAuthStore } from '@/store/useAuthStore';

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

<template>
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
          <button type="submit" :disabled="loading">
          Sign Up
          <span v-if="loading" class="loader"></span>
        </button>
      </form>
    </div>
</template>

  
  <style scoped>

  
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

button:disabled {
  background-color: grey;
}

button:hover {
  background-color: darkblue; /* Darker shade when hovered */
}

.loader {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid blue;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

  </style>
  