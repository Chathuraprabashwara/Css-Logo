

const colorInput = document.querySelector(".color1");
const colorButton = document.getElementById('default');
const colorInput2 = document.querySelector(".color2");
const colorInput3 = document.querySelector(".color3");
const colorInput4 = document.querySelector(".color4");
const colorInput5 = document.querySelector(".color5");
const rotate = document.querySelector(".rotate");
const rotatebtn = document.getElementById('rotate');
const capture = document.getElementById('capture');
const background =document.querySelector(".background");
const inputText = document.querySelector(".inputText")
const defaultText = document.querySelector(".Text")
const colorValue = '--color1';
const colorValue2 = '--color2';
const colorValue3 = '--background';
const rotatediv = '--animation';
const header = '--fontcolor';
const tagline = '--fontcolor2';


const btnDisplay = document.querySelector("#btnDisplay");
const btnDownload = document.querySelector("#btnDownload");
const imgConverted = document.querySelector("#imgConverted");
console.log(background);


 colorButton.addEventListener('click', _ => {
     document.documentElement.style.setProperty(colorValue, '#2C394B')
      document.documentElement.style.setProperty(colorValue2, '#FFB740')
     document.documentElement.style.setProperty(header, '#2C394b')
      document.documentElement.style.setProperty(tagline, '#0c1214') 
        document.documentElement.style.setProperty(colorValue3, '#fdfdfd')
 })

 colorInput.addEventListener('change', e =>{
     console.log(e.target.value)
      document.documentElement.style.setProperty(colorValue, e.target.value)
 })

colorInput2.addEventListener('change', e =>{
     console.log(e.target.value)
      document.documentElement.style.setProperty(colorValue2, e.target.value)
 })

 colorInput3.addEventListener('change', e =>{
     console.log(e.target.value)
      document.documentElement.style.setProperty(colorValue3, e.target.value)
 })

 colorInput4.addEventListener('change', e =>{
     console.log(e.target.value)
      document.documentElement.style.setProperty(header, e.target.value)
 })

 colorInput5.addEventListener('change', e =>{
     console.log(e.target.value)
      document.documentElement.style.setProperty(tagline, e.target.value)
 })

 inputText.addEventListener('change', e =>{
     console.log(e.target.value)
    document.getElementById("Text").innerHTML =  e.target.value
 })


let k = true;
rotatebtn.addEventListener('click', _ => {

 
    if (k){
             document.documentElement.style.setProperty(rotatediv, 'rotation 0s  ')
    rotatebtn.textContent ="Rotate";
        k = false;

    }
    else{
      document.documentElement.style.setProperty(rotatediv, 'rotation 20s infinite linear ')
    rotatebtn.textContent ="Rotate off";
  
     k= true;
    }
 

 })




btnDownload.addEventListener('click', function () {
html2canvas(capture).then(function(canvas){
     document.body.appendChild(canvas)
})
})




