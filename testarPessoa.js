"use strict";
// testarPessoa.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo readline-sync para ler dados do console
var readlineSync = require("readline-sync");
// Importa a classe Pessoa do arquivo Pessoa.ts
var pessoas_1 = require("./pessoas");
// Solicita dados da pessoa ao usuário
var nome = readlineSync.question('Digite seu nome: ');
var sobrenome = readlineSync.question('Digite seu sobrenome: ');
var nome_do_pai = readlineSync.question('Digite o nome do seu pai: ');
var nome_da_mae = readlineSync.question('Digite o nome da sua mãe: ');
var numero_rg = readlineSync.question('Digite seu número de RG: ');
var numero_cpf = readlineSync.question('Digite seu número de CPF: ');
var data_de_nascimento = readlineSync.question('Digite sua data de nascimento (AAAA-MM-DD): ');
// Cria uma nova instância da classe Pessoa com os dados fornecidos pelo usuário
var pessoa = new pessoas_1.Pessoa(nome, sobrenome, nome_do_pai, nome_da_mae, numero_rg, numero_cpf, data_de_nascimento);
// Exibe os dados da pessoa no console
console.log('Dados da Pessoa:');
console.log("Nome: ".concat(pessoa.nome, " ").concat(pessoa.sobrenome));
console.log("Nome do Pai: ".concat(pessoa.nome_do_pai));
console.log("Nome da Mae: ".concat(pessoa.nome_da_mae));
console.log("N\u00FAmero de RG: ".concat(pessoa.numero_rg));
console.log("N\u00FAmero de CPF: ".concat(pessoa.numero_cpf));
console.log("Data de Nascimento: ".concat(pessoa.data_de_nascimento.toDateString()));
console.log('saindo testarpessoas....');
