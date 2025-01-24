let buttons = document.querySelectorAll('.button')
let display = document.getElementById('display')
let esc = document.getElementById('esc')

function appendToDisplay(input){
    display.value += input
}

function Calculate(){
    try{
        display.value = eval(display.value)
    } catch(error){
        display.value = 'Ngaco Lu'
    }
}

function clearDisplay(){
    display.value = ''
}

function deleteDisplay(){
    display.value = display.value.toString().slice(0,-1)
}

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        Calculate()
    }
    else if(e.key === 'Delete'){
        clearDisplay()
    }
    else if(e.key === 'Backspace'){
        deleteDisplay()
    }
    else if(e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9'){
        appendToDisplay(e.key)
    }
    else if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '.'){
        appendToDisplay(e.key)
    }

    if(e.key === 'Escape'){
        esc.click()
    }
})
