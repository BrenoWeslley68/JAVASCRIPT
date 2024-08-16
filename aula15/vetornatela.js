let valores = [1,5,6,8,9,7,3,1]
valores.sort()
/*for(var pos = 0; pos< valores.length; pos++){
    console.log(`O elemento ${pos} tem atribuído a si o valor de ${valores[pos]}`)
}  Ambos os códigos acima e abaixo tem a mesma funcionalidade, a de baixo apenas é mais simplificada
    > valores.indexOf(7) = vai me retornar o valor atribuido dntro do elemento, que nesse caso se encontra no elemento 5 do vetor acima*/
    
for (let pos in valores ) {
    console.log(`A posição ${pos} tem o valor atribuído de ${valores[pos]}`)
}

