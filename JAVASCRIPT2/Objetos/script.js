/*
OBJETOS:
Objetos são praticamente variáveis com muitos valores dentro.

EX: const carro = {marca:'ford', modelo:'ka', ano:'2015'}

Os valores dentro do objeto com chamados de propriedades.

Os valores também podem ser métodos. Um Método é uma função colocadas dentro de uma propriedade.

Exemplo:

Objeto -> carro

Propriedades -> carro.marca = ford, carro.modelo = ka, carro.cor = branco, carro.peso = 900kg

Método -> carro.partida(), carro.acelerar(), carro.frear()
*/
const aluno = {
    nome: "Bruno Henrique",
    idade: "24 anos",
    turma: "1ºA",
    escola: "leovegildo",
    sexo: "masculino",
    informacoes (){
        return `As informações do aluno são: Nome ${this.nome}, a idade é ${this.idade}, a turma que estuda é ${this.turma}, a escola é ${this.escola} e o Gênero é ${this.sexo} `
    },
}
document.getElementById('texto').innerHTML = aluno.informacoes()