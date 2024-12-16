let firstCard = 6
let secondCard = 15
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//another way to get element from the dom the query since its more dynamic have to be specific with ot 
// let sumEl = document.querySelector("#sum-el") //# means id  class means dot
let cardsEl = document.getElementById("cards-el")


function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "sum: " + sum
    if (sum <=  20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "Udoyile.You're out of the game! 😭"
        isAlive = false
    } 
    messageEl.textContent = message
}
 
