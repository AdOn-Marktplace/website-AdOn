  var src = document.getElementById("video").getAttribute("src");


function openModalVideo() {
    $('#video').attr('src', src);

    document.getElementById("myModalVideo").style.display = "block";
    document.getElementById("blurry").style.filter = "blur(2.5px)";
}
  
function closeModalVideo() {
  $('#video').attr('src', '');

  document.getElementById("myModalVideo").style.display = "none";
  document.getElementById("blurry").style.filter = "none";

    
}
    
    
    var slideIndexVideo = 1;
    showslidesVideo(slideIndexVideo);
    
function plusSlidesVideo(n) {
      showslidesVideo(slideIndexVideo += n);
    }
  
function getKeyCodeVideo(e){
      var key_code=e.which || e.keyCode;
      switch(key_code){
        case 37:
          showslidesVideo(slideIndexVideo += -1);
          break;
        case 39:
          showslidesVideo(slideIndexVideo += 1);
          break;
      }
    }
      
function currentSlideVideo(n){showslidesVideo(slideIndexVideo = n)}
  
function showslidesVideo(n) {
      var i;
      var slides = document.getElementsByClassName("mySlidesVideo");
      var dots = document.getElementsByClassName("demo");
      var captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndexVideo = 1}
      if (n < 1) {slideIndexVideo = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndexVideo-1].style.display = "block";
    }
    