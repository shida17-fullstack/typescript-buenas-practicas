/**
 * @fileoverview Este archivo contiene ejemplos de uso de diferentes tipos en TypeScript,
 * incluyendo tipos primitivos, enumeraciones, tipos any y unknown, tipos de unión e intersección,
 * y tipos de colección como arrays, tuplas, sets y maps.
 * 
 * Este código muestra ejemplos prácticos de tipos en TypeScript, organizados en funciones
 * que encapsulan diferentes conceptos.
 * 
 * @license LICENSE.md
 * @autor @shida17-fullstack
 */

console.log("\n=== Inicio del Programa ===");

/**
 * Función principal que ejecuta y muestra ejemplos de varios tipos en TypeScript.
 */
function ejecutar() {

  // Tipos primitivos
  console.log("\n=== Tipos Primitivos ===");
  let nombre: string = "Carina Rodriguez";
  let edad: number = 30;
  let esDesarrollador: boolean = true;

  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Es Desarrollador/a: ${esDesarrollador ? 'Sí' : 'No'}`);

  // Enumeraciones
  console.log("\n=== Enumeraciones ===");

  /**
   * @enum {number}
   * @description Representa los niveles de acceso para usuarios
   */
  enum NivelAcceso {
    Admin,
    Usuario,
    Invitado
  }

  let nivel: NivelAcceso = NivelAcceso.Usuario;
  console.log(`Nivel de Acceso: ${NivelAcceso[nivel]}`);

  // Tipo any y unknown
  console.log("\n=== Tipos any y unknown ===");
  let dato: any = "Hola";
  console.log(`Dato (string): ${dato}`);
  dato = 42;
  console.log(`Dato (number): ${dato}`);

  let valorDesconocido: unknown;

  valorDesconocido = "Esto es una cadena";
  console.log(`Valor Desconocido (string): ${valorDesconocido}`);

  if (typeof valorDesconocido === "string") {
    console.log("El valor es una cadena:", valorDesconocido.toUpperCase());
  } else if (typeof valorDesconocido === "number") {
    console.log("El valor es un número:", valorDesconocido * 2);
  } else {
    console.log("El valor es de un tipo desconocido");
  }

  valorDesconocido = 42;
  console.log(`Valor Desconocido (number): ${valorDesconocido}`);

  if (typeof valorDesconocido === "string") {
    console.log("El valor es una cadena:", valorDesconocido.toUpperCase());
  } else if (typeof valorDesconocido === "number") {
    console.log("El valor es un número:", valorDesconocido * 2);
  } else {
    console.log("El valor es de un tipo desconocido");
  }

  // Tipos de unión e intersección
  console.log("\n=== Tipos de Unión e Intersección ===");

  /**
   * @typedef {number | string} Id - Representa un identificador que puede ser número o cadena.
   */

  type Id = number | string;

  /**
   * @typedef {Object} Persona - Representa una persona con nombre y edad.
   * @property {string} nombre - El nombre de la persona.
   * @property {number} edad - La edad de la persona.
   */
  type Persona = {
    nombre: string;
    edad: number;
  };

  /**
   * @typedef {Object} Empleado - Representa un empleado que es una persona con un salario.
   * @property {string} nombre - El nombre del empleado.
   * @property {number} edad - La edad del empleado.
   * @property {number} salario - El salario del empleado.
   */
  type Empleado = Persona & {
    salario: number;
  };

  let id: Id = "123ABC";
  console.log(`ID (string): ${id}`);
  id = 456;
  console.log(`ID (number): ${id}`);

  let idUsuario: Id = 101;
  let empleado: Empleado = { nombre: "Antonio Sanchez", edad: 30, salario: 50000 };

  console.log(`ID de Usuario: ${idUsuario}`);
  console.log(`Empleado: ${JSON.stringify(empleado)}`);

  // Tipos de unión e intersección en TypeScript
  type ID = number | string;
  let idUsuario2: ID = 123; // Puede ser número o string
  idUsuario2 = 'abc-123';

  interface Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;
  }

  interface Revista {
    titulo: string;
    numeroEdicion: number;
    mesPublicacion: string;
  }

  type Publicacion = Libro | Revista;

  let nuevaPublicacionLibro: Publicacion = {
    titulo: "Tecnologías Modernas",
    autor: "Juan Pérez",
    anioPublicacion: 2021
  };

  let nuevaPublicacionRevista: Publicacion = {
    titulo: "Revista de Tecnología",
    numeroEdicion: 10,
    mesPublicacion: "Junio"
  };

  console.log("\n=== Union de tipos Libros y Revistas para Publicaciones ===");

  function imprimirPublicacion(publicacion: Publicacion): void {
    console.log(`Título: ${publicacion.titulo}`);
    if ('autor' in publicacion) {
      console.log(`Autor: ${publicacion.autor}`);
      console.log(`Año de Publicación: ${publicacion.anioPublicacion}`);
    } else {
      console.log(`Número de Edición: ${publicacion.numeroEdicion}`);
      console.log(`Mes de Publicación: ${publicacion.mesPublicacion}`);
    }
  }

  imprimirPublicacion(nuevaPublicacionLibro);
  imprimirPublicacion(nuevaPublicacionRevista);

  // Utilizando tipos de colección y prácticas en un proyecto de biblioteca
  enum Rol {
    Administrador,
    Usuario,
    Invitado
  }

  interface Usuario {
    id: ID;
    nombre: string;
    rol: Rol;
  }

  let usuarios: Usuario[] = [
    { id: 1, nombre: 'Ana', rol: Rol.Administrador },
    { id: 'abc-123', nombre: 'Juan', rol: Rol.Usuario },
  ];

  function agregarUsuario(usuario: Usuario): void {
    usuarios.push(usuario);
  }

  agregarUsuario({ id: 2, nombre: 'Pedro', rol: Rol.Invitado });

  console.log("\n=== Interfaz Usuarios ===");
  usuarios.forEach(usuario => {
    console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Rol: ${Rol[usuario.rol]}`);
  });

  // Tipos de colección
  console.log("\n=== Tipos de Colección ===");
  let numeros: number[] = [10, 20, 30, 45];
  let tupla: [string, number] = ["Hola", 42];
  let conjunto: Set<string> = new Set(["rojo", "verde", "azul"]);
  let mapa: Map<string, number> = new Map([["clave 1", 1], ["clave 2", 2]]);

  console.log(`Números: ${numeros}`);
  console.log(`Tupla: ${tupla}`);
  console.log(`Conjunto: ${JSON.stringify(Array.from(conjunto))}`);
  console.log("Mapa:");
  mapa.forEach((valor, clave) => {
    console.log(`  ${clave}: ${valor}`);
  });

  // Otra enumeración
  console.log("\n=== Enumeración de Días de la Semana ===");

  /**
   * Representa los días de la semana
   * @enum {number}
   */
  enum DiaSemana {
    Lunes = 1,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
  }

  let diaHoy: DiaSemana = DiaSemana.Martes;
  console.log(`Hoy es: ${DiaSemana[diaHoy]}`);

  // Función para saludar
  console.log("\n=== Función Saludar ===");

  /**
   * @function saludar
   * @description Saluda a una persona por su nombre
   * @param {string} nombre - El nombre de la persona
   * @return {string} Un saludo
   */
  function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
  }

  console.log("\nEn la función saludar, se están utilizando los siguientes tipos de datos:");
  console.log("- Parámetro nombre: Se espera que sea de tipo string, ya que representa el nombre de la persona a saludar.");
  console.log("- Valor de retorno: La función devuelve un valor de tipo string, que es el saludo generado.");
  console.log(saludar("Alice"));

  // Fin de la función saludar
  console.log("\n=== Fin de la Función Saludar ===");
  console.log("\n=== Fin del Programa ===");
}

// Llamamos a la función para ejecutar todos los ejemplos
ejecutar();
