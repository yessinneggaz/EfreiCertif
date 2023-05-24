// Gérer les liens "Créer un compte" et "Se connecter"
var createAccountLink = document.getElementById('create-account-link');
var loginLink = document.getElementById('login-link');
var loginSection = document.getElementById('login');
var createAccountSection = document.getElementById('create-account');

createAccountLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginSection.style.display = 'none';
  createAccountSection.style.display = 'block';
});

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  login
