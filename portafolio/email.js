const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#envia')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:eduardo9j@gmail.com?}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
  $buttonMailto.click()
}
