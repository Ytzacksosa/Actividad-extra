var NumUsu
var adiv
var b
var jugar


b = 1;

while(parseInt(b,10)== 1){
  let x = Math.floor(Math.random() * 9) + 1
  NumUsu = prompt("Ingrese un numero del 1 al 9")
  if (parseInt(NumUsu,10) >= 10 || parseInt(NumUsu,10) <=0){
alert("Ingrese Un Numero Valido")
break
}
else{
 adiv = prompt("¿Cree que su numero es Mayor, menor o igual al generado aleatoriamente?")
 if (adiv.toLowerCase() == "mayor" && x<NumUsu){
 alert("Felicidades El numero generado es " +x + " Su numero es "+NumUsu+" y escribio que era "+adiv)
 }
 else if(adiv.toLowerCase() == "menor" && x>NumUsu){
 alert("Felicidades El numero generado es " +x + " Su numero es "+NumUsu+" y escribio que era "+adiv)
 }
 else if(adiv.toLowerCase() == "igual" && x==parseInt(NumUsu,10)){
 alert("Felicidades El numero generado es " +x + " Su numero es "+NumUsu+" y escribio que era "+adiv)
 }
 else{
 alert("Mala Suerte, El numero generado es " +x + " Su numero es "+NumUsu+" y escribio que era "+adiv)
 }
 jugar = prompt("quieres seguir jugando")
if (jugar.toLowerCase == "no") {b=0
}
else if (jugar.toLowerCase == "si"){b=1}
else{b=0}

 }
}
alert("Ytzack Sosa - 21001512")