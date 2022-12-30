const toggleButton = document.querySelector('#burger');
const listSpan = document.querySelector('.listSpan');

console.log(listSpan);

function collapse(){
    listSpan.classList.toggle('active');
}