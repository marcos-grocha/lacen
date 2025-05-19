<template>
  <section class="faq-section">
    <h2>Perguntas Frequentes</h2>
    
    <div class="faq-container">
      <div class="faq-list">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index" 
          class="faq-item"
          :class="{ active: activeIndex === index }"
        >
          <div class="faq-question" @click="toggleItem(index)">
            <span>{{ item.question }}</span>
            <span class="icon">{{ activeIndex === index ? '−' : '+' }}</span>
          </div>
          <div class="faq-answer" v-show="activeIndex === index">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
      
      <div class="faq-detail" v-if="selectedFaq">
        <h3>{{ selectedFaq.question }}</h3>
        <div class="faq-detail-content">
          {{ selectedFaq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const faqItems = ref([
    {
      question: 'Primeira pergunta frequente?',
      answer: 'Resposta da pergunta, exemplo maior: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question: 'Segunda pergunta frequente?',
      answer: 'Resposta da pergunta, exemplo maior: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit, sagittis tempor turpis malesuada at.'
    },
    {
      question: 'Terceira pergunta frequente?',
      answer: 'Resposta da pergunta, exemplo maior: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit, sagittis tempor turpis malesuada at.'
    },
    {
      question: 'Quarta pergunta frequente?',
      answer: 'Resposta da pergunta, exemplo maior: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit, sagittis tempor turpis malesuada at.'
    }
  ]);

  const activeIndex = ref(1); // Segundo item começa aberto

  const selectedFaq = computed(() => {
    return {
      question: 'Talvez uma pergunta muito frequente?',
      answer: `Uma resposta bem elaborada... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu, dolor. 
      Maecenas fugiat volutm id mauris semper elit. Sit eu nunc auctor felis, dignissim ut ullamcorper.
      Tortor non convallis vel turpis nec odio. Nulla faucibus pharetra ecclesiastique placerat vulputate tristique.
      Vitae magna quis lorem. Ut nunc commodo ullamcorper aliquam. Nec, bibendum vitae vitae. Viverra 
      commodo pharetra lectus vulputate orci ut ultrices eu sit volutpat. Pretium sagittis.
      In massa quam cursus. Amet, non quyibib futrum luctus`
    };
  });

  function toggleItem(index) {
    if (activeIndex.value === index) {
      activeIndex.value = null;
    } else {
      activeIndex.value = index;
    }
  }
</script>

<style scoped>
  .faq-section {
    padding: 2rem 0;
  }

  .faq-container {
    display: flex;
    gap: 2rem;
  }

  .faq-list {
    flex: 1;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow: hidden;
  }

  .faq-item {
    border-bottom: 1px solid #e5e5e5;
  }

  .faq-item:last-child {
    border-bottom: none;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
    font-weight: bold;
  }

  .faq-question .icon {
    font-size: 1.2rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem;
    color: #666;
  }

  .faq-detail {
    flex: 1;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 1.5rem;
  }

  .faq-detail h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .faq-detail-content {
    color: #333;
    line-height: 1.6;
  }
  .faq-question {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;
}
.faq-question:hover {
  color: #0291d3; 
}

</style>