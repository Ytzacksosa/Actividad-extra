var mes
var dia

mes = prompt("Ingrese su mes de nacimiento en numeros")
dia = prompt("Ingrese su dia de nacimiento en numeros")
if (parseInt(mes,10) < 1 || parseInt(mes,10) > 12 || parseInt(dia,10) < 1 || parseInt(dia,10) > 31){
alert("Ingrese una fecha valida")
} else{
if (parseInt(mes, 10) == 3 && parseInt(dia, 10) >= 21) {
  alert("Usted es Aries")
}
else if (parseInt(mes, 10) == 4 && parseInt(dia, 10) <=20 ) {
  alert("Usted es Aries")
}
else if (parseInt(mes, 10) == 4 && parseInt(dia, 10) >=21 ) {
  alert("Usted es Tauro")
}
else if (parseInt(mes, 10) == 5 && parseInt(dia, 10) <= 20 ) {
  alert("Usted es Tauro")
}
else if (parseInt(mes, 10) == 5 && parseInt(dia, 10) >=21 ) {
  alert("Usted es Geminis")
}
else if (parseInt(mes, 10) == 6 && parseInt(dia, 10) <=20 ) {
  alert("Usted es Geminis")
}
else if (parseInt(mes, 10) == 6 && parseInt(dia, 10) >=21 ) {
  alert("Usted es Cancer")
}
else if (parseInt(mes, 10) == 7 && parseInt(dia, 10) <=22 ) {
  alert("Usted es Cancer")
}
else if (parseInt(mes, 10) == 7 && parseInt(dia, 10) >=23 ) {
  alert("Usted es Leo")
}
else if (parseInt(mes, 10) == 8 && parseInt(dia, 10) <=23 ) {
  alert("Usted es Leo")
}
else if (parseInt(mes, 10) == 8 && parseInt(dia, 10) >=24 ) {
  alert("Usted es Virgo")
}
else if (parseInt(mes, 10) == 9 && parseInt(dia, 10) <=22 ) {
  alert("Usted es Virgo")
}
else if (parseInt(mes, 10) == 9 && parseInt(dia, 10) >=23 ) {
  alert("Usted es Libra")
}
else if (parseInt(mes, 10) == 10 && parseInt(dia, 10) <=23 ) {
  alert("Usted es Libra")
}
else if (parseInt(mes, 10) == 10 && parseInt(dia, 10) >=24 ) {
  alert("Usted es Escorpio")
}
else if (parseInt(mes, 10) == 11 && parseInt(dia, 10) <=22 ) {
  alert("Usted es Escorpio")
}
else if (parseInt(mes, 10) == 11 && parseInt(dia, 10) >=23 ) {
  alert("Usted es Sagitario")
}
else if (parseInt(mes, 10) == 12 && parseInt(dia, 10) <=21 ) {
  alert("Usted es Sagitario")
}
else if (parseInt(mes, 10) == 12 && parseInt(dia, 10) >=22 ) {
  alert("Usted es Capricornio")
}
else if (parseInt(mes, 10) == 1 && parseInt(dia, 10) <=20) {
  alert("Usted es Capricornio")
}
else if (parseInt(mes, 10) == 1 && parseInt(dia, 10) >=21 ) {
  alert("Usted es Acuario")
}
else if (parseInt(mes, 10) == 2 && parseInt(dia, 10) <=19 ) {
  alert("Usted es Acuario")
}
else if (parseInt(mes, 10) == 2 && parseInt(dia, 10) >=20 ) {
  alert("Usted es Piscis")
}
else if (parseInt(mes, 10) == 3 && parseInt(dia, 10) <=20 ) {
  alert("Usted es Piscis")
}
}