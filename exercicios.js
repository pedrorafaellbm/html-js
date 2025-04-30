function soma(n1, n2, n3) {
    const soma = n1 + n2 + n3;
    return soma;
}

function media(n1, n2, n3) {
        //const soma = n1 + n2 + n3 /3;
        const adicao = soma(n1, n2, n3)
        const media = adicao / 3;
    
        return "A soma é: " + adicao + " e a média é: " + media;
}

console.log(soma(20, 50, 40))
console.log(media(205, 570, 480))