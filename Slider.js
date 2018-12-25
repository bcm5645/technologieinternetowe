let CurrentImageIndex = 0;

function SliderChangeImage() 
{
    if(CurrentImageIndex > (Nagrody.length -1))
        CurrentImageIndex = 0;
    
    var ImageTag = "<img src=\"slider/slajd" + (CurrentImageIndex+1) + ".jpg\" />"

    document.getElementById("Slider").innerHTML = ImageTag;
    CurrentImageIndex++;
    setTimeout("SliderChangeImage()", 2000);
}
