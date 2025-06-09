<template>
  <div class="font-size-controller">
    <button 
      class="font-size-btn"
      @click="toggleFontSize"
      :title="currentTitle"
      :aria-label="currentAriaLabel"
    >
      <span class="font-size-icon">{{ currentIcon }}</span>
      <span class="font-size-text">{{ currentText }}</span>
    </button>
    
    <!-- Indicador visual do tamanho atual -->
    <div class="font-size-indicator" v-if="showIndicator">
      <span class="indicator-text">{{ indicatorText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FontSizeLacen',
  
  data() {
    return {
      currentFontSize: 'normal', // normal, large, extra-large
      showIndicator: false,
      indicatorTimeout: null
    }
  },
  
  computed: {
    currentIcon() {
      const icons = {
        'normal': 'A',
        'large': 'A⁺',
        'extra-large': 'A⁺⁺'
      }
      return icons[this.currentFontSize]
    },
    
    currentText() {
      const texts = {
        'normal': 'Normal',
        'large': 'Grande',
        'extra-large': 'Maior'
      }
      return texts[this.currentFontSize]
    },
    
    currentTitle() {
      const titles = {
        'normal': 'Clique para aumentar o tamanho da fonte',
        'large': 'Clique para aumentar mais o tamanho da fonte',
        'extra-large': 'Clique para voltar ao tamanho normal da fonte'
      }
      return titles[this.currentFontSize]
    },
    
    currentAriaLabel() {
      const labels = {
        'normal': 'Aumentar tamanho da fonte para melhorar acessibilidade',
        'large': 'Aumentar mais o tamanho da fonte',
        'extra-large': 'Voltar ao tamanho normal da fonte'
      }
      return labels[this.currentFontSize]
    },
    
    indicatorText() {
      const texts = {
        'normal': 'Fonte: Tamanho Normal',
        'large': 'Fonte: Tamanho Grande',
        'extra-large': 'Fonte: Tamanho Maior'
      }
      return texts[this.currentFontSize]
    }
  },
  
  mounted() {
    // Recupera a preferência salva do usuário
    const savedFontSize = localStorage.getItem('lacen-font-size')
    if (savedFontSize && ['normal', 'large', 'extra-large'].includes(savedFontSize)) {
      this.currentFontSize = savedFontSize
      this.applyFontSize()
    }
  },
  
  methods: {
    toggleFontSize() {
      // Cicla entre os tamanhos: normal -> large -> extra-large -> normal
      const sizes = ['normal', 'large', 'extra-large']
      const currentIndex = sizes.indexOf(this.currentFontSize)
      const nextIndex = (currentIndex + 1) % sizes.length
      
      this.currentFontSize = sizes[nextIndex]
      this.applyFontSize()
      this.showFontSizeIndicator()
      this.saveFontSizePreference()
    },
    
    applyFontSize() {
      const root = document.documentElement
      
      // Remove classes anteriores
      root.classList.remove('font-size-normal', 'font-size-large', 'font-size-extra-large')
      
      // Adiciona a nova classe
      root.classList.add(`font-size-${this.currentFontSize}`)
      
      // Define variáveis CSS dinamicamente
      const fontSizeMultipliers = {
        'normal': 1,
        'large': 1.125,
        'extra-large': 1.25
      }
      
      const multiplier = fontSizeMultipliers[this.currentFontSize]
      
      // Atualiza as variáveis CSS de tamanho de fonte
      root.style.setProperty('--text-xs', `${0.75 * multiplier}rem`)
      root.style.setProperty('--text-sm', `${0.875 * multiplier}rem`)
      root.style.setProperty('--text-base', `${1 * multiplier}rem`)
      root.style.setProperty('--text-lg', `${1.125 * multiplier}rem`)
      root.style.setProperty('--text-xl', `${1.25 * multiplier}rem`)
      root.style.setProperty('--text-2xl', `${1.5 * multiplier}rem`)
      root.style.setProperty('--text-3xl', `${1.875 * multiplier}rem`)
      root.style.setProperty('--text-4xl', `${2.25 * multiplier}rem`)
      root.style.setProperty('--text-5xl', `${3 * multiplier}rem`)
      
      // Atualiza tamanhos específicos do LACEN
      root.style.setProperty('--title-size', `${1 * multiplier}rem`)
      root.style.setProperty('--subtitle-size', `${0.75 * multiplier}rem`)
    },
    
    showFontSizeIndicator() {
      this.showIndicator = true
      
      // Limpa timeout anterior se existir
      if (this.indicatorTimeout) {
        clearTimeout(this.indicatorTimeout)
      }
      
      // Esconde o indicador após 3 segundos
      this.indicatorTimeout = setTimeout(() => {
        this.showIndicator = false
      }, 3000)
    },
    
    saveFontSizePreference() {
      localStorage.setItem('lacen-font-size', this.currentFontSize)
    }
  },
  
  beforeUnmount() {
    // Limpa o timeout ao destruir o componente
    if (this.indicatorTimeout) {
      clearTimeout(this.indicatorTimeout)
    }
  }
}
</script>

<style scoped>
.font-size-controller {
  position: fixed;
  bottom: 12rem;
  right: 1.5rem;
  z-index: var(--z-fixed);
}

.font-size-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background-color: var(--white);
  color: var(--gray-700);
  border: 2px solid var(--gray-200);
  border-radius: var(--border-radius-full);
  padding: var(--spacing-3) var(--spacing-4);
  box-shadow: var(--shadow-lg);
  transition: var(--transition-all);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  font-family: var(--font-family);
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.font-size-btn:hover {
  background-color: var(--gray-50);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.font-size-btn:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.font-size-btn:active {
  transform: translateY(0);
}

.font-size-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  line-height: 1;
  color: var(--primary-color);
  transition: var(--transition-all);
}

.font-size-text {
  font-size: var(--text-sm);
  white-space: nowrap;
  transition: var(--transition-opacity);
}

.font-size-indicator {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  background-color: var(--gray-900);
  color: var(--white);
  border-radius: var(--border-radius);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  white-space: nowrap;
  z-index: var(--z-tooltip);
  animation: fadeInUp 0.3s ease;
}

.font-size-indicator::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-bottom-color: var(--gray-900);
}

.indicator-text {
  display: block;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Animações para o ícone */
.font-size-btn:hover .font-size-icon {
  transform: scale(1.1);
  color: var(--primary-dark);
}

@media (max-width: 768px) {
  .font-size-controller {
    bottom: 11rem;
    right: 1rem;
  }
  
  .font-size-btn {
    padding: var(--spacing-2-5) var(--spacing-3);
    font-size: var(--text-xs);
    width: 48px;
    height: 48px;
    justify-content: center;
  }
  
  .font-size-text {
    display: none;
  }
  
  .font-size-icon {
    width: 24px;
    height: 24px;
    font-size: var(--text-xl);
  }
}

/* Animação de entrada */
.font-size-controller {
  animation: slideInFromRight 0.5s ease-out;
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Modo escuro */
.dark-theme .font-size-btn {
  background-color: var(--gray-800);
  color: var(--gray-100);
  border-color: var(--gray-600);
}

.dark-theme .font-size-btn:hover {
  background-color: var(--gray-700);
  border-color: var(--primary-light);
}

.dark-theme .font-size-icon {
  color: var(--primary-light);
}

.dark-theme .font-size-btn:hover .font-size-icon {
  color: var(--primary-color);
}

/* Redução de movimento para acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .font-size-btn,
  .font-size-icon,
  .font-size-text {
    transition: none;
  }
  
  .font-size-controller {
    animation: none;
  }
  
  .font-size-btn:hover .font-size-icon {
    transform: none;
  }
}
</style>