
function init(){
    windowResize();
}

function windowResize(){
    let el = document.querySelector('.navbar_menu-toggle');
    window.addEventListener('resize',()=>{
        if(window.innerWidth > 900){
            if(el.classList.contains("active")){
                el.classList.remove("active")
            }
        };
    })
}

function toggleMenu(e){
    let el = document.querySelector('.navbar_menu-toggle');
    el.classList.toggle('active')
}