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
          <button class="btn-login" @click="openModal">LOGIN</button>
        </template>
      </div>
    </header>
  </div>

  <div v-if="showModal" class="login-modal-overlay" @click="closeModal">
    <div class="login-modal" @click.stop>
      <button class="login-modal-close" @click="closeModal">×</button>
      <h2>Fazer login</h2>
      <label for="email">E-mail</label>
      <input id="email" type="email" placeholder="Digite seu e-mail" v-model="email" />
      <label for="password">Senha</label>
      <input id="password" type="password" placeholder="Digite sua senha" v-model="password" />
      <a href="#" class="login-modal-forgot-password">Esqueceu sua senha?</a>
      <button class="login-modal-button" @click="performLogin">Entrar</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isLoggedIn = ref(false); // Inicialmente deslogado
  const showModal = ref(false); // Controla a visibilidade do modal
  const email = ref('');
  const password = ref('');
  
  function openModal() {
    showModal.value = true;
  }

  function closeModal() {
    showModal.value = false;
    email.value = '';
    password.value = '';
  }

  function performLogin() {
    // validar e chamar API /to-do
    console.log('Email:', email.value);
    console.log('Password:', password.value);

    if (email.value && password.value) {
      isLoggedIn.value = true; // Simulando
      closeModal();
    }
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

  .login-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(17, 24, 39, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  .login-modal {
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    width: 90%;
    max-width: 400px;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  .login-modal-close {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 26px;
    cursor: pointer;
  }
  .login-modal h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .login-modal p {
    margin-bottom: 20px;
    font-size: 14px;
    color: #555;
  }
  .login-modal label {
    display: block;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  .login-modal input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    background-color: #f3f4f6;
    box-sizing: border-box;
  }
  .login-modal-forgot-password {
    display: block;
    text-align: right;
    font-size: 12px;
    margin-top: 10px;
    color: #555;
    text-decoration: none;
  }
  .login-modal-button {
    margin-top: 20px;
    width: 100%;
    padding: 12px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 9999px;
    font-weight: bold;
    cursor: pointer;
  }
  .login-modal-button:hover {
    background-color: #333;
  }
</style>