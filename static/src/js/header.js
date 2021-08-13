$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.tonavbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    })

// header active

var selector = '.tonavbar ul li';
    var url = window.location.href;
    var target = url.split('/');
     $(selector).each(function(){
        if($(this).find('a').attr('href')===('/'+target[target.length-1])){
          $(this).addClass('activepage');
        }
     });



