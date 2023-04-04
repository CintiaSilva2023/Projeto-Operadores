function calcularTabuada(){
    let numDigt=  Number(document.getElementById('num_tabu').value)
    let resul_tab = document.getElementById('resul_tabu')
    
    if ( !numDigt ){
        resul_tab.innerHTML = `[ERRO] Preencha os Campos \u{1F612}`
        resul_tab.style.textDecoration = 'none'
        resul_tab.style.fontWeight = 'bold'
        resul_tab.style.textAlign = 'center'
    }else {
        for ( let i = 0; i <= 10; i++){
            resul_tab.innerHTML += (` ${numDigt} x ${i} = ${numDigt * i } \u{263A} <br>`)
            resul_tab.style.textDecoration = 'none'
            resul_tab.style.fontWeight = 'bold'
            resul_tab.style.backgroundColor ='#fff'
            resul_tab.style.textAlign = 'center'
            resul_tab.style.borderRadius = '5px'
            
        }
       
    }

    
}