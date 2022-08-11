// Product Carousel
function productCarouselControl() {
  const productCarousel = document.querySelector('.products__carousel');
  const productFlkty = new Flickity(productCarousel, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    //   groupCells: 3,
    prevNextButtons: false,
  });
  const productsListPrevBtn = document.querySelector('.prev-btn');
  const productsListNextBtn = document.querySelector('.next-btn');

  productsListPrevBtn.addEventListener('click', () => {
    productFlkty.previous();
  });
  productsListNextBtn.addEventListener('click', () => {
    productFlkty.next();
  });
}
// About Carousel
function aboutCarouselControl() {
  const aboutCarousel = document.querySelector('.about__carousel');
  const options = {
    cellAlign: 'center',
    groupCells: 3,
    contain: true,
    prevNextButtons: false,
  };
  new Flickity(aboutCarousel, options);

  window.addEventListener('resize', function () {
    if (screen.width >= 900) options.groupCells = 3;
    if (screen.width >= 600) options.groupCells = 2;
    if (screen.width < 600) options.groupCells = 1;

    new Flickity(aboutCarousel, options);
  });
  // const productsListPrevBtn = document.querySelector('.prev-btn');
  // const productsListNextBtn = document.querySelector('.next-btn');

  // productsListPrevBtn.addEventListener('click', () => {
  //   productFlkty.previous();
  // });
  // productsListNextBtn.addEventListener('click', () => {
  //   productFlkty.next();
  // });
}

(() => {
  productCarouselControl();
  aboutCarouselControl();
})();
