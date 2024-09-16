function horasParaSegundos(nHoras) {
  return nHoras * 3600;
}

const resA = horasParaSegundos(1); // 1 hora
console.log(resA); // Mostra 3600 no console

const resB = horasParaSegundos(24); // 24 horas
console.log(resB); // Mostra 86400 no console
