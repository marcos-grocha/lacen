<template>
  <section class="latest-news">
    <div class="section-header">
      <h2>Últimas Notícias</h2>
      <div class="pagination-controls">
        <button class="prev-btn">←</button>
        <button class="next-btn">→</button>
      </div>
    </div>
    
    <div class="news-grid">
      <div class="news-card" v-for="(item, index) in newsItems" :key="index">
        <div class="news-image">
          <svg width="100%" height="100%" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#6B7280" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff">
              <tspan x="50%" dy="0">Imagem</tspan>
            </text>
          </svg>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <a :href="item.link" class="cta-button">Ler notícia completa</a>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  const newsItems = ref([
    {
      title: 'Título da Notícia',
      description: 'Descrição da Notícia... Aqui um texto qualquer para exemplo grande.',
      link: '#'
    },
    {
      title: 'Título da Notícia',
      description: 'Descrição da Notícia... Aqui um texto qualquer para exemplo grande.',
      link: '#'
    },
    {
      title: 'Título da Notícia',
      description: 'Descrição da Notícia... Aqui um texto qualquer para exemplo grande.',
      link: '#'
    },
    {
      title: 'Título da Notícia',
      description: 'Descrição da Notícia... Aqui um texto qualquer para exemplo grande.',
      link: '#'
    }
  ]);
</script>

<style scoped>
  .latest-news {
    padding: 2rem 0;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .pagination-controls {
    display: flex;
    gap: 0.5rem;
  }

  .pagination-controls button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .news-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .news-image {
    background-color: #6B7280;
    border-radius: 8px;
    aspect-ratio: 4/3;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .news-card h3 {
    font-size: 1rem;
    margin: 0;
  }

  .news-card p {
    font-size: 0.875rem;
    color: #666;
    margin: 0;
  }

  .cta-button {
    margin-top: auto;
    display: inline-block;
    background-color: #222;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.75rem;
    text-align: center;
    margin-top: 1rem;
  }
</style>