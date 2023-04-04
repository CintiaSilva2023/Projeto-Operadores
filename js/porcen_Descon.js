function calcule(){
    let valor = document.getElementById('porceValor')
    let porcentagem = document.getElementById('porce')
    let resulPorc = document.getElementById('resul_porce')

    let numValor = Number(valor.value)
    let numPorcentagem = Number(porcentagem.value)

    let valorDesconto = ( numValor * numPorcentagem ) / 100
    let ValorFinal = numValor - valorDesconto

    if ( valor.value.length == 0 || porcentagem.value.length == 0 ){
        resulPorc.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        resulPorc.style.textDecoration = 'none'
        resulPorc.style.fontWeight = 'bold'
        resulPorc.style.textAlign = 'center'
    }else {
        resulPorc.innerHTML = `Valor a pagar: R$ ${ValorFinal.toFixed(2)} Desconto: R$ ${valorDesconto.toFixed(2)}`
        resulPorc.innerHTML += ` \u{1F61B}`
        resulPorc.style.textDecoration = 'none'
        resulPorc.style.fontWeight = 'bold'
        resulPorc.style.backgroundColor ='#fff'
        resulPorc.style.textAlign = 'center'
        resulPorc.style.borderRadius = '5px'
    }   
}







 