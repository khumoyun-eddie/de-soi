// beverage Carousel
function beverageCarouselControl() {
    const beverageCarousel = document.querySelector('.beverages__carousel');
    const options = {
      cellAlign: 'center',
      groupCells: 1,
      contain: true,
      prevNextButtons: false,
      draggable:false,
      pageDots:false
    };
    new Flickity(beverageCarousel, options);
  
    window.addEventListener('resize', function () {
      screen.width > 375 ? (options.groupCells = 2) : (options.groupCells = 1);
      new Flickity(beverageCarousel, options);
    });
  }
  (()=>{
    beverageCarouselControl()
  })()