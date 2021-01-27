Vue.component('message', {
  data () {
    return {
      message: 'Hola Mundo',
      style: {
        backgroundColor: 'red', 
        color: 'white'
      }
    }
  },
  template: `
    <div v-change-styles="style">
      <h1>Componente Message</h1>
      <p v-change-styles="{color: 'blue'}">{{message}}</p>
    </div>
  `
});