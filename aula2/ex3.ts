//  Exercício 3

function senhaValidaOuInvalida(senha: number): string {
  if (senha === 1234) {
    return "ACESSO PERMITIDO";
  } else {
    return "ACESSO NEGADO";
  }
}

const resultadoDaSenha: string = senhaValidaOuInvalida(124);
console.log(senhaValidaOuInvalida(1234));
console.log(senhaValidaOuInvalida(1254));
console.log(resultadoDaSenha);
