
var typed = new Typed('#text', {
    strings: ["Frontend Developer", "Full Stack Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

// -----------------------------------for smooth scroll----------------------

$(window).on('scroll load', function () {

    $('#menu').removeClass('fa-time');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
        $('.top').show();

    } else {
        $('.top').hide();
    }
});

$('a[href*="#"]').on('click', function (e) {

    e.preventDefault();
    $('html, body').animate({

        scrollTop: $($(this).attr('href')).offset().top,
    },

        500,
        'linear'
    );

});



// ---------------------------for scroll bar-------------------
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar1").style.width = scrolled + "%";
}