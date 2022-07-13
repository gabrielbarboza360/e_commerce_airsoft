// mudança dos preços das paginas individuais 

document.querySelector("#qtde").addEventListener("click", atualizarPreco)



function atualizarPreco(parametro){



var btn_qtde = Number(document.querySelector("#qtde").value );
var v_anterior_string =  document.querySelector("#valor_anterior").innerHTML;
var btn_anterior =   parseFloat(v_anterior_string.replace(',','.'));
var v_atual_string =  document.querySelector("#valor_atual").innerHTML;
var btn_atual = parseFloat(v_atual_string.replace(',','.'));


var preto = document.querySelector("#preto");
var preto_select = preto.classList.contains("select");
var bege = document.querySelector("#bege");
var bege_select = bege.classList.contains("ok");
   
var imagem_p = document.querySelector('#imagem_p').src;
var imagem1 = document.querySelector('#imagem1').src;
var imagem2 = document.querySelector('#imagem2').src;


 document.querySelector("#preto").addEventListener("click", corPreto)
 document.querySelector("#bege").addEventListener("click", corBege)
 document.querySelector("#qtde").addEventListener("click", quantidade)


   function corPreto(){
    document.getElementById("imagem_p").src = imagem1;
        document.querySelector("#bege").classList.remove("select");
        document.querySelector("#bege").classList.remove("ok");
        document.querySelector("#preto").classList.add("select");
        document.querySelector("#preco").innerHTML = "R$:" + (btn_qtde * btn_atual );
    }

    function corBege(){

      document.querySelector("#imagem_p").src = imagem2;
        document.querySelector("#preto").classList.remove("select");
        document.querySelector("#bege").classList.add("select");
        document.querySelector("#preco").innerHTML = "R$:" + (btn_qtde * btn_anterior);
        document.querySelector("#bege").classList.add("ok");
        
    }
}

function quantidade(){

  
  var imagem1 = document.getElementById('imagem1').src;
  var imagem2 = document.getElementById('imagem2').src;

  var btn_qtde = Number(document.querySelector("#qtde").value );
var v_anterior_string =  document.querySelector("#valor_anterior").innerHTML;
var btn_anterior =   parseFloat(v_anterior_string.replace(',','.'));
var v_atual_string =  document.querySelector("#valor_atual").innerHTML;
var btn_atual = parseFloat(v_atual_string.replace(',','.'));

  var preto = document.querySelector("#preto");
  var preto_select = preto.classList.contains("select");
  var bege = document.querySelector("#bege");
  var bege_select = bege.classList.contains("ok");


  if(preto= preto_select) {
    document.querySelector("#preco").innerHTML = "R$:" + (btn_qtde * btn_atual);  
    document.getElementById("imagem_p").src = imagem1;
   }


   if(bege=  bege_select){
    document.querySelector("#preco").innerHTML = "R$:" + (btn_qtde * btn_anterior);
      document.getElementById("imagem_p").src = imagem2;
 
   }  

   else {
    document.querySelector("#preco").innerHTML = "R$:" + (btn_qtde * btn_atual);  
   }
  
 } 

 

document.querySelector('#button_compra').addEventListener("click",function(){
   alert(' Esta em manutenção')
})




atualizarPreco();
quantidade();
