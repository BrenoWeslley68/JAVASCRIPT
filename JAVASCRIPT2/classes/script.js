/*CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as classes. As classes são um conteito antigo em programação e várias linguagens utilizam elas. Mas no JS isso é relativamente novo, por isso, mesmo programadores experientes não sabem usar muito bem.

Basicamente, as classses são "fabricas" para criar objetos.
pode se dizer que são 'funções especiais' para a criação de objetos.

Assim como fábrica da vida real precisa das máquinas para construir os objetos, as classes no JavaScript usam um método chamado constructor() para fabricar os objetos
*/

class Carro {
    constructor(valor1,valor2,valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    toString(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, e ano ${this.ano}`
    }
    buzina(){
        return `${this.modelo} buzinou`
    }
}
const uno = new Carro('fiat', 'uno', 2002)
const camaro = new Carro('chevrolet', 'camaro', 2020)
const corolla = new Carro('toyota', 'corolla', 2024)
alert(uno)
alert(camaro)
alert(corolla)
alert(uno.buzina())
alert(camaro.buzina())
alert(corolla.buzina())
