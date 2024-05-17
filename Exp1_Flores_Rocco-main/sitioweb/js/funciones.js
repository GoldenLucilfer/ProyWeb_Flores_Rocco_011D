// Visibilidad de la contraseña
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.classList.toggle('bi-eye');
});

// Validacion de los formularios
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const nameuser = document.getElementById('nameuser').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    
    clearErrors();

    let hasError = false;

    if (name === '') {
        showError('error-name', '⚠️ El nombre es obligatorio.');
        hasError = true;
    }
    if (lastname === '') {
        showError('error-lastname', '⚠️ El apellido es obligatorio.');
        hasError = true;
    }
    if (nameuser === '') {
        showError('error-nameuser', '⚠️ El nombre de usuario es obligatorio.');
        hasError = true;
    }
    if (email === '') {
        showError('error-email', '⚠️ El correo electrónico es obligatorio.');
        hasError = true;
    } else if (!validateEmail(email)) {
        showError('error-email', '⚠️ El formato del correo electrónico no es válido.');
        hasError = true;
    }
    if (password === '') {
        showError('error-password', '⚠️ La contraseña es obligatoria.');
        hasError = true;
    } else if (password.length < 6) {
        showError('error-password', '⚠️ La contraseña debe tener al menos 6 caracteres.');
        hasError = true;
    }

    if (!hasError) {
        
        document.getElementById('warnings').innerHTML = '✔️ Formulario enviado exitosamente.';
        document.getElementById('warnings').style.color = 'green';
        
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerHTML = message;
    errorElement.style.color = 'red';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.innerHTML = '');
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
