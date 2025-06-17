<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <router-link to="/" @click="scrollToTop">
            <div class="logo-content">
              <div class="logo-icon">
                <img src="../assets/img/logo/lacen-marcos.png" alt="FSPH Logo" class="logo-image" />
              </div>
              <h1 class="logo-text">LACEN</h1>
            </div>
          </router-link>
        </div>

        <nav class="navigation" :class="{ 'mobile-open': mobileMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="/institucional" class="nav-link">Institucional</a>
            </li>
            <li class="nav-item">
              <a href="/news" class="nav-link">Notícias</a>
            </li>
            <li class="nav-item">
              <a href="/professional" class="nav-link">Profissionais</a>
            </li>
            <li class="nav-item">
              <a href="/contact" class="nav-link">Contato</a>
            </li>
            
            <!-- Botões mobile - aparecem apenas no menu hamburger -->
            <div class="mobile-actions">
              <template v-if="isLoggedIn">
                <li class="nav-item mobile-action-item">
                  <button class="nav-link mobile-btn btn-sample-mobile" @click="openSampleModal">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14,2 14,8 20,8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                    Cadastrar Amostra
                  </button>
                </li>
                <li class="nav-item mobile-action-item">
                  <a href="#" class="nav-link mobile-profile-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Meu Perfil
                  </a>
                </li>
                <li class="nav-item mobile-action-item">
                  <a href="#" class="nav-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Configurações
                  </a>
                </li>
                <li class="nav-item mobile-action-item mobile-logout">
                  <button @click="logout" class="nav-link mobile-btn logout-mobile">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Sair
                  </button>
                </li>
              </template>

              <template v-else>
                <li class="nav-item mobile-action-item">
                  <button @click="openModal" class="nav-link mobile-btn btn-login-mobile">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                    Entrar
                  </button>
                </li>
              </template>
            </div>
          </ul>
        </nav>
        
        <div class="actions">
          <template v-if="isLoggedIn">
            <button class="btn-primary btn-sample" @click="openSampleModal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
              Cadastrar Amostra
            </button>

            <div class="user-menu">
              <button class="btn-user" @click="toggleUserMenu">
                <div class="user-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <div class="user-dropdown" :class="{ 'show': userMenuOpen }">
                <a href="#" class="dropdown-item">Meu Perfil</a>
                <a href="#" class="dropdown-item">Configurações</a>
                <hr class="dropdown-divider">
                <button @click="logout" class="dropdown-item logout-btn">Sair</button>
              </div>
            </div>
          </template>

          <template v-else>
            <button class="btn-primary" @click="openModal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              Entrar
            </button>
          </template>

          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  </div>

  <!-- Componente de Login -->
  <HeaderLacenLogin 
    v-model:showModal="showModal" 
    @login-success="handleLoginSuccess" 
  />

  <!-- Componente de Cadastro de Amostras -->
  <HeaderLacenAmostras 
    v-model:showModal="showSampleModal" 
    @sample-registered="handleSampleRegistered" 
  />
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import HeaderLacenLogin from './HeaderLacenLogin.vue';
  import HeaderLacenAmostras from './HeaderLacenAmostras.vue';

  const isLoggedIn = ref(false);
  const showModal = ref(false);
  const showSampleModal = ref(false);
  const mobileMenuOpen = ref(false);
  const userMenuOpen = ref(false);

  function openModal() {
    showModal.value = true;
    mobileMenuOpen.value = false;
  }

  function openSampleModal() {
    showSampleModal.value = true;
    mobileMenuOpen.value = false;
  }

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  }

  function toggleUserMenu() {
    userMenuOpen.value = !userMenuOpen.value;
  }

  function handleLoginSuccess(loginData) {
    console.log('Login realizado com sucesso:', loginData);
    isLoggedIn.value = true;
  }

  function handleSampleRegistered(sampleData) {
    console.log('Amostra cadastrada:', sampleData);
    // Processar os dados da amostra AQUI!!!
  }

  function logout() {
    isLoggedIn.value = false;
    userMenuOpen.value = false;
    mobileMenuOpen.value = false;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close dropdowns qd cklica fora!!
  function handleClickOutside(event) {
    if (!event.target.closest('.user-menu')) {
      userMenuOpen.value = false;
    }
    if (!event.target.closest('.navigation') && !event.target.closest('.mobile-menu-btn')) {
      mobileMenuOpen.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

  .header-wrapper {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--light-gradient);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(2, 145, 211, 0.2);
    transition: var(--transition-all);
  }

  .header {
    padding: var(--spacing-3) 0;
    font-family: var(--font-family);
  }

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Logo Styles */
  .logo-image {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }

  .logo a {
    text-decoration: none;
    color: inherit;
  }

  .logo-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    transition: var(--transition-transform);
  }

  .logo-content:hover {
    transform: translateY(-1px);
  }

  .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--primary-color);
    margin: 0;
    letter-spacing: -0.02em;
    transition: var(--transition-colors);
  }

  /* Navigation Styles */
  .navigation {
    display: flex;
    align-items: center;
  }

  .nav-list {
    display: flex;
    list-style: none;
    gap: var(--spacing-8);
    margin: 0;
    padding: 0;
  }

  .nav-link {
    text-decoration: none;
    color: var(--gray-700);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    padding: var(--spacing-2) 0;
    position: relative;
    transition: var(--transition-all);
  }

  /* Dark mode para nav-link */
  :root[data-theme="dark"] .nav-link {
    color: var(--gray-300);
  }

  .nav-link:hover {
    color: var(--primary-color);
    transform: translateY(-1px);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-gradient);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Mobile Actions - Hidden on desktop */
  .mobile-actions {
    display: none;
  }

  /* Actions Styles */
  .actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
  }

  .btn-primary {
    background: var(--primary-gradient);
    color: var(--white);
    border: none;
    padding: var(--spacing-3) var(--spacing-6);
    border-radius: var(--border-radius-xl);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    transition: var(--transition-all);
    box-shadow: 0 2px 8px rgba(2, 145, 211, 0.3);
    font-family: var(--font-family);
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(2, 145, 211, 0.4);
  }

  .btn-secondary {
    text-decoration: none;
    color: var(--gray-700);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--border-radius-xl);
    transition: var(--transition-all);
    background: var(--gray-100);
    font-family: var(--font-family);
  }

  /* Dark mode para btn-secondary */
  :root[data-theme="dark"] .btn-secondary {
    color: var(--gray-300);
    background: var(--gray-800);
  }

  .btn-secondary:hover {
    background: var(--gray-200);
    color: var(--primary-color);
    transform: translateY(-1px);
  }

  :root[data-theme="dark"] .btn-secondary:hover {
    background: var(--gray-700);
    color: var(--primary-color);
  }

  .btn-sample {
    font-size: var(--text-xs);
    padding: var(--spacing-2-5) var(--spacing-5);
  }

  /* Mobile Button Styles */
  .mobile-btn {
    background: none !important;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    width: 100%;
    text-align: left;
    font-family: var(--font-family);
    color: var(--gray-700);
    transition: var(--transition-colors);
  }

  /* Dark mode para mobile-btn */
  :root[data-theme="dark"] .mobile-btn {
    color: var(--gray-300);
  }

  .btn-sample-mobile {
    color: var(--primary-color) !important;
    font-weight: var(--font-semibold);
  }

  .btn-login-mobile {
    color: var(--primary-color) !important;
    font-weight: var(--font-semibold);
  }

  .logout-mobile {
    color: var(--error-color) !important;
  }

  .mobile-profile-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    color: var(--gray-700);
    transition: var(--transition-colors);
  }

  /* Dark mode para mobile-profile-link */
  :root[data-theme="dark"] .mobile-profile-link {
    color: var(--gray-300);
  }

  /* User Menu Styles */
  .user-menu {
    position: relative;
  }

  .btn-user {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-2);
    border-radius: var(--border-radius-xl);
    transition: var(--transition-all);
  }

  .btn-user:hover {
    background: var(--gray-100);
  }

  /* Dark mode para btn-user */
  :root[data-theme="dark"] .btn-user:hover {
    background: var(--gray-800);
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--border-radius-full);
    background: var(--primary-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
  }

  .chevron {
    transition: var(--transition-transform);
    color: var(--gray-500);
  }

  /* Dark mode para chevron */
  :root[data-theme="dark"] .chevron {
    color: var(--gray-400);
  }

  .user-menu.show .chevron {
    transform: rotate(180deg);
  }

  .user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--white);
    border-radius: var(--border-radius-xl);
    box-shadow: var(--shadow-xl);
    border: 1px solid var(--gray-200);
    min-width: 180px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: var(--transition-all);
    z-index: var(--z-dropdown);
  }

  /* Dark mode para user-dropdown */
  :root[data-theme="dark"] .user-dropdown {
    background: var(--gray-800);
    border-color: var(--gray-700);
  }

  .user-dropdown.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: var(--spacing-3) var(--spacing-4);
    color: var(--gray-700);
    text-decoration: none;
    font-size: var(--text-sm);
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    transition: var(--transition-all);
    font-family: var(--font-family);
  }

  /* Dark mode para dropdown-item */
  :root[data-theme="dark"] .dropdown-item {
    color: var(--gray-300);
  }

  .dropdown-item:hover {
    background: rgba(2, 145, 211, 0.05);
    color: var(--primary-color);
  }

  /* Dark mode para dropdown-item hover */
  :root[data-theme="dark"] .dropdown-item:hover {
    background: rgba(2, 145, 211, 0.1);
    color: var(--primary-color);
  }

  .dropdown-item:first-child {
    border-radius: var(--border-radius-xl) var(--border-radius-xl) 0 0;
  }

  .dropdown-item:last-child {
    border-radius: 0 0 var(--border-radius-xl) var(--border-radius-xl);
  }

  .dropdown-divider {
    margin: var(--spacing-2) 0;
    border: none;
    border-top: 1px solid var(--gray-200);
  }

  /* Dark mode para dropdown-divider */
  :root[data-theme="dark"] .dropdown-divider {
    border-top-color: var(--gray-700);
  }

  .logout-btn {
    color: var(--error-color);
  }

  .logout-btn:hover {
    background: rgba(220, 38, 38, 0.05);
    color: var(--error-color);
  }

  /* Dark mode para logout-btn hover */
  :root[data-theme="dark"] .logout-btn:hover {
    background: rgba(220, 38, 38, 0.1);
  }

  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-2);
    border-radius: var(--border-radius);
    color: var(--gray-700);
    transition: var(--transition-all);
  }

  /* Dark mode para mobile-menu-btn */
  :root[data-theme="dark"] .mobile-menu-btn {
    color: var(--gray-300);
  }

  .mobile-menu-btn:hover {
    background: var(--gray-100);
    color: var(--primary-color);
  }

  /* Dark mode para mobile-menu-btn hover */
  :root[data-theme="dark"] .mobile-menu-btn:hover {
    background: var(--gray-800);
    color: var(--primary-color);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .header-container {
      padding: 0 var(--spacing-4);
    }
    
    .actions .btn-primary,
    .actions .user-menu {
      display: none;
    }
    
    .navigation {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--white);
      border-top: 1px solid var(--gray-200);
      box-shadow: var(--shadow-lg);
    }

    /* Dark mode para navigation mobile */
    :root[data-theme="dark"] .navigation {
      background: var(--gray-800);
      border-top-color: var(--gray-700);
    }
    
    .navigation.mobile-open {
      display: block;
    }
    
    .nav-list {
      flex-direction: column;
      gap: 0;
      padding: var(--spacing-4);
    }
    
    .nav-item {
      border-bottom: 1px solid var(--gray-200);
    }

    /* Dark mode para nav-item mobile */
    :root[data-theme="dark"] .nav-item {
      border-bottom-color: var(--gray-700);
    }
    
    .nav-item:last-child {
      border-bottom: none;
    }
    
    .nav-link {
      display: block;
      padding: var(--spacing-4) 0;
    }

    /* Mobile Actions - Show on mobile */
    .mobile-actions {
      display: block;
      margin-top: var(--spacing-4);
      padding-top: var(--spacing-4);
      border-top: 1px solid var(--gray-200);
    }

    /* Dark mode para mobile-actions */
    :root[data-theme="dark"] .mobile-actions {
      border-top-color: var(--gray-700);
    }

    .mobile-action-item {
      border-bottom: 1px solid var(--gray-200) !important;
    }

    /* Dark mode para mobile-action-item */
    :root[data-theme="dark"] .mobile-action-item {
      border-bottom-color: var(--gray-700) !important;
    }

    .mobile-action-item:last-child {
      border-bottom: none !important;
    }

    .mobile-logout {
      margin-top: var(--spacing-2);
      padding-top: var(--spacing-2);
      border-top: 1px solid rgba(220, 38, 38, 0.1) !important;
    }

    /* Dark mode para mobile-logout */
    :root[data-theme="dark"] .mobile-logout {
      border-top: 1px solid rgba(220, 38, 38, 0.2) !important;
    }
    
    .mobile-menu-btn {
      display: block;
    }
    
    .logo-text {
      font-size: var(--text-xl);
    }
  }

  @media (max-width: 480px) {
    .logo-text {
      font-size: var(--text-lg);
    }

    .logo-image {
      width: 48px;
      height: 48px;
    }
  }
</style>