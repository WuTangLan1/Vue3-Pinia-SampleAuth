<template>
    <header class="header" @click.stop>
      <div v-if="headerStore.isMaximized" class="header-user-info">
        <span>{{ userFirstName }} {{ userLastName }}</span>
      </div>
      <h1 class="header-title" :class="{ 'is-maximized': headerStore.isMaximized }">Sample Heading</h1>
      <div class="header-controls">
        <span v-if="headerStore.isMaximized" class="header-date">{{ currentDate }}</span>
        <i :class="['fas', headerStore.isMaximized ? 'fa-arrow-up' : 'fa-arrow-down']" @click="toggleHeader" class="header-toggle"></i>
      </div>
    </header>
  </template>
  
  <script>
  import { useHeaderStore } from '@/store/useHeaderStore';
  import { useAuthStore } from '@/store/useAuthStore';
  import { ref, computed } from 'vue';
  
  export default {
    name: 'HeaderView',
    setup() {
      const headerStore = useHeaderStore();
      const authStore = useAuthStore();
      const currentDate = ref(new Date().toLocaleDateString('en-US', {
          weekday: 'long', // "Monday"
          year: 'numeric', // "2021"
          month: 'long', // "July"
          day: 'numeric' // "19"
        }));
  
  
      const toggleHeader = () => {
        headerStore.toggle(); // Toggles the maximized state of the header
      };
  
      const userFirstName = computed(() => authStore.firstName);
      const userLastName = computed(() => authStore.lastName);
  
      return { toggleHeader, headerStore, currentDate, userFirstName, userLastName };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  .header {
    background: linear-gradient(to right, #2c3e50, #34495e);
    color: white;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: var(--sidebar-width); /* Use the CSS variable here */
    right: 0;
    z-index: 1000;
    transition: height 0.5s ease-in-out, left 0.5s ease-in-out;
    height: var(--header-height); /* Use the variable to set the height */
    padding: 0 1rem; /* Add padding to both sides */
  }
  
  .header-title {
    position: absolute; /* Absolute positioning */
    width: 100%; /* Full width to ensure centering */
    text-align: center; /* Center the text */
    margin: 0; /* Remove any default margin */
    font-family: 'Roboto', sans-serif; /* Use the imported font */
    font-weight: 900; /* Make the font bolder */
    letter-spacing: 2px; /* Increase spacing between letters */
    text-transform: uppercase; /* Makes the text uppercase */
    font-size: 1.5rem; /* Adjust the font size as needed */
  }
  
  .header-user-info {
    position: absolute;
    left: 1rem;
    bottom: 0.5rem;
    font-size: 0.9rem;
    color: white;
    /* Center the text vertically */
    transform: translateY(50%);
  }
  
  .header-controls {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Adjust the space between elements as necessary */
  }
  
  .header-date {
    font-size: 0.9rem;
    color: white;
    margin-right: 60px; /* Add some space to the right of the date */
  }
  
  .header-toggle {
    cursor: pointer;
    position: absolute; /* Absolute positioning */
    right: 1rem; /* Position to the right */
    top: 50%; /* Center vertically */
    transform: translateY(-50%); /* Align center with the height of the header */
  }
  
  .header-title.is-maximized {
    font-size: 2rem; /* Enlarge the font size when maximized */
    font-style: underline;
  }
  </style>