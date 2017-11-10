alert("Dans les prochaines boites de dialogue, merci d'inscrire deux nombres à virgule");
let nb1 = prompt("Premier nombre à virgule");
let nb2 = prompt("Deuxième nombre à virgule");
let nombre1 = parseFloat(nb1);
let nombre2 = parseFloat(nb2);

function multiplication (a,b){
  let result = nombre1*nombre2;
  return result;
};

function division (a,b){
  let result = nombre1/nombre2;
  return result;
};

let div = division(nombre1,nombre2);

document.getElementById('division').innerHTML = div;
