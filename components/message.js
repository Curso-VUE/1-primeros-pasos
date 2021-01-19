Vue.component('message', {
  data () {
    return {
      message: 'Hola Mundo'
    }
  },
  template: `
    <div>
      <h1>Componente Message</h1>
      <p>{{message}}</p>
    </div>
  `
});