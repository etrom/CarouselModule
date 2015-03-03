'use strict'

function showImage(src, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    if (alt > 1) {
        document.getElementById('hidden').appendChild(img);
    } else{
        document.getElementById('img-container').appendChild(img);
    }
}


function onLoad() {
    var a = 'http://www.thebigsalad.net/wp-content/uploads/2012/05/slide13.jpg'
    var b = 'http://www.thebigsalad.net/wp-content/uploads/2012/11/slide5-e1398016833801.jpg'
    var c = 'http://digital-art-gallery.com/oid/123/1600x500_21103_Salt_Flat_Racer_2d_sci_fi_car_futuristic_picture_image_digital_art.jpg'
    var bbImages =[a,b,c];
        if(bbImages.length > 1) {
            var alt = i+1;
            for (var i=0; i < bbImages.length; i++) {
                var alt = i +1;
                var dot= document.createElement('div')
                if(i === 0) {
                    dot.className = "selected";
                } else {
                    dot.className = "toBeSelected"
                }

                dot.setAttribute("data-url",bbImages[i])
                showImage(bbImages[i], i+1);
                dot.setAttribute("onclick",switchTo)
                dot.onclick = switchTo;
                document.getElementById('dot-div').appendChild(dot);
            }
        }
}

//switch image
function hideAndShow(hide, show, num){
    var allImages = document.getElementsByTagName("img");
    for(var i=0; i <allImages.length; i++){
        if(allImages[i].currentSrc === show ){
            document.getElementById('img-container').appendChild(allImages[i])
        }
        if(allImages[i].currentSrc === hide){
            document.getElementById('hidden').appendChild(allImages[i])
        }
    }
}

//target divs with selected class to change selected button
function switchTo(event){

    //current selection will always have 'selected' class
    var currentSelection = document.getElementsByClassName("selected");
    var currentSelectionUrl = currentSelection[0].parentNode.parentNode.children[2].currentSrc
    currentSelection[0].className = "toBeSelected";
    //new selection will always be the target
    var newSelection = event.target
    newSelection.className = "selected";
    var newSelectionUrl = newSelection.getAttribute('data-url')
    hideAndShow(currentSelectionUrl, newSelectionUrl)

}


function nextImg() {

}

function prevImg() {

}

function selectImg() {

}

