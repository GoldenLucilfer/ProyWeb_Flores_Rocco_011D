
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const collabname = document.getElementById('collabname').value.trim();
    const beatfile = document.getElementById('beatfile').value.trim();

    
    clearErrors();

    let hasError = false;

    if (firstname === '') {
        showError('error-firstname', '⚠️ El nombre del track es obligatorio.');
        hasError = true;
    }
    if (lastname === '') {
        showError('error-lastname', '⚠️ La descripción es obligatoria.');
        hasError = true;
    }
    if (collabname === '') {
        showError('error-collabname', '⚠️ El nombre de colaboración es obligatorio.');
        hasError = true;
    }
    if (beatfile === '') {
        showError('error-beatfile', '⚠️ Debes subir un archivo de audio.');
        hasError = true;
    }

    if (!hasError) {
        
        document.getElementById('warnings').innerHTML = '✔️ Beat subido exitosamente.';
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
