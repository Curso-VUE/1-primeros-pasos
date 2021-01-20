# Primeros Pasos

1. [Introducción](#intro)
2. [Hola Mundo](#helloworld)
3. [Primer Componente](#component)
4. [Propiedades Calculadas](#computed)
5. [Métodos](#methods)
6. [Data Binding con v-model](#binding)
7. [Data binding con v-model y arrays](#binding-array)
8. [Eventos](#events)

<a name="intro"></a>
## 1. Introducción

El core de vue es el siguiente:

Template:
~~~
<div id="app">
  {{ message }}
</div>
~~~

Componente:
~~~
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
~~~


<a name="helloworld"></a>
## 2. Hola Mundo

Vamos a utilizar directamente el CDN de vue. Creamos un *index.html* e incluimos el script del cdn en su head:

~~~
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

~~~
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

<a name="component"></a>
## 3. Primer Componente

Creamos una carpeta *components^y dentro de ella un archivo *message.js*.

~~~
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

En el *index.html* cargamos el componente:

~~~
<head>
  ...
  <script src="components/message.js"></script>
  ...
</head>
  <body>
    <div id="app">
      <message></message>
    </div>
    <script>
      new Vue({
        el: '#app',
      })
    </script>
  </body>
~~~

<a name="computed"></a>
## 4. Propiedades Calculadas
Son propiedades generadas a partir de otras propiedades del componente.

Creamos un nuevo archivo en components *computed-properties*:

~~~
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

Y lo cargamos desde el *index.html*

~~~
<head>
  ...
  <script src="components/computed-properties.js"></script>
  ...
</head>
<body>
  ...
  <computed-properties></computed-properties>
  ...
</body>
~~~

<a name="methods"></a>
## 5. Métodos
Los métodos son funciones que ejecutan en el componente y que son lanzadas por eventos del mismo.

Creamos un nuevo archivo en components *methods.js

~~~
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

Y lo cargamos desde el *index.html*

~~~
<head>
  ...
  <script src="components/methods.js"></script>
  ...
</head>
<body>
  ...
  <methods></methods>
  ...
</body>
~~~

<a name="binding"></a>
## 6. Data binding con v-model
Data binding permite que una variable almacene los cambios realizados sobre ella desde el template.

Creamos un nuevo archivo en *components" *vmodel.js*.

~~~
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

Y lo cargamos desde el *index.html*

~~~
<head>
  ...
  <script src="components/vmodel.js"></script>
  ...
</head>
<body>
  ...
  <vmodel></vmodel>
  ...
</body>
~~~

Comprobamos como el valor de framework funciona como value del input y cuando se modifica queda reflejado en el párrafo siguiente.

<a name="binding-array"></a>
## 7. Data binding con v-model y arrays


Creamos un nuevo archivo en *components" *vmodel-checkboxes.js*.

~~~
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

Y lo cargamos desde el *index.html*

~~~
<head>
  ...
  <script src="components/vmodel-checkboxes.js"></script>
  ...
</head>
<body>
  ...
  <vmodel-checkboxes></vmodel-checkboxes>
  ...
</body>
~~~

Desmarcando y marcando los checkboxes podemos ver como se modifica el contenido de *frameworks*.

<a name="events"></a>
## 8. Eventos

Los eventos se emiten siempre del componente hijo al componente padre.

En la carpeta components creamos un nuevo archivo *emit.js*. En el template especificamos el nombre del evento que vamos a emitir y el parámetro que enviamos al componente padre. **El nombre del evento debe de estár en minúsculas**

~~~
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

Cargamos el nuevo componente desde el *index.html*: 

~~~
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

~~~
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