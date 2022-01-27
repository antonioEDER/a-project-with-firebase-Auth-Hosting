import firebase from "firebase";
import { showItem, showUserContent, showAuth, hideItem, loading } from "./utils";

// Traduz para português brasileiro a autenticação do Firebase
firebase.auth().languageCode = "pt-BR";

// Função que trata a submissão do formulário de autenticação
authForm.onsubmit = function (event) {
  showItem(loading);
  event.preventDefault();
  if (authForm.submitAuthForm.innerHTML == "Logar") {
    // Logando
    firebase
      .auth()
      .signInWithEmailAndPassword(authForm.email.value, authForm.password.value)
      .then(function (user) {
        console.log("Logou com sucesso");
        console.log(user);
      })
      .catch(function (error) {
        console.log("Falha no acesso");
        console.log(error);
      });
  } else {
    // Criando conta
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        authForm.email.value,
        authForm.password.value
      )
      .then(function (user) {
        console.log("Cadastrou com sucesso");
        console.log(user);
      })
      .catch(function (error) {
        console.log("Falha no cadastro");
        console.log(error);
      });
  }
};

// Observa o Estado do Login
firebase.auth().onAuthStateChanged(function (user) {
  hideItem(loading);
  if (user) {
    showUserContent(user);
    console.log("Usuário autenticado");
    console.log(user);
  } else {
    showAuth();
    console.log("Usuário não autenticado");
  }
});

// Logout
// Função que permite ao usuário sair da conta dele
export function signOut() {
  firebase
    .auth()
    .signOut()
    .catch(function (error) {
      console.log("Falha ao sair da conta");
      console.log(error);
    });
}

// Função que permite o usuário fazer a verificação do e-mail dele
export function sendEmailVerification() {
  showItem(loading);
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification(actionCodeSettings)
    .then(function () {
      alert(
        "E-mail de verificação foi enviado para " +
          user.email +
          "! Verifique a sua caixa de entrada"
      );
    })
    .catch(function (error) {
      alert("Houve um erro ao enviar o e-mail de verificação");
      console.log(error);
    })
    .finally(function () {
      hideItem(loading);
    });
}

// Função que permite o usuário redefinir a senha dele
export function sendPasswordResetEmail() {
  var email = prompt(
    "Redefinir senha! Informe o seu endereço de e-mail.",
    authForm.email.value
  );
  if (email) {
    showItem(loading);
    firebase
      .auth()
      .sendPasswordResetEmail(email, actionCodeSettings)
      .then(function () {
        alert("E-mail de redefinição de senha foi enviado para " + email + ".");
      })
      .catch(function (error) {
        alert("Houve um erro ao enviar e-mail de redefinição de senha!");
        console.log(error);
      })
      .finally(function () {
        hideItem(loading);
      });
  } else {
    alert("É preciso preencher o campo de e-mail para redefinir a senha!");
  }
}

// Função que permite a autenticação pelo Google
export function signInWithGoogle() {
  showItem(loading);
  // signInWithPopup
  // signInWithRedirect
  firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider()).catch(function (error) {
    alert('Houve um erro ao autenticar usando o Google')
    console.log(error)
    hideItem(loading)
  })
}

window.signOut = signOut;
window.sendEmailVerification = sendEmailVerification;
window.sendPasswordResetEmail = sendPasswordResetEmail;
window.signInWithGoogle = signInWithGoogle;
