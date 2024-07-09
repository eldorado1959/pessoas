// testarPessoa.ts

// Importa o módulo readline-sync para ler dados do console
import * as readlineSync from 'readline-sync';
// Importa a classe Pessoa do arquivo Pessoa.ts
import { Pessoa } from './pessoas';

// Solicita dados da pessoa ao usuário
const nome = readlineSync.question('Digite seu nome: ');
const sobrenome = readlineSync.question('Digite seu sobrenome: ');
const nome_do_pai = readlineSync.question('Digite o nome do seu pai: ');
const nome_da_mae = readlineSync.question('Digite o nome da sua mãe: ');
const numero_rg = readlineSync.question('Digite seu número de RG: ');
const numero_cpf = readlineSync.question('Digite seu número de CPF: ');
const data_de_nascimento = readlineSync.question('Digite sua data de nascimento (AAAA-MM-DD): ');

// Cria uma nova instância da classe Pessoa com os dados fornecidos pelo usuário
const pessoa = new Pessoa(nome, sobrenome, nome_do_pai, nome_da_mae, numero_rg, numero_cpf, data_de_nascimento);

// Exibe os dados da pessoa no console
console.log('Dados da Pessoa:');
console.log(`Nome: ${pessoa.nome} ${pessoa.sobrenome}`);
console.log(`Nome do Pai: ${pessoa.nome_do_pai}`);
console.log(`Nome da Mae: ${pessoa.nome_da_mae}`);
console.log(`Número de RG: ${pessoa.numero_rg}`);
console.log(`Número de CPF: ${pessoa.numero_cpf}`);
console.log(`Data de Nascimento: ${pessoa.data_de_nascimento.toDateString()}`);


console.log('saindo testarpessoas....');


