let darkmode = document.querySelector('.darkmode');
let instaLogo = document.querySelector('.insta-logo');
let changeTxt = document.querySelectorAll('.change');
let darkmodeOn = false;
let backgrondColor = document.querySelector('body');
let loginForm = document.querySelector('.login');
let joinForm = document.querySelector('.join');

darkmode.addEventListener('click', ()=> {
    if(!darkmodeOn){
        darkmodeOn = true;
        darkmode.classList.remove('is-on');
        instaLogo.src = "./assets/images/logo-light.png";
        for(let i=0; i<changeTxt.length; i++){
            changeTxt[i].style.color='#000';
            changeTxt[i].style.color='#000';
        }
        backgrondColor.style.backgroundColor='#F2F2F2';
        backgrondColor.style.transition='0.8s';
        loginForm.style.backgroundColor='#fff';
        loginForm.style.transition='0.8s';
        joinForm.style.backgroundColor='#fff';
        joinForm.style.transition='0.8s';
    }else{
        darkmodeOn = false;
        darkmode.classList.add('is-on');
        instaLogo.src = "./assets/images/logo-dark.png";
        for(let i=0; i<changeTxt.length; i++){
            changeTxt[i].style.color='#f1f3f5';
        }
        backgrondColor.style.backgroundColor='#121319';
        loginForm.style.backgroundColor='#1b1d25';
        joinForm.style.backgroundColor='#1b1d25';
    }
})