const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const submit = document.getElementById('submit');
const result = document.getElementById('result');


submit.addEventListener('click', function () {
    const height = heightInput.value;
    const weight = weightInput.value;
        if (!height || !weight) {
            alert('Please enter both height and weight!');
            return;
        }

        // console.log('Height:', height);
        // console.log('Weight:', weight);
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI : ${bmi}</span>`;
});