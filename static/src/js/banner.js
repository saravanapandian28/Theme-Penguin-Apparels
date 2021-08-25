// image change while clicking button

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("BannerImg").src = images[x];
}
var images = [], x = -1;
//list of images that need to be change in home page while clicking playbutton
images[0] = "/theme_n/static/src/images/aboutus-page-banner.png";
images[1] = "/theme_n/static/src/images/thebadge-page-banner-web.png";
images[2] = "/theme_n/static/src/images/Banner-Web-View.png";

var play=document.getElementById("PlayAndPause");
var count=0;
var ChangeImageRepeat;
play.addEventListener('click',function(event){
    event.preventDefault();
   
    if(count==0){
    
    play.innerHTML='<i class="fa fa-pause"></i>';
    play.classList.add("spinner");
    setTimeout(function(){
      //add spinning class to spin after clicking play button in banner
        play.classList.remove("spinner");
    }, 1000);
    ChangeImageRepeat = setInterval(displayNextImage, 5000);
    count++;
    }
  else{
    clearInterval(ChangeImageRepeat);
      play.innerHTML='<i class="fa fa-play"></i>';
      play.classList.add("spinner");
    setTimeout(function(){
        play.classList.remove("spinner");
    }, 1000);
      count--;
  }  
})



var url = window.location.href;
var target = url.split('/');
//hiding banner for those pages which no need to display
if((('/'+target[target.length-1])===('/ourproduct'))||(('/'+target[target.length-1])===('/contactus'))||(('/'+target[target.length-1])===('/login'))||(('/'+target[target.length-1])===('/process'))){
    document.getElementById("top-banner").style.display = "none";
  } 

//changing ecvh banner for each page
  if(('/'+target[target.length-1])===('/aboutus')){
    document.getElementById("BannerImg").src = "/theme_n/static/src/images/aboutus-page-banner.png";
    document.getElementById("BannerTextTwo").innerHTML = '"Whatever your apparel dreams are, we have the expertise to make it a reality"'
    document.getElementById("BannerTextThree").innerHTML = "27 Years in Bussiness, Our passion remains to develop interesting and innovative manufacturing methods to meet customer exceptations";
    document.getElementById("BannerTextOne").style.display = "none";  
    document.getElementById("BannerTextHome").style.display = "none";
    document.getElementById("ChangeBannerImage").style.display = "none";
}
  if(('/'+target[target.length-1])===('/thebadge')){
    document.getElementById("BannerImg").src = "/theme_n/static/src/images/thebadge-page-banner-web.png";
    document.getElementById("BannerTextTwo").innerHTML = '"Team Work makes our dream work"'
    document.getElementById("BannerTextThree").innerHTML = "Our primary motto is to nature and empower our team";
    document.getElementById("BannerTextOne").style.display = "none";
    document.getElementById("BannerTextHome").style.display = "none";
    document.getElementById("ChangeBannerImage").style.display = "none";
  }

