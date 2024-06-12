/* 下拉 */
$(document).ready(function () {
    $('.dropdown-toggle').click(function () {
        $(this).next('.dropdown-menu').toggle();
    });

    $(document).click(function (e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });
});



/* 加減 */
var num = 1;//宣告邊數num 變數值為1

$(".minus").click(
    function () {
        num = num - 1;
        $(".num").text(num);

    }
);

$(".add").click(
    function () {
        num = num + 1;
        $(".num").text(num);
    }
);


/* top */
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


