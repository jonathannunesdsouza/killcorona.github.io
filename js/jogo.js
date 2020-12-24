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


   var posicaoX = Math.floor(Math.random() * largura)
   var posicaoY = Math.floor(Math.random() * altura)

   console.log(posicaoX, posicaoY)
   
   
