<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">🏥</span>
          <span class="badge-text">Laboratório Central de Saúde Pública</span>
        </div>
        
        <h1 class="hero-title">
          Excelência em 
          <span class="title-highlight">Análises Laboratoriais</span>
          e Saúde Pública. 
        </h1>
        
        <p class="hero-description">
          Comprometido com a saúde pública de Sergipe, o LACEN oferece serviços especializados 
          em análises clínicas, microbiologia, parasitologia e química com tecnologia de ponta 
          e profissionais altamente qualificados. Unidade gerida pela Fundação de Saúde Parreiras Horta (FSPH).
        </p>
        
        <div class="hero-actions">
          <button class="btn btn-primary hero-btn-primary">
            <span>Nossos Serviços</span>
            <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <button class="btn btn-secondary hero-btn-secondary">
            <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Contato</span>
          </button>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Anos de Experiência</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">50k+</div>
            <div class="stat-label">Exames Realizados</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Atendimento</div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-image-container">
          <div class="hero-image-backdrop"></div>
          <div class="hero-image-main">
            <!-- Ícone de laboratório/microscópio -->
            <svg class="hero-icon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Microscópio simplificado -->
              <defs>
                <linearGradient id="microscopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0291d3"/>
                  <stop offset="100%" style="stop-color:#0369a1"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <!-- Base do microscópio -->
              <ellipse cx="100" cy="180" rx="60" ry="8" fill="url(#microscopeGradient)" opacity="0.3"/>
              <rect x="70" y="160" width="60" height="20" rx="4" fill="url(#microscopeGradient)"/>
              
              <!-- Braço principal -->
              <rect x="95" y="80" width="10" height="80" fill="url(#microscopeGradient)"/>
              
              <!-- Objetivas -->
              <circle cx="100" cy="120" r="15" fill="url(#microscopeGradient)" filter="url(#glow)"/>
              <circle cx="100" cy="120" r="8" fill="#ffffff"/>
              
              <!-- Ocular -->
              <rect x="95" y="60" width="10" height="25" rx="5" fill="url(#microscopeGradient)"/>
              <circle cx="100" cy="55" r="8" fill="url(#microscopeGradient)"/>
              
              <!-- Platina -->
              <rect x="80" y="110" width="40" height="4" fill="url(#microscopeGradient)"/>
              
              <!-- Elementos decorativos -->
              <circle cx="60" cy="60" r="3" fill="#0291d3" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="140" cy="80" r="2" fill="#0291d3" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="50" cy="120" r="2" fill="#0291d3" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          
          <!-- Elementos flutuantes  -->
          <div class="floating-elements">
            <div class="floating-card card-1">
              <div class="card-icon">🧬</div>
              <div class="card-text">DNA Analysis</div>
            </div>
            <div class="floating-card card-2">
              <div class="card-icon">🦠</div>
              <div class="card-text">Microbiologia</div>
            </div>
            <div class="floating-card card-3">
              <div class="card-icon">⚗️</div>
              <div class="card-text">Química</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  // Não precisa de lógica por enquanto
</script>

<style scoped>
  .hero {
    padding: var(--spacing-20) 0;
    background: linear-gradient(135deg, 
      rgba(2, 145, 211, 0.05) 0%, 
      rgba(255, 255, 255, 0.8) 50%, 
      rgba(2, 145, 211, 0.05) 100%);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230291d3' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }

  .hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-6);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-16);
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-2);
    background: rgba(2, 145, 211, 0.1);
    border: 1px solid rgba(2, 145, 211, 0.2);
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--border-radius-full);
    width: fit-content;
    backdrop-filter: blur(10px);
  }

  .badge-icon {
    font-size: var(--text-lg);
  }

  .badge-text {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--primary-color);
  }

  .hero-title {
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    line-height: 1.1;
    color: var(--gray-900);
    margin: 0;
  }

  .title-highlight {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
  }

  .hero-description {
    font-size: var(--text-lg);
    line-height: 1.7;
    color: var(--gray-600);
    max-width: 90%;
    margin: 0;
  }

  .hero-actions {
    display: flex;
    gap: var(--spacing-4);
    margin-top: var(--spacing-2);
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3) var(--spacing-6);
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    border-radius: var(--border-radius-xl);
    transition: var(--transition-all);
    position: relative;
    overflow: hidden;
  }

  .hero-btn-primary {
    background: var(--primary-gradient);
    color: var(--white);
    border: none;
    box-shadow: var(--shadow-lg);
  }

  .hero-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }

  .hero-btn-secondary {
    background: var(--white);
    color: var(--gray-700);
    border: 1px solid var(--gray-200);
    box-shadow: var(--shadow);
  }

  .hero-btn-secondary:hover {
    background: var(--gray-50);
    border-color: var(--primary-color);
    color: var(--primary-color);
    transform: translateY(-1px);
  }

  .btn-icon {
    transition: var(--transition-transform);
  }

  .hero-btn-primary:hover .btn-icon {
    transform: translateX(2px);
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: var(--spacing-6);
    margin-top: var(--spacing-4);
    padding-top: var(--spacing-6);
    border-top: 1px solid var(--gray-200);
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--primary-color);
    line-height: 1;
  }

  .stat-label {
    font-size: var(--text-sm);
    color: var(--gray-600);
    margin-top: var(--spacing-1);
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: var(--gray-200);
  }

  .hero-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-image-container {
    position: relative;
    width: 400px;
    height: 400px;
  }

  .hero-image-backdrop {
    position: absolute;
    inset: 0;
    background: var(--primary-gradient);
    border-radius: 50%;
    opacity: 0.1;
    animation: pulse 4s ease-in-out infinite;
  }

  .hero-image-main {
    position: absolute;
    inset: var(--spacing-8);
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2xl);
    backdrop-filter: blur(10px);
  }

  .hero-icon {
    width: 200px;
    height: 200px;
  }

  .floating-elements {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .floating-card {
    position: absolute;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-3) var(--spacing-4);
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(10px);
    animation: float 6s ease-in-out infinite;
  }

  .card-1 {
    top: 20%;
    left: -20%;
    animation-delay: 0s;
  }

  .card-2 {
    top: 60%;
    right: -25%;
    animation-delay: 2s;
  }

  .card-3 {
    bottom: 20%;
    left: -15%;
    animation-delay: 4s;
  }

  .card-icon {
    font-size: var(--text-lg);
  }

  .card-text {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--gray-700);
  }

  /* Animações */
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.15;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-10px) rotate(1deg);
    }
    66% {
      transform: translateY(5px) rotate(-1deg);
    }
  }

  @media (max-width: 1024px) {
    .hero-container {
      grid-template-columns: 1fr;
      gap: var(--spacing-12);
      text-align: center;
    }
    
    .hero-visual {
      order: -1;
    }
    
    .hero-image-container {
      width: 300px;
      height: 300px;
    }
    
    .hero-title {
      font-size: var(--text-4xl);
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: var(--spacing-16) 0;
    }
    
    .hero-container {
      gap: var(--spacing-8);
      padding: 0 var(--spacing-4);
    }
    
    .hero-title {
      font-size: var(--text-3xl);
    }
    
    .hero-description {
      font-size: var(--text-base);
      max-width: 100%;
    }
    
    .hero-actions {
      flex-direction: column;
      align-items: center;
    }
    
    .hero-btn-primary,
    .hero-btn-secondary {
      width: 100%;
      justify-content: center;
      max-width: 280px;
    }
    
    .hero-stats {
      flex-direction: column;
      gap: var(--spacing-4);
    }
    
    .stat-divider {
      display: none;
    }
    
    .hero-image-container {
      width: 250px;
      height: 250px;
    }
    
    .floating-card {
      display: none;
    }
  }
</style>