(function() {
    var body = document.body;
    var loginTab = document.querySelector('.log');
    var signupTab = document.querySelector('.sign');
    var loginContent = document.getElementById('login');
    var signupContent = document.getElementById('signup');
    
    // 初始化：預設顯示登入頁面，隱藏註冊頁面
    loginContent.style.display = 'block';
    signupContent.style.display = 'none';

    loginTab.addEventListener('click', function() {
        signupContent.style.display = 'none';
        loginContent.style.display = 'block';
    });

    signupTab.addEventListener('click', function() {
        loginContent.style.display = 'none';
        signupContent.style.display = 'block';
    });
})();



//TOP按鈕
// Get the button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

