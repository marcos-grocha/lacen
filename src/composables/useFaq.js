import { ref } from 'vue'

export function useFaq() {
  const faqItems = ref([
    {
      question: 'Como funciona o processo de análise laboratorial?',
      answer: 'Nosso processo de análise laboratorial segue rigorosos padrões de qualidade. Desde a coleta até a emissão do resultado, cada etapa é monitorada por profissionais especializados para garantir precisão e confiabilidade.'
    },
    {
      question: 'Qual o prazo para entrega dos resultados?',
      answer: 'O prazo varia conforme o tipo de exame. Exames simples ficam prontos em 24-48 horas, enquanto análises mais complexas podem levar de 5 a 15 dias úteis. Você será informado sobre o prazo específico no momento da coleta.'
    },
    {
      question: 'Como posso acessar meus resultados?',
      answer: 'Os resultados podem ser acessados através do nosso portal online, retirados presencialmente em nossa unidade ou enviados por e-mail, conforme sua preferência. Você receberá uma notificação assim que estiverem disponíveis.'
    },
    {
      question: 'Preciso de preparo especial para os exames?',
      answer: 'Alguns exames requerem preparo específico, como jejum ou suspensão de medicamentos. Todas as orientações serão fornecidas no momento do agendamento e confirmadas por SMS ou e-mail.'
    },
    {
      question: 'Quais são os métodos de pagamento aceitos?',
      answer: 'Aceitamos diversas formas de pagamento: dinheiro, cartões de débito e crédito, PIX e convênios médicos. Para pagamentos parcelados, consulte nossas condições especiais.'
    },
    {
      question: 'Como agendar uma coleta domiciliar?',
      answer: 'O agendamento pode ser feito através do nosso site, aplicativo ou telefone. Nossa equipe está disponível para coletas domiciliares em toda a região metropolitana, com horários flexíveis.'
    }
  ])

  const selectedFaq = ref({
    question: 'Como garantimos a qualidade dos nossos serviços?',
    answer: `Nossa qualidade é assegurada através de múltiplas camadas de controle. Contamos com equipamentos de última geração, profissionais altamente qualificados e certificações nacionais e internacionais. 

    Realizamos auditorias internas regulares, participamos de programas de controle de qualidade externos e mantemos nossos processos sempre atualizados com as melhores práticas do mercado.

    Além disso, investimos continuamente em treinamento da nossa equipe e na modernização de nossa infraestrutura para oferecer sempre o melhor serviço aos nossos clientes.`
  })

  return {
    faqItems,
    selectedFaq
  }
}