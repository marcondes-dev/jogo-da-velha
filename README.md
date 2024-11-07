Trabalho Final: Padrões de projetos e multicamadas

Guilherme Ramos Marcondes

Projeto: Jogo da velha, desenvolvido para o professor Vini no início do curso (provavelmente no segundo período).

1. Separar a Lógica do Jogo em uma Classe (Padrão: Singleton)
Motivo: No código atual, todas as variáveis e funções estão soltas no escopo global. Isso pode causar problemas de manutenção e possíveis conflitos de variáveis. Colocar a lógica do jogo em uma classe permite centralizar e encapsular o estado e as regras do jogo, além de facilitar o entendimento e reaproveitamento do código.

Como ficaria:

A classe JogoDaVelha seria um Singleton, garantindo que apenas uma instância do jogo esteja ativa.

class JogoDaVelha {
    static instancia;

    constructor() {
        if (JogoDaVelha.instancia) {
            return JogoDaVelha.instancia;
        }
        this.vezJogador = true;
        this.jogada = 0;
        this.proximoJogador = 'X';
        this.fim = false;
        JogoDaVelha.instancia = this;
    }

    validarClick(event) {
        // lógica de clique
    }

    validarPosicoes(posicao) {
        //ógica de validação de posições 
    }

    validarVitoria(listaValores) {
        //lógica de verificação de vitória
    }

    ganhou() {
        // lógica de vitória 
    }

    velha() {
        // lógica de empate
    }
}

const jogo = new JogoDaVelha();

2. Implementar uma Fábrica para Gerenciar o Estado de Cada Posição (Padrão: Factory)
Motivo: Em vez de gerenciar manualmente o estado de cada posição, a Factory pode criar e gerenciar instâncias de um objeto Posicao, facilitando o controle dos elementos. Cada posição poderia ter métodos específicos para alterar o conteúdo e verificar se está vazia.

Como ficaria:

class Posicao {
    constructor(id) {
        this.id = id;
        this.valor = 'A';
    }

    setValor(valor) {
        this.valor = valor;
        document.getElementById(this.id).innerHTML = valor;
    }

    isVazia() {
        return this.valor === 'A';
    }
}

class PosicaoFactory {
    static criarPosicao(id) {
        return new Posicao(`valor${id}`);
    }
}

const posicoes = [];
for (let i = 1; i <= 9; i++) {
    posicoes.push(PosicaoFactory.criarPosicao(i));
}

3. Utilizar o Padrão Observer para Atualizar a Interface (Padrão: Observer)
Motivo: Atualmente, o código atualiza a interface diretamente dentro da lógica do jogo, o que deixa o código acoplado. O padrão Observer permite que a interface reaja a eventos de mudança no estado do jogo, facilitando a manutenção.

Como ficaria:

class JogoObserver {
    atualizar(mensagem) {
        document.getElementById('vezJogador').innerHTML = mensagem;
    }
}

class JogoDaVelha {
    constructor(observer) {
        this.observer = observer;
        this.vezJogador = true;
    }

    notificar(mensagem) {
        this.observer.atualizar(mensagem);
    }

    ganhou() {
        this.notificar(`O jogador ${this.vezJogador ? 'X' : 'O'} ganhou!`);
    }
}

const observer = new JogoObserver();
const jogo = new JogoDaVelha(observer);

4. Refatorar para Utilizar Constantes para Valores Fixos
Motivo: Evitar valores "mágicos" no código e melhorar a legibilidade ao definir constantes para valores usados repetidamente, como o jogador "X" ou "O".

Como ficaria:

javascript
const JOGADOR_X = 'X';
const JOGADOR_O = 'O';

this.proximoJogador = JOGADOR_O;

5. Delegar a Responsabilidade de Reinício do Jogo (Padrão: Command)
Motivo: Facilitar o reset do jogo com um comando dedicado, promovendo uma separação clara de responsabilidades.

Como ficaria:

class ReiniciarCommand {
    executar() {
        window.location.reload();
    }
}

const reiniciarCommand = new ReiniciarCommand();
document.getElementById('botao2').addEventListener('click', () => reiniciarCommand.executar());

