window.addEventListener('DOMContentLoaded', function() {

    const knife = [
        {name:'Ножи для метания СМН+ с чехлом',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, материал -',
        price: 6000,
        img: [
            '/img/products/knife/knife_smn_plus_with_case_001.png',
            '/img/products/knife/knife_smn_plus_with_case_002.png',
            '/img/products/knife/knife_smn_plus_with_case_003.png'
        ]},
        {name:'Ножи для метания СМН с чехлом',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, материал -',
        price: 6000,
        img: [
            '/img/products/knife/knife_smn_plus_with_case_001.png',
            '/img/products/knife/knife_smn_plus_with_case_002.png',
            '/img/products/knife/knife_smn_plus_with_case_003.png'
        ]},
        {name:'Ножи для метания СМН+ без чехла',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, материал -',
        price: 5600,
        img: [
            '/img/products/knife/knife_smn_plus_with_case_001.png',
            '/img/products/knife/knife_smn_plus_with_case_002.png',
            '/img/products/knife/knife_smn_plus_with_case_003.png'
        ]},
        {name:'Ножи для метания СМН без чехла',
        descr: 'Сертифицированные ножи ОФСОО "СМН", в комплекте 3 ножа, материал -',
        price: 5600,
        img: [
            '/img/products/knife/knife_smn_plus_with_case_001.png',
            '/img/products/knife/knife_smn_plus_with_case_002.png',
            '/img/products/knife/knife_smn_plus_with_case_003.png'
        ]}
    ]

    const knifeWrapper = document.querySelector('.products__knife');

    for (let i=0; i<knife.length; i++) {

        function loadProducts() {
            const card = document.createElement('article'),
            img = document.createElement('img'),
            content = document.createElement('div'),
            title = document.createElement('h3'),
            descr = document.createElement('p'),
            priceWrapper = document.createElement('div'),
            priceText = document.createElement('p'),
            priceCount = document.createElement('p'),
            button = document.createElement('button');
            
            card.classList.add('products__card');
            content.classList.add('products__card-content');
            title.classList.add('products__card-title');
            descr.classList.add('products__card-descr');
            priceWrapper.classList.add('products__card-price');
            priceText.classList.add('products__card-price__descr');
            priceText.innerHTML = 'цена:';
            priceCount.classList.add('products__card-price__count');
            button.classList.add('products__card-btn');
            button.innerHTML = 'в корзину';
    
            img.setAttribute('src', knife[i].img[1]);
            img.setAttribute('alt', knife[i].name);
            title.innerHTML = knife[i].name;
            descr.innerHTML = knife[i].descr;
            priceCount.innerHTML = knife[i].price + ' руб';

    
            knifeWrapper.append(card);
            card.append(img);
            card.append(content);
            content.append(title);
            content.append(descr);
            content.append(priceWrapper);
            priceWrapper.append(priceText);
            priceWrapper.append(priceCount);
            content.append(button);    

            console.log('create card')
        }

        loadProducts();


        console.log('arrow')
    }


    
})