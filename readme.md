# Primeros Pasos

1. [Introducción](#intro)
2. [Hola Mundo](#helloworld)
3. [Primer Componente](#component)
4. [Propiedades Calculadas](#computed)
5. [Métodos](#methods)
6. [Data Binding con v-model](#binding)

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

