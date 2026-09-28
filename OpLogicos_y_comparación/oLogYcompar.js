//1. Número mayo que 100

let num1 = Number(prompt("Ingresa un valor"));
let num2 = Number(prompt("Ingresa un valor"));
let num3 = Number(prompt("Ingresa un valor"));

valorMax = 100;

if (num1 < valorMax) {
  console.log(`El número introducido es ${num1} y es menor que ${valorMax}`);
} else {
  console.log(`El número introducido es ${num1} y es mayor que ${valorMax}`);
}

if (num2 < valorMax) {
  console.log(`El número introducido es ${num2} y es menor que ${valorMax}`);
} else {
  console.log(`El número introducido es ${num2} y es mayor que ${valorMax}`);
}

if (num3 < valorMax) {
  console.log(`El número introducido es ${num3} y es menor que ${valorMax}`);
} else {
  console.log(`El número introducido es ${num3} y es mayor que ${valorMax}`);
}

//2. Número dentro de rango
let valorInf = Number(prompt("Ingresa un número"));
let valorSup = Number(prompt("Ingresa un número"));
let aleatorio = Number(prompt("Ingresa un número"));

if (aleatorio >= valorInf && aleatorio <= valorSup) {
  console.log(`El número ${aleatorio} está dentro del rango de ambos números.`);
} else if (aleatorio < valorInf) {
  console.log(`El número ${aleatorio} está por debajo del número más bajo`);
} else {
  console.log(`El número ${aleatorio} está por encima del número más alto`);
}

//3. Donación de sangre
let tatto = prompt("¿Tienes tatuajes? Contesta si o no:");
let hepatitis = prompt("¿tienes hepatitis? Contesta si o no:");
let aleatorio = prompt("¿tienes anemia? Contesta si o no:");

if (tatto == "si" || hepatitis == "si" || aleatorio == "si") {
  console.log("Usted no puede ser donante de sangre");
} else {
  console.log("Usted sí puede ser donante se sangre");
}

//4. Autenticación
let user = "DavidGizmo";
let pass = "gizmo89-";

let userUsuario = prompt("Introduce el usuario:");
let passUsuario = prompt("Introduce la contraseña:");

if (userUsuario === "DavidGizmo" && passUsuario === "gizmo89-") {
  console.log(
    `El usuario ${userUsuario} y la contraseña ${passUsuario} son correctos. ¡Bienvenido!`,
  );
} else {
  console.log(
    `El usuario ${userUsuario} y la contraseña ${passUsuario} son incorrectos. Acceso denegado`,
  );
}

//5. Mantenimiento
let aceiteCoche = prompt("¿El vehículo tiene aceite? Contesta si o no:");
let aguaCoche = prompt("¿El vehículo tiene agua? Contesta si o no:");
let presionNeumaticos = prompt(
  "¿El vehículo tiene la presión de los neumaticos correcta? Contesta si o no:",
);

if (aceiteCoche == "si" && aguaCoche == "si" && presionNeumaticos == "si") {
  console.log(
    "Los niveles son correctos. No hay que hacer mantenimiento del vehículo.",
  );
} else {
  console.log("Debes hacer el mantenimiento del vehículo. ");
}

//6. Acceso restringido
let socio = prompt("¿Eres socio del club? Responde si o no:")?.toLowerCase();

if (socio === "si") {
  let cuota = prompt(
    "¿Tienes la cuota al corriente de pago? Responde si o no:",
  )?.toLowerCase();
  if (cuota === "si") {
    console.log("Acceso permitido. Bienvenido");
  } else {
    console.log("Acceso denegado. Debes estar al corriente de pago.");
  }
} else {
  let autorizacion = prompt(
    "¿Tienes autorización? Responde si o no:",
  )?.toLowerCase();
  if (autorizacion === "si") {
    console.log("Acceso permitido como invitado. Bienvenido");
  } else {
    console.log("Acceso denegado. Debes conseguir invitación");
  }
}

//7. Cátedra promocionada
let parcial1 = Number(prompt("Indica tu nota en el primer parcial:"));
let parcial2 = Number(prompt("Indica tu nota en el segundo parcial:"));
let parcial3 = Number(prompt("Indica tu nota en el tercer parcial:"));
const minimo = 8;

if (parcial1 < minimo) {
  console.log(
    `En el primer parcial tu nota es de ${parcial1}. No puedes acceder a la cátedra.`,
  );
} else if (parcial2 < minimo) {
  console.log(
    `En el segundo parcial tu nota es de ${parcial2}. No puedes acceder a la cátedra.`,
  );
} else if (parcial3 < minimo) {
  console.log(
    `En el tercer parcial tu nota es de ${parcial3}. No puedes acceder a la cátedra.`,
  );
} else if (parcial1 >= 8 && parcial2 >= 8 && parcial3 >= 8) {
  console.log("¡Felicidades! Puedes acceder a una plaza de la cátedra.");
}

//8. Número más grande (2 numeros)
let numero1 = Number(prompt("Escribe un número"));
let numero2 = Number(prompt("Escribe otro número"));

if (numero1 > numero2) {
  console.log(`El número ${numero1} es mayor que el número ${numero2}`);
} else if (numero1 === numero2) {
  console.log(`El número ${numero1} es igual que el número ${numero2}`);
} else {
  console.log(`El número ${numero1} es menor que el número ${numero2}`);
}

//9. Número más grande (3 números)
let valor1 = Number(prompt("Escribe un número"));
let valor2 = Number(prompt("Escribe un número"));
let valor3 = Number(prompt("Escribe un número"));

if (valor1 === valor2 && valor3 > valor1) {
  console.log(
    `El primer número ${valor1} es igual que el segundo número ${valor2} y además el tercer número ${valor3} es mayor que ambos`,
  );
} else if (valor1 === valor3 && valor2 > valor1) {
  console.log(
    `El primer número ${valor1} es igual que el tercer número ${valor3} y además el segundo número ${valor2} es mayor que ambos`,
  );
} else if (valor2 === valor3 && valor1 > valor2) {
  console.log(
    `El segundo número ${valor2} es igual que el tercer número ${valor3} y además el primer número ${valor1} es mayor que ambos`,
  );
} else if (valor3 === valor1 && valor2 > valor1) {
  console.log(
    `El tercer número ${valor3} es igual al primer número ${valor1} y además el segundo número ${valor2} es mayor que ambos.`,
  );
} else if (valor1 === valor3 && valor2 < valor1) {
  console.log(
    `El primer número ${valor1} es igual al tercer número ${valor3} y el segundo número ${valor2} es menor que ambos`,
  );
} else if (valor1 === valor2 && valor3 < valor1) {
  console.log(
    `El primer número ${valor1} es igual al segundo número ${valor2} y el tercer número ${valor3} es menor que ambos`,
  );
} else if (valor1 > valor2 && valor1 > valor3) {
  console.log(
    `El primer número ${valor1} es mayor que el segundo número ${valor2} y que el tercer número ${valor3}`,
  );
} else if (valor2 > valor1 && valor2 > valor3) {
  console.log(
    `El segundo número ${valor2} es mayor que el primer número ${valor1} y que el tercer número ${valor3}`,
  );
} else if (valor3 > valor1 && valor3 > valor2) {
  console.log(
    `El tercer número ${valor3} es mayor que el primer número ${valor1} y que el segundo número ${valor2}`,
  );
}

//10.Términos y condiciones de uso
let acepto = prompt("¿Acepta los terminos y condiciones? si/no")?.toLowerCase();

if (acepto === "si") {
  alert("Continuando con el proceso...");
} else {
  alert("No se puede continuar el proceso sin aceptar términos y condiciones");
}

//11. Quizz
alert("Bienvenido al cuestionario. Responde con si o no");
aciertos = 0;

let preg1 = prompt("¿El sol es una estrella")?.toLowerCase();

if (preg1 === "si") {
  aciertos++;
}

let preg2 = prompt("¿Existen más de 100 minutos en una hora?")?.toLowerCase();

if (preg2 === "no") {
  aciertos++;
}

let preg3 = prompt("¿JavaScript es lo mismo que Java?")?.toLowerCase();

if (preg3 === "no") {
  aciertos++;
}

if (aciertos === 3) {
  alert("Enhorabuena. Has acertado todas.");
} else {
  alert("Intentalo de nuevo");
}

//12. Autenticacion
let usu = "Davidgizmo";
let contra = "Gizmo89-";

let usuUsuario = prompt("Introduce el usuario:");
let contraUsuario = prompt("Introduce la contraseña:");

if (usuUsuario === "Davidgizmo" && contraUsuario === "Gizmo89-") {
  alert(`El usuario y la contraseña son correctos. ¡Bienvenido!`);
} else {
  alert(`El usuario y/o la contraseña son incorrectos. Acceso denegado`);
}

//13. Juez de gusto
alert("Responde del 0 al 10 las siguientes preguntas");

let q1 = Number(prompt("¿Del 1 al 10, cuánto te gusta que la comida pique?"));
if (q1 >= 0 && q1 <= 3) {
  alert("Tienes paladar de papel, ¡un poco de pimienta ya te hace llorar!");
} else if (q1 >= 4 && q1 <= 6) {
  alert(
    "Te gusta el riesgo controlado, un toque alegre pero sin llamar a los bomberos.",
  );
} else if (q1 >= 7 && q1 <= 9) {
  alert(
    "Eres un valiente. Seguramente llevas un frasco de tabasco en el bolsillo por si acaso.",
  );
} else if ((q1 = 10)) {
  alert("Tus papilas gustativas son de acero inoxidable. ¡Respetos al dragón!");
}

let q2 = Number(prompt("¿Qué nota le das al género de terror y los sustos?"));
if (q2 >= 0 && q2 <= 2) {
  alert(
    "Seguro que duermes con la luz encendida y miras debajo de la cama cada noche.",
  );
} else if (q2 >= 3 && q2 <= 5) {
  alert(
    "Lo intentas, pero acabas viendo la mitad de la película tapándote los ojos con las manos.",
  );
} else if (q2 >= 6 && q2 <= 8) {
  alert(
    "Disfrutas de la adrenalina. Te gusta esa sensación de no querer mirar, pero no poder evitarlo.",
  );
} else if (q2 >= 9) {
  ("Eres el próximo protagonista de una película de posesiones. ¡Nada te asusta!");
}

let q3 = Number(
  prompt("¿Cuánto te gusta levantarte con el primer rayo de sol?"),
);
if (q3 >= 0 && q3 <= 2) {
  alert(
    "Tu peor enemigo es el despertador. Eres un ser nocturno por naturaleza.",
  );
} else if (q3 >= 3 && q3 <= 5) {
  alert(
    "Te levantas porque no hay más remedio, pero hasta el tercer café no eres persona.",
  );
} else if (q3 >= 6 && q3 <= 8) {
  alert(
    "Aprovechas el día. Te gusta la calma de la mañana antes de que todo el mundo empiece a gritar.",
  );
} else if ((q3) => 9) {
  alert(
    "Eres una leyenda urbana. ¿De verdad existe gente que se levanta feliz a las 5:00 a.m.?",
  );
}

let q4 = Number(prompt("Evalúa del 1 al 10 tu amor por la pizza con piña."));
if (q4 <= 1) {
  alert(
    "Eres un purista italiano. Consideras esto un crimen contra la humanidad.",
  );
} else if (q4 >= 2 && q4 <= 4) {
  alert(
    "No la pides nunca, pero si es lo único que hay en la fiesta, te acabas comiendo un trozo.",
  );
} else if (q4 >= 5 && q4 <= 7) {
  alert(
    "El agridulce no te asusta. Es una combinación incomprendida pero aceptable.",
  );
} else if (q4 >= 8) {
  alert(
    "¡Larga vida a la piña! Eres un rebelde gastronómico y no te importa lo que digan.",
  );
}

//14. Calificación
let nota = Number(prompt("¿Qué nota has obtenido entre el 6 y el 10?"));

if (nota === 10) {
  alert("¡Excelente!");
} else if (nota >= 8 && nota <= 9) {
  alert("¡Muy bien!");
} else if (nota >= 6 && nota <= 7) {
  alert("Aprobado");
} else {
  alert("Reprobado");
}
