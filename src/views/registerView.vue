<script>
import p1 from '@/assets/p1.png';
import p3 from '@/assets/p3.png';
import p5 from '@/assets/p5.png';
import p7 from '@/assets/p7.png';
import RegModal from '@/components/Authdir/RegModal.vue';

export default {
  name: 'RegisterView',
  components: {
    RegModal
  },
  data() {
    return {
      images: { p1, p3, p5, p7 },
    };
  },
};
</script>


<template>
  <div class="register-view-container">
    <!-- Overlay for dimming the background -->
    <div class="dim-overlay"></div>

    <!-- Background images container -->
    <div class="background-container">
      <div class="background-image top-left" :style="{ backgroundImage: 'url(' + images.p1 + ')' }"></div>
      <div class="background-image top-right" :style="{ backgroundImage: 'url(' + images.p3 + ')' }"></div>
      <div class="background-image bottom-left" :style="{ backgroundImage: 'url(' + images.p5 + ')' }"></div>
      <div class="background-image bottom-right" :style="{ backgroundImage: 'url(' + images.p7 + ')' }"></div>
    </div>

    <!-- Modal container for the registration form -->
    <div class="modal-container">
      <RegModal />
    </div>
  </div>
</template>
  
<style scoped>
.register-view-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dim-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  z-index: 1;
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.background-image {
  position: absolute;
  background-size: cover;
  background-position: center;
}

.top-left {
  top: 5%;
  left: 5%;
  width: 25%;
  height: 25%;
}

.top-right {
  top: 5%;
  right: 5%;
  width: 25%;
  height: 25%;
}

.bottom-left {
  bottom: 5%;
  left: 5%;
  width: 25%;
  height: 25%;
}

.bottom-right {
  bottom: 5%;
  right: 5%;
  width: 25%;
  height: 25%;
}

.modal-container {
  position: relative;
  z-index: 3;
  background: #fff;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  z-index: 4;
  /* Additional styling to ensure the modal is centered */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .background-image {
    display: none;
  }
  .modal-container {
    padding: 1em;
  }
}
</style>
