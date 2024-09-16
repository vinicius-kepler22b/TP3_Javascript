function parOuImpar(num) {
  return num % 2 === 0 ? "par" : "impar";
}

// Testando a função
const resA = parOuImpar(2);
console.log(resA); // "par"

const resB = parOuImpar(3);
console.log(resB); // "impar"
