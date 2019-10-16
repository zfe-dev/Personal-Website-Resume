$(document).ready ( function(){
    $('body,html').animate({scrollTop: $(about).offset().top} , 300 , function(){window.location.hash = "about";})
});

$(function(){
    $(".nav a, footer a").on("click",function(event){
        $('body.html').stop();
        event.preventDefault();
        var hash = this.hash;
        console.log(hash);
        $('body,html').animate({scrollTop: $(hash).offset().top} , 600 , function(){window.location.hash = hash;})

    });
})
