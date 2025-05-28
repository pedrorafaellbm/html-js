function verificarIdade(idade) {
    if (typeof idade !== 'string') {
        const mensagem = `idade: ${idade} anos`

        console.log(mensagem);

        // if, else
        if (idade >= 60) {
            console.log(`véi`);
            // console.log(`se a condição for atendida`)
        } else if (idade >= 12 && idade <= 18) {
            console.log(`aborrecente`);
        } else if (idade < 12) {
            console.log(`Tire a catinga do mijo`);
        } else {
            console.log(`Adultero, segundo o Chaves`);
        }
    } else {
        console.log('por favor informar a idade no formato de número!')
    }
}

verificarIdade(60)