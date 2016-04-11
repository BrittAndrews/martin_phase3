import $ from "jquery";


// slideshow/////////
// original slide show not working
// $("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#slideshow > div:first')
//     .fadeOut(5000)
//     .next()
//     .fadeIn(5000)
//     .end()
//     .appendTo('#slideshow');
// },  8000);





//SLIDESHOW homepage////////////////////

$('.img-wrapper img:gt(0)').hide();

$('.next').click(function() {
    $('.img-wrapper img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrapper');
});

$('.prev').click(function() {
    $('.img-wrapper img:first-child').fadeOut();
    $('.img-wrapper img:last-child').prependTo('.img-wrapper').fadeOut();
    $('.img-wrapper img:first-child').fadeIn();
});





// about page functionality /////////////////////////

// $('.about img:gt(0)').hide();

// $('.down').click(function() {
//     $('.about img:first-child').fadeOut().next().fadeIn().end().appendTo('.about');
// });

// $('.up').click(function() {
//     $('.about img:first-child').fadeOut();
//     $('.about img:last-child').prependTo('.about').fadeOut();
//     $('.about img:first-child').fadeIn();
// });












