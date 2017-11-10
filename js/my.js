function testWhile(){
  let resultat = "p";
  while (resultat) {
    let entree = prompt("Ecrivez la lettre 'p'");
    if(entree == resultat)
    {
      console.log("Ok");
      alert("\""+resultat+"\"");
      break;
    }
  }

}
