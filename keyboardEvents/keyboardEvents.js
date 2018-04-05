

var leftEyeTop=290;
var rightEyeTop=232;
var leftEyeLeft=300;
var rightEyeLeft=835;


console.log(leftEyeTop);
console.log(leftEyeLeft);
console.log(rightEyeTop);
console.log(rightEyeLeft);

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log(leftEyeTop);
  console.log(leftEyeLeft);
  console.log(rightEyeTop);
  console.log(rightEyeLeft);
// document.getElementById("bob").style.z-Index = "2";
// document.getElementById("leftEye").style.z-Index = "1";
// document.getElementById("rightEye").style.z-Index = "1";


<!-- Left Eye movement -->

if (keyName=="ArrowDown"){
  leftEyeTop += 10;
}

if (keyName=="ArrowUp"){
  leftEyeTop -= 10;
}
document.getElementById("leftEye").style.top = leftEyeTop + "px";

if (keyName=="ArrowLeft"){
  leftEyeLeft -= 10;
}

if (keyName=="ArrowRight"){
  leftEyeLeft += 10;
}
document.getElementById("leftEye").style.left = leftEyeLeft + "px";

<!-- Right Eye movement -->
if (keyName=="ArrowDown"){
  rightEyeTop += 10;
}

if (keyName=="ArrowUp"){
  rightEyeTop -= 10;
}
document.getElementById("rightEye").style.top = rightEyeTop + "px";

if (keyName=="ArrowLeft"){
  rightEyeLeft -= 10;
}

if (keyName=="ArrowRight"){
  rightEyeLeft += 10;
}
document.getElementById("rightEye").style.left = rightEyeLeft + "px";
  
}); 

