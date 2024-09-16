// Igualdade simples (==) e diferença simples (!=)
// Esses operadores comparam os valores, mas, se os tipos forem diferentes, o JavaScript
// tenta converter um valor para o tipo do outro antes de comparar.

console.log(5 == "5"); // true
// Mesmo que um seja número e o outro uma string, o JavaScript converte a string '5'
// em número, então ele considera que 5 é igual a '5'.

console.log(5 != "5"); // false
// Aqui ele também converte a string '5' em número antes de comparar, e como os valores
// são iguais, a diferença retorna false (ou seja, eles não são diferentes).

// Igualdade estrita (===) e diferença estrita (!==)
// Esses operadores não fazem nenhuma conversão de tipo. Eles comparam tanto o valor
// quanto o tipo. Ou seja, se os tipos forem diferentes, ele já retorna false (ou true no caso da diferença).

console.log(5 === "5"); // false
// Aqui ele não tenta converter. Um é número e o outro é string, então o JavaScript
// já diz que eles são diferentes por conta do tipo.

console.log(5 !== "5"); // true
// Nesse caso, como os tipos são diferentes (número vs. string), ele retorna true,
// ou seja, 5 não é estritamente igual a '5'.
