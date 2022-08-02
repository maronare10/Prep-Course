// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // array= [3, 6, 8, 9]
  let array2 = []
  for (let i = 0; i < array.length; i++) {
    array2.push(array[i] + 1)
  }
  // array2 = [4, 7, 9, 10]

  return array2;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);

  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);

  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:


  return palabras.join(' ');

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // array = [4, 5, 7]
  for (i = 0; i < array.length; i++) {
    console.log(array[i], elemento)
    if (array[i] === elemento) {
      return true
    }
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  // numeros = [1, 2, 3 , 4]
  let suma = 0

  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]
  }
  return suma;


}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  // resultadosTest = [2, 6, 9]
  let suma = 0


  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]
  }
  return suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  //numeros = [2,4,1,8]
  let numeroMayor = 0

  for (i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i], numeroMayor)

    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i]
    }
  }
  // const nums = [2,4,1,8,10]
  // console.log(Math.max(...nums))
  return numeroMayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  let multiplicar = 1
  if (arguments.length === 0) {
    return 0
  }

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
    multiplicar = multiplicar * arguments[i]
  }

  return multiplicar;
}



function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  //arreglo = [5,4,34,2,9,0,20]

  let contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador = contador + 1
    }
  }

  return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  // diasDeSemana =(Domingo, Lunes, Martes, Miercoles, Jueves, Viernes, Sabado)

  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (numeroDeDia >= 2 && numeroDeDia <= 6) {
    return "Es dia Laboral";
  }

}


function empiezaConNueve(n) {
  let numero = String(n).split("")

  let primerNumero = Number(numero.shift())

  console.log(primerNumero)

  if (primerNumero === 9) {
    return true
  } else {
    return false
  }
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  // [ 3, 3, 5, 3]

  let igual = arreglo[0]

  for (let i = 0; i < arreglo.length; i++) {

    if (igual !== arreglo[i]) {
      return false
    }
  }

  return true

}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let coincidencias = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      coincidencias.push(array[i])
    }
  }

  if (coincidencias.length === 3) {
    return coincidencias
  } else {
    return "No se encontraron los meses pedidos"
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let nuevoArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i])
    }
  }

  return nuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let array = []
  let nuevoNumero = numero
  let interrumpir = false

  for (let i = 0; i < 10; i++) {
    nuevoNumero = nuevoNumero + 2
    array.push(nuevoNumero)
    //console.log(nuevoNumero)
    if (nuevoNumero === i) {
      interrumpir = true
      break;
    }
  }

  if (interrumpir === true) {
    return "Se interrumpió la ejecución"
  } else {
    return array
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

let array = []
let acumulador = numero

  for(i=0; i<10; i++) {
    if(i + 1 === 5) {
      continue
    }
    acumulador = acumulador + 2
    array.push(acumulador)
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
