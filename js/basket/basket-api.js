

export function createOrder(data) {
    const errors = [];

    if(!data.email) 
        errors.push({
            name: 'email',
            message: 'E-mail обязателен для заполнения'
        }); 
    else if (!data.email.includes('@') || !data.email.includes('.')) 
        errors.push({
            name: 'email',
            message: 'E-mail имеет неверный формат'
        })

    if (!data.name.trim())
        errors.push({
            name: 'name',
            message: 'Имя обязательно для заполнения'
        })

    if (!data.surname.trim())
        errors.push({
            name: 'surname',
            message: 'Фамилия обязательна для заполнения'
        })

    if (!data.tel)
        errors.push({
            name: 'tel',
            message: 'Телефон обязателен для заполнения'
    })

    if (!data.address.trim())
        errors.push({
            name: 'address',
            message: 'Адрес обязателен для заполнения'
        })

    if (errors.length) {
        const err = new TypeError();
        err.errorMessages = errors;
        throw err;
    }
}

