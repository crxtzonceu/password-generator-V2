import { char } from './charArray.js'
const lengthEl = document.getElementById("length")
const warningEl = document.getElementById("warning")
const passOneEl = document.getElementById("pass-one")
const passTwoEl = document.getElementById("pass-two")
const passThreeEl = document.getElementById("pass-three")
const passFourEl = document.getElementById("pass-four")
const hiddenEl = document.querySelector(".hide")
const copyEl = document.getElementById("copy-clipboard")
document.getElementById("add-btn").addEventListener('click', addLength)
document.getElementById("minus-btn").addEventListener('click', minusLength)
document.getElementById("generate-btn").addEventListener('click', renderPassword)
let length = 8

// Render on the DOM
function renderPassword() {
  passOneEl.textContent = getRandomChar()
  passTwoEl.textContent = getRandomChar()
  passThreeEl.textContent = getRandomChar()
  passFourEl.textContent = getRandomChar()
  // Make the hidden div visible after rendering first time
  hiddenEl.style.visibility = "visible"
  // Reset the text every generate button was clicked
  copyEl.textContent = "Click password to copy"
}

// Return a random character from the characters array based on the length count
function getRandomChar() {
  let rng = ""
  for(let i = 0; i < length;i++) {
    rng += char[Math.floor(Math.random() * char.length)]
  }
  return rng
}

// Functions and Event Listeners
function minusLength() {
  if(length > 5) {
    length -= 1
    lengthEl.textContent = length
  } else {
    warningEl.textContent = "Minimum of 5 characters only!"
  }
}

function addLength() {
  if(length < 20) {
    length += 1
    lengthEl.textContent = length
  } else {
    warningEl.textContent = "Maximum of 20 characters only!"
  }
}


// Copy to Clipboard features
passOneEl.addEventListener('click', () => {
  navigator.clipboard.writeText(passOneEl.innerText)
  copyEl.textContent = "Copied!"
})
passTwoEl.addEventListener('click', () => {
  navigator.clipboard.writeText(passTwoEl.innerText)
  copyEl.textContent = "Copied!"
})
passThreeEl.addEventListener('click', () => { 
  navigator.clipboard.writeText(passThreeEl.innerText)
  copyEl.textContent = "Copied!"
})
passFourEl.addEventListener('click', () => {
  navigator.clipboard.writeText(passFourEl.innerText)
  copyEl.textContent = "Copied!"
})