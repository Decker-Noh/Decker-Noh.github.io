const loginInput = document.querySelector(".login input");
const loginForm = document.querySelector(".login");
const loginContext = document.querySelector(".login h2");

loginInit();
function loginEvent(event) {
    event.preventDefault();
    localStorage.setItem("Login", loginInput.value);
    loginInput.value = "";
    loginInit();
    LoginCheck();
    Todoinit();
}

function loginInit() {
    if (localStorage.getItem("Login") === null) {
        loginContext.innerText = "로그인을 해주세요";
    } else {
        loginContext.innerText = `환영해요 ${localStorage.getItem("Login")}`;
        loginInput.placeholder = "다른 아이디로 로그인";
    }
}
loginForm.addEventListener("submit", loginEvent);
