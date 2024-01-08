<script>
import { ref } from 'vue';

export default {
  name: 'Sidebar-View',
  setup(_, { emit }) {
    const isMinimized = ref(true);

    const expandSidebar = () => {
      isMinimized.value = false;
      emit('toggleSidebar', 250); // Expanded width
    };

    const collapseSidebar = () => {
      isMinimized.value = true;
      emit('toggleSidebar', 60); // Minimized width
    };

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
          <!-- Home Link -->
            <li class="nav-item">
                <router-link to="/home" class="nav-link">
                <i class="fas fa-home"></i>
                <span>Home</span>
                </router-link>
            </li>
          <!-- Register Link -->
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
            <i class="fas fa-user-plus"></i>
            <span>Register</span>
            </router-link>
        </li>
          <!-- Login Link -->
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <i class="fas fa-sign-in-alt"></i>
              <span>Login</span>
            </router-link>
          </li>
          <!-- Info Link -->
          <li class="nav-item">
            <router-link to="/info" class="nav-link">
              <i class="fas fa-info-circle"></i>
              <span>Info</span>
            </router-link>
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
    width: 200px;
    background-color: rgb(251, 251, 252);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    transition: width 0.5s ease;
    overflow-x: hidden;
  }

  .sidebar.minimized {
    width: 60px;
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    align-items: center; /* Align items horizontally */
    gap: 15px; 
    justify-content: center; /* Center the items vertically */
    height: 100%;
    padding: 0;
  }

  .nav-items {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* Align items horizontally */
  }

  .nav-item {
    margin-left: -15px;
    width: 100%; /* Full width for each nav item */
    text-align: center; /* Center text */
    margin-bottom: 10px; /* Increase bottom margin for spacing */
  }


  .nav-link {
    display: flex;
    align-items: center;
    justify-content: flex;
    width: 100%;
    padding: 15px;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .nav-link i {
    margin-right: 10px; /* Space between icon and text */
    color: #2c3e50; /* Icon color */
  }
  .nav-link:hover {
    background-color: #f1f1f1;
  }

 /* Styles for minimized sidebar */
 .sidebar.minimized .nav-link {
    justify-content: center; /* Center content */
    padding: 10px;
  }

  .sidebar.minimized .nav-link i {
    margin-right: 0; /* Remove margin when minimized */
  }

  .sidebar.minimized .nav-link span {
    display: none; /* Hide text when minimized */
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 60px;
    }
  }
</style>
