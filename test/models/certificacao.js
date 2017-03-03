var assert = require('assert');
var should = require('should');
var assert = require('chai');

var Aluno = require('../../app/models/aluno.js');
var Certificacao = require('../../app/models/certificacao')
var Curso = require('../../app/models/curso.js')

describe('# Teste da classe certificação', function() {
    describe('--- CERTIFICAÇÃO ---', function() {
       
        it('# Solicitação de Certificacao - Válido - até 4 disciplinas', function() {
            var curso = new Curso('tads',2160);
            var aluno = new Aluno ('Bob esponja','201339402042',curso);
            var disciplina =  new Array('interfaces ricas','web design'); 
            var professores = new Array("prof1","prof2","prof3");
            var DataSolicitacao = new Date(2017,3,2);
            var solicitarCertificacao = new Certificacao(aluno,disciplina,curso,professores,DataSolicitacao);
            professores.length.should.be.equal(3);
            disciplina.length.should.be.within(0, 4);
            solicitarCertificacao.should.not.be.empty();
            
        }); 

        it('## Submissão da avaliação -VÁLIDO', function() {
            var aluno = new Aluno ('Bob esponja');
            var disciplina =  new Array('interfaces ricas','web design');
            var professores = new Array("prof1","prof2","prof3");
            var curso = new Curso('tads');
            var DataSolicitacao = new Date("2/3/2017"); 
            var solicitarCertificacao = new Certificacao(aluno,disciplina,curso,professores,DataSolicitacao);
            //variavel que simula a quantidade de dias depois q foi feito upload da prova no sistema
            var x = 6; 
            
            var DataSolicitar = (DataSolicitacao.getDate());
            var DataPublicacao = (DataSolicitacao.getDate()) + x;
           // console.log((DataSolicitacao.getDate()));
            var arquivo = ('arquivo.txt');
            
           x.should.belowOrEqual(7); 
           //console.log(DataPublicacao);
            var submissao = solicitarCertificacao.submissaoDaAvaliacao(DataSolicitar,DataPublicacao,arquivo);
            submissao.should.be.eql(true);
           
        }); 

         it('## Submissão da avaliação -INVÁLIDO', function() {
            var aluno = new Aluno ('Bob esponja');
            var disciplina =  new Array('interfaces ricas','web design');
            var professores = new Array("prof1","prof2","prof3");
            var curso = new Curso('tads');
            var DataSolicitacao = new Date("2/3/2017"); 
            var solicitarCertificacao = new Certificacao(aluno,disciplina,curso,professores,DataSolicitacao);
            //variavel que simula a quantidade de dias depois q foi feito upload da prova no sistema
            var x = 9; 
            
            var DataSolicitar = (DataSolicitacao.getDate());
            var DataPublicacao = (DataSolicitacao.getDate()) + x;
           // console.log((DataSolicitacao.getDate()));
            var arquivo = ('arquivo.txt');
            
          // x.should.belowOrEqual(7); 
           //console.log(DataPublicacao);
            var submissao = solicitarCertificacao.submissaoDaAvaliacao(DataSolicitar,DataPublicacao,arquivo);
            submissao.should.be.eql(true);
           
        }); 

        it('## Notificação ao aluno - VÁLIDO', function() {
            var aluno = new Aluno ('Bob esponja');
            var disciplina =  new Array('interfaces ricas','web design');
            var professores = new Array("prof1","prof2","prof3");
            var curso = new Curso('tads');
            var DataSolicitacao = new Date("2/3/2017"); 
            var solicitarCertificacao = new Certificacao(aluno,disciplina,curso,professores,DataSolicitacao);
            //variavel que simula a quantidade de dias depois q foi feito upload da prova no sistema
            var x = 9; 
            
            var DataSolicitar = (DataSolicitacao.getDate());
            var DataPublicacao = (DataSolicitacao.getDate()) + x;

            var dataNotificacao = (DataPublicacao + 5);

            var submissao = solicitarCertificacao.notificacaoAluno(dataNotificacao);
            submissao.should.be.eql(true);
           
        }); 
    });   
});

