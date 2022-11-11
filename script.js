let vezJogador = true
let jogada = 0
var proximoJogador = 'X'
var vitoria = false

function validarClick(event){
    var posicao = ('valor' + event)
    var valorPosicao =  document.getElementById(posicao).innerHTML  
    if((valorPosicao != "X" && valorPosicao != "x") && (valorPosicao != "o" && valorPosicao != "O") && vitoria == false){

        var texto = 'X'
        if(vezJogador){
            texto = 'X'
            proximoJogador = 'O'
        }
        else{
            texto = 'O'
            proximoJogador = 'X'
        }
        document.getElementById(posicao).innerHTML = `${texto}`;
        document.getElementById(posicao).style.color = 'black'
        document.getElementById('vezJogador').innerHTML = `${'Vez do Jogador ' + proximoJogador}`;
        vezJogador = !vezJogador
        validarPosicoes(posicao)
    }

}

function validarPosicoes(posicao){
    jogada += 1
    var listaValores = new Array ()
    
    for(let i = 0; i < 9 ; i++){
        var valor = 'valor' + (i + 1)
        var valorPosicao =  document.getElementById(valor).innerHTML 
        if(valorPosicao != 'A'){
            listaValores[i]= valorPosicao
        }
    }
    validarVitoria(listaValores)
    
}

function validarVitoria(listaValores){
    console.log(listaValores)
    if((listaValores[1]) && listaValores[0] == listaValores[1] && listaValores[1] == listaValores[2]){
        ganhou()
    }
    else if((listaValores[4]) && listaValores[3] == listaValores[4] && listaValores[4] == listaValores[5]){
        ganhou()
    }
    else if((listaValores[7]) && listaValores[6] == listaValores[7] && listaValores[7] == listaValores[8]){
        ganhou()
    }
    else if((listaValores[3]) && listaValores[0] == listaValores[3] && listaValores[3] == listaValores[6]){
        ganhou()
    }
    else if((listaValores[4]) && listaValores[1] == listaValores[4] && listaValores[4] == listaValores[7]){
        ganhou()
    }
    else if((listaValores[5]) && listaValores[2] == listaValores[5] && listaValores[5] == listaValores[8]){
        ganhou()
    }
    else if((listaValores[4]) && listaValores[0] == listaValores[4] && listaValores[4] == listaValores[8]){
        ganhou()
    }
    else if((listaValores[4]) && listaValores[2] == listaValores[4] && listaValores[4] == listaValores[6]){
        ganhou()
    }
    else if(jogada == 9 ){
        velha()
    }

}

function ganhou(){
    vitoria = true
    document.getElementById('botao2').style.display = 'block'
    if(vezJogador){
        document.getElementById('vezJogador').innerHTML = `${'O jogador O ganhou!'}`;
    }else{
        document.getElementById('vezJogador').innerHTML = `${'O jogador X ganhou!'}`;
    }

}

function velha(){
    vitoria = true
    document.getElementById('botao2').style.display = 'block'
    document.getElementById('vezJogador').innerHTML = `${'Deu velha!'}`;
   

}


