//1. Saludos

let nombres = prompt("Ingresa varios nombres separados por un espacio:");
let nombresSeparados = nombres.split(" "); // .split() separa por lo que le indiquemos dentro del paréntesis como separa el string. En este caso " "(espacio)
for (i = 0; i < nombresSeparados.length; i++) {
  //i está en la posición 0 del string; mientras que i sea menor que la longitud de la lista; i suma una posición más y va a por el siguiente.
  console.log(`Hola ${nombresSeparados[i]}`); // imprime "Hola"+ cada elemento de la lista siendo cada elemento "i"
}

//2. Menor número
let numeros = prompt("Ingresa una serie de números separados por espacios");
let numerosSeparados = numeros.split(" ").map(Number); //Separación del string por espacio y convertido a números puros con ".map(Number)"

let menor = Math.min(...numerosSeparados); // Math.min busca el número mínimo usando el operador de programación "..." que le pasa la lista indicada a continuación.
console.log(`El menor número es: ${menor}`);

//3. Suma de todos los números
let sumaNumeros = prompt("Ingresa una seríe de números"); //Pedimos número en formato string
let numAsumar = sumaNumeros.split(" ").map(Number); //Dividimos el string con .plit por espacios y los pasamos a número puros con .map(Number)
let sumaTotal = 0;

for (let i = 0; i < numAsumar.length; i++) {
  //Estando i en la posición 0 del array; mientras i (posición en la cadena/array) sea menos que la longitud total; Sumamos una posición.
  sumaTotal = sumaTotal + numAsumar[i]; //La suma total
}
console.log(`La suma total de los números ${numAsumar} es de ${sumaTotal}`);

//4. Contiene elementos

let valores = prompt("Ingresa una seríe de valores en número o texto");
let valorAbuscar = prompt("Ingrese valor a buscar");

if (valores.includes(valorAbuscar)) {
  //Indicamos la cadena completa de string y buscamos con .includes() el elemento que hemos indicado ubicándolo dentro del parentesis.
  console.log(`El elemento '${valorAbuscar}' está en la lista '${valores}'`);
} else {
  console.log(`El elemento '${valorAbuscar}' NO está en la lista '${valores}'`);
}

//5.Encontrar el indice
let cadenaValores = prompt("Introduce una cadena de letras o números"); //Pedimos una cadena de string
let valorRequerido = prompt("¿A qué valor quieres encontrarle su posición?"); //Pedimos saber que elemento quiere encontrar en la lista

let valoresReales = cadenaValores.split(" "); //Separamos la cadena mediante el espacio para concer los valores exactos

let indiceEncontrado = -1; //Iniciamos variable con -1, teniendo en cuenta que si no encuentra un valor que corresponda, se quedé en -1 con lo cual es false.

for (let i = 0; i < valoresReales.length; i++) {
  //Bucle: para i = 0; siendo i menor que la logitud total...; sumamos uno, lo que e slo mismo, miramos el siguiente elemento de la lista
  if (valoresReales[i] === valorRequerido) {
    //Si la posición i en valoresReales es igual a valorRequerido
    indiceEncontrado = i; // el indice encontrado cambia de -1 (false) al indice i, el que corresponda (true)
    break; //Aquí rompemos el bucle y salimos
  }
}

let indiceEncontrado = valoresReales.indexOf(valorRequerido); //Este paso hace lo mismo que el bucle for

if (indiceEncontrado !== -1) {
  //Si el indiceEncontrado es distinto de -1, con lo cual ha entoncrado el valor...
  console.log(
    `El valor ${valorRequerido} está en el índice ${indiceEncontrado}`, //Imprimimos indice en posición
  );
} else {
  //De lo contrario indicamos que no hay ese valor en la cadena.
  console.log(
    `El valor ${valorRequerido} NO está en la cadena ${valoresReales}`,
  );
}

//6.  Sam y Frodo (Uno junto al otro)

let elementos = prompt(
  "Escribe una serie de elementos para saber si están juntos o no",
)?.toLowerCase(); //Pedimos listado de elementos
let elementosJuntos = prompt(
  "escribe los elementos a buscar juntos",
)?.toLowerCase(); //Pedimos elementos a buscar juntos

if (elementos.includes(elementosJuntos)) {
  //usamos  .includes() para buscar en la lista de elementos si estan juntos los elementos a buscar
  console.log(`Los elementos '${elementosJuntos}' están uno junto al otro. `);
} else {
  console.log(`Los elementos '${elementosJuntos}' se encuentran separados`);
}

//7. Frutas
let frutas = prompt("Ingresa las frutas a comprar:"); // Ingresamos string con frutas
let listaFrutas = frutas.split(" "); //Creamos lista de frutas puras separando cada elemento

let manzanas = 0;
let peras = 0;
let melocotones = 0;

for (let i = 0; i < listaFrutas.length; i++) {
  //Iciamos bucle
  if (listaFrutas[i] === "manzana") {
    //Si la posición actual corresponde con el valor...
    manzanas++; //...Sumamos a su variable
  } else if (listaFrutas[i] === "pera") {
    peras++;
  } else if (listaFrutas[i] === "melocoton") {
    melocotones++;
  }
}

console.log(
  `Has comprado ${manzanas} manzanas, ${peras} peras y ${melocotones} melocotones`,
);

//8. Comida monos

let monosYbananas = prompt("Introduce cuantos monos y bananas hay en la jaula"); //Pedimos elementos
let comida = Number(prompt("¿Cuantas bananas come cada mono?")); //Pedimos cantidad de comida por cada mono

let listaMyB = monosYbananas.split(" "); //Creamos lista de elementos puros

let mono = 0;
let banana = 0;

for (let i = 0; i < listaMyB.length; i++) {
  //Bucle: recorremos el bucle elemento a elemento
  if (listaMyB[i] === "mono") {
    //Si i es igual a mono...
    mono++; //Sumamos uno a la lista
  } else if (listaMyB[i] === "banana") {
    //Si i es igual a banana
    banana++; //Sumamos banana a la lista
  }
}
console.log(
  `Hay ${mono} monos y ${banana} bananas en la jaula y deben comer ${comida} bananas cada uno`,
);

let comidaNecesaria = comida * mono; //Ceamos una variable para determinar la comida necesaria por mono

if (comidaNecesaria === banana) {
  //Sacamos las condiciones
  console.log(`Los monos pueden comer su ración de bananas`);
} else if (comidaNecesaria > banana) {
  console.log(`Los monos no pueden comer su ración de bananas`);
} else if (comidaNecesaria < banana) {
  console.log(`Los monos pueden comer su ración de bananas y además sobran.`);
}

//9. Perros y gatos

let animales = prompt("Introduce los animales de la habitación"); //Pedimos animales en la hab
let listaAnimales = animales.split(" "); //Creamos lista pura sin espacios

let totalGatos = 0;
let totalPerros = 0;

for (let i = 0; i < listaAnimales.length; i++) {
  //Bucle y sumamos cada animal a su total
  if (listaAnimales[i] === "gato") {
    totalGatos++;
  } else if (listaAnimales[i] === "perro") {
    totalPerros++;
  }
}

let perros = listaAnimales.filter((elemento) => elemento === "perro"); //Filtramos por el animal con .filter()
let gatos = listaAnimales.filter((elemento) => elemento === "gato"); //Filtramos por el animal con .filter()

let animalesOrdenados = [...perros, ...gatos]; //Creamos una lista/array con los perros y gatos juntos

console.log(`En total hay ${totalGatos} gatos y ${totalPerros} perros`);
console.log(
  `La lista de animales desordenada era '${animales}' y ahora queda asi: '${animalesOrdenados}'`,
);

//12. Germinación

let floresYplantines = prompt(
  "Ingrese secuencia de flores y plantines",
)?.toLowerCase();
let listafp = floresYplantines.split(" "); //dejamos una lista pura de elementos
let florActual = ""; //Creamos variable para definir el valro de la flor

console.log(`La lista inicial es: '${listafp}'`);

if (listafp[0] === "plantin") {
  //Si el elemento primero de la lista es igual a 'plantin'...
  console.log(
    "El primer elemento de la lista es un plantin y no se puede continuar.",
  ); // ...El programa da error y termina
} else {
  //Sino...
  for (let i = 0; i < listafp.length; i++) {
    //Bucle buscado elemento por elemento
    if (listafp[i] !== "plantin") {
      //Si ese elemento es distinto de 'plantin'(lo que quiere decir que es una flor)...
      florActual = listafp[i]; //Asignamos el nombre de la flor a la variable 'florActual'
    } else if (listafp[i] === "plantin") {
      //Si por el contrario, el elemento actual del bucle es igual a 'plantin'...
      listafp[i] = florActual; // ...a ese elemento le damos el valor de la variable 'florActual'
    }
  }
  let resultadoFinal = listafp.join(" "); //Después de recorrer la lista en el bucle, es cuando JS lee de nuevo la lista y la reescribe aqui, no antes del bucle porque sino saldría la misma lista.
  console.log(`Las flores han germinado: '${resultadoFinal}'`);
}

//14. Tragamonedas
let ingresaMonedas = prompt("Introduce las monedas");
let listaMonedas = ingresaMonedas.split(" "); // Creamos array de elementos iontroducidos por usuario
let ingresaMonedas5 = listaMonedas.slice(0, 5); //Rebanamos el array para quedarnos con los 5 primeros elementos. (0,1,2,3,4);

let combinacionG = ["estrella", "estrella", "estrella", "estrella", "estrella"];

let textCombinacionG = combinacionG.join(" ");
let textIngresaMonedas5 = ingresaMonedas5.join(" ");

if (textIngresaMonedas5 === textCombinacionG) {
  console.log("¡Enhorabuena! Has ganado. La combinación es la correcta.");
} else if (textIngresaMonedas5 !== textCombinacionG) {
  console.log("¡Has perdido! La combinación es la incorrecta.");
}

//16. Multiplicar número individuales
let numerosDeEntrada = prompt("Introduce una serie de números");
let listaNumeros = numerosDeEntrada.split(" ");
let multiplicador = Number(
  prompt("¿Por qué número quieres multiplicar los anteriormente introducidos?"),
);
let listaNumerosMultiplicados = [];

for (let i = 0; i < listaNumeros.length; i++) {
  let elementoMultiplicado = listaNumeros[i] * multiplicador;
  listaNumerosMultiplicados.push(elementoMultiplicado);
}

let valoresFinales = listaNumerosMultiplicados.join(" ");

console.log(
  `La lista inicial, multiplicando cada valor por ${multiplicador}, es la siguiente: '${valoresFinales}'`,
);

//18. Arrays iguales
let array1 = prompt("Ingresa una lista de números");
let listaArray1 = array1.split(" ");
let array2 = prompt("Ingresa otra lista de números");
let listaArray2 = array2.split(" ");

let textArray1 = listaArray1.join(" ");
let textArray2 = listaArray2.join(" ");

if (textArray1 === textArray2) {
  console.log("Ambas listas son iguales");
} else {
  console.log("Hay errores. Las listas no son idénticas");
}

//20. Piedra, Papel, Tijera III

let nombre1 = prompt("Introduce tu nombre");
let jugadaNombre1 = prompt(`Ingresa tu jugada, ${nombre1}`);
let arrayNombre1 = jugadaNombre1.split(" ");
let puntos1 = 0;

let nombre2 = prompt("Introduce tu nombre");
let jugadaNombre2 = prompt(`Ingresa tu jugada, ${nombre2}`);
let arrayNombre2 = jugadaNombre2.split(" ");
let puntos2 = 0;

for (i = 0; i < arrayNombre1.length; i++) {
  for (i = 0; i < arrayNombre2.length; i++) {
    if (arrayNombre1[i] === arrayNombre2[i]) {
      alert(
        `Empate. El jugador ${nombre1} ha sacado ${arrayNombre1[i]} y el jugador ${nombre2} ha sacado ${arrayNombre2[i]}`,
      );
    } else if (
      (arrayNombre1[i] === "piedra" && arrayNombre2[i] === "tijera") ||
      (arrayNombre1[i] === "papel" && arrayNombre2[i] === "piedra") ||
      (arrayNombre1[i] === "tijera" && arrayNombre2[i] === "papel")
    ) {
      alert(
        `El jugador ${nombre1} ha sacado ${arrayNombre1[i]} y gana al jugador ${nombre2} que ha sacado ${arrayNombre2[i]}`,
      );
      puntos1++;
    } else if (
      (arrayNombre2[i] === "piedra" && arrayNombre1[i] === "tijera") ||
      (arrayNombre2[i] === "papel" && arrayNombre1[i] === "piedra") ||
      (arrayNombre2[i] === "tijera" && arrayNombre1[i] === "papel")
    ) {
      alert(
        `El jugador ${nombre2} ha sacado ${arrayNombre2[i]} y gana al jugador ${nombre1} que ha sacado ${arrayNombre1[i]}`,
      );
      puntos2++;
    }
  }
}

if (puntos1 === puntos2) {
  alert(
    `Ha habido un empate a puntos con ${puntos1} puntos para ${nombre1} y ${puntos2} puntos para ${nombre2} `,
  );
} else if (puntos1 > puntos2) {
  alert(
    `¡${nombre1} ha ganado la partida! Ha conseguido ${puntos1} puntos frente a los ${puntos2} puntos de ${nombre2}`,
  );
} else {
  alert(
    `¡${nombre2} ha ganado la partida! Ha conseguido ${puntos2} puntos frente a los ${puntos1} de ${nombre1}`,
  );
}

//22. Mayor número
let array = [
  [2, 7, 12, 1],
  [8, 23],
  [9, 45, 7],
  [22, 3, 24, 4],
];

let array1 = 0;
let array2 = 0;
let array3 = 0;
let array4 = 0;

for (let i = 0; i < array.length; i++) {
  for (let x = 0; x < array[i].length; x++) {
    if (i === 0) {
      if (array[i][x] > array1) {
        array1 = array[i][x];
      }
    } else if (i === 1) {
      if (array[i][x] > array2) {
        array2 = array[i][x];
      }
    } else if (i === 2) {
      if (array[i][x] > array3) {
        array3 = array[i][x];
      }
    } else if (i === 3) {
      if (array[i][x] > array4) {
        array4 = array[i][x];
      }
    }
  }
}

console.log(`El número mayor del primer array es: ${array1}`);
console.log(`El número mayor del segundo array es: ${array2}`);
console.log(`El número mayor del tercer array es: ${array3}`);
console.log(`El número mayor del cuarto array es: ${array4}`);

//24. Cantidad
let arrayFrutas = [
  ["manzana", "platano", "platano", "pera"],
  ["platano", "manzana", "pera"],
  ["manzana", "platano"],
  ["platano", "manzana", "platano", "pera"],
];

let frutaContada = prompt("¿Qué fruta te gustaría contar?");

let manzana = 0;
let pera = 0;
let platano = 0;

for (i = 0; i < arrayFrutas.length; i++) {
  for (x = 0; x < arrayFrutas[i].length; x++) {
    if (arrayFrutas[i][x] === "manzana") {
      manzana++;
    } else if (arrayFrutas[i][x] === "pera") {
      pera++;
    } else if (arrayFrutas[i][x] === "platano") {
      platano++;
    }
  }
}

if (frutaContada === "manzana") {
  console.log(`El número de manzanas contadas son: ${manzana}`);
} else if (frutaContada === "pera") {
  console.log(`El número de peras contadas son: ${pera}`);
} else if (frutaContada === "platano") {
  console.log(`El número de platanos contados son: ${platano}`);
}

//26. Buscaminas
const tablero = [
  ["tierra", "bomba", "bomba"],
  ["tierra", "tierra", "tierra"],
  ["bomba", "tierra", "tierra"],
];

let tierra = 5;
let bomba = 3;

while (tierra > 0 && bomba > 0) {
  let apuesta = prompt("Ingresa una coordenada:");
  let arrayApuesta = apuesta.split(" ");
  let fila = Number(arrayApuesta[0]);
  let columna = Number(arrayApuesta[1]);
  let casillaSolicitada = tablero[fila][columna];

  if (casillaSolicitada === "bomba") {
    alert("¡Boom! Has detonado una bomba");
    bomba--;
    tablero[fila][columna] = "¡boom!";
    console.log("Así va el tablero actual:");
    console.table(tablero);
  } else if (casillaSolicitada === "tierra") {
    alert("¡Bien! No has detonado una bomba.");
    tierra--;
    tablero[fila][columna] = "salvado";
    console.log("Así va el tablero actual:");
    console.table(tablero);
  }
}

if (tierra === 0) {
  alert("¡Enhorabuena! Has terminado el juego sin detonar todas las bombas");
} else if (bomba === 0) {
  alert("¡Has perdido! Todas las bombas han explotado");
}

//28. Vivorita
const tablero = [
  //Identificamos el tablero de juego
  ["v", "v", "m", "v", "v"],
  ["m", "l", "v", "l", "m"],
  ["v", "l", "s", "v", "v"],
  ["v", "m", "v", "l", "v"],
  ["m", "v", "v", "m", "l"],
  ["v", "v", "v", "v", "m"],
];

//v = planta verde
//m = manzana
//l = ladrillo
//s = snake

let manz = 7; //Identificamos las manzanas que hay en el tablero
let filaActual = 2; // Identificamos fila (ejeX) de la posición incial
let columnaActual = 2; //Identificamos columna (ejeY) de la posición inicial

while (manz > 0) {
  //Mientras que haya en el tablero más de 0 manzanas no salimos del bucle.
  console.table(tablero); //Imprimimos en cada iteración el estado del tablero

  let nuevaFila = filaActual; //Creamos una nueva variable que identificará la nueva posición en la fila.
  let nuevaColumna = columnaActual; //Creamos una nueva variable que identificará la nueva posición en la columna.

  let movimiento = prompt("Indica tu movimiento")?.toLowerCase(); //Iniciamos la consulta para el movimiento.

  if (movimiento === "derecha") {
    //Si es a derechas: la "columnaActual" aumentará en uno.
    nuevaColumna = columnaActual + 1;
  }
  if (movimiento === "izquierda") {
    //Si es a izqiuierdas: la "columnaActual" disminuirá en uno.
    nuevaColumna = columnaActual - 1;
  }
  if (movimiento === "arriba") {
    //Si es hacia arriba: la "filaActual" disminuirá en uno.
    nuevaFila = filaActual - 1;
  }
  if (movimiento === "abajo") {
    //Si es hacia abajo: la "filaActual" aumentará en uno.
    nuevaFila = filaActual + 1;
  }

  //Este conjunto de if es para delimitar la posición de la serpiente en el tablero sin que se salga de él.
  if (nuevaFila < 0) nuevaFila = tablero.length - 1; //Si la fila es menor que 0, la "nuevaFila" mandará a la serpiente a la fila -1, que es la última.
  if (nuevaFila >= tablero.length) nuevaFila = 0; // Si la "nueva fila" es mayor a la longitud total del tablero, volverá a la fila 0 (arriba del todo).
  if (nuevaColumna < 0) nuevaColumna = tablero[0].length - 1; //Si la "nuevaColumna" es menor que 0, mandará a la posición -1, lo que e slo mismo, al final.
  if (nuevaColumna >= tablero[0].length) nuevaColumna = 0; //Si la "nuevaColumna" es mayor o igual a la longitud del tablero, volverá a la posición 0, lo que es, arriba del todo.´

  if (tablero[nuevaFila][nuevaColumna] === "l") {
    //Si en la posición del tablero hay un ladrillo...
    alert("¡Hay un muro! No podemos avanzar."); //No podemos entrar.
  } else {
    //Si la casilla fuera válida, (que no hubiera ladrillo)...
    tablero[filaActual][columnaActual] = "v"; //Pintaríamos en dicha posición una planta verde.

    if (tablero[nuevaFila][nuevaColumna] === "m") {
      //Si en la posición hay una manzana...
      alert("¡Que hambre! La serpiente ha comido una manzana"); //Marcamos aviso de que hemos comido una manzana.
      manz--; //Y restamos una manzana del total.
    }
    filaActual = nuevaFila; // Actualizamos posición de fila
    columnaActual = nuevaColumna; // Actualizamos posición de columna
    tablero[filaActual][columnaActual] = "s"; //Y posicionamos en la nueva casilla a la serpiente.
  }
}

console.table(tablero); //Una vez que ya no hay manzanas, el bucle termina, muestra el tablero e indica aviso.
alert("¡Enhorabuena! Has conseguido comer todas las manzanas");
