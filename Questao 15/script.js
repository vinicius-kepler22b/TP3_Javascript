function calcularResultados() {
  const votosRoboRat = Number(
    prompt("Insira aqui a quantidade de votos para RoboRat:")
  );
  const votosSuperKeyboard = Number(
    prompt("Insira aqui a quantidade de votos para SuperKeyboard:")
  );
  const votosInvalidos = Number(
    prompt("Insira aqui a quantidade de votos inválidos:")
  );

  if (!votosRoboRat || !votosSuperKeyboard || !votosInvalidos) {
    alert("Por favor, insira valores válidos em todos os campos.");
    return;
  }

  const votosTotais = votosRoboRat + votosSuperKeyboard + votosInvalidos;

  let percentualRoboRat = (votosRoboRat * 100) / votosTotais;
  percentualRoboRat = percentualRoboRat.toFixed();
  let percentualSuperKeyboard = (votosSuperKeyboard * 100) / votosTotais;
  percentualSuperKeyboard = percentualSuperKeyboard.toFixed();
  let percentualInvalidos = (votosInvalidos * 100) / votosTotais;
  percentualInvalidos = percentualInvalidos.toFixed();

  const votosValidos = votosRoboRat + votosSuperKeyboard;
  let percentualRoboRatValidos = (votosRoboRat / votosValidos) * 100;
  percentualRoboRatValidos = percentualRoboRatValidos.toFixed();
  let percentualSuperKeyboardValidos =
    (votosSuperKeyboard / votosValidos) * 100;
  percentualSuperKeyboardValidos = percentualSuperKeyboardValidos.toFixed();

  let mascoteVencedor;
  if (votosRoboRat > votosSuperKeyboard) {
    mascoteVencedor = "RoboRat";
  } else if (votosSuperKeyboard > votosRoboRat) {
    mascoteVencedor = "SuperKeyboard";
  } else {
    mascoteVencedor = "Empate";
  }

  alert(
    "Vamos para a porcentagem de votos!" +
      "\n" +
      "RoboRat: " +
      percentualRoboRat +
      "%" +
      "\n" +
      "SuperKeyboard: " +
      percentualSuperKeyboard +
      "%" +
      "\n" +
      "Votos inválidos: " +
      percentualInvalidos +
      "%"
  );

  alert(
    "Agora, a porcentagem dos votos VALIDOS de cada mascote!!!" +
      "\n" +
      "RoboRat: " +
      percentualRoboRatValidos +
      "%" +
      "\n" +
      "SuperKeyboard: " +
      percentualSuperKeyboardValidos +
      "%"
  );

  alert("O novo mascote do time será.........." + "\n" + mascoteVencedor);
}

calcularResultados();
