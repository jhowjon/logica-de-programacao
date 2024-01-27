// INPUT
const nota1: number = 5;
const nota2: number = 5;
const nota3: number = 5;

//  REGRA DE NOGOCIO - BUSINESS LOGIC
const media: number = 7;
const mediaRecuperacao: number = 5;
const mediaGeral: number = (nota1 + nota2 + nota3) / 3;

if (mediaGeral >= media) {
  const aprovado: string = "ALUNO APROVADO";
  console.log(aprovado);
} else if (media >= mediaRecuperacao) {
  const recuperacao: string = "ALIUNO EM RECUPERAÇÃO";
  console.log(recuperacao);
} else {
  const reprovado: string = "ALUNO REPROVADO";
  console.log(reprovado);
}
