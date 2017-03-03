var Certificacao = function(aluno,disciplina,curso,professores,DataSolicitacao){
    this.aluno = aluno;
    this.disciplina = disciplina;
    this.curso = curso;
    this.DataSolicitacao;
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
    
    var x = new Date(this.DataPublicacao); //dia 9
    var i = x.getDate();

    var y = new Date(this.DataSolicitacao); //dia 3
    var z = y.getDate();
    //dataPublic - dataSolicao = 9 -3 = 6 
    //6 <= 7
   

    if(((7-3) <= 7)){
        var avaliacao = new Array(DataPublicacao,arquivo);
        this.situacao = 'avaliação publicada';
        this.avaliacao = avaliacao;
    return true;
    
    }else{
        return false;
    }

}

module.exports = Certificacao; 