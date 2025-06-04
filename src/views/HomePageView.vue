<template>
  <div class="homepage">
    <main class="main-content">
      <HeroLacen />

      <div class="content-wrapper">
        <div class="content-section">

          <div class="stats-section">
            <div class="stats-header">
              <h3 class="stats-title">Nossos Números</h3>
              <p class="stats-subtitle">Dados que refletem nosso compromisso com a qualidade</p>
            </div>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Anos de Experiência</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">10k+</div>
                <div class="stat-label">Exames Mensais</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Profissionais</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">99%</div>
                <div class="stat-label">Satisfação</div>
              </div>
            </div>
          </div>
    
          <div class="footer-gallery">
            <!-- <h3 class="gallery-heading">Galeria de Imagens</h3> -->
            <div class="gallery-grid">
              <div class="gallery-item" v-for="n in 6" :key="n">
                <div class="gallery-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21,15 16,10 5,21"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQLacen />
    </main>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import HeroLacen from '@/components/HeroLacen.vue';
  import FAQLacen from '@/components/FAQLacen.vue';

  export default defineComponent({
    name: 'HomePageView',

    components: {
      HeroLacen,
      FAQLacen
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

  /* Gallery Section */
  .footer-gallery {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(2, 145, 211, 0.1);
  }

  .gallery-heading {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 1.5rem 0;
    text-align: center;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .gallery-item {
    aspect-ratio: 1;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .gallery-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    transition: all 0.3s ease;
  }

  .gallery-item:hover .gallery-placeholder {
    background: linear-gradient(135deg, #0291d3, #0369a1);
    color: white;
    transform: scale(1.05);
  }

  /* Seção de estatísticas */
  .stats-section {
    padding: var(--spacing-12);
    background: var(--primary-gradient);
    color: var(--white);
    text-align: center;
  }

  .stats-header {
    margin-bottom: var(--spacing-10);
  }

  .stats-title {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    margin: 0 0 var(--spacing-3) 0;
  }

  .stats-subtitle {
    font-size: var(--text-lg);
    color: var(--primary-lighter);
    margin: 0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-8);
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    color: var(--white);
    margin-bottom: var(--spacing-2);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .stat-label {
    font-size: var(--text-lg);
    color: var(--primary-lighter);
    font-weight: var(--font-medium);
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

    .stats-section {
      padding: var(--spacing-8) var(--spacing-5);
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .stats-section {
      padding: var(--spacing-6) var(--spacing-4);
    }

    .stats-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-6);
    }

    .stat-number {
      font-size: var(--text-4xl);
    }
  }
</style>