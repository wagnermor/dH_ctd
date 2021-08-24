document.getElementById("theButton").onclick = calculaImc;
document.getElementById("clearForm").onclick = clearForm;

let inputName = document.getElementById("GET-name");
let inputWeight = document.getElementById("GET-weight");
let inputHeight = document.getElementById("GET-height");


function clearForm() {
  let mesage = document.querySelector("#mesage");
  mesage.innerHTML= ``;
  inputName.value="";
  inputWeight.value="";
  inputHeight.value="";
  mesage.style.display = "none";
}

function calculaImc() {
  let name = inputName.value;
  let weight = inputWeight.value;
  let height = inputHeight.value;

  let imc = weight/(height * height);
  let result = "";
  
  (imc >= 18.5 && imc <= 24.9)? result = `normal ou saudável`: ((imc < 18.5)? result = `abaixo do peso`: result = `acima do peso`); 
  
  let mesageOutput = `Olá ${name}, você está ${result}.`;

  let mesage = document.querySelector("#mesage");
  mesage.innerHTML= `${mesageOutput}`;
  mesage.style.display = "inline";
}