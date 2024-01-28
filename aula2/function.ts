const dollar: number = 4.9;

const real: number = 3000;

const resultado: number = dollar * real;

console.log(resultado);

function SomaDoisNumeros() {}

function imprimeFrase(frase: string) {
  return console.log(frase);
}

imprimeFrase("OLA JONATHAN");
// imprimeFrase("Olá Vinicius");

function imprimeNomeSobrenomeIdade(
  nome: string,
  idade: number,
  sobrenome: string
): void {
  return console.log(nome, sobrenome, idade);
}

imprimeNomeSobrenomeIdade("Jonathan", 25, "Ribeiro");

// Função - Conversão de Dolar

function conversaoDolar(
  cotacaoDolar: number,
  valorParaConverter: number
): number {
  const resultadoConversao: number = cotacaoDolar * valorParaConverter;

  return resultadoConversao;
}

const primeiraConversao: number = conversaoDolar(4.9, 4000);
const segundaConversao: number = conversaoDolar(4.9, 9000);

console.log(primeiraConversao);
console.log(segundaConversao);

// Função - Soma de Dois Numeros

function somaDoisNumeros(
  primeiroNumero: number,
  segundoNumero: number
): number {
  const resultadoSoma: number = primeiroNumero + segundoNumero;

  return resultadoSoma;
}

const resultadoPrimeiraSoma: number = somaDoisNumeros(3, 5);
const resultadoSoma2: number = somaDoisNumeros(3, 9);
console.log(resultadoPrimeiraSoma);
console.log(resultadoSoma2);

// Função que identifica numeros pares

function numeroEhPar(numero: number): string {
  if (numero % 2 === 0) {
    return "Número é par";
  } else {
    return "Número não é par";
  }
}

const primeiraVerificacaoParOuImpar: string = numeroEhPar(3);
const segundaVerificacaoParOuImpar: string = numeroEhPar(5);
const terceiraVerificacaoParOuImpar: string = numeroEhPar(6);

console.log(primeiraVerificacaoParOuImpar);
console.log(segundaVerificacaoParOuImpar);
console.log(terceiraVerificacaoParOuImpar);

// Uma função ela é um bloco/pedaço que agrupa um conjunto de tarefas a serem executadas
// As funções elas recebem parametros, que são valores dinamicos a serem informados no momento
// da execução. Uma função pode conter dentro dela diversas operações (if, else, comparação, operação matematica)
// E uma função deve sempre ter um retorno, caso se faça necessário.
