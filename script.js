// Gérer le clic sur le bouton "Choisir"
var choisirButtons = document.getElementsByClassName('choisir');
for (var i = 0; i < choisirButtons.length; i++) {
  choisirButtons[i].addEventListener('click', function() {
    var certification = this.parentNode.innerText.split(' - ')[0];
    ajouterCertification(certification);
  });
}

// Fonction pour ajouter une certification à la liste des certifications de l'utilisateur
function ajouterCertification(certification) {
  var compteListe = document.getElementById('compte').getElementsByTagName('ul')[0];
  var li = document.createElement('li');
  li.innerText = certification + ' - Choisi';
  compteListe.appendChild(li);
}
