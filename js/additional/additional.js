window.addEventListener('DOMContentLoaded', function(){

    /* UP button */
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
    
    // footer copyrigth
    const copyright = document.querySelector('.footer__copyright');
    
    const yearNow = new Date().getFullYear();
    
    copyright.innerHTML = '&#169; Все права защищены 2019-' + yearNow;
});