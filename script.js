let counterh = document.getElementById("counterh")
let counterg = document.getElementById("counterg")
let btnaddOneHome = document.getElementById("one-btn")
let btn2 = document.getElementById("one")
let btnAddTwoHome = document.getElementById("two-btn")
let btn4 = document.getElementById("two")
let btn5 = document.getElementById("three-btn")
let btn6 = document.getElementById("three")
let newGamebtn = document.getElementById("newGame-btn")
let counter1 = 0
let counter2 = 0
function addOneHome() {
  counter1 += 1
  counterh.innerText = counter1
}
function addTwoHome() {
  counter1 += 2
  counterh.innerText = counter1
}
function addThreeHome() {
  counter1 += 3
  counterh.innerText = counter1
}
function addOneGuest() {
  counter2 += 1
  counterg.innerText = counter2
}
function addTwoGuest() {
  counter2 += 2
  counterg.innerText = counter2
}
function addThreeGuest() {
  counter2 += 3
  counterg.innerText = counter2
}
function newGame() {
  alert("New game started!")
  counter1 = 0
  counter2 = 0
  counterh.innerText = counter1
  counterg.innerText = counter2
}
btnaddOneHome.addEventListener("click", addOneHome)
btnAddTwoHome.addEventListener("click", addTwoHome)
btn5.addEventListener("click", addThreeHome)
btn2.addEventListener("click", addOneGuest)
btn4.addEventListener("click", addTwoGuest)
btn6.addEventListener("click", addThreeGuest)
newGamebtn.addEventListener("click", newGame)
