export default {
  global: {
    componenteFormativo: 'Plan de <em>Marketing</em> digital',
    descripcionCurso:
      'El <em>marketing</em> digital permite que la marca cree una comunidad propia a través de una red social, llegando de forma exclusiva al <em>target</em> específico, porque es ahora el usuario quien decide seguir la marca con su consentimiento, generando una interacción de conveniencia para ambos. Por ejemplo, en el <em>marketing</em> digital el padre que tal vez vio el anuncio publicitario en TV tiene la opción de obtener más y mejor información en la cuenta de Facebook o Instagram de la marca de cuchillas de su preferencia, comprar a través de su sitio <em>web</em> y aprender allí la técnica más adecuada para tener el afeitado perfecto.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-bg.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: '',
        numero: '1',
        titulo: 'Marketing',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '1.1',
            titulo: '¿Qué es el marketing?',
            hash: 't_1_1',
          },
          {
            icono: '',
            numero: '1.2',
            titulo: 'Variables del marketing',
            hash: 't_1_2',
          },
          {
            icono: '',
            numero: '1.3',
            titulo: 'Proceso de marketing',
            hash: 't_1_3',
          },
          {
            icono: '',
            numero: '1.4',
            titulo: 'Creación de valor para el cliente',
            hash: 't_1_4',
          },
          {
            icono: '',
            numero: '1.5',
            titulo: 'El mercado',
            hash: 't_1_5',
          },
          {
            icono: '',
            numero: '1.6',
            titulo: 'Plan de marketing',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: '',
        numero: '2',
        titulo: 'Marketing digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '2.1',
            titulo: 'Conceptos básicos del marketing digital',
            hash: 't_2_1',
          },
          {
            icono: '',
            numero: '2.2',
            titulo: 'Analítica digital',
            hash: 't_2_2',
          },
          {
            icono: '',
            numero: '2.3',
            titulo: 'Herramientas de medición',
            hash: 't_2_3',
          },
          {
            icono: '',
            numero: '2.4',
            titulo: 'CRM (Customer Relationship Management)',
            hash: 't_2_4',
          },
          {
            icono: '',
            numero: '2.5',
            titulo: 'Plataformas de gestión de marketing digital',
            hash: 't_2_5',
          },
          {
            icono: '',
            numero: '2.6',
            titulo: 'SEO en el marketing digital',
            hash: 't_2_6',
          },
          {
            icono: '',
            numero: '2.7',
            titulo: 'Promoción en la web',
            hash: 't_2_7',
          },
          {
            icono: '',
            numero: '2.8',
            titulo: 'Inbound marketing',
            hash: 't_2_8',
          },
          {
            icono: '',
            numero: '2.9',
            titulo: 'Plan de marketing digital',
            hash: 't_2_9',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF8_124100_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Benítez, M. (2019, mayo 27). Diccionario de <em>Marketing</em> Digital. MKT2U.Com.',
    },
    {
      referencia:
        'Cibrián, B. I. (2018). <em>Marketing</em> digital. Mide, analiza y mejora. ESIC Editorial.',
    },
    {
      referencia:
        'Coll, P. y Micó, J. L. (2018). <em>Marketing</em> y Comunicación en la Nueva Economía. Editorial UOC.',
    },
    {
      referencia:
        'Cruz, J. (2009, abril 10). Cómo aplicar el <em>Marketing</em>. Estrategia de Marketing para Distribución. ',
      link:
        'http://estrategias-negocio.blogspot.com/2009/04/estrategia-marketing-distribucion.html ',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en <em>Marketing</em>. Edit. DOSSAT S.A.',
    },
    {
      referencia:
        'Estrella, A. M. y Segovia, C. (2016). Comunicación Integrada de <em>Marketing</em>. ESIC EDITORIAL.',
    },
    {
      referencia:
        'La Botica Creativa. (2015). <em>Community Manager</em>. ICB, SL. <em>Interconsulting Bureau S.L.</em>',
    },
    {
      referencia:
        'Monserrat, J. y Sabater, F. (2017). Planificación Estratégica de Comunicación en Redes Sociales. Editorial UOC. ',
    },
    {
      referencia:
        'Roldán, Z. S. (2016). <em>Community Management</em> 2.0: Gestión de Comunidades Virtuales. ECOE Ediciones.',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2018). El Plan de <em>Marketing</em> Digital en la Práctica. ESIC Editorial.',
    },
    {
      referencia:
        'Serrano, J. (2015). <em>SEO</em>, Introducción a la Disciplina del Posicionamiento en Buscadores. Editorial UOC.',
    },
    {
      referencia:
        'Silva, H., González, J., Martínez, D., Giraldo, M., Juliao, D. y Ortiz, M. (2014). <em>Marketing</em>, Conceptos y Aplicaciones. Ediciones de la U.',
    },
    {
      referencia:
        'Thompson, I. (2005, agosto). La Mezcla de Mercadotecnia. PromonegocioS.net.',
      link:
        'https://www.promonegocios.net/mercadotecnia/mezcla-mercadotecnia-mix.htm',
    },
    {
      referencia:
        'Vila, F. (2013). Comunicación Estratégica. Barcelona. Editorial UOC. Madrid. ESIC Editorial.',
    },
    {
      referencia:
        'Xunta de Galicia. (s.f.). Manuales prácticos de la Mipyme: Como Elaborar el Plan de Comunicación.',
      link:
        'http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/1919/1/Como%20elaborar%20el%20plan%20de%20comunicaci%c3%b3n.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alcance viral',
      significado:
        'Es una unidad de medida que calcula el número de personas que han visto una publicación a través de otros contactos. Mide la evolución y la repercusión de una publicación en cualquier tipo de formato. Redes sociales como Facebook, Twitter o Google Plus, por ejemplo, indica el alcance viral de una publicación indicando cómo y qué personas han compartido un contenido.',
    },
    {
      termino: 'Analítica <em>web</em>',
      significado:
        'Es la forma de medir y analizar los datos de tráfico de un sitio <em>web</em>, a través del cual nos va a permitir tomar las mejores decisiones y optimizar los objetivos del negocio.',
    },
    {
      termino: '<em>Blog post</em>',
      significado:
        'Es el nombre técnico que recibe la acción de publicar una entrada o un artículo en un <em>blog</em>.',
    },
    {
      termino: 'Comunidad <em>online</em>',
      significado:
        'Conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática.',
    },
    {
      termino: '<em>Cookies</em>',
      significado:
        'Son pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio <em>web</em> y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: '<em>Crowdsourcing</em>',
      significado:
        'Acción por la cual las empresas y marcas generan contenido creativo a través de los propios clientes, <em>fans</em> o usuarios de internet. Este término se ha generalizado y puesto en práctica sobre todo para fomentar la participación en redes sociales.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'Es la sensación de pertenencia y unión emocional entre una marca y un usuario. Es el objetivo de toda marca o empresa en redes sociales a través de basar la estrategia en <em>marketing</em> de contenidos y generar en cada una de las redes la mayor participación posible.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'También llamada “página de <em>fans</em>”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una <em>fan page</em> no tiene límite de <em>fans</em> y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'Término que hace referencia al posicionamiento y a la localización geográfica de un negocio, una persona o un lugar a través de coordenadas que permite situar cualquier elemento en el mapa. Es una herramienta fundamental para aplicaciones y comercial a través del <em>mobile marketing</em>.',
    },
    {
      termino: '<em>Hashtag</em>',
      significado:
        'Es una etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales como Twitter, Instagram o Google Plus.',
    },
    {
      termino: 'Influenciador',
      significado:
        'En social media es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas.',
    },
    {
      termino: '<em>KPI</em>',
      significado:
        'Son las siglas de <em>Key Performance Indicator</em>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media marketing.',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'Son estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <em>blog</em> y del social media <em>marketing</em>.',
    },
    {
      termino: 'Reputación <em>online</em>',
      significado:
        'Es el conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales.',
    },
    {
      termino: '<em>ROI</em>',
      significado:
        'Son las siglas en inglés de <em>Return On Investment,</em> que significa retorno de la inversión. Es un indicador que mide el beneficio frente al gasto de la inversión de un proyecto de social media <em>marketing</em> en función de los objetivos y las metas logrados.',
    },
    {
      termino: '<em>Segmentar</em>',
      significado:
        'En redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo.',
    },
    {
      termino: 'Viral',
      significado:
        'Un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de marketing es “viralizar” sus contenidos.',
    },
    {
      termino: '<em>Webinar</em>',
      significado:
        'También llamados webinar, son eventos o conferencias que tienen lugar en el medio <em>online</em>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
  ],
  /*complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],*/
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Quindío',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Correctora de estilo',
          centro:
            'Centro para la Industria y la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
