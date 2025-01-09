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
   
    
})
