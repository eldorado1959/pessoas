// calcularIdade.ts

// Importa o módulo readline-sync para ler dados do console
import * as readlineSync from 'readline-sync';
// Importa a classe Pessoa do arquivo Pessoa.ts
import { Pessoa } from './pessoas';

// Solicita dados da pessoa ao usuário
const nome = readlineSync.question('Digite seu nome: ');
const sobrenome = readlineSync.question('Digite seu sobrenome: ');
const nome_do_pai = readlineSync.question('Digite o nome do seu pai: ');
const nome_da_mae = readlineSync.question('Digite o nome da sua mae: ');
const numero_rg = readlineSync.question('Digite seu numero de RG: ');
const numero_cpf = readlineSync.question('Digite seu numero de CPF: ');
const data_de_nascimento = readlineSync.question('Digite sua data de nascimento (AAAA-MM-DD): ');

// Cria nova instância da classe Pessoa com dados fornecidos pelo usuário
const pessoa = new Pessoa(nome, sobrenome, nome_do_pai, nome_da_mae, numero_rg, numero_cpf, data_de_nascimento);

// Calcula idade da pessoa usando método calcularIdade da classe Pessoa
const idade = pessoa.calcularIdade();

// Verifica se a pessoa é menor ou maior de idade e exibe as informações relevantes
if (idade < 18) {
    console.log(`Menor de idade. Responsáveis: Pai - ${pessoa.nome_do_pai}, Mãe - ${pessoa.nome_da_mae}`);
} else {
    console.log('Maior de idade. Não necessita responsável.');
}

console.log('saindo CalcularIdade....');

