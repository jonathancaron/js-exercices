alert("Pour votre inscription, nous avons besoin de divers informations (la suite à la prochaine box)");


let pointure = prompt("Quel est votre pointure ? (cm)");
let anneenaissance = prompt("Quel est votre année de naissance ?");

function calcul(pointure, anneenaissance){
  let un = pointure*2;
  let deux = un + 5;
  let trois = deux * 50;
  let quatre = trois - anneenaissance;
  let cinq = quatre + 1766;

  return cinq;
}

let resultat = calcul(pointure,anneenaissance);
alert(resultat);
