
function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Leave me here</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.whoismrrobot.com/"); // abri uma nova aba com o link
    //window.location.href= "https://www.whoismrrobot.com/"; // redireciona a pagina atual para o link

}

function trocar(elemento){
    //document.getElementById("mrrobot").innerHTML= "Obrigado por passar o mouse";
    elemento.innerHTML= "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mrrobot").innerHTML= "passe o mouse aqui";
    elemento.innerHTML= "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// var validar= 0;
// function validaIdade(idade){
//     if (idade >= 18){
//         validar= true;
//     }else{
//         validar= false;
//     }
//     return validar;
// }

// var idade= prompt("Digite sua idade");
// validaIdade(idade)
// console.log(validar);

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

//alert(soma(5,10));
//alert(setReplace("Vai Brasil !!!", "Brasil", "Holanda"));


/* var d= new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getSeconds());
alert(d.getHours());
alert(d.getDay());
alert(d.getDate());
alert(d.getFullYear());
alert(d.getUTCFullYear());
alert(d.getTime());
 */
/* var count;
for (count= 0; count<= 5; count++){
    console.log(count);
    alert(count);

}; */


/* var count= 0;
while (count <= 5){
    console.log(count);
    alert(count)
    count+= 1; // pode usar count++
}; */


/* var idade= prompt("Qual sua idade? "); // usa prompt para entrada de dados
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; */

/* var frutas= [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"laranja", cor:"verde"}]
console.log(frutas);
alert(frutas[1].nome); */

/* var fruta= {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor); */


/* var lista= ["maça", "pêra", "laranja"];
lista.push("uva"); // Adiciona um item a lista
lista.pop() // remove o ultimo item da lista
console.log(lista); // imprime a lista no console
console.log(lista.length); // mostra a quantidade de elementos da lista
console.log(lista.reverse()); // inverte a ordem dos elementos da lista
console.log(lista.toString()); // transforma a lista em uma string
console.log(lista.join(" | "));
console.log(lista[1]); // imprime o segundo item da lista no console
alert(lista[1]); // mostra um pop up na pagina com o segundo item da lista */

/* var nome= "Neville Guimarães";
var n1= 5;
var n2= 3; 
var idade= 22;
var frase= "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(idade * idade);
console.log(frase.replace("Japão", "Rússia")); // substitui uma palavra por outra
console.log(frase.toUpperCase()); // deixa todas as palavras com letra maiuscula
console.log(frase.toLowerCase()); // deixa todas as palavras com letras minusculas
//alert(frase.replace("Japão", "Russia")); */