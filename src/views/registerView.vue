<template>
    <div class="register-view-container">
      <div class="background-container">
        <img src="@/assets/p1.png" class="background-image" />
      </div>
      <div class="modal-container">
        <RegModal/>
      </div>
    </div>
  </template>
  
  <script>
  import RegModal from '@/components/Authdir/RegModal.vue';
  
  export default {
    name: 'register-View',
    components: {
      RegModal
    }
  }
  </script>
  
  <style scoped>
  .register-view-container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay to enhance contrast */
    z-index: 1;
  }
  .background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

  
  .modal-container {
    position: relative;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 600px; /* Control the width of the modal */
  }
  </style>
  