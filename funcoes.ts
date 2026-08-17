export function calcularMedia(nota1 : number, nota2 : number, nota3 : number) : number{
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

export function verificarSituacao(media : number) : string{
    let situacao : string = "";
    if(media >= 6){
        situacao = "Aprovado";
    }else{
        situacao = "Reprovado";
    }
    return situacao;
}

export function calcularTabuada(num : number, cont : number) : number {
    for(let i : number = 0; i <= cont; cont++){
        let calculo = num * cont;
        
    }
    
}