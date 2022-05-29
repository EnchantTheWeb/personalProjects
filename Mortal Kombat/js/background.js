const scorp = document.querySelector('#scorpionImage')
const kit = document.querySelector('#kitanaImage')
const raid = document.querySelector('#raidenImage')
const smok = document.querySelector('#smokeImage')

document.querySelector('#scorpion').addEventListener('click', scorpion)
document.querySelector('#kitana').addEventListener('click', kitana)
document.querySelector('#raiden').addEventListener('click', raiden)
document.querySelector('#smoke').addEventListener('click', smoke)

function scorpion(){
    scorp.classList.toggle('hidden')
    kit.classList.add('hidden')
    raid.classList.add('hidden')
    smok.classList.add('hidden')
}
function kitana(){
    scorp.classList.add('hidden')
    kit.classList.toggle('hidden')
    raid.classList.add('hidden')
    smok.classList.add('hidden')
}
function raiden(){
    scorp.classList.add('hidden')
    kit.classList.add('hidden')
    raid.classList.toggle('hidden')
    smok.classList.add('hidden')
}
function smoke(){
    scorp.classList.add('hidden')
    kit.classList.add('hidden')
    raid.classList.add('hidden')
    smok.classList.toggle('hidden')
}






















































// const scorp = document.querySelector('#scorpionImage')
// const kit = document.querySelector('#kitanaImage')
// const raid = document.querySelector('#raidenImage')
// const smok = document.querySelector('#smokeImage')

// document.querySelector('#scorpion').addEventListener('click', scorpion)
// document.querySelector('#kitana').addEventListener('click', kitana)
// document.querySelector('#raiden').addEventListener('click', raiden)
// document.querySelector('#smoke').addEventListener('click', smoke)

// function scorpion(){
//     scorp.classList.toggle('hidden')
//     kit.classList.add('hidden')
//     raid.classList.add('hidden')
//     smok.classList.add('hidden')
// }
// function kitana(){
//     scorp.classList.add('hidden')
//     kit.classList.toggle('hidden')
//     raid.classList.add('hidden')
//     smok.classList.add('hidden')
// }
// function raiden(){
//     scorp.classList.add('hidden')
//     kit.classList.add('hidden')
//     raid.classList.toggle('hidden')
//     smok.classList.add('hidden')
// }
// function smoke(){
//     scorp.classList.add('hidden')
//     kit.classList.add('hidden')
//     raid.classList.add('hidden')
//     smok.classList.toggle('hidden')
// }
