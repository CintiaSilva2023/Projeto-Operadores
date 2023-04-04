function calcu(){
    let numRaiz = document.getElementById('raiz01')
    let resulRaiz = document.getElementById('raiz_resu')

    let num_raiz = Number(numRaiz.value)
    let numDigitado = Math.sqrt(num_raiz)

    if ( !num_raiz){
        resulRaiz.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        resulRaiz.style.textDecoration = 'none'
        resulRaiz.style.fontWeight = 'bold'
        resulRaiz.style.textAlign  ='center'
    }else {
        resulRaiz.innerHTML = ( `O Resultado é: ${numDigitado.toFixed(1)} \u{1F632}`)
        resulRaiz.style.textDecoration = 'none'
        resulRaiz.style.fontWeight ='bold'
        resulRaiz.style.backgroundColor ='#fff'
        resulRaiz.style.textAlign = 'center'
        resulRaiz.style.borderRadius = '5px'
    }

}