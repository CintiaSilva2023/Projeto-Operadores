function calculo() {
    let txt_nu01 = document.getElementById('txt_nu01');
    let txt_nu02 = document.getElementById('txt_nu02');
    let rst = document.getElementById('txt_rst')

    let txt01 = Number(txt_nu01.value) 
    let txt02 = Number(txt_nu02.value)

    let soma = txt01 * txt02

    if ( txt_nu01.value.length == 0 || txt_nu02.value.length == 0 ){
        rst.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        rst.style.textDecoration = 'none'
        rst.style.fontWeight = 'bold'
        rst.style.textAlign = 'center'
    } else {
        rst.innerHTML = ( `O Resultado é: ${soma} \u{1F609}`)
        rst.style.textDecoration = 'none'
        rst.style.fontWeight ='bold'
        rst.style.backgroundColor ='#fff'
        rst.style.textAlign = 'center'
        rst.style.borderRadius = '5px'
    }

}

