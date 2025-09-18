var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;
console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);
try {
  precoSalgado = 6;
} catch (erro) {
  console.log("Erro ao tentar alterar precoSalgado: " + erro.message);
}
if (true) {
  var testeVar = "Sou var";
  let testeLet = "Sou let";
  console.log(testeVar); 
  console.log(testeLet); 
}
console.log(testeVar); 
try {
  console.log(testeLet); 
} catch (erro) {
  console.log("Erro ao acessar testeLet fora do bloco: " + erro.message);
}

