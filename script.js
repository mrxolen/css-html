let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let newsImage1 = document.querySelector('#news-image1'),
    newsImage2 = document.querySelector('#news-image2'),
    newsImage3 = document.querySelector('#news-image3');
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
};

newsImage1.addEventListener('mouseenter', function() {
    newsImage1.width = 500;
    newsImage1.height = 500;
    newsImage1.style.zIndex = 999; 
    newsImage1.style.cursor = 'pointer';
});

newsImage1.addEventListener('mouseout', function() {
    newsImage1.width = 314;
    newsImage1.height = 314;
    newsImage1.style.zIndex = 0; 
});

newsImage2.addEventListener('mouseenter', function() {
    newsImage2.width = 500;
    newsImage2.height = 500;
    newsImage2.style.zIndex = 999; 
    newsImage2.style.cursor = 'pointer';
});

newsImage2.addEventListener('mouseout', function() {
    newsImage2.width = 314;
    newsImage2.height = 314;
    newsImage2.style.zIndex = 0; 
});
    
newsImage3.addEventListener('mouseenter', function() {
    newsImage3.width = 500;
    newsImage3.height = 500;
    newsImage3.style.zIndex = 999; 
    newsImage3.style.cursor = 'pointer';
});

newsImage3.addEventListener('mouseout', function() {
    newsImage3.width = 314;
    newsImage3.height = 314;
    newsImage3.style.zIndex = 0; 
});

function SearchPrice() {
    const TextInput = document.querySelector('#text-input');
    if (TextInput.value == 'Iphone') {
        alert('Iphone 13 256 gb: 999€')
    } else if (TextInput.value == 'Ipad') {
        alert('Ipad 64 gb (2021) : 399,01€')
    } else if (TextInput.value == 'MacBook' || TextInput.value == 'Macbook') {
        alert('MacBook M1 1TB (2021) : 1290,89€')
    } else {
        alert('Nezināms pieprasījums!')
    }
};

document.querySelector('.form-image').addEventListener('mouseenter', function() {
    document.querySelector('.form-image').style.cursor = 'pointer';
})