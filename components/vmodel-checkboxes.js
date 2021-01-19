Vue.component('vmodel-checkboxes', {
  data() { 
    return {
      frameworks: []
    }
  },
  template: `
    <div>
      <h2>vmodel con arrays</h2>
      <input type="checkbox" id="vuejs2" value="VueJS 2" v-model="frameworks" />
      <label for="vuejs2">VueJS 2</label>
      <input type="checkbox" id="angular" value="Angular" v-model="frameworks" />
      <label for="angular">Angular</label>
      <input type="checkbox" id="reactjs" value="ReactJS" v-model="frameworks" />
      <label for="reactjs">ReactJS</label>
      <p>Frameworks seleccionados: {{ frameworks }}</p>
    </div>
  `
});