document.getElementById('submit-btn').addEventListener('click',function checkAge()
{
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    console.log(ageText);
    const errorField = document.getElementById('error');
    errorField.innerText = ""; // Clear old errors

    try {
        const age = parseInt(ageText);

        if (isNaN(age)) {
            throw "Age must be a number!";
        }
        if (age < 18 || age > 30) {
            throw "Age must be between 18 and 30!";
        }

       // alert("Age is valid!");
        if(age==25){
  errorField.innerText = 'Age is 25';
        }
    } catch (error) {
        errorField.innerText = error;
        errorField.style.color = "red";
    }
})