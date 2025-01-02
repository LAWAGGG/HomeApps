let time = document.getElementById('time');
let count = 0;
let isTimePlay = false
let timer

function startStopwatch() {
    if (!isTimePlay) {
        isTimePlay = true
        timer = setInterval(() => {
            count++
            let h = Math.floor(count/3600)
            let m = Math.floor((count%3600)/60)
            let s = count%60
            h = h < 10 ? '0' + h : h
            m = m < 10 ? '0' + m : m
            s = s < 10? '0' + s : s
            time.innerText = `${h}:${m}:${s}`  
        },1000)
    }

    
}

function stopStopwatch(){
    isTimePlay = false
    clearInterval(timer)
}

function resetStopwatch(){
    stopStopwatch()
    count = 0
    time.innerText = '00:00:00'
}


