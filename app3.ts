import * as funcoes from './funcoes.ts';

import prompt from "prompt-sync";
const sc = prompt();

console.log("--- INFORMAÇÕES ---");
console.log("Digite o valor da sua primeira nota: ");
let nota1 : number = Number(sc());

console.log("Digite o valor da sua segunda nota: ");
let nota2 : number = Number(sc());

console.log("Digite o valor da sua terceira nota: ");
let nota3 : number = Number(sc());

let m = funcoes.calcularMedia(nota1, nota2, nota3);
let s = funcoes.verificarSituacao(m);

console.log("Média: " + m);
console.log("Situação: " + s);



