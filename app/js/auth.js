import firebase from "firebase";
import {
  showItem,
  showUserContent,
  showAuth,
  hideItem,
  loading,
  showError
} from "./utils";

// Traduz para português brasileiro a autenticação do Firebase
firebase.auth().languageCode = "pt-BR";

// Função que trata a submissão do formulário de autenticação
authForm.onsubmit = function(event) {
  showItem(loading);
  event.preventDefault();
  if (authForm.submitAuthForm.innerHTML == "Logar") {
    // Logando
    firebase
      .auth()
      .signInWithEmailAndPassword(authForm.email.value, authForm.password.value)
      .then(function(user) {
        console.log("Logou com sucesso");
        console.log(user);
      })
      .catch(function(error) {
        showError('Falha no acesso: ', error)
      });
  } else {
    // Criando conta
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        authForm.email.value,
        authForm.password.value
      )
      .then(function(user) {
        console.log("Cadastrou com sucesso");
        console.log(user);
      })
      .catch(function(error) {
        showError('Falha no cadastro: ', error)
      });
  }
};

// Observador de Estado do Login
firebase.auth().onAuthStateChanged(function(user) {
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
    .catch(function(error) {
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
    .then(function() {
      alert(
        "E-mail de verificação foi enviado para " +
          user.email +
          "! Verifique a sua caixa de entrada"
      );
    })
    .catch(function(error) {
      alert("Houve um erro ao enviar o e-mail de verificação");
      console.log(error);
    })
    .finally(function() {
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
      .then(function() {
        alert("E-mail de redefinição de senha foi enviado para " + email + ".");
      })
      .catch(function(error) {
        alert("Houve um erro ao enviar e-mail de redefinição de senha!");
        console.log(error);
      })
      .finally(function() {
        hideItem(loading);
      });
  } else {
    alert("É preciso preencher o campo de e-mail para redefinir a senha!");
  }
}

// Função que permite a autenticação pelo Google
export function signInWithGoogle() {
  showItem(loading);
  const fb = new firebase.auth.GoogleAuthProvider();
  // firebase.auth().signInWithPopup(fb)
  // firebase.auth().signInWithRedirect(fb)
  firebase
    .auth()
    .signInWithPopup(fb)
    .catch(function(error) {
      alert("Houve um erro ao autenticar usando o Google");
      console.log(error);
      hideItem(loading);
    });
}

// Função que permite a autenticação pelo GitHub
export function signInWithGitHub() {
  showItem(loading);
  const fb = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(fb)
    .catch(function(error) {
      alert("Houve um erro ao autenticar usando o GitHub");
      console.log(error);
      hideItem(loading);
    });
}

// Função que permite a autenticação pelo Facebook
export function signInWithFacebook() {
  showItem(loading);
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .catch(function(error) {
      alert("Houve um erro ao autenticar usando o Facebook");
      console.log(error);
      hideItem(loading);
    });
}

// Função que permite atualizar nomes de usuários
export function updateUserName() {
  var newUserName = prompt(
    "Informe um novo nome de usuário.",
    userName.innerHTML
  );
  if (newUserName && newUserName != "") {
    userName.innerHTML = newUserName;
    showItem(loading);
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: newUserName,
      })
      .catch(function(error) {
        alert("Houve um erro ao atualizar o nome de usuário");
        console.log(error);
      })
      .finally(function() {
        hideItem(loading);
      });
  } else {
    alert("O nome de usuário não pode ser vazio");
  }
}
// Função que permite remover contas de usuário
export function deleteUserAccount() {
  var confirmation = confirm('Realmente deseja excluir a sua conta?')
  if (confirmation) {
    showItem(loading)
    firebase.auth().currentUser.delete().then(function () {
      alert('Conta foi removida com sucesso')
    }).catch(function (error) {
      alert('Houve um erro ao remover a sua conta')
      console.log(error)
    }).finally(function () {
      hideItem(loading)
    })
  }
}

window.signOut = signOut;
window.sendEmailVerification = sendEmailVerification;
window.sendPasswordResetEmail = sendPasswordResetEmail;
window.signInWithGoogle = signInWithGoogle;
window.signInWithGitHub = signInWithGitHub;
window.signInWithFacebook = signInWithFacebook;
window.updateUserName = updateUserName;
window.deleteUserAccount = deleteUserAccount;



