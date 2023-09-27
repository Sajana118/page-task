<template>
  <div class="first-page">
    <h1>Welcome to Reservation Homepage</h1>
    <button class="btn" @click="openModal">Enter the Page</button>
    <overlaypage :showModal="isModalOpen" @close="closeModal" />
  </div>

</template>

<script>
import overlaypage from './overlay-page.vue';


  export default {
    data() {
      return {
        isModalOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
    },
    components: {
      overlaypage,
    },
  };
</script>
<style>
.first-page{
  background-image: linear-gradient(to bottom, #4283f0, whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 8%;
}
.btn{
  color: #0b0c0d;
  border: none;
  border-radius: 11px;
  height: 67px;
  width: 137px;
  box-shadow:6px 8px 8px 3px rgba(0,0,0,0.25);
  font-size: 15px;
}
</style>