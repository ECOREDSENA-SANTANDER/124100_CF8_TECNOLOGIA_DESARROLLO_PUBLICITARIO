<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Marketing digital
    .row.m-5
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/u1daSvYmyoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_1.titulo-segundo
      h2 2.1 Conceptos básicos del marketing digital
    p.mb-5 El marketing por naturaleza tiene una amplia diversidad de conceptos, la mayoría de ellos anglicismos que pueden llegar a confundir un poco a quien comienza a estudiar este tema. Además, cuenta con otra gran variedad de términos que de igual forma son importantes para comprender el tema y desarrollar las estrategias adecuadamente.
    p Por consiguiente, a continuación, se indican algunos términos con sus respectivas definiciones, tomadas de Cibrián (2018), en su libro Marketing Digital. Mide, Analiza y Mejora:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg.justify-content-md-center.align-self-center
  
        .ul.lista-ul--color
          li 
            i.fas.fa-caret-right
            p #[strong Cookie:] las cookies son pequeños ficheros de texto con información sobre el usuario. Estas se almacenan en el navegador, desde donde el usuario puede aceptarlas, bloquearlas o eliminarlas. 
          p A esta información que se almacena en las cookies se puede acceder posteriormente con distintos fines como ofrecer publicidad, hacer remarketing (anuncios personalizados dirigidos a usuarios que visitaron previamente tu web), conocer el número total de sesiones generadas por los usuarios, mantener los productos añadidos en las cestas de la compra de las tiendas online, usar aplicaciones como las de los bancos sin necesidad de iniciar sesión en cada página, etc.
          p Las cookies tienen varias clasificaciones y criterios:

      .col-12.col-lg-auto.justify-content-md-center.mb-4
        .mb-0.colc
            figure
            img(src='@/assets/tema2/img-1.svg', alt='Tipos de titulares')
    .row.m-5    
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies propias o de primera parte: 
          p Son las generadas y almacenadas única y exclusivamente por el dominio al que se está accediendo. Por ejemplo, las que se utilizan en las tiendas online. A medida que vas añadiendo productos al carrito de la compra, la información se almacena en una cookie que permite que en las siguientes páginas se puedan mantener los mismos productos. Las herramientas de medición como Google Analytics usan cookies de primera parte para hacer el seguimiento de las interacciones de los usuarios: para saber de dónde vienen, cuántas sesiones generan, qué páginas visitan, etc.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies de terceros o de tercera parte:
          p Son las generadas y utilizadas por un dominio externo al del sitio web que estén visitando los usuarios. Por ejemplo, cuando accedes a una web y ves banners sobre productos que te interesan, esa publicidad no se produce de forma aleatoria. Esto ocurre porque en las cookies se guardan tus preferencias de navegación, lo que permite a los anunciantes mostrarte anuncios adaptados a tus gustos a través de otras webs.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies de sesión: 
          p Son las que se eliminan en cuanto caduca la sesión. Su propósito es permitirte moverte entre las diferentes páginas de una web sin necesidad de que tengas que dar la misma información una y otra vez. Por ejemplo, las que se utilizan en las tiendas online. A medida que vas añadiendo productos al carrito de la compra, la información se almacena en una cookie que permite que en las siguientes páginas se puedan mantener los mismos productos.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies persistentes:
          p Son las que permiten almacenar los datos de los usuarios durante más tiempo. También tienen fecha de caducidad, la cual es definida por el responsable de la cookie. En el caso de que el usuario no elimine estas cookies manualmente desde su navegador, cuando lleguen a su fecha de caducidad estas se eliminarán completamente de este.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies técnicas:
          p Son las que permiten a los usuarios navegar a través de una página web o aplicación y utilizar sus servicios. Por ejemplo, las que te permiten recordar los productos en el carrito de la compra o registrarte en un evento.


      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies de personalización: 
          p Son las que permiten al usuario disfrutar del servicio que presta la web o aplicación de una forma personalizada. Por ejemplo, cuando una web está traducida a muchos idiomas, el que tú la veas en el tuyo es posible gracias a las cookies de personalización.                                          
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies de análisis:
          p Son las que permiten registrar y almacenar los datos sobre los usuarios para posteriormente analizar su comportamiento.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies publicitarias:
          p Son cookies cuyo único propósito es hacer publicidad.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-2.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          .h4 Cookies de publicidad comportamental:
          p Son las cookies que permiten hacer publicidad a los usuarios, pero de una forma más personalizada. ¿Cómo? Recabando información de su comportamiento, para así mostrarles publicidad basada en dicho comportamiento.

                                                

    .row.justify-content-around.align-items-center.mb-5
      .col-lg.justify-content-md-center.align-self-center
        .ul.lista-ul--color
          li 
            i.fas.fa-caret-right
            p #[strong Dimensión:] una dimensión es lo que describe los datos. Algunos ejemplos de dimensiones son: país, navegador, dispositivo. La dimensión es diferente a la métrica, la razón es que la métrica utiliza valores que se pueden medir, las dimensiones son más cualitativas. Por ejemplo, es posible sumar las sesiones diarias procedentes de Bogotá (12.000) con las procedentes de Medellín (45.000) y como resultado te saldrán 57.000 sesiones. Pero lo que no es posible hacer es sumar Bogotá y Medellín.
          li 
            i.fas.fa-caret-right
            p #[strong Métrica:] una métrica es lo que mide los datos. Algunos ejemplos de métricas son: usuarios, sesiones, páginas vistas.
          li 
            i.fas.fa-caret-right
            p #[strong Usuario:] es el registro que queda del ingreso de una persona a un sitio web o aplicación.
          li 
            i.fas.fa-caret-right
            p #[strong Sesión:] una sesión se registra cuando un usuario visita una web o aplicación móvil. En Google Analytics, se contará otra sesión cuando ocurran los siguientes casos:


      .col-12.col-lg-auto.justify-content-md-center.mb-4  
        .mb-0.colc
            figure
            img(src='@/assets/tema2/img-3.svg', alt='Tipos de titulares')

    .row.m-5
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-4.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          p #[strong 30 minutos de inactividad:] si se está inactivo por más de 30 minutos se registra una nueva sesión.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-5.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          p #[strong  Cierre del navegador: ]si se cierra el navegador y 30 minutos después se ingresa a la misma página se registrarán otras sesiones, si el retorno es antes de los 30 minutos se considera la misma sesión.
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-6.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          p #[strong Cambio de campaña:] si ingresas a una misma web por links de dos fuentes diferentes; por ejemplo, un sitio de noticias y una red social, cada una se considera una sesión independiente
      .crd_03.p-0.my-4
        .crd_02__icon.m-3
          img(src='@/assets/tema2/img-7.svg' alt='AvatarTop' ).class 
        .crd_02__txt.m-4
          p #[strong Cambio de campaña:] si ingresas a una misma web por links de dos fuentes diferentes; por ejemplo, un sitio de noticias y una red social, cada una se considera una sesión independiente
    .row.my-5
      .ul.lista-ul--color
        li 
          i.fas.fa-caret-right
          p #[strong Página vista:] una página vista se registra cada vez que se carga una página en el navegador. Si un usuario navega a una página diferente y más tarde vuelve a la página original, se registrará una segunda página vista para esa página original. También se registra página vista cuando se actualiza la página (F5).
        li 
          i.fas.fa-caret-right
          p #[strong KPI: (Key Performance Indicator):] un KPI es un indicador clave de rendimiento, esto quiere decir que gracias a este tipo de indicadores es posible saber si se están cumpliendo o no los objetivos. Algunos ejemplos de KPI son: ROI, tasa de rebote.
    
        li 
          i.fas.fa-caret-right
          p #[strong ROI (Return On Investment):] el ROI es el retorno de la inversión, es decir, qué cantidad de la que has invertido ha vuelto a la empresa. Este KPI mide la relación existente entre el beneficio neto y los costos. El método exacto para realizar el cálculo depende de los objetivos de la inversión que la empresa realice. Su fórmula es:

        .col-lg-6.mb-5.row.imgc
          .cajon2.cajon.color-primario.p-4.mb-4.fond1.row
            .col-lg.align-self-center
              .h4.text-center ROI = [(ingresos - inversión) / inversión] * 100

        li 
          i.fas.fa-caret-right
          p #[strong Tasa de rebote:] la tasa de rebote es el porcentaje de sesiones que llegan a una página y se van sin hacer nada más en la web. Su fórmula es:    
        
        .col-lg-8.mb-5.row.imgc
          .cajon2.cajon.color-primario.p-4.mb-4.fond1.row
            .col-lg.align-self-center
              .h4.text-center Tasa de rebote = (total de sesiones que vieron una sola página / total de sesiones) * 100

        p Si se tiene una tasa de rebote del 26 % significa que, de cada 100 sesiones, 26 salieron de la web sin mirar nada más. Este KPI es útil para conocer el rendimiento de tu web en general y de las distintas páginas de esta en particular.

        li 
          i.fas.fa-caret-right
          p #[strong Cuadro de mando (scorecard):] el cuadro de mando o scorecard en inglés, es una relación de KPI agrupados de forma lógica que muestran de un vistazo si se están alcanzando o no los objetivos para poder tomar decisiones de forma rápida. Para conseguir este propósito, en el cuadro de mando solo debe mostrarse la información estrictamente necesaria. Es decir, la que permita saber si se están cumpliendo o no los objetivos.
        li 
          i.fas.fa-caret-right
          p #[strong Panel de control (dashboard):] en los paneles de control se recogen diversos KPI, tablas de segmentación y diferentes gráficos con el objetivo de analizar cada estrategia/acción que se ha realizado para conseguir los objetivos del negocio.
        li 
          i.fa
          p Imaginemos que uno de los objetivos es mejorar el Engagement Rate (ER) de Twitter, el cual lo vamos a calcular dividiendo el total de interacciones entre el número de seguidores y multiplicando el resultado por cien. En este caso, en el cuadro de mando tendremos este KPI para saber si estamos cumpliendo o no los objetivos. (Capítulo 2. Terminología básica)

    #t_2_2.titulo-segundo
      h2 2.2 Analítica digital
    p.mb-5 La analítica en términos del marketing digital, se refiere al análisis de todos los datos que se generan en la interacción de los usuarios con los diferentes medios digitales de la empresa, esto con el fin de tomar decisiones oportunas y acertadas. Dichos datos son tanto cuantitativos como cualitativos.
    
    .row.m-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-8.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Medición:
              p Consiste en la recopilación de datos asociados a la actividad de los usuarios en un sitio web, aplicación móvil o cualquier otro medio digital.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-9.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Análisis
              p Consiste en el estudio y la comprensión de los datos, gracias a la segmentación de estos según diferentes criterios.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-10.svg' alt='AvatarTop')
        
          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Reporting
              p Consiste en plasmar los datos en informes útiles que permitan tomar decisiones.
    br
    #t_2_3.titulo-segundo
      h2 2.3 Herramientas de medición
    p.mb-5 Existe una gran variedad de herramientas de medición de datos, todas ellas con características y ventajas diferentes, algunas gratuitas y otras que tienen un sistema de pago que oscila de moderado a alto, lo importante es que la información debe ser analizada y utilizada de la mejor forma posible. A continuación, se verán algunas de las herramientas más versátiles para la medición de los datos:         

    .row.img-200.justify-content-around.align-items-center
      figure.mb-5
        img(src='@/assets/tema2/img-11.svg', alt='Marketing')
    
    .h4 Buscador de Google
    p.mb-5 Las búsquedas en Google son el primer paso para conocer el estado de una empresa y para el desarrollo inicial de las estrategias de comunicación. Para alguien que trabaje en comunicación digital es importante conocer todas las acciones y posibilidades que este buscador ofrece:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Google Trends: 
            p Permite hacer un seguimiento del interés que se tiene por una marca en particular a nivel mundial, nacional o local, también investigar a los competidores en los mismos aspectos y lo más importante, ver las tendencias de búsquedas que realizan las personas en un determinado momento y lugar.
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Board reader:
            p En este buscador cualquier marca a nivel mundial puede conocer lo que están opinando de ella en foros y comunidades. Es muy útil porque se centra en foros, un elemento que sería muy dispendioso de analizar si se hiciese uno por uno.
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 How sociable: 
            p Es una herramienta muy útil para conocer el nivel de influencia que se tiene en las diferentes redes sociales.


        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Icerocket: 
            p Esta herramienta arroja datos relacionados con el nivel de aceptación que tiene una marca frente a sus competidores, de acuerdo al nivel de comentarios que hayan realizado los usuarios.
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Klout: 
            p Este medidor de influencia permite conocer el estado de la marca haciendo un ponderado de todos los medios que esta posee: blogs, redes sociales, canales, sitios web, etc.
                                                              
      .col-md-6.col-lg.mb-5.mb-lg-0
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Estadísticas de las redes sociales: 
            p Cuando se ha creado una página en Facebook o cuentas en Instagram o Twitter, por ejemplo, estas mismas redes sociales proporcionan información detallada de la interacción, alcance y popularidad de cada post o anuncio que se haga en ellas, así se puede determinar la efectividad de las estrategias que se realicen para una marca en particular.
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Linkfluence: 
            p Esta plataforma permite realizar una medición permanente de segmentación y mapeo de conversaciones de las diferentes comunidades. Se integra con e-reputation, engage y observatorio de tendencias para monitorizar el nivel de influencia y reputación de una marca en particular.
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Social Mention: 
            p Esta plataforma permite realizar seguimiento en redes sociales de comentarios o publicaciones realizadas por los usuarios referentes a un tema determinado.
        .sep2
        .crd_01.p-0.my-4
          .crd_02__icon.m-3
            img(src='@/assets/tema2/img-12.svg' alt='AvatarTop' ).class 
          .crd_02__txt.m-4
            .h4 Crimson Hexagon: 
            p Es un sistema de monitoreo de redes sociales para realizar un análisis global de marcas y organizaciones, conociendo las opiniones de consumidores y los puntos de vista que estos tienen de la empresa, los productos, la industria y la competencia.

    .h4 Analítica web
    p.mb-5 Consiste en la recolección, almacenamiento y análisis de datos estadísticos que surgen del funcionamiento de un sitio web. Esta información se estudia con el fin de generar conocimiento relevante para el desarrollo de las actividades de marketing digital. La analítica web permite realizar diferentes tipos de actividades:

    .row.justify-content-around.align-items-center.m-5
      .col-md-6
        .mb-0.colc
            figure
            img(src='@/assets/tema2/img-13.svg', alt='Tipos de titulares')

      .col-md-6.mr-5.row
        .ul.lista-ul--color
          li 
            i.fas.fa-check
            p Diseño de estrategias de marketing en redes sociales.
     
          li 
            i.fas.fa-check
            p El tipo de comunicación que la empresa debe realizar utilizando múltiples medios.
          
          li 
            i.fas.fa-check
            p Integración entre los objetivos de mercado y comunicación.
         
          li 
            i.fas.fa-check
            p Desarrollo de estrategias financieras alineadas con el marketing digital.          
         
          li 
            i.fas.fa-check
            p Medición continua y eficaz de las acciones de marketing realizadas en toda la plataforma de la empresa.      
    p Adicionalmente, la analítica web tiene una serie de tarea definidas dentro de la organización; actividades enfocadas en el CRM y otros procesos de interacción entre la marca y el consumidor. La analítica interviene además en la toma de decisiones relacionadas con la comercialización de los productos o servicios, así como el estudio permanente de los clientes, el mercado y las tendencias. De este modo es necesario que se tengan en cuenta una serie de indicadores relacionados con la analítica web: 

    .row.justify-content-around.align-items-center.my-5

      .col-lg.mr-5.row
        .ul.lista-ul--color
          li 
            i.fas.fa-check
            p Medición de la actividad web.
          li 
            i.fas.fa-check
            p Medición de la valoración.
          li 
            i.fas.fa-check
            p Medición del retorno sobre la inversión (ROI).
          li 
            i.fas.fa-check
            p Mediciones individuales.
          li 
            i.fas.fa-check
            p Seguimiento de la marca.     

      .col-auto.col-6.align-self-center
        .mb-0.colc
            figure
            img(src='@/assets/tema2/img-14.svg', alt='Tipos de titulares')

    .h4 Mediciones en Facebook
    p.mb-5 Siendo la red social más grande del mundo por su número de suscriptores que superan los 2400 millones, una de las mayores fuentes de datos del mercado y un generador de anuncios virales, es necesario hacer un análisis de las mediciones que se pueden realizar en Facebook. Las variadas posibilidades de comunicación en esta red social permiten mantener a sus usuarios conectados casi de forma permanente: publicaciones, videos, comentarios, likes en 5 formas diferentes, chats, grupos, comunidades, perfiles, páginas, transmisiones en vivo, anuncios pagados, campañas, videojuegos, entre otros, son algunas de las actividades que permite realizar. Por consiguiente, es indicado conocer entonces las mediciones que se pueden realizar:

    .tabla-b.mb-5
      .t-b
        .h3.mb-0.wh-le Las páginas de Facebook permiten realizar mediciones estadísticas semanales en cuanto a:
      table

        tr
          th Total de “me gusta”: 
          td indica el número de personas que les gusta la página; relaciona también el porcentaje de aumento o disminución de la métrica semanal.
        tr
          th Amigos de los fans: 
          td muestra el número de personas que eran amigos de los que hicieron clic en “me gusta” y relaciona el porcentaje de aumento o disminución semanal.
        tr
          th Personas que están hablando de esto: 
          td indica el número de personas que realizaron algún tipo de actividad en la última semana relacionada con una página: hacer un post, compartir una publicación, responder a un evento o a una pregunta, etiquetar a alguien, mencionarla en otra publicación.
        tr
          th Alcance de la semana: 
          td indica el número de personas que vieron el contenido de la página o contenido asociado, también relaciona el porcentaje de aumento o disminución.
        tr
          th Canal orgánico: 
          td relaciona el número de personas que vieron el contenido de la página a través de la sección de noticias en un tiempo determinado.
        tr
          th Canal viral: 
          td indica el número de personas que vieron una publicación de la página hecha por un amigo.
        tr
          th Canal pagado: 
          td indica el número de personas que vieron una publicación o anuncio patrocinado.
        tr
          th Usuarios únicos por frecuencia: 
          td muestra gráficamente el número de personas que vieron el contenido de la página en los últimos siete días.
        tr
          th Visitas a la página: 
          td indica el número de veces que la página fue vista diariamente en un periodo determinado.
        tr
          th Visitantes únicos: 
          td indica el número de personas que visitaron un fanpage por día en un periodo determinado.
        tr
          th Publicaciones: 
          td muestra de forma gráfica el número de personas que vieron una publicación en un tiempo determinado.
        tr
          th Audiencia potencial: 
          td suma de los amigos de las personas que dieron “me gusta” o que compartieron una publicación.
    br
    #t_2_4.titulo-segundo
      h2 2.4 CRM (Customer Relationship Management)
    p.mb-5 Es un proceso de relacionamiento con los clientes de una empresa o marca, su enfoque está en el proceso de comercialización, mercadeo y comunicación de la empresa con sus clientes reales y potenciales. Este proceso depende en casi un 100 % del software que gestiona la información de los clientes, para luego con base en estos datos generar acciones específicas de promoción y comercialización. El CRM se nutre de los datos de los clientes a través de Sistemas de Información de Mercados (SIM); estos datos abundan en medios como las redes sociales y los consumidores los entregan de forma libre y voluntaria; además, son muy eficaces para el desarrollo de estrategias puntuales de marketing.

    .row.justify-content-around.align-items-center.m-5
      .col-auto.align-self-center
        .mb-0.colc
            figure
            img(src='@/assets/tema2/img-15.svg', alt='Tipos de titulares')



      .col-lg.mr-5.row
        p  El CRM evolucionó con la llegada de las redes sociales y hoy por hoy se conoce como “Social CRM”, mejorando el sistema de interacción entre la marca y el cliente, convirtiendo la comunicación de doble vía y no únicamente desde la marca hacia el consumidor. De esta forma la comunicación que se realiza a través del Social CRM es mucho más integral, pues el consumidor es alcanzado por un correo electrónico que se le ha dejado cuando hizo su suscripción en el sitio web de la empresa, generándole impactos que se postean en las redes sociales que ha seguido gracias a una campaña de activación, la cual se hace periódicamente para captar nuevos clientes. De la misma forma recibe un mensaje de texto en su celular y mensajes de WhatsApp, todo esto en un periodo de tres semanas en las que la marca ha estado interactuando con el consumidor, creando posicionamiento y recordación.   

    .h4 Enfoque del Social CRM
    p.mb-5 En el enfoque del Social CRM existen cuatro elementos básicos a tener en cuenta:
    TabsA.color-acento-contenido.mb-5
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Inteligencia de clientes:")
        h4 Inteligencia de clientes:
        p Se necesita tener conocimiento sobre el cliente para poder desarrollar productos y servicios enfocados a sus expectativas. Para convertir los datos en conocimiento, se emplean bases de datos y reglas a partir de un proceso de segmentación de la información.
      
    
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Interactividad:")
        h4 Interactividad:
        p El proceso de comunicación pasa de un monólogo: de la empresa al cliente, a un diálogo, entre ellos. Además, es el cliente el que dirige el diálogo y decide cuándo empieza y cuándo acaba.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Fidelización de clientes: ")
        h4 Fidelización de clientes: 
        p En la práctica, es mucho mejor y más rentable fidelizar a los clientes que adquirir nuevos. La fidelización de los clientes pasa a ser muy importante y, por tanto, se convierte en el pilar de la gestión del marketing relacional en función del ciclo de vida del cliente. El community manager debe considerar la manera como se establece fidelización proponiendo y utilizando las herramientas de social media marketing.


      .tarjeta.color-acento-contenido--borde.p-4(titulo="Personalización:")
        h4 Personalización:
        p Cada cliente desea recibir promociones y ofertas personalizadas, por lo que se necesitan grandes esfuerzos en inteligencia de las bases de datos para desarrollar una eficiente segmentación de clientes. La customización del mensaje, en fondo y en forma, aumenta drásticamente la eficacia de las acciones de comunicación.
    br
    #t_2_5.titulo-segundo
      h2 2.5 Plataformas de gestión de marketing digital
    p.mb-5 A continuación, se indican dichas plataformas:

    .mx-3
      AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta t-gris2")
        .row(titulo="Blogger: ")
           p Es una plataforma para la creación de blogs, pertenece a la empresa Google y tiene total interacción con todas sus herramientas. Es ideal para mostrar información periódica acerca de un tema específico integrado con redes sociales y otros medios.
        div(titulo="LinkedIn:")
          p Es una red social con enfoque profesional, permite la interacción entre empresas y profesionales para el desarrollo de trabajo colaborativo o la gestión laboral.
        div(titulo="Zoho:")
          p Es una suite de servicios empresariales que permite el desarrollo de diferentes tareas relacionadas con el marketing digital, CRM, gestión de correo electrónico, entre otras.
        div(titulo="Traity:")
          p Es una plataforma que permite la verificación del perfil personal de compradores y vendedores con el fin de generar una reputación online de personas y empresas para generar confianza en los intercambios comerciales.
        div(titulo="Social Go:")
          p Es una plataforma que permite crear redes sociales personalizadas en cuanto a diseño y funciones, además de integrarse con otras redes como Facebook y Twitter.
        div(titulo="Alterian:")
          p Es ideal para el desarrollo de campañas de marketing integrales; combina herramientas de gestión de contenidos, correo electrónico y monitorización de redes sociales.
        div(titulo="CitizenNet:")
          p Es una herramienta para el desarrollo de investigaciones de mercado y gestión de campañas publicitarias. Maneja datos de segmentación y optimización de tiempos.
        div(titulo="Livestream:")
          p Es una plataforma para ver y transmitir video en vivo, con el fin de llegar a un público masivo con contenido audiovisual.
        div(titulo="Saleforce:")
          p Es una suite que provee soluciones CRM por suscripción. En ella se puede crear aplicaciones, tener contacto con toda la organización, contactar clientes y realizar estrategias de venta, todo en línea.
        div(titulo="Hootsuite:")
          p Es una plataforma que permite realizar publicaciones simultáneas en varias redes sociales como Facebook, Instagram y Twitter.       
    br
    #t_2_6.titulo-segundo
      h2 2.6 SEO en el marketing digital

    .row
      .col-lg.justify-content-md-center.align-self-center
        p Inicialmente el SEO (del inglés Search Engine Optimization) se enmarca en las estrategias del marketing relacional y el colaborativo, que tienden a primar el buscador como canal de publicidad para públicos muy segmentados (aquellos que utilicen cierta búsqueda concreta) y, finalmente, el ideal de una estrategia de SEO implica crear una red propia de usuarios fidelizados que hablen bien y proactivamente de la marca. Por eso es importante primero pensar qué tipo de estrategia global se va a llevar a cabo, y en función de esta, pensar en él y no antes. Así, en la relación entre marketing y SEO se debe tener en cuenta: marketing no es SEO y SEO no es marketing; el marketing es un concepto más amplio que el SEO. Primero se debe estudiar la estrategia de marketing y su continuación. La unión de marketing + SEO debe llevar a visitas que lleven a acciones y posiblemente esas acciones lleven a ventas o conversiones. Serrano (2015)

      .col-12.col-lg-auto.justify-content-md-center.mb-4
         img.img_ava(src='@/assets/tema2/img-16.svg' alt='AvatarTop')
    
    .h3 SEM
    p El SEM (del inglés Search Engine Marketing) a diferencia de SEO, utiliza herramientas que los buscadores ofrecen para el desarrollo de estrategias de posicionamiento a través de anuncios publicitarios pagos, como es el caso de Google Adwords; esto requiere la selección de palabras claves, creación de anuncios y gestión de pauta. Se pueden realizar a través de PPC (Pago Por Clic) y PCP (Costo Por Clic). El SEM tiene varias ventajas que se verán a continuación:
    .ul.lista-ul--color.ml-5
          li 
            i.fas.fa-caret-right
            p Permite que un producto o servicio sea reconocido rápidamente.
          li 
            i.fas.fa-caret-right
            p Permite competir con empresas grandes y con alto posicionamiento en el mercado.
          li 
            i.fas.fa-caret-right
            p El ROI es más rápido.
          li 
            i.fas.fa-caret-right
            p Permite llegar a mercados muy específicos porque permite un alto nivel de segmentación.
    p Sin embargo, este tipo de comunicación también tiene algunas desventajas:
    .ul.lista-ul--color.ml-5
          li 
            i.fas.fa-caret-right
            p La compra de palabras clave para el desarrollo de la publicidad suele ser costosa.
          li 
            i.fas.fa-caret-right
            p Es un tipo de comunicación invasiva que el mercado no ha buscado y por lo tanto puede generar rechazo.
          li 
            i.fas.fa-caret-right
            p Requiere compromiso en el desarrollo de la gestión y optimización.
    br
    br
    #t_2_7.titulo-segundo
      h2 2.7 Promoción en la web
    p.mb-5 En la web hay múltiples opciones de hacer promoción para las empresas y marcas, desde alternativas gratuitas que implican un proceso más orgánico y lento para el logro de posicionamiento de marca, incremento en ventas y reconocimiento por parte del mercado meta; hasta el pago de pauta en sitios web incluidos en la red Display de Google a través de su plataforma de pago Adwords, la cual incluye anuncios en YouTube. También en Facebook, la red social más grande del mundo con más de 2400 millones de cuentas inscritas y que permite una serie de modelos de publicidad pagada, que va desde publicaciones que llegan a segmentos específicos hasta campañas muy bien estructuradas que incluyen una completa planificación por temporadas establecidas.

    .row
      .col-lg.justify-content-md-center.align-self-center
        .h4 Google Adwords
        p En el nombre de esta plataforma se pueden encontrar los dos elementos básicos que lo conforman: en primer lugar, Google, este es el motor de búsqueda más utilizado a nivel mundial y donde migra el 80 % de la información que se consulta; siendo un motor de búsqueda su función es ingresar a cada una de las páginas que hacen parte de su red Display conformada por millones de sitios que Google ha seleccionado por la calidad y flujo de la información. Las búsquedas realizadas por las personas allí incluyen el segundo elemento, las palabras claves: estas palabras son las que van a determinar el proceso de promoción dentro de la red Display, por lo tanto, lo que una empresa compra a Google son palabras claves que están ligadas a la actividad económica de la empresa o de la industria a la que pertenece para llegar al público específico, que a través de este buscador está averiguando un tema en particular. Por ejemplo, una empresa dedicada a la venta de computadores ubicada en Bogotá quiere promocionarse en Google, en este caso la empresa podría adquirir palabras como: computadores, equipos de cómputo, computadoras personales, laptops, all in one entre otras. Con estas palabras puede realizar varios tipos de estrategias promocionales.

      .col-12.col-lg-auto.justify-content-md-center.mb-4
         img.img_ava(src='@/assets/tema2/img-17.svg' alt='AvatarTop')

    .row.mb-3
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-18.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Anuncios de texto:
              p En el buscador por lo general están diferenciados en color y están ubicados dentro de la página principal de Google al hacer una búsqueda.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-19.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Anuncios en la red Display:
              p Banners, imágenes y videos en sitios web de alto tráfico y de acuerdo con las búsquedas realizadas por los usuarios.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-20.svg' alt='AvatarTop')
        
          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Remarketing:
              p A través de la red Display, utilizando búsquedas realizadas por usuarios y ubicándolas en sitios web que se vieron posteriormente y hagan parte de la red Display.
    br         
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-21.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center En YouTube:
              p Con banners y videos al inicio o en el intermedio de publicaciones con altos niveles de reproducción.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-22.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Shopping:
              p Se basa en mostrar anuncios más completos sobre productos concretos con precio y características detalladas de los mismos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema2/img-23.svg' alt='AvatarTop')
        
          .tarjeta.color-acento-botones
            .p-4.m-3
              .h2.text-center Gmail:
              p banners en la bandeja de entrada de Gmail con el mismo diseño y formato de los correos recibidos.
    br    
    .h4 Facebook Ads
    p Es la plataforma de promoción con la que cuenta Facebook para el desarrollo de estrategias de marketing en esta red social, haciendo uso de todo su sistema de audiencia, tal vez el más grande a nivel mundial. En Facebook se pueden realizar estrategias de promoción de forma rápida, económica y efectiva, gracias a las múltiples posibilidades que presenta para quienes buscan realizar promoción de productos o servicios.
    p Ventajas de realizar promoción en Facebook Ads:

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Segmentación del mercado" :icono="require('@/assets/tema2/img-24.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Segmentación del mercado
            p La segmentación en esta red social es tal vez una de las más específicas que se puedan realizar en una estrategia de marketing, gracias a la caracterización que los mismos usuarios realizan en sus perfiles y toda la información que en ellos generan, de esta forma no solo se puede hacer una segmentación con datos demográficos, sino también con características personales muy concretas, gustos a todo nivel, intereses, temas de consulta, palabras claves, grupos de influencia, entre muchos otros datos.
        
          .col-md-6
            figure
              img(src='@/assets/tema2/img-29.svg', alt='Segmentación del mercado')
            
      .py-4.py-md-5(titulo="Viralización" :icono="require('@/assets/tema2/img-25.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Viralización
            p El pago de anuncios en Facebook además de garantizar el alcance de miles o quizás millones de personas es solo el primer paso para hacer un anuncio viral, quienes son alcanzados por un anuncio tienen la opción de compartirlo con sus contactos, esto significa que si aquello que se publica es de interés del mercado objetivo, puede viralizarse por iniciativa de los mismos usuarios, de ahí la importancia del desarrollo de contenidos atractivos, creativos y de calidad.
        
          .col-md-6
            figure
              img(src='@/assets/tema2/img-30.svg', alt='Viralización')
             
        
      .py-4.py-md-5(titulo="Interactividad" :icono="require('@/assets/tema2/img-26.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Interactividad
            p Las redes sociales y en particular Facebook, ofrecen una amplia gama de posibilidades de interacción que permite que la marca y el mercado objetivo tengan una comunicación de doble vía y este último otorgue a la empresa datos que sean muy relevantes para el desarrollo de futuras estrategias de comunicación y marketing.
        
          .col-md-6
            figure
              img(src='@/assets/tema2/img-31.svg', alt='Interactividad')
           

      .py-4.py-md-5(titulo="Costo" :icono="require('@/assets/tema2/img-27.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Costo
            p las estrategias que se realicen en Facebook suelen ser económicas debido al sistema de pago por clic, en el que solo se paga por los clics que se hagan en los anuncios y generen respuestas efectivas.
        
          .col-md-6
            figure
              img(src='@/assets/tema2/img-32.svg', alt='Costo')
  
        
      
      .py-4.py-md-5(titulo="Medición" :icono="require('@/assets/tema2/img-28.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Medición
            p Uno de los aspectos más relevantes para cualquier estrategia de comunicación, es el acceso a datos estadísticos reales que permitan conocer el nivel de efectividad que un anuncio o campaña tiene, esto permite determinar el ROI de la estrategia y realizar correcciones para lograr los objetivos y el desarrollo de campañas futuras.
        
          .col-md-6
            figure
              img(src='@/assets/tema2/img-33.svg', alt='Medición')
      
    br 
    .h4 Tipos de campañas que se pueden realizar a través de Facebook Ads:
    .tabla-b.mb-5
      .t-f.p-4
        .h3.mb-0.wh-le De la misma forma como en cualquier otro medio, sea convencional o alternativo, Facebook ha desarrollado una serie de posibilidades de campañas y estrategias de comunicación, de acuerdo con las necesidades y posibilidades de los anunciantes:
      table

        tr
          th Promoción de publicaciones: 
          td permite promocionar una publicación que se haya realizado en un perfil, fanpage o cuenta de Instagram (que también es propiedad de Facebook).

        tr
          th Promocionar una página: 
          td es una estrategia que permite hacer promoción de un sitio web.

        tr
          th Llegar a personas que estén cerca: 
          td a través de geolocalización se realiza una estrategia de marketing de proximidad que llega a persona que estén cerca del negocio en un rango y momento específicos.

        tr
          th Reconocimiento de marca: 
          td a través de un anuncio se llega a un público específico con la posibilidad de prestar más atención.

        tr
          th Atraer público a un sitio web: 
          td campaña enfocada en el aumento de tráfico en un sitio web.

        tr
          th Aumento de descarga de App: 
          td campaña enfocada en la descarga e instalación de una App en particular.

        tr
          th Aumento de asistentes a un evento: 
          td campaña para promocionar un evento específico y aumentar el número de participantes al mismo.

        tr
          th Aumento de reproducción de un video:  
          td campaña orientada a aumentar las visualizaciones de un video.

        tr
          th Aumento de las conversiones de un sitio web:  
          td es una campaña que busca generar conversiones (leads) de un negocio en particular, por lo general una tienda virtual.

        tr
          th Generación de clientes potenciales para un negocio:  
          td promoción de un sitio web o tienda virtual de un negocio para atraer clientes potenciales.

        tr
          th Aumento de uso de App:  
          td estrategia para aumentar la interacción del público con una app específica.

        tr
          th Solicitud de oferta:  
          td campaña para dar a conocer una oferta en particular.

        tr
          th Promoción de catálogos: 
          td promoción de un catálogo a manera de escaparate en una campaña de Facebook.

        tr
          th Obtener visitas a un negocio:  
          td con marketing de proximidad, se realiza promoción de un punto de venta entre las personas que estén en un rango y momento específico.
    br
    #t_2_8.titulo-segundo
      h2 2.8 Conceptos básicos del marketing digital
    p.mb-5 Es tal vez la metodología que presenta mayor eficacia en el desarrollo de una estrategia de marketing, la cual tenga como finalidad la atracción del mercado potencial para hacerlo adepto a una marca por su propia convicción e iniciativa. El inbound marketing crea experiencias significativas que generan valor para el mercado objetivo de la empresa, esto se realiza con el desarrollo de contenido útil y relevante para los usuarios de un sitio web, al mismo tiempo que se interactúa con ellos a través de medios más personales y con la posibilidad de generar un nivel de conversación más personal, como el correo electrónico, los mensajes de texto y los chats. No tiene un enfoque promocional o publicitario, por el contrario, el contenido generado representa mayor utilidad y relevancia, lo que hace que el mercado potencial se acerque a la marca de forma orgánica. Un ejemplo de ello es el modelo aplicado en escuelas de inglés o institutos donde se dictan estos tipos de cursos, enfatizándose siempre en una conversación más cercana.

    br
    .row.img-200.justify-content-around.align-items-center
      figure.mb-5
        img(src='@/assets/tema2/img-34.svg', alt='Conceptos básicos del marketing digital')

    .row.mb-5
      .col-md-6.row
        .h4 Atraer: 
        p En este punto se atraen a todos aquellos clientes potenciales; es decir, aquellos que tienen la opción de convertirse en compradores efectivos del producto o servicio. para ello, es indispensable desarrollar contenido relevante y muy atractivo, adicional de llegar a ellos con anuncios en redes sociales y medios más directos. Atraer significa demostrar a los prospectos que pueden confiar en la marca para resolver un problema en particular o para satisfacer una necesidad. Las personas buscan respuestas a preguntas que tienen en sus consiente e inconsciente y si están relacionados con un producto o servicio en particular es viable utilizar conocimiento e información que resulte útil para resolver dichas preguntas y atraer al mercado específico. Para este punto se puede hacer uso de algunas herramientas muy puntuales:
        
      .col-md-6.menta.p-5
        p Para este punto se puede hacer uso de algunas herramientas muy puntuales:
        .ul.lista-ul--color
          li 
            i.fas.fa-check
            p Anuncios
          li 
            i.fas.fa-check
            p Videos
          li 
            i.fas.fa-check
            p Publicaciones en blogs
          li 
            i.fas.fa-check
            p Redes sociales
          li 
            i.fas.fa-check
            p Diseño de contenidos


    .row.mb-5
      .col-md-6.row
        .h4 Conversar: 
        p En este momento ya se ha identificado un grupo de prospectos que permite ir un paso adelante en el proceso de venta, también se han diferenciado los medios por los que dichos prospectos prefieren entablar una determinada conversación: correo electrónico, chat, sitio web o redes sociales; con estos datos ya se puede acceder a información más personal de estos usuarios a través de un método de conversión como un formulario de suscripción. Posteriormente, esta información se utiliza para realizar estrategias de marketing relacional con herramientas CRM que generen experiencias personalizadas, a la medida de cada miembro del mercado objetivo. En este punto es necesario hacer una diferenciación de los usuarios e identificar cuáles de ellos son los más adeptos y cercanos a la marca para comenzar todo un programa que permita cautivarlos y llevarlos al siguiente nivel, donde por medio de estrategias de interacción se hacen ofertas concretas de los productos o servicios que la empresa ofrece. 
        
      .col-md-6.menta.p-5
        p En este punto se puede hacer uso de las siguientes herramientas:
        .ul.lista-ul--color
          li 
            i.fas.fa-check
            p CRM
          li 
            i.fas.fa-check
            p Sistema de información de mercados
          li 
            i.fas.fa-check
            p Formularios
          li 
            i.fas.fa-check
            p Correo electrónico
          li 
            i.fas.fa-check
            p Videos
          li 
            i.fas.fa-check
            p Catálogos y portafolios
    .row.mb-5
      .col-md-6.row
        .h4 Seducir: 
        p Es el momento de realizar un mayor número de conversaciones e interacciones, pero en este punto con clientes reales identificados plenamente. La conversación incluye también a la fuerza de ventas y todo aquel que esté involucrado con la prestación de servicio. La creación de contenidos interesantes y relevantes debe continuar, esta vez con información más puntual y útil para el mercado específico. El proceso de venta en esta fase del proceso inbound ya es un hecho, para ello debe haber un protocolo de cotización y atención al cliente muy bien estructurado. Por último, es necesario pedir retroalimentación permanente al cliente con el fin de conocer el nivel de satisfacción que este tiene frente al producto, servicio y la atención recibida. 
        
      .col-md-6.menta.p-5
        p En la fase de seducción se pueden utilizar las siguientes herramientas:
        .ul.lista-ul--color
          li 
            i.fas.fa-check
            p Correo electrónico
          li 
            i.fas.fa-check
            p Manual de imagen visual
          li 
            i.fas.fa-check
            p Cotizaciones      
          li 
            i.fas.fa-check
            p Catálogos y portafolios
          li 
            i.fas.fa-check
            p Encuestas de satisfacción
    br
    .row.t-gris3.p-4
      #t_2_9.titulo-segundo
        h2 2.9 Plan de marketing digital
      p.mb-5 Ya se cuentan con todos los elementos y herramientas necesarios para el desarrollo de un plan de marketing digital eficiente y coherente con las necesidades de la empresa y las características del mercado y como se ha dicho anteriormente, la diferencia entre el marketing convencional y el marketing digital, radica en los canales de interacción entre la marca y el cliente o consumidor para el desarrollo de las estrategias de comercialización, entrega de productos y comunicación, variables que se han analizado en el presente componente formativo. Por lo tanto, el desarrollo del plan de marketing digital presenta la estructura ya estudiada: 

      .ul.lista-ul--color
          li 
            i.fas.fa-caret-right
            p Brief táctico
          .sep2    
          li 
            i.fas.fa-caret-right
            p Objetivo de mercadeo
          .sep2   
          li 
            i.fas.fa-caret-right
            p Mercado objetivo
          .sep2   
          li 
            i.fas.fa-caret-right
            p Plan de medios digital <code><</code>seleccionar por lo menos 1 medio offline como apoyo a las estrategias online<code>></code>.
          .sep2   
          li 
            i.fas.fa-caret-right
            p Estrategias de comercialización y promoción online:
          .col-12.row
            .col-6
              li 
                i.fas.fa-check
                p Logística de entrega
              li 
                i.fas.fa-check
                p Sistema de pago
              li 
                i.fas.fa-check
                p Horarios de posteo de anuncios
              li 
                i.fas.fa-check
                p Estrategias de promoción de ventas
            .col-6
                  li 
                    i.fas.fa-check
                    p Estrategias de atracción y conversión de clientes.
                  li 
                    i.fas.fa-check
                    p Seguimiento a clientes <code><</code>estrategias postventa<code>></code>.
                  li 
                    i.fas.fa-check
                    p Sistema de información de mercados <code><</code>data<code>></code>.
                  li 
                    i.fas.fa-check
                    p Estructuración de redes sociales para comunicación con los clientes.                                                                          

          .sep2                                                
          li 
            i.fas.fa-caret-right
            p Cronograma y presupuesto del plan de mercadeo digital:
              row
                li 
                  i.fas.fa-check
                  p Objetivos de frecuencia e intensidad
                li 
                  i.fas.fa-check
                  p Indicadores
                li 
                  i.fas.fa-check
                  p Cantidad de miembros del mercado objetivo a impactar
                li 
                  i.fas.fa-check
                  p Costo del impacto   
                li 
                  i.fas.fa-check
                  p Cálculo de CPM                  

          .sep2             

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
