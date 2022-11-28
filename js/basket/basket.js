import { products } from '../products.js';
// import { loadBasket, saveBasket } from '../market/market-api.js'; 

import { loadBasket } from '../market/market-api.js'; 

const basket = loadBasket();

console.log(basket);

const basketNull = document.querySelector('.basket__null');
const basketTable = document.querySelector('.basket__table');
const basketTableRow = document.querySelector('.basket__tbody');

let basketSum = document.querySelector('.basket__tfoot-sum');
basketSum.innerHTML = 0;

if (basket.length == 0) {
    basketTable.style.display = 'none';
    basketNull.innerHTML = 'ваша корзина пуста, перейдите в <a href="market.html">каталог</a> для выбора товаров';
} else if (basket.length > 0) {
    for (let i = 0; i < basket.length; i++) {
        let n = i + 1;
        tableRow(basket[i], products, n);
    };
};

function tableRow(basket, products, n) {
    const tr = document.createElement('tr'),
    tdNumber = document.createElement('td'),
    tdName = document.createElement('td'),
    tdNameImg = document.createElement('img'),
    tdNameText = document.createElement('span'),
    tdCount = document.createElement('td'),
    tdCountWrap = document.createElement('div'),
    tdCountMinus = document.createElement('button'),
    tdCountValue = document.createElement('input'),
    tdCountPlus = document.createElement('button'),
    tdPrice = document.createElement('td'),
    tdTotal = document.createElement('td');

    let product = products.find(item => item.id == basket);
    
    tdNumber.innerHTML = n;
    tdNumber.setAttribute('data-label', '№');
    tdName.classList.add('basket__tbody-name');
    tdName.setAttribute('data-label', 'Товар');
    tdNameImg.classList.add('basket__tbody-name__img')
    tdNameImg.setAttribute('src', product.img[0]);
    tdNameText.innerHTML = product.name;
    tdCount.setAttribute('data-label', 'Кол-во');
    tdCountWrap.classList.add('basket__tbody-count');
    tdCountMinus.classList.add('basket__tbody-count__minus');
    tdCountValue.classList.add('basket__tbody-count__value');
    tdCountValue.setAttribute('type', 'number');
    tdCountValue.setAttribute('autocomplete', 'off');
    tdCountValue.setAttribute('maxlength', '2');
    tdCountValue.setAttribute('min', '1');
    tdCountValue.value = 1;
    tdCountPlus.classList.add('basket__tbody-count__plus');
    tdPrice.innerHTML = product.price + ' \u20bd';
    tdPrice.setAttribute('data-label', 'Цена за единицу');
    tdTotal.innerHTML = tdCountValue.value * product.price;
    tdTotal.setAttribute('data-label', 'Общая стоимость');

    basketTableRow.append(tr);
    tr.append(tdNumber);
    tr.append(tdName);
    tdName.append(tdNameImg);
    tdName.append(tdNameText);
    tr.append(tdCount);
    tdCount.append(tdCountWrap);
    tdCountWrap.append(tdCountMinus);
    tdCountWrap.append(tdCountValue);
    tdCountWrap.append(tdCountPlus);
    tr.append(tdPrice);
    tr.append(tdTotal);

    basketSum.innerHTML = Number(basketSum.innerHTML)+Number(tdTotal.innerHTML);
}


// footer copyrigth
const copyright = document.querySelector('.footer__copyright');

const yearNow = new Date().getFullYear();

copyright.innerHTML = '&#169; Все права защищены 2019-' + yearNow;