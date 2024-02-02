<script>
import { ref, watch } from 'vue';
import Sidebar from './components/Homedir/sidebar.vue';
import { useSidebarStore } from '@/store/useSidebarStore';
import Header from './components/Homedir/header.vue';
import { useHeaderStore } from '@/store/useHeaderStore';

export default {
  components: {
    Sidebar,
    Header
  },
  
  setup() {
    const sidebarStore = useSidebarStore();
    // This will hold the current width of the sidebar
    const sidebarWidth = ref(sidebarStore.isMin ? '30px' : '100px');

    const headerStore = useHeaderStore();
    const headerHeight = ref(headerStore.isMaximized ? '80px' : '60px');

    watch(sidebarWidth, (newWidth) => {
  document.documentElement.style.setProperty('--sidebar-width', newWidth);
});

watch(() => sidebarStore.isMin, (isMinimized) => {
  const extraWidth = 32; 
  const newWidth = isMinimized ? `calc(30px + ${extraWidth}px)` : `calc(120px + ${extraWidth}px)`;
  document.documentElement.style.setProperty('--sidebar-width', newWidth);
  sidebarWidth.value = newWidth;
}, { immediate: true });

watch(() => headerStore.isMaximized, (isMaximized) => {
  const newHeight = isMaximized ? '80px' : '60px';
  headerHeight.value = newHeight;
  // Update the CSS variable that will be used in the header component
  document.documentElement.style.setProperty('--header-height', newHeight);
}, { immediate: true });


    return { sidebarWidth, headerHeight };
  }
}
</script>

<template>
  <div id="app" class="app-container">
    <Sidebar />
    <Header/>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>



<style>
@import './assets/style.css';

html, body {
  height: 100%; /* This ensures that the html and body take up the full height of the screen */
  margin: 0; /* Resets any default margin */
  padding: 0; /* Resets any default padding */
}

.app-container {
  display: flex;
  flex-direction: row; /* Ensures that the sidebar and main content are side by side */
  height: 100vh; /* Sets the container to take up the full viewport height */
  margin: 0;
  padding: 0;
  background: #2c3e50;
  overflow-y: hidden; /* Hide vertical scrollbar */
  box-sizing: border-box; /* Include padding and borders in the element's total width and height */
}


.main-content {
  flex-grow: 1;
  transition: margin-left 0.5s ease-in-out, margin-top 0.5s ease-in-out; /* Smooth transition for sidebar and header */
  background: linear-gradient(270deg, #36454F, #1F262E);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: var(--header-height); /* Dynamically adjust for header height */
  margin-left: var(--sidebar-width); /* Dynamically adjust for sidebar width */
  overflow: auto;
}


@keyframes GradientBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}



</style>