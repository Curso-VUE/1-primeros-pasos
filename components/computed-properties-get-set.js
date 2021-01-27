Vue.component('computed-properties-get-set', {
  data () {
    return {
      amount: 0
    }
  },
  computed: {
    amountFormatted: {
      get() {
        return `${this.amount}€`;
      },
      set(newValue) {
        this.amount = newValue;
      }
    }
  },
  template: `
    <div>
      <h2>Computed Properties get && set</h2>
      <input v-model="amount" />
      <p>{{ amountFormatted | string_filter('test => ')}}</p>
    </div>
  `
});