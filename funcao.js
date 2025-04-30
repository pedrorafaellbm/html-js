//sintaxe da função
function nome(/* argumentos, parâmetros */) { //argumentos, parâmetros: são entradas de dados para a função utilizar
    //bloco de código, logica
}

//executar, chamando pelo nome
nome()

//1- Somar dois números
function somaDoisNúmeros(n1, n2) {
    //let n1 = 50;
    //let n2 = 70;

    let resultado = n1 + n2;
    console.log(resultado)

    //o código é interrompido após o return, se houver algo abaixo, não será executado
    return resultado;

    const teste = 'OI!'
}

//console.log(somaDoisNúmeros())

//os parâmetros/argumentos
somaDoisNúmeros(20, 50)
somaDoisNúmeros(100, 400)
somaDoisNúmeros(2434324.24, 23423424424.32)