#Entorno y Herramientas de Desarrollo.

React es una librería y no técnicamente un framework. Por lo que sólo maneja la capa de Vista, tomando como referencia el modelo MVC (Modelo Vista Controlador) para el desarrollo de aplicaciones web. Sin embargo cuenta con una amplia gama de herramientas, librerías y frameworks para complementar su entorno de desarrollo, por ejemplo:

    Node.js y NPM: Para ejecutar el entorno de desarrollo e instalar dependencias. 
    Yarn: Un gestor de paquetes JavaScript. 
    Webpack: Es un empaquetador de archivos para aplicaciones JavaScript. 
    React Router: Librería para manejar rutas declarativas. 
    Redux: Es una librería para gestionar el estado de las aplicaciones JavaScript. 
    Flux: Es la arquitectura de aplicaciones que Facebook usa para crear aplicaciones web del lado del cliente. 
    Create React App: Un conjunto de configuraciones preestablecidadas para comenzar a trabajar con React ejecutando un sólo comando. 
    Gatsby: Es un framework basado en React para desarrollar rápidamente sitios y aplicaciones web, usando diferentes fuentes de datos como CMS, Markdowns, APIs, etc. 
    Next.js: Es un framework basado en React para desarrollar sitios estáticos y aplicaciones del lado del servidor (SSR - Server Side Rendering). 
    GraphQL: Es un lenguaje de consulta de datos para APIs. 
    React Bootstrap: Es la versión del popular framework frontend Bootstrap pero creado con componentes hechos en React. 
    Material UI: Es un framework frontend inspirado en Material Design creado con componentes hechos en React. 
    React Native: Es un framework basado en React para la creación de aplicaciones móviles y nativas. 
    React Dev Tools Chrome: Es una extensión para Chrome que agrega de herramientas de depuración para React. 
    React Dev Tools Firefox: Es una extensión para Firefox que agrega de herramientas de depuración para React. 
    Simple React Snippets for VSCode: Es una extensión para Visual Studio Code que nos permite usar atajos para agilizar la escritura de código React. 

# Create React App

Aunque existen varias formas de empezar con React, una manera sencilla y eficiente es con create-react-app, una aplicación de consola que nos va a permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más importante: Programar en React.

Para crear una aplicación utilizamos el comando npx create-react-app seguido del nombre que le quieras dar a tu aplicación. Por ejemplo:
    
    npx create-react-app my-app

Cuando ejecutas ese comando create-react-app va a crear una carpeta llama my-app con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.
Ingresa a la carpeta my-app y ejecuta el proyecto con los siguientes comandos:

    cd my-app
    npm start

El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida. Los dos archivos más importantes son:

    • public/index.html - la plantilla HTML de la aplicación. 
    • src/index.js - el punto de entrada JavaScript de la aplicación. 
    
Puedes eliminar o renombrar otros archivos según tus necesidades.
Dentro de src se incluyen todos los archivos JavaScript y CSS de tu aplicación.
También es recomendable incluir otros archivos estáticos como imágenes y fuentes en esta carpeta. Puedes crear subcarpetas para organizar mejor los archivos.
En public van todos los archivos estáticos que necesites incluir en la plantilla public/index.html.
Puedes crear otras carpetas además de src y public. Estas carpetas no van a ser incluídas en el paquete de distribución.

# Componentes

En React se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación.

Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras.

El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.

Se le pueden pasar datos a un componente a través de algo llamado props y devuelven a React elementos que describen lo que debe verse en pantalla.

En React los datos fluyen de forma unidireccional, de componentes padres a componentes hijos.

React te permite definir componentes como clases o como funciones.
Tipos de Componentes

Como una clase que extiende de Component con un método render:

    import React, { Component } from "react";

    class Title extends Component {
    render() {
        return <h1>Hola mundo</h1>;
    }
    }

O como una función que retorna lo que se va a renderizar:

    const Title = () => {
    return <h1>Hola Mundo</h1>;
    };

Utilizando un componente

Para utilizar un componente debes importarlo y después incluirlo en tu JSX como se muestra en el siguiente ejemplo:

    import React from "react";
    import Title from "./Title";

    function App {
        return <Title />;
    }

