<template>
  <div class="modal-container">
    <h2 class="form-heading">Register Form</h2>
    <div class="modal">
      <form @submit.prevent="signup" class="form-layout">
        <div class="input-group left-column">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
          
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="input-group right-column">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="name" required>

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

<style scoped>
.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px; /* Adjust the maximum width as needed */
  margin: auto; /* Center the modal in the available space */
  position: relative; /* Ensure it's positioned relative to its container */
  z-index: 2;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form-heading {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 0; /* Removing rounded corners */
  width: 100%;
}

.form-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  flex-basis: 45%; /* Adjust the width of each column */
}

.label {
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
  cursor: pointer;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-layout {
    flex-direction: column;
  }

  .input-group {
    flex-basis: 100%;
  }
}
</style>
