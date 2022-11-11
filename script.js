let vezJogador = true

function validarClick(event){
    var posicao = ('valor' + event)
    var valorPosicao =  document.getElementById(posicao).innerHTML  
    console.log(valorPosicao)
    if((valorPosicao != "X" && valorPosicao != "x") && (valorPosicao != "o" && valorPosicao != "O")){

        var texto = ''
        if(vezJogador){
            texto = 'X'
        }
        else{
            texto = 'O'
        }
        document.getElementById(posicao).innerHTML = `${texto}`;
        vezJogador = !vezJogador
        validarVitoria(posicao)
    }

}

function validarVitoria(posicao){
    var valorPosicao =  document.getElementById(posicao).innerHTML 
}