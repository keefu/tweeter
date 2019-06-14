$(document).ready(function() {
    $("textarea").on("input", (event) => {
    var count = 140 - $(event.target).val().length;
    var counter = $(event.target).parent().find(".counter");
    counter.text(count);
    if(count < 0){
        counter.css("color", "red");
    } else {
        counter.css("color", "initial")
    }
    }); 
});
  
