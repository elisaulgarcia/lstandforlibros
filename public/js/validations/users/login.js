const form = document.querySelector(".form-login")

const emailInput = form.email
const passwordInput = form.password

//todo: Deberá existir en la base de datos
const validEmail = () => {
  let email = emailInput.value
  if (!email) return "Por favor ingresa tu dirección de correo electrónico"
  if (!validator.isEmail(email)) return "Email inválido"
  return null
}

const validPassword = () => {
  let password = passwordInput.value
  if (!password) return "Por favor ingresa una contraseña"
  if (password.length < 8) return "Debe tener al menos 8 caracteres"
  return null
}

const sendFeedback = (element, message) => {
  const feedbackEl = element.nextElementSibling
  if (feedbackEl.innerText === message) return
  feedbackEl.innerText = message
}

emailInput.addEventListener("input", e => {
  sendFeedback(emailInput, validEmail())
})

passwordInput.addEventListener("input", e => {
  sendFeedback(passwordInput, validPassword())
})

form.addEventListener("submit", e => {
  e.preventDefault()
  if (!validEmail() && !validPassword())
    return form.submit()

  sendFeedback(emailInput, validEmail())
  sendFeedback(passwordInput, validPassword())
})