let vezJogador = true

function validarClick(event){
    var posicao = ('valor' + event)
    var posicaoVazia =  document.getElementById("posicao").innerHTML  
    var texto = ''
    if(vezJogador){
        texto = 'X'
    }
    else{
        texto = 'O'
    }
    console.log(posicao)
    document.getElementById("teste").innerHTML = `${texto}`;
    vezJogador = !vezJogador
    validarVitoria()

}

function validarVitoria(){
    var valorPosicao =  document.getElementById("teste").innerHTML 
    console.log(valorPosicao)
}