
  function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("BannerImg").src = images[x];
}

document.getElementById("ChangeBannerImage").onclick = function startTimer() {
    document.getElementById("PlayPause").classList.remove('fa-play');
    $('#ChangeBannerImage i').toggleClass("fa-pause");
    var ChangeImageRepeat = setInterval(displayNextImage, 5000);
    document.getElementById("ChangeBannerImage").onclick = function stopTimer(){
        clearInterval(ChangeImageRepeat);
        document.getElementById("PlayPause").classList.remove('fa-pause');
        $('#ChangeBannerImage i').toggleClass("fa-play");
        document.getElementById("ChangeBannerImage").onclick = function startTimer(){
            //repeat
            document.getElementById("PlayPause").classList.remove('fa-play');
        $('#ChangeBannerImage i').toggleClass("fa-pause");
        var ChangeImageRepeat = setInterval(displayNextImage, 5000);
        document.getElementById("ChangeBannerImage").onclick = function stopTimer(){
        clearInterval(ChangeImageRepeat);
        document.getElementById("PlayPause").classList.remove('fa-pause');
        $('#ChangeBannerImage i').toggleClass("fa-play");
        document.getElementById("ChangeBannerImage").onclick = function startTimer(){
            
        }
    }
        }
    }
}

var images = [], x = -1;
images[0] = "/theme_n/static/src/images/aboutus-page-banner.png";
images[1] = "/theme_n/static/src/images/thebadge-page-banner-web.png";
images[2] = "/theme_n/static/src/images/Banner-Web-View.png";




  if((window.location.href===('http://localhost:8069/ourproduct'))||(window.location.href===('http://localhost:8069/contactus'))||(window.location.href===('http://localhost:8069/web/login'))||(window.location.href===('http://localhost:8069/process'))){
    document.getElementById("top-banner").style.display = "none";
  } 
  if(window.location.href===('http://localhost:8069/aboutus')){
    document.getElementById("BannerImg").src = "/theme_n/static/src/images/aboutus-page-banner.png";
    document.getElementById("BannerTextTwo").innerHTML = '"Whatever your apparel dreams are, we have the expertise to make it a reality"'
    document.getElementById("BannerTextThree").innerHTML = "27 Years in Bussiness, Our passion remains to develop interesting and innovative manufacturing methods to meet customer exceptations";
    document.getElementById("BannerTextOne").style.display = "none";  
    document.getElementById("BannerTextHome").style.display = "none";
    document.getElementById("ChangeBannerImage").style.display = "none";
}
  if(window.location.href===('http://localhost:8069/thebadge')){
    document.getElementById("BannerImg").src = "/theme_n/static/src/images/thebadge-page-banner-web.png";
    document.getElementById("BannerTextTwo").innerHTML = '"Team Work makes our dream work"'
    document.getElementById("BannerTextThree").innerHTML = "Our primary motto is to nature and empower our team";
    document.getElementById("BannerTextOne").style.display = "none";
    document.getElementById("BannerTextHome").style.display = "none";
    document.getElementById("ChangeBannerImage").style.display = "none";
  }
