var urlImage = document.getElementById("image-url");
var addImageBtn = document.getElementById("add-image");
var gallery = document.getElementById("gallery");
var galleryApp = document.getElementById("gallery-app");

addImageBtn.addEventListener("click", addImage);

function addImage() {
  // Récupération de la valeur de l'url
  var url = urlImage.value;

  if (!url || !isValidUrl(url)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "L'URL n'est pas valide !";
    errorMessage.style.color = "red";
    galleryApp.insertBefore(errorMessage, gallery);
    setTimeout(() => errorMessage.remove(), 3000); // Supprime le message après 3 secondes
    return;
  }

  // Création d'un conteneur pour l'image et le bouton
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("image-item");

  // Création d'un élément image dans #Gallery
  var image = document.createElement("img");
  image.src = url;

  // Création du bouton supprimer sur l'image
  var delBtn = document.createElement("button");
  delBtn.textContent = "X";

  delBtn.addEventListener("click", function () {
    imageContainer.classList.add("hide"); // Ajoute la classe de disparition
    setTimeout(() => {
      imageContainer.remove(); // Supprime l'image après la fin de l'animation
    }, 300); // 300ms correspond à la durée définie dans le CSS
  });

  // Ajout de l'image et du bouton dans le conteneur
  imageContainer.appendChild(image);
  imageContainer.appendChild(delBtn);

  // Ajout du conteneur dans la galerie
  gallery.appendChild(imageContainer);

  // Ajoute l'effet d'apparition après un léger délai
  setTimeout(() => {
    imageContainer.classList.add("show");
  }, 10);

  // Réinitialise l'input
  urlImage.value = "";
}

function isValidUrl(string) {
  try {
    new URL(string); // Vérifie si la chaîne est une URL valide
    return true;
  } catch (_) {
    return false; // Retourne false si ce n’est pas une URL valide
  }
}

urlImage.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Empêche le comportement par défaut
    addImage();
  }
});
