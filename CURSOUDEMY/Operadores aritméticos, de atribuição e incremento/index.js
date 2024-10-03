/*
Aritméticos
    + Adição/Concatenação
    -, *, /, **
    % Resto da divisão, se o resto da divisão for 0, o numero é par, senão, é impar.

Niveis de precedência:
    () 
    **
    * / %
    + -
*/
const num1 = 5;
const num2 = 10;
const soma = num1 + num2;
console.log(soma);

const num3 = 5;
const num4 = 10;
const multiplicacao = num3 * num4;
console.log(multiplicacao);

const num5 = 5;
const num6 = 10;
const divisao = num5 / num6;
console.log(divisao);

const num7 = 2;
const num8 = 10;
const potencia = num7 ** num8;
console.log(potencia);

const num9 = 5;
const num10 = 10
const restoDivisao = num10 % num9;
console.log(restoDivisao);

let valor = 1;
valor++;// isso quer dizer que estou pedindo para incrementar o valor de "valor" + 1 = 2
valor++;//3
valor++;//4
valor++;//5
valor++;//6
valor++;//7
console.log(valor);
console.log(++valor);// adiciona mais um valor em 'valor' na própria função, isso só é possível se o incremento vier antes da variável conforme realizado na operação.
console.log(--valor);// -- é uma operação de decremento, onde só é possível realizar a operação na função igualmente na operação acima.
console.log(valor--);// um exemplo que não funciona na função, mas se realizarmos o console novamento o valor ja tera decrementado -1.


contador = 0;
passo = 50;
contador += passo // contador = contador + passo
console.log(contador)
contador += passo // contador = contador + passo
console.log(contador)
contador += passo // contador = contador + passo
console.log(contador)
//Funciona como uma estrutura de repetição manual, que posteriormente o que estudarei (while)
