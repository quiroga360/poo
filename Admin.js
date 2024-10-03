import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    };

    criarCurso(nomeCurso, qtdVagas) {
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
    };
};

const newAdmin = new Admin("Julia", "juqa@mail.com", "2000-08-24");

// console.log(newAdmin);
// console.log(newAdmin.exibirInfos());
// console.log(newAdmin.criarCurso("ads", 5));
