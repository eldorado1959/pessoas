// Pessoa.ts

// Exporta a classe Pessoa para ser utilizada em outros módulos
export class Pessoa {
    nome: string;
    sobrenome: string;
    nome_do_pai: string;
    nome_da_mae: string;
    numero_rg: string;
    numero_cpf: string;
    data_de_nascimento: Date;

    // Construtor da classe Pessoa, inicializando todos os atributos
    constructor(
        nome: string,
        sobrenome: string,
        nome_do_pai: string,
        nome_da_mae: string,
        numero_rg: string,
        numero_cpf: string,
        data_de_nascimento: string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome_do_pai = nome_do_pai;
        this.nome_da_mae = nome_da_mae;
        this.numero_rg = numero_rg;
        this.numero_cpf = numero_cpf;
        this.data_de_nascimento = new Date(data_de_nascimento);
    }

    // Método para calcular a idade da pessoa com base na data de nascimento
    calcularIdade(): number {
        const hoje = new Date();
        const nascimento = new Date(this.data_de_nascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const diferencaMeses = hoje.getMonth() - nascimento.getMonth();
        if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    }
}

console.log('saindo pessoas....');


