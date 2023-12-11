const sliders = document.querySelectorAll('.sliders_container .sliders_line .slider_item_content');
const sliderLine = document.querySelector('.sliders_line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.sliders_container').offsetWidth;
    sliderLine.style.width = width * sliders.length + 'px';

    sliders.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.prev').addEventListener('click', () => {
    count--;
    if (count < 0){
        count = sliders.length - 1;
    }
    rollSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    count++;
    if (count >= sliders.length){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
