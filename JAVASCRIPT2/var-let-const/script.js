/* Vamos entender Variáveis

Váriáveis são 'recipientes' onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No javascript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/ 
var pote = 'bombom';
alert(pote);
var a = 1;
var b = 2;
var c = b+a;

var d,e,f,g;

d = 2;
e = 3;
f = 4;
g = d+e+f;
g += e;

console.log(g);

var nome, sobrenome, dataNascimento, informações;

nome = 'Breno';
sobrenome = 'Weslley';
dataNascimento = '01/10/2002';
informações = nome +' '+ sobrenome +' '+ dataNascimento;
// Não é uma boa prática tentar concatenar strings e números

console.log(informações);

// Diferenças entre: var, leet e const
//let pessoa = 'dimitri';
//let pessoa = 'joão';
//let não permite revalorização de variável, no caso vc teria que revalorizar na primeira unidade, não apenas adicionar uma variável abaixo,


//var pessoa = 'dimitri';
//var pessoa = 'joao';
//No caso do var, você pode revalorizar a variavel acima apenas adicionando outro valor a ela abaixo


//const é uma variável imutável, independente se o valor estiver dentro de um bloco ou como variável global, uma vez definido, não poderá ser mudada, 


let x = 10;

{
    let x = 2 // mesmo que esse resultao esteja abaixo do interior e ambos tenha o mesmo nome, o valor dois só  vale dentro o bloco.
}
document.getElementById('texto').innerHTML = x // o valor x nesse caso pertence a variável global: let x = 10