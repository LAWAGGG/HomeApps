let inpNumber = document.getElementById('inpNumber')
let time = document.getElementById('time')
let isTimePlaying = false
let countDown
let audio =new Audio()
let esc = document.getElementById('esc')

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        esc.click()
        e.preventDefault()
    }
})

function startCountdown(){
    if(inpNumber.value == ''){
        time.textContent = 'Gamau :P'
        return
    }
    if(!isTimePlaying){
        let timeValue = parseInt(inpNumber.value)+1
        isTimePlaying = true
        countDown = setInterval(() =>{
            timeValue--
            if(timeValue < 60){
                time.textContent = timeValue
            }else{
                let m = Math.floor(timeValue/60)
                let s = timeValue%60
                m = m <10 ? '0' + m : m
                s = s < 10? '0' + s : s
                time.textContent = `${m}:${s}`
            }
            if(timeValue == 0){
                clearInterval(countDown)
                audio.src ='/Apps/CountDown/Taco.mp3'
                audio.play()
                resetCountdown()
                time.textContent = 'Time Is Up!'
            }
        },1000)
    }
}

function stopCountdown(){
    isTimePlaying = false
    clearInterval(countDown)
}

function resetCountdown(){
    stopCountdown()
    inpNumber.value = ''
    time.textContent = '00:00'
}