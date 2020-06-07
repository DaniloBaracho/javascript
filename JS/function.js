function soma(num1, num2){
    return num1+num2;
}
var n1=Number(prompt("digite um numero"));
var n2=Number(prompt("digite outro numero"));
alert(soma(n1,n2));

function fraseReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}
function validarIdade(idade){
    var validar=true;
    if (idade>=18){
        validar=true;
    }
    else
        validar=false;
    return validar;    
}
var idade=Number(prompt("Digite a sua idade"));
alert(validarIdade(idade));
alert(fraseReplace("Vai Japão", "Japão", "Brasil"));