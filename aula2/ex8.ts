//  Exercício 8

function indetificaPoligono(numeroDeLados: number): string {
  if (numeroDeLados < 3) {
    return "NÃO É UM POLIGONO";
  } else {
    return "POLIGONO NAO IDENTIFICADO";
  }
}

console.log(indetificaPoligono(5));
