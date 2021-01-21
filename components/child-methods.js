Vue.component('child-methods', {
  data () {
    return {
      cmpName: 'Child Methods CMP'
    }
  },
  methods: {
    showCmpName() {
      console.log(this.cmpName)
    }
  },
  template: `
    <div>
      <h2>Acceso a métodods del cmp hijo desde el cmp padre</h2>
</div>
  `
});