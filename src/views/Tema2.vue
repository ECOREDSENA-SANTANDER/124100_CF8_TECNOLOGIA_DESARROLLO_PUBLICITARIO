<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 #[em Marketing] digital
            
    .row
      figure.mb-4
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/qRnV-Iqybn8?si=40AVg52Jgr0eOpPC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. Marketing Digital
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-4
          p.mb-0 #[b El #[em marketing] digital no tiene diferencias abismales con el convencional, salvo aquello que lo define < lo digital > ;  es decir, el entorno donde sucede la interacción entre la marca y el consumidor, desplazando en muchas ocasiones las tiendas físicas, la interacción #[em face to face] y los medios masivos convencionales. ]
        p.mb-0 El #[em marketing] digital permite que las marcas (paradójicamente) sean más cercanas a los mercados objetivo, que llegan a públicos más específicos creando así comunidades más cerradas y menos masivas. Un anuncio en televisión tenía que ser visto por todos los miembros de la familia que en el horario prime time estuviesen viendo la telenovela de moda, de esa forma el anuncio de la cuchilla de afeitar dirigido al padre impactaba de igual forma a la madre, a los hijos y eventualmente a otros miembros de la familia o amigos.

    Separador
    #t_2_1.titulo-segundo
      h2 2.1 Conceptos básicos del #[em marketing] digital
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.fondo-b.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-5.mt-4.mb-4
            p.mb-0 El #[em marketing] por naturaleza tiene una amplia diversidad de conceptos, la mayoría de ellos anglicismos que pueden llegar a confundir un poco a quien comienza a estudiar este tema. Además, cuenta con otra gran variedad de términos que de igual forma son importantes para comprender el tema y desarrollar las estrategias adecuadamente. 
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        p.mb-0 Por consiguiente, a continuación, se indican algunos términos con sus respectivas definiciones, tomadas de Cibrián (2018), en su libro #[em Marketing] Digital. Mide, Analiza y Mejora:

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h4.col.px-4.mb-0.neg #[em Cookie]
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-5
          p.mb-0 #[b Las #[em cookies] son pequeños ficheros de texto con información sobre el usuario. Estas se almacenan en el navegador, desde donde el usuario puede aceptarlas, bloquearlas o eliminarlas. ]
        p.mb-4 A esta información que se almacena en las #[em cookies] se puede acceder posteriormente con distintos fines como ofrecer publicidad, hacer #[em remarketing] (anuncios personalizados dirigidos a usuarios que visitaron previamente tu #[em web]), conocer el número total de sesiones generadas por los usuarios, mantener los productos añadidos en las cestas de la compra de las tiendas #[em online], usar aplicaciones como las de los bancos sin necesidad de iniciar sesión en cada página, etc.
        p.mb-0 Las #[em cookies] tienen varias clasificaciones y criterios: 
    
    
    .row.align-items-top.justify-content-center.mb-4
      .col-lg-11.col-md-12.col-12
        .row.align-items-center.justify-content-center.mb-0
          .col-lg-5.col-md-9.col-9
            img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
          .col-lg-7.col-md-12.col-12
            .tarjeta.tarjeta--verde
              SlyderA(tipo="b").slider-a-custom.p-4
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p #[b 1. #[em Cookies] propias o de primera parte:] son las generadas y almacenadas única y exclusivamente por el dominio al que se está accediendo. Por ejemplo, las que se utilizan en las tiendas #[em online]. A medida que vas añadiendo productos al carrito de la compra, la información se almacena en una #[em cookie] que permite que en las siguientes páginas se puedan mantener los mismos productos. Las herramientas de medición como Google #[em Analytics] usan #[em cookies] de primera parte para hacer el seguimiento de las interacciones de los usuarios: para saber de dónde vienen, cuántas sesiones generan, qué páginas visitan, etc.
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p #[b 2. #[em Cookies] de terceros o de tercera parte:] son las generadas y utilizadas por un dominio externo al del sitio #[em web] que estén visitando los usuarios. Por ejemplo, cuando accedes a una #[em web] y ves #[em banners] sobre productos que te interesan, esa publicidad no se produce de forma aleatoria. Esto ocurre porque en las cookies se guardan tus preferencias de navegación, lo que permite a los anunciantes mostrarte anuncios adaptados a tus gustos a través de otras #[em webs.]
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p #[b 3. #[em Cookies] de sesión:] son las que se eliminan en cuanto caduca la sesión. Su propósito es permitirte moverte entre las diferentes páginas de una #[em web] sin necesidad de que tengas que dar la misma información una y otra vez. Por ejemplo, las que se utilizan en las tiendas #[em online]. A medida que vas añadiendo productos al carrito de la compra, la información se almacena en una #[em cookie] que permite que en las siguientes páginas se puedan mantener los mismos productos.
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p.mb-4 #[b 4. #[em Cookies] persistentes:] son las que permiten almacenar los datos de los usuarios durante más tiempo. También tienen fecha de caducidad, la cual es definida por el responsable de la #[em cookie.]
                    p.mb-0 En el caso de que el usuario no elimine estas #[em cookies] manualmente desde su navegador, cuando lleguen a su fecha de caducidad estas se eliminarán completamente de este.
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p.mb-4 #[b 5. #[em Cookies] técnicas:] son las que permiten a los usuarios navegar a través de una página #[em web] o aplicación y utilizar sus servicios.
                    p.mb-0 Por ejemplo, las que te permiten recordar los productos en el carrito de la compra o registrarte en un evento.
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p.mb-4 #[b 6. #[em Cookies] de personalización:] son las que permiten al usuario disfrutar del servicio que presta la #[em web] o aplicación de una forma personalizada.
                    p.mb-0 Por ejemplo, cuando una #[em web] está traducida a muchos idiomas, el que tú la veas en el tuyo es posible gracias a las #[em cookies] de personalización.
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p #[b 7. #[em Cookies] de análisis:] son las que permiten registrar y almacenar los datos sobre los usuarios para posteriormente analizar su comportamiento.
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p #[b 8. #[em Cookies] publicitarias:] son #[em cookies] cuyo único propósito es hacer publicidad.
                .row.align-items-top
                  .col-lg-12.col-md-12.col-12
                    p #[b 9. #[em Cookies] de publicidad comportamental:] son las #[em cookies] que permiten hacer publicidad a los usuarios, pero de una forma más personalizada. ¿Cómo? Recabando información de su comportamiento, para así mostrarles publicidad basada en dicho comportamiento.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h4.col.px-4.mb-0.neg Dimensión
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        p.mb-4 Una dimensión es lo que describe los datos. Algunos ejemplos de dimensiones son: país, navegador, dispositivo. La dimensión es diferente a la métrica, la razón es que la métrica utiliza valores que se pueden medir, las dimensiones son más cualitativas.
        .cajon.color-secundario.p-5.mb-0
          p.mb-0 #[b Por ejemplo, es posible sumar las sesiones diarias procedentes de Bogotá (12.000) con las procedentes de Medellín (45.000) y como resultado te saldrán 57.000 sesiones. Pero lo que no es posible hacer es sumar Bogotá y Medellín. ]
        
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h4.col.px-4.mb-0.neg Métrica

    p.mb-4 Una métrica es lo que mide los datos. Algunos ejemplos de métricas son: usuarios, sesiones, páginas vistas.
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--grissss").mb-4
      .row.p-4(titulo="Usuarios")
        .col-md-1
          figure
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p.mb-0.my-4 Es el registro que queda del ingreso de una persona a un sitio #[em web] o aplicación.
      .row.p-4(titulo="Sesión")
        .col-md-1
          figure
            img.img-a.img-t.my-3.d-none.d-lg-block(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen')
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
      .row.p-4(titulo="Página vista")
        .col-md-1
          figure
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img8.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p Una página vista se registra cada vez que se carga una página en el navegador. Si un usuario navega a una página diferente y más tarde vuelve a la página original, se registrará una segunda página vista para esa página original. También se registra página vista cuando se actualiza la página (F5).
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h4.col.px-4.mb-0.neg #[em KPI: (Key Performance Indicator)]
    
    p.mb-4 un #[em KPI] es un indicador clave de rendimiento, esto quiere decir que gracias a este tipo de indicadores es posible saber si se están cumpliendo o no los objetivos. Algunos ejemplos de #[em KPI] son: #[em ROI], tasa de rebote.
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12 
        .tarjeta--container.row.mb-2
          .col-md.tarjeta.color-primario.pri8.f1.p-5
            .row.justify-content.mb-3
              .col-3.my-4
                figure
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img9.svg', alt='Texto que describa la imagen')
            h2  ROI #[em (Return On Investment)]
            p El ROI es el retorno de la inversión, es decir, qué cantidad de la que has invertido ha vuelto a la empresa. Este KPI mide la relación existente entre el beneficio neto y los costos. El método exacto para realizar el cálculo depende de los objetivos de la inversión que la empresa realice. Su fórmula es: 
            p.mb-4 ROI = [(ingresos - inversión) / inversión] * 100
          .col-md.tarjeta.color-primario.pri9.f2.p-5
            .row.justify-content.mb-3
              .col-3.my-4
                figure
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen')
            h2.text-white Tasa de rebote
            p.text-white La tasa de rebote es el porcentaje de sesiones que llegan a una página y se van sin hacer nada más en la #[em web]. Su fórmula es:
            p.mb-4.text-white Tasa de rebote = (total de sesiones que vieron una sola página / total de sesiones) * 100
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12 
        .cajon.color-secundario.p-4
          p.mb-0 #[b Si se tiene una tasa de rebote del 26 % significa que, de cada 100 sesiones, 26 salieron de la #[em web] sin mirar nada más. Este #[em KPI] es útil para conocer el rendimiento de tu #[em web] en general y de las distintas páginas de esta en particular.]
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h4.col.px-4.mb-0.neg Cuadro de mando #[em  (scorecard)]
    
    p.mb-4 El cuadro de mando o #[em scorecard] en inglés, es una relación de KPI agrupados de forma lógica que muestran de un vistazo si se están alcanzando o no los objetivos para poder tomar decisiones de forma rápida. Para conseguir este propósito, en el cuadro de mando solo debe mostrarse la información estrictamente necesaria. Es decir, la que permita saber si se están cumpliendo o no los objetivos.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h4.col.px-4.mb-0.neg  Panel de control #[em (dashboard)]
    
    p.mb-5 En los paneles de control se recogen diversos KPI, tablas de segmentación y diferentes gráficos con el objetivo de analizar cada estrategia/acción que se ha realizado para conseguir los objetivos del negocio.
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-1
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img1.svg")
            .col-lg-11.col-md-12.col-12
              h4.mb-0.text-white #[b Imaginemos que uno de los objetivos es mejorar el #[em Engagement Rate (ER)] de #[em Twitter], el cual lo vamos a calcular dividiendo el total de interacciones entre el número de seguidores y multiplicando el resultado por cien. En este caso, en el cuadro de mando tendremos este #[em KPI] para saber si estamos cumpliendo o no los objetivos. (Capítulo 2. Terminología básica)].
    
    Separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Analítica digital

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La analítica en términos del #[em marketing] digital, se refiere al análisis de todos los datos que se generan en la interacción de los usuarios con los diferentes medios digitales de la empresa, esto con el fin de tomar decisiones oportunas y acertadas. Dichos datos son tanto cuantitativos como cualitativos.
    
    p.mb-4.text-center Partes de la analítica digital:
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12.col-md-12.col-12
        .tarjeta--container.row.mb-2
          .col-md.tarjeta.color-primario.pri.p-5.pp
            .row.justify-content.mb-3
              .col-5.my-3
                figure
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/i66.svg', alt='Texto que describa la imagen')
            h2 Medición
            p Consiste en la recopilación de datos asociados a la actividad de los usuarios en un sitio #[em web], aplicación móvil o cualquier otro medio digital.
          
          .col-md.tarjeta.color-primario.pri2.p-5.pp
            .row.justify-content.mb-3
              .col-5.my-3
                figure
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/i67.svg', alt='Texto que describa la imagen')
            h2.text-white Análisis
            p.text-white Consiste en el estudio y la comprensión de los datos, gracias a la segmentación de estos según diferentes criterios.
          
          .col-md.tarjeta.color-primario.pri3.p-5.pp
            .row.justify-content.mb-3
              .col-5.my-3
                figure
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/i68.svg', alt='Texto que describa la imagen')
            h2 #[em Reporting]
            p Consiste en plasmar los datos en informes útiles que permitan tomar decisiones.

    Separador
    #t_2_3.titulo-segundo.mb-0
      h2 2.3 Herramientas de medición
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-9.col-9.mb-4
        img.img-a.img-t(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
      .col-lg-6.col-md-12.col-12.mb-4
        p.mb-4 Existe una gran variedad de herramientas de medición de datos, todas ellas con características y ventajas diferentes, algunas gratuitas y otras que tienen un sistema de pago que oscila de moderado a alto, lo importante es que la información debe ser analizada y utilizada de la mejor forma posible.
        p.mb-0 A continuación, se presentan algunas de las herramientas más versátiles para la medición de los datos:
    
    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/tema2/img13.svg")
          h3.bg13.py-2.w-card-text Buscador de Google

    
    p.mb-5 Las búsquedas en Google son el primer paso para conocer el estado de una empresa y para el desarrollo inicial de las estrategias de comunicación. Para alguien que trabaje en comunicación digital es importante conocer todas las acciones y posibilidades que este buscador ofrece:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Google Trends
        p.text-center Permite hacer un seguimiento del interés que se tiene por una marca en particular a nivel mundial, nacional o local, también investigar a los competidores en los mismos aspectos y lo más importante, ver las tendencias de búsquedas que realizan las personas en un determinado momento y lugar.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Board reader
        p.text-center En este buscador cualquier marca a nivel mundial puede conocer lo que están opinando de ella en foros y comunidades. Es muy útil porque se centra en foros, un elemento que sería muy dispendioso de analizar si se hiciese uno por uno.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white How sociable
        p.text-center Es una herramienta muy útil para conocer el nivel de influencia que se tiene en las diferentes redes sociales.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-10
            .cajam
              h4.text-center.text-white Estadísticas de las redes sociales
        p.text-center Cuando se ha creado una página en Facebook o cuentas en Instagram o Twitter, por ejemplo, estas mismas redes sociales proporcionan información detallada de la interacción, alcance y popularidad de cada #[em post] o anuncio que se haga en ellas, así se puede determinar la efectividad de las estrategias que se realicen para una marca en particular.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Linkfluence
        p.text-center Esta plataforma permite realizar una medición permanente de segmentación y mapeo de conversaciones de las diferentes comunidades. Se integra con #[em e-reputation, engage] y observatorio de tendencias para monitorizar el nivel de influencia y reputación de una marca en particular.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img19.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Social Mention
        p.text-center Esta plataforma permite realizar seguimiento en redes sociales de comentarios o publicaciones realizadas por los usuarios referentes a un tema determinado.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h4.text-center.text-white Crimson Hexagon
        p.text-center Es un sistema de monitoreo de redes sociales para realizar un análisis global de marcas y organizaciones, conociendo las opiniones de consumidores y los puntos de vista que estos tienen de la empresa, los productos, la industria y la competencia.
    
    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/tema2/prueba.svg")
          h3.bg13.py-2.w-card-text Analítica #[em web]

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img21.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Consiste en la recolección, almacenamiento y análisis de datos estadísticos que surgen del funcionamiento de un sitio #[em web]. Esta información se estudia con el fin de generar conocimiento relevante para el desarrollo de las actividades de #[em marketing] digital. La analítica #[em web] permite realizar diferentes tipos de actividades:
  
    .row.justify-content.mb-4
      .col-lg-5.col-md-12.col-12
        img.img-a.img-t.d-none.d-lg-block.mb-4.mov(src='@/assets/curso/tema2/img66.svg' alt='AvatarTop')
        p.mb-0 #[b 1. Diseño de estrategias de #[em marketing] en redes sociales.]
        .mb-5
        img.img-a.img-t.d-none.d-lg-block.mb-3.mov.mt-4(src='@/assets/curso/tema2/img66.svg' alt='AvatarTop')
        p.mb-0 #[b 2. El tipo de comunicación que la empresa debe realizar utilizando múltiples medios.]
        .mb-5
        img.img-a.img-t.d-none.d-lg-block.mb-3.mov(src='@/assets/curso/tema2/img66.svg' alt='AvatarTop')
        p.mb-0 #[b 3. Integración entre los objetivos de mercado y comunicación.]
        .mb-5
      .col-lg-1.col-md-12.col-12
        .br-cus.mb-5.d-none.d-lg-block
        .br-cus.mb-5.d-none.d-lg-block
        .br-cus.mb-5.d-none.d-lg-block
      .col-lg-5.col-md-12.col-12
        img.img-a.img-t.d-none.d-lg-block.mb-4.mov.mb-4(src='@/assets/curso/tema2/img66.svg' alt='AvatarTop')
        p.mb-0 #[b 4. Desarrollo de estrategias financieras alineadas con el marketing digital.]
        .mb-5
        img.img-a.img-t.d-none.d-lg-block.mb-4.mov(src='@/assets/curso/tema2/img66.svg' alt='AvatarTop')
        p.mb-0 #[b 5. Medición continua y eficaz de las acciones de marketing realizadas en toda la plataforma de la empresa.]
        .mb-5
        
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12
        .caja6.p-4
          p.mb-0 Adicionalmente, la analítica #[em web] tiene una serie de tarea definidas dentro de la organización; actividades enfocadas en el #[em CRM] y otros procesos de interacción entre la marca y el consumidor. La analítica interviene además en la toma de decisiones relacionadas con la comercialización de los productos o servicios, así como el estudio permanente de los clientes, el mercado y las tendencias. De este modo es necesario que se tengan en cuenta una serie de indicadores relacionados con la analítica #[em web]: 
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-12.col-12
        p.mb-4.my-4 
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Medición de la actividad #[em web]
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Medición de la valoración
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Medición del retorno sobre la inversión #[em (ROI)]
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Mediciones individuales
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Seguimiento de la marca
      .col-lg-4.col-md-12.col-12
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img22.png' alt='AvatarTop')
    

    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/tema2/img23.svg")
          h3.bg13.py-2.w-card-text Mediciones en Facebook

    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img24.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-4
          p.mb-0 #[b Siendo la red social más grande del mundo por su número de suscriptores que superan los 2400 millones, una de las mayores fuentes de datos del mercado y un generador de anuncios virales, es necesario hacer un análisis de las mediciones que se pueden realizar en Facebook.]
        p.mb-0 Las variadas posibilidades de comunicación en esta red social permiten mantener a sus usuarios conectados casi de forma permanente: publicaciones, videos, comentarios, #[em likes] en 5 formas diferentes, #[em chats,] grupos, comunidades, perfiles, páginas, transmisiones en vivo, anuncios pagados, campañas, videojuegos, entre otros, son algunas de las actividades que permite realizar. Por consiguiente, es indicado conocer entonces las mediciones que se pueden realizar:

    p.mb-4.text-center #[b Las páginas de Facebook permiten realizar mediciones estadísticas semanales en cuanto a:]
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-10.col-md-12.col-12
        .row.align-items-center.justify-content-center.mb-0
          .col-lg-5.col-md-9.col-9
            img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img25.svg', alt='Texto que describa la imagen')
          .col-lg-7.col-md-12.col-12
            .tarjeta.tarjeta--verde.p-4.pek
              SlyderA(tipo="b")
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Total de “me gusta”:] indica el número de personas que les gusta la página; relaciona también el porcentaje de aumento o disminución de la métrica semanal.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Amigos de los #[em fans]:] muestra el número de personas que eran amigos de los que hicieron clic en “me gusta” y relaciona el porcentaje de aumento o disminución semanal.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Personas que están hablando de esto:] indica el número de personas que realizaron algún tipo de actividad en la última semana relacionada con una página: hacer un #[em post,] compartir una publicación, responder a un evento o a una pregunta, etiquetar a alguien, mencionarla en otra publicación.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Alcance de la semana:] indica el número de personas que vieron el contenido de la página o contenido asociado, también relaciona el porcentaje de aumento o disminución.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Canal orgánico:] relaciona el número de personas que vieron el contenido de la página a través de la sección de noticias en un tiempo determinado.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Canal viral:] indica el número de personas que vieron una publicación de la página hecha por un amigo.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Canal pagado:] indica el número de personas que vieron una publicación o anuncio patrocinado.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Usuarios únicos por frecuencia:] muestra gráficamente el número de personas que vieron el contenido de la página en los últimos siete días.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Visitas a la página:] indica el número de veces que la página fue vista diariamente en un periodo determinado.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Visitantes únicos:] indica el número de personas que visitaron un #[em fanpage] por día en un periodo determinado.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Publicaciones:] muestra de forma gráfica el número de personas que vieron una publicación en un tiempo determinado.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Audiencia potencial:] suma de los amigos de las personas que dieron “me gusta” o que compartieron una publicación.

    Separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 #[em CRM (Costumer Relationship Management)]
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img26.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-5.mb-4
          p.mb-0 #[b Es un proceso de relacionamiento con los clientes de una empresa o marca, su enfoque está en el proceso de comercialización, mercadeo y comunicación de la empresa con sus clientes reales y potenciales.]
        p.mb-0 Este proceso depende en casi un 100 % del #[em software] que gestiona la información de los clientes, para luego con base en estos datos generar acciones específicas de promoción y comercialización. El #[em CRM] se nutre de los datos de los clientes a través de Sistemas de Información de Mercados (SIM); estos datos abundan en medios como las redes sociales y los consumidores los entregan de forma libre y voluntaria; además, son muy eficaces para el desarrollo de estrategias puntuales de #[em marketing.]

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img1.svg")
            .col-lg-10.col-md-12.col-12
              h4.mb-0.text-white #[b El CRM evolucionó con la llegada de las redes sociales y hoy por hoy se conoce como #[em “Social CRM”,] mejorando el sistema de interacción entre la marca y el cliente, convirtiendo la comunicación de doble vía y no únicamente desde la marca hacia el consumidor. ]
    
    p.mb-4 De esta forma la comunicación que se realiza a través del #[em Social CRM] es mucho más integral, pues el consumidor es alcanzado por un correo electrónico que se le ha dejado cuando hizo su suscripción en el sitio #[em web] de la empresa, generándole impactos que se #[em postean] en las redes sociales que ha seguido gracias a una campaña de activación, la cual se hace periódicamente para captar nuevos clientes. De la misma forma recibe un mensaje de texto en su celular y mensajes de WhatsApp, todo esto en un periodo de tres semanas en las que la marca ha estado interactuando con el consumidor, creando posicionamiento y recordación.
    

    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/tema2/img27.svg")
          h3.bg13.py-2.w-card-text Enfoque del Social #[em CRM]

    
    p.mb-4 En el enfoque del Social #[em CRM] existen cuatro elementos básicos para tener en cuenta:

    TabsC.color-primario.mb-0
      .py-3.py-md-4.bg26.px-3(titulo="1. Inteligencia de clientes")
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img28.png', alt='')
          .col-lg-7.col-md-12.col-12.my-5
            h4.mb-4 1. Inteligencia de clientes
            p Se necesita tener conocimiento sobre el cliente para poder desarrollar productos y servicios enfocados a sus expectativas. Para convertir los datos en conocimiento, se emplean bases de datos y reglas a partir de un proceso de segmentación de la información.
                
      .py-3.py-md-4.bg26.px-3(titulo="2. Interactividad")
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img29.png', alt='')
          .col-lg-7.col-md-12.col-12.my-5
            h4.mb-4 2. Interactividad
            p El proceso de comunicación pasa de un monólogo: de la empresa al cliente, a un diálogo, entre ellos. Además, es el cliente el que dirige el diálogo y decide cuándo empieza y cuándo acaba.
            
      .py-3.py-md-4.bg26.px-3(titulo="3. Fidelización de clientes")
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img30.png', alt='')
          .col-lg-7.col-md-12.col-12.my-5
            h4.mb-4 3. Fidelización de clientes
            p En la práctica, es mucho mejor y más rentable fidelizar a los clientes que adquirir nuevos. La fidelización de los clientes pasa a ser muy importante y, por tanto, se convierte en el pilar de la gestión del #[em marketing] relacional en función del ciclo de vida del cliente. El #[em  community manager] debe considerar la manera como se establece fidelización proponiendo y utilizando las herramientas de social media #[em marketing.]
            
      .py-3.py-md-4.bg26.px-3(titulo="4. Personalización")
        .row.justify-content-center
          .col-lg-5.my-3
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img31.png', alt='')
          .col-lg-7.col-md-12.col-12.my-5
            h4.mb-4 4. Personalización
            p Cada cliente desea recibir promociones y ofertas personalizadas, por lo que se necesitan grandes esfuerzos en inteligencia de las bases de datos para desarrollar una eficiente segmentación de clientes. La customización del mensaje, en fondo y en forma, aumenta drásticamente la eficacia de las acciones de comunicación.


    Separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Plataformas de gestión de #[em marketing] digital

    p.mb-4 A continuación, se indican dichas plataformas:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-0
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img32.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Blogger
        p.text-center Es una plataforma para la creación de blogs, pertenece a la empresa Google y tiene total interacción con todas sus herramientas. Es ideal para mostrar información periódica acerca de un tema específico integrado con redes sociales y otros medios.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img33.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Linkedin
        p.text-center Es una red social con enfoque profesional, permite la interacción entre empresas y profesionales para el desarrollo de trabajo colaborativo o la gestión laboral.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img34.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Zoho
        p.text-center Es una suite de servicios empresariales que permite el desarrollo de diferentes tareas relacionadas con el #[em marketing] digital, CRM, gestión de correo electrónico, entre otras.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img35.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-10
            .cajam
              h4.text-center.text-white Traity
        p.text-center Es una plataforma que permite la verificación del perfil personal de compradores y vendedores con el fin de generar una reputación #[em online] de personas y empresas para generar confianza en los intercambios comerciales.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img36.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Social Go
        p.text-center Es una plataforma que permite crear redes sociales personalizadas en cuanto a diseño y funciones, además de integrarse con otras redes como Facebook y Twitter.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img37.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam
              h4.text-center.text-white Alterian
        p.text-center Es ideal para el desarrollo de campañas de #[em marketing] integrales; combina herramientas de gestión de contenidos, correo electrónico y monitorización de redes sociales.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img38.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h4.text-center.text-white CitizenNet
        p.text-center Es una herramienta para el desarrollo de investigaciones de mercado y gestión de campañas publicitarias. Maneja datos de segmentación y optimización de tiempos. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img39.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h4.text-center.text-white Livestream
        p.text-center Es una plataforma para ver y transmitir video en vivo, con el fin de llegar a un público masivo con contenido audiovisual.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img40.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h4.text-center.text-white Saleforce
        p.text-center Es una suite que provee soluciones CRM por suscripción. En ella se puede crear aplicaciones, tener contacto con toda la organización, contactar clientes y realizar estrategias de venta, todo en línea.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img41.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-9
            .cajam
              h4.text-center.text-white Hootsuite
        p.text-center Es una plataforma que permite realizar publicaciones simultáneas en varias redes sociales como Facebook, Instagram y Twitter.


    Separador
    #t_2_6.titulo-segundo.mb-4
      h2 2.6 #[em SEO] en el #[em marketing] digital          
  
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img24.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-4.mb-4.my-4
          p.mb-0 #[b Inicialmente el #[em SEO] (del inglés #[em Search Engine Optimization]) se enmarca en las estrategias del #[em marketing] relacional y el colaborativo, que tienden a primar el buscador como canal de publicidad para públicos muy segmentados (aquellos que utilicen cierta búsqueda concreta) y, finalmente, el ideal de una estrategia de #[em SEO] implica crear una red propia de usuarios fidelizados que hablen bien y proactivamente de la marca.]
        p.mb-0 Por eso es importante primero pensar qué tipo de estrategia global se va a llevar a cabo, y en función de esta, pensar en él y no antes. Así, en la relación entre #[em marketing] y #[em SEO] se debe tener en cuenta: #[em marketing] no es #[em SEO] y #[em SEO] no es #[em marketing;] el #[em marketing] es un concepto más amplio que el #[em SEO]. Primero se debe estudiar la estrategia de #[em marketing] y su continuación. La unión de #[em marketing] + #[em SEO] debe llevar a visitas que lleven a acciones y posiblemente esas acciones lleven a ventas o conversiones. Serrano (2015).
    
    .row.justify-content-start.mb-5
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/tema2/img42.svg")
          h3.bg13.py-2.w-card-text #[em SEM]

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img43.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 El #[em SEM] (del inglés #[em Search Engine Marketing]) a diferencia de #[em SEO,] utiliza herramientas que los buscadores ofrecen para el desarrollo de estrategias de posicionamiento a través de anuncios publicitarios pagos, como es el caso de Google Adwords; esto requiere la selección de palabras claves, creación de anuncios y gestión de pauta. Se pueden realizar a través de PPC (Pago Por Clic) y PCP (Costo Por Clic).

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-md-12.col-12
        p.mb-4.my-4 #[b El #[em SEM] tiene varias ventajas que se verán a continuación:]
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Permite que un producto o servicio sea reconocido rápidamente.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Permite competir con empresas grandes y con alto posicionamiento en el mercado.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p El ROI es más rápido.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Permite llegar a mercados muy específicos porque permite un alto nivel de segmentación.
      .col-lg-4.col-md-12.col-12
        img.img-a.img-t.d-none.d-lg-block.mb-4(src='@/assets/curso/tema2/img44.png' alt='AvatarTop')
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-md-12.col-12
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img45.png' alt='AvatarTop')
      .col-lg-4.col-md-12.col-12
        p.mb-4.my-4 #[b Sin embargo, este tipo de comunicación también tiene algunas desventajas:]
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p La compra de palabras clave para el desarrollo de la publicidad suele ser costosa.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Es un tipo de comunicación invasiva que el mercado no ha buscado y por lo tanto puede generar rechazo.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p Requiere compromiso en el desarrollo de la gestión y optimización.
    

    Separador
    #t_2_7.titulo-segundo.mb-0
      h2 2.7 Promoción en la #[em web]
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t(src='@/assets/curso/tema2/img46.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        p.mb-4.my-4 En la #[em web] hay múltiples opciones de hacer promoción para las empresas y marcas, desde alternativas gratuitas que implican un proceso más orgánico y lento para el logro de posicionamiento de marca, incremento en ventas y reconocimiento por parte del mercado meta; hasta el pago de pauta en sitios #[em web] incluidos en la red #[em Display] de Google a través de su plataforma de pago Adwords, la cual incluye anuncios en YouTube.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 #[b También en Facebook, la red social más grande del mundo con más de 2400 millones de cuentas inscritas y que permite una serie de modelos de publicidad pagada, que va desde publicaciones que llegan a segmentos específicos hasta campañas muy bien estructuradas que incluyen una completa planificación por temporadas establecidas.]

    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/tema2/img47.svg")
          h3.bg13.py-2.w-card-text Google Adwords

    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img48.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 En el nombre de esta plataforma se pueden encontrar los dos elementos básicos que lo conforman: en primer lugar, Google, este es el motor de búsqueda más utilizado a nivel mundial y donde migra el 80 % de la información que se consulta; siendo un motor de búsqueda su función es ingresar a cada una de las páginas que hacen parte de su red #[em Display] conformada por millones de sitios que Google ha seleccionado por la calidad y flujo de la información.

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Las búsquedas realizadas por las personas allí incluyen el segundo elemento, las palabras claves: estas palabras son las que van a determinar el proceso de promoción dentro de la red #[em Display,] por lo tanto, lo que una empresa compra a Google son palabras claves que están ligadas a la actividad económica de la empresa o de la industria a la que pertenece para llegar al público específico, que a través de este buscador está averiguando un tema en particular. ]

    p.mb-4 Por ejemplo, una empresa dedicada a la venta de computadores ubicada en Bogotá quiere promocionarse en Google, en este caso la empresa podría adquirir palabras como: computadores, equipos de cómputo, computadoras personales, #[em laptops, all in one] entre otras. Con estas palabras puede realizar varios tipos de estrategias promocionales.
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p #[b Anuncios de texto:] en el buscador por lo general están diferenciados en color y están ubicados dentro de la página principal de Google al hacer una búsqueda.
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p #[b Anuncios en la red Display:] #[em banners,] imágenes y videos en sitios #[em web] de alto tráfico y de acuerdo con las búsquedas realizadas por los usuarios.
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p #[b #[em Remarketing:]] a través de la red #[em Display,] utilizando búsquedas realizadas por usuarios y ubicándolas en sitios #[em web] que se vieron posteriormente y hagan parte de la red #[em Display].
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p #[b En YouTube:] con #[em banners] y videos al inicio o en el intermedio de publicaciones con altos niveles de reproducción.
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p #[b #[em Shopping:]] se basa en mostrar anuncios más completos sobre productos concretos con precio y características detalladas de los mismos.
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p #[b Gmail:] #[em banners] en la bandeja de entrada de Gmail con el mismo diseño y formato de los correos recibidos.
          .col-md.tarjeta.color-acento-contenido.p-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img49.png', alt='tema2')
    
    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/tema2/img50.svg")
          h3.bg13.py-2.w-card-text Facebook #[em Ads]

    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img51.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Es la plataforma de promoción con la que cuenta Facebook para el desarrollo de estrategias de #[em marketing] en esta red social, haciendo uso de todo su sistema de audiencia, tal vez el más grande a nivel mundial. En Facebook se pueden realizar estrategias de promoción de forma rápida, económica y efectiva, gracias a las múltiples posibilidades que presenta para quienes buscan realizar promoción de productos o servicios.

    p.mb-0.text-center Ventajas de realizar promoción en Facebook #[em Ads:]

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-11.col-md-12.col-12
        .row.align-items-center.justify-content-center.mb-0
          .col-lg-5.col-md-9.col-9
            img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img52.svg', alt='Texto que describa la imagen')
          .col-lg-7.col-md-12.col-12
            .tarjeta.tarjeta--verde.p-5
              SlyderA(tipo="b")
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Segmentación del mercado:] la segmentación en esta red social es tal vez una de las más específicas que se puedan realizar en una estrategia de #[em marketing,] gracias a la caracterización que los mismos usuarios realizan en sus perfiles y toda la información que en ellos generan, de esta forma no solo se puede hacer una segmentación con datos demográficos, sino también con características personales muy concretas, gustos a todo nivel, intereses, temas de consulta, palabras claves, grupos de influencia, entre muchos otros datos.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Viralización:] el pago de anuncios en Facebook además de garantizar el alcance de miles o quizás millones de personas es solo el primer paso para hacer un anuncio viral, quienes son alcanzados por un anuncio tienen la opción de compartirlo con sus contactos, esto significa que si aquello que se publica es de interés del mercado objetivo, puede viralizarse por iniciativa de los mismos usuarios, de ahí la importancia del desarrollo de contenidos atractivos, creativos y de calidad.
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Interactividad:] las redes sociales y en particular Facebook, ofrecen una amplia gama de posibilidades de interacción que permite que la marca y el mercado objetivo tengan una comunicación de doble vía y este último otorgue a la empresa datos que sean muy relevantes para el desarrollo de futuras estrategias de comunicación y #[em marketing.]
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Costo:] las estrategias que se realicen en Facebook suelen ser económicas debido al sistema de pago por clic, en el que solo se paga por los clics que se hagan en los anuncios y generen respuestas efectivas.               
                .row
                  .col-lg-12.col-md-12.col-12
                    p #[b Medición:] uno de los aspectos más relevantes para cualquier estrategia de comunicación, es el acceso a datos estadísticos reales que permitan conocer el nivel de efectividad que un anuncio o campaña tiene, esto permite determinar el ROI de la estrategia y realizar correcciones para lograr los objetivos y el desarrollo de campañas futuras.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blues
        h4.col.px-4.mb-0.neg Tipos de campañas que se pueden realizar a través de Facebook  #[em Ads:]
    
    p.mb-4 De la misma forma como en cualquier otro medio, sea convencional o alternativo, Facebook ha desarrollado una serie de posibilidades de campañas y estrategias de comunicación, de acuerdo con las necesidades y posibilidades de los anunciantes:
  
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-6.col-md-12.col-12
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Promoción de publicaciones:] permite promocionar una publicación que se haya realizado en un perfil, #[em fanpage] o cuenta de Instagram (que también es propiedad de Facebook).
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Promocionar una página:] es una estrategia que permite hacer promoción de un sitio #[em web.]
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Llegar a personas que estén cerca:] a través de geolocalización se realiza una estrategia de #[em marketing] de proximidad que llega a persona que estén cerca del negocio en un rango y momento específicos.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Reconocimiento de marca:] a través de un anuncio se llega a un público específico con la posibilidad de prestar más atención.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Atraer público a un sitio #[em web:]] campaña enfocada en el aumento de tráfico en un sitio #[em web.]
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Aumento de descarga de #[em App:]] campaña enfocada en la descarga e instalación de una App en particular.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Aumento de asistentes a un evento:] campaña para promocionar un evento específico y aumentar el número de participantes al mismo.
      .col-lg-6.col-md-8.col-8
        img.img-a.img-t.mb-4.d-none.d-lg-block(src='@/assets/curso/tema2/img53.png', alt='Texto que describa la imagen')
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-6.col-md-8.col-8
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img54.png', alt='Texto que describa la imagen')
      .col-lg-6.col-md-12.col-12
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Aumento de reproducción de un video:] campaña orientada a aumentar las visualizaciones de un video.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Aumento de las conversiones de un sitio #[em web:]] es una campaña que busca generar conversiones #[em (leads)] de un negocio en particular, por lo general una tienda virtual.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Generación de clientes potenciales para un negocio:] promoción de un sitio #[em web] o tienda virtual de un negocio para atraer clientes potenciales.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Aumento de uso de #[em App:]] estrategia para aumentar la interacción del público con una app específica.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Solicitud de oferta:] campaña para dar a conocer una oferta en particular.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Promoción de catálogos:] promoción de un catálogo a manera de escaparate en una campaña de Facebook.
          li.d-flex.mb-0
            i.fas.fa-plus.mas
            p #[b Obtener visitas a un negocio:] con #[em marketing] de proximidad, se realiza promoción de un punto de venta entre las personas que estén en un rango y momento específico.
      
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-10.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img1.svg")
            .col-lg-10.col-md-12.col-12
              h4.mb-0.text-white #[b Facebook ofrece una gama de posibilidades muy amplia para el desarrollo de campañas y estrategias de comunicación que permiten a los negocios llegar a públicos muy específicos, con información puntual y muy bien estructurada, esto garantiza efectividad con costos mínimos de inversión.]
  

    Separador
    #t_2_8.titulo-segundo.mb-5
      h2 2.8 #[em Inbound marketing]
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img55.png', alt='Texto que describa la imagen')
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 #[b Es tal vez la metodología que presenta mayor eficacia en el desarrollo de una estrategia de #[em marketing,] la cual tenga como finalidad la atracción del mercado potencial para hacerlo adepto a una marca por su propia convicción e iniciativa. ]
        p.mb-0  #[em El inbound marketing] crea experiencias significativas que generan valor para el mercado objetivo de la empresa, esto se realiza con el desarrollo de contenido útil y relevante para los usuarios de un sitio #[em web], al mismo tiempo que se interactúa con ellos a través de medios más personales y con la posibilidad de generar un nivel de conversación más personal, como el correo electrónico, los mensajes de texto y los chats. No tiene un enfoque promocional o publicitario, por el contrario, el contenido generado representa mayor utilidad y relevancia, lo que hace que el mercado potencial se acerque a la marca de forma orgánica. Un ejemplo de ello es el modelo aplicado en escuelas de inglés o institutos donde se dictan estos tipos de cursos, enfatizándose siempre en una conversación más cercana.

    p.mb-4 El #[em inbound marketing] se enfoca en tres momentos específicos: atraer, conversar, seducir:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--grissss").mb-0
      .row.p-4(titulo="Atraer")
        .col-md-1
          figure
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img56.svg', alt='Texto que describa la imagen')
        .col-md-10.col-lg-11.col-12.mb-4.mb-md-0
          p.mb-4 En este punto se atraen a todos aquellos clientes potenciales; es decir, aquellos que tienen la opción de convertirse en compradores efectivos del producto o servicio. para ello, es indispensable desarrollar contenido relevante y muy atractivo, adicional de llegar a ellos con anuncios en redes sociales y medios más directos. Atraer significa demostrar a los prospectos que pueden confiar en la marca para resolver un problema en particular o para satisfacer una necesidad. Las personas buscan respuestas a preguntas que tienen en sus consiente e inconsciente y si están relacionados con un producto o servicio en particular es viable utilizar conocimiento e información que resulte útil para resolver dichas preguntas y atraer al mercado específico. Para este punto se puede hacer uso de algunas herramientas muy puntuales:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 #[b Anuncios]
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 #[b Videos]
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 #[b Publicaciones en blogs]
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 #[b Redes sociales]
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 #[b Diseño de contenido]
      .row.p-4(titulo="Conversar")
        .col-md-1
          figure
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img57.svg', alt='Texto que describa la imagen')
        .col-md-10.col-lg-11.col-12.mb-4.mb-md-0
          p.mb-4 En este momento ya se ha identificado un grupo de prospectos que permite ir un paso adelante en el proceso de venta, también se han diferenciado los medios por los que dichos prospectos prefieren entablar una determinada conversación: correo electrónico, #[em chat], sitio #[em web] o redes sociales; con estos datos ya se puede acceder a información más personal de estos usuarios a través de un método de conversión como un formulario de suscripción. Posteriormente, esta información se utiliza para realizar estrategias de #[em marketing] relacional con herramientas #[em CRM] que generen experiencias personalizadas, a la medida de cada miembro del mercado objetivo. En este punto es necesario hacer una diferenciación de los usuarios e identificar cuáles de ellos son los más adeptos y cercanos a la marca para comenzar todo un programa que permita cautivarlos y llevarlos al siguiente nivel, donde por medio de estrategias de interacción se hacen ofertas concretas de los productos o servicios que la empresa ofrece. En este punto se puede hacer uso de las siguientes herramientas:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 CRM
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Sistema de información de mercados
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Formularios
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Correo electrónico
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Videos
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Catálogos y portafolios
      .row.p-4(titulo="Seducir")
        .col-md-1
          figure
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img58.svg', alt='Texto que describa la imagen')
        .col-md-10.col-lg-11.col-12.mb-4.mb-md-0
          p.mb-4 Es el momento de realizar un mayor número de conversaciones e interacciones, pero en este punto con clientes reales identificados plenamente. La conversación incluye también a la fuerza de ventas y todo aquel que esté involucrado con la prestación de servicio. La creación de contenidos interesantes y relevantes debe continuar, esta vez con información más puntual y útil para el mercado específico. El proceso de venta en esta fase del proceso #[em inbound] ya es un hecho, para ello debe haber un protocolo de cotización y atención al cliente muy bien estructurado. Por último, es necesario pedir retroalimentación permanente al cliente con el fin de conocer el nivel de satisfacción que este tiene frente al producto, servicio y la atención recibida. En la fase de seducción se pueden utilizar las siguientes herramientas:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Correo electrónico
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Manual de imagen visual
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Cotizaciones
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Catálogos y portafolios
            li.d-flex.mb-0
              i.fas.fa-plus.mas
              p.mb-0 Encuestas de satisfacción


    Separador
    #t_2_9.titulo-segundo.mb-4
      h2 2.9 Plan de #[em marketing] digital

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-8.col-8
        img.img-a.img-t(src='@/assets/curso/tema2/img59.png', alt='tema2')
      .col-lg-6.col-md-12.col-12
        p.mb-0 Ya se cuentan con todos los elementos y herramientas necesarios para el desarrollo de un plan de #[em marketing] digital eficiente y coherente con las necesidades de la empresa y las características del mercado y como se ha dicho anteriormente, la diferencia entre el #[em marketing] convencional y el #[em marketing] digital, radica en los canales de interacción entre la marca y el cliente o consumidor para el desarrollo de las estrategias de comercialización, entrega de productos y comunicación, variables que se han analizado en el presente componente formativo. Por lo tanto, el desarrollo del plan de #[em marketing] digital presenta la estructura ya estudiada: 
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-6.my-3.mb-5
        .tarjeta-avatar
          img.img-a.img-t.img-w2.mb-5(src='@/assets/curso/tema2/img60.svg',alt='tema2')
          div.bg15.p-4.pt-5.h-100
            p.mb-5.my-5.text-center #[b #[em Brief] táctico] 
      .col-lg-3.col-md-6.col-6.my-3.mb-5
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/tema2/img61.svg',alt='tema2')
          div.bg15.p-4.pt-5.h-100
            p.mb-5.my-5.text-center #[b Objetivo de mercadeo] 
      .col-lg-3.col-md-6.col-6.my-3.mb-5
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/tema2/img62.svg',alt='tema2')
          div.bg15.p-4.pt-5.h-100
            p.mb-5.my-5.text-center #[b Mercado objetivo] 
      .col-lg-3.col-md-6.col-6.my-3.mb-5
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/tema2/img63.svg',alt='tema2')
          div.bg15.p-4.pt-5.h-100
            p.mb-0.my-5.text-center #[b Plan de medios digital < seleccionar por lo menos 1 medio #[em offline] como apoyo a las estrategias #[em online] >] 

    .row.justify-content-center.mb-0
      .col-lg-6.col-md-6.col-12.my-3.mb-2
        .tarjeta-avatar
          img.img-a.img-t.img-w2.mb-5(src='@/assets/curso/tema2/img64.svg',alt='tema2')
          div.bg15.p-4.h-100.p-5
            p.mb-4.my-5.text-center #[b Estrategias de comercialización y promoción #[em online]] 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Logística de entrega
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Sistema de pago
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Horarios de posteo de anuncios
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Estrategias de promoción de ventas
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Estrategias de atracción y conversión de clientes
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Seguimiento a clientes < estrategias postventa >
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Sistema de información de mercados < #[em data] >
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Estructuración de redes sociales para comunicación con los clientes
      
      .col-lg-6.col-md-6.col-12.my-3.mb-2
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/tema2/img65.svg',alt='tema2')
          div.bg15.p-4.h-100.p-5
            p.mb-4.my-5.text-center #[b Cronograma y presupuesto del plan de mercadeo digital] 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Objetivos de frecuencia e intensidad
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Indicadores
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Cantidad de miembros del mercado objetivo a impactar
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Costo del impacto
              li.d-flex.mb-0
                i.fas.fa-plus.mas
                p Cálculo de #[em CPM]
  
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
