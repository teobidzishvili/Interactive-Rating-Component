
let image1 = document.getElementById("img1")
let image2 = document.getElementById("img2")
let title1 = document.getElementById("title1")
let result = document.getElementById("result")
let title2 = document.getElementById("title2")
let text1 = document.getElementById("text1")
let rating = document.getElementById("rating-buttons")
let rate = document.querySelectorAll(".button")
let text2 = document.getElementById("text2")
let submit = document.getElementById("submit")
let resultN = document.getElementById("resultN")

let ratingButtons = document.querySelector("#rating-buttons")
let number

rate.forEach(function(currentValue){
    currentValue.addEventListener("click", handleClick)
})

function handleClick(event){
    rate.forEach(function(currentValue){
        if (event.target.innerHTML == currentValue.innerHTML){
            currentValue.classList.add("button-color")
            number = parseFloat(currentValue.innerHTML)
        }else{
            currentValue.classList.remove("button-color")
        }
    })
}

const elements1 = [image1, title1, text1, rating, submit]
const elements2 = [image2, result, title2, text2]


submit.addEventListener("click", function(){
    if (!number){
        alert("Please select a rating before proceeding")
    }else{
        elements1.forEach(function(element){
            element.remove()
        })
        elements2.forEach(function(element){
            element.classList.remove("d-none")
        })

        resultN.innerHTML = number
    }
})
