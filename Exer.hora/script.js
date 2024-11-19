function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem_hora')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia!
        img.src = './img/foto_manha.jpg'
        document.body.style.background = '#C4D7FF'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = './img/foto_tarde.jpg'
        document.body.style.background = '#B17457'
    } else {
        //boa noite!
        img.src = './img/foto_noite.jpg'
        document.body.style.background = '#4A4947'
    }

}
