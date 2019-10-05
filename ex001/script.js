function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //define a hora automaticamente a hora do seu computador
    //var hora = 22 //força a hora do dia 
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora <= 12){
        // para descobrir o codigo da cor use a ferramenta de seleção de cores no editor de imagem 
        document.body.style.background = '#ffe154'  //Cor de fundo do site dependendo da hora do dia
        img.src = 'manha.png'
    }else if(hora > 12 && hora <=18){
        document.body.style.background = '#f4830b' // não pode esquecer da # no começo da cor
        img.src = 'tarde.png'
    }else{
        document.body.style.background = '#1c1329'
        img.src = 'noite.png'
    }
}