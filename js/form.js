var telefon = document.getElementById("tel");

var im = new Inputmask("+7(999)999-99-99");
im.mask(telefon);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = telefon.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    comment: {
      required: true,
    }
  },
  email: {
    required: false,
    email: true
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Слишком мало символов',
      maxLength: 'Слишком много символов'
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Введите телефон полностью'
    },
    email: 'Укажите ваш email',
    comment: 'Укажите причину обращения',
  },
});