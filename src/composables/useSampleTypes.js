import { ref, computed } from 'vue'

export function useSampleTypes() {
  const sampleTypes = ref([
    {
      value: 'larvas_aedes',
      label: 'Larvas de Aedes',
      category: 'entomologia',
      icon: '🦟'
    },
    {
      value: 'flebotomineos',
      label: 'Flebotomíneos',
      category: 'entomologia',
      icon: '🪰'
    },
    {
      value: 'coproscopia',
      label: 'Coproscopia',
      category: 'parasitologia',
      icon: '🔬'
    },
    {
      value: 'agua',
      label: 'Água',
      category: 'fisico_quimica',
      icon: '💧'
    },
    {
      value: 'solo',
      label: 'Solo',
      category: 'fisico_quimica',
      icon: '🌱'
    },
    {
      value: 'ar',
      label: 'Ar',
      category: 'fisico_quimica',
      icon: '💨'
    },
    {
      value: 'alimento',
      label: 'Alimento',
      category: 'microbiologia',
      icon: '🍎'
    },
    {
      value: 'sangue',
      label: 'Sangue',
      category: 'clinica',
      icon: '🩸'
    },
    {
      value: 'urina',
      label: 'Urina',
      category: 'clinica',
      icon: '🧪'
    },
    {
      value: 'outros',
      label: 'Outros',
      category: 'geral',
      icon: '📋'
    }
  ])

  const depositTypes = ref([
    { value: 'A1', label: 'A1 - Caixa d\'água' },
    { value: 'A2', label: 'A2 - Depósitos ao nível do solo' },
    { value: 'B', label: 'B - Pequenos depósitos' },
    { value: 'C', label: 'C - Depósitos fixos' },
    { value: 'D1', label: 'D1 - Pneus' },
    { value: 'D2', label: 'D2 - Lixos' },
    { value: 'E', label: 'E - Depósitos naturais' }
  ])

  const propertyTypes = ref([
    { value: 'R', label: 'R - Residencial' },
    { value: 'TB', label: 'TB - Terreno baldio' },
    { value: 'O', label: 'O - Outros' }
  ])

  const collectionLocations = ref([
    { value: 'intradomicilio', label: 'Intradomicílio' },
    { value: 'peridomicilio', label: 'Peridomicílio' },
    { value: 'extradomicilio', label: 'Extradomicílio' }
  ])

  const analysisTypes = ref({
    larvas_aedes: [
      { value: 'identificacao_especies', label: 'Identificação de Espécies', group: 'Taxonomia' },
      { value: 'contagem_larvas', label: 'Contagem de Larvas', group: 'Quantificação' },
      { value: 'contagem_pupas', label: 'Contagem de Pupas', group: 'Quantificação' },
      { value: 'aegypti', label: 'A. aegypti', group: 'Espécies' },
      { value: 'albopictus', label: 'A. albopictus', group: 'Espécies' }
    ],
    flebotomineos: [
      { value: 'identificacao_especies', label: 'Identificação de Espécies', group: 'Taxonomia' },
      { value: 'contagem_machos', label: 'Contagem de Machos', group: 'Quantificação' },
      { value: 'contagem_femeas', label: 'Contagem de Fêmeas', group: 'Quantificação' },
      { value: 'dissecacao', label: 'Dissecação', group: 'Análise' }
    ],
    coproscopia: [
      { value: 'ovos_helmintos', label: 'Pesquisa de Ovos de Helmintos', group: 'Parasitologia' },
      { value: 'cistos_protozoarios', label: 'Pesquisa de Cistos de Protozoários', group: 'Parasitologia' },
      { value: 'contagem_ovos', label: 'Contagem de Ovos', group: 'Quantificação' },
      { value: 'hoffman', label: 'Método de Hoffman', group: 'Técnica' },
      { value: 'willis', label: 'Método de Willis', group: 'Técnica' }
    ],
    agua: [
      { value: 'coliformes', label: 'Coliformes', group: 'Microbiológicas' },
      { value: 'escherichia', label: 'E. coli', group: 'Microbiológicas' },
      { value: 'ph', label: 'pH', group: 'Físico-Químicas' },
      { value: 'turbidez', label: 'Turbidez', group: 'Físico-Químicas' },
      { value: 'cloro', label: 'Cloro Residual', group: 'Físico-Químicas' }
    ],
    alimento: [
      { value: 'salmonela', label: 'Salmonella', group: 'Microbiológicas' },
      { value: 'coliformes', label: 'Coliformes', group: 'Microbiológicas' },
      { value: 'escherichia', label: 'E. coli', group: 'Microbiológicas' }
    ],
    sangue: [
      { value: 'hemograma', label: 'Hemograma', group: 'Hematologia' },
      { value: 'bioquimica', label: 'Bioquímica', group: 'Bioquímica' }
    ],
    urina: [
      { value: 'eas', label: 'EAS - Elementos Anormais e Sedimentos', group: 'Análise' },
      { value: 'urocultura', label: 'Urocultura', group: 'Microbiológicas' }
    ],
    solo: [
      { value: 'ph', label: 'pH', group: 'Físico-Químicas' },
      { value: 'metais_pesados', label: 'Metais Pesados', group: 'Químicas' }
    ],
    ar: [
      { value: 'particulados', label: 'Material Particulado', group: 'Físico-Químicas' },
      { value: 'gases', label: 'Gases', group: 'Químicas' }
    ]
  })

  const getAnalysisForType = (sampleType) => {
    return analysisTypes.value[sampleType] || []
  }

  const getSampleTypesByCategory = computed(() => {
    const categories = {}
    sampleTypes.value.forEach(type => {
      if (!categories[type.category]) {
        categories[type.category] = []
      }
      categories[type.category].push(type)
    })
    return categories
  })

  const getCategoryLabel = (category) => {
    const labels = {
      'entomologia': 'Entomologia',
      'parasitologia': 'Parasitologia',
      'fisico_quimica': 'Físico-Química',
      'microbiologia': 'Microbiologia',
      'clinica': 'Análises Clínicas',
      'geral': 'Geral'
    }
    return labels[category] || category
  }

  const getSpecificFields = (sampleType) => {
    const specificFields = {
      larvas_aedes: [
        { name: 'numeroQuarteirao', label: 'Nº do Quarteirão', type: 'text', required: true },
        { name: 'numeroImovel', label: 'Nº do Imóvel', type: 'text', required: true },
        { name: 'tipoImovel', label: 'Tipo de Imóvel', type: 'select', options: propertyTypes.value, required: true },
        { name: 'tipoDeposito', label: 'Tipo de Depósito', type: 'select', options: depositTypes.value, required: true },
        { name: 'semanaEpidemiologica', label: 'Semana Epidemiológica', type: 'number', required: true },
        { name: 'quantidadeTubitos', label: 'Quantidade de Tubitos', type: 'number', required: true },
        { name: 'localidade', label: 'Nome da Localidade', type: 'text', required: true }
      ],
      flebotomineos: [
        { name: 'numeroArmadilha', label: 'Nº da Armadilha', type: 'text', required: true },
        { name: 'localColeta', label: 'Local da Coleta', type: 'select', options: collectionLocations.value, required: true },
        { name: 'endereco', label: 'Endereço Completo', type: 'text', required: true },
        { name: 'coordenadas', label: 'Coordenadas GPS', type: 'text', required: false },
        { name: 'tipoArmadilha', label: 'Tipo de Armadilha', type: 'select', options: [
          { value: 'cdc', label: 'CDC' },
          { value: 'shannon', label: 'Shannon' },
          { value: 'hp', label: 'HP' }
        ], required: true }
      ],
      coproscopia: [
        { name: 'numeroLaminas', label: 'Número de Lâminas', type: 'number', required: true },
        { name: 'metodoUtilizado', label: 'Método Utilizado', type: 'select', options: [
          { value: 'hoffman', label: 'Hoffman' },
          { value: 'willis', label: 'Willis' },
          { value: 'kato_katz', label: 'Kato-Katz' }
        ], required: true },
        { name: 'resultadoMunicipio', label: 'Resultado do Município', type: 'textarea', required: false }
      ]
    }
    
    return specificFields[sampleType] || []
  }

  return {
    sampleTypes,
    depositTypes,
    propertyTypes,
    collectionLocations,
    analysisTypes,
    getAnalysisForType,
    getSampleTypesByCategory,
    getCategoryLabel,
    getSpecificFields
  }
}