function identificar(){
    let digito = document.getElementById('par_impar')
    let resulParImpar = document.getElementById('numpi_resul')

    let numDigitado = Number(digito.value)

    if (!numDigitado){
        resulParImpar.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        resulParImpar.style.textDecoration = 'none'
        resulParImpar.style.fontWeight = 'bold'
        resulParImpar.style.textAlign = 'center'
    }else {
        if ( numDigitado % 2 === 0){
            resulParImpar.innerHTML = `O número ${numDigitado} é PAR`
            resulParImpar.innerHTML += ` \u{1F60D}`
            resulParImpar.style.textDecoration = 'none'
            resulParImpar.style.fontWeight = 'bold'
            resulParImpar.style.backgroundColor ='#fff'
            resulParImpar.style.textAlign = 'center'
            resulParImpar.style.borderRadius = '5px'
        }else{
            resulParImpar.innerHTML = `O número ${numDigitado} é ÍMPAR`
            resulParImpar.innerHTML += ` \u{1F970}`
            resulParImpar.style.textDecoration = 'none'
            resulParImpar.style.fontWeight = 'bold'
            resulParImpar.style.backgroundColor ='#fff'
            resulParImpar.style.textAlign = 'center'
            resulParImpar.style.borderRadius = '5px'
        }
        
    }

}