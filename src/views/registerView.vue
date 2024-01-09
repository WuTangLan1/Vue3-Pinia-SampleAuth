<script>
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';
import p3 from '@/assets/p3.png';
import p4 from '@/assets/p4.png';
import RegModal from '@/components/Authdir/RegModal.vue';

export default {
  name: 'RegisterView',
  components: {
    RegModal
  },
  data() {
    return {
      images: { p1, p2, p3, p4 },
    };
  },
};
</script>


<template>
  <div class="register-view-container">
    <div class="background-container">
      <div class="background-image top-left" :style="{ backgroundImage: 'url(' + images.p1 + ')' }"></div>
      <div class="background-image top-right" :style="{ backgroundImage: 'url(' + images.p2 + ')' }"></div>
      <div class="background-image bottom-left" :style="{ backgroundImage: 'url(' + images.p3 + ')' }"></div>
      <div class="background-image bottom-right" :style="{ backgroundImage: 'url(' + images.p4 + ')' }"></div>
    </div>
    <div class="modal-container">
      <RegModal />
    </div>
  </div>
</template>
  
  <style scoped>
.register-view-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%; /* Full width */
  height: 100vh; /* Full height of the viewport */
  padding: 20px; /* Add padding if needed */
  box-sizing: border-box; /* Includes padding in size calculations */
}
  
  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  
  .background-image {
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease;
    filter: blur(2px); /* Adds a subtle blur effect to the background images */
  }
  
  /* Assign each background image to its grid area */
  .top-left {
    grid-area: 1 / 1 / 2 / 2;
  }
  
  .top-right {
    grid-area: 1 / 2 / 2 / 3;
  }
  
  .bottom-left {
    grid-area: 2 / 1 / 3 / 2;
  }
  
  .bottom-right {
    grid-area: 2 / 2 / 3 / 3;
  }
  
  .modal-container {
    position: relative;
    z-index: 10; /* Higher z-index to ensure it's above the background images */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px; /* Adjust the maximum width as needed */
    margin: auto; /* Center the modal in the available space */
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95); /* Slightly transparent white */
    border-radius: 8px; /* Optional: rounded corners */
  }
  
  /* Ensure the modal content is centered within the .modal-container */
  .modal-container .modal {
    margin: auto;
  }
  
  /* Add any additional styles for the modal content here */
  </style>
  