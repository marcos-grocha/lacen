<template>
  <Transition name="modal">
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">Bem-vindo de volta</h2>
          <p class="modal-subtitle">Faça login em sua conta</p>
          <button class="modal-close" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <form class="modal-form" @submit.prevent="performLogin">
          <div class="form-group">
            <label for="email" class="form-label">E-mail</label>
            <div class="input-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="input-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input 
                id="email" 
                type="email" 
                placeholder="Digite seu e-mail" 
                v-model="email" 
                class="form-input"
                required 
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="password" class="form-label">Senha</label>
            <div class="input-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="input-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <circle cx="12" cy="16" r="1"></circle>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input 
                id="password" 
                type="password" 
                placeholder="Digite sua senha" 
                v-model="password" 
                class="form-input"
                required 
              />
            </div>
          </div>
          
          <div class="form-options">
            <label class="checkbox-wrapper">
              <input type="checkbox" v-model="rememberMe">
              <span class="checkbox-label">Lembrar de mim</span>
            </label>
            <a href="#" class="forgot-password">Esqueceu sua senha?</a>
          </div>
          
          <button type="submit" class="btn-login" :disabled="!email || !password">
            <span v-if="!isLoading">Entrar</span>
            <div v-else class="loading-spinner"></div>
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';

  // Props
  const props = defineProps({
    showModal: {
      type: Boolean,
      default: false
    }
  });

  // Emits
  const emit = defineEmits(['update:showModal', 'login-success']);

  // Estado local
  const email = ref('');
  const password = ref('');
  const rememberMe = ref(false);
  const isLoading = ref(false);

  // Watcher para sincronizar o showModal com o prop
  watch(() => props.showModal, (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden';
    }
  });

  function closeModal() {
    emit('update:showModal', false);
    document.body.style.overflow = '';
    resetForm();
  }

  function resetForm() {
    email.value = '';
    password.value = '';
    rememberMe.value = false;
    isLoading.value = false;
  }

  async function performLogin() {
    if (!email.value || !password.value) return;
    
    isLoading.value = true;
    
    // Simular API call
    setTimeout(() => {
      console.log('Email:', email.value);
      console.log('Password:', password.value);
      console.log('Remember me:', rememberMe.value);
      
      const loginData = {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value
      };
      
      emit('login-success', loginData);
      isLoading.value = false;
      closeModal();
    }, 1500);
  }
</script>

<style scoped>
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--z-modal);
    padding: var(--spacing-4);
  }

  .modal-container {
    background: var(--white);
    border-radius: var(--border-radius-3xl);
    width: 100%;
    max-width: 450px;
    box-shadow: var(--shadow-2xl);
    overflow: hidden;
    position: relative;
  }

  :root[data-theme="dark"] .modal-container {
    background: var(--gray-800);
  }

  .modal-header {
    padding: var(--spacing-8);
    text-align: center;
    position: relative;
    background: linear-gradient(135deg, rgba(2, 145, 211, 0.05), rgba(6, 182, 212, 0.05));
  }

  :root[data-theme="dark"] .modal-header {
    background: linear-gradient(135deg, rgba(2, 145, 211, 0.1), rgba(6, 182, 212, 0.1));
  }

  .modal-title {
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-2) 0;
    font-family: var(--font-family);
  }

  :root[data-theme="dark"] .modal-title {
    color: var(--white);
  }

  .modal-subtitle {
    color: var(--gray-500);
    font-size: var(--text-sm);
    margin: 0;
    font-family: var(--font-family);
  }

  :root[data-theme="dark"] .modal-subtitle {
    color: var(--gray-400);
  }

  .modal-close {
    position: absolute;
    top: var(--spacing-4);
    right: var(--spacing-4);
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-2);
    border-radius: var(--border-radius);
    color: var(--gray-500);
    transition: var(--transition-all);
  }

  :root[data-theme="dark"] .modal-close {
    color: var(--gray-400);
  }

  .modal-close:hover {
    background: var(--gray-100);
    color: var(--gray-700);
  }

  :root[data-theme="dark"] .modal-close:hover {
    background: var(--gray-700);
    color: var(--gray-300);
  }

  /* Form Styles */
  .modal-form {
    padding: 0 var(--spacing-8) var(--spacing-8);
  }

  .form-group {
    margin-bottom: var(--spacing-6);
  }

  .form-label {
    display: block;
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--gray-700);
    margin-bottom: var(--spacing-2);
    font-family: var(--font-family);
  }

  :root[data-theme="dark"] .form-label {
    color: var(--gray-300);
  }

  .input-wrapper {
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: var(--spacing-4);
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-400);
    pointer-events: none;
  }

  .form-input {
    width: 100%;
    padding: var(--spacing-4) var(--spacing-4) var(--spacing-4) var(--spacing-12);
    border: 2px solid var(--gray-200);
    border-radius: var(--border-radius-xl);
    font-size: var(--text-sm);
    background: var(--gray-50);
    transition: var(--transition-all);
    box-sizing: border-box;
    font-family: var(--font-family);
    color: var(--gray-800);
  }

  :root[data-theme="dark"] .form-input {
    background: var(--gray-700);
    border-color: var(--gray-600);
    color: var(--white);
  }

  .form-input:focus {
    outline: none;
    border-color: var(--primary-color);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(2, 145, 211, 0.1);
  }

  :root[data-theme="dark"] .form-input:focus {
    background: var(--gray-800);
    box-shadow: 0 0 0 3px rgba(2, 145, 211, 0.2);
  }

  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-8);
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    cursor: pointer;
  }

  .checkbox-wrapper input[type="checkbox"] {
    width: var(--spacing-4);
    height: var(--spacing-4);
    accent-color: var(--primary-color);
  }

  .checkbox-label {
    font-size: var(--text-sm);
    color: var(--gray-700);
    font-family: var(--font-family);
  }

  :root[data-theme="dark"] .checkbox-label {
    color: var(--gray-300);
  }

  .forgot-password {
    color: var(--primary-color);
    text-decoration: none;
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    transition: var(--transition-colors);
    font-family: var(--font-family);
  }

  .forgot-password:hover {
    color: var(--primary-dark);
  }

  .btn-login {
    width: 100%;
    padding: var(--spacing-4);
    background: var(--primary-gradient);
    color: var(--white);
    border: none;
    border-radius: var(--border-radius-xl);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: var(--transition-all);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    font-family: var(--font-family);
  }

  .btn-login:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(2, 145, 211, 0.4);
  }

  .btn-login:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: var(--border-radius-full);
    border-top-color: var(--white);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Modal Transitions */
  .modal-enter-active,
  .modal-leave-active {
    transition: var(--transition-all);
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .modal-container {
      margin: var(--spacing-4);
      max-width: none;
    }
    
    .modal-header {
      padding: var(--spacing-6);
    }
    
    .modal-form {
      padding: 0 var(--spacing-6) var(--spacing-6);
    }
  }

  @media (max-width: 480px) {
    .form-options {
      flex-direction: column;
      gap: var(--spacing-4);
      align-items: flex-start;
    }
  }
</style>