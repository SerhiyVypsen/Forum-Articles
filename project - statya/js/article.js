let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let submitButton = document.querySelector('.submit-button');

function commentSubmit(evt) {
    evt.preventDefault();
    let liElement = document.createElement('li');
    liElement.classList.add('user-comment');
    liElement.textContent = evt.target.commentField.value;
    commentList.appendChild(liElement);
    evt.target.commentField.value = "";
}
commentForm.addEventListener('submit', commentSubmit);




let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
function addHeart() {
    heart.classList.toggle('added');
    if (heart.classList.contains('added') === true) {
        likesNumber.textContent ++;
    } else {
        likesNumber.textContent --;
    }
}
heart.addEventListener('click', addHeart);
