// 1. Saludo
let firstName = prompt("¿Cuál es tu nombre?");
let lastName = prompt("¿Cuál es tu apellido?");
console.log(`Hola ${firstName} ${lastName}, bienvenido a Ada`);

// 2. Heladería
let flavour1 = prompt("¿Cuál es tu sabor de helado favorito?");
let flavour2 = prompt("¿Cuál es tu segundo sabor de helado favorito?");
let flavour3 = prompt("¿Cuál es tu tercer sabor de helado favorito?");
console.log(`Aquí tiene su helado de ${flavour1}, ${flavour2}, y ${flavour3}`);

//3. Datos personales
let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");
let age = prompt("¿Cuál es tu edad?");
let nacionality = prompt("¿Cuál es tu nacionalidad?");
let idDocument = prompt("¿Cuál es tu DNI?");
let dataList = [];
dataList.push(nombre);
dataList.push(apellido);
dataList.push(age);
dataList.push(nacionality);
dataList.push(idDocument);
console.log(`Nuevo usuario registrado: ${dataList}`);

//4. Lista de repodroducción
let nombreLista = [prompt("¿Qué nombre quieres poner a tu lista?")];
let cancion1 = prompt("Añade tu primera canción");
let cancion2 = prompt("Añade tu segunda canción");
let cancion3 = prompt("Añade tu tercera canción");
console.log(
  `Se ha creado la playlist ${nombreLista} con las canciones ${cancion1}, ${cancion2}, ${cancion3}`,
);

//5. Dirección completa
let street = prompt("¿Cuál es tu calle?");
let number = prompt("¿Cuál es tu número?");
let department = prompt("¿Cuál es tu piso?");
let zp = prompt("¿Cuál es tu código postal?");
let city = prompt("¿Cuál es tu ciudad?");
let country = prompt("¿Cuál es tu país?");
console.log(
  `La dirección que ha introducido es: ${street}, ${number}, ${department}, ${zp}, ${city}, ${country}`,
);

//6. Meses por día
let meses30dias = ["Abril", "Junio", "Septiembre", "Noviembre"];
let meses31dias = [
  "Enero",
  "Marzo",
  "Mayo",
  "Julio",
  "Agosto",
  "Octubre",
  "Diciembre",
];
let meses28dias = ["Febrero"];
console.log(`Los meses que tienen 31 días son: ${meses31dias}`);
console.log(`Los meses que tienen 30 días son: ${meses30dias}`);
console.log(`Los meses que tienen 28 días son: ${meses28dias}`);

//7. Miembros de la familia
let familia = ["Juan", "Pepe", "Maria", "Gabriela"];
console.log(`Los miembros de la familia son: ${familia}`);

//8. Listas de gustos
let peliculasFavoritas = ["Lobo", "Terminator", "Titanic", "Gremlins"];
let colores = ["Rojo", "Blanco", "Negro", "Azul"];
let comidas = ["Cocido", "Paella", "Torreznos", "Alitas de pollo"];
let libros = ["Harry Potter", "El domador", "El director", "Diario de un skin"];
console.log(
  `Algunas de mis peliculas favoritas son ${peliculasFavoritas}, mis colores favoritos son ${colores}, mis comidas favoritas son ${comidas}, y algunos de mis libros favoritos son ${libros}`,
);

//9. Años perro
let edad = Number(prompt("¿Cuál es tu edad?"));
let edadPerro = edad * 7;
console.log(
  `Tu edad es de ${edad} años y la equivalencia en un perro sería de ${edadPerro} años`,
);

//10. Minutos a segundos
let segundos = Number(
  prompt("¿Cuántos segundos se han marcado en tu crono de la carrera?"),
);
let minutos = Number(
  prompt("¿Cuántos minutos se han marcado en tu crono de la carrera?"),
);
let horas = Number(
  prompt("¿Cuántas horas se han marcado en tu crono de la carrera?"),
);
let minutosAseg = minutos * 60;
let horasAseg = horas * 60 * 60;
let segundosTotales = +segundos + minutosAseg + horasAseg;
console.log(
  `Tu carrera con un tiempo de ${hora} : ${minutos} : ${segundos}, queda con un total de ${segundosTotales} segundos`,
);

//11.Días a segundos
let days = Number(
  prompt(
    "Introduce un número de días y sabremos a cuantos segundos corresponden",
  ),
);
let daysAseg = days * 24 * 60 * 60;
console.log(
  `El resultado de los días introducidos corresponde a ${daysAseg} segundos totales`,
);

//12. Kilometros a millas
let km = Number(
  prompt("¿Cuántos kilómetros has recorrido hoy en tu entrenamiento?"),
);
let millas = km * 0.62;
console.log(
  `Los kilómetros introducidos corresponden a ${millas.toFixed(2)} millas`,
);

//13. Área de un triángulo
let base = Number(prompt("¿Cuál es la base del triángulo en centímetros?"));
let altura = Number(prompt("¿Cuál es la altura del triángulo en centímetros?"));
let area = (base * altura) / 2;
console.log(
  `El área de tu triángulo, siendo la base de ${base} cms y la altura de ${altura} cms, es de ${area.toFixed(2)} cms²`,
);

//14. Perímetro de rectángulo
let ancho = Number(prompt("¿Cuál es el ancho del rectángulo?"));
let alto = Number(prompt("¿Cuál es el alto del rectángulo?"));
let perimetro = (ancho + alto) * 2;
console.log(
  `El perímetro de tu rectángulo, siendo el alto ${alto} cms, y el ancho ${ancho} cms, es de ${perimetro.toFixed(2)} cms²`,
);

//15. Porcentaje

let cantidad = Number(prompt("Introduce tu cantidad:"));
let porcentaje = Number(
  prompt("Introduce el porcentaje a calcular en números enteros:"),
);
let resultado = porcentaje * 0.01 * cantidad;
console.log(
  `El porcentaje obtenido de tus ${porcentaje} % de intereses, sobre tu cantidad de ${cantidad}, es de ${resultado}`,
);

//16. Tiempo de viaje

let distance = Number(
  prompt("¿Cual es la distancia de tu viaje en kilometros?"),
);
let velCaminar = 5;
let velBici = 15;
let velCoche = 110;
let velTren = 250;
let velAvion = 800;
let tiempoCaminando = distance / velCaminar;
let tiempoBici = distance / velBici;
let tiempoCoche = distance / velCoche;
let tiempoTren = distance / velTren;
let tiempoAvion = distance / velAvion;
console.log(
  `Tu distancia de viaje de ${distance} kms, andando tardarías ${tiempoCaminando.toFixed(2)} horas, en bici tardarías ${tiempoBici.toFixed(2)} horas, en coche tardarías ${tiempoCoche.toFixed(2)} horas, en tren tardarías ${tiempoTren.toFixed(2)} horas, y en avión tardarías ${tiempoAvion.toFixed(2)} horas,`,
);

//17. Duración de vuelo
let viajes = []; // Definimos variable de array para introducir datos
let duracionTotal = 0; //Definimos vlaor inicial de duración total del viaje

function Totalviajes() {
  //Inicializamos función para hacer las preguntas correspondientes al usuario
  let lugar = prompt("¿A qué destino vuelas?");
  let tiempo = Number(prompt("¿De cuántas horas es el vuelo?"));

  viajes.push({
    //Aquí, es dónde añadimos los datos del usurio al array "viajes"
    ciudad: lugar, // Le damos la clave ciudad para el valor que haya metido el usuario
    duración: tiempo, // Le damos la clave duración para el valor que haya metido el usuario
  });
  duracionTotal += tiempo; //Con esto, dentro del bloque function, estamos sumando todos los "tiempo" que añada el usuario, a la variable creada al principio de "duracionTotal"
}

for (let v = 0; v < 3; v++) {
  //Para determinar un numero concreto de preguntas al usuario, fuera del bloque de function, iniciamos un bucle porque sino las preguntas serían infinitas
  Totalviajes(); //Llamando a la función que es de lo que se trata el conteo de dichas preguntas
}

console.log(
  "El listado de viajes es: " + viajes,
  `y su duración completa es de ${duracionTotal} horas`,
);

//18. Incremento

let numInicial = 0; // Icializamos sumativa total de aumentos
function aumentar() {
  // Creamos una función con la solicitud al usuario de los valores
  let aumento = Number(prompt("Añade un valor:"));

  numInicial += aumento; // Dentro de la función, es necesario sumar el valor introducido por el usuario a la variable que lleva el total del conteo.
}

for (let i = 0; i < 5; i++) {
  // Fuera de la función, creamos bucle para hacer las iteraciones necesarias sobre el bloque de la función, en este caso "aumentar()"
  aumentar();
}

console.log(
  `El numero total de amentos ha sido de 5 con un valor total de ${numInicial}`,
); //Imprimimos por consola

// 19. Celsius a farenheit
let celsius = Number(
  prompt("Introduce los grados de temperatura en tu ciudad"),
);
let farenheit = celsius * 1.8 + 32;

console.log(
  `El valor de celsius que han indicado es de ${celsius} grados, y la equivalencia en farenheit es de ${farenheit} grados`,
);

//20. Multiplos
let num1 = Number(prompt("Introduce un número:"));
let num2 = Number(prompt("Introduce otro número:"));

if (num1 % num2 === 0) {
  console.log(`El número ${num1} es múltiplo del número ${num2}`);
} else {
  console.log(`El número ${num1} NO es múltiplo del número ${num2}`);
}

//21. Segundos a horas, minutos y segundos

let segundosTotales = Number(
  prompt(
    "Introduce un número de segundos para convertirlos a horas, minutos y segudnos",
  ),
);

let segundosFinales = segundosTotales % 60; //Hayamos el resto del total de los segundos para saber lo que nos sobran
let minutosTotales = (segundosTotales - segundosFinales) / 60; // De los segundos totales, restamos los que nos han quedado finales y lo dividimos para saber los minutos
let minutosFinales = minutosTotales % 60; // Buscamos el resto en los minutos
let horas = (minutosTotales - minutosFinales) / 60; // Mismo proceso que a la hora de buscar los minutos y convertirlos en horas

console.log(
  `${segundosTotales} segundos equivalen a ${horas} horas, ${minutosFinales} minutos, y ${segundosFinales} segundos`,
);

//22. Cantidad de caracteres
let text = prompt("Introduce un texto:");
console.log(` El texto ${text}, tiene ${text.length} caractéres`);

//23. Días de vacaciones
let añosTrab = Number(prompt("¿Cuántos años llevas trabajando en la empresa?"));
let masDetres = 3;

if (añosTrab <= 3) {
  console.log(`Con ${añosTrab} te corresponden 15 días de vacaciones`);
} else {
  let diasAdicVacaciones = (añosTrab - masDetres) * 2;
  let diasFinalesVacaciones = 15 + diasAdicVacaciones;
  console.log(
    `Teniendo ${añosTrab} años trabajados, te corresponden ${diasFinalesVacaciones} días de vacaciones al año`,
  );
}

//24. Cantidad de huéspedes
let habPara2 = Number(
  prompt("¿Cuántas habitaciones hay para dos personas en el hotel?"),
);
let habPara3 = Number(
  prompt("¿Cuántas habitaciones hay para tres personas en el hotel?"),
);
let habPara4 = Number(
  prompt("¿Cuántas habitaciones hay para cuatro personas en el hotel?"),
);

let totalHuespedes2 = habPara2 * 2;
let totalHuespedes3 = habPara3 * 3;
let totalHuespedes4 = habPara4 * 4;

let paxTotales = totalHuespedes2 + totalHuespedes3 + totalHuespedes4;

console.log(
  `El hotel dispone de ${habPara2} habitaciones para 2 pax, ${habPara3} habitaciones para 3 pax, ${habPara4} habitaciones para 4 pax, con lo cual, lleno puede albergar ${paxTotales} huéspedes`,
);

//25. Calculador de gastos

let dineroDisponible = Number(prompt("¿De cuánto dinero dispones?"));
let listadoServicios = [];
let costeTotalServ = 0;

function servicios() {
  let serv = prompt("¿Qué servicio has contratado?");
  let coste = Number(prompt("¿Cuánto te ha costado?"));

  listadoServicios.push({
    servicio: serv,
    importe: coste,
  });
  costeTotalServ += coste;
}

servicios();

for (let s = 2; s > 0; s--) {
  alert(`Te quedan por añadir ${s} servicio/s`);
  servicios();
}

let dineroSobrante = dineroDisponible - costeTotalServ;

console.log(
  "Tus servicios contratados y sus costes son: ",
  listadoServicios,
  `siendo el coste total ${costeTotalServ}. Te quedan ${dineroSobrante}`,
);

//26: Orden de compras
let prod1 = 35;
let prod2 = 20;
let prod3 = 42;
let listadoProductos = [];

let numArticulos1 = Number(
  prompt(`¿Cuántas unidades deseas comprar del primer artículo?`),
);
let cuotas1 = Number(
  prompt(`¿Cuántas cuotas quieres para el producto ${prod1}?`),
);
let valorTotal1 = numArticulos1 * prod1;
let costeCuota1 = valorTotal1 / cuotas1;

let numArticulos2 = Number(
  prompt(`¿Cuántas unidades deseas comprar del segundo artículo`),
);
let cuotas2 = Number(
  prompt(`¿Cuántas cuotas quieres para el producto ${prod2}?`),
);
let valorTotal2 = numArticulos2 * prod2;
let costeCuota2 = valorTotal2 / cuotas2;

let numArticulos3 = Number(
  prompt(`¿Cuántas unidades deseas comprar del tercero?`),
);
let cuotas3 = Number(
  prompt(`¿Cuántas cuotas quieres para el producto ${prod3}?`),
);
let valorTotal3 = numArticulos3 * prod3;
let costeCuota3 = valorTotal3 / cuotas3;

console.log(
  `Del producto1 se han comprado ${numArticulos1} con coste total de ${valorTotal1}, con ${cuotas1} cuotas y coste por cuota de ${costeCuota1}. Del producto2 se han comprado ${numArticulos2} con coste total de ${valorTotal2}, con ${cuotas2} cuotas y coste por cuota de ${costeCuota2}. Del producto3 se han comprado ${numArticulos3} con coste total de ${valorTotal3}, con ${cuotas3} cuotas y coste por cuota de ${costeCuota3}.`,
);
