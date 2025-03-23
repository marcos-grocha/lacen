<template>
  <div class="homepage">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-gallery">
          <div class="gallery-item" v-for="n in 4" :key="n">
            <svg width="100%" height="100%" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#6B7280" />
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff">
                <tspan x="50%" dy="0">Imagem</tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-logo">
          <h2>LACEN</h2>
        </div>
        <div class="copyright">
          2025 | Governo do Estado
        </div>
    
        <div class="footer-links">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  // Não precisa de lógica por enquanto
</script>

<style scoped>
  .footer {
    background-color: #f0f0f0;
    padding: 2rem 0;
    margin-top: 4rem;
  }

  .footer-content {
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-logo h2 {
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .footer-gallery {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .gallery-item {
    flex: 1;
    aspect-ratio: 1.5/1;
    background-color: #6B7280;
    border-radius: 4px;
    overflow: hidden;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    border-top: 1px solid #ddd;
    color: #666;
    font-size: 0.8rem;
  }

  .footer-links {
    display: flex;
    gap: 1rem;
  }

  .footer-links a {
    color: #666;
    text-decoration: none;
  }
</style>