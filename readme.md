# Primeros Pasos

1. [Introducción](#intro)
2. [Hola Mundo](#helloworld)
3. [Primer componente](#component)
4. [Propiedades calculadas](#computed)
5. [Métodos](#methods)
6. [Data binding con v-model](#binding)
7. [Data binding con v-model y arrays](#binding-array)
8. [Eventos](#events)
9. [Acceso a datos del componente padre](#parent)
10. [Acceso a datos del componente hijo utilizando referencias](#child)
11. [Acceso a datos del componente hijo utilizando referencias](#child-methods)
12. [Introducción a fomularios. Login básico](#forms)
13. [Bucles con v-for](#loops)
14. [Condicionales con v-if](#conditionals)
15. [Slots. Ejemplo de layout](#slots)
16. [Watchers](#watchers)
17. [Computed properties con getters y setters](#computed2)
18. [Carga de componentes dinámicos con *component*](#dynamic)
19. [Mixins](#mixins)
20. [Directivas (foco a input)](#directives)
21. [Directivas (aplicar estilos)](#directives2)
22. [Filtros](#filters)
23. [Plugins](#plugins)
24. [Props](#props)
25. [Props VS Data y reactividad](#reactivity)

<hr>

<a name="intro"></a>

## 1. Introducción

El core de vue es el siguiente:

Template:
~~~html
<div id="app">
  {{ message }}
</div>
~~~

Componente:
~~~js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
~~~

<hr>

<a name="helloworld"></a>

## 2. Hola Mundo

En esta introducción vamos a utilizar directamente el CDN de vue. Creamos un *index.html* e incluimos el script del cdn en su head:

~~~html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vuejs 2</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    
    
  </body>
</html>
~~~

En el *body* del HTML incluimos el template y el script con el código:

~~~html
...
  <body>
    <div id="app">
      {{ msg }}
    </div>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            msg: 'Hola Mundo'
          }
        }
      });
    </script>
  </body>
....
~~~

<hr>

<a name="component"></a>

## 3. Primer componente

Para esta introducción vamos a reutilizar el archivo *index.html* anterior, en cargaremos el componente en la sección **head** del HTML dentro de etiquetas **script** y visualizaremos los distintos componentes que vayamos generando dentro del **div con id="app"**.

Los nuevos componentes se definirán dentro de la carpeta components en archivos *.js*.

Generamos un nuevo componente *message.js*.

~~~js
Vue.component('message', {
  data () {
    return {
      message: 'Hola Mundo';
    }
  },
  template: `
    <div>
      <h1>Componente Message</h1>
      <p>{{message}}</p>
    </div>
  `
});
~~~

<hr>

<a name="computed"></a>

## 4. Propiedades calculadas
Son propiedades generadas a partir de otras propiedades del componente.

Creamos un nuevo componente *computed-properties*:

~~~js
Vue.component('computed-properties', {
  data() {
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
~~~

<hr>

<a name="methods"></a>

## 5. Métodos
Los métodos son funciones que ejecutan en el componente y que son lanzadas por eventos del mismo.

Creamos un nuevo componente *methods.js*

~~~js
Vue.component('methods', {
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
  methods: {
    hello () {
      alert(this.fullName);
    }
  },
  template: `
    <div>
      <h2>Ejecutar métodos con Vuejs</h2>
      <p @click="hello">Pulsa aquí para ejecutar el método hello</p>
    </div>
  `
});
~~~

<hr>

<a name="binding"></a>

## 6. Data binding con v-model
Data binding permite que una variable almacene los cambios realizados sobre ella desde el template.

Creamos un nuevo componente *vmodel.js*.

~~~js
Vue.component('vmodel', {
  data () {
    return {
      framework: 'Vuejs 2'
    }
  },
  template: `
    <div>
      <h2>Trabajando con v-model</h2>
      <input v-model="framework" />
      <p>El framework escogido es: {{ framework }}</p>
    </div>
  `
});
~~~

Comprobamos como el valor de framework funciona como value del input y cuando se modifica queda reflejado en el párrafo siguiente.

<hr>

<a name="binding-array"></a>

## 7. Data binding con v-model y arrays


Creamos un nuevo componente *vmodel-checkboxes.js*.

~~~js
Vue.component('vmodel-checkboxes', {
  data () {
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
~~~

Desmarcando y marcando los checkboxes podemos ver como se modifica el contenido de *frameworks*.

<hr>

<a name="events"></a>

## 8. Eventos

Los eventos se emiten siempre del componente hijo al componente padre.

Creamos un nuevo componente *emit.js*. En el template especificamos el nombre del evento que vamos a emitir y el parámetro que enviamos al componente padre. **El nombre del evento debe de estár en minúsculas**

~~~js
Vue.component('emit', {
  data () {
    return {
      carBrand: 'Toyota'
    }
  },
  template: `
    <div>
      <h2>Emitir enventos con Vuejs 2</h2>
      <p @click="$emit('show_car_brand', carBrand)">
        Pulsa aqui para emitir un evento a la instancia ROOT de Vuejs
      </p>
    </div>
  `
});
~~~

En este caso, en el componente padre debemos espedificar el evento:

~~~html
<head>
  ...
  <script src="components/event.js"></script>
  ...
</head>
<body>
  ...
    <emit @show_car_brand="showCarBrandFromEmitCmp"></emit>
  ...
</body>
~~~

Definimos la función showCarBrandFromEmitCmp en el script que instancia el componente root en *index.html*:

~~~html
  <script>
    new Vue({
      el: '#app',
      methods: {
        showCarBrandFromEmitCmp(carBrand) {
          alert(carBrand)
        }
      }
    })
  </script>
~~~

<hr>

<a name="parent"></a>

## 9. Acceso a datos del componente padre

Creamos en *index.html*, en la instancia del componente root una variable a la que queremos acceder desde un componente hijo:

~~~js
...
 new Vue({
  el: '#app',
  data () {
    return {
      appName: 'Iniciando con VueJS 2'
    }
  },
  methods: {
...
~~~

Creamos un nuevo componente *parent-data.js*:

~~~js
Vue.component('parent-data', {
  template: `
    <div>
      <h2>Acceso a datos del cmp padre desde el cmp hijo</h2>
      <p>{{ $parent.appName }}</p>
    </div>
  `
});
~~~

De esta forma, utilizando ```$parent.appName``` estamos accediendo desde el componente hijo a la variable appName del componente padre. Pueden concatenrase varias llamadas a ```$parent.parent.parent...``` para subir varios niveles.

<hr>

<a name="child"></a>

## 10. Acceso a datos del componente hijo utilizando referencias

Creamos un nuevo componente *child-data.js* en donde la variable cmpName será la que recuperaremos del componente padre:

~~~js
Vue.component('child-data', {
  data () {
    return {
      cmpName: 'Child Data CMP'
    }
  },
  template: `
    <div>
      <h2>Acceso a datos del cmp hijo desde el cmp padre</h2>
    </div>
  `
});
~~~

En *index.html* cargamos el nuevo componente y creamos la referencia:

~~~html
<head>
  ...
    <script src="components/child-data.js"></script>
  ...
</head>
<body>
  ...
      <child-data ref="childData"></child-data>
  ...
</body>
~~~

En la instacia del componente root definimos el método *mounted* que se ejecutará cuando se haya montado el componente root, y desde él accedemos a la variable del componente hijo.

~~~js
...
  mounted() {
    const cmpName = this.$refs.childData.cmpName;
    console.log(cmpName)
  },
...
~~~

<hr>

<a name="child-methods"></a>

## 11. Acceso a metodos del componente hijo utilizando referencias

Creamos un nuevo componente *child-methods.js*:

~~~js
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
~~~

En *index.html* cargamos el nuevo componente y creamos la referencia:

~~~html
<head>
  ...
    <script src="components/child-methods.js"></script>
  ...
</head>
<body>
  ...
      <child-methods ref="childMethods"></child-methods>
  ...
</body>
~~~

En el método *mounted* invocamos el método del componente hijo.

~~~js
...
mounted() {
...
  setTimeout(() => {
    this.$refs.childMethods.showCmpName()
  }, 1000);
},
...
~~~

<hr>

<a name="forms"></a>

## 12. Introducción a formularios. Login básico

Creamos un nuevo componente *login-form*.

Los datos del componente serán el usuario (email y contraseña) y el estado del login:
~~~js
  data  () {
    return {
      logged: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
~~~

El método login cambiárá el estado del *logged*.

~~~js
  methods: {
    login () {
      this.logged = this.user.email === 'test@m.com' && this.user.password === "1234"
    }
  },
~~~

En el template hacemos uso de la directiva v-show para mostrar o no contenido html en función de una condición.

~~~html
  template: `
    <div>
      <h2>Formulario de login</h2>
      <p v-show="logged" style="background: green; color: white">
        Has iniciado sesión con los datos: {{ user }}
      </p>
      <form @submit.prevent="login">
        <input autocomplete="off" type="email" v-model="user.email" name="email"/>
        <input type="password" v-model="user.password" name="password"/>
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  `
~~~

<hr>

<a name="loops"></a>

## 13. Bucles con v-for

Creamos un nuevo componente *loops.js*.

~~~js
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
~~~

En este componente utilizamos nuevos conceptos:
- Directiva v-for para iterar en un elemento HTML.
- Directiva v-if para no mostrar el elemento en el caso en el que no haya datos sobre los que iterar.
- Como buena práctica, debemos siempre en los elementos sobre los que iteramos establecer una key única. Utilizamos *:key* para indicar que la key es una variable.

<hr>

<a name="conditionals"></a>

## 14. Condicionales con v-if

Generamos un nuevo componente *conditionals.js*.

~~~js
Vue.component('conditionals', {
  data () {
    return {
      age: 20
    }
  },
  template: `
    <div>
      <h2>Condicionales con v-if</h2>
      <input v-model="age" />
      <p v-if="age < 18">Menor de edad</p>
      <p v-else-if="age >=18 && age < 30">Mayor de edad y menor de 30</p>
      <p v-else-if="age >=30 && age < 65">Mayor de 30 y menor de 65</p>
      <p v-else>Estas jubilad@</p>
    </div>
  `
})
~~~

En función del valor que se introduzca en el input se mostrará uno u otro mensaje.

<hr>

<a name="slots"></a>

## 15. Slots. Ejemplo de layout

Los slots permiten definir layouts en donde se pueda sobreesribir partes del cógigo.

Generamos un nuevo componente *slots.js*.

~~~js
Vue.component('slots', {
  template: `
  <div>
    <h2>Slots, ejemplo de layout</h2>
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main> 
      <footer>
        <slot name="footer"></slot>
      </footer> 
    </div>
  </div>
  `
});
~~~

En el *index.html* redefinimos el contenido del template de la siguiente forma:

~~~html
<slots>
  <p>Parrafo 1 del slot</p>
  <template slot="header">
    <h3>Header del layout con slots</h3>
  </template>
  <p>Parrafo 2 del slot</p>
  <template slot="footer">
    <h3>Footer del layout con slots</h3>
  </template>
</slots>
~~~

Todo lo que esté fuera de los distintos templates formará parte de lo definido con la etiqueta slot en el template sin asignarle nombre (en nuestro caso dentro de las etiquetas main).

<hr>

<a name="watchers"></a>

## 16. Watchers

Los watchers son una zona de un componente que permite revisar de forma constante los cambios en un dato.

Generamos un nuevo componente *watchers.js*:

~~~js
Vue.component('watchers', {
  data () {
    return {
      user: null,
      oldUser: null
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
~~~

Establecemos un método que permita obtener por fetch un usuario random y actualizar el valor de **user**:

~~~js
...
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
...
~~~

Establecemos un watcher que detecte un cambio en la variable **user** y permita actualizar el valor de **oldUser**.

<hr>

<a name="computed2"></a>

## 17. Computed properties cpn getters y setters

Permiten establecer y recuperar la información modificada de una variable sin modificar su valor.

Generamos un nuevo componente *computed-properties-get-set.js*

~~~js
Vue.component('computed-properties-get-set', {
  data () {
    return {
      amount: 0
    }
  },
  template: `
    <div>
      <h2>Computed Properties get && set</h2>
      <input v-model="amount" />
      <p>{{ amountFormatted }}</p>
    </div>
  `
});
~~~

Establecemos como variables calculadas lo siguiente:

~~~js
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
~~~

El **get** establecerá el formato que se quiere recuperar y el **set** simplemente establecerá el valor.

<hr>

<a name="dynamic"></a>

## 19. Carga de componentes dinámicos con *component*

Permite de forma dinámica establecer los componentes que se muestran.

Creamos una carpeta *dynamic-components* con 3 componentes que contengan únicamente una template para ver cómo se cambia de uno a otro.

Generamos un nuevo componente *load-dynamic-component.js*:

~~~js
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
~~~

A la etiqueta *component* le pasamos la directiva :is en donde establecemos el nombre del componente que debe cargarse en cada momento. El evento que genera cada botón permitirá que se carguen los componentes de forma dinámica.

<hr>

<a name="mixins"></a>

## 19. Mixins

Un mixin es una forma de heredar datos para poder reutilizar información.

Generamos un nuevo componente *mixiins.js* que va a contener dos mixins. En este caso, se mezclan los elementos de ambos mixin, y en el caso en el que sus keys sean iguales, se sobrescriben.

~~~js
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
  mounted() {
    console.log("Mounted from component with mixins")
  },
  template: `
  <div>
    <h2>Uso de mixins</h2>
    <p>{{mixinData}}</p>
    <p>{{mixinData2}}</p>
  </div>
  `
})
~~~

La salida que se obtiene por consola tras la carga será la siguiente:

![mixins](./images/mixins.png)

<hr>

<a name="directives"></a>

## 20. Directivas (foco a input)

Las directivas son atributos especiales que se colocan en las etiquetas HTML y están prefijados por v- (v-for, v-bind, v-on...). 

Estas directivas permiten realizar acciones dinámicas potentes (bucles, condicionales, etc...) que no se pueden realizar en HTML por si solo.

Para este ejemplo creamos una carpeta directivas y dentro un archivo *focus.js*.

~~~js
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
})
~~~

Ahora podemos utilizar v-focus dentro de un input para que en la carga el foco vaya a ese input.

<hr>

<a name="directives2"></a>

## 21. Directivas (aplicar estilos)

Generamos una nueva directiva *change-styles.js*

~~~js
Vue.directive('change-styles', (el, binding) => {
  el.style.backgroundColor = binding.value.backgroundColor;
  el.style.color = binding.value.color;
})
~~~

Ahora podemos utilizar esta directiva para cambiar estas las propiedades css **color** y **color de fondo** de un componente, bien sea de forma explícita o a través de una variable:

~~~js
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
~~~

<hr>

<a name="filters"></a>

## 22. Filtros

Creamos una carpeta *filters* y en ella un archivo *arrow-filter.js*.

~~~js
Vue.filter('arrow_filter', (value), params => {
  return `${params} ${value}`
})
~~~

Este filtro permite modificar un parámetro. En este caso si el parámetro es 21 devolverá => 21.

Para aplicar el filtro se utiliza la siguiente sintáxis:

~~~html
<p>{{ amountFormatted | arrow_filter(params)}}</p>
~~~

<hr>

<a name="plugins"></a>

## 24. Plugins

Permiten añadir funcionalidad adicional a VueJS de forma sencilla.

Creamos una nueva carpeta *plugins* y en su interior un archivo *aboutMe.js*.

~~~js
const AboutMe = {
  install: (Vue, options) => {
    const { job } = options;
    Vue.prototype.$me = (name, age) => {
      return `Mi nombre es ${name}, tengo ${age} años y trabajo de ${job}`
    }
  }
}

Vue.use(AboutMe, {
  job: 'Programador'
})
~~~

Una vez cargado el plugin, la variable $me estará disponible en la instancia de vue y será accesible desde componentes hijos utilizando *$parent*.

<hr>

<a name="props"></a>

## 24. Props

Las props son propiedades que se pasan de un componente padre a un componente hijo.

Pueden definirse mediante un array:

~~~js
Vue.component('props', {
  props: ['name', 'surname'],
  template: `
    <div>
      <h2>Props con VueJS 2</h2>
      <p>{{ name }} {{ surname }}</p>
    </div>
  `
})
~~~

O mediante un objeto, para de esta forma definir tipos y propiedades:

~~~js
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
~~~

<hr>

<a name="child-methods"></a>

## 25. Props VS Data y reactividad

Las Props en Vuejs nos permiten pasar datos a un componente al momento de utilizarlo:

~~~html
<super-componente :nombre="variableNombreSuperComponente" />
~~~

En este caso al componente super-componente le estamos pasando un dato de entrada llamado nombre, para utilizarlo en dicho componente haríamos lo siguiente:

~~~html
<template>
  <div>
    {‌{ nombre }}
  </div>
</template>
 
<script>
export default {
   props: ['nombre']
}
</script>
~~~

El problema está en que si queremos que este dato sea reactivo utilizando v-model tendríamos un error:
~~~html
<template>
  <div>
    <input v-model="nombre" />
  </div>
</template>
 
<script>
export default {
  props: ['nombre']
}
</script>
~~~

Esto significa que no podemos modificar una Prop de forma directa, para solucionar esto realmente existen muchos caminos, pero uno muy común que sirve en la mayoría de los casos es utilizar en lugar de un valor, un objeto:

~~~html
<super-componente :objetoConNombre="objetoNombreSuperComponente" />
<template>
  <div>
    <input v-model="objetoConNombre.nombre" />
  </div>
</template>
 
<script>
export default {
  props: ['objetoConNombre']
}
</script>
~~~
