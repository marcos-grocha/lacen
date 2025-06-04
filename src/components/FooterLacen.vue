<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-content">
              <div class="logo-icon">
                <img src="../assets/img/logo/logo-fsph-govse-s-fundo.png" alt="FSPH Logo" class="logo-image">
              </div>
            </div>
          </div>
          <p class="footer-description">
            Laboratório Central de Saúde Pública
          </p>
          <p class="footer-description">
            Fundação de Saúde Parreiras Horta (FSPH)
          </p>
          <p class="footer-description">
            Governo do Estado de Sergipe
          </p>
        </div>

        <!-- Links Section -->
        <div class="footer-links">
          <div class="footer-column">
            <h3 class="footer-heading">Serviços</h3>
            <ul class="footer-nav">
              <li><a href="#" class="footer-link">Análises Clínicas</a></li>
              <li><a href="#" class="footer-link">Vigilância Sanitária</a></li>
              <li><a href="#" class="footer-link">Microbiologia</a></li>
              <li><a href="#" class="footer-link">Parasitologia</a></li>
              <li><a href="#" class="footer-link">Química</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="footer-heading">Atendimento</h3>
            <ul class="footer-nav">
              <li><a href="#" class="footer-link">Central de Atendimento</a></li>
              <li><a href="#" class="footer-link">Perguntas Frequentes</a></li>
              <li><a href="#" class="footer-link">Ouvidoria</a></li>
              <li><a href="#" class="footer-link">Acessibilidade</a></li>
              <li><a href="#" class="footer-link">Política de Privacidade</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="footer-heading">Contato</h3>
            <div class="contact-info">
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>R. Campo do Brito, 551<br>Salgado Filho<br>Aracaju - SE, 49037-120</span>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(79) 3259-8100</span>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>contato@lacen.se.gov.br</span>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                </svg>
                <span>Segunda a sexta: 8h às 17h<br>Plantão 24h para emergências</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; 2025 - LACEN</p>
          </div>
          
          <div class="footer-bottom-links">
            <a href="#" class="bottom-link">Governo do Estado de Sergipe</a>
          </div>
          
          <div class="gov-links">
            <a href="#" class="gov-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              gov.br
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

  .logo-image {
    width: 256px;
    height: 64px;
    object-fit: contain;
  }

  .footer {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    font-family: 'Roboto', sans-serif;
    margin-top: 4rem;
    position: relative;
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #0291d3, transparent);
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Main Footer Content */
  .footer-main {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    gap: 3rem;
    padding: 3rem 0;
    border-bottom: 1px solid rgba(2, 145, 211, 0.1);
  }

  /* Brand Section */
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .footer-logo .logo-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    font-size: 1.75rem;
    font-weight: 700;
    color: #0291d3;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .footer-description {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.875rem;
    margin: 0;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: white;
    border-radius: 12px;
    color: #64748b;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .social-link:hover {
    background: #0291d3;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(2, 145, 211, 0.3);
  }

  /* Links Section */
  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-heading {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .footer-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-link {
    color: #64748b;
    text-decoration: none;
    font-size: 0.875rem;
    transition: all 0.2s ease;
    position: relative;
    padding-left: 0;
  }

  .footer-link:hover {
    color: #0291d3;
    padding-left: 0.5rem;
  }

  .footer-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: #0291d3;
    transition: width 0.2s ease;
  }

  .footer-link:hover::before {
    width: 0.25rem;
  }

  /* Contact Info */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    color: #64748b;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .contact-item svg {
    margin-top: 0.125rem;
    color: #0291d3;
    flex-shrink: 0;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Bottom Footer */
  .footer-bottom {
    background: linear-gradient(135deg, #1e293b, #334155);
    color: white;
    padding: 1.5rem 0;
    margin: 0 -1rem;
  }

  .footer-bottom-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .copyright {
    font-size: 0.75rem;
    color: #cbd5e1;
    line-height: 1.4;
  }

  .copyright p {
    margin: 0;
  }

  .footer-bottom-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .bottom-link {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 0.75rem;
    transition: color 0.2s ease;
  }

  .bottom-link:hover {
    color: white;
  }

  .gov-links {
    display: flex;
    gap: 1rem;
  }

  .gov-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #cbd5e1;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .gov-link:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  /* Mobile Responsive (tentar dar atenção ao tal do MF)*/
  @media (max-width: 768px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem 0;
    }
    
    .footer-links {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .footer-bottom-content {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
    
    .footer-bottom-links {
      justify-content: center;
    }
    
    .social-links {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .footer-links {
      grid-template-columns: 1fr;
    }
    
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .logo-text {
      font-size: 1.5rem;
    }
    
    .footer-bottom-links {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
</style>