$(function() {
    if(window.innerWidth> 750) {
        $(".nav").show();

    } else {
        $(".nav").hide();
    }
    $(window).resize(function(){
        if(window.innerWidth> 750) {
            $(".nav").show();
    
        } else {
            $(".nav").hide();
        }
    })
    $(".mobile-icon i").click(function() {
        $(".nav").slideToggle();
    })

    $(".slidetotop").hide();
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $(".slidetotop").fadeIn(); 
        } else {
            $(".slidetotop").fadeOut();  
        }
    })
    $(".slidetotop").bind("click",function() {
        $("html,body").animate( {scrollTop:0},1000);
        return false;
    })

})