//Стрілка яка при кліці повертає користувача вверх
const buttonUp = document.querySelector('.up-button');
function checkPage() {
    if (window.scrollY > 150) {
        buttonUp.classList.add('shown');
    } else {
        buttonUp.classList.remove('shown');
    }
}
window.addEventListener('scroll', checkPage);
function consoleTest() {
    window.scrollTo(0, 0)
}
buttonUp.addEventListener('click', consoleTest); 

//Кнопка що змінює тему сторінки на темну
const themeButton = document.querySelector('.theme-button');
const themeContainer = document.querySelector('.container');
const colorChange = document.querySelector('.about');
const themeArticle = document.querySelector('.articles');
const themeText = document.querySelector('h2');
const themeTriangle = document.querySelector('.triangle');
const themeArticles = document.querySelector('.article-card');
const themeArticles1 = document.querySelector('.article-card1');
const themeArticles2 = document.querySelector('.article-card2');
const themeArticles3 = document.querySelector('.article-card3');
const themeArticles4 = document.querySelector('.article-card4');
const themeArticles5 = document.querySelector('.article-card5');
const themeArticles6 = document.querySelector('.article-card6');
const themeArticles7 = document.querySelector('.article-card7');
const themeArticles8 = document.querySelector('.article-card8');
const themeArticles9 = document.querySelector('.article-card9');
const themeArticles10 = document.querySelector('.article-card10');
const themeForums = document.querySelector('.forums');
const themeSelect = document.querySelector('select');
const themeForu1 = document.querySelector('.foru1');
const themeForu2 = document.querySelector('.foru2');
const themeForu3 = document.querySelector('.foru3');
const themeForu4 = document.querySelector('.foru4');
const themeForu5 = document.querySelector('.foru5');
const themeForu6 = document.querySelector('.foru6');
const themeForu7 = document.querySelector('.foru7');
function addDark() {
    themeContainer.classList.toggle('dark-theme');
    colorChange.classList.toggle('change-color');
    themeArticle.classList.toggle('theme-article');
    themeText.classList.toggle('theme-text');
    themeTriangle.classList.toggle('theme-triangle');
    themeArticles.classList.toggle('theme-articles');
    themeArticles1.classList.toggle('theme-articles');
    themeArticles2.classList.toggle('theme-articles');
    themeArticles3.classList.toggle('theme-articles');
    themeArticles4.classList.toggle('theme-articles');
    themeArticles5.classList.toggle('theme-articles');
    themeArticles6.classList.toggle('theme-articles');
    themeArticles7.classList.toggle('theme-articles');
    themeArticles8.classList.toggle('theme-articles');
    themeArticles9.classList.toggle('theme-articles');
    themeArticles10.classList.toggle('theme-articles');
    themeSelect.classList.toggle('theme-select');
    themeForums.classList.toggle('forums-change');
    themeForu1.classList.toggle('foru-change');
    themeForu2.classList.toggle('foru-change');
    themeForu3.classList.toggle('foru-change');
    themeForu4.classList.toggle('foru-change');
    themeForu5.classList.toggle('foru-change');
    themeForu6.classList.toggle('foru-change');
    themeForu7.classList.toggle('foru-change');
}
themeButton.addEventListener('click', addDark);


//Дозвіл cookies
let cookieAgreement = document.querySelector('.cookies-agreement');
let cookieButton = document.querySelector('.cookies-button');
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);
cookieButton.addEventListener('click', function() {
    cookieAgreement.classList.add('cookies-agreement-closed');
    overlay.classList.remove('overlay');});


//Фільтр категорій
let articles = document.querySelectorAll(".article-card");
let filter = document.querySelector(".filter");
filter.addEventListener('change', () => {
    const selectedCategory = filter.value;
    articles.forEach(article => {
        const articleCategory = article.dataset.category;
        if (selectedCategory !== 'all' && articleCategory !== selectedCategory) {
            article.classList.add('hidden');
        } else {
            article.classList.remove('hidden');
        }
    });
});
