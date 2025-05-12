<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-gallery">
        <div class="gallery-item" v-for="n in 4" :key="n">
          <div class="gallery-content">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h4>Serviço {{ n }}</h4>
            <p>Descrição breve do serviço oferecido</p>
          </div>
        </div>
      </div>

      <div class="footer-main">
        <div class="footer-brand">
          <h2 class="footer-logo">LACEN</h2>
          <p class="footer-tagline">Saúde Pública de Qualidade</p>
        </div>

        <div class="footer-nav">
          <div class="nav-section">
            <h4>Institucional</h4>
            <a href="#">Sobre Nós</a>
            <a href="#">Notícias</a>
            <a href="#">Contato</a>
          </div>
          <div class="nav-section">
            <h4>Serviços</h4>
            <a href="#">Exames</a>
            <a href="#">Laboratórios</a>
            <a href="#">Protocolos</a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      <div class="copyright-text">© 2025 Governo do Estado - Todos os direitos reservados</div>
      <div class="government-logo">
        <!-- Adicione aqui o SVG do logo do governo -->
      </div>
    </div>
  </footer>
</template>

<script setup>
// Lógica pode ser adicionada aqui se necessário
</script>

<style scoped>
.footer {
  background: linear-gradient(to right,#0291d3, #0ea5e9);
  color: #f9fafb;
  padding: 4rem 0 1rem;
  position: relative;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  padding-left: 1.5rem;
  padding-right: 1,5rem;
}

/* Galeria */
.footer-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.gallery-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
}

.gallery-content svg {
  width: 40px;
  height: 40px;
}

.gallery-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
}

.gallery-content p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 350px;
}

.footer-logo {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-size: 1rem;
  opacity: 0.9;
}

.footer-nav {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.nav-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.nav-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.nav-section a {
  color: #f3f4f6;
  text-decoration: none;
  transition: opacity 0.3s ease;
  font-size: 0.95rem;
}

.nav-section a:hover {
  opacity: 0.8;
}

.footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 2rem;
}

.copyright-text {
  display: flex;
  padding-left: 750px;
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-main {
    gap: 2rem;
  }
  
  .footer-nav {
    gap: 2rem;
  }
  
  .footer-copyright {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>