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
  flex-grow: 1;
  padding: 20px;
  transition: margin-left 0.5s ease;
  overflow: hidden; /* Add this to prevent content overflow */
}
</style>

