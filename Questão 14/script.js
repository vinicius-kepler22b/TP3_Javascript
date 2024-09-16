let valorX = Number(prompt("Por favor insira o valor de X"));
let valorA = Number(prompt("Por favor insira o valor de A"));
let valorB = Number(prompt("Por favor insira o valor de B"));
let valorC = Number(prompt("Por favor insira o valor de C"));

function organizaNumeros(x, num1, num2, num3) {
  let maior = Math.max(num1, num2, num3);
  let meio;
  let menor = Math.min(num1, num2, num3);

  if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    meio = num1;
  } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    meio = num2;
  } else {
    meio = num3;
  }

  gerenciaOQueFazer(x, maior, meio, menor);
}

function gerenciaOQueFazer(x, maior, meio, menor) {
  switch (x) {
    case 1:
      ordenaCrescente(maior, meio, menor);
      break;
    case 2:
      ordenaDecrescente(maior, meio, menor);
      break;

    case 3:
      ordenaMaiorNoMeio(maior, meio, menor);
      break;

    default:
      alert("O valor de X é invalido!");
      break;
  }
}

function ordenaCrescente(maior, meio, menor) {
  alert(
    "Seus números em ordem crescente são: " +
      maior +
      " " +
      meio +
      " " +
      menor +
      " "
  );
}

function ordenaDecrescente(maior, meio, menor) {
  alert(
    "Seus números em ordem decrescente são: " +
      menor +
      " " +
      meio +
      " " +
      maior +
      " "
  );
}

function ordenaMaiorNoMeio(maior, meio, menor) {
  alert(
    "Seus números com o maior número no meio são: " +
      meio +
      " " +
      maior +
      " " +
      menor +
      " "
  );
}

organizaNumeros(valorX, valorA, valorB, valorC);
