
'use strict'

var Carousel = function(array) {
    return new Carousel.init(array);
}



Carousel.showImage = function showImage(src, num) {
    var img = document.createElement("img");
    img.src = src;
    img.setAttribute('data-order', num)
    if(num > 0){
        img.setAttribute('class', 'hidden')
    } else {
        img.setAttribute('class', 'selection')
    }
    document.getElementById('img-container').appendChild(img);
}


Carousel.init = function onLoad(array) {
    var that = this;
    var bbImages = array;
    if(!document.getElementById('cool-carousel')){
        throw '"cool-carousel" id missing';
    }
    var coolCarousel= document.getElementById('cool-carousel');

    var imgContainer = document.createElement('div')
    imgContainer.setAttribute('class', 'crop')
    imgContainer.setAttribute('id', 'img-container')

    var dotDiv = document.createElement('div')
    dotDiv.setAttribute('id', 'dot-div')

    var previous= document.createElement('div')
    previous.addEventListener('click', function(){
      that.cycleImg('prev')
    })
    previous.setAttribute('id', 'prev')
    var nextOne= document.createElement('div')
    nextOne.setAttribute('id', 'next')
    nextOne.addEventListener('click', function(){
      that.cycleImg('next')
    })
    coolCarousel.appendChild(imgContainer);
    coolCarousel.appendChild(dotDiv);
    coolCarousel.appendChild(previous);
    coolCarousel.appendChild(nextOne);

    if(bbImages.length > 1) {

        for (var i=0; i < bbImages.length; i++) {
            var num = i;
            this.showImage(bbImages[i], num);
            var dot = document.createElement('div')
                if(i === 0) {
                    dot.className = "selected";
                } else {
                    dot.className = "toBeSelected"
                }

            dot.addEventListener('click', this.selectImage);
            dot.setAttribute('data-order', num)
            dotDiv.appendChild(dot);
        }
    }

    Carousel.setInter();
}

Carousel.setInter = function() {
    var that = this;
    var inter = setInterval(function() {
        that.cycleImg('next')
    }, 5000);
    for (var i = 0; i <= inter; i++) {
        clearInterval(i);
    }
    inter = setInterval(function(){
        that.cycleImg('next')
    }, 5000);
}


//target divs with selected class to change which button is selected
Carousel.selectImage = function selectImage(event){

    var currentSelection = document.getElementsByClassName("selection");
    var currentDot = document.getElementsByClassName("selected");
    var newDot = event.target;
    var newImg = document.getElementById('img-container').children[event.currentTarget.getAttribute('data-order')];
    currentSelection[0].className = 'hidden';
    currentDot[0].className = 'toBeSelected';
    newDot.className = 'selected';
    newImg.className = 'selection';
    Carousel.setInter();
}

//next and previous
Carousel.cycleImg =function cycleImg(direction) {

    var orginal = document.getElementsByClassName('selection')[0];
    var currentImgIdx = document.getElementsByClassName('selection')[0].getAttribute('data-order')
    if (direction === 'prev') {
        var next = Number(currentImgIdx) - 1
    } else {
        var next = Number(currentImgIdx) + 1
    }
    var changeTo = document.getElementById('img-container').children
    for(var i=0; i < changeTo.length; i++) {
            if(next < 0) {
                next = changeTo.length-1;
            }
            if(next >= changeTo.length) {
                next = 0;
            }
            if(changeTo[i].getAttribute('data-order') == next) {
               document.getElementById('img-container').children[i].className = 'selection';
                orginal.className = 'hidden';

                document.getElementById('dot-div').children[currentImgIdx].className = 'toBeSelected'
                document.getElementById('dot-div').children[i].className = 'selected'


            }

    }
    Carousel.setInter();

}



