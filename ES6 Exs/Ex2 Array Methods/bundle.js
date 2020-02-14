"use strict";

//Ex2
//Breve ex para fixar funções de array do ES6
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //Ex2.1

/*
var idadeArray = usuarios.map(function(item) {
    return item.idade;
});

console.log(idadeArray);
*/
//Ex2.2

/*
var arrFiltrado = usuarios.filter(function(item) {
    if (item.idade >= 18 && item.empresa === 'Rocketseat')
        return true;
    return false;
});

console.log(arrFiltrado);
*/
//Ex2.3

/*
var arrFind = usuarios.find(function(item) {
    return item.empresa === 'Google';
});

console.log(arrFind);
*/
//Ex2.4

var usuariosModificados = usuarios.map(function (item) {
  return {
    nome: item.nome,
    idade: item.idade * 2,
    empresa: item.empresa
  };
});
var usuariosFiltrados = usuariosModificados.filter(function (item) {
  if (item.idade <= 50) return true;
  return false;
});
console.log(usuariosFiltrados);
