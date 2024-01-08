<script>
import { ref } from 'vue';

export default {
  name: 'Sidebar-View',
  setup() {
    const isMinimized = ref(true);

    const expandSidebar = () => isMinimized.value = false;
    const collapseSidebar = () => isMinimized.value = true;

    return {
      isMinimized,
      expandSidebar,
      collapseSidebar,
    };
  }
}
</script>


<template>
    <aside class="sidebar" :class="{ minimized: isMinimized }" @mouseover="expandSidebar" @mouseleave="collapseSidebar">
      <nav class="sidebar-nav">
        <ul class="nav-items">
          <!-- Register Link -->
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <!-- Login Link -->
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <!-- Info Link -->
          <li class="nav-item">
            <router-link to="/info" class="nav-link">Info</router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  