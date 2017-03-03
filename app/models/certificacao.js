var Certificacao = function(aluno,disciplina,curso,professores,DataSolicitacao){
    this.aluno = aluno;
    this.disciplina = disciplina;
    this.curso = curso;
    this.DataSolicitacao;
    this.DataPrazoPublicacao;
    this.DataDaProva;
    this.professores = professores;
    this.status = "em andamento";

    if(disciplina.length > 4){
        throw new Error ('O aluno só pode se inscrever em até 4 disciplinas por semestre');
    }

    if(professores.length < 3){
           throw new Error ('Deverá ser cadastrado 3 professores');
    }
};


module.exports = Certificacao; 