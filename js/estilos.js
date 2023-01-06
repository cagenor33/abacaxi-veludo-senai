//================================================================================
// BANNER DINÂMICO HOME
//================================================================================

let idx = 0;

function carrossel(){
    if(idx == 0){
        document.querySelector('#bannerSite').setAttribute('src','./img/banner/bannerBoloTradicional2.png')
        document.querySelector('#bannerSite').style.width = "100vw";
        
    }else if (idx == 1){
        document.querySelector('#bannerSite').setAttribute('src','./img/banner/bannerBoloPersonal2.png')
        
    }else if (idx == 2){
        document.querySelector('#bannerSite').setAttribute('src','./img/banner/Doces2.png')                
    } 

    idx++; 
    
    if (idx > 2){
        idx = 0
    } 
}    

setInterval(carrossel, 5000); //método executa a função após (tempo)  várias vezes até ser interrumpido