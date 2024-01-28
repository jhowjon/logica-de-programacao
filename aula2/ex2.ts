//  Exercício 2

function anoDeVotacao(anoDeNascimento: number): string {
  if (2024 - anoDeNascimento >= 16) {
    return "PODE VOTAR";
  } else {
    return "NAO PODE VOTAR";
  }
}

const resultadoAnoDeVotacao: string = anoDeVotacao(1999);
console.log(anoDeVotacao(2008));
console.log(anoDeVotacao(2009));
console.log(resultadoAnoDeVotacao);
