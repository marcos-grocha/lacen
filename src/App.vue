<template>
  <HeaderLacen />
  <router-view></router-view>
  <FooterLacen />
  <ScrollToTopButton />
  <VLibras 
    :position="'left'" 
    :avatar="'random'" 
    :opacity="1.0" 
  />
</template>

<script>
  import FooterLacen from './components/FooterLacen.vue';
  import HeaderLacen from './components/HeaderLacen.vue';
  import ScrollToTopButton from './components/ScrollToTopButton.vue';

  export default {
    name: 'App',
    
    components: {
      HeaderLacen,
      FooterLacen,
      ScrollToTopButton
    },

    data: () => ({
      //
    }),
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Avenir:wght@300;400;500;600;700&display=swap');

  /* Reset e configurações globais */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Variáveis CSS para o LACEN */
  :root {
    /* Cores principais */
    --primary-color: #0291d3;
    --secondary-color: #f0f0f0;
    --primary-dark: #0369a1;
    --primary-light: #06b6d4;
    --primary-lighter: #bae6fd;
    
    /* Cores de sistema */
    --white: #ffffff;
    --black: #000000;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    
    /* Cores de feedback */
    --success-color: #059669;
    --warning-color: #f59e0b;
    --error-color: #dc2626;
    --info-color: var(--primary-color);
    
    /* Gradientes */
    --primary-gradient: linear-gradient(135deg, #0291d3, #0369a1);
    --light-gradient: linear-gradient(135deg, #f8fafc, #f1f5f9);
    --subtle-gradient: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    
    /* Tipografia */
    --font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-family-alt: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    
    /* Tamanhos de texto */
    --text-xs: 0.75rem;      /* 12px */
    --text-sm: 0.875rem;     /* 14px */
    --text-base: 1rem;       /* 16px */
    --text-lg: 1.125rem;     /* 18px */
    --text-xl: 1.25rem;      /* 20px */
    --text-2xl: 1.5rem;      /* 24px */
    --text-3xl: 1.875rem;    /* 30px */
    --text-4xl: 2.25rem;     /* 36px */
    --text-5xl: 3rem;        /* 48px */
    
    /* Pesos de texto */
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    
    /* Configurações específicas do requisito */
    --title-size: 1rem;
    --title-weight: 600;
    --subtitle-size: 0.75rem;
    --subtitle-weight: 400;
    
    /* Espaçamentos */
    --spacing-0: 0;
    --spacing-px: 1px;
    --spacing-0-5: 0.125rem;
    --spacing-1: 0.25rem;
    --spacing-1-5: 0.375rem;
    --spacing-2: 0.5rem;
    --spacing-2-5: 0.625rem;
    --spacing-3: 0.75rem;
    --spacing-3-5: 0.875rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-7: 1.75rem;
    --spacing-8: 2rem;
    --spacing-9: 2.25rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;
    
    /* Bordas */
    --border-radius-sm: 0.125rem;
    --border-radius: 0.25rem;
    --border-radius-md: 0.375rem;
    --border-radius-lg: 0.5rem;
    --border-radius-xl: 0.75rem;
    --border-radius-2xl: 1rem;
    --border-radius-3xl: 1.5rem;
    --border-radius-full: 9999px;
    
    /* Sombras */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    
    /* Transições */
    --transition-all: all 0.3s ease;
    --transition-colors: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    --transition-transform: transform 0.3s ease;
    --transition-opacity: opacity 0.3s ease;
    
    /* Z-index */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal: 1040;
    --z-popover: 1050;
    --z-tooltip: 1060;
  }

  /* Configurações base do documento */
  html {
    font-size: 16px;
    line-height: 1.5;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-family);
    font-weight: var(--font-normal);
    color: var(--gray-800);
    background-color: var(--white);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Tipografia global */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family);
    font-weight: var(--font-semibold);
    line-height: 1.2;
    color: var(--gray-900);
    margin-bottom: var(--spacing-4);
  }

  h1 {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
  }

  h2 {
    font-size: var(--text-3xl);
    font-weight: var(--font-semibold);
  }

  h3 {
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
  }

  h4 {
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
  }

  h5 {
    font-size: var(--text-lg);
    font-weight: var(--font-medium);
  }

  h6 {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
  }

  /* Classes utilitárias para títulos e subtítulos conforme requisitos */
  .title {
    font-size: var(--title-size) !important;
    font-weight: var(--title-weight) !important;
  }

  .subtitle {
    font-size: var(--subtitle-size) !important;
    font-weight: var(--subtitle-weight) !important;
  }

  /* Parágrafos e texto */
  p {
    margin-bottom: var(--spacing-4);
    line-height: 1.7;
  }

  /* Links */
  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition-colors);
  }

  a:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }

  /* Listas */
  ul, ol {
    margin-bottom: var(--spacing-4);
    padding-left: var(--spacing-6);
  }

  li {
    margin-bottom: var(--spacing-1);
  }

  /* Elementos de formulário */
  input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: var(--transition-all);
  }

  /* Botões básicos */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--border-radius);
    font-weight: var(--font-medium);
    text-decoration: none;
    transition: var(--transition-all);
    cursor: pointer;
    border: 1px solid transparent;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }

  .btn-primary:hover {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
    color: var(--white);
    text-decoration: none;
  }

  .btn-secondary {
    background-color: var(--secondary-color);
    color: var(--gray-700);
    border-color: var(--gray-300);
  }

  .btn-secondary:hover {
    background-color: var(--gray-100);
    border-color: var(--gray-400);
    color: var(--gray-800);
    text-decoration: none;
  }

  .card {
    background-color: var(--white);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition-all);
  }

  .card:hover {
    box-shadow: var(--shadow-lg);
  }

  .card-header {
    padding: var(--spacing-4) var(--spacing-6);
    background-color: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
  }

  .card-body {
    padding: var(--spacing-6);
  }

  .card-footer {
    padding: var(--spacing-4) var(--spacing-6);
    background-color: var(--gray-50);
    border-top: 1px solid var(--gray-200);
  }

  .text-primary { color: var(--primary-color) !important; }
  .text-secondary { color: var(--gray-600) !important; }
  .text-success { color: var(--success-color) !important; }
  .text-warning { color: var(--warning-color) !important; }
  .text-error { color: var(--error-color) !important; }

  .bg-primary { background-color: var(--primary-color) !important; }
  .bg-secondary { background-color: var(--secondary-color) !important; }
  .bg-white { background-color: var(--white) !important; }
  .bg-gray-50 { background-color: var(--gray-50) !important; }
  .bg-gray-100 { background-color: var(--gray-100) !important; }

  .font-light { font-weight: var(--font-light) !important; }
  .font-normal { font-weight: var(--font-normal) !important; }
  .font-medium { font-weight: var(--font-medium) !important; }
  .font-semibold { font-weight: var(--font-semibold) !important; }
  .font-bold { font-weight: var(--font-bold) !important; }

  .text-xs { font-size: var(--text-xs) !important; }
  .text-sm { font-size: var(--text-sm) !important; }
  .text-base { font-size: var(--text-base) !important; }
  .text-lg { font-size: var(--text-lg) !important; }
  .text-xl { font-size: var(--text-xl) !important; }
  .text-2xl { font-size: var(--text-2xl) !important; }
  .text-3xl { font-size: var(--text-3xl) !important; }

  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
  .text-right { text-align: right !important; }

  .rounded { border-radius: var(--border-radius) !important; }
  .rounded-lg { border-radius: var(--border-radius-lg) !important; }
  .rounded-xl { border-radius: var(--border-radius-xl) !important; }
  .rounded-full { border-radius: var(--border-radius-full) !important; }

  .shadow { box-shadow: var(--shadow) !important; }
  .shadow-md { box-shadow: var(--shadow-md) !important; }
  .shadow-lg { box-shadow: var(--shadow-lg) !important; }
  .shadow-xl { box-shadow: var(--shadow-xl) !important; }

  /* Espaçamentos */
  .m-0 { margin: 0 !important; }
  .m-1 { margin: var(--spacing-1) !important; }
  .m-2 { margin: var(--spacing-2) !important; }
  .m-3 { margin: var(--spacing-3) !important; }
  .m-4 { margin: var(--spacing-4) !important; }
  .m-5 { margin: var(--spacing-5) !important; }
  .m-6 { margin: var(--spacing-6) !important; }
  .m-8 { margin: var(--spacing-8) !important; }

  .p-0 { padding: 0 !important; }
  .p-1 { padding: var(--spacing-1) !important; }
  .p-2 { padding: var(--spacing-2) !important; }
  .p-3 { padding: var(--spacing-3) !important; }
  .p-4 { padding: var(--spacing-4) !important; }
  .p-5 { padding: var(--spacing-5) !important; }
  .p-6 { padding: var(--spacing-6) !important; }
  .p-8 { padding: var(--spacing-8) !important; }

  .mt-0 { margin-top: 0 !important; }
  .mt-1 { margin-top: var(--spacing-1) !important; }
  .mt-2 { margin-top: var(--spacing-2) !important; }
  .mt-3 { margin-top: var(--spacing-3) !important; }
  .mt-4 { margin-top: var(--spacing-4) !important; }
  .mt-5 { margin-top: var(--spacing-5) !important; }
  .mt-6 { margin-top: var(--spacing-6) !important; }
  .mt-8 { margin-top: var(--spacing-8) !important; }

  .mb-0 { margin-bottom: 0 !important; }
  .mb-1 { margin-bottom: var(--spacing-1) !important; }
  .mb-2 { margin-bottom: var(--spacing-2) !important; }
  .mb-3 { margin-bottom: var(--spacing-3) !important; }
  .mb-4 { margin-bottom: var(--spacing-4) !important; }
  .mb-5 { margin-bottom: var(--spacing-5) !important; }
  .mb-6 { margin-bottom: var(--spacing-6) !important; }
  .mb-8 { margin-bottom: var(--spacing-8) !important; }

  .pt-0 { padding-top: 0 !important; }
  .pt-1 { padding-top: var(--spacing-1) !important; }
  .pt-2 { padding-top: var(--spacing-2) !important; }
  .pt-3 { padding-top: var(--spacing-3) !important; }
  .pt-4 { padding-top: var(--spacing-4) !important; }
  .pt-5 { padding-top: var(--spacing-5) !important; }
  .pt-6 { padding-top: var(--spacing-6) !important; }
  .pt-8 { padding-top: var(--spacing-8) !important; }

  .pb-0 { padding-bottom: 0 !important; }
  .pb-1 { padding-bottom: var(--spacing-1) !important; }
  .pb-2 { padding-bottom: var(--spacing-2) !important; }
  .pb-3 { padding-bottom: var(--spacing-3) !important; }
  .pb-4 { padding-bottom: var(--spacing-4) !important; }
  .pb-5 { padding-bottom: var(--spacing-5) !important; }
  .pb-6 { padding-bottom: var(--spacing-6) !important; }
  .pb-8 { padding-bottom: var(--spacing-8) !important; }

  @media (max-width: 768px) {
    :root {
      --text-4xl: 2rem;
      --text-3xl: 1.75rem;
      --text-2xl: 1.5rem;
    }
    
    .card-body {
      padding: var(--spacing-4);
    }
    
    .btn {
      padding: var(--spacing-3) var(--spacing-4);
    }
  }

  /* Melhorias para acessibilidade */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Scroll suave em todo o site */
  html {
    scroll-behavior: smooth;
  }

  /* Melhorias para foco de teclado */
  :focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Seleção de texto */
  ::selection {
    background-color: var(--primary-light);
    color: var(--white);
  }

  ::-moz-selection {
    background-color: var(--primary-light);
    color: var(--white);
  }
</style>