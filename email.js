const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const mensaje = form.get('mensaje');
    const asunto = form.get('asun');

    // Abrir el cliente de correo electrónico predeterminado con el asunto y el mensaje
    window.location.href = `mailto:eduardo9j@gmail.com?subject=${asunto}&body=${mensaje}`;
}
