// Get the Nav Bar Button 
const nav_button = document.querySelector(".fa-bars");
const sub_nav = document.querySelector(".nav_bar_div");

nav_button.addEventListener("click", function() {
    sub_nav.classList.toggle("active");
});
// For NavBar Scroll Behaviour
var lastScrollTop = 0;
var navbar = document.querySelector('nav');
var threshold = 200;
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > threshold) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Window Scroll Behaviour
const sr = ScrollReveal({
    distance: "80px",
    duration : 2700,
    reset : true
});

sr.reveal("#about2_container",{delay:350,origin:"bottom"});
sr.reveal(".row1",{delay:300,origin:"right"});
sr.reveal(".row2",{delay:300,origin:"left"});
sr.reveal(".row3",{delay:300,origin:"right"});
sr.reveal("#project_div",{delay:300,origin:"bottom"} );

// For Scroller Div
document.addEventListener("DOMContentLoaded", function () {
    let imgScroll = document.querySelector('#project_div');
    let arrowBtn = document.querySelectorAll('#arrowBtn>div');
    arrowBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            const firstDivWidth = imgScroll.querySelector(".project_subDiv").offsetWidth;
            imgScroll.scrollLeft += btn.id === "leftBtn" ? -firstDivWidth - 83 : firstDivWidth + 83;
        });
    });
});

// Contact Button
const form = document.querySelector("form");
const contactBtn = document.getElementById("send");
contactBtn.addEventListener("click",function(){
    form.reset();
});


// For Smoth scroll behaviour when clicked on the project, about, contact from nav bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    