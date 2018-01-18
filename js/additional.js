/*---------------Navbar---------------*/
$(document).ready(function(){
	/*Zet de variabele screenHeight naar de schermhoogte, als die niet beschikbaar is is de schermhoogte 0*/
	var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  $(window).scroll(function() {
  	
  	/*Als er verder gescrollt is dan de schermhoogte -56 dan zal hij de code uitvoeren*/
    if ($(document).scrollTop() > screenHeight - 56) {
    	/*Er wordt een klasse toegevoegd aan de nav*/
      $("nav").addClass("showNavbar");
	} 
    
    else {
    	/*Als je nog niet zo ver bent of terugscrollt wordt de klasse weer verwijdert*/
      $("nav").removeClass("showNavbar");
    }

  });
});



/*---------------Inhoud van jaren---------------*/
/*Een functie voor het tonen van jaar één*/
function jaarEen(){
	document.getElementById("jaarEen").style.display="block";
	document.getElementById("jaarTwee").style.display="none";
	document.getElementById("jaarDrie").style.display="none";
	document.getElementById("jaarVier").style.display="none";
}
/*Een functie voor het tonen van jaar twee*/
function jaarTwee(){
	document.getElementById("jaarEen").style.display="none";
	document.getElementById("jaarTwee").style.display="block";
	document.getElementById("jaarDrie").style.display="none";
	document.getElementById("jaarVier").style.display="none";
}
/*Een functie voor het tonen van jaar drie*/
function jaarDrie(){
	document.getElementById("jaarEen").style.display="none";
	document.getElementById("jaarTwee").style.display="none";
	document.getElementById("jaarDrie").style.display="block";
	document.getElementById("jaarVier").style.display="none";
}
/*Een functie voor het tonen van jaar vier*/
function jaarVier(){
	document.getElementById("jaarEen").style.display="none";
	document.getElementById("jaarTwee").style.display="none";
	document.getElementById("jaarDrie").style.display="none";
	document.getElementById("jaarVier").style.display="block";
}