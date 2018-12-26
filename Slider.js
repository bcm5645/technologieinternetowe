var CurrentImageIndex = 0;

function SliderChangeImage() 
{
    /*if(CurrentImageIndex > (Nagrody.length -1))
        CurrentImageIndex = 0;
    
    var ImageTag = "<img src=\"slider/slajd" + (CurrentImageIndex+1) + ".jpg\" />"

    document.getElementById("Slider").innerHTML = ImageTag;
    CurrentImageIndex++;*/

    plusDivs(1);
    setTimeout("SliderChangeImage()", 5000);
}

function plusDivs(n) {
  showDivs(CurrentImageIndex += n);
}

let allSLiderImages = document.getElementsByClassName("SliderImages");

function showDivs(n) {
    var i;
    if (n > allSLiderImages.length) {CurrentImageIndex = 1}
    if (n < 1) {CurrentImageIndex = allSLiderImages.length} ;
    
    HideAllImagesInSlider();
    
    allSLiderImages[CurrentImageIndex - 1].style.display = "block";
  }

function HideAllImagesInSlider() {
    for (i = 0; i < allSLiderImages.length; i++) {
        allSLiderImages[i].style.display = "none";
    }
}