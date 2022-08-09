/// ---------- EXERCÍCIO 1 ----------

// JAVASCRIPT \/
// function checaTriangulo(a, b, c) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// function checaTriangulo(a: number, b: number, c: number): string {
//     if(a !== b && b !== c){
//         return "Escaleno";
//     }else if (a === b && b === c) {
//         return "Equilátero";
//     }else {
//         return "Isósceles";
//     }
// }
// console.log(checaTriangulo(2,2,3))



/// ---------- EXERCÍCIO 2 ----------

// JAVASCRIPT \/
// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

//TYPESCRIPT \/
// function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): void{
//     console.log([cor1, cor2, cor3])
// }

// imprimeTresCoresFavoritas('amarelo', 'vermelho', 'preto')



/// ---------- EXERCÍCIO 3 ----------

// JAVASCRIPT \/
// function checaAnoBissexto(ano) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

// TYPESCRIPT \/
// function checaAnoBissexto(ano: number): boolean {
//     const cond1: boolean = ano % 400 === 0;
//     const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)

//     return cond1 || cond2
// }

// console.log(checaAnoBissexto(2024), checaAnoBissexto(2022));



/// ---------- EXERCÍCIO 4 ----------

// JAVASCRIPT \/ 
// function comparaDoisNumeros(num1, num2) {
//     let maiorNumero;
//     let menorNumero;

//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }

//     const diferenca = maiorNumero - menorNumero;

//     return diferenca 
//   }

// TYPESCRIPT \/ 
// function comparaDoisNumeros(num1: number, num2: number) {
//     let maiorNumero: number;
//     let menorNumero: number;

//     if(num1 > num2){
//         maiorNumero = num1;
//         menorNumero = num2;
//     }else{
//         maiorNumero = num2;
//         menorNumero = num1;
//     }

//     const diferenca = maiorNumero - menorNumero;

//     return diferenca;
// }
// console.log(comparaDoisNumeros(2,6))



/// ---------- EXERCÍCIO 4 ----------

// JAVASCRIPT \/ 
// function checaRenovacaoRG() {
//     const anoAtual = Number(prompt("Digite o ano atual"))
//     const anoNascimento = Number(prompt("Digite o ano de nascimento"))
//     const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

//     const idade = anoAtual - anoNascimento
//     const tempoCarteira = anoAtual - anoEmissao

//     const cond1 = idade <= 20 && tempoCarteira >= 5
//     const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3 = idade > 50 && tempoCarteira >= 15

//     return (cond1 || cond2 || cond3)
//  }

// TYPESCRIPT \/ 
function checaRenovacaoCNH(anoAtual: number,anoNascimento: number, anoEmissao: number): boolean {
    
    const idade: number = anoAtual - anoNascimento
    const tempoCarteira: number = anoAtual - anoEmissao

    const cond1: boolean = idade <= 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3: boolean = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoCNH(2022, 1997, 2010))