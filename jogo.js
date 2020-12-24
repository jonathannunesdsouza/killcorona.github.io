var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

//função encarregada de ajustar o tamanho do palco/cenário do jogo de acordo com a resolução da tela do dispositivo, está função está sendo
//chamada no evento onresize na tag body
function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log('h: ' + altura + ' | ' + 'w: ' + largura)
}

ajustarTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1
    
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaCorona)
        alert('Vitoria')
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000 )

function posicaoRandomica() {

    //remover corona anterior (caso exista)
    if (document.getElementById('corona')) {
        document.getElementById('corona').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
           document.getElementById('vida' + vidas).src = "imagens/mascara_desativada.png"
           vidas++ 
        }
        
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY 

    console.log(posicaoX, posicaoY)
    
    //criar o elemento html de imagem

    var corona = document.createElement('img')
    corona.src = 'imagens/corona.png'
    corona.className = tamanhoRandomico() + ' ' + inverterLadoImagem()
    corona.style.left = posicaoX + 'px'
    corona.style.top = posicaoY + 'px'
    corona.style.position = 'absolute'
    corona.id = 'corona'
    corona.onclick = function() {
        this.remove()
    }

    document.body.appendChild(corona)


}

//função encarregada de criar elementos html (imagem do corona) com tamanhos randômicos
function tamanhoRandomico() {
    var classe = Math.floor(Math.random() * 4)
    
    switch(classe) {
        case 0:
            return 'corona1'
        case 1: 
            return 'corona2'
        case 2:
            return 'corona3'
        case 3:
            return 'corona4'
    }

}

//função encarregada de inverter horizontalmente os elementos html (imagem do corona) de forma randômica
function inverterLadoImagem() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1: 
            return 'ladoB'
        
    }
}