Vue.component('emit', {
  data () {
    return {
      carBrand: 'Toyota'
    }
  },
  mounted() {
    console.log(this.$parent.$me('Pipo', 23))
  },
  template: `
    <div>
      <h2>Emitir enventos con Vuejs 2</h2>
      <p @click="$emit('show_car_brand', carBrand)">
        Pulsa aqui para emitir un evento a la instancia ROOT de Vuejs
      </p>
    </div>
  `
});