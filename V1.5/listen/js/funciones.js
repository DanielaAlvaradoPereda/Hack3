

function carga_pagina(){
  if (screen.width<=768){
    // Slider Movil
    $(".inicio").nerveSlider({
      sliderWidth: "100%",
      sliderHeight: "20vh",
      sliderResizable: true,
      slideTransition: "fade",
      showTimer: false,
      showPause: false,
      showArrows: false
    });

  }else if(screen.width<=1280){
    $(".inicio").nerveSlider({
      sliderWidth: "100%",
      sliderHeight: "32vh",
      sliderResizable: true,
      slideTransition: "fade",
      showTimer: false,
      showPause: false,
      showArrows: false
    });
  }else{
  	$(".slider__contenedor").nerveSlider({
	  	sliderWidth: "90vw",
	   	sliderHeight: "90vh",
	    sliderResizable: true,
		slideTransition: "fade",
	    showTimer: true,
	    showPause: true,
	    showArrows: true
	});
  }