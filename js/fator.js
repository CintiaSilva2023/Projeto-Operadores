function cal(){
    let numEscolhido = document.getElementById('fato') 
    let resul_fato = document.getElementById('fato_resul')
    
    let numFat = Number(numEscolhido.value)
    let resulFator = numFat

    if ( !numFat){
        resul_fato.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        resul_fato.style.textDecoration = 'none'
        resul_fato.style.fontWeight = 'bold'
        resul_fato.style.textAlign = 'center'
    }else{
        for ( let i = 1; i < numFat; i++){
            resulFator = resulFator * i
        }
    
        resul_fato.innerHTML = `fatorial é: ${resulFator}`
        resul_fato.innerHTML += `\u{1F601}`
        resul_fato.style.textDecoration = 'none'
        resul_fato.style.fontWeight = 'bold'
        resul_fato.style.backgroundColor ='#fff'
        resul_fato.style.textAlign = 'center'
        resul_fato.style.borderRadius = '5px'
    }

}


     

    
     
     



 
    


   