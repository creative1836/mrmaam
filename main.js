$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#ff0063', '#000', '#000', '#000', "#000"],
        anchors: ['home', 'about', 'submit', 'issue', 'team', 'contact'],
        autoScrolling: false,
    });
    
    $('#shuffle-text').ShuffleText([
        'poetry',
        'short story',
        'photography',
        'dramatic literature',
        'creative nonfiction',
        'visual arts',
        'fiction',
        'opinion',
        'voice'
    ], {loop: true, delay: '1500'});
    
    $(".homeContainer").addClass('animated fadeInDown');  //fade the first div.section in on page load
});
 

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('.aboutPage').position().top * .5){
        $(".aboutPage").addClass('animated fadeInLeft');
    }
    if ($(this).scrollTop()>=$('.submitPage').position().top * .6) {
        $(".submitPage").addClass('animated fadeInLeft');
    }
    if ($(this).scrollTop()>=$('.issuePage').position().top * .75) {
        $(".issuePage").addClass('animated fadeInLeft');
    } 
    if ($(this).scrollTop()>=$('.teamPage').position().top * .75) {
        $(".teamPage").addClass('animated fadeInLeft');
    } 
    if ($(this).scrollTop()>=$('.contactPage').position().top * 0.85) {
        $(".contactPage").addClass('animated fadeInLeft');
    }
})

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
