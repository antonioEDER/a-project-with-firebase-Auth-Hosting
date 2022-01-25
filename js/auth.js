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
    showUserContent(user)
    console.log("Usuário autenticado");
    console.log(user);
  } else {
    showAuth()
    console.log("Usuário não autenticado");
  }
});

// Logout
// Função que permite ao usuário sair da conta dele
function signOut() {
  firebase
    .auth()
    .signOut()
    .catch(function (error) {
      console.log("Falha ao sair da conta");
      console.log(error);
    });
}


// Função que permite o usuário fazer a verificação do e-mail dele
function sendEmailVerification() {
  showItem(loading)
  var user = firebase.auth().currentUser
  user.sendEmailVerification().then(function () {
    alert('E-mail de verificação foi enviado para ' + user.email + '! Verifique a sua caixa de entrada')
  }).catch(function (error) {
    alert('Houve um erro ao enviar o e-mail de verificação')
    console.log(error)
  }).finally(function () {
    hideItem(loading)
  })
}