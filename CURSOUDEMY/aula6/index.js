let nome = 'João';
let esposa; // apenas declarou, mas não inseriu um valor

console.log('João nasceu em 1984.');

esposa = 'Maria' // Inicializando a variável
nome = 'Breno'

console.log(`${nome} nasceu em 1984.`);
console.log(`Em 2000 ${nome} conheceu Maria`);
console.log(`${nome} casou-se com Maria em 2012`);
console.log(`Maria teve um filho com ${nome} em 2015`);
console.log(`O filho de ${nome} se chama Eduardo`);

// Não podemos criar variáveis com palavras reservadas, Exemplo, definir uma variável chamada 'console', pois já existe uma função com esse nome.

//Váriáveis precisam ter nomes significativos para o que ele serve ou para o que ele indica, não podemos ser um programador contador/alfabeto: let a = ''

// Não pode começar o nome de uma variável com número, exemplo:  let 1numero

//Utlizamos camelCase: Let nomeCompletoDoCliente; Observe que os nomes de variáveis não podem ter espaço
// São Case-sensitive, existe diferenças entre letra maiúscula e minúsculas
//Não podemos redeclarar uma variável let já definida, podemos mudar seu valor, mas não redeclarar.
//NÃO UTILIZAR VAR, UTILIZE LET
