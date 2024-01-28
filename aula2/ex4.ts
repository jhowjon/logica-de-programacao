//  Exercício 4

function valorDaMaca(quantidade: number): number {
  if (quantidade < 12) {
    return quantidade * 0.3;
  } else {
    return quantidade * 0.25;
  }
}

const resultadoDaMaca: number = valorDaMaca(15);
console.log(resultadoDaMaca);
console.log(valorDaMaca(12));
console.log(valorDaMaca(11));
