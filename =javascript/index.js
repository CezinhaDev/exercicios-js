// estrutura if

// if(expressao) {
//     // codigo

let temperatura = 0

if(temperatura >= 37.5) {
    console.log('Febre alta')
} else if(temperatura < 37.5 && temperatura >= 37) {                    // else if
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}        


let n1 = 10
let n2 = 5
soma = n1 + n2

if(soma >7){
    console.log('Aprovado')
} else if(soma < 7 && soma >= 4){
    console.log('Recuperação')
}

// Exercício 1


function maior(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var n3 = parseFloat(document.getElementById("num3").value);

    if(n1 > n2 && n1 > n3){
        alert('O maior número é: ' + n1);
    } else if(n2 > n1 && n2 > n3){
        alert('O maior número é: ' + n2);
    } else {
        alert('O maior número é: ' + n3);
    }
}


function inverterNumeros() {
    // Pedir dois números inteiros ao usuário
    var n1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    var n2 = parseInt(prompt("Digite o segundo número inteiro:"));

    // Armazenar os valores originais
    var antes1 = n1;
    var antes2 = n2;

    // Inverter os valores
    var temp = n1;
    n1 = n2;
    n2 = temp;

    // Exibir os valores antes e depois da inversão
    alert("Antes da inversão:\nNúmero 1: " + antes1 + "\nNúmero 2: " + antes2);
    alert("Depois da inversão:\nNúmero 1: " + n1 + "\nNúmero 2: " + n2);
}

// Chamar a função para executar o script
inverterNumeros();