<script>
import RegModal from '@/components/Authdir/RegModal.vue';

export default {
  name: 'register-View',
  components: {
    RegModal
  }
}
</script>

<template>
    <div class="register-view-container">
      <div class="background-container">
        <img src="@/assets/p1.png" class="background-image" />
        <img src="@/assets/p2.png" class="background-image" />
        <img src="@/assets/p3.png" class="background-image" />
      </div>
      <RegModal/>
    </div>
  </template>
  

  <style scoped>
.register-view-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5; /* Adjust as needed */
}

/* Ensure RegModal is on top of the background images */
.reg-modal {
  position: relative;
  z-index: 2;
}
</style>