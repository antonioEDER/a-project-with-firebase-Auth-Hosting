import "../css/styles.scss";

// Defindo referências para elementos da página
var authForm = document.getElementById("authForm");
var authFormTitle = document.getElementById("authFormTitle");
var register = document.getElementById("register");
var access = document.getElementById("access");

var auth = document.getElementById("auth");
var userContent = document.getElementById("userContent");
var userEmail = document.getElementById("userEmail");

var sendEmailVerificationDiv = document.getElementById(
  "sendEmailVerificationDiv"
);
var emailVerified = document.getElementById("emailVerified");

var passwordReset = document.getElementById("passwordReset");

export const loading = document.getElementById("loading");

// Alterar o formulário de autenticação para o cadastro de novas contas
export function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = "Cadastrar conta";
  authFormTitle.innerHTML = "Insira seus dados para se cadastrar";
  hideItem(register);
  hideItem(passwordReset); // Esconder a opção de redefinição de senha
  showItem(access);
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
export function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = "Logar";
  authFormTitle.innerHTML = "Acesse a sua conta para continuar";
  hideItem(access);
  showItem(passwordReset); // Esconder a opção de redefinição de senha
  showItem(register);
}

// Simpplifica a exibição de elementos da página
export function showItem(element) {
  element.style.display = "block";
}

// Simpplifica a remoção de elementos da página
export function hideItem(element) {
  element.style.display = "none";
}

// Mostrar conteúdo para usuários autenticados
export function showUserContent(user) {
  if (user.emailVerified) {
    emailVerified.innerHTML = "E-mail verificado";
    hideItem(sendEmailVerificationDiv);
  } else {
    emailVerified.innerHTML = "E-mail não verificado";
    showItem(sendEmailVerificationDiv);
  }

  userEmail.innerHTML = user.email;
  hideItem(auth);
  showItem(userContent);
}

// Mostrar conteúdo para usuários não autenticados
export function showAuth() {
  authForm.email.value = "";
  authForm.password.value = "";
  hideItem(userContent);
  showItem(auth);
}

// Atributos extras de configuração de e-mail
export const actionCodeSettings = {
  url: "http://localhost:3000/",
};

window.actionCodeSettings = actionCodeSettings;
window.showAuth = showAuth;
window.showUserContent = showUserContent;
window.hideItem = hideItem;
window.showItem = showItem;
window.toggleToAccess = toggleToAccess;
window.toggleToRegister = toggleToRegister;
window.loading = loading;
