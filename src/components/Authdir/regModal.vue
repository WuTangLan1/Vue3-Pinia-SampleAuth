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
          <button type="submit" :disabled="loading">
          Sign Up
          <span v-if="loading" class="loader"></span>
        </button>
      </form>
    </div>
  </div>
</template>

  
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
    animation: fadeIn 0.3s;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    transform: scale(0);
    animation: scaleUp 0.3s forwards;
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

  @keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { transform: scale(0); }
  to { transform: scale(1); }
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

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  </style>
  