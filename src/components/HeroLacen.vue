<template>
  <section class="hero">
    <div class="hero-content">
      <h2 class="hero-title">HeroSection LACEN!</h2>
      <p class="hero-description">
        Aqui uma descrição bem... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit, sagittis tempor turpis malesuada at. Fusce nunc magna.
      </p>
    </div>

    <div class="hero-image">
      <svg width="100%" height="100%" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#6B7280" />
        <circle cx="70" cy="50" r="15" fill="#ffffff" />
        <polyline points="40,100 70,70 100,100 130,80" stroke="#ffffff" stroke-width="3" fill="none" />
      </svg>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 0;
  }

  .hero-content {
    flex: 1;
  }

  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .hero-description {
    padding-left: 10px;
    color: #333;
    max-width: 90%;
  }

  .hero-image {
    flex: 1;
    max-width: 300px;
    background-color: #6B7280;
    border-radius: 8px;
    overflow: hidden;
  }
</style>