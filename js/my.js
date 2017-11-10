function jourDeLaSemaine(){
  var ladate=new Date()
  var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
  alert(tab_jour[ladate.getDay()]);
  console.log(tab_jour[ladate.getDay()]);
}
