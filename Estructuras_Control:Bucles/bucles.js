//1. Números impares

for (let i = 0; i <= 20; i++) {
  // definimos variable; valor de variable inicializada; condición final de la variable; actuación, donde aumenta valor 1 en cada iteración
  if (i % 2 !== 0) {
    //Si el módulo (resto) es diferente a 0...
    console.log(i); //Imprimir por consola "i"
  }
}

// 2.Playlist
let nombrePlaylist = prompt("Ingresa el nombre de tu playlist"); //Pedimos el nombre para la playlist
let playlist = {
  //Creamos una variable "playlist"...
  nombre: nombrePlaylist, //con el nombre introducido por el usuario...
  canciones: [], //y un array donde se guardarán las canciones.
};

if (nombrePlaylist) {
  //Si hay nombre de playlist introducido...
  playlist.nombre = nombrePlaylist; //Añadimos el nombre a la lista
  console.log(`El nombre de la playlist es ${playlist.nombre}`); //Imprimimos por consola el nombre de la playlist que le hemos dado
} else {
  console.log("No has introducido ningún nombre para la playlist");
}

let canciones = Number(prompt("¿Cuántas canciones quieres añadir?"));

for (canciones; canciones > 0; canciones--) {
  let nombreCancion = prompt("¿Cuál es el nombre de la canción a agregar?");
  playlist.canciones.push(nombreCancion);
  alert(`Quedan por agregar ${canciones - 1} canciones`);
  alert(
    `Actualmente tu lista tiene las siguientes canciones: ${playlist.canciones}`,
  );
}
console.log(
  `Tu lista se llama '${playlist.nombre}' y tus canciones son: ${playlist.canciones}`,
);

//3. Numero mayor o menor
let lista1 = []; // Creamos lista (array) donde se añadirán los números elegidos
let numAñadidos = Number(prompt("¿Cúantos números quieres añadir?")); //Le pedimos cuántos números quiere añadir a la lsita

for (numAñadidos; numAñadidos > 0; numAñadidos--) {
  //Iniciamos bucle: el número de números elegidos; hasta que los números elegidos seán mayor que cero; Restamos 1 a númerosElegidos
  let numElegido = Number(prompt("Elige un número")); //Usuario elige los números tantas veces como números haya indicado.
  lista1.push(numElegido); //Se agregan a la lista.
}
alert(`La lista de números elegidos es: ${lista1}`); //Se muestran todos los números que incluye dicha lista

let mayorOmenor = prompt(
  "¿Deseas buscar el número mayor o el menor?",
)?.toLowerCase(); //Pedimos si quiere que se busque el mayor o el menor
let numeroMayor = lista1[0]; //Iniciamos varibale, en este caso para el número mayor, que asignamos el primer valor de la lista.
let numeroMenor = lista1[0]; //Iniciamos varibale, en este caso para el número menor, que asignamos el primer valor de la lista.

switch (
  mayorOmenor //Iniciamos switch para comparar elecciónes
) {
  case "menor": //Si elige 'menor'...
    for (let i = 1; i < lista1.length; i++) {
      //Bucle donde i vale 1 en la posición de la lista, ya que para empezar a comparar, la posición 0 la hemos asignado a la variable; Si es menor qu la siguiente posición se la asignamos como valor nuevo a la variable; Se sigue buscando la siguiente posición
      if (lista1[i] < numeroMenor) {
        numeroMenor = lista1[i]; //Si el valor actual de la lista, es menor que la variable actual "numeroMenor", esa variable será ahora actualizada al número menor sacado.
      }
    }
    alert(`El número menor de la lista es: ${numeroMenor}`);
    break;

  case "mayor":
    for (let y = 1; y < lista1.length; y++) {
      if (lista1[y] > numeroMayor) {
        numeroMayor = lista1[y];
      }
    } //Mismo caso que el bucle menor pero para sacar el mayor
    alert(`El número mayor de la lista es: ${numeroMayor}`);
    break;

  default:
    alert("El valor introducido no es válido");
}

//4. Factorial
let numSolicitado = Number(prompt("Ingresa un número"));
let factorial = 1;

for (let i = numSolicitado; i >= 1; i--) {
  factorial = factorial * i;
}

console.log(`El factorial de ${numSolicitado} es ${factorial}`);

//5. Carrera
let vueltas = prompt("¿Cuántas vueltas tiene que dar el deportista?");
let listaTiempos = [];
let SumaTiempos = 0;

for (let x = 1; x <= vueltas; x++) {
  let tiempoVuelta = Number(prompt(`¿Cuánto ha tardado en esta vuelta?`));
  listaTiempos.push(tiempoVuelta);
  SumaTiempos = SumaTiempos + tiempoVuelta;
}

let promedio = SumaTiempos / vueltas;

console.log(
  `Las vueltas que ha dado el deportista son ${vueltas} con los siguientes tiempos: ${listaTiempos}. Su tiempo promedio es de ${promedio.toFixed(2)} segundos por vuelta.`,
);

//6. Piedra, papel, tijera II
let numeroDePartidas = Number(
  prompt(
    "Bienvenido/a a piedra papel o tijera. ¿Cúantas partidas deseas jugar?",
  ),
);

let jugadaMaquina = "";
let puntaje = {
  Usuario: 0,
  Ordenador: 0,
};

for (let i = 1; i <= numeroDePartidas; i++) {
  alert(`Ronda ${i} de ${numeroDePartidas}`);
  let jugador = prompt("Haz tu elección:");

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
    alert(
      `¡Ganaste! ${jugador} vence a ${jugadaMaquina}. Has ganado esta ronda.`,
    );
    puntaje.Usuario++;
  } else {
    alert(
      `¡Perdiste! ${jugadaMaquina} vence a ${jugador}. Has perdido esta ronda.`,
    );
    puntaje.Ordenador++;
  }
  alert(
    `Puntaje: ${puntaje.Usuario}(usuario) - ${puntaje.Ordenador}(Ordenador)`,
  );
}

if (puntaje.Usuario < puntaje.Ordenador) {
  alert(
    `El ordenador ha ganado la partida por ${puntaje.Ordenador} a ${puntaje.Usuario}`,
  );
} else if (puntaje.Ordenador < puntaje.Usuario) {
  alert(
    `El usuario ha ganado la partida por ${puntaje.Usuario} a ${puntaje.Ordenador}`,
  );
} else if (puntaje.Ordenador === puntaje.Usuario) {
  alert("Ha habido un empate a puntos.");
}

//7. Patrón
let base = Number(
  prompt("Indica cuantos asteriscos quieres en la base del triángulo"),
);

for (let l = 1; l <= base; l++) {
  //Necesitamos un bucle anidado donde...
  let lineas = ""; //Creamos un campo en el que el bucle interno va a escribir los *.

  for (let a = 1; a <= l; a++) {
    //Aquí es cuando los asteriscos se irán pintando según le marque el número de asteriscos máximos que habrá en la base y que el usuario ha introducido.
    lineas = lineas + "*";
  }
  console.log(lineas);
}

//8. Multiples intentos

let user = "gizmodsg";
let pass = "gizmo89*";
let numeroIntentos = 3;

let userInput = prompt("Introduce el usuario");
let passInput = prompt("Introduce la contraseña");

while (userInput !== user && passInput !== pass && numeroIntentos > 1) {
  numeroIntentos--;

  alert(
    `Error en usuario y/o contraseña. Te quedan ${numeroIntentos} intentos.`,
  );
  userInput = prompt("Introduce el usuario");
  passInput = prompt("Introduce la contraseña");
}

if (userInput === user && passInput === pass) {
  alert("Usuario y contraseña correctas. Bienvenido");
} else {
  alert("Cuenta bloqueada. Ha llegado al límite de intentos.");
}

// 9. Cara o cruz

let nPartidas = Number(
  prompt(
    "Bienvenido al juego de Cara o Cruz. Introduce cuantas partidas quieres jugar",
  ),
);
let caraOcruz = prompt(
  'Intruduce tu elección. Si quieres dejar de jugar escribe "salir"',
)?.toLowerCase();
let tiradasAcertadas = 0;

while ((caraOcruz === "cara" || caraOcruz === "cruz") && nPartidas > 0) {
  let vueloMoneda = Math.floor(Math.random() * 2);
  if (vueloMoneda === 0) {
    vueloMoneda = "cara";
    alert(`La moneda ha sacado ${vueloMoneda}`);
    if (vueloMoneda === caraOcruz) {
      tiradasAcertadas++;
      alert(`Llevas ${tiradasAcertadas} aciertos consecutivos.`);
    } else {
      tiradasAcertadas = 0;
      alert(`Te has quedado con ${tiradasAcertadas} aciertos.`);
    }
  } else {
    vueloMoneda = "cruz";
    alert(`La moneda ha sacado ${vueloMoneda}`);
    if (vueloMoneda === caraOcruz) {
      tiradasAcertadas++;
      alert(`Llevas ${tiradasAcertadas} aciertos consecutivos.`);
    } else {
      tiradasAcertadas = 0;
      alert(`Tienes ${tiradasAcertadas} aciertos.`);
    }
  }
  nPartidas--;
  if (nPartidas > 0) {
    caraOcruz = prompt(
      'Intruduce tu elección. Si quieres dejar de jugar escribe "salir"',
    )?.toLowerCase();
  }
}

if (caraOcruz === "salir") {
  alert(
    `Tu número de aciertos seguidos es de ${tiradasAcertadas}. Hasta pronto.`,
  );
} else {
  alert(`La partida ha terminado. Tienes ${tiradasAcertadas} aciertos.`);
}

//10. Mayor o menor

let nAzar = Math.floor(Math.random() * 10) + 1;
let adivina = Number(
  prompt("Adivina el número que elige el ordenador entre 1 y 10"),
);
let intentos = 1;

while (adivina !== nAzar) {
  alert(`El número ${adivina} no es el correcto`);
  intentos++;
  if (nAzar > adivina) {
    alert("El número secreto es mayor");
  } else {
    alert("El número secreto es menor");
  }

  adivina = Number(prompt("Prueba otra vez. Adivina el número entre 1 y 10"));
}

alert(
  `¡Enhorabuena! El número al azar era ${nAzar} y lo has acertado con ${intentos} intentos`,
);
