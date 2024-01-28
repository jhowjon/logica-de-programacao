//  Exercício 7

function identificaPoligono(lados: number): string {
  if (lados === 3) {
    return "TRIANGULO";
  } else if (lados === 4) {
    return "QUADRADO";
  } else if (lados < 3) {
    return "NÃO É UM POLÍGONO";
  } else if (lados > 5) {
    return "POLÍGONO NÃO IDENTIFICADO";
  } else {
    return "PENTAGONO";
  }
}

console.log(identificaPoligono(3));
console.log(identificaPoligono(4));
console.log(identificaPoligono(2));
console.log(identificaPoligono(6));
