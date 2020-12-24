var altura = 0
var largura = 0

//função encarregada de ajustar o tamanho do palco/cenário do jogo de acordo com a resolução da tela do dispositivo, está função está sendo
//chamada no evento onresize na tag body
function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log('h: ' + altura + ' | ' + 'w: ' + largura)
}

ajustarTamanhoPalcoJogo()

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY 

    console.log(posicaoX, posicaoY)
    
    //criar o elemento html de imagem

    var corona = document.createElement('img')
    corona.src = 'imagens/corona.png'
    corona.className = 'corona1'
    corona.style.left = posicaoX + 'px'
    corona.style.top = posicaoY + 'px'
    corona.style.position = 'absolute'
    document.body.appendChild(corona)
}