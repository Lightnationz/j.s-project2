const cartbagbtn = document.querySelector('.cartbagbtn')
const navbar = document.querySelector('.navbar')

const nav = document.querySelector('.nav')
const closenav = document.querySelector('.closenav')

cartbagbtn.addEventListener('click', (e)=>{
    // e.target.innerHTML = e.type
// console.log(e.type);

    navbar.classList.toggle('shownav')
    // navbar.classList.remove('shownav')
})
closenav.addEventListener('click', (B)=>{
    navbar.classList.remove('shownav')
})