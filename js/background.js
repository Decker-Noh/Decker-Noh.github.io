const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImg = img[Math.floor(Math.random() * img.length)];

const imglocation = `backgroundimg/${chosenImg}`;

document.body.style.background = `url(${imglocation})`;
document.body.style.backgroundSize = "cover";
