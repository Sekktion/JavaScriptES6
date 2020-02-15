import Axios from "axios";

//Ex 1.1
    // Função delay aciona o .then após 1s
/*
const delay = () => new Promise(resolve => setTimeout(() => { resolve('OK') }, 1000));

async function umPorSegundo() {
    console.log(await delay());
    console.log(await delay());
    console.log(await delay());
}

umPorSegundo();
*/

//Ex 1.2
    //Função assíncrona retorna dados da API do GitHub do usuário inserido
    //Parecido com o que fiz anteriormente apenas com promises.

/*
import axios from 'axios';

class Api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response.data);
        } catch (err) {
            console.warn('API Error');
        }
    }
}
Api.getUserFromGithub('Sekktion');
Api.getUserFromGithub('Sekktion12545412315');
*/

//Ex 1.3
    //Exercicio quase idêntico ao anterior, mudando apenas alguns detalhes

/*
import axios from 'axios';

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.warn('API Error');
            console.log('Repositório não existe.')
        }
    }
}

Github.getRepositories('Sekktion/JavaScriptES6');
Github.getRepositories('Sekktion/Kotlin');
*/

//Ex 1.4
    //Exercicio também muito parecido aos anteriores, a diferença
    //é na implementação do axios, já que não estou usando Classes
    //desta vez.

import axios from 'axios';

const buscaUsuario = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('API Error');
        console.log('Usuário não existe');
    };
}

buscaUsuario('Sekktion');