console.log("Hi its Rohan");

const form=document.querySelector('form')

// Checking if the height and weight is integer or not
// const heightIsInteger = Number.isInteger(heightFloat);
// const weightIsInteger = Number.isInteger(weightFloat);


form.addEventListener('submit',function(r){
    r.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let bmiMessage = '';
        if (bmi < 18.6) {
            bmiMessage = 'You are underweight.';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            bmiMessage = 'You have a normal weight.';
        } else if (bmi > 24.9) {
            bmiMessage = 'You are overweight.';
        }

        // Now show the result
        result.innerHTML=`<span>Your BMI is ${bmi}.</span><br><span style="font-size: 14px; color: #CBD5E1;">${bmiMessage}</span>`;
    }
});
