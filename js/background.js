const images = ["0.png","1.png","2.png"];
// 폴더 안에 있는 이미지 이름들을 Javasfript 파일에서도 똑같이 쓴다

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);