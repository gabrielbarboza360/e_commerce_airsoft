
/*---------------  pisca pisca letreiro --------------------------*/
 
var myinterval = setInterval(color,500);

  function color(){
        var cor = document.querySelectorAll('.frete');
        for(var i = 0; i<cor.length; i++){
        cor[i].style.color= cor[i].style.color == "yellow" ? "red" : "yellow";
    }
 }

   function stop_color(){
        clearInterval(myinterval);
   }




/* -------------------------------- Filtro  ----------------------------------------------- */


let btn_all = document.getElementById("all");
let btn_rifle = document.getElementById("rifle");
let btn_rifle_pecisao = document.getElementById("rifle_pecisao");
let btn_pistola_revolver = document.getElementById("pistola_revolver"); 
let btn_espingarda = document.getElementById("espingarda");

var pistola = document.getElementsByClassName("pistola");
    var rifle = document.getElementsByClassName("rifle");
    var sniper = document.getElementsByClassName("sniper");
    var espingarda = document.getElementsByClassName("espingarda");





//--------------------------------------- btn-All-filtro


btn_all.addEventListener('click', function() {


 /* loader da pagina ao clicar no botao*/
var loader = document.querySelector('.loader');
var sessao_one =  document.querySelector('.sessao_one');

const stop = setInterval(() => teste(), 500);

function teste(){

   loader.style.display = "initial";
   sessao_one.style.display = "none";
   a--; 
   if(a == -2){
    clearInterval(stop);
    loader.style.display = "none";
    sessao_one.style.display = "block";
  }
}

/* loader pagina end */
 
    btn_all.classList.add("active_filtro");
    btn_rifle.classList.remove("active_filtro");
    btn_rifle_pecisao.classList.remove("active_filtro");
    btn_pistola_revolver.classList.remove("active_filtro");
    btn_espingarda.classList.remove("active_filtro");
     
   
        for(a = 0; a<espingarda.length; a++){
          espingarda[a].style.display = "initial";
        }
        
        for(a = 0; a<sniper.length; a++){
         sniper[a].style.display = "initial";
        }
            
         for(a = 0; a<pistola.length; a++){
           pistola[a].style.display = "initial";
        }
  
        for(a = 0; a<rifle.length; a++){
          rifle[a].style.display = "initial";
       }

       for(a = 0; a<espingarda.length; a++){
          espingarda[a].style.display = "initial";
       }
  
  });  

//-------------------------------------------------------------------






// ----------------------------------------- btn-rifle-filtro

btn_rifle.addEventListener('click', function() {

  btn_rifle.classList.add("active_filtro");
  btn_all.classList.remove("active_filtro");
  btn_rifle_pecisao.classList.remove("active_filtro");
  btn_pistola_revolver.classList.remove("active_filtro");
  btn_espingarda.classList.remove("active_filtro");


//loader da pagina ao clicar no botao*

var loader = document.querySelector('.loader');
var sessao_one =  document.querySelector('.sessao_one');

const stop =setInterval(() => teste(), 500);

function teste(){

   loader.style.display = "initial";
   sessao_one.style.display = "none";
   a--; 
   if(a == -2){
    clearInterval(stop);
    loader.style.display = "none";
    sessao_one.style.display = "block";
  }
}
//loader pagina end 

      for(a = 0; a<rifle.length; a++){
        rifle[a].style.display = "initial";
      }

     for(a = 0; a<pistola.length; a++){
      pistola[a].style.display = "none";
     }
         
     for(a = 0; a<sniper.length; a++){
      sniper[a].style.display = "none";
     }
    
      for(a = 0; a<espingarda.length; a++){
        espingarda[a].style.display = "none";
     }  
    

});  

//--------------------------------------------------------------------------






//------------------------------------------btn-sniper-filtro

btn_rifle_pecisao.addEventListener('click', function() {


//loader da pagina ao clicar no botao

var loader = document.querySelector('.loader');
var sessao_one =  document.querySelector('.sessao_one');

const stop =setInterval(() => teste(), 500);

function teste(){

   loader.style.display = "initial";
   sessao_one.style.display = "none";
   a--; 
   if(a == -2){
    clearInterval(stop);
    loader.style.display = "none";
    sessao_one.style.display = "block";
  }
}

//loader pagina end 
  
  btn_rifle_pecisao .classList.add("active_filtro");
  btn_all.classList.remove("active_filtro");
  btn_rifle.classList.remove("active_filtro");
  btn_pistola_revolver.classList.remove("active_filtro");
  btn_espingarda.classList.remove("active_filtro");
  
 
      for(a = 0; a<sniper.length; a++){
        sniper[a].style.display = "initial";
      }
      
      for(a = 0; a<pistola.length; a++){
       pistola[a].style.display = "none";
      }
          
       for(a = 0; a<espingarda.length; a++){
         espingarda[a].style.display = "none";
      }

      for(a = 0; a<rifle.length; a++){
        rifle[a].style.display = "none";
     }
});
//-------------------------------------------------------------------------------



//--------------------------------------btn-pistola-----------------------


btn_pistola_revolver.addEventListener('click', function() {

//loader da pagina ao clicar no botao

var loader = document.querySelector('.loader');
var sessao_one =  document.querySelector('.sessao_one');

const stop =setInterval(() => teste(), 500);

function teste(){

   loader.style.display = "initial";
   sessao_one.style.display = "none";
   a--; 
   if(a == -2){
    clearInterval(stop);
    loader.style.display = "none";
    sessao_one.style.display = "block";
  }
}

//loader pagina end 

  btn_pistola_revolver.classList.add("active_filtro");
  btn_all.classList.remove("active_filtro");
  btn_rifle_pecisao.classList.remove("active_filtro");
  btn_rifle.classList.remove("active_filtro");
  btn_espingarda.classList.remove("active_filtro");
  
 
      for(a = 0; a<pistola.length; a++){
        pistola[a].style.display = "initial";
      }
      
      for(a = 0; a<sniper.length; a++){
       sniper[a].style.display = "none";
      }
          
       for(a = 0; a<espingarda.length; a++){
         espingarda[a].style.display = "none";
      }

      for(a = 0; a<rifle.length; a++){
        rifle[a].style.display = "none";
     }



});

//---------------------------------------------------------------------------------



// --------------------- btn-Espingarda--------------------------------------------------

btn_espingarda.addEventListener('click', function() {


/* loader da pagina ao clicar no botao*/
var loader = document.querySelector('.loader');
var sessao_one =  document.querySelector('.sessao_one');

const stop =setInterval(() => teste(), 500);

function teste(){

   loader.style.display = "initial";
   sessao_one.style.display = "none";
   a--; 
   if(a == -2){
    clearInterval(stop);
    loader.style.display = "none";
    sessao_one.style.display = "block";
  }
}

// loader pagina end 

  btn_espingarda.classList.add("active_filtro");
  btn_all.classList.remove("active_filtro");
  btn_rifle_pecisao.classList.remove("active_filtro");
  btn_rifle.classList.remove("active_filtro");
  btn_pistola_revolver.classList.remove("active_filtro");
  
 
      for(a = 0; a<espingarda.length; a++){
        espingarda[a].style.display = "initial";
      }
      
      for(a = 0; a<sniper.length; a++){
       sniper[a].style.display = "none";
      }
          
       for(a = 0; a<pistola.length; a++){
         pistola[a].style.display = "none";
      }

      for(a = 0; a<rifle.length; a++){
        rifle[a].style.display = "none";
     }

});

//-----------------------------------------------------------------------------------------




