import { products } from '../products.js';
import { loadBasket, saveBasket } from './market-api.js'; 

const knifeWrapper = document.querySelector('.products__knife'),
bagsWrapper = document.querySelector('.products__bags'),
accessoryWrapper = document.querySelector('.products__accessory');

function loadProduct(product, basket) {
    const cardWrapper = document.createElement('article'),
    card = document.createElement('div'),
    content = document.createElement('div'),
    title = document.createElement('h3'),
    descr = document.createElement('p'),
    priceWrapper = document.createElement('div'),
    priceText = document.createElement('p'),
    priceCount = document.createElement('p'),
    button = document.createElement('button');

    const swiper = document.createElement('div'),
    swiperWrapper = document.createElement('div'),
    swiperButtonPrev = document.createElement('div'),
    swiperButtonNext = document.createElement('div');

    swiper.classList.add('swiper', 'products__swiper');
    swiper.setAttribute('id', 'swiper-' + product.id);
    swiperWrapper.classList.add('swiper-wrapper');
    swiperButtonPrev.classList.add('swiper-button-prev');
    swiperButtonPrev.setAttribute('id', 'swiper-button-prev-' + product.id);
    swiperButtonNext.classList.add('swiper-button-next');
    swiperButtonNext.setAttribute('id', 'swiper-button-next-' + product.id);
    
    cardWrapper.classList.add('products__wrapper');
    card.classList.add('products__card');
    card.setAttribute('data-product', product.id);
    content.classList.add('products__card-content');
    title.classList.add('products__card-title');
    descr.classList.add('products__card-descr');
    priceWrapper.classList.add('products__card-price');
    priceText.classList.add('products__card-price__descr');
    priceText.innerHTML = 'цена:';
    priceCount.classList.add('products__card-price__count');

    button.classList.add('products__card-btn');
    button.setAttribute('data-product-btn', product.id);
    button.innerHTML = 'в корзину';

    console.log(basket)
    for (let i = 0; i <= basket.length; i++) {
        console.log(basket[i].id)
        if (basket[i].id == product.id) {
                button.classList.add('products__card-btn--active');
                button.innerHTML = 'в корзине';
        }
    }

    title.innerHTML = product.name;
    descr.innerHTML = product.descr;
    priceCount.innerHTML = product.price + ' руб';

    let categorySymbol = String(product.id)[0];

    if (categorySymbol == '1') {
        knifeWrapper.append(cardWrapper);
    } else if (categorySymbol == '2') {
        bagsWrapper.append(cardWrapper);
    } else if (categorySymbol == '3') {
        accessoryWrapper.append(cardWrapper);
    };
    
    cardWrapper.append(card);
    card.append(swiper);
    swiper.append(swiperWrapper);
    
    for (let p=0; p<product.img.length; p++) {
        const swiperSlide = document.createElement('div'),
        img = document.createElement('img');

        swiperSlide.classList.add('swiper-slide');

        img.setAttribute('src', product.img[p]);
        img.setAttribute('alt', product.name);

        swiperWrapper.append(swiperSlide);
        swiperSlide.append(img);
    };

    swiper.append(swiperButtonPrev);
    swiper.append(swiperButtonNext);
    card.append(content);
    content.append(title);
    content.append(descr);
    content.append(priceWrapper);
    priceWrapper.append(priceText);
    priceWrapper.append(priceCount);
    content.append(button);


    new Swiper('#swiper-' + product.id, {
        speed: 400,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '#swiper-button-next-' + product.id,
            prevEl: '#swiper-button-prev-' + product.id,
        }
    });
};

const basket = loadBasket();

for (let i=0; i<products.length; i++) {
    loadProduct(products[i], basket);
};

const buttonCard = document.querySelectorAll('.products__card-btn');    

function drawCounter(basket) {
    const basketIcon = document.querySelector('.header__link-basket--circle');

    let n = basket.length;
    basketIcon.innerHTML = n;

    if (n > 0) {
        basketIcon.classList.add('header__link-basket--active');
    } else {
        basketIcon.classList.remove('header__link-basket--active');
    };
};

drawCounter(basket);

for (let i=0; i<buttonCard.length; i++) {
    buttonCard[i].addEventListener('click', function(e) {

        const productId = e.currentTarget.attributes['data-product-btn'].value;
        
        if (buttonCard[i].classList.contains('products__card-btn--active')) {
            buttonCard[i].classList.remove('products__card-btn--active');
            buttonCard[i].innerHTML = 'в корзину';                

            const idx = basket.indexOf(Number(productId));
            console.log(basket)
            // const basketItem = basket.item.id;
            if (idx >= 0) {
                basket.splice(idx, 1);
            };
            
            saveBasket(basket);

            drawCounter(basket);
        } else {
            buttonCard[i].classList.add('products__card-btn--active');
            buttonCard[i].innerHTML = 'в корзине';

            const idx = basket.indexOf(Number(productId));
            if (idx < 0) {
                const item = {
                    id: Number(productId),
                    count: 1
                }
                basket.push(item);
            }                

            saveBasket(basket);                      
                
            drawCounter(basket);
        };            
    });   
    
};   


// footer copyrigth
const copyright = document.querySelector('.footer__copyright');

const yearNow = new Date().getFullYear();

copyright.innerHTML = '&#169; Все права защищены 2019-' + yearNow;

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
});

popupBurger.addEventListener('click', function(e) {
    if (e.target.matches('.popup-burger__link')) {
        popupBurger.classList.remove('popup-burger--active');
        body.style.overflow = 'auto';
    }
});

/* up button */
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        }
    }
    }
    
    btnUp.addEventListener();
