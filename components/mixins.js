let myMixin = {
  mounted () {
    console.log('MIXIN 1 init');
    console.log(this.mixinData);
    this.test()
  },
  data () {
    return {
      mixinData: 'Mixin Data 1'
    }
  },
  methods: {
    test() {
      console.log('test from mixin');
    }
  }
}

let myMixin2 = {
  mounted () {
    console.log('MIXIN 2 init');
    console.log(this.mixinData);
    console.log(this.mixinData2);
    this.test()
  },
  data () {
    return {
      mixinData: 'Overwriting data',
      mixinData2: 'Mixin Data 2'
    }
  },
}

Vue.component('mixins', {
  mixins: [myMixin, myMixin2],
  template: `
  <div>
    <h2>Uso de mixins</h2>
  </div>
  `
})