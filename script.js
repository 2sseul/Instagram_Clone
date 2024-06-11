let idValue = false;
let pwdValue = false;

let id = document.getElementById('id');
let pwd = document.getElementById('pwd');

id.addEventListener('focusout', ()=>{
    if(id.value.length > 0){
        idValue = true;
    }else{
        idValue = false;
    }
})

pwd.addEventListener('focusout', ()=>{
    if(pwd.value.length > 0){
        pwdValue = true;
    }else{
        pwdValue = false;
    }
})

let loginBtn = document.querySelector('.submit');
let loginForm = document.querySelector('.login-form');
loginBtn.addEventListener('click', (e)=>{
    if(idValue && pwdValue){
        loginForm.submit();
    }else{
        e.preventDefault();
        alert("회원정보를 확인하세요");
        id.focus();
    }
})

//다크모드 CSS스타일 변경
let darkmode = document.querySelector('.darkmode');
let instaLogo = document.querySelector('.insta-logo');
let changeTxt = document.querySelectorAll('.change');
let darkmodeOn = true;
let backgrondColor = document.querySelector('body');
let loginBox = document.querySelector('.login')
let joinBox = document.querySelector('.join');

darkmode.addEventListener('click', ()=> {
    if(!darkmodeOn){
        darkmodeOn = true;
        instaLogo.src = "./assets/images/logo-light.png";
        for(let i=0; i<changeTxt.length; i++){
            changeTxt[i].style.color='#000';
            changeTxt[i].style.color='#000';
        }
        backgrondColor.style.backgroundColor='#F2F2F2';
        backgrondColor.style.transition='0.8s';
        loginBox.style.backgroundColor='#fff';
        loginBox.style.transition='0.8s';
        joinBox.style.backgroundColor='#fff';
        joinBox.style.transition='0.8s';
    }else{
        darkmodeOn = false;
        instaLogo.src = "./assets/images/logo-dark.png";
        for(let i=0; i<changeTxt.length; i++){
            changeTxt[i].style.color='#f1f3f5';
        }
        backgrondColor.style.backgroundColor='#121319';
        backgrondColor.style.transition='0.8s';
        loginBox.style.backgroundColor='#1b1d25';
        loginBox.style.transition='0.8s';
        joinBox.style.backgroundColor='#1b1d25';
        joinBox.style.transition='0.8s';

    }
})