<template>
  <header class="header">
    <div class="logo">
      <h1>LACEN</h1>
    </div>

    <nav class="navigation">
      <ul>
        <li><a href="#">Institucional</a></li>
        <li><a href="#">Notícias</a></li>
        <li><a href="#">Profissionais</a></li>
        <li><a href="#">Perguntas Frequentes</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>

    <div class="actions">
      <button class="btn-cadastro">CADASTRE AMOSTRA</button>
      <button class="btn-user">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
  // Não precisa de lógica por enquanto
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
</style>