<script>
import { computed } from 'vue';
import { useSidebarStore } from '@/store/useSidebarStore';
import { useAuthStore } from '@/store/useAuthStore';

export default {
  name: 'Sidebar-View',
  setup() {
    const sidebarStore = useSidebarStore();
    const authStore = useAuthStore();

    const isMinimized = computed(() => sidebarStore.isMin);
    const toggleSidebar = () => {
      sidebarStore.toggle();
    };
    const isAuthenticated = computed(() => authStore.isAuthenticated);

    // Logout function that calls the logout action from the auth store
    const logout = async () => {
      await authStore.logout();
    };

    return { isMinimized, toggleSidebar, isAuthenticated, logout };
  },
};
</script>


<template>
  <aside class="sidebar" :class="{ minimized: isMinimized, maximized: !isMinimized }">
      <div class="sidebar-toggle" @click="toggleSidebar">
        <i class="fas" :class="{ 'fa-arrow-left': !isMinimized, 'fa-arrow-right': isMinimized }"></i>
      </div>
      <nav class="sidebar-nav">
        <ul class="nav-items">
          <!-- Home Link -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </router-link>
          </li>
                <!-- Sample Link -->
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/Sample" class="nav-link">
              <i class="fas fa-cog"></i>
              <span>Sample</span>
            </router-link>
          </li>
                <!-- Sample Link -->
                <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/Sample" class="nav-link">
              <i class="fas fa-cog"></i>
              <span>Sample</span>
            </router-link>
          </li>
                          <!-- Sample Link -->
                          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/Sample" class="nav-link">
              <i class="fas fa-cog"></i>
              <span>Sample</span>
            </router-link>
          </li>
                          <!-- Sample Link -->
                          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/Sample" class="nav-link">
              <i class="fas fa-cog"></i>
              <span>Sample</span>
            </router-link>
          </li>
          <!-- Info Link -->
          <li class="nav-item info-nav-item"> <!-- Add a specific class here -->
            <router-link to="/info" class="nav-link">
              <i class="fas fa-info-circle"></i>
              <span>Info</span>
            </router-link>
          </li>
          <!-- Dynamic Spacer for visual separation, if needed -->
          <div class="spacer"></div>
          <!-- Conditionally render Register and Login links -->
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/register" class="nav-link">
              <i class="fas fa-user-plus"></i>
              <span>Register</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link">
              <i class="fas fa-sign-in-alt"></i>
              <span>Login</span>
            </router-link>
          </li>
          <!-- Logout Link -->
          <li class="nav-item" v-if="isAuthenticated">
            <a class="nav-link" @click.prevent="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </a>
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
  width: var(--sidebar-width); /* Use the variable for width */
  transition: width 0.5s ease-in-out;
  background: linear-gradient(to right, #2c3e50, #34495e);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-x: hidden;
}

.nav-link i {
  margin-right: 10px; /* Space between icon and text */
  filter: brightness(150%); /* Make icons 50% brighter than their current state */
}

  .nav-link--active, .nav-link:hover {
  background-color: #d35400; /* Burnt orange for active/hover states */
}

  /* Specific color for home icon */
  .sidebar .nav-link .fas.fa-home {
    color: #1a5a1c; /* Green, for example */
  }

  .sidebar .nav-link .fas.fa-user-plus {
    color: #9c1d9c; 
  }

  .sidebar .nav-link .fas.fa-landmark {
    color: #19c362; 
  }

  .sidebar .nav-link .fas.fa-city {
    color: #a00b42; 
  }

 
  .sidebar .nav-link .fas.fa-cog {
    color: #42393a; 
  }

  .sidebar .nav-link .fas.fa-sign-in-alt {
    color: #1b639e; 
  }

  .sidebar .nav-link .fas.fa-info-circle {
    color: #d1ca60; 
  }

  .sidebar .nav-link .fas.fa-map-marked-alt {
    color: #d1ca60; 
  }

  .sidebar .nav-link .fas.fa-sign-out-alt{
    color: #d1ca60; 
  }


  .fa-arrow-left,
  .fa-arrow-right {
    color: #ffffff; /* Red, for example */
  }
  .sidebar.maximized {
  width: 120px; /* New maximized width */
}

.sidebar.minimized {
  width: 30px;
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
    position: absolute; /* Keeps the toggle button in a fixed position inside the sidebar */
    top: 10px; /* Position the toggle at the top of the sidebar */
    right: 10px; /* Position the toggle at the right of the sidebar */
    z-index: 1100; /* Ensures it's above other elements */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px; /* Set the width of the toggle area */
    height: 30px; /* Set the height of the toggle area */
    cursor: pointer;
    background-color: transparent; /* No background */
    border: none; /* No border */
  }

  .sidebar-toggle i {
  transition: transform 0.5s ease-in-out; /* Consistent with the sidebar transition */
}
/* When sidebar is minimized */
.sidebar.minimized .sidebar-toggle i {
  transform: rotate(0deg); /* Arrow points from left to right when minimized */
}

/* When sidebar is maximized */
.sidebar:not(.minimized) .sidebar-toggle i {
  transform: rotate(360deg); /* Arrow points from right to left when maximized */
}
.spacer {
    flex-grow: 1;
  }

.sidebar.minimized .sidebar-toggle {
    width: 60px; /* Width of the minimized sidebar */
    right: 0; /* Align to the right for minimized sidebar */
    left: 10px; /* Center the arrow horizontally */
    margin: auto; /* Center the arrow horizontally */
  }
  .nav-items {
  list-style: none;
  padding: 0;
  padding-top: 100px; /* Added padding at the top */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}



  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center; /* This will center the content for both minimized and maximized states */
    width: 100%; /* Full width to fill sidebar */
    padding: 15px 0; /* Padding for top and bottom */
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center; /* Center content horizontally */
    width: 100%; /* Full width to ensure the text and icon are centered */
    padding: 15px 0; /* Padding for top and bottom */
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease;
    gap: 10px; /* Add space between icon and text if needed */
  }

  .sidebar.minimized .nav-link {
    justify-content: center; /* Center content */
    padding: 10px 0; /* Padding for top and bottom */
  }

  .sidebar.minimized .nav-link i {
    margin-right: 0; /* Remove margin when minimized */
  }

  .sidebar.minimized .nav-link span {
    display: none; /* Hide text when minimized */
  }

  .nav-link i {
    margin-right: 10px; /* Space between icon and text */
    color: #66588b; /* Icon color */
  }
  .nav-link:hover {
    background-color: #605592;
  }

  .sidebar.minimized .nav-link {
    justify-content: center; /* Center content */
    padding: 10px;
  }

  .sidebar.minimized .nav-link i {
    margin-right: 0; /* Remove margin when minimized */
  }

  .nav-item .nav-link.router-link-exact-active,
.nav-item .nav-link.router-link-active {
  background-color: #473853; /* Burnt orange for active link background */
  color: white; /* White color for active link text */
}

/* Additional styles to ensure the highlighting of the icon itself */
.nav-item .nav-link.router-link-exact-active i,
.nav-item .nav-link.router-link-active i {
  color: white; /* White color for the icon of the active link */
}



  .nav-link span {
    opacity: 1;
    transition: opacity 0.5s ease; /* Add a fade transition for opacity */
  }

  .sidebar.minimized .nav-link span {
    display: none; /* Hide text when minimized */
    opacity: 0;
  }


  @media (max-width: 768px) {
    .sidebar {
      width: 60px;
    }
  }
</style>