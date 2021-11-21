// store variable
let heightInput = document.querySelector('#height'),
  weightInput = document.querySelector('#weight'),
  calculateBtn = document.querySelector('.calculateBtn'),
  result = document.querySelector('.result'),
  message = document.querySelector('.message'),
  clearBtn = document.querySelector('.clearBtn');

// calculate BMI function
const calculateBMI = () => {
  let height, weight, bmi;
  height = Number(heightInput.value);
  weight = Number(weightInput.value);
  bmi = weight / (height * 0.0254 * height * 0.0254);
  result.textContent = bmi.toFixed(1);
  let msg = showMessage(bmi);
  message.textContent = msg;
};

// clear BMI function
const clearBMI = () => {
  heightInput.value = '';
  weightInput.value = '';
  result.textContent = '--.--';
  message.textContent = 'Enter Measurements';
};

// show Message function
const showMessage = (bmiValue) => {
  if (bmiValue < 18.5) {
    return 'You are Underweight';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.5) {
    return 'You are Healthy';
  } else if (bmiValue > 25.0 && bmiValue <= 29.9) {
    return 'You are Overweight';
  } else if (bmiValue > 30.0) {
    return 'You are Obese';
  }
};

// eventHandler function
const eventHandler = () => {
  if (Number(weightInput.value) && Number(heightInput.value)) {
    calculateBMI();
  } else {
    alert('Please Provide valid Inputs');
  }
};

// add Event Listeners
calculateBtn.addEventListener('click', eventHandler);
clearBtn.addEventListener('click', clearBMI);
