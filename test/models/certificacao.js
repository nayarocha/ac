var assert = require('assert');
var should = require('should');
var assert = require('chai');

var aluno = require('../../app/models/aluno.js');

describe('# Teste da classe certificação', function() {
    describe('## Construtores', function() {
        it('Solicitação de Certificacao', function() {
            var aluno = new aluno ('Bob esponja');
            var disciplina =  new disciplina('interfaces ricas');
            var curso = new curso('tads');
            var DataSolicitacao = new Date(year,month,day);
            var novaSolicitacao = new Array(aluno,disciplina,curso,DataSolicitacao);
            novaSolicitacao.should.not.be.empty();
        }); 
    });   
});