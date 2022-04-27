let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let dots = document.querySelectorAll('#first-dot, #second-dot, #third-dot'),
    dot1 = document.getElementById('first-dot'),
    dot2 = document.getElementById('second-dot'),
    dot3 = document.getElementById('third-dot');

document.querySelector('.slider-next').addEventListener('click', function() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    });
    offset = offset + 1200;
    if (offset > 2400) {
        offset = 0;
    };
    sliderLine.style.left = -offset + 'px';
    if (offset === 0) {
        dot1.classList.add('active');
    } else if (offset === 1200) {
        dot2.classList.add('active');
    } else {
        dot3.classList.add('active');
    }; 
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    });
    offset = offset - 1200;
    if (offset < 0) {
        offset = 2400;
    };
    sliderLine.style.left = -offset + 'px';
    if (offset === 0) {
        dot1.classList.add('active');
    } else if (offset === 1200) {
        dot2.classList.add('active');
    } else {
        dot3.classList.add('active');
    }; 
});

dot1.addEventListener('click', function() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
    dot1.classList.add('active')
    offset = 0
    sliderLine.style.left = -offset + 'px';
});

dot2.addEventListener('click', function() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
    dot2.classList.add('active')
    offset = 1200
    sliderLine.style.left = -offset + 'px';
});

dot3.addEventListener('click', function() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
    dot3.classList.add('active')
    offset = 2400
    sliderLine.style.left = -offset + 'px';
});

function AboutUs() {
    alert('Apple Inc. ir ASV daudznacionāla korporācija, kas izstrādā un pārdod sadzīves elektroniku, datoru programmatūras un personālos datorus.')
}