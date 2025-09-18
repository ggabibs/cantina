// Passo 1 – Declarando variáveis
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// Passo 2 – Atualizando valores
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// Passo 3 – Teste rápido

// Teste: tentar alterar uma constante
try {
  precoSalgado = 6; // Isso vai gerar erro!
} catch (erro) {
  console.log("Erro ao tentar alterar precoSalgado: " + erro.message);
}

// Teste: escopo de var e let
if (true) {
  var testeVar = "Sou var";
  let testeLet = "Sou let";
  console.log(testeVar); // funciona
  console.log(testeLet); // funciona
}

console.log(testeVar); // funciona
try {
  console.log(testeLet); // ERRO
} catch (erro) {
  console.log("Erro ao acessar testeLet fora do bloco: " + erro.message);
}

