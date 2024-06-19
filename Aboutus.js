

//倫播  
/* $(document).ready(function () {
    $('.feature-box').slick({
        slidesToShow: 4, //顯示4張
        slidesToScroll: 1,  //一次滾1張
        autoplay: true,
        autoplaySpeed: 1000, //1秒1次
        arrows: false,
        dots: false,
        pauseOnHover: false,
    });
});
 */
/* jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind:true,
    margin: 10,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    direction: 'ltr' 
  }); */
  jQuery(document).ready(function($) {
    "use strict";
    $('#carousel').owlCarousel( {
            loop: true,
            center: true,
            items: 3,
            margin: 10,
            autoplay: true,
            dots:true,
        nav:false,
            autoplayTimeout: 3000,
            smartSpeed: 300,
         /*  navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], */
         responsive: {
                0: {
                    items: 1
                },
                820: {
                    items: 2
                },
                1280: {
                    items: 3
                }
            } 
        });
    });

    /* $('#carousel').on('changed.owl.carousel', function(event) {
        var items = event.item.count; // 轮播项的总数
        var currentItem = event.item.index; // 当前轮播项的索引
        var visibleItems = event.page.size; // 可见的轮播项数量
    
        // 如果当前轮播项接近最后一个且可见轮播项数量大于等于轮播项总数，则重新开始循环
        if (currentItem >= items - visibleItems) {
            $('#carousel').trigger('to.owl.carousel', [0, 0, true]); // 跳转到第一个轮播项并立即开始新的循环
        }
    }); */












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


