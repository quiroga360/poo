const user = {
    nome: 'Pablo',
    email: 'pquiroga@email.com',
    nascimento: '1989-06-16',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
        
    }
}

user.exibirInfos();