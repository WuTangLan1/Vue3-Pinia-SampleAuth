<script>
import LoginModal from '@/components/Authdir/LogModal.vue';
export default {
    name : 'Login-View',
    components : {
        LoginModal
    }
}
</script>

<template>
    <div class="login-view">
      <div class="background-images">
        <img src="@/assets/p6.png" alt="Background Image 1" class="background-image">
        <img src="@/assets/p7.png" alt="Background Image 2" class="background-image">
        <img src="@/assets/p5.png" alt="Background Image 3" class="background-image">
      </div>
      <LoginModal />
    </div>
  </template>
  
  <style scoped>
  .login-view {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .background-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }
  
  .background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5; /* Adjust opacity as needed */
  }
  </style>
  