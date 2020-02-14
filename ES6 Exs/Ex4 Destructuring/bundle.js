"use strict";

//Ex 4
// Treinando Desestruturação
//Ex 4.1  Desestruturação Simples

/*
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);
*/
//Ex 4.2  Desestruturação em parâmetros
function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log("".concat(nome, " tem ").concat(idade, " anos."));
}

mostraInfo({
  nome: 'Vinicius',
  idade: 19
});
