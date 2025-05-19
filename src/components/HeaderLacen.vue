<template>
  <div class="homepage">
    <header class="header">
      <div class="logo">
        <router-link to="/" @click="scrollToTop">
          <h1>LACEN</h1>
        </router-link>
      </div>

      <nav class="navigation">
        <ul>
          <li><a href="/institucional">Institucional</a></li>
          <li><a href="/news">Notícias</a></li>
          <li><a href="/professional">Profissionais</a></li>
          <li><a href="/faq">Perguntas Frequentes</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
      
      <div class="actions">
        <template v-if="isLoggedIn">
          <button class="btn-cadastro">CADASTRE AMOSTRA</button>

          <button class="btn-user" @click="logout">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </template>

        <template v-else>
          <a href="#" class="btn-create-account">Criar Conta</a>
          <button class="btn-login" @click="login">LOGIN</button>
        </template>
      </div>
    </header>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isLoggedIn = ref(false); // Inicialmente deslogado
  
  function login() {
    isLoggedIn.value = true;
  }
  
  function logout() {
    isLoggedIn.value = false;
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .logo h1 {
    font-weight: bold;
    color: #000;
    margin: 0;
  }

  .logo a {
    text-decoration: none;
    color: inherit;
  }

  .navigation ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .navigation a {
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .btn-cadastro {
    background-color: #f0f0f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
  }

  .btn-user {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-create-account {
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }

  .btn-login {
    background-color: #f0f0f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
  }
  .btn-cadastro {
    background-color: #f0f0f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: color 0.3s;
  }

  .btn-cadastro:hover {
    color: #0291d3; 
  }

  .btn-user {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s;
  }

  .btn-user:hover {
    color: #0291d3; 
  }

  .btn-create-account {
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
    padding: 0.5rem 0;
    transition: color 0.3s;
  }

  .btn-create-account:hover {
    color: #0291d3; 
  }

  .btn-login {
    background-color: #f0f0f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
  }

  .btn-login:hover {
    color: #0291d3; 
  }
  .navigation a {
  text-decoration: none;  
  color: #333;             
  font-size: 0.9rem;       
  transition: color 0.3s;  
}

.navigation a:hover {
  color: #0291d3; 
}

</style>
