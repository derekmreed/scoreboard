// Home score counter
let homeScore = 0
console.log(homeScore)

let homeScoreStr = document.getElementById("home-score-value")

function homePlusOne() {
    homeScore += 1
    console.log(homeScore)
    
    homeScoreStr.textContent = homeScore
}

function homePlusTwo() {
    homeScore += 2
    console.log(homeScore)
    
    homeScoreStr.textContent = homeScore
}

function homePlusThree() {
    homeScore += 3
    console.log(homeScore)
    
    homeScoreStr.textContent = homeScore
}

function resetHomeScore() {
    homeScore = 0

    homeScoreStr.textContent = homeScore
}

//Guest score counter

let guestScore = 0
console.log(guestScore)

let guestScoreStr = document.getElementById("guest-score-value")

function guestPlusOne() {
    guestScore += 1
    console.log(guestScore)
    
    guestScoreStr.textContent = guestScore
}

function guestPlusTwo() {
    guestScore += 2
    console.log(guestScore)
    
    guestScoreStr.textContent = guestScore
}

function guestPlusThree() {
    guestScore += 3
    console.log(guestScore)
    
    guestScoreStr.textContent = guestScore
}

function resetGuestScore() {
    guestScore = 0

    guestScoreStr.textContent = guestScore
}