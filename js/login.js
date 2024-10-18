const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  if (target.value.length < 10) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

/*function validarLogin(login) {
    const minLength = 4;
    const maxLength = 10;

    if (login.length < minLength || login.length > maxLength) {
        return false; // Login inválido
    }
    return true; // Login válido
}

// Exemplo de uso
const login = "usuario123";
if (validarLogin(login)) {
    console.log("Login válido.");
} else {
    console.log("Login inválido. O login deve ter entre 4 e 10 letras.");
}*/


