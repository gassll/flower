//слайдер с отзывами
const slides = document.querySelectorAll('.swiper-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Функция отображения нужных карточек
function showSlides() {
    const isMobile = window.innerWidth <= 903;

    slides.forEach((slide, index) => {
        slide.classList.remove('active');

        if (isMobile) {
            // Показываем только одну карточку
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        } else {
            // Показываем две карточки
            if (index === currentIndex || index === currentIndex + 1) {
                slide.classList.add('active');
            }
        }
    });
}

// Кнопка "Назад"
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlides();
    }
});

// Кнопка "Вперёд"
nextBtn.addEventListener('click', () => {
    const isMobile = window.innerWidth <= 903;
    const maxIndex = isMobile ? slides.length - 1 : slides.length - 2;

    if (currentIndex < maxIndex) {
        currentIndex++;
        showSlides();
    }
});

// Обновление при изменении ширины экрана
window.addEventListener('resize', () => {
    // Сброс индекса, если он вышел за пределы после ресайза
    const isMobile = window.innerWidth <= 903;
    const maxIndex = isMobile ? slides.length - 1 : slides.length - 2;

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    showSlides();
});

// Показываем первые карточки при загрузке
showSlides();

//бургер меню
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    burger.addEventListener('click', function () {
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
    });


    //отзывы обратная связь
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            console.log("Форма отправлена");
            event.preventDefault();

            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;

            alert("Сообщение отправлено!");
            this.reset();
        });
    }
});

//мобильное меню,закрытие при нажатии на ссылки 
document.querySelectorAll('.mobile-menu-content a').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});

document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.add('active');
});

document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.remove('active');
});


//текст на картинке в начале
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.text-block p');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    textElements.forEach(el => observer.observe(el));
});



// const modal = document.getElementById("myModal");
// const btn = document.getElementById("openModal");
// const span = document.getElementById("closeModal");

// btn.onclick = function () {
//     modal.style.display = "block";
// }

// span.onclick = function () {
//     modal.style.display = "none";
// }

// window.onclick = function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// }