let vezJogador = true
let jogada = 0
function validarClick(event){
    var posicao = ('valor' + event)
    var valorPosicao =  document.getElementById(posicao).innerHTML  
    console.log(valorPosicao)
    if((valorPosicao != "X" && valorPosicao != "x") && (valorPosicao != "o" && valorPosicao != "O")){

        var texto = 'X'
        var proximoJogador = 'X'
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
        validarVitoria(posicao)
    }

}

function validarVitoria(posicao){
    jogada += 1
    var listaValores = new Array ()
    
    for(let i = 1; i < 10 ; i++){
        var valor = 'valor' + i
        console.log(valor)
        var valorPosicao =  document.getElementById(valor).innerHTML 
        if(jogada != 9){
            break
        }
        listaValores.push(valorPosicao)
    }
    if(jogada = 9){

    }
}

