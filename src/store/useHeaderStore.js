import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    isMaximized: false, // Initial state of the header
  }),
  actions: {
    toggle() {
      this.isMaximized = !this.isMaximized; // Toggle the maximized state
    },
  },
});