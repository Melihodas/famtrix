 $('.slider-principal').slick({
  centerMode: false,
  centerPadding: '5px',
  slidesToShow: 3, 
  autoplay: true,
  autoplaySpeed:6000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    }
  ]
}); 

/*$('.slider-principal').slick({
  dots: true,
  infinite: true,
  speed:300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 9000

});*/
