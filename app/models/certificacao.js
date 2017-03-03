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
};

Certificacao.prototype.andamentoCertificacao = function(professores,data,uploadArquivo){
   var andamentoCertificacao = this.Certificao(professores,data,uploadArquivo);
   
    /*if( (data.getDay() + 7) >  this.DataSolicitacao){
        print(data.getDay());
        var professores = new Array("prof 1","prof 2", "prof3");
        var prova = ('arquivo.txt');

    }else{
          throw new Error ('passou do prazo');
          print(data.getDay());
    }*/

}

module.exports = Certificacao; 