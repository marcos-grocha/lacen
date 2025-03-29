<template>
  <div class="professionals-container">
    <h1 class="professionals-title">Profissionais</h1>
    <div class="professionals-grid">
      <div 
        v-for="professional in professionals" 
        :key="professional.id" 
        class="professional-card"
        :style="{ backgroundImage: `url(${professional.photo})` }"
      >
        <div class="professional-info">
          <div class="professional-name">{{ professional.name }}</div>
          <div class="professional-role">{{ professional.role }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const professionals = ref([
    { 
      id: 1, 
      name: 'Fulano Ciclano 1', 
      role: 'Biomedico',
      photo: new URL('@/assets/homem-default.png', import.meta.url).href
    },
    { 
      id: 2, 
      name: 'Fulano Ciclano 2', 
      role: 'Biomedico',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href
    },
    { 
      id: 3, 
      name: 'Marcos Guimarães', 
      role: 'Software Developer',
      photo: new URL('@/assets/gmarcos-dev.png', import.meta.url).href
    },
    { 
      id: 4, 
      name: 'Fulano Ciclano 4', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400' 
    },
    { 
      id: 5, 
      name: 'Fulano Ciclano 5', 
      role: 'Biomedico',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href
    },
    { 
      id: 6, 
      name: 'Fulano Ciclano 6', 
      role: 'Biomedico',
      photo: new URL('@/assets/homem-default.png', import.meta.url).href 
    },
    { 
      id: 7, 
      name: 'Fulano Ciclano 7', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400' 
    },
    { 
      id: 8, 
      name: 'Fulano Ciclano 8', 
      role: 'Biomedico',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href
    },
    { 
      id: 9, 
      name: 'Fulano Ciclano', 
      role: 'Biomedico',
      photo: new URL('@/assets/mulher-default.png', import.meta.url).href
    },
    { 
      id: 10, 
      name: 'Fulano Ciclano', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400' 
    },
    { 
      id: 11, 
      name: 'Fulano Ciclano', 
      role: 'Biomedico',
      photo: 'https://via.placeholder.com/300x400' 
    },
    { 
      id: 12, 
      name: 'Fulano Ciclano', 
      role: 'Biomedico',
      photo: new URL('@/assets/homem-default.png', import.meta.url).href
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

  @media (max-width: 1024px) {
    .professionals-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .professionals-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .professionals-grid {
      grid-template-columns: 1fr;
    }
  }
</style>