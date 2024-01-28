//  Exercício 1

function qualEhValorMaior(
  valor1: number,
  valor2: number,
  valor3: number,
  valor4: number
): number {
  if (valor1 > valor2) {
    return valor1;
  } else if (valor2 > valor3) {
    return valor2;
  } else if (valor3 > valor4) {
    return valor3;
  } else {
    return valor4;
  }
}
qualEhValorMaior(30, 1000, 80, 20);

const resultadoValorMaior: number = qualEhValorMaior(30, 1000, 80, 20);

console.log(resultadoValorMaior);

console.log(qualEhValorMaior(40, 20, 5, 1));
