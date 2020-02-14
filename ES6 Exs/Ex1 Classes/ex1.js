class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        console.log(this.admin);
    }
}

class Admin extends Usuario {
    constructor() {
        super();

        this.admin = true;
    }
}

const user1 = new Usuario('teste@email.com', 'senha123');
const adm1 = new Admin('email@admin.com','senha123');

user1.isAdmin();
adm1.isAdmin();