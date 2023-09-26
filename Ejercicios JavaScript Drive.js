// EJERCICIO 1: Dado un array de objetos, obtener el objeto con el id 3
const arrNames = [
  {id: 1, name: 'Pepe'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Alba'},
  {id: 4, name: 'Toby'},
  {id: 5, name: 'Lala'}
]
//Forma 1:
const requiredObject = arrNames.find(obj => obj.id === 3);

if (requiredObject) {
  console.log(requiredObject);
} else {
  console.log('Not found');
}
//Forma 2:
function encontrarObjetoConID(arr, targetID) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i].id === targetID) {
      return arr[i];
    }
    i++;
  }
  return null; 
}
const objetoConID3 = encontrarObjetoConID(arrNames, 3);

if (objetoConID3) {
  console.log(objetoConID3); // { id: 3, name: 'Alba' }
} else {
  console.log('Objeto no encontrado');
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EJERCICIO 2: Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']
      //Forma 1:  con 'filter' y una función:
      function esTruthy(valor) {
        return Boolean(valor);  // 'Boolean()' verifica si el valor es "truthy" (diferente de nulo, vacío, no definido y falso)
      }

      const arrTruthy = arrDirty.filter(esTruthy);
      console.log(arrTruthy);

      //Forma 2: Con un bucle for...of ya que el for...in se utiliza para iterar sobre propiedades enumerables de un objeto:
      const arrTruthy2 = [];

      for(const val of arrDirty){
        if(val){
          arrTruthy2.push(val);
        }
      }
      console.log(arrTruthy2);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EJERCICIO 3: Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]
//Forma 1: 
function esCiudadDeEspañaNoCapital(ciudad) {
  return ciudad.country === 'Spain' && !ciudad.capital;
}

const ciudadesDeEspañaNoCapitales = arrCities.filter(esCiudadDeEspañaNoCapital);
console.log(ciudadesDeEspañaNoCapitales);

//Forma 2: 
const ciudadesDeEspañaNoCapitales2 = [];

for (const indice in arrCities) {
  const ciudad = arrCities[indice];
  
  if (ciudad.country === 'Spain' && !ciudad.capital) {
    ciudadesDeEspañaNoCapitales2.push(ciudad);
  }
}

console.log(ciudadesDeEspañaNoCapitales2);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EJERCICIO 4: Dados tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

function interseccion(arr1, arr2) {
  return arr1.filter(elemento => arr2.includes(elemento));
}

const res1 = interseccion(arrNumber1, arrNumber2);
const resultado = interseccion(res1, arrNumber3);
console.log(resultado);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* EJERCICIO 5: Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros 
que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
-Ejemplo: {city: "Logroño", isSpain: "true"} */

const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

function transformarCiudad(ciudad) {  //Función para transformar cada ciudad en el formato que me interesa:
  return {
    city: ciudad.city,
    isSpain: ciudad.country === 'Spain'
  };
}

const nuevoArray = arrCities2
  .filter(ciudad => !ciudad.capital) // Filtro las ciudades no capitales.
  .map(transformarCiudad); // Transformo los objetos de ciudad

console.log(nuevoArray);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* EJERCICIO 6: Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
⦁	Primer parámetro es un número float con x decimales
⦁	Según parámetro es un int que indique el número de decimales al que redondear
⦁	Evitar usar el método toFixed()
*/

function roundTo(num, numDecimales){
   /* Con 'toFixed' se obtiene una cadena de texto con el número redondeado a los decimales que se le pase y el 'parseFloat' lo convierte de nuevo a float:
   return numRedondeado = parseFloat(num.toFixed(numDecimales));  */
   const factor = 10 ** numDecimales;
   return Math.round(num * factor) / factor; 
}

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12

const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123457
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* EJERCICIO 7: Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de 
ser ejecutados por una función específica. La fundación debe tener dos parámetros:
⦁	Primer parámetro es un objeto con x número de campos y valores.
⦁	Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro.
*/

function returnFalsyValues(objeto, funcion){
  const resultado = {};

  for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      const valor = objeto[clave];
      if (!funcion(valor)) {
        resultado[clave] = valor;
      }
    }
  }

  return resultado;
}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result); // {a: 1, c: 3}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* EJERCICIO 8: Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
⦁	Primer parámetro debe ser el número de bytes
⦁	Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con 
    Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

*/

function fromBytesToFormattedSizeUnits(bytes, numDigits = 3) {
  if (isNaN(bytes)) {
    return 'NaN';
  }

  const arrUnidades = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let unidadesIndex = 0;

  while (Math.abs(bytes) >= 1024 && unidadesIndex < arrUnidades.length - 1) {
    bytes /= 1024;
    unidadesIndex++;
  }

  return bytes.toFixed(numDigits) + arrUnidades[unidadesIndex];
}

const result = fromBytesToFormattedSizeUnits(1024);
console.log(result); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* EJERCICIO 9: Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
*/

function toLowercaseKeys(objeto) {
  const nuevoObjeto = {};

  for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      const valor = objeto[clave];
      nuevoObjeto[clave.toLowerCase()] = valor;
    }
  }

  return nuevoObjeto;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* EJERCICIO 10: Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
*/

//PRIMERA FORMA: 
function removeHTMLTags(string) {
  let dentroEtiqueta = false;
  let nuevaString = '';  
    
  for (const letra of string) {
    if (letra === '<') {
      dentroEtiqueta = true;
    } else if (letra === '>') {
      dentroEtiqueta = false;
    } else if (!dentroEtiqueta) {
      nuevaString += letra;
    }
  }

  return nuevaString;
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result); // lorem ipsum

//SEGUNDA FORMA:
function removeHTMLTags2(inputString) {
  return inputString.replace(/<\/?[^>]+(>|$)/g, '');
}

const result2 = removeHTMLTags2('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result2); // lorem ipsum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* EJERCICIO 11: Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
⦁	El primer parámetro es el array entero que se quiere dividir.
⦁	El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.
*/

//PRIMERA FORMA: 
function splitArrayIntoChunks(array, numElem) {
  const arrDivididos = [];

  for(let i = 0; i < array.length; i += numElem){
    arrDivididos.push(array.slice(i, i + numElem)); 
  }
  
  return arrDivididos;
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

