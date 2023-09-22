let num = [2,2,7,2]
console.log(num);
num.unshift(12);
console.log(num);
num.push(9)
console.log(num);
num.sort()
console.log(num);

/*
console.log(`nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro número é ${num[0]}...`)
*/

var cont = num.indexOf(7) //se for -1 significa que não foi encontrada a posição, se for encontrada ele mostra a posição 
if(cont !== -1){
console.log(`O valor está na posição ${cont}`)
}else{
    console.log("número não encontrado...")
}

/*
//funciona
var cont = 0
for(var pos = 0; pos < num.length; pos++){
    
    cont += 1
    console.log(`${cont}º número: ${num[pos]}..`)
    
}

//funciona de um jeito simplificado
for(let pos in num){
    console.log(num[pos])
}
*/