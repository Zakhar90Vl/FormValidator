const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Отображение ошибки
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Валидация email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Отображение верного заполнения поля
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Проверка длинны значений, введенных в поле
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `Длина ${input.id} должна быть больше ${min}`);
    } else if (input.value.length > max) {
        showError(input, `Длина ${input.id} не должна превышать ${max}`);
    } else {
        showSuccess(input);
    }
}

//Проверка правильности подтверждения пароля
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Пароли не совпадают")
    } else {
        showSuccess(input2);
    }
}

//Нажатие кнопки зарегестрироваться
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === "") {
        showError(username, "Введите имя пользователя");
    } else {
        checkLength(username, 4, 15);
    }

    if (email.value === "") {
        showError(email, "Введите email");
    } else if (!isValidEmail(email.value)) {
        showError(email, "Не верный формат email");
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Введите пароль");
    } else {
        checkLength(password, 8, 25);
    }

    if (password2.value === "") {
        showError(password2, "Введите пароль");
    } else {
        checkPasswordsMatch(password, password2);
    }
});
