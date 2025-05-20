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
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color:  #F1F1F1;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
  }

  a {
    color: #333;
  }

  section {
    margin: 2rem 0;
  }

  .homepage {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>
