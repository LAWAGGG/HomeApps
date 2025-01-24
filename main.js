
let ThemeBtn = document.getElementById('ThemeBtn')
let wrapper = document.getElementById('wrapper')
let  AppList = document.getElementById('AppList')
let AppNav = document.getElementById('AppNav')
let body = document.getElementById('body')
let icon1 = document.getElementById('icon1')
let icon = document.getElementById('icon')

ThemeBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    wrapper.classList.toggle('dark')
    AppList.classList.toggle('dark')
    AppNav.classList.toggle('dark')
    body.classList.toggle('dark')
    icon1.classList.toggle('hide')
    icon.classList.toggle('hide')
})


let Search = document.getElementById('Search')
Search.addEventListener('input', function(){
    let search = Search.value.toLowerCase()
    let appCards = document.querySelectorAll('.appCard')

    appCards.forEach(Card =>{
        let AppLink = Card.querySelector('.detailApp a')
        if(AppLink){
            const appTitle = AppLink.textContent.toLowerCase()
            if(appTitle.includes(search)){
                Card.style.display = 'flex'
            }
            else{
                Card.style.display = 'none'
            }
        }
    })
})

document.querySelector('.searchApp form').addEventListener('submit', (e) => {
    e.preventDefault()
})


let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
setInterval(()=>{
    let currentTime = new Date()
    hrs.innerHTML = currentTime.getHours()
    min.innerHTML = currentTime.getMinutes()

    if(hrs.innerHTML < 10){
        hrs.innerHTML = '0' + currentTime.getHours()
    }
    if(min.innerHTML < 10){
        min.innerHTML = '0' + currentTime.getMinutes()
    }
},1000)

