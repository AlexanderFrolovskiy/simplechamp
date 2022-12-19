import { products } from '../products.js';
import { loadBasket, saveBasket } from '../market/market-api.js';
import { createOrder } from './basket-api.js';

const basket = loadBasket();

const basketNull = document.querySelector('.basket__null'),
    basketTable = document.querySelector('.basket__table'),
    basketForm = document.querySelector('.basket__form'),
    basketTableRow = document.querySelector('.basket__tbody');

let basketSum = document.querySelector('.basket__tfoot-sum');
basketSum.innerHTML = 0;

function renderPage() {
    if (basket.length == 0) {
        basketTable.style.display = 'none';
        basketForm.style.display = 'none';
        basketNull.innerHTML = 'ваша корзина пуста, перейдите в <a href="market.html">каталог</a> для выбора товаров';
    } else if (basket.length > 0) {
        for (let i = 0; i < basket.length; i++) {
            let n = i + 1;
            tableRow(basket[i], products, n);
        }
    }
}

renderPage();


function tableRow(basket, products, n) {
    const tr = document.createElement('tr'),
    tdNumber = document.createElement('td'),
    tdName = document.createElement('td'),
    tdNameImg = document.createElement('img'),
    tdNameText = document.createElement('span'),
    tdCount = document.createElement('td'),
    tdCountWrap = document.createElement('div'),
    tdCountContent = document.createElement('div'),
    tdCountMinus = document.createElement('button'),
    tdCountValue = document.createElement('input'),
    tdCountPlus = document.createElement('button'),
    tdRemove = document.createElement('button'),
    tdPrice = document.createElement('td'),
    tdTotal = document.createElement('td');

    let product = products.find(item => item.id == basket.id);
    
    tr.classList.add('basket__tbody-tr');
    tdNumber.innerHTML = n;
    tdNumber.setAttribute('data-label', '№');
    tdName.classList.add('basket__tbody-name');
    tdName.setAttribute('data-label', 'Товар');
    tdNameImg.classList.add('basket__tbody-name__img')
    tdNameImg.setAttribute('src', product.img[0]);
    tdNameText.innerHTML = product.name;
    tdCount.setAttribute('data-label', 'Кол-во');
    tdCount.setAttribute('data-product', basket.id);
    tdCountWrap.classList.add('basket__tbody-count');
    tdCountContent.classList.add('basket__tbody-count__wrap');
    tdCountMinus.classList.add('basket__tbody-count__minus');
    tdCountMinus.addEventListener('click', countMinus);
    tdCountValue.classList.add('basket__tbody-count__value');
    tdCountValue.setAttribute('type', 'number');
    tdCountValue.setAttribute('autocomplete', 'off');
    tdCountValue.value = basket.count;

    if (basket.count == 1) {
        tdCountMinus.disabled = true;
    }

    tdCountPlus.classList.add('basket__tbody-count__plus');
    tdCountPlus.addEventListener('click', countPlus);
    tdRemove.classList.add('basket__tbody-btn--remove');
    tdRemove.textContent = 'Удалить';
    tdRemove.addEventListener('click', productRemove);
    tdPrice.classList.add('basket__tbody-price');
    tdPrice.innerHTML = product.price;
    tdPrice.setAttribute('data-label', 'Цена за единицу');
    tdTotal.setAttribute('data-label', 'Общая стоимость');
    tdTotal.classList.add('basket__tbody-total');
    tdTotal.innerHTML = basket.count * product.price;

    basketTableRow.append(tr);
    tr.append(tdNumber);
    tr.append(tdName);
    tdName.append(tdNameImg);
    tdName.append(tdNameText);
    tr.append(tdCount);
    tdCount.append(tdCountWrap);
    tdCountWrap.append(tdCountContent);
    tdCountContent.append(tdCountMinus);
    tdCountContent.append(tdCountValue);
    tdCountContent.append(tdCountPlus);
    tdCountWrap.append(tdRemove);
    tr.append(tdPrice);
    tr.append(tdTotal);

    basketChangeSum();
}

function tableRowRemove() {
    const tableRow = document.querySelectorAll('.basket__tbody-tr');

    for (let i = 0; i < tableRow.length; i++) {
        tableRow[i].remove();
    }
}


/* change count product in table row */
function basketChangeSum() {
    basketSum.innerHTML = 0;
    for (let i = 0; i < basket.length; i++) {
        let product = products.find(item => item.id == basket[i].id);
        basketSum.innerHTML = Number(basketSum.innerHTML) + basket[i].count * product.price;
    }
}

function countPlus(e) {
    e.preventDefault();
    const parent = e.currentTarget.closest('[data-product]');
    const productId = parent.attributes['data-product'].value;
    let countProduct = document.querySelectorAll('.basket__tbody-count__value');
    let basketTotal = document.querySelectorAll('.basket__tbody-total');

    const idx = basket.findIndex(item => item.id === Number(productId));
    let product = products.find(item => item.id == basket[idx].id);

    basket[idx].count++;

    countProduct[idx].value = basket[idx].count;

    basketTotal[idx].innerHTML = basket[idx].count * product.price;

    basketChangeSum();

    saveBasket(basket);

    if (basket[idx].count > 1) {
        const minus = document.querySelectorAll('.basket__tbody-count__minus');
        minus[idx].disabled = false;
    }
}

function countMinus(e) {
    e.preventDefault();
    const parent = e.currentTarget.closest('[data-product]');
    const productId = parent.attributes['data-product'].value;
    let countProduct = document.querySelectorAll('.basket__tbody-count__value');
    let basketTotal = document.querySelectorAll('.basket__tbody-total');

    const idx = basket.findIndex(item => item.id === Number(productId));
    let product = products.find(item => item.id == basket[idx].id);

    if (basket[idx].count > 2) {
        basket[idx].count--;

        saveBasket(basket);

        countProduct[idx].value = basket[idx].count;
    
        basketTotal[idx].innerHTML = basket[idx].count * product.price;
    
        basketChangeSum();
    } else if (basket[idx].count == 2) {
        basket[idx].count--;

        saveBasket(basket);

        countProduct[idx].value = basket[idx].count;
    
        basketTotal[idx].innerHTML = basket[idx].count * product.price;
    
        basketChangeSum();

        this.disabled = true;
    }
    
    
}

function productRemove(e) {
    e.preventDefault();
    const parent = e.currentTarget.closest('[data-product]');
    const productId = parent.attributes['data-product'].value;

    const idx = basket.findIndex(item => item.id === Number(productId));

    if (idx >= 0) {
        basket.splice(idx, 1);
    }

    saveBasket(basket);

    tableRowRemove();

    renderPage();
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