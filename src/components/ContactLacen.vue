<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-form-container">
          <div class="card">
            <div class="card-header">
              <h3 class="title mb-2">Entre em Contato</h3>
              <p class="subtitle text-secondary mb-0">
                Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
              </p>
            </div>
            
            <div class="card-body">
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="assunto" class="form-label">Assunto *</label>
                    <select 
                      id="assunto"
                      v-model="formData.assunto" 
                      class="form-control"
                      :class="{ 'form-control-error': errors.assunto }"
                      required
                    >
                      <option value="" disabled>Selecione um assunto</option>
                      <option value="informacao">Solicitação de Informação</option>
                      <option value="reclamacao">Reclamação</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="elogio">Elogio</option>
                      <option value="outros">Outros</option>
                    </select>
                    <span v-if="errors.assunto" class="form-error">{{ errors.assunto }}</span>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group form-group-half">
                    <label for="nome" class="form-label">Nome Completo *</label>
                    <input 
                      id="nome"
                      type="text" 
                      v-model="formData.nome" 
                      class="form-control"
                      :class="{ 'form-control-error': errors.nome }"
                      placeholder="Digite seu nome completo"
                      required
                    >
                    <span v-if="errors.nome" class="form-error">{{ errors.nome }}</span>
                  </div>
                  
                  <div class="form-group form-group-half">
                    <label for="email" class="form-label">E-mail *</label>
                    <input 
                      id="email"
                      type="email" 
                      v-model="formData.email" 
                      class="form-control"
                      :class="{ 'form-control-error': errors.email }"
                      placeholder="seu@email.com"
                      required
                    >
                    <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group form-group-half">
                    <label for="telefone" class="form-label">Telefone</label>
                    <input 
                      id="telefone"
                      type="tel" 
                      v-model="formData.telefone" 
                      class="form-control"
                      placeholder="(79) 9 9999-9999"
                      @input="formatPhone"
                    >
                  </div>
                  
                  <div class="form-group form-group-half">
                    <label for="cidade" class="form-label">Cidade</label>
                    <input 
                      id="cidade"
                      type="text" 
                      v-model="formData.cidade" 
                      class="form-control"
                      placeholder="Sua cidade"
                    >
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="descricao" class="form-label">Mensagem *</label>
                    <textarea 
                      id="descricao"
                      v-model="formData.descricao" 
                      class="form-control form-textarea"
                      :class="{ 'form-control-error': errors.descricao }"
                      placeholder="Descreva detalhadamente sua solicitação, dúvida ou comentário..."
                      rows="5"
                      required
                    ></textarea>
                    <div class="form-helper">
                      <span class="char-counter" :class="{ 'text-warning': charCount > 450, 'text-error': charCount > 500 }">
                        {{ charCount }}/500 caracteres
                      </span>
                    </div>
                    <span v-if="errors.descricao" class="form-error">{{ errors.descricao }}</span>
                  </div>
                </div>

                <div class="form-actions">
                  <button 
                    type="button" 
                    @click="clearForm" 
                    class="btn btn-secondary mr-3"
                    :disabled="isSubmitting"
                  >
                    Limpar Formulário
                  </button>
                  <button 
                    type="submit" 
                    class="btn btn-primary"
                    :disabled="isSubmitting || !isFormValid"
                  >
                    <span v-if="isSubmitting" class="loading-spinner"></span>
                    {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="contact-info-container">
          <div class="card contact-info-card">
            <div class="card-body">
              <h4 class="title mb-4 text-primary">Informações de Contato</h4>
              
              <div class="contact-info-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h5 class="contact-title">Endereço</h5>
                  <p class="contact-text">
                    R. Campo do Brito, 551<br>
                    Salgado Filho<br>
                    Aracaju - SE, 49037-120
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h5 class="contact-title">Telefone</h5>
                  <p class="contact-text">
                    <a href="tel:+557932598100" class="contact-link">(79) 3259-8100</a><br>
                    <span class="text-sm text-secondary">Segunda a sexta, 8h às 17h</span>
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h5 class="contact-title">E-mail</h5>
                  <p class="contact-text">
                    <a href="mailto:contato@lacen.se.gov.br" class="contact-link">contato@lacen.se.gov.br</a><br>
                    <span class="text-sm text-secondary">Resposta em até 48h</span>
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h5 class="contact-title">Horário de Funcionamento</h5>
                  <p class="contact-text">
                    Segunda a sexta: 8h às 17h<br>
                    <span class="text-sm text-secondary">Plantão 24h para emergências</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card map-card">
            <div class="card-body p-0">
              <div class="map-container">
                <div class="map-placeholder">
                  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="map-svg">
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGradient)" />
                    
                    <!-- Ruas simuladas -->
                    <path d="M50,100 L350,100" stroke="#cbd5e1" stroke-width="2" />
                    <path d="M50,150 L350,150" stroke="#cbd5e1" stroke-width="2" />
                    <path d="M50,200 L350,200" stroke="#cbd5e1" stroke-width="2" />
                    <path d="M100,50 L100,250" stroke="#cbd5e1" stroke-width="2" />
                    <path d="M200,50 L200,250" stroke="#cbd5e1" stroke-width="2" />
                    <path d="M300,50 L300,250" stroke="#cbd5e1" stroke-width="2" />
                    
                    <!-- Marcador do LACEN -->
                    <circle cx="200" cy="150" r="8" fill="#0291d3" stroke="#ffffff" stroke-width="2" />
                    <circle cx="200" cy="150" r="3" fill="#ffffff" />
                    
                    <!-- Texto indicativo -->
                    <text x="200" y="180" text-anchor="middle" fill="#475569" font-size="12" font-family="var(--font-family)">
                      LACEN-SE
                    </text>
                  </svg>
                  <div class="map-overlay">
                    <div class="map-info">
                      <p class="text-sm text-secondary mb-2">Localização do LACEN-SE</p>
                      <a 
                        href="https://maps.google.com/?q=LACEN+Sergipe+Aracaju" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="btn btn-primary btn-sm"
                      >
                        Ver no Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';

  // Estado do formulário
  const formData = ref({
    assunto: '',
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    descricao: ''
  });

  // Estado de controle
  const isSubmitting = ref(false);
  const errors = ref({});

  // Computed properties
  const charCount = computed(() => formData.value.descricao.length);

  const isFormValid = computed(() => {
    return formData.value.assunto && 
          formData.value.nome && 
          formData.value.email && 
          formData.value.descricao &&
          charCount.value <= 500;
  });

  function formatPhone(event) {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length >= 11) {
      value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
    } else if (value.length >= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    
    formData.value.telefone = value;
  }

  function validateForm() {
    errors.value = {};
    
    if (!formData.value.assunto) {
      errors.value.assunto = 'Por favor, selecione um assunto.';
    }
    
    if (!formData.value.nome) {
      errors.value.nome = 'Nome é obrigatório.';
    } else if (formData.value.nome.length < 2) {
      errors.value.nome = 'Nome deve ter pelo menos 2 caracteres.';
    }
    
    if (!formData.value.email) {
      errors.value.email = 'E-mail é obrigatório.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
      errors.value.email = 'E-mail inválido.';
    }
    
    if (!formData.value.descricao) {
      errors.value.descricao = 'Mensagem é obrigatória.';
    } else if (formData.value.descricao.length < 10) {
      errors.value.descricao = 'Mensagem deve ter pelo menos 10 caracteres.';
    } else if (formData.value.descricao.length > 500) {
      errors.value.descricao = 'Mensagem deve ter no máximo 500 caracteres.';
    }
    
    return Object.keys(errors.value).length === 0;
  }

  async function submitForm() {
    if (!validateForm()) return;
    
    isSubmitting.value = true;
    
    try {
      // Simula envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Formulário enviado com sucesso:', formData.value);
      
      // Aqui tem que implementar de verdade kkk
      // exx: await api.enviarContato(formData.value);
      
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      clearForm();
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      isSubmitting.value = false;
    }
  }

  function clearForm() {
    formData.value = {
      assunto: '',
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      descricao: ''
    };
    errors.value = {};
  }
</script>

<style scoped>
  .contact-section {
    padding: var(--spacing-16) 0;
    background: var(--subtle-gradient);
    min-height: 80vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-4);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--spacing-8);
    align-items: start;
  }

  /* Formulário */
  .contact-form-container {
    width: 100%;
  }

  .contact-form {
    width: 100%;
  }

  .form-row {
    display: flex;
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-5);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .form-group-half {
    flex: 1;
  }

  .form-label {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--gray-700);
    margin-bottom: var(--spacing-2);
  }

  .form-control {
    padding: var(--spacing-3);
    border: 1px solid var(--gray-300);
    border-radius: var(--border-radius);
    font-size: var(--text-base);
    font-family: var(--font-family);
    transition: var(--transition-colors);
    background-color: var(--white);
  }

  .form-control:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(2, 145, 211, 0.1);
  }

  .form-control-error {
    border-color: var(--error-color);
  }

  .form-control-error:focus {
    border-color: var(--error-color);
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .form-helper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--spacing-1);
  }

  .char-counter {
    font-size: var(--text-xs);
    color: var(--gray-500);
  }

  .form-error {
    color: var(--error-color);
    font-size: var(--text-xs);
    margin-top: var(--spacing-1);
  }

  .form-actions {
    display: flex;
    gap: var(--spacing-3);
    margin-top: var(--spacing-6);
  }

  .mr-3 {
    margin-right: var(--spacing-3);
  }

  /* Informações de contato */
  .contact-info-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .contact-info-card {
    height: fit-content;
  }

  .contact-info-item {
    display: flex;
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-6);
  }

  .contact-info-item:last-child {
    margin-bottom: 0;
  }

  .contact-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    background: var(--primary-lighter);
    border-radius: var(--border-radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
  }

  .contact-details {
    flex: 1;
  }

  .contact-title {
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin: 0 0 var(--spacing-1) 0;
  }

  .contact-text {
    color: var(--gray-600);
    margin: 0;
    line-height: 1.6;
  }

  .contact-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: var(--font-medium);
  }

  .contact-link:hover {
    text-decoration: underline;
  }

  /* Mapa */
  .map-card {
    height: 280px;
  }

  .map-container {
    height: 100%;
    position: relative;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
  }

  .map-placeholder {
    height: 100%;
    position: relative;
    background: var(--gray-100);
  }

  .map-svg {
    width: 100%;
    height: 100%;
  }

  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition-opacity);
  }

  .map-placeholder:hover .map-overlay {
    opacity: 1;
  }

  .map-info {
    text-align: center;
    color: var(--white);
  }

  /* Loading spinner */
  .loading-spinner {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: var(--white);
    animation: spin 1s ease-in-out infinite;
    margin-right: var(--spacing-2);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .btn-sm {
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--text-sm);
  }

  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-6);
    }
    
    .contact-info-container {
      order: -1;
    }
  }

  @media (max-width: 768px) {
    .contact-section {
      padding: var(--spacing-8) 0;
    }
    
    .form-row {
      flex-direction: column;
      gap: 0;
    }
    
    .form-actions {
      flex-direction: column;
    }
    
    .form-actions .btn {
      width: 100%;
    }
    
    .contact-info-item {
      gap: var(--spacing-3);
    }
    
    .contact-icon {
      width: 36px;
      height: 36px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 var(--spacing-3);
    }
    
    .card-body {
      padding: var(--spacing-4);
    }
    
    .card-header {
      padding: var(--spacing-4);
    }
  }
</style>