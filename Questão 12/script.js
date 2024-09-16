function analisaAptidaoDesconto(valorCompra, tipoComprador) {
  valorCompra = Number(valorCompra);
  tipoComprador = tipoComprador.toLowerCase();

  if (
    tipoComprador === "gestante" ||
    tipoComprador === "aposentado" ||
    tipoComprador === "pensionista"
  ) {
    return verificaQualODesconto(valorCompra, tipoComprador);
  } else {
    alert("O tipo de comprador não existe, você não recebeu o desconto");
  }
}

function verificaQualODesconto(valorCompra, tipoComprador) {
  let desconto;
  switch (tipoComprador) {
    case "gestante":
      desconto = 20;
      break;
    case "aposentado":
      desconto = 15;
      break;
    case "pensionista":
      desconto = 10;
      break;
    default:
      break;
  }
  if (valorCompra < 80) {
    desconto -= 5;
  }
  return desconto;
}

function calculoDesconto(valorCompra, desconto) {
  let compraComDesconto = valorCompra - valorCompra * (desconto / 100);
  return compraComDesconto;
}

let valorCompra = prompt(
  "Vamos calcular seu desconto!" + "\n" + "Por favor, insira o valor da compra:"
);
let tipoComprador = prompt(
  "Agora, me informe em qual desses grupos você se encaixa: " +
    "\n" +
    "Gestante - Aposentado - Pensionista"
);

let porcentagemDesconto = analisaAptidaoDesconto(valorCompra, tipoComprador);

if (porcentagemDesconto) {
  let compraComDesconto = calculoDesconto(valorCompra, porcentagemDesconto);
  alert(
    "Você tem um desconto de " +
      porcentagemDesconto +
      "%!" +
      "\n" +
      "O valor da sua compra já com desconto é: " +
      compraComDesconto
  );
}
