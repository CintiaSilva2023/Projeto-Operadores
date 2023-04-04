function calcular(){
        
    let nu01 = document.getElementById('nu01')
    let nu02 = document.getElementById('nu02')
    let res = document.getElementById('txt_resu')

    let nume01 = Number(nu01.value)
    let nume02 = Number(nu02.value)

    let respos = nume01 - nume02

    if ( nu01.value.length == 0 && nu02.value.length == 0 ){
        res.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        res.style.textDecoration = 'none'
        res.style.fontWeight = 'bold'
        res.style.textAlign = 'center'
    }else {
        res.innerHTML = (`O Resultado é: ${respos} \u{1F612}`)
        // res.innerHTML += '\u{1F612}'     // Outra maneira de colocar Emoji
        res.style.textDecoration = 'none'
        res.style.fontWeight = 'bold'
        res.style.backgroundColor ='#fff'
        res.style.textAlign = 'center'
        res.style.borderRadius ='5px'
    }

}

