function soma(num1, num2){
    return num1+num2;
}
var n1=prompt("digite um numero");
var n2=prompt("digite outro numero");
alert(soma(Number(n1),Number(n2)));

function fraseRepalce(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(fraseReplace("Vai Japão", "Japão", "Brasil"));