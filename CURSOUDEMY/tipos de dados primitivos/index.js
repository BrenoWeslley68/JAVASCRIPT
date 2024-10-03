// String, number, undefined, null, boolean.
const nome = 'Breno'; // String
const nome1 = "Breno"; // String
const nome2 = `Breno`; // String
const num1 = 10; // Number
const num2 = 5.5; // Number
// OBS: Em JS diferente de outras linguagens, tanto numeros inteiros quanto reais(float) são considerados apenas números(Number).
let nomeAluno; // undefined - declara uma variável, mas não a acrescenta valor, lembrando que isso é possível apenas com let
let sobreNomeAluno = null // Nulo - não aponta para local nenhum na memória, = undefined
let aprovado = true // Boolean = true, false (lógico)

console.log(typeof(nome), nome) // 1º mostra o tipo primitivo do dado na variável, 2º mostra o valor da variável.
let a = 2;
let b = a;
console.log(a,b)
a = 3
let conta = a+b
console.log(a,b,conta)
b = a
conta = a+b
console.log(a, b, conta)







