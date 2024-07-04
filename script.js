var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})

var h4all = document.querySelectorAll("nav li")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.backgroundColor="#ff004f"
    })
})


document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-links");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function() {
            const tab = this.getAttribute("data-tab");
            
            if (this.classList.contains("active-link")) {
                return;
            }
            // Remove active class from all tab links
            tabLinks.forEach(link => link.classList.remove("active-link"));

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove("active-content"));

            // Add active class to the clicked tab link
            this.classList.add("active-link");

            // Show the corresponding tab content
            document.getElementById(tab).classList.add("active-content");
        });
    });
});

var item = document.querySelectorAll(".service-item")
item.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        item.style.backgroundColor = '#ff004f';
        item.style.transform = 'translateY(-20px)';
    })
    elem.addEventListener("mouseleave",function(){
        item.style.backgroundColor = '';
        item.style.transform = 'translateY(0)';
    })
})

document.addEventListener('DOMContentLoaded', (event) => {
    const works = document.querySelectorAll('.work');

    works.forEach(work => {
        work.addEventListener('mouseover', () => {
            const img = work.querySelector('img');
            const layer = work.querySelector('.layer');
            img.style.transition = 'transform 1.5s ease';
            // Apply zoom effect on image
            img.style.transform = 'scale(1.3)';
            layer.style.transition = 'bottom 1.5s ease';
            // Move the layer up to become visible
            layer.style.bottom = '0';
        });

        work.addEventListener('mouseout', () => {
            const img = work.querySelector('img');
            const layer = work.querySelector('.layer');
            
            // Reset image zoom
            img.style.transform = 'scale(1)';
            
            // Hide the layer
            layer.style.bottom = '-100%';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.querySelector('.open-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const menu = document.querySelector('nav .menu');

    openMenuBtn.addEventListener('click', function() {
        menu.style.right = '0';
    });

    closeMenuBtn.addEventListener('click', function() {
        menu.style.right = '-500px';
    });
});
function firstPageAnim(){
    var timeline  = gsap.timeline();
    // navigation animation
    timeline.from("nav",{
        y : '-10',
        opacity : 0,
        duration :1.5,
        ease : Expo.easeInOut,
        stagger:.1
    })
    // element animation movement to top or into dev
    // stagger cause delay in each element block
    .to(".boundingelem",{
        y : 0,
        duration :1.5,
        delay:-1,
        ease : Expo.easeInOut,
        stagger : .2
    })
}
firstPageAnim();


// document.addEventListener('DOMContentLoaded', (event) => {
//     const downloadBtn = document.querySelector('.btn2');

//     downloadBtn.addEventListener('mouseover', () => {
//         downloadBtn.style.fontSize = '17px'; // Increase font size on hover
//     });

//     downloadBtn.addEventListener('mouseout', () => {
//         downloadBtn.style.fontSize = '15px'; // Reset font size when not hovering
//     });
// });
