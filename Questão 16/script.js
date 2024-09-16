function ensinaFazerCafe() {
  let etapaDesejada = Number(
    prompt(
      "São apenas 10 etapas para a realização do café!" +
        "\n" +
        " a partir de qual você gostaria de ler?"
    )
  );

  switch (etapaDesejada) {
    case 1:
      alert(
        "Etapa 1: Reúna os ingredientes e equipamentos necessários: café, água, filtro e uma máquina de café."
      );
    case 2:
      alert(
        "Etapa 2: Meça a quantidade de café necessário para a quantidade desejada de bebida."
      );
    case 3:
      alert("Etapa 3: Coloque o café na moagem adequada na máquina.");
    case 4:
      alert("Etapa 4: Coloque o filtro na máquina de café.");
    case 5:
      alert("Etapa 5: Adicione a água no reservatório da máquina.");
    case 6:
      alert(
        "Etapa 6: Inicie o processo de torrefação e moagem na máquina de café."
      );
    case 7:
      alert(
        "Etapa 7: Aguarde até que a máquina complete o processo de torrefação e moagem."
      );
    case 8:
      alert("Etapa 8: A máquina começará a preparar o café após a moagem.");
    case 9:
      alert(
        "Etapa 9: Verifique se o café está pronto e se a máquina parou o processo."
      );
    case 10:
      alert("Etapa 10: Sirva o café e aproveite!");
      break;
    default:
      alert(
        "Etapa desconhecida :( Número do passo inválido. Por favor, escolha um número de 1 a 10."
      );
      break;
  }
}

ensinaFazerCafe();
