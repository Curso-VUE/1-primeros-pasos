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


<hr>

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
## 3. Primer componente

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
## 4. Propiedades calculadas
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

<a name="parent"></a>
## 9. Acceso a datos del componente padre

Creamos en *index.html*, en la instancia del componente root una variable a la que queremos acceder desde un componente hijo:

~~~
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

Creamos en *components* un nuevo archivo *parent-data.js*:

~~~
Vue.component('parent-data', {
  template: `
    <div>
      <h2>Acceso a datos del cmp padre desde el cmp hijo</h2>
      <p>{{ $parent.appName }}</p>
</div>
  `
});
~~~

Cargamos el nuevo componente en *index.html*

~~~
<head>
  ...
    <script src="components/parent-data.js"></script>
  ...
</head>
<body>
  ...
      <parent-data></parent-data>
  ...
</body>
~~~

De esta forma, utilizando ```$parent.appName``` estamos accediendo desde el componente hijo a la variable appName del componente padre. Pueden concatenrase varias llamadas a ```$parent.parent.parent...``` para subir varios niveles.

<a name="child"></a>
## 10. Acceso a datos del componente hijo utilizando referencias

En la carpeta *components* creamos un nuevo archivo *child-data.js* en donde la variable cmpName será la que recuperaremos del componente padre:

~~~
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

~~~
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

~~~
...
  mounted() {
    const cmpName = this.$refs.childData.cmpName;
    console.log(cmpName)
  },
...
~~~

<a name="child-methods"></a>
##11. Acceso a metodos del componente hijo utilizando referencias

De forma análoga, creamos en *components* un archivo *child-methods.js*:

~~~
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

~~~
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

~~~
...
mounted() {
...
  setTimeout(() => {
    this.$refs.childMethods.showCmpName()
  }, 1000);
},
...
~~~

<a name="forms"></a>
## 12. Introducción a formularios. Login básico
Creamos un nuevo componente *login-form* en la carpeta components.

Los datos del componente serán el usuario (email y contraseña) y el estado del login:
~~~
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

~~~
  methods: {
    login () {
      this.logged = this.user.email === 'test@m.com' && this.user.password === "1234"
    }
  },
~~~

En el template hacemos uso de la directiva v-show para mostrar o no contenido html en función de una condición.

~~~
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

Cargamos el nuevo componente en *index.html*:

~~~
<head>
  ...
    <script src="components/login-form.js"></script>
  ...
</head>
<body>
  ...
      <login-form></login-form>
  ...
</body>
~~~