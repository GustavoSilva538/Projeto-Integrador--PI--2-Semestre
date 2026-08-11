import prompt from "prompt-sync";
const sc = prompt();

let loop : number = 0;

console.log("====================");
console.log("====== Dados ======");
console.log("Digite seu Nome: ");
let nome : String = sc();

console.log("Digite seu Sobrenome: ");
let sobrenome : String = sc();

console.log("Digite sua idade: ");
let idade : number = Number(sc());


while(loop == 0){

for(let i : number = 0; i < 5; i++){
            console.log("");
        }

console.log("====== MENU =====");
console.log("1- Calcular Média");
console.log("2- Dados Pessoais");
console.log("3- Sair");
console.log("====================");
console.log("Oque vc deseja fazer: ");
let escolha : number = Number(sc());


switch(escolha){
    case 1:
        console.log("Digite a nota da primeira prova: ");
        let n1 : number = Number(sc());

        console.log("Digite a nota da segunda prova: ");
        let n2 : number = Number(sc());

        console.log("Digite a nota da terceira prova: ");
        let n3 : number = Number(sc());

        let media : number = (n1 + n2 + n3) /3 ;

        
        console.log("===================");

        if (media >=6){
            console.log("Aprovado");
        }else{
            console.log("Reprovado");
        }
        console.log("===================");


    
    case 2: 
        
        
        console.log("===================");
        console.log("Nome: " + nome + " " +sobrenome);
        console.log("Idade: " + idade);
        console.log("===================");
        for(let i : number = 0; i < 5; i++){
            console.log("");
        }
        break;

    case 3:
        loop = 1;
        break;
}



}