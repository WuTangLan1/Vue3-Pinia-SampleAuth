// App.vue
<script>
import { ref, watch } from 'vue';
import Sidebar from './components/Homedir/sidebar.vue';
import { useSidebarStore } from '@/store/useSidebarStore'; // Adjust the path as necessary

export default {
  components: {
    Sidebar
  },
  
  setup() {
    const sidebarStore = useSidebarStore();
    const sidebarWidth = ref(sidebarStore.isMin ? 60 : 250);

    watch(() => sidebarStore.isMin, (newVal) => {
      sidebarWidth.value = newVal ? 60 : 250;
    });

    watch(() => sidebarStore.isDarkMode, (newValue) => {
      document.body.setAttribute('data-theme', newValue ? 'dark' : 'light');
    });

    const toggleSidebar = () => {
      sidebarStore.toggle(); // This calls the action in the store
    };

    return { sidebarWidth, toggleSidebar };
  }
}
</script>


<template>
  <div id="app">
    <Sidebar @toggleSidebar="toggleSidebar" />
    <div class="main-content" :style="{ marginLeft: sidebarWidth + 'px' }">
      <router-view/>
    </div>
  </div>
</template>


/* App.vue */
<style>
@import './assets/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh; /* Full viewport height */
}

.main-content {
  flex-grow: 1; /* Takes up all available space */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 20px; /* Add padding if needed */
  overflow: hidden; /* Prevents content from overflowing */
}

/* RegisterView.vue */
.register-view-container {
  display: flex; /* Make this a flex container */
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center children vertically */
  align-items: center; /* Center children horizontally */
  width: 100%;
  height: 100%; /* Take up all available height */
  padding: 20px; /* Add padding if needed */
}
</style>

