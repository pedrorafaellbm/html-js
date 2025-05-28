let nome = 'Pedro'
let sobrenome = 'Rafael'

let funcao = 'professor'

//como eu sei
console.log(funcao, nome, sobrenome)

//melhorando
console.log(funcao +  ':', nome.toUpperCase(), sobrenome.toUpperCase())

let nome_uusuário = nome + '.' + sobrenome
console.log(nome_uusuário.toLowerCase())

//interpolação de string
let user = `${nome}.${sobrenome}`
let usuário = `Nome de Usuário: ${user.toLowerCase()}`
console.log(usuário)

//Nome de Usuário: pedro.rafael