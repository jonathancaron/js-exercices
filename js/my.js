function surfaceRectagle(){
  let largeur = prompt("Insérez la largeur (cm)");
  let longueur = prompt("Insérez la longueur (cm)");
  let surface = largeur * longueur;
  alert("La surface est de : " + surface + " cm³");
}

function periRectagle(){
  let largeur = prompt("Insérez la largeur (cm)");
  let longueur = prompt("Insérez la longueur (cm)");
  let perimetre = (largeur+longueur)*2;
  alert("Le périmètre est de : " + perimetre + " cm²");
}
