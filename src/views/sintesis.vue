<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El #[em marketing] digital genera una relación de conveniencia entre la marco y sus seguidores, ya que desde las redes sociales se aborda al público objetivo con información que este mismo está buscando. En el siguiente diagrama se presentan los temas y conceptos más importantes tratados dentro de este componente.
  
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En el diagrama se enuncian los temas trabajados dentro del componente formativo: Marketing y Marketing digital, en cada tema se enuncian las caracteristicas más importantes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
  
</template>

<script>
export default {
  name: 'Sintesis',
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
