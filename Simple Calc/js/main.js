let total = 0

document.querySelector('#link').addEventListener('click', addOne)
document.querySelector('#mario').addEventListener('click', addTwo)
document.querySelector('#skyrim').addEventListener('click', addThree)
document.querySelector('#zelda').addEventListener('click', addFour)
document.querySelector('#yoshi').addEventListener('click', addFive)
document.querySelector('#oblivion').addEventListener('click', addSix)
document.querySelector('#epona').addEventListener('click', addSeven)
document.querySelector('#luigi').addEventListener('click', addEight)
document.querySelector('#online').addEventListener('click', addNine)
document.querySelector('#midna').addEventListener('click', addTen)
document.querySelector('#toadstool').addEventListener('click', addTwenty)
document.querySelector('#zero').addEventListener('click', makeZero)

function addOne(){
    total = total + 1
    document.querySelector('#results').innerText = total
}
function addTwo(){
    total = total + 2
    document.querySelector('#results').innerText = total
}
function addThree(){
    total = total + 3
    document.querySelector('#results').innerText = total
}
function addFour(){
    total = total + 4
    document.querySelector('#results').innerText = total
}
function addFive(){
    total = total + 5
    document.querySelector('#results').innerText = total
}
function addSix(){
    total = total + 6
    document.querySelector('#results').innerText = total
}
function addSeven(){
    total = total + 7
    document.querySelector('#results').innerText = total
}
function addEight(){
    total = total + 8
    document.querySelector('#results').innerText = total
}
function addNine(){
    total = total + 9
    document.querySelector('#results').innerText = total
}
function addTen(){
    total = total + 10
    document.querySelector('#results').innerText = total
}
function addTwenty(){
    total = total + 20
    document.querySelector('#results').innerText = total
}
function makeZero(){
    total = 0
    document.querySelector('#results').innerText = total
}