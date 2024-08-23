/*
Vamos entender os Operadores:
Os operadores JavaScript são utilizados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: +,-,*,/,=,++,--,+=,-=,&&,||, etc

São separados em 6 categorias:

1) Operadores Aritméticos matemáticos;
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operadores Condicional(ternário)
6) Operadores Lógicos
*/ 
var valor1, valor2, valor3, valor4;
valor1 = 5;
valor2 = 2;
total = valor1 + valor2;
console.log(total);

//valor1 += valor2 é o mesmo que valor1 = valor1 + valor2
valor3 = 10
valor4 = '10'
//alert(valor3 +' '+ valor4) // No caso de String, o simbolo + deixa de ser aritmético(matemático), e passa a ser de junção(Concatenação)
igual = (valor3 === valor4) //Verdadeiro ou falso
//alert(igual)

var idade,eleitor;
idade = 18;
eleitor= (idade >= 18) ? 'sim eleitor':'não, eleitor' //Operador ternário
//alert(`A resposta é ${eleitor}`) 

var iidade, eeleitor, resultado;
iidade = 61 
eeleitor = (iidade < 18) ? 'Sim, eleitor': 'Não eleitor'
resultado = !(iidade === 60 || iidade === 70);
alert(resultado)