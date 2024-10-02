const user = {
    nome: 'Pablo',
    email: 'pquiroga@email.com',
    nascimento: '1989-06-16',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);

    }
};

const admin = {
    nome: 'Mariana',
    email: 'mari@email.com',
    nascimento: '1989-06-25',
    role: 'admin',
    ativo: true,
    criarCurso: function () {
        console.log('curso criado');
    }
};

Object.setPrototypeOf(admin, user);

admin.criarCurso()
admin.exibirInfos()