<template>
  <div class="scroll-to-top" v-show="showButton" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const showButton = ref(false);

  const checkScroll = () => {
    showButton.value = window.scrollY > 300;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  onMounted(() => {
    window.addEventListener('scroll', checkScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
  });
</script>

<style scoped>
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    background-color: #333;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 999;
  }

  .scroll-to-top:hover {
    background-color: #555;
    transform: translateY(-3px);
  }
</style>