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
  display: grid; /* Use grid to center children */
  place-items: center; /* Center children */
  width: 100%;
  height: calc(100vh - 60px); /* Subtract the height of your header if there is one */
}

.background-container {
  grid-area: 1 / 1; /* Position in the first cell of the grid */
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-container {
  grid-area: 1 / 1; /* Position in the same cell as the background */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px; /* Adjust the maximum width as needed */
  margin: auto; /* Center the modal in the available space */
  position: relative; /* Ensure it's positioned relative to its container */
  z-index: 2;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Ensure the modal is centered within the .modal-container */
.modal-container .modal {
  margin: auto;
}
  </style>
  