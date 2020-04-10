var navicon = document.querySelector('.nav-icon');
var nav = document.querySelector('.navbar');
var navLink = document.querySelectorAll('.nav-link');
var mainCont = document.querySelector('.main-container');


// nav.classList.add('hide');
// document.addEventListener('DOMContentLoaded',()=>{
    // nav.classList.add('hide');
    nav.style.width = "0%";
// })

var count = 1;

navicon.addEventListener('click',()=>{
    count++;
    if(count%2 === 0){
        // nav.classList.add('show');
        // nav.classList.remove('hide');
        nav.style.width = "100%";

        navicon.classList.add('is-active')
        document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,0.4)'
    }else{
        // nav.classList.remove('show');
        // nav.classList.add('hide');
        nav.style.width = "0%";
        navicon.classList.remove('is-active')
    }
});

navLink.forEach((event)=>{
    event.addEventListener('click',()=>{
        // nav.classList.add('hide');
        // nav.classList.remove('show');
        nav.style.width = "0%";
        navicon.classList.remove('is-active')
        count--;
    })
});

document.addEventListener('keydown',(e)=>{
    switch(e.keyCode){
        case 38:
            mainCont.scrollBy(0,-10)
            break;
        case 40:
            mainCont.scrollBy(0,10)
            break
    }
});


