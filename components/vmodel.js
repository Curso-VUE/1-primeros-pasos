Vue.component('vmodel', {
  data () {
    return {
      framework: 'Vuejs 2'
    }
  },
  template: `
    <div>
      <h2>Trabajando con v-model</h2>
      <input v-model="framework" v-focus />
      <p>El framework escogido es: {{ framework }}</p>
    </div>
  `
});