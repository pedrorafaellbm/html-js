const idade = 60
const mensagem = `idade: ${idade} anos`

console.log(mensagem);

// if, else
if (idade >= 60) {
    console.log(`véi`);
    // console.log(`se a condição for atendida`)
} else if (idade >= 12 && idade <= 18) {
    console.log(`aborrecente`);
} else if (idade <12) {
    console.log(`Tire a catinga do mijo`);
    // console.log(`se a condição NÃO for atendida`)
} else {
    console.log(`Adultero, segundo o Chaves`);
}

