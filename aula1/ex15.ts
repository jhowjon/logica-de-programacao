// INPUT
const valorDeCompra: number = 21;

const desconto: number = 45;

if (valorDeCompra <= 20) {
  const valorLucro45: number = valorDeCompra * 0.45;
  const valorTotalCom45: number = valorDeCompra + valorLucro45;
  console.log("Valor da Venda com 45% de desconto", valorTotalCom45);
} else {
  const valorLucro30: number = valorDeCompra * 0.3;
  const ValorTotalCom30: number = valorDeCompra + valorLucro30;
  console.log("Valor da Venda com 30% de desconto", ValorTotalCom30);
}
