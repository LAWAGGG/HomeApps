let btnAdd = document.getElementById('btnAdd');
let Input = document.getElementById('Input');

let esc = document.getElementById('esc')
document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        esc.click()
        e.preventDefault()
    }
})

btnAdd.addEventListener('click',()=>{
    Input.classList.toggle('hide')
})

let createBtn = document.getElementById('createBtn')
let List = document.getElementById('List')
let template = document.getElementById('template')
let row = 1

function createList(){
    let input = document.getElementById('inpToDo').value
    if(input === '') return;
   
    let clonedElement = document.getElementById('template').cloneNode(true)
    clonedElement.removeAttribute('id');
    clonedElement.style.display = 'flex';

    clonedElement.querySelector('span').textContent = input
    clonedElement.querySelector('p').textContent = row++ + '.)'

    List.appendChild(clonedElement)

     document.getElementById('inpToDo').value = ''
}

function removeList(button){
    button.parentElement.parentElement.remove()
}

window.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        createList()
        console.log('bisa gak nih?')
    }
})

let input = document.getElementById('inpToDo')

input.addEventListener('input',()=>{
    if(input.value == ''){
        createBtn.disabled = true
    } else {
        createBtn.disabled = false
    }
})