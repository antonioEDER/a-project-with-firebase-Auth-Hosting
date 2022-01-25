
// Defindo referências para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access = document.getElementById('access')

var loading = document.getElementById('loading')

var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')
var userEmail = document.getElementById('userEmail')

var sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv')
var emailVerified = document.getElementById('emailVerified')

// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
  hideItem(register)
  showItem(access)
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
  hideItem(access)
  showItem(register)
}

// Simpplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block'
}

// Simpplifica a remoção de elementos da página
function hideItem(element) {
  element.style.display = 'none'
}

// Mostrar conteúdo para usuários autenticados
function showUserContent(user) {
  if (user.emailVerified) {
    emailVerified.innerHTML = 'E-mail verificado'
    hideItem(sendEmailVerificationDiv)
  } else {
    emailVerified.innerHTML = 'E-mail não verificado'
    showItem(sendEmailVerificationDiv)
  }

  userEmail.innerHTML = user.email
  hideItem(auth)
  showItem(userContent)
}

// Mostrar conteúdo para usuários não autenticados
function showAuth() {
  authForm.email.value = ''
  authForm.password.value = ''
  hideItem(userContent)
  showItem(auth)
}

// MOCK
// document.querySelector('#email').value = 'ederantonio@ederantonio.com.br'
// document.querySelector('#password').type = 'text'
// document.querySelector('#password').value = '123456'
// document.querySelector('#password').type = 'password'


// Atributos extras de configuração de e-mail
var actionCodeSettings = {
  url: 'http://localhost:3000/'
}