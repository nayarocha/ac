var assert = require('assert');
var should = require('should');
var assert = require('chai');

var Aluno = require('../../app/models/aluno.js');
var Certificacao = require('../../app/models/certificacao')
var Curso = require('../../app/models/curso.js')

describe('# Teste da classe certificação', function() {
    describe('## Construtores', function() {
        it('Solicitação de Certificacao - Válido - até 4 disciplinas', function() {
            var curso = new Curso('tads',2160);
            var aluno = new Aluno ('Bob esponja','201339402042',curso);
            var disciplina =  new Array('interfaces ricas','web design'); 
            var professores = new Array("prof1","prof2","prof3");
            var DataSolicitacao = new Date(2017,3,2);
            var solicitarCertificacao = new Certificacao(aluno,disciplina,curso,professores,DataSolicitacao);
            professores.length.should.be.equal(3);
            disciplina.length.should.be.within(0, 4);
            solicitarCertificacao.should.not.be.empty();
            console.log(solicitarCertificacao);
        }); 

        /*it('Confeccao da avaliacao e upload da prova', function() {
            var aluno = new Aluno ('Bob esponja');
            var disciplina =  new Array('interfaces ricas','web design');
            var curso = new Curso('tads');
            var DataSolicitacao = new Date(2017,3,2);
            
            var prazo = (DataSolicitacao.getDate()) + 5;
            var solicitarCertificacao = new Certificacao(aluno,disciplina,curso,DataSolicitacao);
            
           
            var arquivo = ('arquivo.txt');
            var andamento = solicitarCertificacao.andamentoCertificacao(professores,prazo,arquivo);
            console.log(andamento);
        });*/ 
    });   
});

