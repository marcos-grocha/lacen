<template>
  <div class="dark-mode-toggle">
    <button
      @click="toggleDarkMode"
      :aria-label="isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'"
      class="toggle-button"
      :class="{ 'is-dark': isDarkMode }"
    >
      <div class="toggle-icon">
        <svg 
          v-if="isDarkMode" 
          class="icon moon-icon" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
        </svg>
        <svg 
          v-else 
          class="icon sun-icon" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z"/>
        </svg>
      </div>
      <span class="toggle-text">
        {{ isDarkMode ? 'Modo Claro' : 'Modo Escuro' }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DarkModeLacen',
  
  data() {
    return {
      isDarkMode: false
    }
  },

  mounted() {
    //preferência no localStorage???
    const savedTheme = localStorage.getItem('lacen-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = prefersDark;
    }
    
    this.applyTheme();
    
    // Listener para mudanças na preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('lacen-theme')) {
        this.isDarkMode = e.matches;
        this.applyTheme();
      }
    });
  },

  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
      localStorage.setItem('lacen-theme', this.isDarkMode ? 'dark' : 'light');
    },

    applyTheme() {
      const root = document.documentElement;
      
      if (this.isDarkMode) {
        root.classList.add('dark-theme');
        this.setDarkVariables();
      } else {
        root.classList.remove('dark-theme');
        this.setLightVariables();
      }
    },

    setDarkVariables() {
      const root = document.documentElement;
      
      // Cores principais para modo escuro
      root.style.setProperty('--primary-color', '#38bdf8');
      root.style.setProperty('--primary-dark', '#0284c7');
      root.style.setProperty('--primary-light', '#7dd3fc');
      root.style.setProperty('--primary-lighter', '#1e3a8a');
      
      // Cores de sistema para modo escuro
      root.style.setProperty('--white', '#0f172a');
      root.style.setProperty('--black', '#f8fafc');
      root.style.setProperty('--gray-50', '#1e293b');
      root.style.setProperty('--gray-100', '#334155');
      root.style.setProperty('--gray-200', '#475569');
      root.style.setProperty('--gray-300', '#64748b');
      root.style.setProperty('--gray-400', '#94a3b8');
      root.style.setProperty('--gray-500', '#cbd5e1');
      root.style.setProperty('--gray-600', '#e2e8f0');
      root.style.setProperty('--gray-700', '#f1f5f9');
      root.style.setProperty('--gray-800', '#f8fafc');
      root.style.setProperty('--gray-900', '#ffffff');
      
      // Cores secundárias
      root.style.setProperty('--secondary-color', '#1e293b');
      
      // Gradientes para modo escuro
      root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #38bdf8, #0284c7)');
      root.style.setProperty('--light-gradient', 'linear-gradient(135deg, #1e293b, #334155)');
      root.style.setProperty('--subtle-gradient', 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)');
    },

    setLightVariables() {
      const root = document.documentElement;
      
      // Restaurar cores originais para modo claro
      root.style.setProperty('--primary-color', '#0291d3');
      root.style.setProperty('--primary-dark', '#0369a1');
      root.style.setProperty('--primary-light', '#06b6d4');
      root.style.setProperty('--primary-lighter', '#bae6fd');
      
      // Cores de sistema para modo claro
      root.style.setProperty('--white', '#ffffff');
      root.style.setProperty('--black', '#000000');
      root.style.setProperty('--gray-50', '#f9fafb');
      root.style.setProperty('--gray-100', '#f3f4f6');
      root.style.setProperty('--gray-200', '#e5e7eb');
      root.style.setProperty('--gray-300', '#d1d5db');
      root.style.setProperty('--gray-400', '#9ca3af');
      root.style.setProperty('--gray-500', '#6b7280');
      root.style.setProperty('--gray-600', '#4b5563');
      root.style.setProperty('--gray-700', '#374151');
      root.style.setProperty('--gray-800', '#1f2937');
      root.style.setProperty('--gray-900', '#111827');
      
      // Cores secundárias
      root.style.setProperty('--secondary-color', '#f0f0f0');
      
      // Gradientes para modo claro
      root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #0291d3, #0369a1)');
      root.style.setProperty('--light-gradient', 'linear-gradient(135deg, #f8fafc, #f1f5f9)');
      root.style.setProperty('--subtle-gradient', 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)');
    }
  }
}
</script>

<style scoped>
.dark-mode-toggle {
  position: fixed;
  bottom: 6rem;
  right: 1.5rem;
  z-index: var(--z-fixed);
}

.toggle-button {
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

.toggle-button:hover {
  background-color: var(--gray-50);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.toggle-button:active {
  transform: translateY(0);
}

.toggle-button.is-dark {
  background-color: var(--gray-800);
  color: var(--gray-100);
  border-color: var(--gray-600);
}

.toggle-button.is-dark:hover {
  background-color: var(--gray-700);
  border-color: var(--primary-light);
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.icon {
  width: 16px;
  height: 16px;
  transition: var(--transition-all);
}

.sun-icon {
  color: #f59e0b;
}

.moon-icon {
  color: #6366f1;
}

.toggle-text {
  white-space: nowrap;
  transition: var(--transition-opacity);
}

/* Animações para os ícones */
.toggle-button:hover .icon {
  transform: rotate(15deg) scale(1.1);
}

.toggle-button:hover .sun-icon {
  color: #f97316;
}

.toggle-button:hover .moon-icon {
  color: #8b5cf6;
}

@media (max-width: 768px) {
  .dark-mode-toggle {
    bottom: 5rem;
    right: 1rem;
  }
  
  .toggle-button {
    padding: var(--spacing-2-5) var(--spacing-3);
    font-size: var(--text-xs);
  }
  
  .toggle-text {
    display: none;
  }
  
  .toggle-button {
    width: 48px;
    height: 48px;
    justify-content: center;
  }
  
  .toggle-icon {
    width: 24px;
    height: 24px;
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
}

/* Animação de entrada */
.dark-mode-toggle {
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

/* Estados de foco para acessibilidade */
.toggle-button:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Reduzir animações para usuários com preferência por movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .toggle-button,
  .icon,
  .toggle-text {
    transition: none;
  }
  
  .dark-mode-toggle {
    animation: none;
  }
  
  .toggle-button:hover .icon {
    transform: none;
  }
}
</style>