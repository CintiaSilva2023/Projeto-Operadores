function calcularPotenciacao(){
    let primeiroNum = Number(document.getElementById('first_num_poten').value)
    let segundoNum = Number(document.getElementById('second_num_poten').value)
    let resul_potenciacao = document.getElementById('resul_poten')

    if ( !primeiroNum || !segundoNum){
        resul_potenciacao.innerHTML = `[ERRO] Preencha os campos \u{1F612}` 
        resul_potenciacao.style.textDecoration = 'none'
        resul_potenciacao.style.fontWeight = 'bold'
        resul_potenciacao.style.textAlign = 'center'
    }else {
        let soma = primeiroNum ** segundoNum
        resul_potenciacao.innerHTML = ( `O Resultado é: ${soma} `)
        resul_potenciacao.innerHTML += ` \u{1F617}`
        resul_potenciacao.style.textDecoration = 'none'
        resul_potenciacao.style.fontWeight = 'bold'
        resul_potenciacao.style.backgroundColor ='#fff'
        resul_potenciacao.style.textAlign = 'center'
        resul_potenciacao.style.borderRadius = '5px'
        
    }
}