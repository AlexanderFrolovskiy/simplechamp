export function loadBasket() {
    let basket = [];
    const basketRaw = localStorage.getItem('basket');
    if (basketRaw) {
        basket = JSON.parse(basketRaw);
    };

    return basket;
};

export function saveBasket(arr) {
    localStorage.setItem('basket', JSON.stringify(arr));
};
