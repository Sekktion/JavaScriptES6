    // Ex 3
        // Treinando Arrow Functions

    // Ex 3.1

/*
const arr = [1, 2, 3, 4, 5];

console.log(arr.map(item => item + 10));
*/

    // Ex 3.2

/*
const usuario = { nome: 'Meres', idade: 19 };

const mostraIdade = (usuario => usuario.idade);

console.log(mostraIdade(usuario));
*/

    // Ex 3.3

/*
const nome = "Meres";
const idade = 19;

const mostraUsuario = (nome = 'Vinicius', idade = 20) => {
    return { nome, idade };
}

var obj1 = mostraUsuario(nome, idade);
var obj2 = mostraUsuario(nome);

console.log(obj1);
console.log(obj2);
*/

    //Ex 3.4

const promise = () => new Promise((resolve, reject) =>  resolve());

console.log(promise);