
/*
function click(){
    let btn = parseFloat(document.querySelector('#numero')).toString()
    let num = parseFloat(btn)
    let box = document.getElementById('teste').innerHTML = num
    console.log(num)
}*/



function carregar(){

    var datas = document.getElementById('datas')
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var dia = data.getUTCDay()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    //datas.innerHTML = `${dia} / ${mes} / ${ano}`
    msg.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora >= 0 && hora < 12){
        msg.innerHTML += '<p>Boa noite!</p>'
        img.src = '/horaDoDia/img/amanhecer.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += '<p>Boa tarde!</p>'
        img.src = '/horaDoDia/img/entardecer.png'
        document.body.style.background = '#b9846f'
    }else{
        msg.innerHTML += '<p>Boa noite!</p>'
        img.src = '/horaDoDia/img/anoitecer.png'
        document.body.style.background = '#515154'
    }
}