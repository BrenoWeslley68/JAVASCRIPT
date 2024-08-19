function soma ( n1, n2){
    if(n1 + n2 < 14) {
        return "devendo"
    } else if(n1 + n2 == 15){
        return "Pago"
    } else{
        return 'Com crédito'
    }
}
console.log(soma(0,15))
function v (x) {
    return x*2
}
console.log(v(5))
// 5! =  5 x 4 x 3 x 2 x 1 
function fatorial (n){
   var fat = 1 
    for( var c = n; c > 1; c--){
        fat*= c
    }
    return fat

}
console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!
n! = n x (n-1)!
1! = 1
*/
function fatorial (n) {
    if (n == 1 ){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))