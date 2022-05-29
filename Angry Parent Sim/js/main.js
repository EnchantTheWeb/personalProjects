const calms = document.querySelector('#calm')
const upsets = document.querySelector('#upset')
const angrys = document.querySelector('#angry')

document.querySelector('#oneName').addEventListener('click', calm)
document.querySelector('#twoName').addEventListener('click', upset)
document.querySelector('#fullName').addEventListener('click', angry)

function calm(){
    calms.classList.toggle('hidden')
    upsets.classList.add('hidden')
    angrys.classList.add('hidden')
}
function upset(){
    calms.classList.add('hidden')
    upsets.classList.toggle('hidden')
    angrys.classList.add('hidden')
}
function angry(){
    calms.classList.add('hidden')
    upsets.classList.add('hidden')
    angrys.classList.toggle('hidden')
}

const synth1 = window.speechSynthesis;
document.querySelector('#oneName').addEventListener('click', calmy)
const synth2 = window.speechSynthesis;
document.querySelector('#twoName').addEventListener('click', upsety)
const synth3 = window.speechSynthesis;
document.querySelector('#fullName').addEventListener('click', angryy)

function calmy(){
    const nice = "I'm Asking You Nicely."    

    document.querySelector('#placeToYell').innerText = nice    

    let askThis = new SpeechSynthesisUtterance(nice);    

    synth1.speak(askThis);    
}
function upsety(){
    const warn = "I'm Warning You..."

    document.querySelector('#placeToYell').innerText = warn

    let sayThis = new SpeechSynthesisUtterance(warn);

    synth2.speak(sayThis);
}
function angryy(){
    const yell = "Alright, You Asked For It!!!"

    document.querySelector('#placeToYell').innerText = yell

    let yellThis = new SpeechSynthesisUtterance(yell)

    synth3.speak(yellThis)
}