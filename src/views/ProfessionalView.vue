<template>
  <div class="professionals-container">
    <h1 class="professionals-title">Profissionais</h1>
    <div class="professionals-grid">
      <div 
        v-for="professional in professionals" 
        :key="professional.id" 
        class="professional-card"
        :style="{ backgroundImage: `url(${professional.photo})` }"
        @click="openProfessionalDetails(professional)"
      >
        <div class="professional-info">
          <div class="professional-name">{{ professional.name }}</div>
          <div class="professional-role">{{ professional.role }}</div>
        </div>
      </div>
    </div>

    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-close" @click="closeModal">✕</div>
        <div class="modal-body">
          <div class="professional-image">
            <img :src="selectedProfessional.photo" :alt="selectedProfessional.name">
          </div>

          <div class="professional-details">
            <h2 class="professional-name">{{ selectedProfessional.name }}</h2>
            <h3 class="professional-role">{{ selectedProfessional.role }}</h3>

            <div class="professional-bio">
              <p v-if="selectedProfessional.bio">{{ selectedProfessional.bio }}</p>
              <p v-else>DEFAULT DO ELSE: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl cursus tellus eget fringilla eget. Diam eu est id ut leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl cursus tellus eget fringilla eget. Diam eu est id ut leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl cursus tellus eget fringilla eget. Diam eu est id ut leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl cursus tellus eget fringilla eget. Diam eu est id ut leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl cursus tellus eget fringilla eget. Diam eu est id ut leo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const showModal = ref(false)
  const selectedProfessional = ref({})

  const openProfessionalDetails = (professional) => {
    selectedProfessional.value = professional
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }

  const professionals = ref([
    { 
      id: 1, 
      name: 'Fulano Ciclano 1', 
      role: 'Biomedico',
      photo: new URL('@/assets/homem-default.png', import.meta.url).href,
      bio: 'Profissional especializado em análises clínicas, com mais de 10 anos de experiência.'
    },
    { 
      id: 2, 
      name: 'Fulano Ciclano 2', 
      role: 'Biomedico',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href,
      bio: 'Especialista em biologia molecular e microbiologia, com foco em pesquisas inovadoras.'
    },
    { 
      id: 3, 
      name: 'Marcos Guimarães', 
      role: 'Software Developer',
      photo: new URL('@/assets/gmarcos-dev.png', import.meta.url).href,
      bio: 'Software Developer especialista em Ruby on Rails, construindo soluções web através de Desenvolvimento Orientado a Testes (Test Driven Development) e práticas ágeis, garantindo a qualidade do código. Tenho boa familiaridade com Java Spring e, apesar da minha especialização, sou um profissional ávido por conhecimento, determinado, autodidata, adaptável e organizado. Apaixonado pelo processo de aprendizagem em novas tecnologias e motivado a buscar excelência em minhas soluções. Portfólio: https://gmarcos-dev.surge.sh/'
    },
    { 
      id: 4, 
      name: 'Fulano Ciclano 4', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '' 
    },
    { 
      id: 5, 
      name: 'Fulano Ciclano 5', 
      role: 'Desenvolvedora Front-End',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href,
      bio: 'Desenvolvedor full-stack com experiência em Vue.js, Node.js e bancos de dados SQL/NoSQL.'
    },
    { 
      id: 6, 
      name: 'Fulano Ciclano 6', 
      role: 'Biomedico',
      photo: new URL('@/assets/homem-default.png', import.meta.url).href,
      bio: '' 
    },
    { 
      id: 7, 
      name: 'Fulano Ciclano 7', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '' 
    },
    { 
      id: 8, 
      name: 'Fulano Ciclano 8', 
      role: 'Biomedico',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href,
      bio: ''
    },
    { 
      id: 9, 
      name: 'Fulano Ciclano 9', 
      role: 'Biomedico',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href,
      bio: ''
    },
    { 
      id: 10, 
      name: 'Fulano Ciclano 10', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '' 
    },
    { 
      id: 11, 
      name: 'Fulano Ciclano 11', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '' 
    },
    { 
      id: 12, 
      name: 'Fulano Ciclano 12', 
      role: 'Biomedico',
      photo: new URL('@/assets/homem-default.png', import.meta.url).href,
      bio: ''
    }
  ])
</script>

<style scoped>
  .professionals-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .professionals-title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
    color: #333;
  }

  .professionals-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  .professional-card {
    position: relative;
    aspect-ratio: 3/4;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .professional-card:hover {
    transform: scale(1.05);
  }

  .professional-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: rgba(0,0,0,0.5);
    color: white;
  }

  .professional-name {
    font-weight: bold;
    font-size: 14px;
  }

  .professional-role {
    font-size: 12px;
  }

  /* Daqui pra baixo: Estilos do Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: white;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    max-height: 90vh;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    z-index: 10;
    transition: all 0.2s ease;
  }

  .modal-close:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .modal-body {
    display: flex;
    padding: 25px;
  }

  .professional-image {
    width: 40%;
    min-width: 250px;
    max-width: 300px;
    margin-right: 25px;
  }

  .professional-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 3/4;
  }

  .professional-details {
    flex: 1;
    overflow: hidden;
  }

  .professional-details .professional-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  .professional-details .professional-role {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
  }

  .professional-bio {
    max-height: 400px;
    overflow-y: auto;
    font-size: 15px;
    line-height: 1.6;
    color: #444;
  }

  @media (max-width: 1024px) {
    .professionals-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .professionals-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .modal-body {
      flex-direction: column;
      padding: 20px;
    }
    
    .professional-image {
      width: 100%;
      max-width: 250px;
      margin: 0 auto 20px;
    }
  }

  @media (max-width: 480px) {
    .professionals-grid {
      grid-template-columns: 1fr;
    }
  }
</style>