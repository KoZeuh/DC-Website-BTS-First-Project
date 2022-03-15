function ChangePage(index){
    switch (index) {
        case "reserv_repas":
            window.location='repas.html';
            break;
        case "reserv_salle":
            window.location='https://app.moqups.com/bNm1orR8DU0JbVdQy8m9j50uHxjPl7qi/view/page/a883aa402';
            break;
        case "accueil":
            window.location='accueil.html';
            break;
    }
    
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


function DisplayOverlay(index) {
    document.getElementById(index).style.display = "block";
}

function HideOverlay(index) {
    document.getElementById(index).style.display = "none";
}

var Txt = []
var Prix = []
var PrixTotal = []

function test(value, prix) {
    
    
    PrixTotal.splice(0, 1, parseFloat(prix))
    Txt.splice(0,1,value)
    Prix.splice(0,1, prix)
    console.log(Txt);
    document.getElementById("entre_txt").innerHTML = Txt[0]
    document.getElementById("entre_prix").innerHTML = Prix[0]
    CalculTotal();
}

function test2(value, prix) {
    
    PrixTotal.splice(1, 1, parseFloat(prix))
    Txt.splice(1, 1, value)
    Prix.splice(1,1, prix)
    console.log(Txt);
    document.getElementById("plats_txt").innerHTML = Txt[1]
    document.getElementById("plats_prix").innerHTML = Prix[1]
    CalculTotal();
}

function ChoixBoissons(value, prix) {

    PrixTotal.splice(2, 1, parseFloat(prix))
    Txt.splice(2, 1, value)
    Prix.splice(2,1, prix)
    console.log(Txt);
    console.log(Prix);
    console.log(PrixTotal);
    document.getElementById("drink_txt").innerHTML = Txt[2]
    document.getElementById("drink_prix").innerHTML = Prix[2]
    CalculTotal();
}

function CalculTotal() {
    var somme = 0
    for (let i = 0; i < PrixTotal.length; i++) {
        somme = somme + PrixTotal[i]
        
    }
    if(PrixTotal.length >= 3){
        document.getElementById("total").innerHTML = "Total : " + Math.round((somme) * 100) / 100 + " €"
    }
}

function RecapCommande() {
    window.location='recap_commande.html';
    document.getElementById("entre_txt_recap").innerHTML = Txt[0]
}

function OverlayOn(){
    if(Txt.length != 3){
        document.getElementById("error").innerHTML = "Veuillez choisir un repas complet."
    }else{
        document.getElementById("error").innerHTML = ""
        document.getElementById("overlay2").style.display = "block";
        document.getElementById("entre_txt_recap").innerHTML = Txt[0]
        document.getElementById("entre_prix_recap").innerHTML = Prix[0]
        document.getElementById("plats_txt_recap").innerHTML = Txt[1]
        document.getElementById("plats_prix_recap").innerHTML = Prix[1]
        document.getElementById("drink_txt_recap").innerHTML = Txt[2]
        document.getElementById("drink_prix_recap").innerHTML = Prix[2]
        var somme = 0
        for (let i = 0; i < PrixTotal.length; i++) {
            somme = somme + PrixTotal[i]
        }
            document.getElementById("total_recap").innerHTML = "Total : " + Math.round((somme) * 100) / 100 + " €"
    }
    
}

  
function OverlayOff() {
    document.getElementById("overlay2").style.display = "none";
  }



