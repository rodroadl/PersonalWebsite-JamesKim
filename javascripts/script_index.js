var already_clicked = false;
var murkyVoice = document.getElementById("MurkyVoice"); 
 
$(document).ready(function(){
    $(".MurkyArt").click(function(){
        if(!already_clicked){
            console.log(already_clicked);
            murkyVoice.play(); 
        }else{
            console.log(already_clicked);
            murkyVoice.pause(); 
        }
        
        already_clicked = !already_clicked;
    });


});