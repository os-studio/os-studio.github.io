var imgContainer = document.getElementById('imgContainer');
// console.log(imgContainer);
var img;
var srcArray = [];
var worktext = document.getElementById('workText');
var workString;
var inputName = prompt('Hello, please enter your name');
// console.log(srcArray);
srcArray.push('./imgs/3Dworks_01.png', './imgs/3Dworks_02.png', './imgs/3Dworks_03.png', './imgs/3Dworks_04.png', './imgs/3Dworks_05.png', './imgs/3Dworks_06.png', './imgs/3Dworks_07.png');

for (let i = 0; i < srcArray.length; i++) {
    const imgsrc = srcArray[i];
    img = document.createElement('img');
    img.className = 'workImg';
    img.src = imgsrc;
    imgContainer.appendChild(img);
}
workString = 'SOME OF MY WORK:'
worktext.textContent = workString;
var video1 = document.getElementById('homeVideo1');
var video2 = document.getElementById('homeVideo2');
video1.loop = true;
video1.play();
video2.loop = true;
video2.play();
usrName = document.getElementById('userName');
usrName.className = "homeText";
usrName.textContent = "Welcome! " + inputName + ", I work with: ";
