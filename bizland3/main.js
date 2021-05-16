$(document).ready(function() {
    AOS.init();  
  });



$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        nav : true, // Show next and prev buttons
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoplay: true,
        loop: true,
    });

   
  });