function calcula(){
    let num01 = document.getElementById('num01')
    let num02 = document.getElementById('num02')
    let resul = document.getElementById('txt_resul')

    let n1 = Number(num01.value);
    let n2 = Number(num02.value);

    let res = n1 + n2

   if ( num01.value.length == 0 || num02.value.length == 0){  // CASO NÃO DIGITAR NADA NO CAMPO
        resul.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        resul.style.textDecoration = 'none'
        resul.style.fontWeight = 'bold'
        resul.style.textAlign = 'center'
    }else {
        resul.innerHTML = ( `O Resultado é: ${res} `)
        resul.innerHTML += ` \u{1F600}`
        resul.style.textDecoration = 'none'
        resul.style.fontWeight = 'bold'
        resul.style.backgroundColor ='#fff'
        resul.style.textAlign = 'center'
        resul.style.borderRadius = '5px'
    }

    //num01.value = ''  //Caso queira que a caixa seja limpa automaticamente, após clicar para calcular
    //num02.value = ''  //Caso queira que a caixa seja limpa automaticamente, após clicar para calcular

}

