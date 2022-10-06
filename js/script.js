window.addEventListener('DOMContentLoaded', function() {
  const slideEvent = document.querySelectorAll('.events__item'),
    contentEvent = document.querySelectorAll('.events-content'),
    closedContent = document.querySelectorAll('.events-content__close');

  for (let i = 0; i < slideEvent.length; i++) {
    slideEvent[i].addEventListener('click', function(e) {
      const dataSlide = e.currentTarget.attributes['data-slide'].value;
      console.log(dataSlide);

      for (let i = 0; i < contentEvent.length; i++) {
        let dataContent = contentEvent[i].attributes['data-content'].value;
        
        if (dataSlide == dataContent) {
          contentEvent[i].classList.add('is-active');
        };
      };
    });
  };

  for (let i = 0; i < closedContent.length; i++) {
    closedContent[i].addEventListener('click', function(e) {
      const dataContent = e.currentTarget.closest('[data-content]:not(article)');
      dataContent.classList.remove('is-active');
    })
  }
  

  // footer copyrigth
  const copyright = document.querySelector('.footer__copyright');

  const yearNow = new Date();

  copyright.innerHTML = '&#169; Все права защищены 2019-' + yearNow.getFullYear();

  })

  // popup burger menu
  const popupBurger = document.querySelector('.popup-burger'),
    bntBurger = document.querySelector('.header__burger'),
    btnBurgerClosed = document.querySelector('.popup-burger__closed'),
    body = document.querySelector('.body');
  
  bntBurger.addEventListener('click', function() {
    popupBurger.classList.add('popup-burger--active');
    body.style.overflow = 'hidden';
  });

  btnBurgerClosed.addEventListener('click', function() {
    popupBurger.classList.remove('popup-burger--active');
    body.style.overflow = 'auto';
  })