const salario: number = 20000;
const descontoMensal: number = salario * 0.2;
const resultado: number = salario - descontoMensal;

// Tipo de Variável = number
// Referência da Variável = referência
// Valor da variável = 20000;
// Nao pode se usar variavel antes da declaracao, pois ele le de cima p baixo.

console.log(20000);

console.log(salario);

const bonus: number = 500;

const bonusResultado: number = resultado + bonus;

console.log(salario);
console.log(resultado);
console.log(bonusResultado);

const salarioVinicius: number = 5000;
const salarioJonathan: number = 4000;

// Tipos de dados:
// True, False -> Boolean
// Null -> Null
// Texto -> String

// > Maior
// < Menor
// >= Maior Igual
// <= Menor Igual
// != Diferente
// === Igual

const salarioViniciusEhMaior: boolean = salarioVinicius > salarioJonathan;
const salarioViniciusEhIgualQueSalarioJonathan: boolean =
  salarioVinicius === salarioJonathan;

console.log(salarioViniciusEhMaior);

// ESTRUTURAS DE CONTROLE

// IF OR ELSE

const salarioMaior: string = "Salario de Jonathan é Maior";
const salarioMenor: string = "Salario de Jonathan é Menor";
const salarioJonathanG: number = 10000;
const salarioViniciusR: number = 20000;

if (salarioJonathanG > salarioViniciusR) {
  console.log(salarioMaior);
} else {
  console.log(salarioMenor);
}

// OPERADORES LOGICOS
// && E
// || OU

const mediaGeral: number = 7;
const mediaGeralJonathan: number = 7;
const jonathanRepetiuEmMaisdeTresMaterias: boolean = false;

// PARA O ALUNO PASSAR DE ANO
// MEDIA TEM QUE SER MAIOR OU IGUAL A 7
// E NAO PODE TER REPETIDO EM MAIS DE TRES MATERIAS
// SE PASSOU DE ANO IMPRIMA PASSOU
// SENAO IMPRIMA NAO PASSOU

if (
  mediaGeralJonathan >= mediaGeral &&
  jonathanRepetiuEmMaisdeTresMaterias === false
) {
  const jonathanPassou: string = "Passou de ano!";
  console.log(jonathanPassou);
} else {
  const jonathanNaoPassou: string = "Não passou de ano";
}
