const btnCalculate = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const result = document.getElementById('result');

const calculateBMI = () => {
    const enteredHeight = heightInput.value;
    const enteredWeight = weightInput.value;

    const bmi = enteredWeight / (enteredWeight * enteredHeight);

    console.log(bmi);
}

btnCalculate.addEventListener('click', calculateBMI());