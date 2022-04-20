sliderint = 1;
sliderNext = 2;

$(document).ready(function(){
    $("#slider>Img#1").fadeIn(300);
    startSlider();
});

function startSlider(){
    countCheck = 4;
   
    loop   = setInterval(function(){

        if(sliderNext>countCheck){
            sliderNext = 1;
            sliderint = 1;
        }
        $("#slider>Img").fadeOut(300);
        $("#slider>Img#"+sliderNext).fadeIn(300);

        sliderNext = sliderNext + 1;
    }, 10000)
}



function prev(){
    newSlide = sliderNext - 2;
    
    showslide(newSlide);  
}

function next(){
    newSlide = sliderint + 1;
    
    showslide(newSlide);
   
}

function stopLoop(){
    
    window.clearInterval(loop);
}

function showslide(id){
    stopLoop();
    if(id>countCheck){
            id = 1;
        }else if(id<1){
            id = countCheck;
        }

    $("#slider>Img").fadeOut(300);
    $("#slider>Img#"+id).fadeIn(300);

    sliderint = id
    sliderNext = id + 1;
    
    startSlider();
}

$("#slider>Img").hover(
    
    function(){stopLoop();},
    function(){startSlider();},
    
);