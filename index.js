
//scrllo
document.addEventListener('DOMContentLoaded', () => {
    animate_arrow();
});


function animate_arrow() {
    let timeline = new TimelineMax({ repeat: -1 });
    let arrow = document.getElementById("arrow-button");

    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "1rem", ease: Power0.easeNone }));
    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "2rem", ease: Power0.easeNone }));
    scroll_arrow();
}

function scroll_arrow() {
    let arrow = document.getElementById("arrow-button");
    arrow.addEventListener("click", () => {
        TweenLite.to(window, 1.5, { scrollTo: "#gallery" });  //最新消息的id
    })

};



//TOP按鈕
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;}