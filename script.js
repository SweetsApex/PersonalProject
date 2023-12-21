const dodgeTheEnemies = [
  "./Images/Dodge1.png",
  "./Images/Dodge2.png",
  "./Images/Dodge3.png",
  "./Images/Dodge4.png",
  "./Images/Dodge5.png",
];
let index = 0;
const imgElement = document.getElementById("image");

function changeImage() {
  imgElement.src = dodgeTheEnemies[index];
  index = (index + 1) % dodgeTheEnemies.length; // Corrected from images.length
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);

// Initially display the first image
changeImage();
