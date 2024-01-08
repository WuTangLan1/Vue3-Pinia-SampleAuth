<script>
import { ref } from 'vue';
import Sidebar from './components/Homedir/sidebar.vue';

export default {
  components: {
    Sidebar
  },
  setup() {
    const sidebarWidth = ref(250); // Default sidebar width

    const toggleSidebar = (newWidth) => {
      sidebarWidth.value = newWidth;
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.main-content {
    transition: margin-left 0.5s ease;
  }

  @media (max-width: 768px) {
    .main-content {
      margin-left: 60px; /* Adjust based on the collapsed width of the sidebar */
    }
  }
</style>
