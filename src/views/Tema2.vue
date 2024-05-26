<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Marketing digital
            
    .row
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Vukk_lp4dO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-4
          p.mb-0 #[b El #[em marketing] digital no tiene diferencias abismales con el convencional, salvo aquello que lo define < lo digital > ;  es decir, el entorno donde sucede la interacción entre la marca y el consumidor, desplazando en muchas ocasiones las tiendas físicas, la interacción face to face y los medios masivos convencionales. ]
        p.mb-0 El #[em marketing] digital permite que las marcas (paradójicamente) sean más cercanas a los mercados objetivo, que llegan a públicos más específicos creando así comunidades más cerradas y menos masivas. Un anuncio en televisión tenía que ser visto por todos los miembros de la familia que en el horario prime time estuviesen viendo la telenovela de moda, de esa forma el anuncio de la cuchilla de afeitar dirigido al padre impactaba de igual forma a la madre, a los hijos y eventualmente a otros miembros de la familia o amigos.

    Separador
    #t_2_1.titulo-segundo
      h2 2.1 Conceptos básicos del marketing digital
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 El #[em marketing] por naturaleza tiene una amplia diversidad de conceptos, la mayoría de ellos anglicismos que pueden llegar a confundir un poco a quien comienza a estudiar este tema. Además, cuenta con otra gran variedad de términos que de igual forma son importantes para comprender el tema y desarrollar las estrategias adecuadamente. 
        p.mb-0 Por consiguiente, a continuación, se indican algunos términos con sus respectivas definiciones, tomadas de Cibrián (2018), en su libro #[em Marketing] Digital. Mide, Analiza y Mejora:
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h5.col.px-4.mb-0.neg #[em Cookie]
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-5
          p.mb-0 #[b Las #[em cookies] son pequeños ficheros de texto con información sobre el usuario. Estas se almacenan en el navegador, desde donde el usuario puede aceptarlas, bloquearlas o eliminarlas. ]
        p.mb-4 A esta información que se almacena en las #[em cookies] se puede acceder posteriormente con distintos fines como ofrecer publicidad, hacer #[em remarketing] (anuncios personalizados dirigidos a usuarios que visitaron previamente tu #[em web]), conocer el número total de sesiones generadas por los usuarios, mantener los productos añadidos en las cestas de la compra de las tiendas online, usar aplicaciones como las de los bancos sin necesidad de iniciar sesión en cada página, etc.
        p.mb-0 Las #[em cookies] tienen varias clasificaciones y criterios: 
    
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-11.col-md-12.col-12
        .row.align-items-center.justify-content-center.mb-0
          .col-lg-5.col-md-9.col-9
            img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
          .col-lg-7.col-md-12.col-12
            .tarjeta.tarjeta--verde.p-5
              SlyderA(tipo="b")
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b 1. #[em Cookies] propias o de primera parte:] son las generadas y almacenadas única y exclusivamente por el dominio al que se está accediendo. Por ejemplo, las que se utilizan en las tiendas #[em online]. A medida que vas añadiendo productos al carrito de la compra, la información se almacena en una #[em cookie] que permite que en las siguientes páginas se puedan mantener los mismos productos. Las herramientas de medición como Google #[em Analytics] usan #[em cookies] de primera parte para hacer el seguimiento de las interacciones de los usuarios: para saber de dónde vienen, cuántas sesiones generan, qué páginas visitan, etc.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b 2. #[em Cookies] de terceros o de tercera parte:] son las generadas y utilizadas por un dominio externo al del sitio #[em web] que estén visitando los usuarios. Por ejemplo, cuando accedes a una #[em web] y ves #[em banners] sobre productos que te interesan, esa publicidad no se produce de forma aleatoria. Esto ocurre porque en las cookies se guardan tus preferencias de navegación, lo que permite a los anunciantes mostrarte anuncios adaptados a tus gustos a través de otras #[em webs.]
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b 3. #[em Cookies] de sesión:] son las que se eliminan en cuanto caduca la sesión. Su propósito es permitirte moverte entre las diferentes páginas de una web sin necesidad de que tengas que dar la misma información una y otra vez. Por ejemplo, las que se utilizan en las tiendas online. A medida que vas añadiendo productos al carrito de la compra, la información se almacena en una #[em cookie] que permite que en las siguientes páginas se puedan mantener los mismos productos.
                .row
                  .col-lg-12.col-md-6.col-12
                    p.mb-4 #[b 4. #[em Cookies] persistentes:] son las que permiten almacenar los datos de los usuarios durante más tiempo. También tienen fecha de caducidad, la cual es definida por el responsable de la #[em cookie.]
                    p.mb-0 En el caso de que el usuario no elimine estas #[em cookies] manualmente desde su navegador, cuando lleguen a su fecha de caducidad estas se eliminarán completamente de este.
                .row
                  .col-lg-12.col-md-6.col-12
                    p.mb-4 #[b 5. #[em Cookies] técnicas:] son las que permiten a los usuarios navegar a través de una página #[em web] o aplicación y utilizar sus servicios.
                    p.mb-0 Por ejemplo, las que te permiten recordar los productos en el carrito de la compra o registrarte en un evento.
                .row
                  .col-lg-12.col-md-6.col-12
                    p.mb-4 #[b 6. #[em Cookies] de personalización:] son las que permiten al usuario disfrutar del servicio que presta la web o aplicación de una forma personalizada.
                    p.mb-0 Por ejemplo, cuando una #[em web] está traducida a muchos idiomas, el que tú la veas en el tuyo es posible gracias a las #[em cookies] de personalización.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b 7. #[em Cookies] de análisis:] son las que permiten registrar y almacenar los datos sobre los usuarios para posteriormente analizar su comportamiento.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b 8. #[em Cookies] publicitarias:] son #[em cookies] cuyo único propósito es hacer publicidad.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b 9. #[em Cookies] de publicidad comportamental:] son las #[em cookies] que permiten hacer publicidad a los usuarios, pero de una forma más personalizada. ¿Cómo? Recabando información de su comportamiento, para así mostrarles publicidad basada en dicho comportamiento.
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h5.col.px-4.mb-0.neg Dimensión
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        p.mb-4 Una dimensión es lo que describe los datos. Algunos ejemplos de dimensiones son: país, navegador, dispositivo. La dimensión es diferente a la métrica, la razón es que la métrica utiliza valores que se pueden medir, las dimensiones son más cualitativas.
        .cajon.color-secundario.p-5.mb-5
          p.mb-0 #[b Por ejemplo, es posible sumar las sesiones diarias procedentes de Bogotá (12.000) con las procedentes de Medellín (45.000) y como resultado te saldrán 57.000 sesiones. Pero lo que no es posible hacer es sumar Bogotá y Medellín. ]
        
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h5.col.px-4.mb-0.neg Métrica

    p.mb-5 Una métrica es lo que mide los datos. Algunos ejemplos de métricas son: usuarios, sesiones, páginas vistas.
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--grissss").mb-5
      .row.p-4(titulo="Resumen ejecutivo")
        .col-md-1
          figure
            img.img-a.img-t.my-4(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p.mb-5.my-5 Es el registro que queda del ingreso de una persona a un sitio web o aplicación.
      .row.p-4(titulo="Diseño de matrices de diagnóstico")
        .col-md-1
          figure
            img.img-a.img-t.my-3(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p.mb-4.my-4 Una sesión se registra cuando un usuario visita una #[em web] o aplicación móvil. En #[em Google Analytics,] se contará otra sesión cuando ocurran los siguientes casos:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p #[b 30 minutos de inactividad:] si se está inactivo por más de 30 minutos se registra una nueva sesión.
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p #[b Cierre del navegador:] si se cierra el navegador y 30 minutos después se ingresa a la misma página se registrarán otras sesiones, si el retorno es antes de los 30 minutos se considera la misma sesión.
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p #[b Cambio de campaña:] si ingresas a una misma #[em web] por #[em links] de dos fuentes diferentes; por ejemplo, un sitio de noticias y una red social, cada una se considera una sesión independiente.
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p #[b Cambio de día:] si se está navegando a la media noche, una vez cambie el día se considera otra sesión.
      .row.p-4(titulo="Resumen ejecutivo")
        .col-md-1
          figure
            img.img-a.img-t.my-3(src='@/assets/curso/tema2/img8.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p.mb-5.my-4 Una página vista se registra cada vez que se carga una página en el navegador. Si un usuario navega a una página diferente y más tarde vuelve a la página original, se registrará una segunda página vista para esa página original. También se registra página vista cuando se actualiza la página (F5).
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h5.col.px-4.mb-0.neg KPI: #[em (Key Performance Indicator)]
    
    p.mb-5 un KPI es un indicador clave de rendimiento, esto quiere decir que gracias a este tipo de indicadores es posible saber si se están cumpliendo o no los objetivos. Algunos ejemplos de KPI son: ROI, tasa de rebote.
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12 
        .tarjeta--container.row.mb-2
          .col-md.tarjeta.color-primario.pri8.f1.p-5
            .row.justify-content.mb-4
              .col-6
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/img9.svg', alt='Texto que describa la imagen')
            h2 ROI #[em (Return On Investment)]
            p El ROI es el retorno de la inversión, es decir, qué cantidad de la que has invertido ha vuelto a la empresa. Este KPI mide la relación existente entre el beneficio neto y los costos. El método exacto para realizar el cálculo depende de los objetivos de la inversión que la empresa realice. Su fórmula es: 
            p.mb-4 ROI = [(ingresos - inversión) / inversión] * 100
          .col-md.tarjeta.color-primario.pri9.f2.p-5
            .row.justify-content.mb-4
              .col-6
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen')
            h2.text-white Tasa de rebote
            p.text-white La tasa de rebote es el porcentaje de sesiones que llegan a una página y se van sin hacer nada más en la web. Su fórmula es:
            p.mb-4.text-white Tasa de rebote = (total de sesiones que vieron una sola página / total de sesiones) * 100
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12 
        .cajon.color-secundario.p-4
          p.mb-0 #[b Si se tiene una tasa de rebote del 26 % significa que, de cada 100 sesiones, 26 salieron de la web sin mirar nada más. Este KPI es útil para conocer el rendimiento de tu web en general y de las distintas páginas de esta en particular.]
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h5.col.px-4.mb-0.neg Cuadro de mando #[em  (scorecard)]
    
    p.mb-5 El cuadro de mando o #[em scorecard] en inglés, es una relación de KPI agrupados de forma lógica que muestran de un vistazo si se están alcanzando o no los objetivos para poder tomar decisiones de forma rápida. Para conseguir este propósito, en el cuadro de mando solo debe mostrarse la información estrictamente necesaria. Es decir, la que permita saber si se están cumpliendo o no los objetivos.
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h5.col.px-4.mb-0.neg  Panel de control #[em (dashboard)]
    
    p.mb-5 En los paneles de control se recogen diversos KPI, tablas de segmentación y diferentes gráficos con el objetivo de analizar cada estrategia/acción que se ha realizado para conseguir los objetivos del negocio.
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img1.svg")
            .col-lg-10.col-md-12.col-12
              h4.mb-0.text-white #[b Imaginemos que uno de los objetivos es mejorar el Engagement Rate (ER) de Twitter, el cual lo vamos a calcular dividiendo el total de interacciones entre el número de seguidores y multiplicando el resultado por cien. En este caso, en el cuadro de mando tendremos este KPI para saber si estamos cumpliendo o no los objetivos. (Capítulo 2. Terminología básica)]
    
    Separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Analítica digital

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La analítica en términos del #[em marketing] digital, se refiere al análisis de todos los datos que se generan en la interacción de los usuarios con los diferentes medios digitales de la empresa, esto con el fin de tomar decisiones oportunas y acertadas. Dichos datos son tanto cuantitativos como cualitativos.
    
    p.mb-5.text-center Partes de la analítica digital:
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .tarjeta--container.row.mb-2
          .col-md.tarjeta.color-primario.f1.pri.p-5
            .row.justify-content.mb-4
              .col-6
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/img60.svg', alt='Texto que describa la imagen')
            h2 Medición
            p Consiste en la recopilación de datos asociados a la actividad de los usuarios en un sitio web, aplicación móvil o cualquier otro medio digital.
          
          .col-md.tarjeta.color-primario.pri2.p-5
            .row.justify-content.mb-4
              .col-6
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/img61.svg', alt='Texto que describa la imagen')
            h2.text-white Análisis
            p.text-white Consiste en el estudio y la comprensión de los datos, gracias a la segmentación de estos según diferentes criterios.
          
          .col-md.tarjeta.color-primario.pri3.f2.p-5
            .row.justify-content.mb-4
              .col-6
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/img62.svg', alt='Texto que describa la imagen')
            h2 #[em Reporting]
            p Consiste en plasmar los datos en informes útiles que permitan tomar decisiones.

    Separador
    #t_2_3.titulo-segundo.mb-4
      h2 2.3 Herramientas de medición
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-9.mb-4
        img.img-a.img-t(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
      .col-lg-6.col-md-12.col-12.mb-4
        p.mb-4 Existe una gran variedad de herramientas de medición de datos, todas ellas con características y ventajas diferentes, algunas gratuitas y otras que tienen un sistema de pago que oscila de moderado a alto, lo importante es que la información debe ser analizada y utilizada de la mejor forma posible.
        p.mb-0 A continuación, se verán algunas de las herramientas más versátiles para la medición de los datos:
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h4.col.px-4.mb-0.mx-5.neg Buscador de Google
        img.clase4.d-none.d-lg-block(src='@/assets/curso/tema2/img13.svg')
    
    p.mb-5 Las búsquedas en Google son el primer paso para conocer el estado de una empresa y para el desarrollo inicial de las estrategias de comunicación. Para alguien que trabaje en comunicación digital es importante conocer todas las acciones y posibilidades que este buscador ofrece:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Google Trends]
        p.text-center Permite hacer un seguimiento del interés que se tiene por una marca en particular a nivel mundial, nacional o local, también investigar a los competidores en los mismos aspectos y lo más importante, ver las tendencias de búsquedas que realizan las personas en un determinado momento y lugar.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Board reader]
        p.text-center En este buscador cualquier marca a nivel mundial puede conocer lo que están opinando de ella en foros y comunidades. Es muy útil porque se centra en foros, un elemento que sería muy dispendioso de analizar si se hiciese uno por uno.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em How sociable]
        p.text-center Es una herramienta muy útil para conocer el nivel de influencia que se tiene en las diferentes redes sociales.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-10
            .cajam
              h2.text-center.text-white Estadísticas de las redes sociales
        p.text-center Cuando se ha creado una página en Facebook o cuentas en Instagram o Twitter, por ejemplo, estas mismas redes sociales proporcionan información detallada de la interacción, alcance y popularidad de cada post o anuncio que se haga en ellas, así se puede determinar la efectividad de las estrategias que se realicen para una marca en particular.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Linkfluence]
        p.text-center Esta plataforma permite realizar una medición permanente de segmentación y mapeo de conversaciones de las diferentes comunidades. Se integra con #[em e-reputation, engage] y observatorio de tendencias para monitorizar el nivel de influencia y reputación de una marca en particular.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img19.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Social Mention]
        p.text-center Esta plataforma permite realizar seguimiento en redes sociales de comentarios o publicaciones realizadas por los usuarios referentes a un tema determinado.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h2.text-center.text-white #[em Crimson Hexagon]
        p.text-center Es un sistema de monitoreo de redes sociales para realizar un análisis global de marcas y organizaciones, conociendo las opiniones de consumidores y los puntos de vista que estos tienen de la empresa, los productos, la industria y la competencia.

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h4.col.px-4.mb-0.mx-5.neg Analítica web
        img.clase4.d-none.d-lg-block(src='@/assets/curso/tema2/img13.svg')
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img21.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Consiste en la recolección, almacenamiento y análisis de datos estadísticos que surgen del funcionamiento de un sitio web. Esta información se estudia con el fin de generar conocimiento relevante para el desarrollo de las actividades de #[em marketing] digital. La analítica #[em web] permite realizar diferentes tipos de actividades:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .caja6.p-4
          p.mb-0 Adicionalmente, la analítica web tiene una serie de tarea definidas dentro de la organización; actividades enfocadas en el CRM y otros procesos de interacción entre la marca y el consumidor. La analítica interviene además en la toma de decisiones relacionadas con la comercialización de los productos o servicios, así como el estudio permanente de los clientes, el mercado y las tendencias. De este modo es necesario que se tengan en cuenta una serie de indicadores relacionados con la analítica web: 
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-12.col-12
        p.mb-4.my-4 
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Medición de la actividad web
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Medición de la valoración
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Medición del retorno sobre la inversión (ROI)
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Mediciones individuales
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Seguimiento de la marca
      .col-lg-4.col-md-12.col-12
        img.img-a.img-t(src='@/assets/curso/tema2/img22.png' alt='AvatarTop')
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h4.col.px-4.mb-0.mx-5.neg Mediciones en Facebook
        img.clase4.d-none.d-lg-block(src='@/assets/curso/tema2/img23.svg')
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img24.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-4
          p.mb-0 #[b Siendo la red social más grande del mundo por su número de suscriptores que superan los 2400 millones, una de las mayores fuentes de datos del mercado y un generador de anuncios virales, es necesario hacer un análisis de las mediciones que se pueden realizar en Facebook.]
        p.mb-0 Las variadas posibilidades de comunicación en esta red social permiten mantener a sus usuarios conectados casi de forma permanente: publicaciones, videos, comentarios, #[em likes] en 5 formas diferentes, #[em chats,] grupos, comunidades, perfiles, páginas, transmisiones en vivo, anuncios pagados, campañas, videojuegos, entre otros, son algunas de las actividades que permite realizar. Por consiguiente, es indicado conocer entonces las mediciones que se pueden realizar:

    p.mb-5.text-center #[b Las páginas de Facebook permiten realizar mediciones estadísticas semanales en cuanto a:]
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-11.col-md-12.col-12
        .row.align-items-center.justify-content-center.mb-0
          .col-lg-5.col-md-9.col-9
            img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img25.svg', alt='Texto que describa la imagen')
          .col-lg-7.col-md-12.col-12
            .tarjeta.tarjeta--verde.p-5
              SlyderA(tipo="b")
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Total de “me gusta”:] indica el número de personas que les gusta la página; relaciona también el porcentaje de aumento o disminución de la métrica semanal.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Amigos de los fans:] muestra el número de personas que eran amigos de los que hicieron clic en “me gusta” y relaciona el porcentaje de aumento o disminución semanal.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Personas que están hablando de esto:] indica el número de personas que realizaron algún tipo de actividad en la última semana relacionada con una página: hacer un #[em post,] compartir una publicación, responder a un evento o a una pregunta, etiquetar a alguien, mencionarla en otra publicación.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Alcance de la semana:] indica el número de personas que vieron el contenido de la página o contenido asociado, también relaciona el porcentaje de aumento o disminución.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Canal orgánico:] relaciona el número de personas que vieron el contenido de la página a través de la sección de noticias en un tiempo determinado.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Canal viral:] indica el número de personas que vieron una publicación de la página hecha por un amigo.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Canal pagado:] indica el número de personas que vieron una publicación o anuncio patrocinado.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Usuarios únicos por frecuencia:] muestra gráficamente el número de personas que vieron el contenido de la página en los últimos siete días.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Visitas a la página:] indica el número de veces que la página fue vista diariamente en un periodo determinado.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Visitantes únicos:] indica el número de personas que visitaron un #[em fanpage] por día en un periodo determinado.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Publicaciones:] muestra de forma gráfica el número de personas que vieron una publicación en un tiempo determinado.
                .row
                  .col-lg-12.col-md-6.col-12
                    p #[b Audiencia potencial:] suma de los amigos de las personas que dieron “me gusta” o que compartieron una publicación.

    Separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 CRM #[em (Costumer Relationship Management)]
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img26.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-4
          p.mb-0 #[b Es un proceso de relacionamiento con los clientes de una empresa o marca, su enfoque está en el proceso de comercialización, mercadeo y comunicación de la empresa con sus clientes reales y potenciales.]
        p.mb-0 Este proceso depende en casi un 100 % del #[em software] que gestiona la información de los clientes, para luego con base en estos datos generar acciones específicas de promoción y comercialización. El CRM se nutre de los datos de los clientes a través de Sistemas de Información de Mercados (SIM); estos datos abundan en medios como las redes sociales y los consumidores los entregan de forma libre y voluntaria; además, son muy eficaces para el desarrollo de estrategias puntuales de #[em marketing.]

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img1.svg")
            .col-lg-10.col-md-12.col-12
              h4.mb-0.text-white #[b El CRM evolucionó con la llegada de las redes sociales y hoy por hoy se conoce como #[em “Social CRM”,] mejorando el sistema de interacción entre la marca y el cliente, convirtiendo la comunicación de doble vía y no únicamente desde la marca hacia el consumidor. ]
    
    p.mb-5 De esta forma la comunicación que se realiza a través del #[em Social CRM] es mucho más integral, pues el consumidor es alcanzado por un correo electrónico que se le ha dejado cuando hizo su suscripción en el sitio #[em web] de la empresa, generándole impactos que se #[em postean] en las redes sociales que ha seguido gracias a una campaña de activación, la cual se hace periódicamente para captar nuevos clientes. De la misma forma recibe un mensaje de texto en su celular y mensajes de #[em WhatsApp,] todo esto en un periodo de tres semanas en las que la marca ha estado interactuando con el consumidor, creando posicionamiento y recordación.
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h4.col.px-4.mb-0.mx-5.neg Enfoque del Social CRM
        img.clase4.d-none.d-lg-block(src='@/assets/curso/tema2/img27.svg')
    
    p.mb-5 En el enfoque del Social CRM existen cuatro elementos básicos para tener en cuenta:

    TabsC.color-primario.mb-5
      .py-3.py-md-4.bg26.px-3(titulo="1. Inteligencia de clientes")
        .row.justify-content-center
          .col-lg-5.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/img28.png', alt='')
          .col-lg-7.col-md-12.my-5
            h4.mb-4 1. Inteligencia de clientes
            p Se necesita tener conocimiento sobre el cliente para poder desarrollar productos y servicios enfocados a sus expectativas. Para convertir los datos en conocimiento, se emplean bases de datos y reglas a partir de un proceso de segmentación de la información.
                
      .py-3.py-md-4.bg26.px-3(titulo="2. Interactividad")
        .row.justify-content-center
          .col-lg-5.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/img29.png', alt='')
          .col-lg-7.col-md-12.my-5
            h4.mb-4 2. Interactividad
            p El proceso de comunicación pasa de un monólogo: de la empresa al cliente, a un diálogo, entre ellos. Además, es el cliente el que dirige el diálogo y decide cuándo empieza y cuándo acaba.
            
      .py-3.py-md-4.bg26.px-3(titulo="3. Fidelización de clientes")
        .row.justify-content-center
          .col-lg-5.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/img30.png', alt='')
          .col-lg-7.col-md-12.my-5
            h4.mb-4 3. Fidelización de clientes
            p En la práctica, es mucho mejor y más rentable fidelizar a los clientes que adquirir nuevos. La fidelización de los clientes pasa a ser muy importante y, por tanto, se convierte en el pilar de la gestión del #[em marketing] relacional en función del ciclo de vida del cliente. El #[em  community manager] debe considerar la manera como se establece fidelización proponiendo y utilizando las herramientas de social media #[em marketing.]
            
      .py-3.py-md-4.bg26.px-3(titulo="4. Personalización")
        .row.justify-content-center
          .col-lg-5.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/img31.png', alt='')
          .col-lg-7.col-md-12.my-5
            h4.mb-4 4. Personalización
            p Cada cliente desea recibir promociones y ofertas personalizadas, por lo que se necesitan grandes esfuerzos en inteligencia de las bases de datos para desarrollar una eficiente segmentación de clientes. La customización del mensaje, en fondo y en forma, aumenta drásticamente la eficacia de las acciones de comunicación.


    Separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Plataformas de gestión de marketing digital

    p.mb-5 A continuación, se indican dichas plataformas:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img32.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Blogger]
        p.text-center Es una plataforma para la creación de blogs, pertenece a la empresa Google y tiene total interacción con todas sus herramientas. Es ideal para mostrar información periódica acerca de un tema específico integrado con redes sociales y otros medios.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img33.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Linkedin]
        p.text-center Es una red social con enfoque profesional, permite la interacción entre empresas y profesionales para el desarrollo de trabajo colaborativo o la gestión laboral.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img34.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Zoho]
        p.text-center Es una suite de servicios empresariales que permite el desarrollo de diferentes tareas relacionadas con el #[em marketing] digital, CRM, gestión de correo electrónico, entre otras.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img35.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-10
            .cajam
              h2.text-center.text-white #[em Traity]
        p.text-center Es una plataforma que permite la verificación del perfil personal de compradores y vendedores con el fin de generar una reputación online de personas y empresas para generar confianza en los intercambios comerciales.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img36.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Social Go]
        p.text-center Es una plataforma que permite crear redes sociales personalizadas en cuanto a diseño y funciones, además de integrarse con otras redes como Facebook y Twitter.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img37.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h2.text-center.text-white #[em Alterian]
        p.text-center Es ideal para el desarrollo de campañas de #[em marketing] integrales; combina herramientas de gestión de contenidos, correo electrónico y monitorización de redes sociales.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img38.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h2.text-center.text-white #[em CitizenNet]
        p.text-center Es una herramienta para el desarrollo de investigaciones de mercado y gestión de campañas publicitarias. Maneja datos de segmentación y optimización de tiempos. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img39.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h2.text-center.text-white #[em Livestream]
        p.text-center Es una plataforma para ver y transmitir video en vivo, con el fin de llegar a un público masivo con contenido audiovisual.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img40.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h2.text-center.text-white #[em Saleforce]
        p.text-center Es una suite que provee soluciones CRM por suscripción. En ella se puede crear aplicaciones, tener contacto con toda la organización, contactar clientes y realizar estrategias de venta, todo en línea.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img41.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h2.text-center.text-white #[em Hootsuite]
        p.text-center Es una plataforma que permite realizar publicaciones simultáneas en varias redes sociales como Facebook, Instagram y Twitter.


    Separador
    #t_2_6.titulo-segundo.mb-4
      h2 2.6 SEO en el marketing digital          
  
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img24.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-4.mb-4.my-4
          p.mb-0 #[b Inicialmente el SEO (del inglés #[em Search Engine Optimization]) se enmarca en las estrategias del #[em marketing] relacional y el colaborativo, que tienden a primar el buscador como canal de publicidad para públicos muy segmentados (aquellos que utilicen cierta búsqueda concreta) y, finalmente, el ideal de una estrategia de SEO implica crear una red propia de usuarios fidelizados que hablen bien y proactivamente de la marca.]
        p.mb-0 Por eso es importante primero pensar qué tipo de estrategia global se va a llevar a cabo, y en función de esta, pensar en él y no antes. Así, en la relación entre #[em marketing] y SEO se debe tener en cuenta: #[em marketing] no es SEO y SEO no es #[em marketing;] el #[em marketing] es un concepto más amplio que el SEO. Primero se debe estudiar la estrategia de #[em marketing] y su continuación. La unión de #[em marketing] + SEO debe llevar a visitas que lleven a acciones y posiblemente esas acciones lleven a ventas o conversiones. Serrano (2015).

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h4.col.px-4.mb-0.mx-5.neg SEM
        img.clase4.d-none.d-lg-block(src='@/assets/curso/tema2/img42.svg')
    
    p.mb-5 En el enfoque del Social CRM existen cuatro elementos básicos para tener en cuenta:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img43.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 El SEM (del inglés #[em Search Engine Marketing]) a diferencia de SEO, utiliza herramientas que los buscadores ofrecen para el desarrollo de estrategias de posicionamiento a través de anuncios publicitarios pagos, como es el caso de #[em Google Adwords;] esto requiere la selección de palabras claves, creación de anuncios y gestión de pauta. Se pueden realizar a través de PPC (Pago Por Clic) y PCP (Costo Por Clic).

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-12.col-12
        p.mb-4.my-4 #[b El SEM tiene varias ventajas que se verán a continuación:]
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Permite que un producto o servicio sea reconocido rápidamente
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Permite competir con empresas grandes y con alto posicionamiento en el mercado
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p El ROI es más rápido
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Permite llegar a mercados muy específicos porque permite un alto nivel de segmentación
      .col-lg-4.col-md-12.col-12
        img.img-a.img-t(src='@/assets/curso/tema2/img44.png' alt='AvatarTop')
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-12.col-12
        img.img-a.img-t(src='@/assets/curso/tema2/img45.png' alt='AvatarTop')
      .col-lg-4.col-md-12.col-12
        p.mb-4.my-4 #[b Sin embargo, este tipo de comunicación también tiene algunas desventajas:]
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p La compra de palabras clave para el desarrollo de la publicidad suele ser costosa
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Es un tipo de comunicación invasiva que el mercado no ha buscado y por lo tanto puede generar rechazo
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Requiere compromiso en el desarrollo de la gestión y optimización
    

    Separador
    #t_2_7.titulo-segundo.mb-5
      h2 2.7 Promoción en la web
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img46.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        p.mb-4.my-4 En la web hay múltiples opciones de hacer promoción para las empresas y marcas, desde alternativas gratuitas que implican un proceso más orgánico y lento para el logro de posicionamiento de marca, incremento en ventas y reconocimiento por parte del mercado meta; hasta el pago de pauta en sitios web incluidos en la red #[em Display] de Google a través de su plataforma de pago #[em Adwords,] la cual incluye anuncios en YouTube.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 #[b También en Facebook, la red social más grande del mundo con más de 2400 millones de cuentas inscritas y que permite una serie de modelos de publicidad pagada, que va desde publicaciones que llegan a segmentos específicos hasta campañas muy bien estructuradas que incluyen una completa planificación por temporadas establecidas.]
        
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h4.col.px-4.mb-0.mx-5.neg #[em Google Adwords]
        img.clase4.d-none.d-lg-block(src='@/assets/curso/tema2/img47.svg')
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img48.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 En el nombre de esta plataforma se pueden encontrar los dos elementos básicos que lo conforman: en primer lugar, Google, este es el motor de búsqueda más utilizado a nivel mundial y donde migra el 80 % de la información que se consulta; siendo un motor de búsqueda su función es ingresar a cada una de las páginas que hacen parte de su red #[em Display] conformada por millones de sitios que Google ha seleccionado por la calidad y flujo de la información.





    Separador
    #t_2_8.titulo-segundo.mb-5
      h2 2.8 Inbound marketing
    
    Separador
    #t_2_9.titulo-segundo.mb-5
      h2 2.9 Plan de marketing digital.











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
