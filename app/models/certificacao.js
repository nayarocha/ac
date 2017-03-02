var Certificacao = function(aluno,disciplina,curso,DataSolicitacao){
    this.aluno = aluno;
    this.disciplina = disciplina;
    this.curso = curso;
    this.DataSolicitacao;

    if(disciplina.length > 4){
        throw new Error ('O aluno só pode se inscrever em até 4 disciplinas por semestre');
    }
}

module.exports = Certificacao;