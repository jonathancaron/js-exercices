function somme(){
  let result = [];
  let resultat = 0;
  for (var i = 0; i < 3; i++) {
    result[i] = prompt("Insérer un nombre (3 au total)");
    let nb = Number(result[i]);
    resultat += nb;
  }
  alert(resultat);

}
