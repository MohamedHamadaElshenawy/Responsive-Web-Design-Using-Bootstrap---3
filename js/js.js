$(function(){
    
    //Because Of The Navbar Is Fixed Top So Padding Space For Its Height
    $("body").css("padding-top",$(".navbar").innerHeight());
    
    //When Hover The Images Of Project
    $(".our-projects div.row .col-md-3").hover(function(){
        $(this).css("transform", "scale(.92,.92)");
    },function(){
        $(this).css("transform", "scale(1,1)");
    });
    
    //Tags of Categories Click Functions
    $(".our-projects ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        
        if($(this).data("class") === "all"){
            $(".our-projects div.row .col-md-3").css("opacity","1").hover(function(){
                $(this).css("transform", "scale(.92,.92)");
            },function(){
                $(this).css("transform", "scale(1,1)");
            });
        }else{
            
            $(".our-projects div.row .col-md-3").css("opacity",".2").hover(function(){
                $(this).css("transform", "scale(1,1)");
            },function(){
                $(this).css("transform", "scale(1,1)");
            });
            
            $($(this).data("class")).css("opacity", "1").hover(function(){
                $(this).css("transform", "scale(.92,.92)");
            },function(){
                $(this).css("transform", "scale(1,1)");
            });
        }
    });
    
    //Navbar Items Click Functions
    $(".navbar .collapse ul li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        $("html, body").animate({
            scrollTop: $($(this).data("class")).offset().top - 80
        },1000);
    });
});