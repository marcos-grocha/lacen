<template>
  <div class="institucional-container">
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Laboratório Central de Saúde Pública</h1>
        <p class="page-subtitle">Conheça nossa história, nossas atividades e nossa estrutura administrativa</p>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="content-section">
        <!-- Seções de texto organizadas em grid -->
        <div class="text-sections">
          <div class="text-block card">
            <div class="card-header">
              <h3 class="block-title">Atividades Lacen</h3>
            </div>
            <div class="card-body">
              <p class="highlight-text">
                <strong>O LACEN realiza as seguintes atividades</strong>
              </p>
              <p class="block-text">
                Desenvolver e executar Políticas de Assistência Laboratorial em consonância com os Núcleos de Vigilância em Saúde;
              </p>
              <p class="block-text">
                Desenvolver ações de diagnóstico, pesquisa e controle da qualidade de produtos e serviços;
              </p>
              <p class="block-text">
                Captação, incorporação e o repasse de tecnologia para a Rede de Laboratórios de Saúde Pública no âmbito estadual;
              </p>
            </div>
          </div>

          <div class="text-block card">
            <div class="card-header">
              <h3 class="block-title">Estrutura Administrativa</h3>
            </div>
            <div class="card-body">
              <p class="highlight-text">
                <strong>SUPERINTENDÊNCIA</strong><br>
                Cliomar Alves Santos
              </p>
              <p class="block-text">
                Email: cliomar.santos@fsph.se.gov.br
              </p>
              <p class="block-text">
                Tel.: (79) 3234-6004
              </p>
            </div>
            <div class="card-body">
              <p class="highlight-text">
                <strong>ASSESSORIA TÉCNICA</strong><br>
                Aline Rafaelle Rocha Almeida de Azevedo Marinho
              </p>
              <p class="block-text">
                Email: aline.marinho@fsph.se.gov.br
              </p>
              <p class="block-text">
                Tel.: (79) 3234-6004
              </p>
            </div>
            <div class="card-body">
              <p class="highlight-text">
                <strong>GERÊNCIA DE MICROBIOLOGIA - GEMIC</strong><br>
                Lucyano Renovato Jacob
              </p>
              <p class="block-text">
                E-mail: lucyano.jacob@fsph.se.gov.br
              </p>
              <p class="block-text">
                Tel.: 3234-6008
              </p>
            </div>
          </div>

          <div class="text-block card">
            <div class="card-header">
              <h3 class="block-title">Nossos Valores</h3>
            </div>
            <div class="card-body">
              <div class="values-grid">
                <div class="value-item">
                  <div class="value-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="value-content">
                    <h4 class="value-title">Excelência</h4>
                    <p class="value-description">Compromisso com a qualidade em todos os processos</p>
                  </div>
                </div>
                
                <div class="value-item">
                  <div class="value-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="value-content">
                    <h4 class="value-title">Confiabilidade</h4>
                    <p class="value-description">Resultados precisos e seguros</p>
                  </div>
                </div>
                
                <div class="value-item">
                  <div class="value-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="value-content">
                    <h4 class="value-title">Transparência</h4>
                    <p class="value-description">Comunicação clara e processos transparentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
  // Por enquanto não há necessidade de JS
</script>

<style scoped>
  .institucional-container {
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

  /* Container principal */
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-20) var(--spacing-5);
  }

  .content-section {
    background: var(--white);
    border-radius: var(--border-radius-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    margin-bottom: var(--spacing-8);
  }

  /* Conteúdo principal */
  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    align-items: center;
  }

  .image-container {
    padding: var(--spacing-10);
    background: var(--light-gradient);
    position: relative;
  }

  .placeholder-image {
    background: var(--primary-gradient);
    border-radius: var(--border-radius-xl);
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: var(--transition-transform);
  }

  .placeholder-image:hover {
    transform: scale(1.02);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    opacity: 0;
    transition: var(--transition-opacity);
  }

  .placeholder-image:hover .image-overlay {
    opacity: 1;
  }

  .image-icon {
    opacity: 0.9;
    z-index: 1;
    position: relative;
  }

  .text-content {
    padding: var(--spacing-10);
  }

  .section-title {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-6) 0;
    font-family: var(--font-family);
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -var(--spacing-2);
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary-gradient);
    border-radius: var(--border-radius-full);
  }

  .intro-text p {
    font-size: var(--text-lg);
    line-height: 1.8;
    color: var(--gray-700);
    margin-bottom: var(--spacing-5);
    text-align: justify;
  }

  .highlight-text {
    color: var(--primary-color);
    font-size: var(--text-xl);
    margin-bottom: var(--spacing-6) !important;
  }

  .cta-section {
    margin-top: var(--spacing-8);
  }

  .btn {
    padding: var(--spacing-4) var(--spacing-8);
    font-size: var(--text-lg);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  /* Seções de texto */
  .text-sections {
    padding: var(--spacing-10);
    background: var(--gray-50);
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .text-block {
    transition: var(--transition-all);
  }

  .text-block:hover {
    transform: translateY(-4px);
  }

  .block-title {
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0;
    font-family: var(--font-family);
  }

  .block-text {
    font-size: var(--text-base);
    line-height: 1.8;
    color: var(--gray-700);
    margin-bottom: var(--spacing-4);
    text-align: justify;
  }

  .block-text:last-child {
    margin-bottom: 0;
  }

  /* Grid de valores */
  .values-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }

  .value-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-4);
    padding: var(--spacing-4);
    border-radius: var(--border-radius-lg);
    background: var(--gray-50);
    transition: var(--transition-all);
  }

  .value-item:hover {
    background: var(--primary-lighter);
    transform: translateX(8px);
  }

  .value-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: var(--border-radius-full);
    background: var(--primary-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
  }

  .value-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-1) 0;
  }

  .value-description {
    font-size: var(--text-sm);
    color: var(--gray-600);
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: var(--text-4xl);
    }
    
    .main-content {
      grid-template-columns: 1fr;
    }
    
    .content-wrapper {
      padding: var(--spacing-10) var(--spacing-4);
    }
    
    .image-container,
    .text-content,
    .text-sections,
    .stats-section {
      padding: var(--spacing-8) var(--spacing-5);
    }
    
    .section-title {
      font-size: var(--text-2xl);
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .page-header {
      padding: var(--spacing-16) 0;
    }
    
    .page-title {
      font-size: var(--text-3xl);
    }
    
    .image-container,
    .text-content,
    .text-sections,
    .stats-section {
      padding: var(--spacing-6) var(--spacing-4);
    }
    
    .section-title {
      font-size: var(--text-xl);
    }
    
    .intro-text p,
    .block-text {
      font-size: var(--text-base);
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