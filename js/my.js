function calculMoyenne(){

  let tab = [];
  let verif = true;
  while (verif) {
    let nbentier = prompt("Veuillez entrer un nombre entier");
    if(isNaN(nbentier)){
      console.log("Ce n'est pas un nombre entier");
      i++;
      tab[i] = nbentier;
    }
    else if(nbentier==""){
      console.log("Ce n'est pas un nombre entier (rien n'a été entré)");
    }
    else
    {
        verif = false;
        console.log("Nombre entier ok");
        let moy = moyenne(0,tab.length);
        alert("Nb d'éléments dans le tableau : " + tab.length + ". La moyenne est : " + moy);
    }
  }
  function moyenne(depart,fin){
    let somme = 0;
    for (var i = depart; i < Number(fin); i++) {
      somme = somme + Number(tab[i]);
    }
    somme = Number(somme) / Number(fin);
    console.log(somme + " "+ fin);
    return Number(somme);


  }

}
