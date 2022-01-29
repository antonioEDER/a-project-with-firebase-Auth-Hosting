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

<h2 align="center">Dependências</h2>

- Yarn
- NodeJs
- Nodemon
- Firebase
- Webpack

<h2 align="center">Firebase Hosting</h2>
"O Firebase Hosting oferece hospedagem rápida e segura para seu app da Web, conteúdo estático e dinâmico e microsserviços."
1º - Acessar no console firebase menu Hosting
2º - Instalar Firebase CLI
```bash
npm install -g firebase-tools
```
3º - Autenticar projeto
```bash
firebase login
```
4º - Criar pasta
```bash
mkdir hosting && cd hosting
```
5º - Iniciar Projeto
```bash
firebase init
-> (o) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
-> (o) Use an existing project
-> (o) ..."select your projeto name the Firebase"
-> What do you want to use as your public directory? (public) yes
-> Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
-> Set up automatic builds and deploys with GitHub? Yes
->  For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
-> Set up the workflow to run a build script before every deploy? (y/N) N
```
5º - Configurar Projeto express

```bash
firebase init functions
```
```bash
yarn add express
```
```bash
sudo firebase serve --only functions
```