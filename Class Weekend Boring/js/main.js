document.querySelector('#submit').addEventListener('click', check)

function check(){
    const day = document.querySelector('#day').value.toLowerCase();

    if(day === 'saturday' || day === 'sunday'){
        alert('Sleeping In!!!')
    }else if(day === 'tuesday' || day === 'thursday'){
        alert('Learnin With Leon!!!')
    }else{
        alert('Practice Makes Perfect!!!')
    }
}

























































// document.querySelector('#submit').addEventListener('click', check)

// function check(){

//     const day = document.querySelector('#day').value.toLowerCase();

//     if(day === 'tuesday' || day === 'thursday'){
//        alert('Learn With Leon!!!')
//     }else if(day === 'saturday' || day === 'sunday'){
//         alert('Sleeping In!!!')
//     }else{
//        alert('Practice Makes Perfect!!!')
//     }
// }