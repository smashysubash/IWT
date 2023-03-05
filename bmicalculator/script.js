const calculateButton = document.getElementById("calculate-bmi");
calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const bmiResult = document.getElementById("bmi");
const categoryResult = document.getElementById("category");

const weight = parseFloat(weightInput.value);
const height = parseFloat(heightInput.value) / 100;

if (isNaN(weight) || isNaN(height)) {
bmiResult.innerText = "";
categoryResult.innerText = "Please enter valid weight and height";
return;
}

const bmi = weight / Math.pow(height, 2);
bmiResult.innerText = bmi.toFixed(1);

if (bmi < 18.5) {
categoryResult.innerText = "Underweight";
categoryResult.style.color = "#2196F3";
} else if (bmi >= 18.5 && bmi <= 24.9) {
categoryResult.innerText = "Normal weight";
categoryResult.style.color = "#4CAF50";
} else if (bmi >= 25 && bmi <= 29.9) {
categoryResult.innerText = "Overweight";
categoryResult.style.color = "#FFC107";
} else {
categoryResult.innerText = "Obese";
categoryResult.style.color = "#F44336";
}
}