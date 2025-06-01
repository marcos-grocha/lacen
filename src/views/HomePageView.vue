<template>
  <div class="homepage">
    <main class="main-content">
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
  .homepage {
    min-height: 100vh;
    background: var(--subtle-gradient);
  }

  .main-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-20);
    padding: var(--spacing-8) 0;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  /* Separadores visuais entre seções */
  .main-content > *:not(:last-child)::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--primary-gradient);
    margin: var(--spacing-12) auto var(--spacing-8);
    border-radius: var(--border-radius-full);
  }

  @media (max-width: 1024px) {
    .main-content {
      max-width: 90%;
      gap: var(--spacing-16);
      padding: var(--spacing-6) 0;
    }
  }

  @media (max-width: 768px) {
    .main-content {
      gap: var(--spacing-12);
      padding: var(--spacing-4) 0;
    }
    
    .main-content > *:not(:last-child)::after {
      margin: var(--spacing-8) auto var(--spacing-6);
    }
  }
</style>