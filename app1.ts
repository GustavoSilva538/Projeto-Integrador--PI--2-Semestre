import prompt from "prompt-sync";
const sc = prompt();

console.log("==================");
console.log("====== Média =====");

console.log("Digite o primeiro Número:");
let num1: number = Number(sc(""));

console.log("Digite o segundo Número:");
let num2: number = Number(sc(""));

console.log("Digite o terceiro Número:");
let num3: number = Number(sc(""));

let media: number = (num1 + num2 + num3) / 3;

let situacao: string = "";
if (media >= 6) {
  situacao = "Aprovado";
} else {
  situacao = "Reprovado";
}

console.log("Média: " + media);
console.log("Situação: " + situacao);
