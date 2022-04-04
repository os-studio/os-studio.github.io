let currentDay = new Date();
let year = currentDay.getFullYear();
let footer = document.querySelector("footer");
let myTitle = document.querySelector("#myTitle");
var video1 = document.getElementById("homeVideo1");
var video2 = document.getElementById("homeVideo2");
var video3 = document.getElementById("homeVideo3");
var video4 = document.getElementById("homeVideo4");
let randTitle = [
  "Designer",
  "Visual Dev",
  "New Media Researcher",
  "Creative Coder",
  "Designer",
  "Programmer",
];
video1.loop = true;
video1.play();
video2.loop = true;
video2.play();
video3.loop = true;
video3.play();
video4.loop = true;
video4.play();

function clampBuilder(minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
  const root = document.querySelector("html");
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem )`;
}
const setRandTitle = function () {
  const randNumber = Math.floor(Math.random() * randTitle.length);
  myTitle.innerText = `Today i'm a ${randTitle[randNumber]}`;
};
const setYear = function () {
  footer.innerText = `Website developed by ocampo santiago ${year}`;
};
setRandTitle();
setYear();
// }
// window.addEventListener("load", init, false);
