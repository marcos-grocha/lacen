import { ref } from 'vue'
import newsImg1 from '@/assets/img/news/news-img-1.png'
import newsImg2 from '@/assets/img/news/news-img-2.png'
import newsImg3 from '@/assets/img/news/news-img-3.png'

export function useNews() {
  const news = ref([
    {
      id: 1,
      title: 'Novos Protocolos de Segurança Implementados no Laboratório',
      excerpt: 'Implementação de novos protocolos de segurança para garantir maior proteção aos profissionais e qualidade nos resultados dos exames.',
      coverImage: newsImg1,
      category: 'Segurança',
      author: 'Dr. Roberto Silva',
      publishedAt: '2025-05-28',
      tags: ['Segurança', 'Protocolos', 'Qualidade'],
      source: 'https://exemplo.com/noticia-1',
      body: [
        {
          title: 'Novos Equipamentos de Proteção',
          paragraph: 'O LACEN implementou novos protocolos de segurança que elevam ainda mais os padrões de qualidade e proteção em nossos laboratórios. Essas medidas foram desenvolvidas com base nas mais recentes diretrizes nacionais e internacionais.'
        },
        {
          title: 'Sistemas de Ventilação Modernizados',
          paragraph: 'Os novos procedimentos incluem equipamentos de proteção individual aprimorados, sistemas de ventilação modernizados e protocolos de descontaminação mais rigorosos, garantindo um ambiente de trabalho ainda mais seguro.'
        },
        {
          paragraph: 'Todos os profissionais passaram por treinamento especializado para implementação adequada dos novos protocolos, assegurando a máxima eficácia das medidas de segurança.'
        }
      ],
      bodyImages: [
        {
          url: newsImg2,
          caption: 'Novo ambiente do laboratório com protocolos de segurança implementados'
        },
        {
          url: newsImg3,
          caption: 'Equipamentos de proteção individual de última geração'
        }
      ],
      quote: {
        text: 'A segurança dos nossos profissionais e a qualidade dos nossos serviços são prioridades absolutas. Estes novos protocolos representam nosso compromisso contínuo com a excelência.',
        author: 'Dr. Roberto Silva, Diretor Técnico'
      }
    },
    {
      id: 2,
      title: 'Campanha de Vacinação Contra Influenza 2025',
      excerpt: 'Início da campanha nacional de vacinação contra influenza com foco nos grupos prioritários e estratégias de imunização.',
      coverImage: newsImg2,
      category: 'Vacinação',
      author: 'Dra. Ana Costa',
      publishedAt: '2025-05-25',
      tags: ['Vacinação', 'Influenza', 'Saúde Pública'],
      source: 'https://exemplo.com/noticia-2',
      body: [
        {
          title: 'Grupos Prioritários',
          paragraph: 'A campanha de vacinação contra influenza 2025 foi oficialmente iniciada, priorizando grupos de risco como idosos, crianças, gestantes e profissionais de saúde.'
        },
        {
          title: 'Logística Aprimorada',
          paragraph: 'Este ano, a campanha conta com uma logística aprimorada e maior disponibilidade de doses para atender toda a população do estado, com pontos de vacinação estrategicamente distribuídos.'
        },
        {
          paragraph: 'A meta é vacinar 90% da população dos grupos prioritários até o final do período da campanha, superando os resultados do ano anterior.'
        }
      ],
      bodyImages: [
        {
          url: newsImg3,
          caption: 'Posto de vacinação preparado para atender a população'
        },
        {
          url: newsImg1,
          caption: 'Doses da vacina contra influenza disponíveis para distribuição'
        }
      ],
      quote: {
        text: 'A vacinação é nossa principal arma contra a influenza. É fundamental que a população dos grupos prioritários compareça aos postos de saúde.',
        author: 'Dra. Ana Costa, Coordenadora da Campanha'
      }
    },
    {
      id: 3,
      title: 'Modernização dos Equipamentos de Análises Clínicas',
      excerpt: 'Investimento em novos equipamentos de última geração para análises clínicas, aumentando a precisão e agilidade dos resultados.',
      coverImage: newsImg3,
      category: 'Tecnologia',
      author: 'Eng. Carlos Mendes',
      publishedAt: '2025-05-20',
      tags: ['Tecnologia', 'Equipamentos', 'Modernização'],
      source: 'https://exemplo.com/noticia-3',
      body: [
        {
          title: 'Investimento em Tecnologia',
          paragraph: 'O laboratório recebeu novos equipamentos de análises clínicas que representam um grande avanço tecnológico para nossa instituição, com investimento de mais de R$ 2 milhões.'
        },
        {
          title: 'Benefícios para a População',
          paragraph: 'Esses equipamentos permitirão diagnósticos mais precisos e resultados em menor tempo, beneficiando diretamente a população atendida com maior agilidade nos exames.'
        },
        {
          paragraph: 'A capacidade de processamento aumentou em 300%, permitindo atender uma demanda muito maior sem comprometer a qualidade dos resultados.'
        }
      ],
      bodyImages: [
        {
          url: newsImg1,
          caption: 'Novos equipamentos de análises clínicas instalados'
        },
        {
          url: newsImg2,
          caption: 'Ambiente modernizado do laboratório de análises'
        }
      ],
      quote: {
        text: 'Esta modernização representa um salto qualitativo nos nossos serviços. Agora podemos oferecer resultados ainda mais rápidos e precisos.',
        author: 'Eng. Carlos Mendes, Gerente de Tecnologia'
      }
    }
  ])

  return {
    news
  }
}