let emailValue = false;
let pwdValue = false;
let nameValue = false;
let userNameValue = false;

let email = document.getElementById('email');
let named = document.getElementById('name');
let userName = document.getElementById('username');
let pwd = document.getElementById('pwd');

email.addEventListener('focusout', ()=>{
    if(email.value.length > 4){
        emailValue = true;
    }else{
        emailValue = false;
    }
    if(emailValue && pwdValue && nameValue && userNameValue){
        joinBtn.style.opacity = "1";
        joinBtn.style.cursor = "pointer"
    }else{
        joinBtn.style.opacity = "0.6";
        joinBtn.style.cursor = "default"
    }
})

named.addEventListener('keyup', ()=>{
    if(named.value.length > 4){
        nameValue = true;
    }else{
        nameValue = false;
    }
    if(emailValue && pwdValue && nameValue && userNameValue){
        joinBtn.style.opacity = "1";
        joinBtn.style.cursor = "pointer"
    }else{
        joinBtn.style.opacity = "0.6";
        joinBtn.style.cursor = "default"
    }
})

userName.addEventListener('keyup', ()=>{
    if(userName.value.length > 4){
        userNameValue = true;
    }else{
        userNameValue = false;
    }
    if(emailValue && pwdValue && nameValue && userNameValue){
        joinBtn.style.opacity = "1";
        joinBtn.style.cursor = "pointer"
    }else{
        joinBtn.style.opacity = "0.6";
        joinBtn.style.cursor = "default"
    }
})

let pwdBtn = document.querySelector('.pwd-btn');

pwd.addEventListener('keyup', ()=>{
    if(pwd.value.length > 4){
        pwdValue = true;
        pwdBtn.style.visibility = "visible";
    }else{
        pwdValue = false;
        pwdBtnSee = false;
        pwdBtn.style.visibility = "hidden";
    }
    if(emailValue && pwdValue && nameValue && userNameValue){
        joinBtn.style.opacity = "1";
        joinBtn.style.cursor = "pointer"
    }else{
        joinBtn.style.opacity = "0.6";
        joinBtn.style.cursor = "default"

    }
})

let pwdBtnSee = false;

pwdBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!pwdBtnSee){
        pwdBtnSee = true;
        pwd.setAttribute("type", "text");
        pwdBtn.innerHTML = '숨기기';
    }else{
        pwdBtnSee = false;
        pwd.setAttribute("type", "password");
        pwdBtn.innerHTML = '비밀번호 표시하기';
    }
})

let joinBtn = document.querySelector('.submit');

let joinForm = document.querySelector('.join-form');
joinBtn.addEventListener('click', (e)=>{
    if(emailValue && pwdValue && nameValue && userNameValue){
        joinForm.submit();
    }else{
        e.preventDefault();
        alert("회원정보를 확인하세요");
        email.focus();
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
        darkmode.innerHTML = 'Darkmode';
        instaLogo.src = "../assets/images/logo-light.png";
        for(let i=0; i<changeTxt.length; i++){
            changeTxt[i].style.color='#000';
            changeTxt[i].style.color='#000';
        }
        backgrondColor.style.backgroundColor='#F2F2F2';
        backgrondColor.style.transition='0.6s';
        loginBox.style.backgroundColor='#fff';
        loginBox.style.transition='0.6s';
        joinBox.style.backgroundColor='#fff';
        joinBox.style.transition='0.6s';
    }else{
        darkmodeOn = false;
        darkmode.innerHTML = 'Lightmode';
        instaLogo.src = "../assets/images/logo-dark.png";
        for(let i=0; i<changeTxt.length; i++){
            changeTxt[i].style.color='#f1f3f5';
        }
        backgrondColor.style.backgroundColor='#121319';
        backgrondColor.style.transition='0.6s';
        loginBox.style.backgroundColor='#1b1d25';
        loginBox.style.transition='0.6s';
        joinBox.style.backgroundColor='#1b1d25';
        joinBox.style.transition='0.6s';

    }
})