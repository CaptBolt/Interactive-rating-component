let rating =0
let out

const container  = document.getElementById("main-container")
const submitBtn =  document.getElementById("submit-btn")

function totalRating(n){
    rating = n
}

submitBtn.addEventListener("click",function(){
    let out=""
    out +=`
    <img id="thankyou-img" src="images/illustration-thank-you.svg" >
    <p id="tq-p"> You selected Add rating here ${rating} out of 5</p>
    <h1 id="head-text" class="tq-h1">Thank you!</h1>
    <p id="p-text" class="tq-h1"> We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</p>
    `
    container.innerHTML = out
})

