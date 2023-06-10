function insertarElemento(arr, elemento, posicion) {
    if (posicion < 0 || posicion > arr.length) {
      console.log("La posición está fuera del rango válido.");
      return arr;
    } else {
       arr.splice(posicion, 0, elemento);
      return arr;
    }
  }
  
  // Ejemplo de uso
  let arreglo = [1, 2, 3, 4, 5];
  console.log("Arreglo original:", arreglo);
  
  let nuevoElemento = 10;
  let nuevaPosicion = 2;
  
  let arregloModificado = insertarElemento(arreglo, nuevoElemento, nuevaPosicion);
  console.log("Arreglo modificado:", arregloModificado);
  