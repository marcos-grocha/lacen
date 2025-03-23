<template>
  <div class="homepage">
    <main>
      <HeroLacen />
    </main>
  </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  import HeroLacen from '@/components/HeroLacen.vue';

  export default defineComponent({
    name: 'HomePageView',

    components: {
      HeroLacen
    }
  });
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 2rem 0;
  }
</style>