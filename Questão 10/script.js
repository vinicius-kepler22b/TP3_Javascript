function wordToNumber(num) {
  const wordsToNumbers = {
    zero: 0,
    um: 1,
    dois: 2,
    três: 3,
    quatro: 4,
    cinco: 5,
    seis: 6,
    sete: 7,
    oito: 8,
    nove: 9,
  };

  return wordsToNumbers[num.toLowerCase()] || "Valor inválido";
}

const numero = "dois"; // Define o número por extenso
const algarismo = wordToNumber(numero); // Chama a função
console.log(algarismo); // Exibe o resultado
