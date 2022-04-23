let gImages = document.querySelectorAll(".gallery-img");
let glatestImg;
let winwidth = window.innerWidth;

if(gImages){
    gImages.forEach(function(imgg, index){
        imgg.onclick = function(){
            
            let getEcss = window.getComputedStyle(imgg);
            let getFImgURL = getEcss.getPropertyValue("background-image");
            let getIurlPos = getFImgURL.split("/DemoWeb/Pictures/");
            let setNImgURL = getIurlPos[1].replace('")','');
            

            glatestImg = index + 1;

            let ctainer = document.body;
            let nImgWindow = document.createElement("div");
            ctainer.appendChild(nImgWindow);
            nImgWindow.setAttribute("class", "img-window");
            nImgWindow.setAttribute("onclick", "closedImg()");

            let nImg = document.createElement("img");
            nImgWindow.appendChild(nImg);
            nImg.setAttribute("src", "/DemoWeb/Pictures/" + setNImgURL);
            nImg.setAttribute("id", "curr-img");

            nImg.onload = function() {
                let imgWidth = this.width;
               /* let calcImageToEdge = ((winwidth - imgWidth) / 2) - 60;*/
                let calcImageToEdge = imgWidth + 260;
                let newNBtn = document.createElement("a");
                let btnNText = document.createTextNode("NEXT");
                newNBtn.appendChild(btnNText);
                ctainer.appendChild(newNBtn);
                newNBtn.setAttribute("Class", "img-btn-n");
                newNBtn.setAttribute("onclick", "changeImage(1)");

                newNBtn.style.cssText = "left: " + calcImageToEdge + "px;";

                let newPBtn = document.createElement("a");
                let btnPText = document.createTextNode("PREV");
                newPBtn.appendChild(btnPText);
                ctainer.appendChild(newPBtn);
                newPBtn.setAttribute("Class", "img-btn-p");
                newPBtn.setAttribute("onclick", "changeImage(0)");

                newPBtn.style.cssText = "right: " + calcImageToEdge + "px;";
            }

        }
    });
}


function closedImg(){
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-n").remove();
    document.querySelector(".img-btn-p").remove();
}

function changeImage(changeDirectory){

    document.querySelector("#curr-img").remove();

    let getImageWIndow = document.querySelector(".img-window");
    let nImg = document.createElement("img");
    getImageWIndow.appendChild(nImg);
    
    let calNewImage;
    
    if(changeDirectory === 1) {
        calNewImage = glatestImg + 1;
        if(calNewImage > gImages.length){
            calNewImage = 1;
        }
    }
    else if (changeDirectory === 0){
        calNewImage = glatestImg - 1;
        if(calNewImage < 1){
            calNewImage = gImages.length;
        }
    }

    nImg.setAttribute("src", "/DemoWeb/Pictures/exterior" + calNewImage +".jpg");
    nImg.setAttribute("id", "curr-img");
    
    glatestImg = calNewImage;

}
