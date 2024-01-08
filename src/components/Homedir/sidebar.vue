<script>
import { ref } from 'vue';

export default {
  name: 'Sidebar-View',
  setup(_, { emit }) {
    const isMinimized = ref(true);

    const toggleSidebar = () => {
      isMinimized.value = !isMinimized.value;
      emit('toggleSidebar', isMinimized.value ? 60 : 250); // Toggle width
    };

    return {
      isMinimized,
      toggleSidebar,
    };
  }
}
</script>

<template>
    <aside class="sidebar" :class="{ minimized: isMinimized }">
       <div class="sidebar-toggle" @click="toggleSidebar">
           <i class="fas" :class="{ 'fa-arrow-left': !isMinimized, 'fa-arrow-right': isMinimized }"></i>
       </div>
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

  .nav-link i {
    margin-right: 10px; /* Space between icon and text */
    /* Default icon color */
    color: #2c3e50;
  }

  /* Specific color for home icon */
  .fa-home {
    color: #4CAF50; /* Green, for example */
  }

  /* Specific color for register icon */
  .fa-user-plus {
    color: #FF9800; /* Orange, for example */
  }

  /* Specific color for login icon */
  .fa-sign-in-alt {
    color: #2196F3; /* Blue, for example */
  }

  /* Specific color for info icon */
  .fa-info-circle {
    color: #9C27B0; /* Purple, for example */
  }

  /* Specific color for toggle arrows */
  .fa-arrow-left,
  .fa-arrow-right {
    color: #F44336; /* Red, for example */
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

  .sidebar-toggle {
    position: absolute; /* Fixed position within sidebar */
    top: 0; /* Align to the top */
    right: 0; /* Align to the right */
    z-index: 1100; /* Higher z-index to ensure it's above other elements */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Adjust width as needed */
    height: 40px; /* Adjust height as needed */
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1); /* Border for the toggle icon */
    background-color: rgb(251, 251, 252); /* Match sidebar background */
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
    transition: width 0.5s ease; /* Transition for width */
  }

  .sidebar.minimized .sidebar-toggle {
    width: 100%; /* Full width of the minimized sidebar */
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
