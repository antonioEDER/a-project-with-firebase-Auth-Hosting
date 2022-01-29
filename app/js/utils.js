/* eslint-disable no-undef */
import '../css/styles.scss';

// Defindo referências para elementos da página
const authForm = document.getElementById('authForm');
const authFormTitle = document.getElementById('authFormTitle');
const register = document.getElementById('register');
const access = document.getElementById('access');

const auth = document.getElementById('auth');
const userContent = document.getElementById('userContent');
const userEmail = document.getElementById('userEmail');

const sendEmailVerificationDiv = document.getElementById(
  'sendEmailVerificationDiv',
);
const emailVerified = document.getElementById('emailVerified');

const passwordReset = document.getElementById('passwordReset');

var userName = document.getElementById('userName')
var userImg = document.getElementById('userImg')


export const loading = document.getElementById('loading');

// Alterar o formulário de autenticação para o cadastro de novas contas
export function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta';
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar';
  hideItem(register);
  hideItem(passwordReset); // Esconder a opção de redefinição de senha
  showItem(access);
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
export function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Logar';
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar';
  hideItem(access);
  showItem(passwordReset); // Esconder a opção de redefinição de senha
  showItem(register);
}

// Simpplifica a exibição de elementos da página
export function showItem(element) {
  element.style.display = 'block';
}

// Simpplifica a remoção de elementos da página
export function hideItem(element) {
  element.style.display = 'none';
}

// Mostrar conteúdo para usuários autenticados
export function showUserContent(user) {
  console.log(user)
  if (user.emailVerified) {
    emailVerified.innerHTML = 'E-mail verificado'
    hideItem(sendEmailVerificationDiv)
  } else {
    emailVerified.innerHTML = 'E-mail não verificado'
    showItem(sendEmailVerificationDiv)
  }
  userImg.src = user.photoURL ? user.photoURL : 'app/img/unknownUser.png'
  userName.innerHTML = user.displayName
  userEmail.innerHTML = user.email
  hideItem(auth)
  showItem(userContent)
}


// Mostrar conteúdo para usuários não autenticados
export function showAuth() {
  authForm.email.value = '';
  authForm.password.value = '';
  hideItem(userContent);
  showItem(auth);
}

// centralizar e traduzir erros
export function showError(prefix, error) {
  console.log(error.code)
  hideItem(loading)

  switch (error.code) {
    case 'auth/user-not-found':  alert(prefix + ' ' + 'Conta não encontrada!')
    break
    case 'auth/invalid-email': alert(prefix + ' ' + 'E-mail inválido!')
    break;
    case 'auth/wrong-password': alert(prefix + ' ' + 'Senha inválida!')
    break;
    case 'auth/weak-password': alert(prefix + ' ' + 'Senha deve ter ao menos 6 caracteres!')
    break;
    case 'auth/email-already-in-use': alert(prefix + ' ' + 'E-mail já está em uso por outra conta!')
    break;
    case 'auth/popup-closed-by-user': alert(prefix + ' ' + 'O popup de autenticação foi fechado antes da operação ser concluída!')
    break;   
  
    default: alert(prefix + ' ' + error.message)
  }
}

// Atributos extras de configuração de e-mail
export const actionCodeSettings = {
  url: 'http://localhost:3000/',
};

window.actionCodeSettings = actionCodeSettings;
window.showAuth = showAuth;
window.showUserContent = showUserContent;
window.hideItem = hideItem;
window.showItem = showItem;
window.toggleToAccess = toggleToAccess;
window.toggleToRegister = toggleToRegister;
window.loading = loading;
window.showError = showError;