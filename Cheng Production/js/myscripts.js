// Smooth Scroll Effect 

// $('html, body').smoothScroll(500);


// Image Grid 
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });

    $(".filter").click(function(e){
        $(this).addClass("active").siblings().removeClass("active");
        e.preventDefault();
    });
});



// Navbar Transparent in Home 

var navcol = $(".navbar.navbar-dark");
var dark = "bg-dark"
var bannnerimageheight = $('#home').height();

navcol.removeClass(dark);


$(window).scroll(function(){
    if( $(this).scrollTop() > (bannnerimageheight)) {
        navcol.addClass(dark);
    }
    else { 
        navcol.removeClass(dark); 
    }
});

$(".collapsed").click(function() {
    // toggle the class after half second
    navcol.addClass(dark);
});

// $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });



// disable image right click
$("body").on("contextmenu", "img", function(e) {
    return false;
  });


// Modal Functions 
function openModal(){
    // show image viewer or modal when any image is clicked
    document.getElementById('my-modal').style.display = "inline-flex";

    // hide body scroll and navbar when modal is open
    document.body.style.overflow = "hidden";
    document.getElementById("my-navbar").style.display = "none";


}

// Close Modal Function
function closeModal(){
    // show image viewer or modal when any image is clicked
    document.getElementById('my-modal').style.display = "none";

    // display body scroll and navbar when modal is closed
    document.body.style.overflow = "auto";
    document.getElementById("my-navbar").style.display = "flex";
}

//  delcare var slideindex and initialize to 1
var slideIndexJS = 1;

// calling fucntion showslides() by passing var slideIndexJSm high all slides initlially
showSlides(slideIndexJS);

function changeSlides(n){
    showSlides(slideIndexJS += n);
}

// Display image with thumbnail clicked
function currentSlide(n){
    showSlides(slideIndexJS = n);
}

// Main function to operate the slide show
function showSlides(n){
    var i;

    // get all ements with class "my-slides"
    var slidesJS = document.getElementsByClassName("my-slides");

    // overflow and underflow
    if (n > slidesJS.length) {
        slideIndexJS = 1;
    }
    if (n < 1) {
        slideIndexJS = slidesJS.length;
    }

    // Hide all slides initilialy
    for (i=0; i<slidesJS.length; i++){
        slidesJS[i].style.display = "none";
    }

    // show slides which is clicked
    slidesJS[slideIndexJS - 1].style.display= "Block";

}