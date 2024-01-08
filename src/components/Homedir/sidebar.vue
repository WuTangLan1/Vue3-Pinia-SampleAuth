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
      <div class="profile-container">
        <h3 class="profile-title">Profile</h3>
      </div>
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
  .sidebar .nav-link .fas.fa-home {
    color: #1a5a1c; /* Green, for example */
  }

  .sidebar .nav-link .fas.fa-user-plus {
    color: #9c1d9c; /* Orange, for example */
  }

  .sidebar .nav-link .fas.fa-sign-in-alt {
    color: #1b639e; /* Blue, for example */
  }

  .sidebar .nav-link .fas.fa-info-circle {
    color: #d1ca60; /* Purple, for example */
  }

  /* Specific color for toggle arrows */
  .fa-arrow-left,
  .fa-arrow-right {
    color: #290a07; /* Red, for example */
  }


  .sidebar.minimized {
    width: 60px;
  }
  
  .profile-container {
    border-top: 1px solid #ccc; /* Border at the top */
    padding: 15px; /* Padding inside the container */
    text-align: center; /* Center align the text */
  }

  .profile-title {
    margin-top: 0; /* Remove top margin */
    color: #333; /* Text color */
    font-size: 1.2em; /* Font size */
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
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width of the sidebar */
    height: 40px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgb(251, 251, 252);
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
    transition: width 0.5s ease;
  }

  .sidebar.minimized .sidebar-toggle {
    width: 60px; /* Width of the minimized sidebar */
    right: 0; /* Align to the right for minimized sidebar */
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
