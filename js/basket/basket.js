import { products } from '../products.js';
// import { loadBasket, saveBasket } from '../market/market-api.js'; 

import { loadBasket } from '../market/market-api.js'; 
import { createOrder } from './basket-api.js';

const basket = loadBasket();

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
    tdRemove = document.createElement('button'),
    tdPrice = document.createElement('td'),
    tdTotal = document.createElement('td');

    let product = products.find(item => item.id == basket.id);
    
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
    tdCountValue.value = basket.count;
    tdCountPlus.classList.add('basket__tbody-count__plus');
    tdRemove.classList.add('basket__tbody-btn--remove');
    tdRemove.textContent = 'Удалить';
    tdPrice.innerHTML = product.price;
    tdPrice.setAttribute('data-label', 'Цена за единицу');
    tdTotal.innerHTML = basket.count * product.price;
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
    tdCount.append(tdRemove);
    tr.append(tdPrice);
    tr.append(tdTotal);

    basketSum.innerHTML = Number(basketSum.innerHTML) + Number(tdTotal.innerHTML);
}

/* change count product in table row */
const countProduct = document.querySelectorAll('.basket__tbody-count__value');
const countPlus = document.querySelectorAll('.basket__tbody-count__plus');
const countMinus = document.querySelectorAll('.basket__tbody-count__minus');

for (let i = 0; i < countProduct.length; i++) {
    if (countProduct[i].value <= 1) {
        countMinus[i].disabled = 'disabled';
    }
}

for (let i = 0; i < countPlus.length; i++) {
    countPlus[i].addEventListener('click', function(e) {
        e.preventDefault();
        const el = e.target; 
        const parent = el.closest('.basket__tbody-count');
        const childCount = parent.querySelector('.basket__tbody-count__value');
        childCount.value = Number(childCount.value) + 1;

        const childMinus = parent.querySelector('.basket__tbody-count__minus');
        childMinus.disabled = false;
    })
}

for (let i = 0; i < countMinus.length; i++) {
    countMinus[i].addEventListener('click', function(e) {
        e.preventDefault();
        const el = e.target; 
        const parent = el.closest('.basket__tbody-count');
        const child = parent.querySelector('.basket__tbody-count__value');
        child.value = Number(child.value) - 1;

        if (child.value <= 1) {
            const childMinus = parent.querySelector('.basket__tbody-count__minus');
            childMinus.disabled = 'disabled';
        }
    })
}


// send new order 
const form = document.getElementById('basket-form');
const formError = document.getElementById('basket__form-error');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {};
    const inputs = {};

    for (let i = 0; i < form.elements.length; i++) {
        const input = form.elements[i];

        if (!input.name) continue;
        data[input.name] = input.value;
        inputs[input.name] = input;
        input.classList.remove('is-invalid');
    }

    try {
        createOrder(data);
    } catch (err) {
        if (err.name !== 'TypeError') throw err;
        if (err.errorMessages) {
            for (const errorMessage of err.errorMessages) {
                inputs[errorMessage.name].classList.add('is-invalid');
            }
            formError.textContent = err.errorMessages
                .map(errorMessage => errorMessage.message)
                .join('. ')
        }
    }
    
});


// footer copyrigth
const copyright = document.querySelector('.footer__copyright');

const yearNow = new Date().getFullYear();

copyright.innerHTML = '&#169; Все права защищены 2019-' + yearNow;