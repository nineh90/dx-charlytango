
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        $('.image-silder').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 2500,
            fade: true,
            cssEase: 'linear',
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
          });
    }
  }
