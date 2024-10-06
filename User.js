export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {

        const atributos = [nome, email, nascimento];
        atributos.forEach(atributo => {
            if (!atributo) throw new Error('informação inválida');

        });

        this.#nome = nome,
        this.#email = email,
        this.#nascimento = nascimento,
        this.#role = role || "estudante",
        this.#ativo = ativo
    };

    get nome() {
        return this.#nome;
    };

    get email() {
        return this.#email;
    };

    get nascimento() {
        return this.#nascimento;
    };

    get role() {
        return this.#role;
    };

    get ativo() {
        return this.#ativo;
    };

    set nome(novoNome) {
        if (!novoNome) {
            throw new Error('Formato do nome não é válido.');
        };
        this.#nome = novoNome;
    };

    // exibirInfos() {
    //     return `${this.nome}, ${this.email}`;
    // };

    exibirInfos() {
        if(this.role  === "estudante") {
            return `dados estudante: ${this.nome}, ${this.email}`
        };

        if(this.role  === "admin") {
            return `dados admin: ${this.nome}, ${this.role}`
        };

        if(this.role  === "docente") {
            return `dados docente: ${this.nome}, ${this.email}`
        };
    }
};