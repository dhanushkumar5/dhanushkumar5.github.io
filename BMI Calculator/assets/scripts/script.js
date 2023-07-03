function calculateBMI() {
  // Get input values
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  // Calculate BMI
  var bmi = weight / ((height / 100) ** 2);

  // Display result
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
}
