function contarCaracteres() {
  let str = prompt("Digite uma string:");

  if (str) {
    let quantidade = str.length;

    alert(`A string possui ${quantidade} caracteres.`);
  } else {
    alert("Nenhuma string foi inserida.");
  }
}

contarCaracteres();
