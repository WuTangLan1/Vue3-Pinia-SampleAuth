// useSidebarStore.js
import { defineStore } from "pinia";

export const useSidebarStore = defineStore({
  id: 'storeSidebar',
  state: () => ({
    isMin: true,
    loading: false,
  }),
  actions: {
    toggle() {
      this.isMin = !this.isMin;
      console.log(this.isMin)
    }
  }
});
