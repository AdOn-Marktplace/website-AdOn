function openModalArt() {
  document.getElementById("myModalArt").style.display = "block";
  document.getElementById("blurry").style.filter = "blur(2.5px)";
}

function closeModalArt() {
  document.getElementById("myModalArt").style.display = "none";
  document.getElementById("blurry").style.filter = "none";
}
  
  
  var slideIndexArt = 1;
  showslidesArt(slideIndexArt);

  function plusSlidesArt(n) {
    showslidesArt(slideIndexArt += n);
  }

  function getKeyCodeArt(e){
    var key_code=e.which || e.keyCode;
    switch(key_code){
      case 37:
        showslidesArt(slideIndexArt += -1);
        break;
      case 39:
        showslidesArt(slideIndexArt += 1);
        break;
    }
  }
  
  function currentSlideArt(n) {showslidesArt(slideIndexArt = n)}

  
  function showslidesArt(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesArt");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndexArt = 1}
    if (n < 1) {slideIndexArt = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexArt-1].style.display = "block";
  }