function showImage(src, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.setAttribute('class', 'images');
    document.body.appendChild(img);
}


function onLoad() {
  var bbImages = ['http://www.thebigsalad.net/wp-content/uploads/2012/05/slide13.jpg', 'http://www.thebigsalad.net/wp-content/uploads/2012/11/slide5-e1398016833801.jpg'];
    for (var i=0; i < bbImages.length; i++) {
        var alt = i+1;
        showImage(bbImages[i], 'pic'+ alt);
    }
}