<script>
import { ref, watch } from 'vue';
import Sidebar from './components/Homedir/sidebar.vue';
import { useSidebarStore } from '@/store/useSidebarStore';

export default {
  components: {
    Sidebar
  },
  
  setup() {
    const sidebarStore = useSidebarStore();
    // This will hold the current width of the sidebar
    const sidebarWidth = ref(sidebarStore.isMin ? '60px' : '150px');

    watch(() => sidebarStore.isMin, (isMinimized) => {
      sidebarWidth.value = isMinimized ? '60px' : '150px';
    });

    watch(() => sidebarStore.isDarkMode, (isDarkMode) => {
      document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    });

    return { sidebarWidth };
  }
}
</script>

<template>
  <div id="app" class="app-container">
    <Sidebar />
    <div class="main-content" :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div>
  </div>
</template>

<style>
@import './assets/style.css';

.app-container {
  display: flex;
  flex-direction: column; /* Ensures children are stacked vertically */
  height: 98.5vh; /* Full viewport height */
}

.main-content {
  flex-grow: 1; /* Takes up all available space */
  transition: margin-left 0.5s;
  overflow: hidden;
  background: rgb(255, 186, 246);
}

*, *:before, *:after {
  box-sizing: border-box; /* Ensures padding and borders are included in the total width and height */
}
</style>
