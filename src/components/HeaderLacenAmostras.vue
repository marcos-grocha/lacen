<template>
  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h2 class="modal-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
          Cadastrar Amostra Laboratorial
        </h2>
        <button class="close-btn" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <form @submit.prevent="submitForm" class="sample-form">
          <div class="form-section">
            <h3 class="section-title">
              <span class="section-icon">📋</span>
              Informações da Amostra
            </h3>
            <div class="form-grid">
              <div class="form-group">
                <label for="codigo" class="form-label">Código da Amostra*</label>
                <input 
                  type="text" 
                  id="codigo" 
                  v-model="formData.codigo"
                  class="form-input"
                  placeholder="Ex: LAC2025001"
                  required
                />
              </div>

              <div class="form-group">
                <label for="tipo" class="form-label">Tipo de Amostra*</label>
                <select 
                  id="tipo" 
                  v-model="formData.tipo"
                  class="form-select"
                  required
                  @change="onSampleTypeChange"
                >
                  <option value="">Selecione o tipo</option>
                  <optgroup 
                    v-for="(types, category) in getSampleTypesByCategory" 
                    :key="category" 
                    :label="getCategoryLabel(category)"
                  >
                    <option 
                      v-for="type in types" 
                      :key="type.value" 
                      :value="type.value"
                    >
                      {{ type.icon }} {{ type.label }}
                    </option>
                  </optgroup>
                </select>
              </div>

              <div class="form-group">
                <label for="origem" class="form-label">Origem/Município*</label>
                <input 
                  type="text" 
                  id="origem" 
                  v-model="formData.origem"
                  class="form-input"
                  placeholder="Município/Local de origem"
                  required
                />
              </div>

              <div class="form-group">
                <label for="dataColeta" class="form-label">Data de Coleta*</label>
                <input 
                  type="datetime-local" 
                  id="dataColeta" 
                  v-model="formData.dataColeta"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-group">
                <label for="responsavelColeta" class="form-label">Responsável pela Coleta*</label>
                <input 
                  type="text" 
                  id="responsavelColeta" 
                  v-model="formData.responsavelColeta"
                  class="form-input"
                  placeholder="Nome do responsável"
                  required
                />
              </div>

              <div class="form-group">
                <label for="prioridade" class="form-label">Prioridade</label>
                <select 
                  id="prioridade" 
                  v-model="formData.prioridade"
                  class="form-select"
                >
                  <option value="normal">🟢 Normal</option>
                  <option value="urgente">🟡 Urgente</option>
                  <option value="critica">🔴 Crítica</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Campos Específicos por Tipo de Amostra -->
          <div v-if="formData.tipo && getSpecificFields(formData.tipo).length > 0" class="form-section">
            <h3 class="section-title">
              <span class="section-icon">🔬</span>
              Informações Específicas - {{ getSampleTypeLabel(formData.tipo) }}
            </h3>
            <div class="form-grid">
              <div 
                v-for="field in getSpecificFields(formData.tipo)" 
                :key="field.name" 
                class="form-group"
              >
                <label :for="field.name" class="form-label">
                  {{ field.label }}{{ field.required ? '*' : '' }}
                </label>
                
                <input 
                  v-if="field.type === 'text' || field.type === 'number'"
                  :type="field.type"
                  :id="field.name"
                  v-model="formData.specificData[field.name]"
                  class="form-input"
                  :placeholder="field.placeholder"
                  :required="field.required"
                />
                
                <select 
                  v-else-if="field.type === 'select'"
                  :id="field.name"
                  v-model="formData.specificData[field.name]"
                  class="form-select"
                  :required="field.required"
                >
                  <option value="">Selecione...</option>
                  <option 
                    v-for="option in field.options" 
                    :key="option.value" 
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
                
                <textarea 
                  v-else-if="field.type === 'textarea'"
                  :id="field.name"
                  v-model="formData.specificData[field.name]"
                  class="form-textarea"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Análises Solicitadas -->
          <div v-if="formData.tipo && availableAnalyses.length > 0" class="form-section">
            <h3 class="section-title">
              <span class="section-icon">🧪</span>
              Análises Solicitadas
            </h3>
            <div class="analyses-grid">
              <div 
                v-for="(analyses, group) in groupedAnalyses" 
                :key="group" 
                class="analysis-group"
              >
                <h4 class="analysis-title">{{ group }}</h4>
                <div class="checkbox-group">
                  <label 
                    v-for="analysis in analyses" 
                    :key="analysis.value" 
                    class="checkbox-label"
                  >
                    <input 
                      type="checkbox" 
                      v-model="formData.analises" 
                      :value="analysis.value"
                    />
                    <span class="checkbox-text">{{ analysis.label }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Data de Envio e Recebimento -->
          <div class="form-section">
            <h3 class="section-title">
              <span class="section-icon">📅</span>
              Controle de Envio
            </h3>
            <div class="form-grid">
              <div class="form-group">
                <label for="dataEnvio" class="form-label">Data de Envio</label>
                <input 
                  type="date" 
                  id="dataEnvio" 
                  v-model="formData.dataEnvio"
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="dataRecebimento" class="form-label">Data de Recebimento</label>
                <input 
                  type="date" 
                  id="dataRecebimento" 
                  v-model="formData.dataRecebimento"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="laboratoristaResponsavel" class="form-label">Laboratorista Responsável</label>
                <input 
                  type="text" 
                  id="laboratoristaResponsavel" 
                  v-model="formData.laboratoristaResponsavel"
                  class="form-input"
                  placeholder="Nome do laboratorista"
                />
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3 class="section-title">
              <span class="section-icon">📝</span>
              Observações
            </h3>
            <div class="form-group">
              <label for="observacoes" class="form-label">Observações Adicionais</label>
              <textarea 
                id="observacoes" 
                v-model="formData.observacoes"
                class="form-textarea"
                placeholder="Informações adicionais sobre a amostra, condições de coleta, etc..."
                rows="4"
              ></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn-secondary" @click="closeModal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Cancelar
            </button>
            <button type="submit" class="btn-primary" :disabled="isSubmitting">
              <svg v-if="isSubmitting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="loading-icon">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {{ isSubmitting ? 'Cadastrando...' : 'Cadastrar Amostra' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed, defineProps, defineEmits } from 'vue'
  import { useSampleTypes } from '@/composables/useSampleTypes'

  defineProps({
    showModal: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['update:showModal', 'sample-registered'])

  const isSubmitting = ref(false)

  const {
    sampleTypes,
    getAnalysisForType,
    getSampleTypesByCategory,
    getCategoryLabel,
    getSpecificFields
  } = useSampleTypes()

  const formData = reactive({
    codigo: '',
    tipo: '',
    origem: '',
    dataColeta: '',
    responsavelColeta: '',
    prioridade: 'normal',
    analises: [],
    observacoes: '',
    dataEnvio: '',
    dataRecebimento: '',
    laboratoristaResponsavel: '',
    specificData: {}
  })

  const availableAnalyses = computed(() => {
    return getAnalysisForType(formData.tipo)
  })

  const groupedAnalyses = computed(() => {
    const grouped = {}
    availableAnalyses.value.forEach(analysis => {
      if (!grouped[analysis.group]) {
        grouped[analysis.group] = []
      }
      grouped[analysis.group].push(analysis)
    })
    return grouped
  })

  const getSampleTypeLabel = (sampleType) => {
    const type = sampleTypes.value.find(t => t.value === sampleType)
    return type ? type.label : ''
  }

  function onSampleTypeChange() {
    // Reset análises e dados específicos quando o tipo muda
    formData.analises = []
    formData.specificData = {}
  }

  function closeModal() {
    emit('update:showModal', false)
    resetForm()
  }

  function resetForm() {
    Object.assign(formData, {
      codigo: '',
      tipo: '',
      origem: '',
      dataColeta: '',
      responsavelColeta: '',
      prioridade: 'normal',
      analises: [],
      observacoes: '',
      dataEnvio: '',
      dataRecebimento: '',
      laboratoristaResponsavel: '',
      specificData: {}
    })
  }

  async function submitForm() {
    isSubmitting.value = true
    
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const sampleData = {
        ...formData,
        id: Date.now(),
        status: 'pendente',
        dataCadastro: new Date().toISOString(),
        tipoLabel: getSampleTypeLabel(formData.tipo)
      }

      console.log('Amostra cadastrada:', sampleData)
      
      emit('sample-registered', sampleData)
      closeModal()
      // chama api aqui!!
    } catch (error) {
      console.error('Erro ao cadastrar amostra:', error)
      // Tratar erro aqui!!
    } finally {
      isSubmitting.value = false
    }
  }
</script>

<style scoped>
  /* Modal Overlay */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal);
    padding: var(--spacing-4);
    backdrop-filter: blur(4px);
  }

  /* Modal Container */
  .modal-container {
    background-color: var(--white);
    border-radius: var(--border-radius-xl);
    box-shadow: var(--shadow-2xl);
    max-width: 90vw;
    max-height: 90vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .modal-container {
      max-width: 800px;
    }
  }

  @media (min-width: 1024px) {
    .modal-container {
      max-width: 1000px;
    }
  }

  /* Modal Header */
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-6);
    background: var(--primary-gradient);
    color: var(--white);
    border-bottom: 1px solid var(--gray-200);
  }

  .modal-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    color: var(--white);
  }

  .close-btn {
    background: none;
    border: none;
    color: var(--white);
    cursor: pointer;
    padding: var(--spacing-2);
    border-radius: var(--border-radius);
    transition: var(--transition-colors);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* Modal Body */
  .modal-body {
    overflow-y: auto;
    flex: 1;
    padding: 0;
  }

  /* Form Styles */
  .sample-form {
    padding: var(--spacing-6);
  }

  /* Form Sections */
  .form-section {
    margin-bottom: var(--spacing-8);
  }

  .form-section:last-child {
    margin-bottom: 0;
  }

  .section-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--gray-900);
    margin-bottom: var(--spacing-4);
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    padding-bottom: var(--spacing-2);
    border-bottom: 2px solid var(--primary-lighter);
  }

  .section-icon {
    font-size: var(--text-xl);
  }

  /* Form Grid */
  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }

  @media (min-width: 768px) {
    .form-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .form-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Form Groups */
  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--gray-700);
    margin-bottom: var(--spacing-2);
    display: block;
  }

  /* Form Inputs */
  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    padding: var(--spacing-3);
    border: 1px solid var(--gray-300);
    border-radius: var(--border-radius);
    font-size: var(--text-sm);
    font-family: var(--font-family);
    color: var(--gray-900);
    background-color: var(--white);
    transition: var(--transition-colors);
  }

  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(2, 145, 211, 0.1);
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: var(--gray-400);
  }

  .form-select {
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right var(--spacing-3) center;
    background-repeat: no-repeat;
    background-size: 1.2em 1.2em;
    padding-right: var(--spacing-10);
  }

  .form-textarea {
    resize: vertical;
    min-height: 80px;
    line-height: 1.5;
  }

  /* Analyses Grid */
  .analyses-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }

  @media (min-width: 768px) {
    .analyses-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Analysis Groups */
  .analysis-group {
    background-color: var(--gray-50);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-4);
    border: 1px solid var(--gray-200);
  }

  .analysis-title {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    color: var(--gray-800);
    margin-bottom: var(--spacing-3);
    padding-bottom: var(--spacing-2);
    border-bottom: 1px solid var(--gray-300);
  }

  /* Checkbox Groups */
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    cursor: pointer;
    padding: var(--spacing-1);
    border-radius: var(--border-radius);
    transition: var(--transition-colors);
  }

  .checkbox-label:hover {
    background-color: var(--gray-100);
  }

  .checkbox-label input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--primary-color);
    cursor: pointer;
  }

  .checkbox-text {
    font-size: var(--text-sm);
    color: var(--gray-700);
    user-select: none;
  }

  /* Form Actions */
  .form-actions {
    display: flex;
    gap: var(--spacing-3);
    justify-content: flex-end;
    padding-top: var(--spacing-6);
    border-top: 1px solid var(--gray-200);
    margin-top: var(--spacing-6);
  }

  @media (max-width: 768px) {
    .form-actions {
      flex-direction: column;
    }
  }

  /* Buttons */
  .btn-primary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3) var(--spacing-6);
    border-radius: var(--border-radius);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    text-decoration: none;
    transition: var(--transition-all);
    cursor: pointer;
    border: 1px solid transparent;
    min-height: 44px;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }

  .btn-primary:hover:not(:disabled) {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
  }

  .btn-primary:disabled {
    background-color: var(--gray-400);
    border-color: var(--gray-400);
    cursor: not-allowed;
  }

  .btn-secondary {
    background-color: var(--white);
    color: var(--gray-700);
    border-color: var(--gray-300);
  }

  .btn-secondary:hover {
    background-color: var(--gray-50);
    border-color: var(--gray-400);
    color: var(--gray-800);
  }

  /* Loading Animation */
  .loading-icon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Optgroup Styling */
  optgroup {
    font-weight: var(--font-semibold);
    color: var(--gray-800);
    background-color: var(--gray-50);
  }

  optgroup option {
    font-weight: var(--font-normal);
    color: var(--gray-700);
    background-color: var(--white);
    padding-left: var(--spacing-4);
  }

  /* Scrollbar Styling */
  .modal-body::-webkit-scrollbar {
    width: 6px;
  }

  .modal-body::-webkit-scrollbar-track {
    background: var(--gray-100);
  }

  .modal-body::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: var(--border-radius-full);
  }

  .modal-body::-webkit-scrollbar-thumb:hover {
    background: var(--gray-400);
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .modal-overlay {
      padding: var(--spacing-2);
    }
    
    .modal-header {
      padding: var(--spacing-4);
    }
    
    .sample-form {
      padding: var(--spacing-4);
    }
    
    .modal-title {
      font-size: var(--text-lg);
    }
    
    .section-title {
      font-size: var(--text-base);
    }
    
    .analyses-grid {
      grid-template-columns: 1fr;
    }
    
    .form-actions {
      gap: var(--spacing-2);
    }
    
    .btn-primary,
    .btn-secondary {
      padding: var(--spacing-3) var(--spacing-4);
    }
  }

  /* Accessibility Improvements */
  @media (prefers-reduced-motion: reduce) {
    .loading-icon {
      animation: none;
    }
  }

  /* Focus Styles */
  .close-btn:focus,
  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus,
  .checkbox-label:focus-within,
  .btn-primary:focus,
  .btn-secondary:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* High Contrast Mode Support */
  @media (prefers-contrast: high) {
    .modal-container {
      border: 2px solid var(--gray-900);
    }
    
    .form-input,
    .form-select,
    .form-textarea {
      border-width: 2px;
    }
    
    .btn-primary,
    .btn-secondary {
      border-width: 2px;
    }
  }
</style>