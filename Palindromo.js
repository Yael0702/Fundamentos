function esPalindromo(frase) {
  frase = frase.replace(/\s/g, '').toLowerCase();

  // Verificamos si la frase es un palíndromo
  for (let i = 0; i < frase.length / 2; i++) {
    if (frase[i] !== frase[frase.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function obtenerPrimerLetra(frase) {
  frase = frase.replace(/\s/g, '').toLowerCase();

  return frase[0];
}

function obtenerLetraMitad(frase) {
  frase = frase.replace(/\s/g, '').toLowerCase();

  const indiceMitad = Math.floor(frase.length / 2);

  return frase[indiceMitad];
}

// Ejemplo de uso
const fraseEjemplo = prompt("Ingresa una frase:");
const esPalindromoEjemplo = esPalindromo(fraseEjemplo);
const primerLetra = obtenerPrimerLetra(fraseEjemplo);
const letraMitad = obtenerLetraMitad(fraseEjemplo);

console.log("La frase es un palíndromo:", esPalindromoEjemplo);
console.log("La primera letra de la frase es:", primerLetra);
console.log("La letra ubicada en la mitad de la frase es:", letraMitad);
