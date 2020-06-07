function soma(num1, num2){
    return num1+num2;
}
var n1=prompt("digite um numero");
var n2=prompt("digite outro numero");
alert(soma(Number(n1),Number(n2)));

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
alert(validarIdade(31));
alert(fraseReplace("Vai Japão", "Japão", "Brasil"));