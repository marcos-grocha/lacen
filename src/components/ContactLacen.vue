<template>
  <section class="contact-section">
    <h2>Contato</h2>
    
    <div class="contact-container">
      <div class="contact-form">
        <p class="contact-description">
          Aqui seria uma descriçao, não intendi a finalidade mas implementei.
        </p>
        
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <select v-model="formData.assunto" class="form-control">
              <option value="" disabled selected>Assunto</option>
              <option value="informacao">Informação</option>
              <option value="reclamacao">Reclamação</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          
          <div class="form-group">
            <input 
              type="text" 
              v-model="formData.nome" 
              class="form-control" 
              placeholder="Nome completo"
            >
          </div>
          
          <div class="form-group">
            <input 
              type="email" 
              v-model="formData.email" 
              class="form-control" 
              placeholder="Email"
            >
          </div>
          
          <div class="form-group">
            <textarea 
              v-model="formData.descricao" 
              class="form-control" 
              placeholder="Descrição"
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" class="submit-button">ENVIAR</button>
        </form>
      </div>
      
      <div class="contact-map">
        <div class="map-container">
          <!-- Placeholder para o mapa -->
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f0f0f0" />
            <path d="M50,50 L350,50 L350,250 L50,250 Z" fill="none" stroke="#ccc" stroke-width="1" />
            <path d="M100,100 C150,50 200,150 250,100 S300,200 350,150" fill="none" stroke="#ddd" stroke-width="2" />
            <circle cx="200" cy="150" r="5" fill="#000" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  const formData = ref({
    assunto: '',
    nome: '',
    email: '',
    descricao: ''
  });

  function submitForm() {
    console.log('Formulário enviado:', formData.value);
    // lógica para enviar o formulário, não sei se será necessário
  }
</script>

<style scoped>
  .contact-section {
    padding: 2rem 0;
  }

  .contact-container {
    display: flex;
    gap: 2rem;
  }

  .contact-form {
    flex: 1;
  }

  .contact-description {
    margin-bottom: 1.5rem;
    color: #666;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  textarea.form-control {
    resize: vertical;
  }

  .submit-button {
    background-color: #000;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  .contact-map {
    flex: 1;
  }

  .map-container {
    height: 100%;
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
  }
</style>