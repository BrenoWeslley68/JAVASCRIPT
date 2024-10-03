const nome = 'Breno Weslley';
const idade = 22;
const peso = 70;
const AlturaEmM = 1.69;

const imc = peso / (AlturaEmM ** 2);

const dataAtual = new Date().getFullYear();
const anoNascimento = dataAtual - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg tem ${AlturaEmM}m de altura e seu imc é de ${imc.toFixed(2)} `);
console.log(`O ano de nascimento de ${nome} é ${anoNascimento}`);