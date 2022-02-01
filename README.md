# project-with-firebase

```
Esse é um projeto Front-End integrado com Firebase
```

```
Nele vamos explorar ainda:

- Google Firebase.

- Implementar o acesso por e-mail+senha, 

- Redefinição de senha

- Verificação de e-mail 

- Acesso por provedores de autenticação Google, GitHub e Facebook.

- Criar, ler, atualizar e remover dados nos bancos de dados Realtime Database

- Cloud Firestore.

- Enviar, obter, e remover arquivos no armazenamento do Cloud Storage.

- Implementar ações para pausar, continuar e cancelar uploads de arquivos no Cloud Storage.

- Definir regras de segurança e validação de informações no Realtime Database, Cloud Firestore e Cloud Storage.

- Utilizar os recursos de hospedagem de sites do Firebase para implantar e gerenciar aplicações Web na internet com segurança (HTTPS).
```

<h2 align="center">Install</h2>

```bash
yarn install
```

Start:

```bash
yarn start
```

<h2 align="center">Documentações</h2>
- https://firebase.google.com/docs/web/setup
- https://firebase.google.com/docs/hosting/?authuser=0#implementation_path
- https://console.cloud.google.com/functions

<h2 align="center">Dependências</h2>

- Yarn
- NodeJs
- Nodemon
- Firebase
- Webpack

<h2 align="center">Firebase Hosting</h2>
<p>"O Firebase Hosting oferece hospedagem rápida e segura para seu app da Web, conteúdo estático e dinâmico e microsserviços." </p>
1º - Acessar no console firebase menu Hosting<br>
2º - Instalar Firebase CLI<br>

```bash
sudo npm install -g firebase-tools
```
<p></p>
3º - Autenticar projeto<br>

```bash
firebase login
```
<p></p>

4º - Criar pasta<br>

```bash
mkdir hosting && cd hosting
```
<p></p>

5º - Iniciar Projeto<br>

```bash
firebase init
```
<p></p>

-> (o) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys<br>
-> (o) Use an existing project<br>
-> (o) ..."select your projeto name the Firebase"<br>
-> What do you want to use as your public directory? (public) yes<br>
-> Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N<br>
-> Set up automatic builds and deploys with GitHub? Yes<br>
->  For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)<br>
-> Set up the workflow to run a build script before every deploy? (y/N) N<br>


6º  Deploy do projeto<br>
<p></p>
```bash
firebase deploy
```
<p></p>

7º Link do Projeto<br>
https://a-project-with-firebase-670d5.web.app/
