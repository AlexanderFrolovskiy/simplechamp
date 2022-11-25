window.addEventListener('DOMContentLoaded', function() {

    const products = [
        {id: 1001,
        name:'Ножи для метания СМН+ с&nbspчехлом',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, изготовлены из высоколегированного коррозионностойкого сплава, относящегося к мартенситному классу',
        price: 6000,
        img: [
            '/img/products/knifes/knife_smn_plus_001.png',
            '/img/products/knifes/knife_smn_plus_002.png',
            '/img/products/knifes/knife_smn_plus_with_case_003.png'
        ]},
        {id: 1002,
        name:'Ножи для метания СМН с&nbspчехлом',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, изготовлены из высоколегированного коррозионностойкого сплава, относящегося к мартенситному классу',
        price: 6000,
        img: [
            '/img/products/knifes/knife_smn_001.png',
            '/img/products/knifes/knife_smn_002.png',
            '/img/products/knifes/knife_smn_with_case_003.png'
        ]},
        {id: 1003,
        name:'Ножи для метания СМН+ без&nbspчехла',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, изготовлены из высоколегированного коррозионностойкого сплава, относящегося к мартенситному классу',
        price: 5600,
        img: [
            '/img/products/knifes/knife_smn_plus_001.png',
            '/img/products/knifes/knife_smn_plus_002.png'
        ]},
        {id: 1004,
        name:'Ножи для метания СМН без&nbspчехла',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, изготовлены из высоколегированного коррозионностойкого сплава, относящегося к мартенситному классу',
        price: 5600,
        img: [
            '/img/products/knifes/knife_smn_001.png',
            '/img/products/knifes/knife_smn_002.png'
        ]},
        {id: 2001,
        name:'Чехол &laquo;ЧЕРНЫЙ&raquo; на 3 ножа',
        descr: 'Усиленные швы, с петлей для ремня, материал - ткань Оксфорд 600 D, максимальная вместимость до 4 ножей',
        price: 600,
        img: [
            '/img/products/bags/case_black_001.png',
            '/img/products/bags/case_black_002.png'
        ]},
        {id: 2002,
        name:'Чехол &laquo;АТАКС&raquo; на 3 ножа',
        descr: 'Усиленные швы, с петлей для ремня, материал - ткань Оксфорд 600 D, максимальная вместимость до 4 ножей',
        price: 600,
        img: [
            '/img/products/bags/case_ataks_001.png',
            '/img/products/bags/case_ataks_002.png'
        ]},
        {id: 2003,
        name:'Чехол &laquo;ЦИФРА РФ&raquo; на 3 ножа',
        descr: 'Усиленные швы, с петлей для ремня, материал - ткань Оксфорд 600 D, максимальная вместимость до 4 ножей',
        price: 600,
        img: [
            '/img/products/bags/case_cifra_001.png',
            '/img/products/bags/case_cifra_002.png'
        ]},
        {id: 2004,
        name:'Чехол &laquo;МУЛЬТИКАМ&raquo; на 3 ножа',
        descr: 'Усиленные швы, с петлей для ремня, материал - ткань Оксфорд 600 D, максимальная вместимость до 4 ножей',
        price: 600,
        img: [
            '/img/products/bags/case_multicam_001.png',
            '/img/products/bags/case_multicam_002.png'
        ]},
        {id: 2005,
        name:'Чехол &laquo;ОРАНЖ&raquo; на 3 ножа',
        descr: 'Усиленные швы, с петлей для ремня, материал - ткань Оксфорд 600 D, максимальная вместимость до 4 ножей',
        price: 600,
        img: [
            '/img/products/bags/case_orange_001.png',
            '/img/products/bags/case_orange_002.png'
        ]}

    ];

    function loadBasket() {
        let basket = [];
        const basketRaw = localStorage.getItem('basket');
        if (basketRaw) {
            basket = JSON.parse(basketRaw);
        };

        return basket;
    };

    function saveBasket(arr) {
        localStorage.setItem('basket', JSON.stringify(arr));
    };

    const knifeWrapper = document.querySelector('.products__knife');
    const bagsWrapper = document.querySelector('.products__bags');

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

        swiper.classList.add('swiper');
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

        if (basket.indexOf(product.id) >= 0) {
            button.classList.add('products__card-btn--active');
            button.innerHTML = 'в корзине';
        }

        title.innerHTML = product.name;
        descr.innerHTML = product.descr;
        priceCount.innerHTML = product.price + ' руб';

        let categorySymbol = String(product.id)[0];

        if (categorySymbol == '1') {
            knifeWrapper.append(cardWrapper);
        } else if (categorySymbol == '2') {
            bagsWrapper.append(cardWrapper);
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
                    basket.push(Number(productId));
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
});