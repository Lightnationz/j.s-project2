const cartbagbtn = document.querySelector('.cartbagbtn')
cartbagbtn.addEventListener('', (e)=>{
    e.target.innerHTML = e.type
console.log(e.type);

    navbar.classList.remove('akpu')
    navbar.classList.toggle('shownav')
})