$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#ff0063', '#000', '#000', '#000', "#000"],
        anchors: ['home', 'about', 'submit', 'team', 'contact'],
        normalScrollElements: '.submission',
        autoScrolling: false,
    });

    $('#shuffle-text').ShuffleText([
        'poetry',
        'short story',
        'photography',
        'dramatic literature',
        'creative nonfiction',
        'visual arts',
        'fiction'
    ], {loop: true, delay: '1500'});
});

$(window).scroll(function() {            
       var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop(),
       nav = document.querySelectorAll('ul.topnav')[0];

    var navIsHovered = $('ul.topnav.responsive li:not(:first-child)').is(":hover");

    if (wS > (hT+hH-wH)){
        nav.style.backgroundColor = 'rgba(255,255,255,0.1)';
   } else {
       nav.style.backgroundColor = 'rgba(255,255,255,0)';
   }
   document.querySelectorAll('ul.topnav.responsive')[0].style.backgroundColor = 'rgba(255,255,255,0.1)';
}); 

function showMenu() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
        x.fadeTo(500, 1);
    } else {
        x.className = "topnav";
    }
}
