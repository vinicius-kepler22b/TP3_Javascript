function calculaIMC(altura, peso) {
  let imc = peso / (altura * altura);
  imc = imc.toFixed(2);
  mensagemIMC(imc);
  return imc;
}

function mensagemIMC(imc) {
  let categoria;
  if (imc < 16) {
    categoria = "Baixo peso (grau I)";
  } else if (imc < 17) {
    categoria = "Baixo peso (grau II)";
  } else if (imc < 18.5) {
    categoria = "Baixo peso (grau III)";
  } else if (imc < 25) {
    categoria = "Peso adequado";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else if (imc < 35) {
    categoria = "Obesidade (grau I)";
  } else if (imc < 40) {
    categoria = "Obesidade (grau II)";
  } else {
    categoria = "Obesidade (grau III)";
  }

  alert("Com seu IMC de " + imc + " , você está na categoria: " + categoria);
}

let alturaUsuario = Number(prompt("Por favor insira sua altura em metros:"));

let pesoUsuario = Number(prompt("Por favor insira seu peso em kilos:"));

calculaIMC(alturaUsuario, pesoUsuario);
