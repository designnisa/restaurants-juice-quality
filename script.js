const list = document.querySelector('.navbar');
const btns = document.querySelector('.navbtns');
const abc = function(){
    list.classList.toggle('active');
}
btns.addEventListener('click',abc);