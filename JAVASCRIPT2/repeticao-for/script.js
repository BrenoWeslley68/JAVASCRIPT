/*
Laço de repetição for
Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.
 */
//for(let rep = 0; rep < 10000; rep++){
  //  document.getElementById('teste').innerHTML += ` ${rep} `
//}
/*let data  = new Date().getFullYear()
for (let ano = data; ano > 1900; ano --){
    let iano = document.getElementById('data')
    document.getElementById('iano').innerHTML += `<option> ${ano}</option>`
} */

    const carros = ['gol','fusca', 'del rey', 'brasília', 'mustang']

    for(let contagem =carros; carros <= carros[4]; carros++ ) {
        document.getElementById('teste').innerHTML = `Os carros são: ${carros} `
    }