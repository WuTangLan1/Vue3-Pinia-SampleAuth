// useSidebarStore.js
import { defineStore } from "pinia";

export const useSidebarStore = defineStore({
  id: 'storeSidebar',
  state: () => ({
    isMin: true,
    isDarkMode: false, // Add this line
  }),
  actions: {
    toggle() {
      this.isMin = !this.isMin;
    },
    toggleTheme() { // Add this method
      this.isDarkMode = !this.isDarkMode;
    }
  }
});
