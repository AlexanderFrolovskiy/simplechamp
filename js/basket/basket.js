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
    tdPrice = document.createElement('td'),
    tdTotal = document.createElement('td');

    let product = products.find(item => item.id == basket);
    
    tdNumber.innerHTML = n;
    tdName.classList.add('basket__tbody-name');
    tdNameImg.classList.add('basket__tbody-name__img')
    tdNameImg.setAttribute('src', product.img[0]);
    tdNameText.innerHTML = product.name;
    tdCount.innerHTML = 1;
    tdPrice.innerHTML = product.price;
    tdTotal.innerHTML = tdCount.innerHTML * product.price;

    basketTableRow.append(tr);
    tr.append(tdNumber);
    tr.append(tdName);
    tdName.append(tdNameImg);
    tdName.append(tdNameText);
    tr.append(tdCount);
    tr.append(tdPrice);
    tr.append(tdTotal);

    basketSum.innerHTML = Number(basketSum.innerHTML)+Number(tdTotal.innerHTML);
}


// footer copyrigth
const copyright = document.querySelector('.footer__copyright');

const yearNow = new Date().getFullYear();

copyright.innerHTML = '&#169; Все права защищены 2019-' + yearNow;