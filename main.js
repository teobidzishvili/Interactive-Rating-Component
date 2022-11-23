
let rate = document.querySelectorAll(".button")
let submit = document.getElementById("submit")
let result = document.getElementById("result")

let number

rate.forEach(function(currentValue){
    currentValue.addEventListener("click", function(){
        rate.forEach(function(rating){
            if (currentValue === rating){
                rating.classList.add("button-color")
            }else{
                rating.classList.remove("button-color")
            }      
        })
        number = Number(currentValue.textContent)
    })
    
    
})

submit.addEventListener("click", function(){
    if (!number){
        alert("Please select a rating before proceeding")
    } else{
        result.textContent = "you selected " + number + " out of 5"
    }
})
