  var src = [document.getElementById("fvideo").getAttribute("src"), 
            document.getElementById("svideo").getAttribute("src")]


function openModalVideo() {

    document.getElementById("myModalVideo").style.display = "block";
    document.getElementById("blurry").style.filter = "blur(2.5px)";
}
  
function closeModalVideo() {
  
  document.getElementById("myModalVideo").style.display = "none";
  document.getElementById("blurry").style.filter = "none";

    
}

function stopVideo(){

  $('#fvideo').attr('src', '');
  $('#svideo').attr('src', '');

  $('#fvideo').attr('src', src[0]);
  $('#svideo').attr('src', src[1]);
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
    