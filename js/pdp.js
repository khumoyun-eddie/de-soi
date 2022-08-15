// Product Carousel
const productCarouselControl = () => {
  const productCarousel = document.querySelector('.recomendation__carousel');
  const productFlkty = new Flickity(productCarousel, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    // groupCells: 3,
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
};

const accordion = () => {
  const accordionControl = document.getElementsByClassName('faq__title');
  let i;

  for (i = 0; i < accordionControl.length; i++) {
    accordionControl[i].addEventListener('click', function () {
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.parentElement.style.paddingBottom = '0';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        this.style.marginBottom = '1.7rem';
        this.parentElement.style.paddingBottom = '1.6rem';
      }
    });
  }
};
const detailsAccordion = () => {
  const accordionControl = document.getElementsByClassName('details__acordion-header');
  let i;

  for (i = 0; i < accordionControl.length; i++) {
    accordionControl[i].addEventListener('click', function () {
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.parentElement.style.paddingBottom = '0';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        this.style.marginBottom = '1.7rem';
        this.parentElement.style.paddingBottom = '1.6rem';
      }
    });
  }
};
const recipeCarouselControl = () => {
  const productCarousel = document.querySelector('.recipe__carousel');
  const productFlkty = new Flickity(productCarousel, {
    cellAlign: 'left',
    // contain: true,
    pageDots: false,
    draggable: false,
    prevNextButtons: false,
  });
  const productsListPrevBtn = document.querySelector('.prev');
  const productsListNextBtn = document.querySelector('.next');
  
  window.addEventListener('resize',()=>{
    screen.width <= 375 ? productFlkty.options.draggable=true : productFlkty.options.draggable=false
  })
  console.log(productFlkty)

  productsListPrevBtn.addEventListener('click', () => {
    productFlkty.previous();
    productsListPrevBtn.setAttribute('disabled', true);
    productsListPrevBtn.getAttribute('disabled')
      ? (productsListPrevBtn.style.display = 'none')
      : (productsListNextBtn.style.display = 'block');
    productsListNextBtn.removeAttribute('disabled');
    productsListNextBtn.style.display = 'block';

  });
  productsListNextBtn.addEventListener('click', () => {
    productFlkty.next();
    productsListNextBtn.setAttribute('disabled', true);
    productsListNextBtn.getAttribute('disabled')
      ? (productsListNextBtn.style.display = 'none')
      : (productsListPrevBtn.style.display = 'block');
    productsListPrevBtn.removeAttribute('disabled');
    // productsListPrevBtn.getAttribute('disabled');
    productsListPrevBtn.style.display = 'block';
  });
};

productCarouselControl();
accordion();
recipeCarouselControl();
detailsAccordion()
