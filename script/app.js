const openToggle = document.getElementById('open-toggle');
const closeToggle = document.getElementById('close-toggle');
const navBAR = document.getElementById('left-bar');



if(openToggle){
    openToggle.addEventListener('click', ()=> {
        navBAR.classList.add('active');
    });
}

if(closeToggle){
    closeToggle.addEventListener('click', ()=> {
        navBAR.classList.remove('active');
    })
}