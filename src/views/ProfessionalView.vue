<template>
  <div class="professionals-container">
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Nossa Equipe</h1>
        <p class="page-subtitle">Conheça os profissionais dedicados que fazem a diferença na saúde pública</p>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="content-section">
        <div class="intro-section">
          <!-- <h2 class="section-title">Profissionais Especializados</h2> -->
          <p class="intro-text">
            Nossa equipe é composta por profissionais altamente qualificados e comprometidos com a excelência 
            na prestação de serviços laboratoriais e de saúde pública. Cada membro contribui com sua expertise 
            para garantir a qualidade e confiabilidade dos nossos resultados.
          </p>
        </div>

        <div class="professionals-grid">
          <div 
            v-for="professional in professionals" 
            :key="professional.id" 
            class="professional-card"
            @click="openProfessionalDetails(professional)"
          >
            <div class="professional-image">
              <img :src="professional.photo" :alt="professional.name" />
              <div class="professional-overlay">
                <div class="overlay-content">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
                  </svg>
                  <span>Ver Perfil</span>
                </div>
              </div>
            </div>
            <div class="professional-info">
              <h3 class="professional-name">{{ professional.name }}</h3>
              <p class="professional-role">{{ professional.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal detalhes -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="modal-body">
          <div class="professional-image-modal">
            <img :src="selectedProfessional.photo" :alt="selectedProfessional.name" />
          </div>

          <div class="professional-details">
            <div class="professional-header">
              <h2 class="professional-name-modal">{{ selectedProfessional.name }}</h2>
              <h3 class="professional-role-modal">{{ selectedProfessional.role }}</h3>
            </div>

            <div class="professional-bio">
              <h4 class="bio-title">Sobre o Profissional</h4>
              <p v-if="selectedProfessional.bio" class="bio-text">{{ selectedProfessional.bio }}</p>
              <p v-else class="bio-text">
                Profissional dedicado e comprometido com a excelência na prestação de serviços de saúde. 
                Com formação sólida e experiência prática, contribui significativamente para os objetivos 
                da nossa instituição, sempre priorizando a qualidade e a segurança nos procedimentos realizados.
              </p>
            </div>

            <div class="professional-contact" v-if="selectedProfessional.website || selectedProfessional.email">
              <h4 class="contact-title">Contato</h4>
              <div class="contact-links">
                <a 
                  v-if="selectedProfessional.website" 
                  :href="selectedProfessional.website" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="contact-link website-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>Link Pessoal</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                  </svg>
                </a>
                
                <a 
                  v-if="selectedProfessional.email" 
                  :href="`mailto:${selectedProfessional.email}`"
                  class="contact-link email-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useProfessionals } from '@/composables/useProfessionals';

  const { professionals } = useProfessionals();
  const showModal = ref(false)
  const selectedProfessional = ref({})

  const openProfessionalDetails = (professional) => {
    selectedProfessional.value = professional
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }
</script>

<style scoped>
  .professionals-container {
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
  }

  /* Seção de introdução */
  .intro-section {
    padding: var(--spacing-10);
    text-align: center;
    background: var(--light-gradient);
    border-bottom: 1px solid var(--gray-200);
  }

  .section-title {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-4) 0;
    font-family: var(--font-family);
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -var(--spacing-2);
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--primary-gradient);
    border-radius: var(--border-radius-full);
  }

  .intro-text {
    font-size: var(--text-lg);
    line-height: 1.8;
    color: var(--gray-700);
    max-width: 800px;
    margin: 0 auto;
  }

  /* Grid de profissionais */
  .professionals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-8);
    padding: var(--spacing-10);
  }

  .professional-card {
    background: var(--white);
    border-radius: var(--border-radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition-all);
    cursor: pointer;
    border: 1px solid var(--gray-200);
  }

  .professional-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }

  .professional-image {
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;
  }

  .professional-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-transform);
  }

  .professional-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary-gradient);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-opacity);
  }

  .professional-card:hover .professional-overlay {
    opacity: 0.9;
  }

  .professional-card:hover .professional-image img {
    transform: scale(1.05);
  }

  .overlay-content {
    text-align: center;
    color: var(--white);
    font-weight: var(--font-semibold);
  }

  .overlay-content svg {
    margin-bottom: var(--spacing-2);
  }

  .professional-info {
    padding: var(--spacing-6);
    text-align: center;
  }

  .professional-name {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-2) 0;
    font-family: var(--font-family);
  }

  .professional-role {
    font-size: var(--text-base);
    color: var(--gray-600);
    margin: 0 0 var(--spacing-4) 0;
  }

  .btn-view-profile:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }

  /* Estilos do Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal);
    padding: var(--spacing-4);
  }

  .modal-content {
    background-color: var(--white);
    border-radius: var(--border-radius-2xl);
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-2xl);
    animation: modalSlideIn 0.3s ease-out;
  }

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .modal-close {
    position: absolute;
    top: var(--spacing-4);
    right: var(--spacing-4);
    width: 40px;
    height: 40px;
    background-color: var(--white);
    color: var(--gray-600);
    border: 1px solid var(--gray-300);
    border-radius: var(--border-radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition-all);
    z-index: 10;
    box-shadow: var(--shadow);
  }

  .modal-close:hover {
    background-color: var(--error-color);
    color: var(--white);
    border-color: var(--error-color);
    transform: scale(1.05);
  }

  .modal-body {
    display: flex;
    padding: var(--spacing-8);
    gap: var(--spacing-8);
    max-height: 80vh;
    overflow-y: auto;
  }

  .professional-image-modal {
    position: relative;
    flex-shrink: 0;
    width: 300px;
  }

  .professional-image-modal img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-xl);
    object-fit: cover;
    aspect-ratio: 3/4;
    box-shadow: var(--shadow-lg);
  }

  .professional-details {
    flex: 1;
    min-width: 0;
  }

  .professional-header {
    margin-bottom: var(--spacing-6);
    padding-bottom: var(--spacing-4);
    border-bottom: 1px solid var(--gray-200);
  }

  .professional-name-modal {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    margin: 0 0 var(--spacing-2) 0;
    color: var(--gray-900);
    font-family: var(--font-family);
  }

  .professional-role-modal {
    font-size: var(--text-xl);
    color: var(--primary-color);
    margin: 0;
    font-weight: var(--font-medium);
  }

  .professional-bio {
    margin-bottom: var(--spacing-6);
  }

  .bio-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-3) 0;
  }

  .bio-text {
    font-size: var(--text-base);
    line-height: 1.7;
    color: var(--gray-700);
    margin: 0;
    text-align: justify;
  }

  .professional-contact {
    margin-top: var(--spacing-6);
    padding-top: var(--spacing-4);
    border-top: 1px solid var(--gray-200);
  }

  .contact-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-4) 0;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    transition: var(--transition-all);
    font-weight: var(--font-medium);
    border: 1px solid var(--gray-300);
    background: var(--white);
    color: var(--gray-700);
  }

  .contact-link:hover {
    transform: translateX(4px);
    box-shadow: var(--shadow-md);
    text-decoration: none;
  }

  .website-link:hover {
    background: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }

  .email-link:hover {
    background: var(--success-color);
    color: var(--white);
    border-color: var(--success-color);
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .page-title {
      font-size: var(--text-4xl);
    }
    
    .content-wrapper {
      padding: var(--spacing-10) var(--spacing-4);
    }
    
    .intro-section,
    .professionals-grid {
      padding: var(--spacing-8) var(--spacing-5);
    }
    
    .professionals-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-6);
    }
    
    .modal-body {
      flex-direction: column;
      padding: var(--spacing-6);
      gap: var(--spacing-6);
    }
    
    .professional-image-modal {
      width: 100%;
      max-width: 250px;
      margin: 0 auto;
    }

    .professional-name-modal {
      font-size: var(--text-2xl);
    }

    .professional-role-modal {
      font-size: var(--text-lg);
    }
  }

  @media (max-width: 480px) {
    .page-header {
      padding: var(--spacing-16) 0;
    }
    
    .page-title {
      font-size: var(--text-3xl);
    }
    
    .professionals-grid {
      grid-template-columns: 1fr;
    }
    
    .intro-section,
    .professionals-grid {
      padding: var(--spacing-6) var(--spacing-4);
    }
    
    .modal-body {
      padding: var(--spacing-4);
    }

    .professional-image {
      height: 280px;
    }
  }
</style>