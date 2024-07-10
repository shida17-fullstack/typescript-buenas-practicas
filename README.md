# Typescript Buenas Prácticas

## Descripción

- Este repositorio contiene código que refleja el uso de **buenas prácticas en TypeScript**. 
- Se incluyen ejemplos de diferentes tipos de datos y conceptos en TypeScript, junto con una explicación de sus fundamentos y su integración con JavaScript. 
- Se abordan características clave de TypeScript, como tipos de datos estáticos, clases e interfaces, enumeraciones, tipos de datos avanzados, decoradores, tipado gradual y soporte para ES6+.
- Se detalla cómo TypeScript transpila y extiende JavaScript, y el código esta documentado tanto en GitHub como en Notion. 
- También se presentan análisis y ejemplos de buenas prácticas aplicadas en un **proyecto real**, mostrando cómo estas prácticas mejoran la calidad y mantenibilidad del código. 
- Finalmente, se proporciona un glosario con definiciones de términos clave utilizados en el proyecto.

El proyecto utiliza las siguientes **dependencias de desarrollo**:

- nodemon ^3.1.4
- ts-node ^10.9.2
- typescript ^5.5.3

Cada sección ofrece información y ejemplos detallados para utilizar y aplicar TypeScript de manera efectiva en proyectos de desarrollo de software.


## Archivo de Buenas Prácticas en TypeScript

El archivo data_types_updated.ts es la actualizacion del archivo data_types_original.ts que se encuentra en la rama master del proyecto y contiene ejemplos de uso de diferentes tipos de datos en TypeScript, incluyendo tipos de datos primitivos, enumeraciones, tipos de datos any y unknown, tipos de datos unión e intersección, y tipos de colección como arrays, tuplas, sets y maps. El código está organizado en funciones que encapsulan diferentes conceptos y muestran ejemplos prácticos de su uso.

- [data_types_updated.ts](./src/updated/data_types_updated.ts): Archivo actualizado de buenas prácticas aplicadas en el uso de tipos de datos en TypeScript con comentarios mejorados y modificaciones adicionales.

  - [Rama updated](https://github.com/shida17-fullstack/typescript-buenas-practicas/tree/updated)


- Para ver el archivo original dirigirse a la Rama main: 

  - [Rama master](https://github.com/shida17-fullstack/typescript-buenas-practicas.git)

## Estructura de Carpetas

```markdown

typescript-buenas-practicas
├── src
│   ├── updated
│   │   ├── data_types_updated.ts
│   │   └── index.ts
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── .gitignore
├── LICENSE.md

```

## Explicación de las Carpetas

- **src:** Directorio principal del código fuente del proyecto.
  - **updated/:** Subdirectorio que contiene archivos TypeScript actualizados
    - **data_types_updated.ts:** Este archivo contiene ejemplos de TypeScript que demuestran varios tipos de datos y conceptos aplicando buenas practicas. Siendo actualizacion del archivo data_types_original.ts en la rama master.
    - **index.ts:** Archivo de punto de partida de la aplicacion y que pone en marcha data_types_updated.ts.
- **.gitignore:** Archivos y directorios que Git debe ignorar.
- **LICENSE.md:** Licencia del proyecto.
- **package-lock.json:** Archivo de bloqueo de versiones de dependencias.
- **package.json:** Archivo de configuración del proyecto y dependencias.
- **README.md:** Documento con información sobre el proyecto.

## Instrucciones de Ejecución

Para ejecutar el proyecto en modo desarrollo, sigue estos pasos:

### 1. Clonar el repositorio

```sh 

https://github.com/shida17-fullstack/typescript-buenas-practicas/tree/updated

```

### 2. Node Js y Npm 

Asegúrate de tener Node.js y npm instalados en tu máquina.

### 3. Terminal

Abre una terminal o línea de comandos.

### 4. Directorio Raiz

Navega al directorio raíz del proyecto:

```bash

cd typescript-buenas-practicas

```
### 5. Instalar Dependencias

Instala las dependencias del proyecto según el package.json ejecutando el siguiente comando:

```bash

npm install

```
### 6. Ejecutar 

Una vez completada la instalación, puedes ejecutar el proyecto con el siguiente comando:

```bash

npm run dev:updated

```

## Resumen

### Conceptos Básicos de TypeScript y su Relación con JavaScript

TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft. Es un superconjunto tipado de JavaScript que añade características de tipado estático, lo que permite detectar errores durante el desarrollo en lugar de en tiempo de ejecución. TypeScript transpila a JavaScript, lo que significa que el código TypeScript se convierte en JavaScript para ser ejecutado en cualquier entorno donde JavaScript sea compatible. A continuación se presentan los conceptos básicos y la relación con JavaScript:

### Las características y/o conceptos clave de TypeScript incluyen:

- **Tipos estáticos:** TypeScript permite declarar y definir tipos de datos estáticos para variables, parámetros de función, propiedades de objetos, etc. Esto ayuda a atrapar errores en tiempo de compilación y mejora la robustez del código.
- **Clases e Interfaces:** TypeScript soporta clases e interfaces para crear estructuras de código más orientadas a objetos, facilitando la reutilización y organización del mismo. Las interfaces permiten definir contratos dentro del código, lo que facilita la comprensión y el uso de componentes.
- **Enumeraciones (Enums):** Permiten definir un conjunto de valores con nombre, lo que facilita el manejo de valores constantes y predefinidos en el código.
- **Tipos avanzados:** TypeScript ofrece tipos avanzados como union types, intersection types, y el tipo any y unknown, lo que proporciona una gran flexibilidad en la definición de tipos de datos.
- **Decoradores:** Los decoradores son una característica de metaprogramación que permite añadir metadatos y comportamientos adicionales a clases, métodos y propiedades en TypeScript.
- **Tipado gradual:** TypeScript permite asignar tipos de manera gradual en el código existente, ofreciendo la opción de usar código fuertemente tipado o mantener la flexibilidad de JavaScript.
- **Soporte para ES6+:** TypeScript permite usar características de ES6+ y ofrece compatibilidad con versiones anteriores.

### Relación con JavaScript

TypeScript se compila a JavaScript, convirtiendo todo código TypeScript en código JavaScript válido que puede ejecutarse en cualquier entorno compatible. Extiende las funcionalidades de JavaScript con características orientadas a objetos y tipado estático, manteniendo compatibilidad con el ecosistema JavaScript. Al ser un superconjunto de JavaScript, cualquier código JavaScript válido es también código TypeScript válido, lo que facilita la migración gradual de proyectos.

Además, TypeScript mejora la sintaxis y características de JavaScript con herramientas avanzadas como IntelliSense, refactorización segura y chequeo estático de tipos, integrándose perfectamente con el ecosistema existente, similar a la relación entre SCSS y CSS.

### Análisis y Aplicación de Buenas Prácticas en Proyecto real y en archivos.

1. **Buena Práctica: Definición de Tipos Específicos**

  - **Aplicación Real:** Definir tipos específicos mejora la claridad y la mantenibilidad del código. Al especificar tipos, se minimizan errores al tiempo de compilación y se facilita la comprensión del propósito de las variables y funciones. En proyectos reales, esto asegura que todos los colaboradores comprendan y mantengan el código de manera eficiente.

  - **Ejemplo en los Archivos:** En el archivo data_types_updated.ts, se define el tipo específico string para el parámetro nombre en la función saludar. Esto asegura que la función recibe y devuelve un string, lo que previene errores y mejora la comprensión del código.

2. **Buena Práctica: Evitar el Uso del Tipo any**

  - **Aplicación Real:** Evitar any ayuda a mantener la seguridad de tipos en TypeScript, garantizando que cada variable tenga un tipo claro y definido. En proyectos reales, esto previene errores inesperados y facilita la detección de problemas durante el desarrollo.

  - **Ejemplo en los Archivos:** En lugar de utilizar any, se emplea el tipo unknown, lo que obliga a una verificación adicional antes de su uso. Esto se puede ver en cómo se maneja la variable valorDesconocido, asegurando que se realicen verificaciones de tipo antes de operar con la variable.

3. **Buena Práctica: Uso de Interfaces y Enums**

  - **Aplicación Real:** Las interfaces y los enums proporcionan estructuras claras y reutilizables que mejoran la organización del código y la reutilización de componentes. En proyectos reales, permiten definir contratos y conjuntos de valores predefinidos, lo que facilita la colaboración y la extensión del código.

  - **Ejemplo en los Archivos:** En el archivo data_types_updated.ts, se utiliza una interfaz Persona para definir la estructura de un objeto, y un enum NivelAcceso para especificar niveles de acceso. Esto proporciona una estructura clara para los datos y permite definir roles de usuario de manera consistente.

4. **Buena Práctica: Uso de Tipos de Unión e Intersección y de Interfaces para Publicaciones**

  - **Aplicación Real:** Los tipos de unión e intersección permiten combinar múltiples tipos, proporcionando flexibilidad y precisión en la definición de tipos complejos. En proyectos reales, esto facilita la manipulación de datos que pueden tener múltiples formas, incluyendo la gestión uniforme de diferentes tipos de publicaciones mediante interfaces.

  - **Ejemplo en los Archivos:** En el archivo data_types_updated.ts, se utiliza el tipo de unión Id que puede ser number o string, y el tipo de intersección Empleado que combina las propiedades de Persona con una propiedad adicional salario. Además, se definen las interfaces Libro y Revista, y el tipo de unión Publicacion que puede ser Libro o Revista. Esto permite manejar diferentes tipos de publicaciones de manera uniforme y clara.

5. **Buena Práctica: Uso de Tipos de Colección**

  - **Aplicación Real:** Utilizar tipos de colección como arrays, tuplas, sets y maps mejora la organización y el manejo de datos en TypeScript. Estos tipos permiten almacenar y gestionar colecciones de datos de manera eficiente y con tipado seguro.

  - **Ejemplo en los Archivos:** En el archivo data_types_updated.ts, se utilizan varios tipos de colección. Por ejemplo, el array numeros almacena una lista de números, la tupla tupla combina un string y un number, el set conjunto almacena un conjunto de strings únicos, y el map mapa almacena pares clave-valor. Estos ejemplos muestran cómo se pueden utilizar tipos de colección para manejar datos de manera eficiente y segura en TypeScript.

6. **Buena Práctica: Documentación del Código**

  - **Aplicación Real:** Documentar el código es crucial para la mantenibilidad y comprensión del proyecto. La documentación proporciona contexto, explica la funcionalidad y facilita la colaboración entre desarrolladores. En proyectos reales, una buena documentación permite a nuevos miembros del equipo entender y trabajar con el código de manera más efectiva.

  - **Ejemplo en los Archivos:** En el archivo data_types_updated.ts, se utilizan comentarios JSDoc para documentar funciones, tipos y enumeraciones. Por ejemplo, la función saludar incluye una descripción, los tipos de los parámetros y el valor de retorno. Esto facilita la comprensión del propósito y el uso de la función.


### Aplicación de Buenas Prácticas de TypeScript en un Proyecto Real

Las buenas prácticas descritas en la sección **Archivo de Buenas Prácticas en TypeScript**  muestran cómo se han aplicado para mejorar la calidad, legibilidad, y mantenibilidad del código. Estas prácticas no solo ayudan a escribir código más limpio y eficiente, sino que también facilitan la colaboración y el mantenimiento en proyectos de desarrollo de software.


## Plantilla en Notion

- [data_types_updated.ts](https://www.notion.so/Plantilla-Actualizaci-n-de-C-digo-69d3760982b541d3a623c4678a598cf3) 

## Glosario de Tipos en TypeScript

### Tipos Primitivos

- nombre: string

  - Representa el nombre de una persona.

- edad: number

  - Representa la edad de una persona.

- esDesarrollador: boolean

  - Indica si una persona es desarrolladora (true) o no (false).

### Enumeraciones (Enums)

- NivelAcceso: Enumeración
  - Define los niveles de acceso para usuarios.
    - Valores posibles: Admin, Usuario, Invitado.

### Tipos Avanzados

- Union Type (Id): number | string

  - Representa un identificador que puede ser un número o una cadena.

- Intersection Type (Empleado): Persona & { salario: number }

  - Extiende la interfaz Persona con una propiedad adicional salario.

- Any (dato): any

  - Puede almacenar cualquier tipo de dato en cualquier momento.

- Unknown (valorDesconocido): unknown

  - Representa un valor cuyo tipo exacto no se conoce hasta tiempo de ejecución.

### Tipos de Colección
- Array (numeros): number[]

  - Lista de números.

- Tuple (tupla): [string, number]

  - Tupla que contiene una cadena seguida de un número.

- Set (conjunto): Set<string>

  - Conjunto que almacena strings únicos.

- Map (mapa): Map<string, number>

  - Mapa que asigna claves de tipo string a valores de tipo number.

### Interfaces

- Persona: Interfaz

  - Define las propiedades comunes de una persona (nombre y edad).

- Usuario: Interface

  - Define la estructura de un objeto usuario con propiedades id, nombre y rol.

- Libro: Interface

  - Define la estructura de un objeto libro con propiedades titulo, autor y anioPublicacion.

- Revista: Interface

  - Define la estructura de un objeto revista con propiedades titulo, numeroEdicion y mesPublicacion.

### Funciones

  - Ejecutar: Función principal que ejecuta y muestra ejemplos de varios tipos en TypeScript.

  - Saludar: Función que saluda a una persona por su nombre (function saludar(nombre: string): string).

### Conceptos Utilizados en el Código

Este glosario abarca los tipos primitivos, tipos avanzados, tipos de colección, interfaces y funciones utilizadas en el código TypeScript proporcionando una referencia clara y concisa de cada uno de ellos.

### Otros Conceptos Clave

  - Tipado Gradual: La capacidad de añadir tipos a un código de manera incremental, permitiendo una transición suave de JavaScript a TypeScript.
  - Transpilación: El proceso de convertir el código TypeScript a JavaScript para su ejecución en entornos compatibles con JavaScript.

## Licencia

Este proyecto está bajo la licencia especificada en [LICENSE.md](./LICENSE.md).

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejorar el proyecto.

## Referencias

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)

  - Página principal de la documentación de TypeScript, que incluye guías, tutoriales y ejemplos de código.

- [GitHub de TypeScript](https://github.com/microsoft/TypeScript)

  - Repositorio oficial de TypeScript en GitHub, donde puedes encontrar el código fuente y contribuciones de la comunidad.


## Autor

shida17-fullstack
