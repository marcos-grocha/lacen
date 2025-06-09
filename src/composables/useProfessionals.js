import { ref } from 'vue'

export function useProfessionals() {
  const professionals = ref([
    { 
      id: 1, 
      name: 'Fulano Ciclano 1', 
      role: 'Biomédico',
      photo: new URL('@/assets/img/perfil-user/homem-default.png', import.meta.url).href,
      bio: 'Profissional especializado em análises clínicas, com mais de 10 anos de experiência na área de diagnóstico laboratorial e controle de qualidade.',
      website: 'https://exemplo.com',
      email: 'fulano1@fsph.se.gov.br'
    },
    { 
      id: 2, 
      name: 'Fulano Ciclano 2', 
      role: 'Biomédica',
      photo: new URL('@/assets/img/perfil-user/mulher-default.png', import.meta.url).href,
      bio: 'Especialista em biologia molecular e microbiologia, com foco em pesquisas inovadoras e desenvolvimento de novos métodos diagnósticos.',
      email: 'fulano2@fsph.se.gov.br'
    },
    { 
      id: 3, 
      name: 'Marcos Guimarães', 
      role: 'Desenvolvedor de Software',
      photo: new URL('@/assets/img/perfil-user/gmarcos-dev.png', import.meta.url).href,
      bio: 'Desenvolvedor especialista em Ruby on Rails, construindo soluções web através de Desenvolvimento Orientado a Testes (TDD) e práticas ágeis. Apaixonado pelo processo de aprendizagem em novas tecnologias e motivado a buscar excelência em suas soluções.',
      website: 'https://gmarcos-dev.surge.sh/',
      email: 'gmarcos.dev@gmail.com'
    },
    { 
      id: 4, 
      name: 'Fulano Ciclano 4', 
      role: 'Biomédico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '',
      email: 'fulano4@fsph.se.gov.br'
    },
    { 
      id: 5, 
      name: 'Fulano Ciclano 5', 
      role: 'Desenvolvedora Front-End',
      photo: new URL('@/assets/img/perfil-user/mulher-default.png', import.meta.url).href,
      bio: 'Desenvolvedora full-stack com experiência em Vue.js, Node.js e bancos de dados SQL/NoSQL, focada em criar interfaces modernas e intuitivas.',
      website: 'https://portfolio-exemplo.com',
      email: 'fulano5@fsph.se.gov.br'
    },
    { 
      id: 6, 
      name: 'Fulano Ciclano 6', 
      role: 'Biomédico',
      photo: new URL('@/assets/img/perfil-user/homem-default.png', import.meta.url).href,
      bio: '',
      email: 'fulano6@fsph.se.gov.br'
    },
    { 
      id: 7, 
      name: 'Fulano Ciclano 7', 
      role: 'Biomédico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '',
      email: 'fulano7@fsph.se.gov.br'
    },
    { 
      id: 8, 
      name: 'Fulano Ciclano 8', 
      role: 'Biomédica',
      photo: new URL('@/assets/img/perfil-user/mulher-default.png', import.meta.url).href,
      bio: '',
      email: 'fulano8@fsph.se.gov.br'
    },
    { 
      id: 9, 
      name: 'Fulano Ciclano 9', 
      role: 'Biomédica',
      photo: new URL('@/assets/img/perfil-user/mulher-default.png', import.meta.url).href,
      bio: '',
      email: 'fulano9@fsph.se.gov.br'
    },
    { 
      id: 10, 
      name: 'Fulano Ciclano 10', 
      role: 'Biomédico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '',
      email: 'fulano10@fsph.se.gov.br'
    },
    { 
      id: 11, 
      name: 'Fulano Ciclano 11', 
      role: 'Biomédico',
      photo: 'https://via.placeholder.com/300x400',
      bio: '',
      email: 'fulano11@fsph.se.gov.br'
    },
    { 
      id: 12, 
      name: 'Fulano Ciclano 12', 
      role: 'Biomédico',
      photo: new URL('@/assets/img/perfil-user/homem-default.png', import.meta.url).href,
      bio: '',
      email: 'fulano12@fsph.se.gov.br'
    }
  ])

  return {
    professionals
  }
}