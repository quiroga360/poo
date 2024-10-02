function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    };
};

const pablo = new User("Pablo", "quirogalogins@gmail.com");

console.log(pablo)