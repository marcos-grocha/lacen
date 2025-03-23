<template>
  <div class="homepage">
    <main>
      <HeroLacen />
      <LatestNewsLacen />
      <FAQLacen />
      <ContactLacen />
    </main>
  </div>
</template>
  
<script>
  import { defineComponent } from 'vue';

  import HeroLacen from '@/components/HeroLacen.vue';
  import LatestNewsLacen from '@/components/LatestNewsLacen.vue';
  import FAQLacen from '@/components/FAQLacen.vue';
  import ContactLacen from '@/components/ContactLacen.vue';

  export default defineComponent({
    name: 'HomePageView',

    components: {
      HeroLacen,
      LatestNewsLacen,
      FAQLacen,
      ContactLacen
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