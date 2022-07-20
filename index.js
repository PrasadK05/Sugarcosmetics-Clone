//   <-------------------Crauser-1 Start---------------------->
let imageCr1 = [
  "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/efc32eea-4d1e-4275-b72d-13a399550ba4.jpg",
];

document.querySelector(".btn1").addEventListener("click", moveRight);
imgCounter = 0;
function moveRight() {
  imgCounter++;
  if (imgCounter == imageCr1.length) {
    imgCounter = 0;
  }
  document.querySelector(".crauser1").src = imageCr1[imgCounter];
}

document.querySelector(".btn2").addEventListener("click", moveLeft);

function moveLeft() {
  imgCounter--;
  if (imgCounter < 0) {
    imgCounter = imageCr1.length - 1;
  }
  document.querySelector(".crauser1").src = imageCr1[imgCounter];
}
//   <-------------------Crauser-1 End---------------------->

//   <-------------------Crauser-1 End---------------------->
let imageCr2 = [
  "https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/10821512-ceff-4594-934a-86cbde6c6a44.jpg",
];

document.querySelector(".btn3").addEventListener("click", moveR);
imgCounter1 = 0;
function moveR() {
  imgCounter1++;
  if (imgCounter1 == imageCr2.length) {
    imgCounter1 = 0;
  }
  document.querySelector(".crauser2").src = imageCr2[imgCounter1];
}

document.querySelector(".btn4").addEventListener("click", moveL);

function moveL() {
  imgCounter1--;
  if (imgCounter1 < 0) {
    imgCounter1 = imageCr2.length - 1;
  }
  document.querySelector(".crauser2").src = imageCr2[imgCounter1];
}
