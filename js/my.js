let tab = [-2,1,4];

function additionne(x){
  return x + 2;
}

function soustrait(x){
  let result = x - 2;
  if(result >= 0){
    return result;
  }
  else{
    return "Nombre négatif!";
  }
}

function affiche(){
  alert(soustrait(tab[0]));
  alert(soustrait(tab.length));
}
