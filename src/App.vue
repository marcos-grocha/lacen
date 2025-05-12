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
  :root {
    --primary-color: #0291d3;    
    --secondary-color: #f0f0f0;  
    --accent-color: #FF6B6B;     
    --text-dark: #2D3748;
    --text-light: #F7FAFC;
    --transition: all 0.3s ease;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    background-color: #FFFFFF;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.7;
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
  }

  h1{
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h1 {
    padding-left: 10px;
    font-size: 2.5rem;
    line-height: 1.2;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    padding-left: 10px;
    font-size: 2rem;
    border-bottom: 2px solid var(--secondary-color);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
    font-weight: 500;
  }

  a:hover {
    color: var(--secondary-color);
    text-decoration: underline;
  }

  section {
    padding: 10px;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .button {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: var(--transition);
    background: var(--primary-color);
    color: white;
    border: 2px solid transparent;
  }

  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: var(--secondary-color);
  }

  .card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  .v-libras {
    z-index: 1000;
    bottom: 2rem !important;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }

    h1 {
      padding-left: 50px;
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    section {
      padding: 3rem 0;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 1rem;
    }
  }
</style>