let score = 0;
let clickCount = 0;
const scoreDisplay = document.getElementById('score');
const clickImage = document.getElementById('clickImage');
let user = prompt("Введите ваш никнейм:");

function updateScore() {
    scoreDisplay.textContent = `Счет: ${score}`;
}

function saveScore() {
    localStorage.setItem('score', score);
    localStorage.setItem('user', user);
}

function loadScore() {
    if (localStorage.getItem('score')) {
        score = parseInt(localStorage.getItem('score'));
    }
    if (localStorage.getItem('user')) {
        user = localStorage.getItem('user');
    }
}

loadScore();

clickImage.addEventListener('click', () => {
    clickCount++;
    switch (true) {
        case clickCount <= 100:
            score++;
            break;
        case clickCount <= 5100:
            score += 10;
            break;
        default:
            score += 20;
            break;
    }
    clickImage.src = clickCount >= 5101 ? 'image3.png' : clickCount >= 101 ? 'image2.png' : 'image1.png';
    updateScore();
    saveScore();
});

updateScore();