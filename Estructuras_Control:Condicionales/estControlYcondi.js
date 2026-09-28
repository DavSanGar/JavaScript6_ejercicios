// 1. Número par o impar
let numero = Number(prompt("Introduce un número"));

if (numero % 2 === 0) {
  alert(`El número ${numero} es un número par`);
} else {
  alert(`El número ${numero} es un número impar`);
}

//2. Día del mes
let meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
let mes = "";

while (!meses.includes(mes)) {
  //Iniciamos el bucle "mientras": El bucle siempre buscará "true" para continuar. Si se escribe el mes correctamente, seguirá, y no queremos eso, sino lo contrario. por eso indicamos "!" negación. (mientras NO haya un mes incluido en la lista, seguimos.)
  mes = prompt("Indica un mes y veremos cuantos días tiene")?.toLowerCase(); // Dentro del bucle, preguntamos al usuario por el mes.

  if (!meses.includes(mes)) {
    // Si el mes que has dado, no está en la lista de meses...
    alert("Ese mes no existe. Vuelve a escribirlo."); // ... mensaje de alerta.
  }
}

//En este momento es cuando, al recibir un nombre de mes correcto, entra en el condicional if y verifica meses para determinar la respuesta.
if (
  mes === "enero" ||
  mes === "marzo" ||
  mes === "mayo" ||
  mes === "julio" ||
  mes === "agosto" ||
  mes === "octubre" ||
  mes === "diciembre"
) {
  alert(`El mes ${mes} tiene 31 días`);
} else if (
  mes === "abril" ||
  mes === "junio" ||
  mes === "septiembre" ||
  mes === "noviembre"
) {
  alert(`El mes ${mes} tiene 30 días`);
} else if (mes === "febrero") {
  alert(`El mes ${mes} tiene 28 días o 29 si es año bisiesto`);
}

//3. Cambio de contraseña
let contraseña = "123456";
let preg1 = "firu";
let preg2 = "madrid";
let preg3 = "azul";
let contador = 0;

preg1 = prompt("¿Cómo se llama tu mascota?")?.toLowerCase();

if (preg1 === "firu") {
  alert("Respuesta correcta.");
  contador++;
} else {
  alert("Respuesta incorrecta.");
}

preg2 = prompt("¿En qué ciudad naciste?")?.toLowerCase();

if (preg2 === "madrid") {
  alert("Respuesta correcta.");
  contador++;
} else {
  alert("Respuesta incorrecta.");
}

preg3 = prompt("¿Cuál es tu color favorito?")?.toLowerCase();

if (preg3 === "azul") {
  alert("Respuesta correcta.");
  contador++;
} else {
  alert("Respuesta incorrecta.");
}

if (contador != 3) {
  alert("¡No puedes cambiar la contraseña!");
  console.log(
    `'${contraseña}' sigue siendo la contraseña ya que no ha sido posible cambiarla.`,
  );
} else if (contador === 3) {
  alert("Puedes cambiar la contraseña");
  contraseña = prompt("Escribe la nueva contraseña");
  console.log(`Los caracteres '${contraseña}' es la nueva contraseña.`);
}

//4. Examen aprobado
let nota = Number(prompt("¿Cuál ha sido tu nota?"));

if (nota >= 7) {
  alert("Has aprobado el examen");
} else if (nota >= 4) {
  alert("Deber recuperar");
} else if (nota < 4) {
  alert("Estás suspendido");
}

//5. Grupo de letras
let letra = prompt("Introduce una letra")?.toLowerCase();
let grupoA = ["a", "e", "i", "o", "u"];
let grupoB = ["b", "c", "d", "f", "g"];
let grupoC = ["h", "j", "k", "l", "m"];
let grupoD = ["n", "p", "q", "r"];
let grupoE = ["s", "t", "v", "w", "x", "y", "z"];

if (grupoA.includes(letra)) {
  alert(`La letra '${letra}' corresponde al grupo A`);
} else if (grupoB.includes(letra)) {
  alert(`La letra '${letra}' corresponde al grupo B`);
} else if (grupoC.includes(letra)) {
  alert(`La letra '${letra}' corresponde al grupo C`);
} else if (grupoD.includes(letra)) {
  alert(`La letra '${letra}' corresponde al grupo D`);
} else {
  alert(`La letra '${letra}' corresponde al grupo E`);
}

//6. Sandwich
let tipoPan = ["blanco", "negro", "integral"];
let verduras = ["tomate", "lechuga", "pimiento"];
let toppins = ["cebolla", "aceituna", "pepino"];
let salsas = ["mostaza", "mayonesa", "picante"];
let bebida = ["cola", "pepsi", "sprite"];
let pan = "";
let ingr1 = "";
let ingr2 = "";
let ader = "";
let drink = "";

while (!tipoPan.includes(pan)) {
  pan = prompt("¿Qué tipo de pan deseas?")?.toLowerCase();

  if (!tipoPan.includes(pan)) {
    alert(
      "Ese tipo de pan no está en nuestro establecimiento. Escríbalo de nuevo.",
    );
  }
}

while (!verduras.includes(ingr1)) {
  ingr1 = prompt("¿Qué ingrediente n1 prefieres?")?.toLowerCase();

  if (!verduras.includes(ingr1)) {
    alert("Ese ingrediente no está en nuestra lista. Escríbalo de nuevo.");
  }
}

while (!toppins.includes(ingr2)) {
  ingr2 = prompt("¿Qué ingrediente n2 prefieres?")?.toLowerCase();

  if (!toppins.includes(ingr2)) {
    alert("Ese ingrediente no está en nuestra lista. Escríbalo de nuevo.");
  }
}

while (!salsas.includes(ader)) {
  ader = prompt("¿Qué ingrediente de aderezo prefieres?")?.toLowerCase();

  if (!salsas.includes(ader)) {
    alert("Ese ingrediente no está en nuestra lista. Escríbalo de nuevo.");
  }
}

while (!bebida.includes(drink)) {
  drink = prompt("¿Qué bebida prefieres?")?.toLowerCase();

  if (!bebida.includes(drink)) {
    alert("No disponemos de esa bebida. Indique otra.");
  }
}

console.log(
  `Tu sandwich diseñado lleva pan ${pan}, ${ingr1}, ${ingr2} y ${ader}. Tu bebida es ${drink}`,
);

//7. Piedra, papel o tijera

let jugador = prompt(
  "Bienvenido al juego de piedra, papel o tijera. Haz tu elección",
);
let jugadaMaquina = "";

let maquina = Math.floor(Math.random() * 3);
if (maquina === 0) {
  jugadaMaquina = "piedra";
  alert(`Mi elección es ${jugadaMaquina}`);
} else if (maquina === 1) {
  jugadaMaquina = "papel";
  alert(`Mi elección es ${jugadaMaquina}`);
} else if (maquina === 2) {
  jugadaMaquina = "tijera";
  alert(`Mi elección es ${jugadaMaquina}`);
}

if (jugador === jugadaMaquina) {
  alert(`¡Empate! Ambos habéis elegido ${jugador}.`);
} else if (
  (jugador === "piedra" && jugadaMaquina === "tijera") ||
  (jugador === "papel" && jugadaMaquina === "piedra") ||
  (jugador === "tijera" && jugadaMaquina === "papel")
) {
  alert(`¡Ganaste! ${jugador} vence a ${jugadaMaquina}.`);
} else {
  alert(`¡Perdiste! ${jugadaMaquina} vence a ${jugador}.`);
}

//8. Simón dice
let colores = ["rojo", "azul", "verde", "amarillo"];
let preguntasMaquina = 5;
let preguntasUsu = 5;
let secuenciaMaquina = [];
let secuenciaUsu = [];

while (preguntasMaquina > 0) {
  let eleccionMaquina = Math.floor(Math.random() * 5);
  if (eleccionMaquina === 0) {
    secuenciaMaquina.push("rojo");
  } else if (eleccionMaquina === 1) {
    secuenciaMaquina.push("azul");
  } else if (eleccionMaquina === 2) {
    secuenciaMaquina.push("verde");
  } else if (eleccionMaquina === 3) {
    secuenciaMaquina.push("amarillo");
  } else if (eleccionMaquina === 4) {
    secuenciaMaquina.push("rojo");
  }
  preguntasMaquina--;
}
alert(`Simón dice: ${secuenciaMaquina}`);

while (preguntasUsu > 0) {
  let usu = prompt("Menciona el color")?.toLowerCase();
  secuenciaUsu.push(usu);
  preguntasUsu--;
}

alert(`Tu lista ha sido ${secuenciaUsu}`);

if (secuenciaMaquina.join() === secuenciaUsu.join()) {
  alert("¡Enhorabuena! Has hecho la misma secuencia.");
} else {
  alert("¡Has fallado! No es la misma secuencia.");
}

//9. Meses del año

let numUsu = Number(prompt("Escribe un número"));

switch (numUsu) {
  case 1:
    numUsu = "Enero";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 2:
    numUsu = "Febrero";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 3:
    numUsu = "Marzo";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 4:
    numUsu = "Abril";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 5:
    numUsu = "Mayo";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 6:
    numUsu = "Junio";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 7:
    numUsu = "Julio";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 8:
    numUsu = "Agosto";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 9:
    numUsu = "Septiembre";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 10:
    numUsu = "Ocrtubre";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 11:
    numUsu = "Noviembre";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  case 12:
    numUsu = "Diciembre";
    console.log(`El número introducido corresponde a ${numUsu}`);
    break;

  default:
    console.log("El valor introducido no es válido.");
}

//10. Estaciones del año
let estacion = prompt("Menciona una estación del año")?.toLowerCase();

switch (estacion) {
  case "primavera":
    console.log(
      `La ${estacion} empieza el 21 de Marzo y termina el 20 de Junio`,
    );
    break;

  case "verano":
    console.log(
      `El ${estacion} empieza el 21 de Junio y termina el 20 de Septiembre`,
    );
    break;

  case "otoño":
    console.log(
      `El ${estacion} empieza el 21 de Septiembre y termina el 20 de Diciembre`,
    );
    break;

  case "invierno":
    console.log(
      `El ${estacion} empieza el 21 de Diciembre y termina el 20 de Marzo`,
    );
    break;

  default:
    console.log("Ese valor no corresponde con ninguna estación");
}

//11. Calculadora
let operacion = prompt(
  "¿Qué tipo de operación matemática quieres hacer?",
)?.toLowerCase();
let num1 = Number(prompt("Elige el primer número"));
let num2 = Number(prompt("Elige el segundo número"));
let resultado = 0;

switch (operacion) {
  case "multiplicar":
    resultado = num1 * num2;
    console.log(
      `La operación que has elegido es la de ${operacion} y el resultado entre ${num1} y ${num2} es ${resultado}`,
    );
    break;

  case "dividir":
    resultado = num1 / num2;
    console.log(
      `La operación que has elegido es la de ${operacion} y el resultado entre ${num1} y ${num2} es ${resultado}`,
    );
    break;

  case "sumar":
    resultado = num1 + num2;
    console.log(
      `La operación que has elegido es la de ${operacion} y el resultado entre ${num1} y ${num2} es ${resultado}`,
    );
    break;

  case "restar":
    resultado = num1 - num2;<
    console.log(
      `La operación que has elegido es la de ${operacion} y el resultado entre ${num1} y ${num2} es ${resultado}`,
    );
    break;

  default:
    console.log("Esa operación no existe");
}

//12. Televisor
let tele = prompt("¿Quieres encender la tv? Si/No")?.toLowerCase();
let canalActual = 5;
let volumenActual = 18;
let seleccionUsu = 0;
let cambioCanal = 0;
let canalSiguiente = 0;
let canalAnterior = 0;
let subirVolumen = 0;
let bajarVolumen = 0;
let mute = 0;

if (tele === 'no'){
  alert('El programa ha terminado')
} else if(tele === 'si'){
  alert(`LA TV está encendida con el canal ${canalActual} y con el nivel del volumen al ${volumenActual}`);
  seleccionUsu = Number(prompt('Elije qué quieres hacer:\n\n' +
      "CAMBIAR CANAL (1)\n" +
      "CANAL SIGUIENTE (2)\n" +
      "CANAL ANTERIOR (3)\n" +
      "SUBIR VOLUMEN (4)\n" +
      "BAJAR VOLUMEN (5)\n" +
      "MUTEAR (6)"));

      switch(seleccionUsu){
        case 1:
        cambioCanal= Number(prompt('Introduce el canal'));
        if(cambioCanal >=0 && cambioCanal <= 99){
          alert(`Su TV ha cambiado el canal al dial ${cambioCanal}`)
        } else if(cambioCanal >99){
          alert('Ese canal no está disponible.')
        }
        break;
        
        case 2:
        canalSiguiente = canalActual+1;
        alert(`Su TV ahora está en el dia ${canalSiguiente}`)
        break;

        case 3:
          canalAnterior = canalActual-1;
        alert(`Su TV ahora está en el dia ${canalAnterior}`)
        break;

        case 4:
          subirVolumen = volumenActual + 5;
        alert(`El volumen de su TV está ahora en el valor ${subirVolumen} `)
        break;

        case 5:
          bajarVolumen = volumenActual - 5;
        alert(`El volumen de su TV está ahora en el valor ${bajarVolumen} `)
        break;

        case 6:
          volumenActual = mute
        alert(`El volumen actual de su TV es de ${mute}`)
        break;

        default:
          alert('El valor introducido no corresponde con ninguna acción.')
      }
}

