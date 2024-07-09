"use strict";
// Pessoa.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
// Exporta a classe Pessoa para ser utilizada em outros módulos
var Pessoa = /** @class */ (function () {
    // Construtor da classe Pessoa, inicializando todos os atributos
    function Pessoa(nome, sobrenome, nome_do_pai, nome_da_mae, numero_rg, numero_cpf, data_de_nascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome_do_pai = nome_do_pai;
        this.nome_da_mae = nome_da_mae;
        this.numero_rg = numero_rg;
        this.numero_cpf = numero_cpf;
        this.data_de_nascimento = new Date(data_de_nascimento);
    }
    // Método para calcular a idade da pessoa com base na data de nascimento
    Pessoa.prototype.calcularIdade = function () {
        var hoje = new Date();
        var nascimento = new Date(this.data_de_nascimento);
        var idade = hoje.getFullYear() - nascimento.getFullYear();
        var diferencaMeses = hoje.getMonth() - nascimento.getMonth();
        if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
console.log('saindo pessoas....');
