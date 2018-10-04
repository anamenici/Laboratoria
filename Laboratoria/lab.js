
/* Exercício 1:
Idade em segundos: Crie um site que peça ao usuário a idade dele em anos, 
utilizando prompt(), e devolva a idade em segundos, utilizando 
document.write().*/
/* var idadeEmAnos = prompt("Escreva quantos anos você tem");
var idadeEmSegundos = idadeEmAnos * 3154e7;
document.write("Você tem: " + idadeEmSegundos + " segundos de idade!"); */


/* Exercício 2:
Conversor de temperatura:Crie um site que peça ao usuário a 
temperatura em graus Celsius (°C), utilizando prompt(), e devolva, 
no console, a temperatura em graus Farenheit (°F) utilizando console.log(). 
A fórmula matemática para converter de °C a °F é: 
T(°F) = ( T(°C) × 1.8 ) + 32.*/

/* var celsius = prompt("Digite a temperatura, em ° Celsius.");
var farenheit = (celsius * 1.8) + 32;
console.log("A temperatura é: " + farenheit + "° Farenheit."); */

/* Exercício 3:
Ganhos e perdas: Crie um programa que peça os ingressos, os custos e 
o % de impostos, e calcule o ganho depois de impostos. 
Deve imprimir o resultado no site com o símbolo $ na frente.*/

/* var ingressos = prompt("Digite o valor dos ingressos.");
var custos = prompt("Digite o valor dos custos");
var taxaImposto = prompt("Qual é a porcentagem do imposto?");

// renda bruta
var rendaBruta = ingressos - custos;

var impostoTotal = rendaBruta * taxaImposto/ 100;

//renda líquida
var ganhoTotal = rendaBruta - impostoTotal;

document.write("$" + ganhoTotal); */

/* Exercício 4:
Iniciais: Crie um programa que peça o nome e sobrenome do usuário. 
O usuário deve introduzir duas palavras separadas por um espaço, por exemplo: 
"Ana Martinez". O programa deve devolver as iniciais em maiúsculas. 
Vamos ver alguns exemplos: "ana martinez" e "Ana Martinez" devolvem as 
iniciais "AM". "Michelle Seguil" e "michelle seguil" devolvem "MS".*/

var nome = prompt("Digite seu nome e sobrenome.");
var nomeUpper = nome.toUpperCase();
var primeiraInicial = nomeUpper.slice(0,1);
var espaco = nomeUpper.indexOf(" ");
var segundaInicial = nomeUpper.slice(espaco + 1, espaco + 2);
document.write("As iniciais do seu nome são: " + primeiraInicial + segundaInicial);

//Terminei! o/







