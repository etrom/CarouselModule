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
                dot.setAttribute("onclick",selectImage)
                dot.onclick = selectImage;
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

//target divs with selected class to change which button is selected
function selectImage(event){
    //current selection will always have 'selected' class
    var currentSelection = document.getElementsByClassName("selected");
    var currentSelectionUrl = currentSelection[0].parentNode.parentNode.children[4].currentSrc
    currentSelection[0].className = "toBeSelected";
    //new selection will always be the target
    var newSelection = event.target
    console.log(newSelection, 'new')
    newSelection.className = "selected";
    var newSelectionUrl = newSelection.getAttribute('data-url')
    hideAndShow(currentSelectionUrl, newSelectionUrl)

}


function cycleImg(direction) {

    var original = document.getElementById('img-container').children[4]
    var picAlt = document.getElementById('img-container').children[4].alt;
    console.log(document.getElementById('img-container').children[3].children, 'event')
    // if(document.getElementById('img-container').children.getElementsByTagName('alt') === picAlt){
    //     var even = document.getElementById('img-container').children[3].children.getElementsByTagName('alt')
    // }

    if (direction === 'prev'){
        var next = Number(picAlt) - 1
        console.log(next, 'prev')
    } else{
        var next = Number(picAlt) + 1
        console.log(next, 'next')
    }
    var changeTo = document.getElementById('hidden').children

    for(var i=0; i < changeTo.length; i++) {
        //3
            if(next == 0) {
                //when you click prev on one
                next = changeTo.length+1;//3
                console.log('going back', next)
            }
            if(next > changeTo.length+1) {
                //when you click next on 3

                next = 1;
                console.log('going for', next)
            }
            if(changeTo[i].alt == next) {
                console.log('im in ')
                document.getElementById('img-container').appendChild(changeTo[i])
                document.getElementById('hidden').appendChild(original)

            }

    }
}



