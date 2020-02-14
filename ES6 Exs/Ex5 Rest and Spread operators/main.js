    //Ex 5
        //Praticando uso de rest e spread

    //Ex 5.1
        //Rest em vetor
/*
const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log(x);
console.log(y);
*/

    //Ex 5.2
        //Spread em objeto

const usuario = {
    nome: 'Vinícius',
    idade: 19,
    endereco: {
        cidade: 'Uberlândia',
        uf: 'MG',
        pais: 'Brasil',
    },
};

const usuario2 = { ...usuario, nome: 'Milena', endereco: { ...usuario.endereco, cidade: 'Uberaba'} };

console.log(usuario2);