// useSidebarStore.js
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore({
  id: 'storeSidebar',
  state: () => ({
    isMin: true,
    isDarkMode: false, // Add this for dark mode state
  }),
  actions: {
    
toggle() {
  this.isMin = !this.isMin;
  const newWidth = this.isMin ? '30px' : '120px';
  document.documentElement.style.setProperty('--sidebar-width', newWidth);
},

    toggleDarkMode() { // Method to toggle dark mode
      this.isDarkMode = !this.isDarkMode;
    },
  },
});