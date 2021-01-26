Vue.component('load-dynamic-components', {
  data() {
    return {
      components: ['cmp1', 'cmp2', 'cmp3'],
      currentComponent: 'cmp1'
    }
  },
  methods: {
    changeComponent (cmp) {
      this.currentComponent = cmp;
    }
  },
  template: `
  <div>
    <h2>Componentes dinámicos</h2>
    <button v-for="cmp in components" @click="changeComponent(cmp)">
      Seleccionar {{ cmp }}
    </button>
    <component :is="currentComponent" />
  </div>
  `
})