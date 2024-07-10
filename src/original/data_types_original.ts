/**
 * @fileoverview Este archivo contiene ejemplos de uso de diferentes tipos en TypeScript,
 * incluyendo tipos primitivos, enumeraciones, tipos any y unknown, tipos de unión e intersección,
 * y tipos de colección como arrays, tuplas, sets y maps.
 * 
 * @license LICENSE.md
 * @autor @shida17-fullstack
 */
// Encapsulamos todo en una función 
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
   * @enum Representa los niveles de acceso para usuarios
   */
  enum NivelAcceso {
    Admin,
    Usuario,
    Invitado
  }
  let nivel: NivelAcceso = NivelAcceso.Usuario;
  console.log(`Nivel de Acceso: ${NivelAcceso[nivel]}`);

  // Tipo any y unknown
  console.log("\n=== Tipos any ===");
  let dato: any = "Hola";
  console.log(`Dato (string): ${dato}`);
  dato = 42;
  console.log(`Dato (number): ${dato}`);

  console.log("\n=== Tipo unknown ===");

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
  console.log("\n=== Tipos de Unión ===");
  type Id = number | string;
  type Persona = {
    nombre: string;
    edad: number;
  };

  let id: Id = "123ABC";
  console.log(`ID (string): ${id}`);
  id = 456;
  console.log(`ID (number): ${id}`);


  console.log("\n=== Tipos de Intersección ===");
  type Empleado = Persona & {
    salario: number;
  };
  let idUsuario: Id = 101;
  let empleado: Empleado = { nombre: "Antonio Sanchez", edad: 30, salario: 50000 };
  
  console.log(`ID de Usuario: ${idUsuario}`);
  console.log(`Empleado: ${JSON.stringify(empleado)}`);

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
  
  console.log(saludar("Alice"));
}
// Llamamos a la función para ejecutar todos los ejemplos
ejecutar();
