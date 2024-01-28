//  Exercício 6

function pesoIdeal(altura: number, sexo: string): number {
  if (sexo === "masculino") {
    return 72.7 * altura - 58;
  } else {
    return 62.1 * altura - 44.7;
  }
}

console.log(pesoIdeal(1.8, "masculino"));
console.log(pesoIdeal(1.8, "feminino"));
