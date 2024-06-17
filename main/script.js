//main UI for each문으로 반복해서 생성해주기
let userImgArr = [`../assets/images/potato.jpeg`, `../assets/images/user.jpeg`];
let userNameArr = ['yejin', 'iseul'];
let userPlaceArr = ['Seoul, Korea', 'Daejeon'];
let mainImgArr = [`../assets/images/멍.jpeg`, `../assets/images/멍1.jpeg`];
let likeCntArr = ['2,305', '3,402'];
let commentArr = [[['iseul','귀여워요'],['minju','멍멍'],['hello','귀엽다']], [['iseul2','귀여워요'],['minju2','멍멍'],['hello2','귀엽다']]];
let commentDateArr = ['2시간 전', '4시간 전'];
let templateList = [];
let commentTemplateArr = [];
let commentTemplateList = [];
let template2List = [];
let template = `
            <div class="main-content">
                <div class="users">
                    <img src="{{user_img_src}}" alt="" class="users-img">
                    <div class="users-inform">
                        <p class="user-name">{{user_name}}</p>
                        <p class="place">{{user_place}}</p>
                    </div>
                    <i class="fa-solid fa-ellipsis fa-regular"></i>
                </div>
                <div class="main-pic">
                    <img src="{{main_img_src}}" alt="" class="pic">
                </div>
                <div class="main-icons">
                    <div>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                    </div>
                    <i class="fa-regular fa-bookmark"></i>
                </div>
                <div class="heart-cnt">좋아요 {{like_cnt}}개</div>
                <div class="comment">
            `
let commentTemplate = `
                    <div class="main-comment">
                        <div class="comment-user-name">{{comment_user_name}}</div>
                        <p class="comments">{{comments}}</p>
                        <i class="fa-regular fa-heart comment-heart"></i>
                    </div>
            `
let template2 = `
                </div>
                <p class="content-date">
                    {{comment_date}}
                </p>
                <div class="comment-form">
                    <input type="text" value="댓글달기...">
                    <button class="comment-btn">게시</button>
                </div>
                </div>`
let main = document.querySelector('.main');
let usersImg = document.querySelector('.users-img');
let mainContent = document.querySelector('.main-content');

function imgOnload(){
    for(let i=0; i<commentArr.length; i++){
        commentTemplateList[i] = '';
    }
    for(let i=0; i<commentArr.length; i++){
        for(let j=0; j<commentArr[0].length; j++){
            commentTemplate = commentTemplate.replace('{{comment_user_name}}', commentArr[i][j][0])
                                            .replace('{{comments}}', commentArr[i][j][1]);
            commentTemplateList[i] += commentTemplate;    
            commentTemplate = commentTemplate.replace(commentArr[i][j][0], '{{comment_user_name}}')
                                            .replace(commentArr[i][j][1], '{{comments}}');
        }
    }
    for(let i=0; i<userImgArr.length; i++){
        template = template.replace('{{user_img_src}}', userImgArr[i])
                            .replace('{{user_name}}', userNameArr[i])
                            .replace('{{user_place}}', userPlaceArr[i])
                            .replace('{{main_img_src}}', mainImgArr[i])
                            .replace('{{like_cnt}}', likeCntArr[i]);
        templateList[i] = template;
        template = template.replace(userImgArr[i], '{{user_img_src}}')
                            .replace(userNameArr[i], '{{user_name}}')
                            .replace(userPlaceArr[i], '{{user_place}}')
                            .replace(mainImgArr[i], '{{main_img_src}}')
                            .replace(likeCntArr[i], '{{like_cnt}}');
        templateList[i] += commentTemplateList[i];
        template2 = template2.replace('{{comment_date}}',commentDateArr[i]);
        templateList[i] += template2;
        template2 = template2.replace(commentDateArr[i], '{{comment_date}}');
    }
    templateList.forEach((arr) => {
        main.innerHTML += arr;
    })
    template2List.forEach((arr) => {
        console.log(arr);
        mainContent.innerHTML += arr;
    })
}

window.onload = imgOnload();

//sidebar내 추천 친구들 정보 반복해주기
let sidebar = document.querySelector('.sidebar');
function recommendLoad(){
    
}

//삭제 버튼 토글 뜨게 만들어야함.
let mainToggle = document.querySelector('.fa-ellipsis');
let isOpen = false;

mainToggle.addEventListener('click', ()=>{
    if(!isOpen){
        isOpen = true;
    }else{
        isOpen = false;
    }
})
//댓글 달면 등록되게 만들기.


// 이미지 zoom 하는 코드 짜기 
