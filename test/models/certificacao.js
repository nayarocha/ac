var assert = require('assert');
var should = require('should');
var assert = require('chai');

var Aluno = require('../../app/models/aluno.js');
var Disciplina = require('../../app/models/disciplina.js')
var Curso = require('../../app/models/curso.js')

describe('# Teste da classe certificação', function() {
    describe('## Construtores', function() {
        it('Solicitação de Certificacao - Válido - até 4 disciplinas', function() {
            var aluno = new Aluno ('Bob esponja');
            var disciplina =  new Array('interfaces ricas','web design');
            var curso = new Curso('tads');
            var DataSolicitacao = new Date(2017,3,2);
            var novaSolicitacao = new Array(aluno,disciplina,curso,DataSolicitacao);

            disciplina.length.should.be.within(0, 4);
            novaSolicitacao.should.not.be.empty();
        }); 
    });   
});