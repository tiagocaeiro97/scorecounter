// create 3 functions for each team with add 1, add 2, add 3;

let countHomeEl = document.getElementById ("countHome")
let countGuestEl = document.getElementById ("countGuest")

let score = 0
let score2 = 0

//HOME
function addHome1 () {
    countHomeEl.textContent = score += 1
};

function addHome2 () {
    countHomeEl.textContent = score += 2
};

function addHome3 () {
    countHomeEl.textContent = score += 3
};

//GUESS
function addGuest1 () {
    countGuestEl.textContent = score2 += 1   
};

function addGuest2 () {
    countGuestEl.textContent = score2 += 2
};

function addGuest3 () {
    countGuestEl.textContent = score2 += 3
};
