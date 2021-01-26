Vue.component('loops', {
  data () {
    return {
      frameworks: [
        {id: 1, name: "VueJS 2"},
        {id: 2, name: "ReactJS"},
        {id: 3, name: "Ember"},
        {id: 4, name: "AdonisJS"},
        {id: 5, name: "Angular"},
        {id: 6, name: "Laravel"}
      ]
    }
  },
  template:`
  <div v-if="frameworks.length">
    <h2>Bucles con v-for</h2>
    <ul>
      <li v-for="framework in frameworks" :key="framework.id">
        {{ framework.name }}
      </li>
    </ul>
  </div>
  `
})