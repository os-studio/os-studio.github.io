// var imgContainer = document.getElementById('imgContainer');
// // console.log(imgContainer);
// var img;
// var srcArray = [];
// var worktext = document.getElementById('workText');
// var workString;
// var inputName = prompt('Hello, please enter your name');
// // console.log(srcArray);
// userInput(inputName);
// initImages();

// function init() {
//     $("#formName").val(inputName);
//     userEmail = document.getElementById("mail");
//     formName.addEventListener("input", validate, false);
//     userEmail.addEventListener("input", validate, false);
//     validate();
// }

// $(document).ready(function () {
//     $("input").css({
//         "width": "120px",
//         "position": "relative",
//         "display": "block"

//     })
//     $("#contactForm").hide();
//     $("#contactForm").css({
//         "width": "250px",
//         "position": "relative",
//         "text-align": "left",
//         "left": "11%",
//         "margin": "10px",
//         "padding": "12px"
//     });
//     $("#formMessage").css({
//         "width": "240px",
//         "height": "80px",
//         "vertical-align": "top"
//     })
//     $("#buttonContact").css({
//         "width": "250px",
//         "height": '80px',
//         "margin": "10px",
//         "background-color": "grey",
//         "border": "2px solid white",
//         "font-family": "Roboto"

//     });

//     $("#buttonContact").click(function () {
//         $("#contactForm").slideDown("slow");
//     })

// });
// function validate() {

//     if ($("#mail").val() == "") {
//         $("#mail")[0].setCustomValidity('Give me an email');
//         userEmail.style.background = '#f55c47'

//     } else {
//         $("#mail")[0].setCustomValidity('');
//         formName.style.background = '#FFFFFF';
//         console.log('this is the ELSE');
//         if (!$("#mail").val() == "") {
//             $("#sendButton").click(function () {
//                 $("#contactForm").slideUp("slow");
//             })
//         }
//     }

// }

// function userInput(inputName) {
//     usrName = document.getElementById('userName');
//     usrName.className = "homeText";
//     usrName.textContent = "Welcome! " + inputName + ", I work with: ";
//     workString = 'SOME OF MY WORK:'
//     worktext.textContent = workString;
// }

// function initImages() {
//     srcArray.push('./imgs/3Dworks_01.png', './imgs/3Dworks_02.png', './imgs/3Dworks_03.png', './imgs/3Dworks_04.png', './imgs/3Dworks_05.png', './imgs/3Dworks_06.png', './imgs/3Dworks_07.png');

//     for (let i = 0; i < srcArray.length; i++) {
//         const imgsrc = srcArray[i];
//         img = document.createElement('img');
//         img.className = 'workImg';
//         img.src = imgsrc;
//         imgContainer.appendChild(img);
//     }
let currentDay = new Date();
let year = currentDay.getFullYear();
let footer = document.querySelector('footer');
// var video1 = document.getElementById("homeVideo1");
// var video2 = document.getElementById("homeVideo2");
// var video3 = document.getElementById("homeVideo3");
// var video4 = document.getElementById("homeVideo4");
// video1.loop = true;
// video1.play();
// video2.loop = true;
// video2.play();
// video3.loop = true;
// video3.play();
// video4.loop = true;
// video4.play();
function clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
    const root = document.querySelector( "html" );
    const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );
  
    const minWidth = minWidthPx / pixelsPerRem;
    const maxWidth = maxWidthPx / pixelsPerRem;
  
    const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
    const yAxisIntersection = -minWidth * slope + minFontSize
  
    return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
  }

const setYear = function() {
    footer.innerText = `Website developed by ocampo santiago ${year}`
}
setYear();
// }
// window.addEventListener("load", init, false);
