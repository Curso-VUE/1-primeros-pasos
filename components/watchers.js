Vue.component('watchers', {
  data () {
    return {
      user: null,
      oldUser: null
    }
  },
  methods: {
    async randomUser () {
      try {
        const data = await fetch('https://randomuser.me/api/');
        const json = await data.json();
        const user = json.results[0];
        this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {
    user (newVal, oldVal) {
      this.oldUser = oldVal;
    }
  },
  template: `
  <div>
    <h2>Watchers con VueJS 2</h2>
    <p>Nuevo usuario: {{ user }}</p>
    <p>Anterior usuario: {{ oldUser }}</p>
    <button @click="randomUser">Obtener un usuario aleatorio</button>
  </div>
  `
})