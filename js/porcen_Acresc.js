function calcul(){
    let valorpor = Number( document.getElementById('porceValo').value)
    let acrescimoPor = Number(document.getElementById('porcen').value) 
    let resul_porce = document.getElementById('resul_porcen')

    let resultadoPorc = valorpor * ( 1 + acrescimoPor / 100)
    let valorFinal =  resultadoPorc - valorpor

    if ( valorpor == 0  || acrescimoPor == 0 ){
        resul_porce.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        resul_porce.style.textDecoration = 'none'
        resul_porce.style.fontWeight = 'bold'
        resul_porce.style.textAlign = 'center'
    }else {
        resul_porce.innerHTML = `Valor a pagar: R$ ${resultadoPorc.toFixed(2)} Acrescimo: R$ ${valorFinal.toFixed(2)} `
        resul_porce.innerHTML += ` \u{1F914}`
        resul_porce.style.textDecoration = 'none'
        resul_porce.style.fontWeight = 'bold'
        resul_porce.style.backgroundColor ='#fff'
        resul_porce.style.textAlign = 'center'
        resul_porce.style.borderRadius = '5px'
    }

   
}