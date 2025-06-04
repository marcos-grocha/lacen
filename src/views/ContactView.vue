<template>
  <div class="faq-container">
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Contato</h1>
        <p class="page-subtitle">Precisa falar com a gente?</p>
      </div>
    </div>
    <ContactLacen />
  </div>
</template>

<script setup>
  import ContactLacen from '@/components/ContactLacen.vue';
</script>

<style>
  .contact-container {
    min-height: 100vh;
    background: var(--subtle-gradient);
  }

  /* Header da página */
  .page-header {
    background: var(--primary-gradient);
    padding: var(--spacing-20) 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .page-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .header-content {
    position: relative;
    z-index: 1;
  }

  .page-title {
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    color: var(--white);
    margin: 0 0 var(--spacing-4) 0;
    font-family: var(--font-family);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .page-subtitle {
    font-size: var(--text-xl);
    color: var(--primary-lighter);
    margin: 0;
    font-weight: var(--font-normal);
  }
</style>