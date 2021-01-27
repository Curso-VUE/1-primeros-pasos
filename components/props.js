Vue.component('props', {
  props: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: false
    },
    age: {
      type: Number,
      required: true,
      validator: value => {
        if (value < 0) {
          console.error("La edad no puede ser menor que 0");
          return false;
        }
        if (value < 18) {
          console.warn("Eres menor de edad...");
          return false;
        }
        return true;
      }
    }
  },
  template: `
    <div>
      <h2>Props con VueJS 2</h2>
      <p>{{ name }} {{ surname }} Edad: {{age}}</p>
    </div>
  `
})