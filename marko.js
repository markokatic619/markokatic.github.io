$(document).ready(function() { 
    

    $("#video1").toggle();
    $("#strijelica").click(function(){
        $("#video1").toggle(2);
        $("#img2").toggle(2);
    });
    
    $("#osobniPodatci").click(function(){
        $(".defult").hide(50);
        $(".nevidljivo").hide(50);
        $("#osobniPodatci2").toggle(2);
    });

    $("#obrazovanje").click(function(){
        $(".defult").hide(50);
        $(".nevidljivo").hide(50);
        $("#obrazovanje2").show(2);
    });

    $("#vjestine").click(function(){
        $(".defult").hide(50);
        $(".nevidljivo").hide(50);
        $("#vjestine2").toggle(50);
    });

    $("#ostaleInformacije").click(function(){
        $(".defult").hide(50);
        $(".nevidljivo").hide(50);
        $("#ostaleInformacije2").toggle(50);
    });


});