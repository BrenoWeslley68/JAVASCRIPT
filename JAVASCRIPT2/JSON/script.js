/*
JSON
JSON significa JavaScript Object Notation que traduzido para o português fica algo como, notação de objeto em JavaScript.
Explicando de modo simples, JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto. 

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de  texto é lido praticamente toda linguagem de programação.

Para trabalhar com JSON em JavaScript usamos dois métodos:

JSON.parse() -> Converte texto do padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON   

*/
/*const carro = {
    marca:'fiat',
    modelo: 'uno',
    motor:['1.6', '1.4', '1.0']
}
//CONVERTEU O TEXO NO NOSSO HTML
let texto = JSON.stringify(carro);
//COLOCOU O TEXTO EM NOSSO HTML
document.getElementById('area').innerHTML = texto
//CONVERTERU O TEXTO JSON EM OBJETO
let obj = JSON.parse(texto)
//MOSTOU UM OBJETO MODELO EM NOSSO CONSOLE
console.log(obj.motor[1]) */


 function buscarCep(){
    let campoTexto = document.getElementById('cep').value

    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${campoTexto }/json/`)
    ajax.send();
    ajax.onload = function(){
        let obj = JSON.parse(this.responseText)
        let logradouro = obj.logradouro
        let city = obj.localidade
        let cep = obj.cep
        alert(`${ logradouro} ${cep} ${city}`)
    }
 }
