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
      // Update the sidebarWidth value based on the new value of isMin
      sidebarWidth.value = newVal ? 60 : 250;
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
    <!-- Bind a class to dynamically adjust the styling -->
    <div class="main-content" :class="{ 'is-minimized': sidebarWidth === 60 }" :style="{ marginLeft: sidebarWidth + 'px' }">
      <router-view/>
    </div>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh; /* Add this to ensure the app container takes full viewport height */
}

.main-content {
  flex-grow: 1; /* Take available space */
  transition: margin-left 0.5s ease;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
}

/* Styles when the sidebar is minimized */
.is-minimized {
  margin-left: 60px; /* Adjust based on the minimized width of the sidebar */
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 60px; /* Adjust based on the collapsed width of the sidebar */
  }
}
</style>

