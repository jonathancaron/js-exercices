function faireChoix(){
  let choix = prompt("Veuillez choisir entre le nombre 1, 2 ou 3");
  choix = Number(choix);
  let resultat = "";

  switch (choix) {
    case 1:
      resultat = "Merci";
      break;
    case 2:
      resultat = "Bonjour";
      break;
    case 3:
      resultat = "Au revoir";
      break;
    default:
      resultat = "Pardon, que voulez-vous ?";
  }
  console.log(resultat);
  alert(resultat);
}
