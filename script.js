const bmiValue = document.getElementById("bmi-text");

const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
function calculateBmi()
{
    let height = heightInput.value / 100;
    let weight = weightInput.value;
    let result = 0

    if(height == 0 && weight == 0){
        alert("Fill out height and weight please!")
    }else if(height == 0){
        alert("Fill out height please!")
    }else if(weight == 0){
        alert("Fill out weight please!")
    }else{
        result = weight / (height * height)


        bmiValue.textContent = result.toFixed(2) + " " + "kg/m2";

        /*
        if(result < 17 ){
            bmiValue.className = "";
            bmiValue.classList.add("dangerous");
        }else if(17 < result < 25){
            bmiValue.className = "";
            bmiValue.classList.add("normal");
        }
        else if(25 < result < 30){
            bmiValue.className = "";
            bmiValue.classList.add("not-good");
        }
        else{
            bmiValue.className = "";
            bmiValue.classList.add("dangerous");
        }

        */
}
}

