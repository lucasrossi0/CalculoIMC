function calcIMC() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let result = document.getElementById("result");
  let imc = (weight / (height * height)) * 10000;
  result.innerText = typeImc(imc, result) + "O seu IMC é de: " + imc.toFixed(2);
}

function typeImc(imc, result) {
  if (imc >= 25 && imc <= 29.99) {
    return "Você está sobrepeso. ";
  } else if (imc >= 30 && imc <= 34.99) {
    return "Você está com obesidade grau 1. ";
  } else if (imc >= 35 && imc <= 39.99) {
    return "Você está com obesidade grau 2. ";
  } else if (imc >= 40) {
    return "Você está com obesidade grau 3. ";
  } else {
    return "Você está saudável. ";
  }
}
