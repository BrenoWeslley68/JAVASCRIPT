/*
EVENTOS DE TEMPO COM JS

Os eventos de tempo permitem a execução de códigos em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com Javascript são:

setTimeout(function, tempo em milissegundos)
-> Executa uma função depois de esperar um tempo especificado em milissegundos.

setInterval(function, milissegundos)
-> É o mesmo que o setTimeout(), mas repete a execução da função infinitamente.
 */
function comecaContar(){
    let tempo = 1000
    document.getElementById('tempo').innerHTML = 'começará a contar'
    let intervalo = setInterval(function(){tempo--; document.getElementById('tempo').innerHTML = tempo
        if (tempo <= 1){
            clearInterval(intervalo)
        }
    }, 500)

}