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
  
  <style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    width: 250px;
    background-color: rgb(251, 251, 252);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    transition: width 0.5s ease;
  }

  .sidebar.minimized {
    width: 60px;
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }

  .nav-items {
    list-style: none;
    padding: 0;
  }

  .nav-item {
    margin-bottom: 10px;
  }

  .nav-link {
    display: block;
    padding: 10px 20px;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .nav-link:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 60px;
    }
  }
</style>
