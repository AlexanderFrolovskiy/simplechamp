import { products } from '../products.js';
import { loadBasket, saveBasket } from '../market/market-api.js';

export function createOrder(data) {
    const errors = [];

    if (!data.email) {
        errors.push({
            name: 'email',
            message: 'E-mail обязателен для заполнения'
        });
    } else if (!data.email.includes('@') || !data.email.includes('.')) {
        errors.push({
            name: 'email',
            message: 'E-mail имеет неверный формат'
        })
    }  // не отрабатывает второе условие

    if (!data.name.trim()) {
        errors.push({
            name: 'name',
            message: 'Имя обязательно для заполнения'
        })
    }

    if (!data.surname.trim()) {
        errors.push({
            name: 'surname',
            message: 'Фамилия обязательна для заполнения'
        })
    }

    if (!data.tel) {
        errors.push({
            name: 'tel',
            message: 'Телефон обязателен для заполнения'
        })
    }
        

    if (!data.address.trim()) {
        errors.push({
            name: 'address',
            message: 'Адрес обязателен для заполнения'
        })
    }

    if (errors.length) {
        const err = new TypeError();
        err.errorMessages = errors;
        throw err;
    }

    const basket = loadBasket();
    
    $.post( '/send-order.php', {
        basket_products: JSON.stringify(basket),
        basket_surname: $("input[name='surname']").val(),
        basket_name: $("input[name='name']").val(),
        basket_email: $("input[name='email']").val(),
        basket_tel: $("input[name='tel']").val(),
        basket_address: $("input[name='address']").val()
    }).done(function() {
        window.location.replace("http://simplechamp.ru/accepted.html");
        saveBasket([]);
    });
    
}

