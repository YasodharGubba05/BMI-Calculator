const form=document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#results")
   
    if (isNaN(height) || height <= 0) {
        results.innerHTML = "<p>Please enter a valid height</p>";
      }
      
      else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "<p>Please enter a valid weight</p>";
      }
    
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message = `<span>Your BMI is: ${bmi}</span><br/>`; 
    
        
        if (bmi < 18.5) {
          message += "<p>You are underweight</p>";
        } else if (bmi > 24.9) {
          message += "<p>You are overweight</p>";
        } else {
          message += "<p>Your weight is in the normal range</p>";
        }
    
        results.innerHTML = message;
    }
    
})
