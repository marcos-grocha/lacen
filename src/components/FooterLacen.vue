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
              <li><a href="https://www.linkedin.com/in/marcos-grocha/" class="footer-link">Central de Atendimento</a></li>
              <li><a href="https://www.linkedin.com/in/marcos-grocha/" class="footer-link">Perguntas Frequentes</a></li>
              <li><a href="https://www.linkedin.com/in/marcos-grocha/" class="footer-link">Ouvidoria</a></li>
              <li><a href="https://www.linkedin.com/in/marcos-grocha/" class="footer-link">Acessibilidade</a></li>
              <li><a href="https://www.linkedin.com/in/marcos-grocha/" class="footer-link">Política de Privacidade</a></li>
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
            <a href="https://www.linkedin.com/in/marcos-grocha/" class="bottom-link">Governo do Estado de Sergipe</a>
          </div>
          
          <div class="gov-links">
            <a href="https://www.linkedin.com/in/marcos-grocha/" class="gov-link">
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
  .logo-image {
    width: 256px;
    height: 64px;
    object-fit: contain;
  }

  .footer {
    background: var(--light-gradient);
    font-family: var(--font-family);
    margin-top: var(--spacing-16);
    position: relative;
    transition: var(--transition-all);
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-4);
  }

  /* Main Footer Content */
  .footer-main {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    gap: var(--spacing-12);
    padding: var(--spacing-12) 0;
    border-bottom: 1px solid var(--gray-200);
  }

  /* Brand Section */
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .footer-logo .logo-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-4);
  }

  .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    color: var(--primary-color);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .footer-description {
    color: var(--gray-600);
    line-height: 1.6;
    font-size: var(--text-sm);
    margin: 0;
    transition: var(--transition-colors);
  }

  .social-links {
    display: flex;
    gap: var(--spacing-4);
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: var(--white);
    border-radius: var(--border-radius-lg);
    color: var(--gray-600);
    text-decoration: none;
    transition: var(--transition-all);
    box-shadow: var(--shadow);
    border: 1px solid var(--gray-200);
  }

  .social-link:hover {
    background: var(--primary-color);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(2, 145, 211, 0.3);
    border-color: var(--primary-color);
  }

  /* Links Section */
  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-8);
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }

  .footer-heading {
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0;
    margin-bottom: var(--spacing-2);
    transition: var(--transition-colors);
  }

  .footer-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
  }

  .footer-link {
    color: var(--gray-600);
    text-decoration: none;
    font-size: var(--text-sm);
    transition: var(--transition-all);
    position: relative;
    padding-left: 0;
  }

  .footer-link:hover {
    color: var(--primary-color);
    padding-left: var(--spacing-2);
  }

  .footer-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.2s ease;
  }

  .footer-link:hover::before {
    width: var(--spacing-1);
  }

  /* Contact Info */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-3);
    color: var(--gray-600);
    font-size: var(--text-sm);
    line-height: 1.5;
    transition: var(--transition-colors);
  }

  .contact-item svg {
    margin-top: var(--spacing-0-5);
    color: var(--primary-color);
    flex-shrink: 0;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Bottom Footer */
  .footer-bottom {
    background: var(--gray-800);
    color: var(--white);
    padding: var(--spacing-6) 0;
    margin: 0 calc(-1 * var(--spacing-4));
    transition: var(--transition-all);
  }

  .footer-bottom-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-4);
  }

  .copyright {
    font-size: var(--text-xs);
    color: var(--gray-400);
    line-height: 1.4;
    transition: var(--transition-colors);
  }

  .copyright p {
    margin: 0;
  }

  .footer-bottom-links {
    display: flex;
    gap: var(--spacing-6);
    flex-wrap: wrap;
  }

  .bottom-link {
    color: var(--gray-400);
    text-decoration: none;
    font-size: var(--text-xs);
    transition: var(--transition-colors);
  }

  .bottom-link:hover {
    color: var(--white);
  }

  .gov-links {
    display: flex;
    gap: var(--spacing-4);
  }

  .gov-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    color: var(--gray-400);
    text-decoration: none;
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
    padding: var(--spacing-2) var(--spacing-4);
    background: var(--gray-700);
    border-radius: var(--border-radius);
    transition: var(--transition-all);
    border: 1px solid var(--gray-600);
  }

  .gov-link:hover {
    background: var(--gray-600);
    color: var(--white);
    border-color: var(--gray-500);
  }

  /* Estilos específicos para modo escuro */
  :root.dark-theme .footer-bottom {
    background: var(--gray-900);
  }

  :root.dark-theme .gov-link {
    background: var(--gray-800);
    border-color: var(--gray-700);
  }

  :root.dark-theme .gov-link:hover {
    background: var(--gray-700);
    border-color: var(--gray-600);
  }

  /* Mobile Responsive (tentar dar atenção ao tal do MF)*/
  @media (max-width: 768px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: var(--spacing-8);
      padding: var(--spacing-8) 0;
    }
    
    .footer-links {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-6);
    }
    
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .footer-bottom-content {
      flex-direction: column;
      text-align: center;
      gap: var(--spacing-6);
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
      font-size: var(--text-2xl);
    }
    
    .footer-bottom-links {
      flex-direction: column;
      gap: var(--spacing-3);
    }
  }
</style>