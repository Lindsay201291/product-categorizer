# Categorizador de Productos

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.0.2.

## Requerimientos

Descargue e instale [Node.js](https://nodejs.org/es/download).

Una vez descargado e instalado Node.js, ejecute el comando `npm i -g @angular/cli` en la terminal.

Después que haya descargado el repositorio, diríjase a la carpeta del proyecto y ejecute el comando `npm install` para descargar los paquetes necesarios.

## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

## Andamiaje de código

Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construir

Ejecute `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI](https://angular.io/cli).

## Funcionalidades de la aplicación

La aplicación web desarrollada incluye las siguientes funcionalidades:

1. Importación de datos: Importa una base de datos Excel.

2. Segmentación de datos: Segmenta los datos importados en listas por categoría.

3. Implementación de interactividad: Implementa un sistema de drag and drop entre los elementos que conforman cada categoría. Al mover un equipo entre categorías, su categoría cambia correspondientemente en los datos.

4. Generación de archivo Excel: Funcionalidad que permite descargar un archivo Excel con los datos de los equipos modificados.