<script>
import { useAuthStore } from '@/store/useAuthStore';

export default {
  name: 'RegModal',
  setup() {
    const store = useAuthStore();

    return {
      ...store, // This will spread all reactive properties including `loading` if it's defined in the store
      signup: store.signup
    };
  }
};
</script>


<template>
  <div class="modal-container">
    <div class="modal">
      <h2 class="form-heading">Register Form</h2>
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

<style scoped>
.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px; /* Provides spacing around the modal */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px; /* Maximum width of the modal */
  margin: auto; /* Centers the modal horizontally */
  position: relative;
  z-index: 2;
}

.form-heading {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px; /* Spacing below the heading */
  position: relative; /* Establish a positioning context for the pseudo-element */
  padding-bottom: 5px; /* Space for the underline */
  text-align: center; /* Center the text */
}

.form-heading::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px; /* Make the underline thicker */
  background-color: #2c3e50;
  transition: all 0.3s ease;
  transform: scaleX(0); /* Start with no width */
  transform-origin: center; /* Grow from the center */
}

.form-heading:hover::after {
  transform: scaleX(1); /* Grow to full width on hover */
}

.modal {
  background: white;
  padding: 20px; /* Padding inside the modal */
  border-radius: 8px; /* Rounded corners of the modal */
  box-sizing: border-box; /* Includes padding in the width calculation */
  width: 100%; /* Makes the modal responsive */
  max-width: 600px; /* Maximum width of the modal content */
}

.form-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* Space between the input columns */
}

.input-group {
  display: flex;
  flex-direction: column;
  width: calc(50% - 10px); /* Adjust the width of each column, accounting for the gap */
  box-sizing: border-box; /* Includes padding and border in the width calculation */
}

.label {
  display: block;
  margin-bottom: 5px; /* Spacing below each label */
}

input[type="email"],
input[type="password"],
input[type="text"],
input[type="date"] {
  width: 100%; /* Makes input take the full width of its container */
  padding: 10px; /* Padding inside the input */
  margin-bottom: 20px; /* Spacing below each input */
  border: 1px solid #ddd; /* Border style for the input */
  border-radius: 4px; /* Rounded corners for the input */
  box-sizing: border-box; /* Includes padding and border in the width calculation */
}

button {
  width: 100%; /* Makes button take the full width of its container */
  padding: 10px; /* Padding inside the button */
  border: none;
  background-color: blue;
  color: white;
  border-radius: 4px; /* Rounded corners for the button */
  cursor: pointer; /* Changes cursor to pointer on hover */
  margin-top: 10px; /* Adds space above the button */
}

button:disabled {
  background-color: grey; /* Grey color for disabled state */
}

button:hover {
  background-color: darkblue; /* Darker blue on hover */
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
    width: 100%; /* Full width for smaller screens */
  }

  .modal-container {
    padding: 20px; /* Reduced padding on smaller screens */
  }
}
</style>
