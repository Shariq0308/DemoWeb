


let galleryImages = document.querySelectorAll(".gallery-img");
let getlatestOpenedImg;
let windowWidth = window.innerWidth;


if(galleryImages){
    galleryImages.forEach(function(image, index) 
    {
        image.onclick = function() 
        {
            alert("CHeck");
            alert(getFullImgUrl);
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/Pictures/");
            alert(getFullImgUrl);
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            /*alert(setNewImgUrl);*/

            getlatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");


            let newImg = document.createElement("img");
            
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "/Pictures/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
                
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("NEXT");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("Class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");

                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("PREV");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("Class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");

                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }

        }

    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir)
{
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);
    
    let calcNewImage;
    
    if(changeDir === 1) {
        calcNewImage = getlatestOpenedImg + 1;
        if(calcNewImage > galleryImages.length){
            calcNewImage = 1;
        }
    }
    else if (changeDir === 0){
        calcNewImage = getlatestOpenedImg - 1;
        if(calcNewImage < 1){
            calcNewImage = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "/Pictures/exterior" + calcNewImage +".jpg");
    newImg.setAttribute("id", "current-img");
    
    getlatestOpenedImg = calcNewImage;

    
}
    