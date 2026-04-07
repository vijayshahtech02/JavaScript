const form = document.querySelector('form')


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const message  = document.querySelector('#msg')

    if(height === "" || height < 0 || isNaN(height) ) {
        message.innerHTML = "Please enter the valid height"
    }
    else if(weight === "" || weight < 0 || isNaN(weight) ){
           message.innerHTML = "Please enter the valid weight"

    }
    else  {
    const BMI = (weight / ((height * height)/10000)).toFixed(2);
    result.innerHTML = `<span>Result : ${BMI}<span>`

    }




})