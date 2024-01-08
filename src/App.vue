<script>
import Sidebar from './components/Homedir/sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>


<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.main-content {
    margin-left: 250px; /* Adjust based on the expanded width of the sidebar */
    transition: margin-left 0.5s ease;
  }

  @media (max-width: 768px) {
    .main-content {
      margin-left: 60px; /* Adjust based on the collapsed width of the sidebar */
    }
  }
</style>
