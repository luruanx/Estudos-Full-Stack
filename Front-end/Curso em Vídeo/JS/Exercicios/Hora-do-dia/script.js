function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#4867d8'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#d86a48'
    } else {
        // boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#1f2672'
    }
}