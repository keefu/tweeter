$(document).ready(function() {
    $("textarea").on("input", (event) => {
    var count = 140 - $(event.target).val().length;
    var compteur = $(event.target).parent().find(".counter");
    compteur.text(count);
    if(count < 0){
        compteur.css("color", "red");
    } else {
        compteur.css("color", "initial")
    }
    }); 
});
  
