<template>
  <div class="news-container">
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Notícias</h1>
        <p class="page-subtitle">Fique por dentro das últimas novidades e atualizações da saúde pública</p>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="content-section">
        <div class="intro-section">
          <h2 class="section-title">Últimas Notícias</h2>
          <p class="intro-text">
            Mantenha-se informado sobre as principais novidades, avanços científicos, políticas de saúde 
            e eventos relevantes que impactam diretamente a qualidade dos serviços oferecidos à população.
          </p>
        </div>

        <div class="news-grid">
          <div 
            v-for="article in news" 
            :key="article.id" 
            class="news-card"
            @click="openNewsDetails(article)"
          >
            <div class="news-image">
              <img :src="article.coverImage" :alt="article.title" />
              <div class="news-overlay">
                <div class="overlay-content">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Ler Notícia</span>
                </div>
              </div>
            </div>
            <div class="news-info">
              <div class="news-meta">
                <span class="news-date">{{ formatDate(article.publishedAt) }}</span>
                <span class="news-category">{{ article.category }}</span>
              </div>
              <h3 class="news-title">{{ article.title }}</h3>
              <p class="news-excerpt">{{ article.excerpt }}</p>
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
          <div class="news-image-modal">
            <img :src="selectedNews.coverImage" :alt="selectedNews.title" />
          </div>

          <div class="news-details">
            <div class="news-header">
              <div class="news-meta-modal">
                <span class="news-date-modal">{{ formatDate(selectedNews.publishedAt) }}</span>
                <span class="news-category-modal">{{ selectedNews.category }}</span>
              </div>
              <h2 class="news-title-modal">{{ selectedNews.title }}</h2>
              <p class="news-author">Por {{ selectedNews.author }}</p>
            </div>

            <div class="news-content">
              <h4 class="content-title">Conteúdo da Notícia</h4>
              
              <!-- Corpo da notícia com títulos e parágrafos -->
              <div class="content-body">
                <div v-for="(section, index) in selectedNews.body" :key="index" class="content-section-item">
                  <h5 v-if="section.title" class="section-subtitle">{{ section.title }}</h5>
                  <p class="section-paragraph">{{ section.paragraph }}</p>
                </div>
              </div>

              <!-- Imagens do corpo da notícia -->
              <div class="body-images" v-if="selectedNews.bodyImages && selectedNews.bodyImages.length > 0">
                <div class="image-grid">
                  <div 
                    v-for="(image, index) in selectedNews.bodyImages" 
                    :key="index" 
                    class="body-image-item"
                  >
                    <img :src="image.url" :alt="image.caption" />
                    <p class="image-caption">{{ image.caption }}</p>
                  </div>
                </div>
              </div>

              <!-- Citação -->
              <div class="quote-section" v-if="selectedNews.quote">
                <blockquote class="news-quote">
                  <svg class="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                  </svg>
                  <p class="quote-text">{{ selectedNews.quote.text }}</p>
                  <cite class="quote-author">{{ selectedNews.quote.author }}</cite>
                </blockquote>
              </div>
            </div>

            <div class="news-tags" v-if="selectedNews.tags && selectedNews.tags.length > 0">
              <h4 class="tags-title">Tags</h4>
              <div class="tags-list">
                <span 
                  v-for="tag in selectedNews.tags" 
                  :key="tag" 
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="news-actions">
              <button 
                v-if="selectedNews.source" 
                @click="openSource(selectedNews.source)"
                class="action-button source-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Fonte Original</span>
              </button>
              
              <!-- Botões de compartilhamento -->
              <div class="share-dropdown">
                <button 
                  @click="toggleShareDropdown"
                  class="action-button share-button"
                  ref="shareButton"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  <span>Compartilhar</span>
                  <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                
                <div class="share-menu" v-if="showShareDropdown">
                  <button @click="shareToFacebook(selectedNews)" class="share-option facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </button>
                  
                  <button @click="shareToTwitter(selectedNews)" class="share-option twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>X (Twitter)</span>
                  </button>
                  
                  <button @click="shareToLinkedIn(selectedNews)" class="share-option linkedin">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </button>
                  
                  <button @click="shareToInstagram(selectedNews)" class="share-option instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="newsletter-section">
      <div class="newsletter-content">
        <h3 class="newsletter-heading">Receba nossas atualizações</h3>
        <p class="newsletter-description">Mantenha-se informado sobre novidades, serviços e comunicados importantes do LACEN.</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <div class="newsletter-input-group">
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              v-model="newsletterEmail"
              class="newsletter-input"
              required
            >
            <button type="submit" class="newsletter-button" :disabled="!newsletterEmail || isSubscribing">
              <span v-if="!isSubscribing">Inscrever-se</span>
              <div v-else class="loading-spinner-small"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import newsImg1 from '@/assets/img/news/news-img-1.png'
  import newsImg2 from '@/assets/img/news/news-img-2.png'
  import newsImg3 from '@/assets/img/news/news-img-3.png'

  const showModal = ref(false)
  const selectedNews = ref({})
  const showShareDropdown = ref(false)
  const shareButton = ref(null)
  const newsletterEmail = ref('');
  const isSubscribing = ref(false);

  async function subscribeNewsletter() {
    if (!newsletterEmail.value) return;
    
    isSubscribing.value = true;
    
    // Simular API call
    setTimeout(() => {
      console.log('Newsletter subscription:', newsletterEmail.value);
      newsletterEmail.value = '';
      isSubscribing.value = false;
      // Aqui era bom adicionar uma notificação de sucesso
    }, 1500);
  }

  const openNewsDetails = (article) => {
    selectedNews.value = article
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
    showShareDropdown.value = false
  }

  const toggleShareDropdown = () => {
    showShareDropdown.value = !showShareDropdown.value
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const openSource = (sourceUrl) => {
    window.open(sourceUrl, '_blank', 'noopener,noreferrer')
  }

  // Funções de compartilhamento
  const shareToFacebook = (article) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(article.title)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400')
    showShareDropdown.value = false
  }

  const shareToTwitter = (article) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(`${article.title} - ${article.excerpt}`)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
    showShareDropdown.value = false
  }

  const shareToLinkedIn = (article) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(article.title)
    const summary = encodeURIComponent(article.excerpt)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank', 'width=600,height=400')
    showShareDropdown.value = false
  }

  const shareToInstagram = (article) => {
    // não consegui colocar o compartilhamento direto, dai ele só copia o texto
    const shareText = `${article.title}\n\n${article.excerpt}\n\n${window.location.href}`
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Texto copiado! Cole no Instagram para compartilhar.')
      })
    } else {
      // Fallback para navegadores mais antigos
      const textArea = document.createElement('textarea')
      textArea.value = shareText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Texto copiado! Cole no Instagram para compartilhar.')
    }
    showShareDropdown.value = false
  }

  // Fechar dropdown ao clicar fora
  const handleClickOutside = (event) => {
    if (shareButton.value && !shareButton.value.contains(event.target)) {
      showShareDropdown.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  const news = ref([
    {
      id: 1,
      title: 'Novos Protocolos de Segurança Implementados no Laboratório',
      excerpt: 'Implementação de novos protocolos de segurança para garantir maior proteção aos profissionais e qualidade nos resultados dos exames.',
      coverImage: newsImg1,
      category: 'Segurança',
      author: 'Dr. Roberto Silva',
      publishedAt: '2025-05-28',
      tags: ['Segurança', 'Protocolos', 'Qualidade'],
      source: 'https://exemplo.com/noticia-1',
      body: [
        {
          title: 'Novos Equipamentos de Proteção',
          paragraph: 'O LACEN implementou novos protocolos de segurança que elevam ainda mais os padrões de qualidade e proteção em nossos laboratórios. Essas medidas foram desenvolvidas com base nas mais recentes diretrizes nacionais e internacionais.'
        },
        {
          title: 'Sistemas de Ventilação Modernizados',
          paragraph: 'Os novos procedimentos incluem equipamentos de proteção individual aprimorados, sistemas de ventilação modernizados e protocolos de descontaminação mais rigorosos, garantindo um ambiente de trabalho ainda mais seguro.'
        },
        {
          paragraph: 'Todos os profissionais passaram por treinamento especializado para implementação adequada dos novos protocolos, assegurando a máxima eficácia das medidas de segurança.'
        }
      ],
      bodyImages: [
        {
          url: newsImg2,
          caption: 'Novo ambiente do laboratório com protocolos de segurança implementados'
        },
        {
          url: newsImg3,
          caption: 'Equipamentos de proteção individual de última geração'
        }
      ],
      quote: {
        text: 'A segurança dos nossos profissionais e a qualidade dos nossos serviços são prioridades absolutas. Estes novos protocolos representam nosso compromisso contínuo com a excelência.',
        author: 'Dr. Roberto Silva, Diretor Técnico'
      }
    },
    {
      id: 2,
      title: 'Campanha de Vacinação Contra Influenza 2025',
      excerpt: 'Início da campanha nacional de vacinação contra influenza com foco nos grupos prioritários e estratégias de imunização.',
      coverImage: newsImg2,
      category: 'Vacinação',
      author: 'Dra. Ana Costa',
      publishedAt: '2025-05-25',
      tags: ['Vacinação', 'Influenza', 'Saúde Pública'],
      source: 'https://exemplo.com/noticia-2',
      body: [
        {
          title: 'Grupos Prioritários',
          paragraph: 'A campanha de vacinação contra influenza 2025 foi oficialmente iniciada, priorizando grupos de risco como idosos, crianças, gestantes e profissionais de saúde.'
        },
        {
          title: 'Logística Aprimorada',
          paragraph: 'Este ano, a campanha conta com uma logística aprimorada e maior disponibilidade de doses para atender toda a população do estado, com pontos de vacinação estrategicamente distribuídos.'
        },
        {
          paragraph: 'A meta é vacinar 90% da população dos grupos prioritários até o final do período da campanha, superando os resultados do ano anterior.'
        }
      ],
      bodyImages: [
        {
          url: newsImg3,
          caption: 'Posto de vacinação preparado para atender a população'
        },
        {
          url: newsImg1,
          caption: 'Doses da vacina contra influenza disponíveis para distribuição'
        }
      ],
      quote: {
        text: 'A vacinação é nossa principal arma contra a influenza. É fundamental que a população dos grupos prioritários compareça aos postos de saúde.',
        author: 'Dra. Ana Costa, Coordenadora da Campanha'
      }
    },
    {
      id: 3,
      title: 'Modernização dos Equipamentos de Análises Clínicas',
      excerpt: 'Investimento em novos equipamentos de última geração para análises clínicas, aumentando a precisão e agilidade dos resultados.',
      coverImage: newsImg3,
      category: 'Tecnologia',
      author: 'Eng. Carlos Mendes',
      publishedAt: '2025-05-20',
      tags: ['Tecnologia', 'Equipamentos', 'Modernização'],
      source: 'https://exemplo.com/noticia-3',
      body: [
        {
          title: 'Investimento em Tecnologia',
          paragraph: 'O laboratório recebeu novos equipamentos de análises clínicas que representam um grande avanço tecnológico para nossa instituição, com investimento de mais de R$ 2 milhões.'
        },
        {
          title: 'Benefícios para a População',
          paragraph: 'Esses equipamentos permitirão diagnósticos mais precisos e resultados em menor tempo, beneficiando diretamente a população atendida com maior agilidade nos exames.'
        },
        {
          paragraph: 'A capacidade de processamento aumentou em 300%, permitindo atender uma demanda muito maior sem comprometer a qualidade dos resultados.'
        }
      ],
      bodyImages: [
        {
          url: newsImg1,
          caption: 'Novos equipamentos de análises clínicas instalados'
        },
        {
          url: newsImg2,
          caption: 'Ambiente modernizado do laboratório de análises'
        }
      ],
      quote: {
        text: 'Esta modernização representa um salto qualitativo nos nossos serviços. Agora podemos oferecer resultados ainda mais rápidos e precisos.',
        author: 'Eng. Carlos Mendes, Gerente de Tecnologia'
      }
    }
  ])
</script>

<style scoped>
  .news-container {
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

  /* Grid de notícias */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-8);
    padding: var(--spacing-10);
  }

  .news-card {
    background: var(--white);
    border-radius: var(--border-radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition-all);
    cursor: pointer;
    border: 1px solid var(--gray-200);
  }

  .news-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }

  .news-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-transform);
  }

  .news-overlay {
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
    transition: var(--transition-all);
  }

  .news-card:hover .news-overlay {
    opacity: 0.9;
  }

  .news-card:hover .news-image img {
    transform: scale(1.1);
  }

  .overlay-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    color: var(--white);
    font-weight: var(--font-semibold);
    font-size: var(--text-lg);
  }

  .news-info {
    padding: var(--spacing-6);
  }

  .news-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-3);
    gap: var(--spacing-2);
  }

  .news-date {
    font-size: var(--text-sm);
    color: var(--gray-500);
    font-weight: var(--font-medium);
  }

  .news-category {
    background: var(--primary-color);
    color: var(--white);
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--border-radius-full);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .news-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-3) 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-excerpt {
    font-size: var(--text-base);
    color: var(--gray-600);
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal);
    padding: var(--spacing-4);
    overflow-y: auto;
  }

  .modal-content {
    background: var(--white);
    border-radius: var(--border-radius-xl);
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: var(--shadow-2xl);
  }

  .modal-close {
    position: absolute;
    top: var(--spacing-4);
    right: var(--spacing-4);
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: var(--border-radius-full);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition-all);
    z-index: 10;
    box-shadow: var(--shadow);
  }

  .modal-close:hover {
    background: var(--gray-100);
    border-color: var(--gray-400);
  }

  .modal-body {
    padding: 0;
  }

  .news-image-modal {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .news-image-modal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .news-details {
    padding: var(--spacing-8);
  }

  .news-header {
    margin-bottom: var(--spacing-8);
    padding-bottom: var(--spacing-6);
    border-bottom: 1px solid var(--gray-200);
  }

  .news-meta-modal {
    display: flex;
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-4);
    align-items: center;
  }

  .news-date-modal {
    font-size: var(--text-sm);
    color: var(--gray-500);
    font-weight: var(--font-medium);
  }

  .news-category-modal {
    background: var(--primary-color);
    color: var(--white);
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--border-radius-full);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .news-title-modal {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-3) 0;
    line-height: 1.3;
  }

  .news-author {
    font-size: var(--text-base);
    color: var(--gray-600);
    font-style: italic;
    margin: 0;
  }

  .news-content {
    margin-bottom: var(--spacing-8);
  }

  .content-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-6) 0;
    position: relative;
  }

  .content-title::after {
    content: '';
    position: absolute;
    bottom: -var(--spacing-2);
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary-color);
    border-radius: var(--border-radius-full);
  }

  .content-body {
    margin-bottom: var(--spacing-8);
  }

  .content-section-item {
    margin-bottom: var(--spacing-6);
  }

  .section-subtitle {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--gray-800);
    margin: 0 0 var(--spacing-3) 0;
  }

  .section-paragraph {
    font-size: var(--text-base);
    line-height: 1.7;
    color: var(--gray-700);
    margin: 0;
  }

  .body-images {
    margin: var(--spacing-8) 0;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-6);
  }

  .body-image-item {
    text-align: center;
  }

  .body-image-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow);
  }

  .image-caption {
    font-size: var(--text-sm);
    color: var(--gray-600);
    margin-top: var(--spacing-2);
    font-style: italic;
  }

  .quote-section {
    margin: var(--spacing-8) 0;
    padding: var(--spacing-6);
    background: var(--light-gradient);
    border-left: 4px solid var(--primary-color);
    border-radius: var(--border-radius-lg);
  }

  .news-quote {
    position: relative;
    margin: 0;
  }

  .quote-icon {
    color: var(--primary-color);
    margin-bottom: var(--spacing-3);
  }

  .quote-text {
    font-size: var(--text-lg);
    line-height: 1.6;
    color: var(--gray-800);
    font-style: italic;
    margin: 0 0 var(--spacing-3) 0;
  }

  .quote-author {
    font-size: var(--text-base);
    color: var(--gray-600);
    font-weight: var(--font-semibold);
    font-style: normal;
  }

  .news-tags {
    margin-bottom: var(--spacing-8);
    padding-top: var(--spacing-6);
    border-top: 1px solid var(--gray-200);
  }

  .tags-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--gray-800);
    margin: 0 0 var(--spacing-4) 0;
  }

  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);
  }

  .tag {
    background: var(--gray-100);
    color: var(--gray-700);
    padding: var(--spacing-2) var(--spacing-3);
    border-radius: var(--border-radius-full);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    border: 1px solid var(--gray-300);
  }

  .news-actions {
    display: flex;
    gap: var(--spacing-4);
    align-items: center;
    flex-wrap: wrap;
  }

  .action-button {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--border-radius);
    font-weight: var(--font-medium);
    font-size: var(--text-sm);
    text-decoration: none;
    transition: var(--transition-all);
    cursor: pointer;
    border: 1px solid;
  }

  .source-button {
    background: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }

  .source-button:hover {
    background: var(--primary-dark);
    border-color: var(--primary-dark);
  }

  .share-dropdown {
    position: relative;
  }

  .share-button {
    background: var(--white);
    color: var(--gray-700);
    border-color: var(--gray-300);
  }

  .share-button:hover {
    background: var(--gray-50);
    border-color: var(--gray-400);
  }

  .dropdown-arrow {
    transition: var(--transition-transform);
  }

  .share-button:hover .dropdown-arrow {
    transform: rotate(180deg);
  }

  .share-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: var(--spacing-2);
    min-width: 180px;
    z-index: var(--z-popover);
    margin-top: var(--spacing-1);
  }

  .share-option {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    width: 100%;
    padding: var(--spacing-3);
    border: none;
    background: none;
    border-radius: var(--border-radius);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    cursor: pointer;
    transition: var(--transition-colors);
    text-align: left;
  }

  .share-option:hover {
    background: var(--gray-50);
  }

  .share-option.facebook:hover {
    background: #1877f2;
    color: var(--white);
  }

  .share-option.twitter:hover {
    background: #000000;
    color: var(--white);
  }

  .share-option.linkedin:hover {
    background: #0077b5;
    color: var(--white);
  }

  .share-option.instagram:hover {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    color: var(--white);
  }

  /* ======= */
  /* Newsletter Section */
  .newsletter-section {
    padding: 2.5rem 0;
    background: linear-gradient(135deg, rgba(2, 145, 211, 0.05), rgba(6, 182, 212, 0.05));
    border-radius: 20px;
    margin: 2rem 0;
  }

  .newsletter-content {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .newsletter-heading {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
  }

  .newsletter-description {
    color: #64748b;
    font-size: 0.875rem;
    margin: 0 0 2rem 0;
    line-height: 1.6;
  }

  .newsletter-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .newsletter-input-group {
    display: flex;
    gap: 0.5rem;
    background: white;
    padding: 0.25rem;
    border-radius: 50px;
    box-shadow: 0 4px 20px rgba(2, 145, 211, 0.1);
  }

  .newsletter-input {
    flex: 1;
    border: none;
    background: none;
    padding: 0.875rem 1.25rem;
    font-size: 0.875rem;
    outline: none;
    color: #1e293b;
    font-family: 'Roboto', sans-serif;
  }

  .newsletter-input::placeholder {
    color: #94a3b8;
  }

  .newsletter-button {
    background: linear-gradient(135deg, #0291d3, #0369a1);
    color: white;
    border: none;
    padding: 0.875rem 1.5rem;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    font-family: 'Roboto', sans-serif;
  }

  .newsletter-button:hover:not(:disabled) {
    background: linear-gradient(135deg, #0369a1, #0291d3);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(2, 145, 211, 0.4);
  }

  .newsletter-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .loading-spinner-small {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s linear infinite;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: var(--text-3xl);
    }
    
    .page-subtitle {
      font-size: var(--text-lg);
    }
    
    .content-wrapper {
      padding: var(--spacing-8) var(--spacing-4);
    }
    
    .news-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-6);
      padding: var(--spacing-6);
    }
    
    .intro-section {
      padding: var(--spacing-6);
    }
    
    .section-title {
      font-size: var(--text-2xl);
    }
    
    .intro-text {
      font-size: var(--text-base);
    }
    
    .modal-overlay {
      padding: var(--spacing-2);
    }
    
    .news-details {
      padding: var(--spacing-4);
    }
    
    .news-title-modal {
      font-size: var(--text-2xl);
    }
    
    .image-grid {
      grid-template-columns: 1fr;
    }
    
    .news-actions {
      flex-direction: column;
      align-items: stretch;
    }
    
    .action-button {
      justify-content: center;
    }
    
    .share-menu {
      position: static;
      box-shadow: none;
      border: none;
      background: var(--gray-50);
      margin-top: var(--spacing-2);
    }

        .newsletter-section {
      padding: 2rem 1rem;
      margin: 1.5rem 0;
    }
    
    .newsletter-input-group {
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 16px;
    }
    
    .newsletter-input {
      padding: 1rem;
      text-align: center;
    }
    
    .newsletter-button {
      border-radius: 12px;
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    .newsletter-heading {
      font-size: 1.25rem;
    }
  }
</style>