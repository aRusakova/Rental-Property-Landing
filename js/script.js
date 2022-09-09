$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 30,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        responsive:{ 0:{ items:1}, 600:{ items:2}}
    })
});

const likes = document.querySelectorAll("#like");
likes.forEach(like => like.addEventListener("click", function () {
    like.classList.toggle("activeLike");
}));

function changeSelect() {
    let selects = document.querySelectorAll(".select-block__select");
    let values = document.querySelectorAll(".select-block__value");
    selects.forEach((select, index) => select.addEventListener('change', function () {
        values[index].textContent = select.value;
    }))
};

changeSelect();

let buttons = document.querySelector(".buttons");
let searchButtons = document.querySelectorAll(".search-button");
let blocks = document.querySelectorAll(".block");

buttons.addEventListener('click', function(e) {
    const id = e.target.id;
    if (!id) return;
    for (let i=0; i < searchButtons.length; i++) {
        if (searchButtons[i].id === id) {
            searchButtons[i].classList.add('button_active');
            blocks[i].classList.add('block_active');
        } else {
            searchButtons[i].classList.remove('button_active');
            blocks[i].classList.remove('block_active');
        }
    }
});




        




