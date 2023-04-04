function calc(){
    let txt_01 = document.getElementById('txt_n01')
    let txt_02 = document.getElementById('txt_n02')
    let rpst = document.getElementById('txt_rstd')

    let txt1 = Number(txt_01.value)
    let txt2 = Number(txt_02.value)

    let res_soma = txt1 / txt2

    if ( txt_01.value.length == 0 || txt_02.value.length == 0 ){
        rpst.innerHTML = `[ERRO] Preencha os Campos \u{1F612} `
        rpst.style.textDecoration = 'none'
        rpst.style.fontWeight = 'bold'
        rpst.style.textAlign = 'center'
    }else{
        rpst.innerHTML = (`O Resultado é: ${res_soma} \u{1F60F}`)
        rpst.style.textDecoration = 'none'
        rpst.style.fontWeight = 'bold'
        rpst.style.backgroundColor ='#fff'
        rpst.style.textAlign = 'center'
        rpst.style.borderRadius = '5px'
    }

}