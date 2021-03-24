

const bar = document.querySelector('.bars-solid');
const res = document.querySelector('.nav-res');
const close = document.querySelector('.close-solid');

bar.addEventListener('click', ()=>{
    res.classList.toggle('nav-view');
    bar.classList.toggle('bars-solid-none');
})

close.addEventListener('click',()=>{
    res.classList.toggle('nav-view');
    bar.classList.toggle('bars-solid-none');
})