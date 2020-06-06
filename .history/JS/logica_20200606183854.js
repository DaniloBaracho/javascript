var idade=prompt("Qual sua idade?");
if(idade>=18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
var count=0;
/*while(count<=5){
    console.log(count);
    count++;
}
for(i=0; i<=5; i++){
    alert(i);
}
*/

/*var lista = [“Alemanha”, “Inglaterra”, “Escócia”]
lista.push(“Polônia”);
lista.pop(“Inglaterra”);
alert(lista);*/
/*var prova=["mãe", "floresta", "avó"];
alert(prova.toString());
prova.pop();
alert(prova);*/
d= new Date();
console.log(d.getDate()+"/"+d.getMonth());