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
    <div class="form-content">
      <div class="left-container">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="button" class="login-button" @click="login">
          Login
          <span v-if="authStore.loading" class="loader"></span>
        </button>

      </div>
      
      <div class="separator"></div>

      <div class="right-container">
        <div class="auth-option">
          <div class="auth-icon gmail-icon"><!-- Gmail icon here --></div>
          <button @click="signInWithGmail">Sign in with Gmail</button>
        </div>
        <div class="auth-option">
          <div class="auth-icon microsoft-icon"><!-- Microsoft icon here --></div>
          <button @click="signInWithMicrosoft">Sign in with Microsoft</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px; /* Adjusted for more space */
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #36454F 0%, #1F262E 100%);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
  flex-direction: column;
  max-width: 800px; /* Adjust as needed */
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
}

.input-container {
  flex: 1; /* Take up half the space */
  margin-right: 10px; /* Add some space before the separator */
}

.form-content {
  display: flex;
  width: 100%;
}

.left-container {
  flex-grow: 1;
  padding-right: 10px; /* Space before the separator */
}

.separator {
  background-color: #FFFFFF;
  width: 2px;
  height: auto;
  align-self: stretch;
}

.right-container {
  flex-grow: 1;
  display: flex;
  padding-left: 10px; 
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
}

.auth-option {
  display: flex;
  align-items: center; /* Center content vertically and horizontally */
  gap: 10px; /* Space between icon and button */
  width: 100%; /* Full width to center button text */
  margin-bottom: 20px; /* Add space between the auth options */
}

.auth-icon {
  width: 40px; /* Larger icon size */
  height: 40px; /* Larger icon size */
  background-size: contain; /* Show the whole icon */
  background-repeat: no-repeat; /* Prevent repeating the icon */
  background-position: center; /* Center the icon */
}

.auth-option button {
  padding: 10px 15px; /* Adjust padding to make the button smaller */
  min-width: 150px; /* Set a min-width for the button (you can adjust this value to make it slightly less wide) */
  text-align: center; /* Ensure text is centered in the button */
  white-space: nowrap; /* Prevent text from wrapping */
}


.gmail-icon {
  background-image: url('@/assets/gmailIcon.png'); /* Use @ alias to refer to the src directory */
}

.microsoft-icon {
  background-image: url('@/assets/microsoftIcon.png'); /* Use @ alias to refer to the src directory */
}


.input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-weight: 600;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"],
input[type="text"],
input[type="date"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background: #2B2E33;
  border: 1px solid #444C56;
  color: #FFFFFF;
  border-radius: 4px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Space between icon and text */
  padding: 10px 15px; /* Padding inside the button */
  /* Other button styles */
}

button:disabled {
  background-color: #3E4B59;
}

button:hover:not(:disabled) {
  background-color: #3B4D67;
  color: white;
}

.loader {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #4B6A88;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

@media (max-width: 768px) {
  .form-content {
    flex-direction: column;
  }

  .left-container,
  .right-container {
    padding: 0;
    align-items: center; /* Center the buttons on mobile view */
  }

  .separator {
    display: none;
  }
}
</style>