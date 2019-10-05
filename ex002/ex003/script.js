function vr(){
    var data = new Date() //data atual
    var ano = data.getFullYear()
    var maior_menor = document.getElementById('MaiorMenor')
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')
    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('Preencha os dados de forma correta!!!!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')// cria a imagem para o site 
        img.setAttribute('id','foto')
        //res.style.textAlign = 'center'
        if(fsex[0].checked){
            var genero = 'Masculino'
            if(idade <= 10 ){
                img.setAttribute('src', 'bebe_menino.png')                
                res.innerHTML = `Bebê do sexo ${genero} com ${idade} anos de idade`
            }if(idade > 10 && idade <= 24 ){
                img.setAttribute('src', 'jovem_homem.png')               
                res.innerHTML = `Jovem do sexo ${genero} com ${idade} anos de idade`
                if(idade < 18){
                    maior_menor.innerText = 'Menor de idade'
                }else{
                    maior_menor.innerText = 'Maior de idade'
                }
            }if(idade > 24 && idade <= 59 ){
                img.setAttribute('src','homem_adulto.png')
                res.innerHTML = `Adulto do sexo ${genero} com ${idade} anos de idade`
            }if(idade >= 60 ){
                img.setAttribute('src', 'idoso.png')
                res.innerHTML = `Idoso do sexo ${genero} com ${idade} anos de idade`
            }
        }else{
            var genero = 'Feminino'
            if(idade <= 10 ){
                img.setAttribute('src', 'bebe_menina.png')
                res.innerHTML = `Bebê do sexo ${genero} com ${idade} anos de idade`
            }if(idade > 10 && idade <= 24 ){
                img.setAttribute('src', 'jovem_mulher.png')
                res.innerHTML = `Jovem do sexo ${genero} com ${idade} anos de idade`
                if(idade < 18){
                    maior_menor.innerText = 'Menor de idade'
                }else{
                    maior_menor.innerText = 'Maior de idade'
                }
            }if(idade > 24 && idade <= 59 ){
                img.setAttribute('src','mulher_adulta.png')
                res.innerHTML = `Adulta do sexo ${genero} com ${idade} anos de idade`
            }if(idade >= 60 ){
                img.setAttribute('src', 'idosa.png')}
                res.innerHTML = `Jovem do sexo ${genero} com ${idade} anos de idade`
        }
        
    }
    
    res.style.textAlign = 'center'
    maior_menor.style.textAlign = 'center'
    maior_menor.style.fontSize = "18px"//CSS em Java Script
    //res.innerHTML = `Idade de ${idade} do sexo ${genero}`
    res.appendChild(img)//faz aparecer as imagens e adiciona embaixo do innerHTML
}