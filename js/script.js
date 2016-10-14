
$(document).ready(function(){

             $('#contact-form').validate(
             {
              rules: {
                name: {
                  minlength: 3,
                  required: true
                },
                phone: {
                  required: true,
                  minlength: 7,
                  massage:"ÐŸÐ¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ ÑÐ¾ÑÑ‚Ð¾ÑÑ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¸Ð· Ñ†Ð¸Ñ„Ñ€"
                },
              },
            messages: {
                phone: {
                    required: "Ð—Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ð¾ Ð’Ð°Ñˆ Ð½Ð¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°",
                    minlength:"ÐÐ¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð° Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð±Ñ‹Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ 7Ð¼Ð¸ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²"
                },
                name: {
                    required: "Ð—Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ð¾ Ð’Ð°ÑˆÐµ Ð¸Ð¼Ñ",
                }
            }
             });
            }); // end document.ready



$(document).ready(function(){

             $('#contact-form1').validate(
             {
              rules: {
                name: {
                  minlength: 3,
                  required: true
                },
                phone: {
                  required: true,
                  minlength: 7,
                  massage:"ÐŸÐ¾Ð»Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ ÑÐ¾ÑÑ‚Ð¾ÑÑ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¸Ð· Ñ†Ð¸Ñ„Ñ€"
                },
              },
            messages: {
                phone: {
                    required: "Ð—Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ð¾ Ð’Ð°Ñˆ Ð½Ð¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°",
                    minlength:"ÐÐ¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð° Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð±Ñ‹Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ 7Ð¼Ð¸ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²"
                },
                name: {
                    required: "Ð—Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ð¾ Ð’Ð°ÑˆÐµ Ð¸Ð¼Ñ",
                }
            }
             });
            }); // end document.ready


function initMap() {
  var customMapType = new google.maps.StyledMapType([
      {
      featureType: 'all',
      stylers: [
        { saturation: -80 }
      ]
    },{
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { hue: '#00ffee' },
        { saturation: 50 }
      ]
    },{
        featureType: 'water',
        stylers: [{color: '#cccccc'}]
      },{
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';
    

    
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    scrollwheel: false,
    center: {lat: 59.9414902, lng: 30.3664362},  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });
 
    


    
var image = new google.maps.MarkerImage( 'pin.png', // Ð¸ÐºÐ¾Ð½ÐºÐ°
new google.maps.Size(84,86), // Ñ€Ð°Ð·Ð¼ÐµÑ€Ñ‹ Ð¸ÐºÐ¾Ð½Ð¾Ðº
new google.maps.Point(-10,-14),
new google.maps.Point(52,46)
);
 
var companyPos = new google.maps.LatLng(59.887162, 30.258839);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
optimized:false,
icon: image,
title:"Some title1"
});
    
var companyPos1 = new google.maps.LatLng(59.982476, 30.240202);
var companyMarker1 = new google.maps.Marker({
position: companyPos1,
map: map,
optimized:false,
icon: image,
title:"Some title",
});
    

$("body").on("mouseover", 'img[src="pin.png"]', function(e){

  var left = $(e.target).parent().css("left");
  var top = $(e.target).parent().css("top");

  $('img[src="pin.png"]').filter(function(){
    return e.target != this && $(this).parent().css("left") == left && $(this).parent().css("top") == top;
   }).css("-webkit-transform", "scale(1.5)");
});


$("body").on("mouseout", 'img[src="pin.png"]', function(e){
  var left = $(e.target).parent().css("left");
  var top = $(e.target).parent().css("top");

  $('img[src="pin.png"]').filter(function(){
    return e.target != this && $(this).parent().css("left") == left && $(this).parent().css("top") == top;
   }).css("-webkit-transform", "scale(1)");
});
    
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
    
    google.maps.event.addListener(companyMarker, 'click', function() {
        $('#conts').removeClass('summary1');
        $('#conts1').removeClass('summary');
        $('#conts').addClass('summary');
        $('#conts1').addClass('summary1');
    });
    
    google.maps.event.addListener(companyMarker1, 'click', function() {
        $('#conts1').removeClass('summary1');
        $('#conts').removeClass('summary');
        $('#conts').addClass('summary1');
        $('#conts1').addClass('summary');
    });

}

$('#aniimated-thumbnials').lightGallery({
    thumbnail:true
}); 
        
$('.owl-carousel').owlCarousel({
    loop:true,
    loop:$(".owl-carousel > .item").length <= 1 ? false : true,
    margin:10,
    autoplay:true,
    stopOnHover: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    responsiveClass:true,
    pagination:true,
    rewindNav : true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }            
})

$('.owl-carousel').on('mouseover', function (e){
    $('.owl-carousel').trigger('stop.autoplay.owl');
    
});

$('.owl-carousel').on('mouseleave', function (e){
     $('.owl-carousel').trigger('play.autoplay.owl');
});

$('.right').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.left').click(function() {
    owl.trigger('prev.owl.carousel');
})

        
$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    responsiveClass:true,
    pagination:true,
    rewindNav : true,
    stopOnHover: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
            
})
$('.owl-carousel2').on('mouseover', function (e){
    $('.owl-carousel').trigger('stop.autoplay.owl');
    
});

$('.owl-carousel2').on('mouseleave', function (e){
     $('.owl-carousel').trigger('play.autoplay.owl');
});

$('.right').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.left').click(function() {
    owl.trigger('prev.owl.carousel');
})

