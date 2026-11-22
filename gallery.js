function upDate(previewPic) {
    console.log("Événement déclenché pour : " + previewPic.alt);
    
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Survolez ou sélectionnez une image ci-dessous pour l'afficher ici.";
}

function addTabIndex() {
    console.log("Chargement terminé : ajout des attributs tabindex.");
    
    const images = document.querySelectorAll(".preview");
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
