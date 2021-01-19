Vue.component('computed-properties', {
  data () {
    return {
      name: 'Israel',
      surname: 'Parra'
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.surname}`;
    }
  },
  template: `
    <div>
      <h2>Computed Properties</h2>
      <p>{{fullName}}</p>
    </div>
  `
});