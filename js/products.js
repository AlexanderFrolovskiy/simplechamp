window.addEventListener('DOMContentLoaded', function() {

    const knife = [
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
        ]}
    ]

    const bags = [
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

    ]

    const knifeWrapper = document.querySelector('.products__knife');
    const bagsWrapper = document.querySelector('.products__bags');
    

    for (let i=0; i<knife.length; i++) { 
        loadProduct(knife[i], knifeWrapper); 
    };   

    for (let i=0; i<bags.length; i++) { 
        loadProduct(bags[i], bagsWrapper); 
    };   
    
    

    function loadProduct(product, wrapper) {
        const card = document.createElement('article'),
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
        button.innerHTML = 'в корзину';

        
        title.innerHTML = product.name;
        descr.innerHTML = product.descr;
        priceCount.innerHTML = product.price + ' руб';

        wrapper.append(card);
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

    const basket = [];

    const productsBtn = document.querySelectorAll('.products__card-btn');

    for (let i=0; i<productsBtn.length; i++) {
        productsBtn[i].addEventListener('click', function(e){
            // const productId = e.currentTarget.attributes['data-product'].value;
            // console.log(productId)
            productsBtn[i].classList.add('products__card-btn--active');
            productsBtn[i].innerHTML = 'в корзине';
            console.log('click')
        })
    }
    




    // footer copyrigth
    const copyright = document.querySelector('.footer__copyright');

    const yearNow = new Date().getFullYear();

    copyright.innerHTML = '&#169; Все права защищены 2019-' + yearNow;
});