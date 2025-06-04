<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-description">
          Encontre respostas para as dúvidas mais comuns sobre nossos serviços
        </p>
      </div>
      
      <div class="faq-container">
        <div class="faq-list">
          <div class="faq-search">
            <input 
              type="text" 
              v-model="searchTerm"
              placeholder="Buscar pergunta..."
              class="search-input"
              aria-label="Buscar perguntas frequentes"
            />
          </div>
          
          <div class="faq-items">
            <div 
              v-for="(item, index) in filteredFaqItems" 
              :key="index" 
              class="faq-item"
              :class="{ 'active': activeIndex === index }"
            >
              <button 
                class="faq-question"
                @click="toggleItem(index)"
                :aria-expanded="activeIndex === index"
                :aria-controls="`faq-answer-${index}`"
              >
                <span class="question-text">{{ item.question }}</span>
                <span 
                  class="icon" 
                  :class="{ 'rotated': activeIndex === index }"
                  aria-hidden="true"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="currentColor"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </span>
              </button>
              
              <div 
                class="faq-answer"
                :id="`faq-answer-${index}`"
                :class="{ 'expanded': activeIndex === index }"
              >
                <div class="answer-content">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Seção de destaque -->
        <div class="faq-highlight">
          <div class="highlight-card">
            <div class="highlight-header">
              <h3 class="highlight-title">{{ selectedFaq.question }}</h3>
              <div class="highlight-badge">
                <span>Em Destaque</span>
              </div>
            </div>
            
            <div class="highlight-content">
              <p>{{ selectedFaq.answer }}</p>
            </div>
            
            <div class="highlight-actions">
              <button class="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                Mais Informações
              </button>
              
              <button class="btn btn-secondary" @click="goToContact">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 14H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const faqItems = ref([
    {
      question: 'Como funciona o processo de análise laboratorial?',
      answer: 'Nosso processo de análise laboratorial segue rigorosos padrões de qualidade. Desde a coleta até a emissão do resultado, cada etapa é monitorada por profissionais especializados para garantir precisão e confiabilidade.'
    },
    {
      question: 'Qual o prazo para entrega dos resultados?',
      answer: 'O prazo varia conforme o tipo de exame. Exames simples ficam prontos em 24-48 horas, enquanto análises mais complexas podem levar de 5 a 15 dias úteis. Você será informado sobre o prazo específico no momento da coleta.'
    },
    {
      question: 'Como posso acessar meus resultados?',
      answer: 'Os resultados podem ser acessados através do nosso portal online, retirados presencialmente em nossa unidade ou enviados por e-mail, conforme sua preferência. Você receberá uma notificação assim que estiverem disponíveis.'
    },
    {
      question: 'Preciso de preparo especial para os exames?',
      answer: 'Alguns exames requerem preparo específico, como jejum ou suspensão de medicamentos. Todas as orientações serão fornecidas no momento do agendamento e confirmadas por SMS ou e-mail.'
    },
    {
      question: 'Quais são os métodos de pagamento aceitos?',
      answer: 'Aceitamos diversas formas de pagamento: dinheiro, cartões de débito e crédito, PIX e convênios médicos. Para pagamentos parcelados, consulte nossas condições especiais.'
    },
    {
      question: 'Como agendar uma coleta domiciliar?',
      answer: 'O agendamento pode ser feito através do nosso site, aplicativo ou telefone. Nossa equipe está disponível para coletas domiciliares em toda a região metropolitana, com horários flexíveis.'
    }
  ]);

  const activeIndex = ref(1);
  const searchTerm = ref('');

  const filteredFaqItems = computed(() => {
    if (!searchTerm.value) {
      return faqItems.value;
    }
    
    return faqItems.value.filter(item => 
      item.question.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  const selectedFaq = computed(() => {
    return {
      question: 'Como garantimos a qualidade dos nossos serviços?',
      answer: `Nossa qualidade é assegurada através de múltiplas camadas de controle. Contamos com equipamentos de última geração, profissionais altamente qualificados e certificações nacionais e internacionais. 
      
      Realizamos auditorias internas regulares, participamos de programas de controle de qualidade externos e mantemos nossos processos sempre atualizados com as melhores práticas do mercado.
      
      Além disso, investimos continuamente em treinamento da nossa equipe e na modernização de nossa infraestrutura para oferecer sempre o melhor serviço aos nossos clientes.`
    };
  });

  function toggleItem(index) {
    if (activeIndex.value === index) {
      activeIndex.value = null;
    } else {
      activeIndex.value = index;
    }
  }

  function goToContact() {
    router.push('/contact');
  }
</script>

<style scoped>
  .faq-section {
    padding: var(--spacing-20) 0;
    background: var(--subtle-gradient);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-6);
  }

  /* Header da seção */
  .section-header {
    text-align: center;
    margin-bottom: var(--spacing-16);
  }

  .section-title {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    color: var(--gray-900);
    margin-bottom: var(--spacing-4);
    font-family: var(--font-family);
  }

  .section-description {
    font-size: var(--text-lg);
    color: var(--gray-600);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Container principal */
  .faq-container {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: var(--spacing-8);
    align-items: start;
  }

  /* Lista de FAQs */
  .faq-list {
    background: var(--white);
    border-radius: var(--border-radius-xl);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
  }

  /* Busca */
  .faq-search {
    padding: var(--spacing-6);
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
  }

  .search-input {
    width: 100%;
    padding: var(--spacing-3) var(--spacing-4);
    border: 1px solid var(--gray-300);
    border-radius: var(--border-radius-lg);
    font-size: var(--text-base);
    font-family: var(--font-family);
    transition: var(--transition-colors);
  }

  .search-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(2, 145, 211, 0.1);
  }

  .search-input::placeholder {
    color: var(--gray-500);
  }

  /* Items FAQ */
  .faq-items {
    padding: var(--spacing-2);
  }

  .faq-item {
    border-radius: var(--border-radius-lg);
    margin-bottom: var(--spacing-2);
    overflow: hidden;
    transition: var(--transition-all);
  }

  .faq-item:last-child {
    margin-bottom: 0;
  }

  .faq-item.active {
    background: var(--primary-lighter);
    box-shadow: var(--shadow);
  }

  /* Pergunta */
  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-4) var(--spacing-5);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    color: var(--gray-800);
    text-align: left;
    transition: var(--transition-all);
  }

  .faq-question:hover {
    background: var(--gray-50);
  }

  .faq-item.active .faq-question {
    background: transparent;
    color: var(--primary-dark);
  }

  .question-text {
    flex: 1;
    margin-right: var(--spacing-4);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: var(--primary-color);
    transition: var(--transition-transform);
  }

  .icon.rotated {
    transform: rotate(45deg);
  }

  /* Resposta */
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .faq-answer.expanded {
    max-height: 500px;
    transition: max-height 0.3s ease-in;
  }

  .answer-content {
    padding: 0 var(--spacing-5) var(--spacing-4);
  }

  .answer-content p {
    color: var(--gray-700);
    line-height: 1.7;
    margin: 0;
    font-size: var(--text-sm);
  }

  /* Seção de destaque */
  .faq-highlight {
    position: sticky;
    top: var(--spacing-8);
  }

  .highlight-card {
    background: var(--white);
    border-radius: var(--border-radius-xl);
    box-shadow: var(--shadow-xl);
    overflow: hidden;
    border: 1px solid var(--gray-200);
  }

  .highlight-header {
    padding: var(--spacing-6);
    background: var(--primary-gradient);
    color: var(--white);
    position: relative;
  }

  .highlight-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    margin: 0 0 var(--spacing-2) 0;
    line-height: 1.3;
  }

  .highlight-badge {
    display: inline-block;
  }

  .highlight-badge span {
    background: rgba(255, 255, 255, 0.2);
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--border-radius-full);
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .highlight-content {
    padding: var(--spacing-6);
  }

  .highlight-content p {
    color: var(--gray-700);
    line-height: 1.7;
    margin: 0;
    white-space: pre-line;
  }

  .highlight-actions {
    padding: var(--spacing-6);
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--border-radius-lg);
    font-weight: var(--font-medium);
    text-decoration: none;
    transition: var(--transition-all);
    cursor: pointer;
    border: 1px solid transparent;
    font-size: var(--text-sm);
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }

  .btn-primary:hover {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .btn-secondary {
    background-color: var(--gray-100);
    color: var(--gray-700);
    border-color: var(--gray-300);
  }

  .btn-secondary:hover {
    background-color: var(--gray-200);
    border-color: var(--gray-400);
    color: var(--gray-800);
  }

  @media (max-width: 1024px) {
    .faq-container {
      grid-template-columns: 1fr;
      gap: var(--spacing-6);
    }
    
    .faq-highlight {
      position: static;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 var(--spacing-4);
    }
    
    .section-header {
      margin-bottom: var(--spacing-12);
    }
    
    .section-title {
      font-size: var(--text-3xl);
    }
    
    .section-description {
      font-size: var(--text-base);
    }
    
    .faq-search {
      padding: var(--spacing-4);
    }
    
    .faq-question {
      padding: var(--spacing-4);
    }
    
    .answer-content {
      padding: 0 var(--spacing-4) var(--spacing-4);
    }
    
    .highlight-header,
    .highlight-content {
      padding: var(--spacing-4);
    }
    
    .highlight-actions {
      padding: var(--spacing-4);
      padding-top: 0;
    }
  }

  @media (max-width: 480px) {
    .faq-section {
      padding: var(--spacing-12) 0;
    }
    
    .section-title {
      font-size: var(--text-2xl);
    }
    
    .highlight-title {
      font-size: var(--text-lg);
    }
  }

  /* Melhorias para acessibilidade */
  @media (prefers-reduced-motion: reduce) {
    .faq-answer,
    .icon,
    .btn {
      transition: none;
    }
  }

  /* Estados de foco aprimorados */
  .faq-question:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .btn:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
</style>