import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    };

    aprovarEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso de ${curso}. Responsável ${this.nome}`;
    };
};

const newDocente = new Docente("Camilla", "cam@gmail.com", "2002-08-06");

// console.log(newDocente);
// console.log(newDocente.aprovarEstudante("Bilu", "Química"));

