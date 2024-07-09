"use strict";
// calcularIdade.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo readline-sync para ler dados do console
var readlineSync = require("readline-sync");
// Importa a classe Pessoa do arquivo Pessoa.ts
var pessoas_1 = require("./pessoas");
// Solicita dados da pessoa ao usuário
var nome = readlineSync.question('Digite seu nome: ');
var sobrenome = readlineSync.question('Digite seu sobrenome: ');
var nome_do_pai = readlineSync.question('Digite o nome do seu pai: ');
var nome_da_mae = readlineSync.question('Digite o nome da sua mae: ');
var numero_rg = readlineSync.question('Digite seu numero de RG: ');
var numero_cpf = readlineSync.question('Digite seu numero de CPF: ');
var data_de_nascimento = readlineSync.question('Digite sua data de nascimento (AAAA-MM-DD): ');
// Cria nova instância da classe Pessoa com dados fornecidos pelo usuário
var pessoa = new pessoas_1.Pessoa(nome, sobrenome, nome_do_pai, nome_da_mae, numero_rg, numero_cpf, data_de_nascimento);
// Calcula idade da pessoa usando método calcularIdade da classe Pessoa
var idade = pessoa.calcularIdade();
// Verifica se a pessoa é menor ou maior de idade e exibe as informações relevantes
if (idade < 18) {
    console.log("Menor de idade. Respons\u00E1veis: Pai - ".concat(pessoa.nome_do_pai, ", M\u00E3e - ").concat(pessoa.nome_da_mae));
}
else {
    console.log('Maior de idade. Não necessita responsável.');
}
console.log('saindo CalcularIdade....');
