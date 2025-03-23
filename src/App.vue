<template>
  <HeaderLacen />
  <router-view></router-view>
</template>

<script>
  import HeaderLacen from './components/HeaderLacen.vue';

  export default {
    name: 'App',
    
    components: {
      HeaderLacen,
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
</style>
