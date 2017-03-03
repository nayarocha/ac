var Certificacao = function(aluno,disciplina,curso,professores,DataSolicitacao){
    this.aluno = aluno;
    this.disciplina = disciplina;
    this.curso = curso;
    this.DataSolicitacao = DataSolicitacao;
    this.DataPrazoPublicacao;
    this.DataDaProva;
    this.avaliacao = null;
    this.professores = professores;
    this.status = 'em andamento';

    if(disciplina.length > 4){
        throw new Error ('O aluno só pode se inscrever em até 4 disciplinas por semestre');
    }

    if(professores.length < 3){
           throw new Error ('Deverá ser cadastrado 3 professores');
    }
};

Certificacao.prototype.submissaoDaAvaliacao = function(DataPublicacao,arquivo){
    var prazo = DataPublicacao - (this.DataSolicitacao.getDate());
    //dataPublicacao - dataSolicitacao = 9 -3 = 6 
    //6 <= 7
    if(((prazo) <= 7)){
        var avaliacao = new Array(DataPublicacao,arquivo);
        this.situacao = 'avaliação publicada';
        this.avaliacao = avaliacao;
       
    return true;
    
    }else{
        return false;
    }

}

module.exports = Certificacao; 