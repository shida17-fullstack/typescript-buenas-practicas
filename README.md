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

El archivo data_types_original.ts es el archivo original del código con ejemplos de uso de diferentes tipos de datos en TypeScript, incluyendo tipos de datos primitivos, enumeraciones, tipos de datos any y unknown, tipos de datos unión e intersección, y tipos de colección como arrays, tuplas, sets y maps. El código está organizado en funciones que encapsulan diferentes conceptos y muestran ejemplos prácticos de su uso.

- [data_types_original.ts](./src/original/data_types_original.ts): Archivo original de buenas prácticas aplicadas en el uso de tipos de datos en TypeScript. La cual corresponde a la: 

  - [Rama main](https://github.com/shida17-fullstack/typescript-buenas-practicas.git)

- La actualización de este archivo con comentarios mejorados y modificaciones adicionales se puede encontrar en la rama updated:

  - [Rama updated](https://github.com/shida17-fullstack/typescript-buenas-practicas/tree/updated)



## Estructura de Carpetas

```markdown

typescript-buenas-practicas
├── src
│   ├── original
│   │   ├── data_types_original.ts
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
  - **original/:** Subdirectorio que contiene archivos TypeScript.
    - **data_types_original.ts:** Este archivo contiene ejemplos de TypeScript que demuestran varios tipos de datos y conceptos aplicando buenas practicas. 
    - **index.ts:** Archivo de punto de partida de la aplicacion y que pone en marcha data_types_original.ts.
- **.gitignore:** Archivos y directorios que Git debe ignorar.
- **LICENSE.md:** Licencia del proyecto.
- **package-lock.json:** Archivo de bloqueo de versiones de dependencias.
- **package.json:** Archivo de configuración del proyecto y dependencias.
- **README.md:** Documento con información sobre el proyecto.

## Instrucciones de Ejecución

Para ejecutar el proyecto en modo desarrollo, sigue estos pasos:

### 1. Clonar el repositorio

```sh 

git clone https://github.com/shida17-fullstack/typescript-buenas-practicas.git

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

npm run dev:original

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

- **Usar Tipos Específicos:**
  - **Buena Práctica:**  Siempre definir tipos específicos para variables y funciones.
  - **Aplicación Real:**  En un proyecto real, esto ayuda a prevenir errores y a clarificar la intención del código.
  - **Ejemplo en los archivos:** Utilizar tipos específicos como string, number, y boolean garantiza que las variables contengan el tipo de dato esperado. En los archivos, los ejemplos de nombre, edad, y esDesarrollador demuestran esta práctica, asegurando que cada variable contenga el tipo correcto de datos, lo que mejora la legibilidad y reduce errores.

- **Evitar el Uso de any:**
  - **Buena Práctica:** Aunque el tipo any puede ser útil en ciertos casos, su uso excesivo puede llevar a errores difíciles de detectar. Evitar usar any siempre que sea posible, y preferir unknown o tipos más específicos.
  - **Aplicación Real:** Reduce la posibilidad de errores al forzar al desarrollador a manejar casos desconocidos adecuadamente.
  - **Ejemplo en los archivos:** En los archivos, se demuestra cómo se usa el tipo unknown en lugar de any, lo cual obliga a verificar el tipo antes de usarlo. Esto se aplica en el manejo de la variable valorDesconocido, donde se comprueba su tipo antes de proceder con operaciones específicas.


- **Usar Interfaces y Tipos Personalizados:**
  - **Buena Práctica:** Usar interfaces para definir estructuras de datos claras y reutilizables.
  - **Aplicación Real:** Facilita la comprensión y el mantenimiento del código, especialmente en proyectos grandes.
  - **Ejemplo en los archivos:** Las interfaces y los tipos personalizados ayudan a definir estructuras de datos claras y coherentes. En los archivos, se definen tipos como Persona y Empleado para estructurar datos de manera más organizada y específica, asegurando que las propiedades requeridas estén presentes y sean del tipo correcto.


- **Utilizar Enumeraciones (Enums):**
  - **Buena Práctica:** Usar enums para representar conjuntos de valores relacionados.
  - **Aplicación Real:** Mejora la legibilidad y reduce errores al usar valores predefinidos.
  - **Ejemplo en los archivos:** Las enumeraciones (enum) proporcionan una forma efectiva de manejar un conjunto de valores relacionados. En los archivos, se usan enumeraciones como NivelAcceso y DiaSemana para representar valores constantes y predefinidos, lo que mejora la claridad y la gestión de estos valores en el código.


- **Aplicar Tipos de Unión e Intersección:**
  - **Buena Práctica:**  Los tipos de unión e intersección son útiles para manejar variables que pueden tener múltiples tipos o que deben cumplir con múltiples interfaces.
  - **Aplicación Real:** Permite una mayor flexibilidad y precisión en la definición de datos.
  - **Ejemplo en los archivos:** En los archivos, se utiliza el tipo Id como una unión de number y string, y el tipo Empleado como una intersección de Persona con una propiedad adicional, salario. Esto permite una mayor flexibilidad y precisión en la definición de datos.

- **Tipos de Colección:**
  - **Buena Práctica:**  Usar tipos de colección como arrays, tuplas, sets, y maps para manejar conjuntos de datos de manera eficiente y con el tipo correcto.
  - **Aplicación Real:**  Asegura que cada colección contenga elementos del tipo esperado, mejorando la robustez y el rendimiento del código.
  - **Ejemplo en los archivos:** En los archivos, se usan estas colecciones para almacenar y manipular datos, asegurando que cada colección contenga elementos del tipo esperado.

- **Implementación de Funciones Tipadas:**
  - **Buena Práctica:** Definir tipos para los parámetros y el valor de retorno de las funciones asegura que las funciones se utilicen correctamente y que los datos pasados y devueltos sean del tipo esperado.
  - **Aplicación Real:** En un proyecto real, esto asegura que las funciones se usen correctamente y que los datos pasados y devueltos sean del tipo esperado.
  - **Ejemplo en los archivos:** En los archivos, la función saludar es un buen ejemplo de esto, donde el parámetro nombre es de tipo string y el valor de retorno también es de tipo string.

- **Documentar el Código:**
  - **Buena Práctica:** Documentar funciones, parámetros y tipos de retorno.
  - **Aplicación Real:** Facilita la colaboración y el mantenimiento del proyecto.
  - **Ejemplo en los archivos:** Documentar el código con JSDoc ayuda a otros desarrolladores a entender mejor la funcionalidad y el propósito de cada parte del código, mejorando la legibilidad y facilitando el mantenimiento y la colaboración. En este proyecto, la documentación se ha realizado tanto en este markdown como en Notion utilizando plantillas proporcionadas. Cada función y tipo está bien documentado, proporcionando descripciones claras y concisas de los parámetros y valores de retorno.
  En el archivo data_types_original.ts, se ha aplicado JSDoc para documentar el propósito del archivo, las enumeraciones, y las funciones. Por ejemplo, la documentación del archivo comienza con un comentario que describe el contenido general del archivo, seguido por las licencias y el autor.

  Para una función específica, como saludar, se ha utilizado JSDoc de la siguiente manera:

  - Se incluye un bloque de comentarios justo antes de la función.
  - Se utiliza la etiqueta @function para indicar que se está documentando una función.
  - La etiqueta @description proporciona una breve descripción de lo que hace la función.
  - La etiqueta @param describe los parámetros de la función, especificando su nombre y tipo.
  - La etiqueta @return describe el valor de retorno de la función, indicando su tipo.

 - **Descripción de la Documentación:**

    - @fileoverview: Describe el propósito general del archivo, en este caso, ejemplos de uso de diferentes tipos en TypeScript.
    - @license: Indica la licencia bajo la cual se distribuye el archivo.
    - @autor: Indica el autor del archivo.
    - @enum: Describe una enumeración y sus valores posibles.
    - @function: Indica el inicio de la descripción de una función.
    - @description: Proporciona una descripción clara y concisa de la función.
    - @param: Describe los parámetros de la función, incluyendo su nombre y tipo.
    - @return: Describe el valor de retorno de la función, especificando su tipo.

- **Ejemplo textual de una función documentada:**

```bash

/**
 * @function saludar
 * @description Saluda a una persona por su nombre.
 * @param {string} nombre - El nombre de la persona.
 * @return {string} Un saludo en formato de cadena.
 */
function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

```

### Aplicación de Buenas Prácticas de TypeScript en un Proyecto Real
Las buenas prácticas descritas en la sección **Archivo de Buenas Prácticas en TypeScript**  muestran cómo se han aplicado para mejorar la calidad, legibilidad, y mantenibilidad del código. Estas prácticas no solo ayudan a escribir código más limpio y eficiente, sino que también facilitan la colaboración y el mantenimiento en proyectos de desarrollo de software.


## Plantillas en Notion
- [data_types_original.ts](https://www.notion.so/Plantilla_Documentaci-n-de-c-digo-985f11cbe4844d4bb8df3d66def4e4d4?pvs=12) 


## Glosario

### TypeScript

- **TypeScript:** Un lenguaje de programación que extiende JavaScript añadiendo tipado estático.
- **Transpilar:** Convertir código TypeScript en JavaScript.
- **Tipos Estáticos:** Tipos de datos definidos en tiempo de compilación.
- **Clases:** Plantillas para crear objetos en programación orientada a objetos.
- **Interfaces:** Contratos que definen la estructura de los objetos.
- **Enumeraciones (Enums):** Conjunto de valores constantes con nombre.
- **Decoradores:** Herramientas de metaprogramación que añaden metadatos a clases y propiedades.
- **Tipado Gradual:** Capacidad de definir tipos en código existente de forma progresiva.
- **ES6+:** Versiones de ECMAScript posteriores a ES6, que incluyen nuevas características de JavaScript.
- **IntelliSense:** Herramienta que proporciona sugerencias de código y ayuda contextual en editores de código.
- **Refactorización:** Proceso de reestructurar el código sin cambiar su comportamiento externo.
- **JSDoc:** Herramienta de documentación que usa comentarios especiales en el código fuente.
- **Nodemon:** Herramienta que reinicia automáticamente la aplicación Node.js cuando se detectan cambios en los archivos.

### Tipos Primitivos

- **string:** Un tipo de dato que representa una cadena de texto. En el ejemplo, `nombre` es una variable de tipo `string`.
- **number:** Un tipo de dato que representa un valor numérico. En el ejemplo, `edad` es una variable de tipo `number`.
- **boolean:** Un tipo de dato que representa un valor verdadero o falso. En el ejemplo, `esDesarrollador` es una variable de tipo `boolean`.

### Enumeraciones

- **enum:** Un tipo especial en TypeScript que define un conjunto de constantes con nombre. En el ejemplo, `NivelAcceso` y `DiaSemana` son enumeraciones que representan niveles de acceso y días de la semana, respectivamente.

### Tipos any y unknown

- **any:** Un tipo que permite que una variable contenga valores de cualquier tipo sin hacer verificaciones de tipo. En el ejemplo, `dato` es una variable de tipo `any`.
- **unknown:** Un tipo que indica que el valor podría ser de cualquier tipo, pero se debe realizar una verificación de tipo antes de operarlo. En el ejemplo, `valorDesconocido` es una variable de tipo `unknown`.

### Tipos de Unión e Intersección

- **Unión (Union Type):** Permite que una variable sea de uno de varios tipos especificados. En el ejemplo, `Id` puede ser un `number` o un `string`.
- **Intersección (Intersection Type):** Permite combinar múltiples tipos en uno solo. En el ejemplo, `Empleado` es una intersección de `Persona` y un objeto adicional que contiene `salario`.

### Tipos de Colección

- **Array:** Una estructura de datos que contiene una lista de elementos del mismo tipo. En el ejemplo, `numeros` es un array de `number`.
- **Tuple:** Una estructura de datos que contiene una lista de elementos de tipos específicos en un orden fijo. En el ejemplo, `tupla` es una tupla que contiene un `string` y un `number`.
- **Set:** Una colección de valores únicos sin orden específico. En el ejemplo, `conjunto` es un set de `string`.
- **Map:** Una colección de pares clave-valor donde las claves son únicas. En el ejemplo, `mapa` es un map con claves de tipo `string` y valores de tipo `number`.

### Documentación de Funciones

- **JSDoc:** Una forma de documentar el código utilizando comentarios especiales que describen las funciones y sus parámetros.

  - `@fileoverview`: Describe el propósito general del archivo.
  - `@license`: Indica la licencia del archivo.
  - `@autor`: Indica el autor del archivo.
  - `@enum`: Describe una enumeración.
  - `@function`: Describe una función.
  - `@description`: Proporciona una descripción de la función.
  - `@param`: Describe un parámetro de la función.
  - `@return`: Describe el valor de retorno de la función.

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
