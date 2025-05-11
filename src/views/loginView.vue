<template>
  <div class="app">
    <!-- Conteúdo da página -->
    <HeaderLacen />
    <main>
    <!-- Modal com fundo escuro -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <button class="close" @click="showModal = false">×</button>
        <h2>Fazer login</h2>
        <p>Donec auctor lobortis metus</p>
        <label for="email">E-mail</label>
        <input id="email" type="email" placeholder="Digite seu e-mail" />
        <label for="password">Senha</label>
        <input id="password" type="password" placeholder="Digite sua senha" />
        <a href="#" class="forgot-password">Esqueceu sua senha?</a>
        <button class="login-button">Entrar</button>
      </div>
    </div>
  </main>
  </div>
</template>

<script>
import HeaderLacen from '@/components/HeaderLacen.vue'

export default {
  components: {
    HeaderLacen
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  font-family: 'Inter', sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

nav a,
nav button {
  margin: 0 10px;
  text-decoration: none;
  font-weight: 500;
  color: black;
  background: none;
  border: none;
  cursor: pointer;
}

main {
  padding: 40px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 24, 39, 0.7); /* fundo escuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
}

.modal h2 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}

.modal p {
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
}

.modal label {
  display: block;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 5px;
}

.modal input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #f3f4f6;
}

.forgot-password {
  display: block;
  text-align: right;
  font-size: 12px;
  margin-top: 10px;
  color: #555;
  text-decoration: none;
}

.login-button {
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
</style>