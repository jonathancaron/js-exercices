let rand = Math.floor(Math.random() * 100) + 0;
let tentative = "";

let essaiMax = 10;
let essai = 0;

for (var i = 0; i <= essaiMax; i++) {
  tentative = prompt("Tentez de trouvez le nombre entre 0 et 100. " + essai+"/"+essaiMax);
  if(tentative == rand)
  {
      alert("Le numéro est exact ! Numéro trouvé en "+essai+ " essais sur " +essaiMax+" au total.");
      break;
  }
  else{
    if(essai <=10){
      //tentative = prompt("Tentez de trouvez le nombre entre 0 et 100. " + essai+"/"+essaiMax );
      if(tentative > rand)
        {alert("Le chiffre est plus petit que "+tentative+", appuyer sur ok pour continuer");essai++;}
      else if (tentative < rand)
      {alert("Le chiffre est plus grand que "+tentative+", appuyer sur ok pour continuer");essai++;}
    }
    else
      {alert("GAME OVER");}
  }
}
