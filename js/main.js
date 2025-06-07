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

//top sales показать еще
const showMoreButton = document.getElementById('showMore');
showMoreButton.addEventListener('click', () => {
    // Сколько товаров показывать за клик:
    const itemsToShow = 6;
    const hiddenItems = document.querySelectorAll('#catalog .hidden');

    for (let i = 0; i < itemsToShow && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }

    // Если больше нет скрытых товаров — скрываем кнопку
    if (document.querySelectorAll('#catalog .hidden').length === 0) {
        showMoreButton.style.display = 'none';
    }
});

//букеты модальное окно
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.querySelector('.modal__close');

    // Здесь можно задать описание для каждого букета (можно расширять)
    const descriptions = {
        'Белые розы': 'Состав: белые розы 31 шт.<br>Оформление: без упаковочной бумаги, перевязан атласной лентой.',
        'Букет из роз': 'Состав: красные розы, кустовые розовые розы, светло-розовые розы, альстромерии белые, гиперикум.<br>Оформление: упаковочная бумага.',
        'Букет из роз и лилий': 'Состав: розы, альстромерии, декоративная зелень.<br>Оформление: плетёная корзинка.',
        'Букет из красных кустовых роз': 'Состав: 19 алых роз, декоративная зелень.<br>Оформление: подарочная упаковка, атласный бант.',
        'Кремово-жёлтые лилии': 'Состав: кремовые лилии, декоративная зелень.<br>Оформление: без упаковки.',
        'Букет из красных роз и хризантем': 'Состав: красные розы, хризантемы, зелень.<br>Оформление: подарочная упаковка.',
        'Букет из пионовидных роз': 'Состав: пионовидные розы - 31 шт.<br>Оформление: подарочная упаковка.',
        'Букет из роз и альстромерии': 'Состав: французская роза, кустовая роза, альстромерия, зелень. <br>Оформление: подарочная упаковка.',
        'Букет из кремовых роз': 'Состав: кремовая роза, кремовая кустовая роза, альстромерия и экзотика. <br>Оформление: подарочная упаковка.',
        'Букет "Симфония цвета" ': 'Состав:  роза Кантри Блюз, роза кустовая, гвоздика сорт, эвкалипт, рускус. <br>Оформление: подарочная упаковка.',
        'Монобукет синие Гиацинты': 'Состав:  Гиацинты - 25 шт. <br>Оформление: подарочная упаковка.',
        'Букет "Пленительные Моменты" ': 'Состав:  Гвоздики, Гиперикум, Роза. <br>Оформление: подарочная упаковка.'
    };

    // Навешиваем клик на все "Подробнее"
    document.querySelectorAll('.card__item-bottom').forEach(btn => {
        btn.addEventListener('click', function () {
            const card = this.closest('.card__item');
            const imgSrc = card.querySelector('img').src;
            const title = card.querySelector('.card__item-title').dataset.title;

            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalDescription.innerHTML = descriptions[title] || 'Описание отсутствует.';

            modal.style.display = 'flex';
        });
    });

    // Закрытие модалки
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие по клику вне контента
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});