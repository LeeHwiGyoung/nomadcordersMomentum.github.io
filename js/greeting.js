const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //string만 저장하고 싶을 때 종종 대문자로 표기
const autologin = document.getElementById("auto-login")
const USERNAME_KEY = "username";

let users = [];
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //   1 ) 백틱 ` `기호로 시작해야함 ${} 변수를 이 안에 넣어야함 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    tododiv.classList.remove(HIDDEN_CLASSNAME);
}


function onLoginSubmit(event){
    event.preventDefault(); //브라우저의 기본동작을 막아줌 여기선 submit 된 후 새로고침 되는 것
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    users.push(`id:${username}`);
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem("users" , users);
    paintGreeting(username);
}

function click_autologin(event){
    autologin.toggleAttribute("checked")
    console.dir(autologin);
}

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    tododiv.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.addEventListener("change", click_autologin)
}else{
    paintGreeting(savedUserName);
}

/*function handClickLink(event){
    event.preventDefault(); // 링크로 이동하는 걸 막음
}

link.addEventListener("click", handClickLink);

*/

