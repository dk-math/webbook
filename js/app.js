window.addEventListener("load", () => {
    window.bookSite = {};
    bookSite.cardList = [];

    let username = localStorage.getItem("username");
    if (!username) {
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
    }

const tabs = document.getElementsByClassName("tab-item");
for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabSwitch, false);
}

const stars = document.getElementsByClassName("star");
for(let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", evaluateBook, false);
}

function tabSwitch(){
    document.getElementsByClassName("active-item")[0].classList.remove("active-item");
    this.classList.add("active-item");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("active-space")[0].classList.remove("active-space");
    document.getElementsByClassName("header-space")[index].classList.add("active-space");
    document.getElementsByClassName("is-show")[0].classList.remove("is-show");
    document.getElementsByClassName("tab-content")[index].classList.add("is-show");
};

function goodSwitch() {
    const goods = document.getElementsByClassName("fa-thumbs-up");
    const arrayGoods = Array.prototype.slice.call(goods);
    const index = arrayGoods.indexOf(this);
    if (Array.prototype.slice.call(this.classList).indexOf("good-active") >= 0) {
        this.classList.remove("good-active");
        bookSite.cardList[index].goodCount --;
    } else {
        this.classList.add("good-active");
        bookSite.cardList[index].goodCount ++;
    }
    document.getElementsByClassName("good-count")[index].innerHTML = bookSite.cardList[index].goodCount;
}

function evaluateBook() {
    document.getElementsByClassName("active-star")[0].classList.remove("active-star");
    this.classList.add("active-star");
}

const formModal = document.getElementById("form-modal");
const formModalBtn = document.getElementById("form-modal-btn");
const formClose = formModal.getElementsByClassName("form-close")[0];
formModalBtn.onclick = function() {
    formModal.style.display = "block";
};

formClose.onclick = function() {
    formModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == formModal) {
    formModal.style.display = "none";
  }
};

const confirmModal = document.getElementById("demo-confirm-modal");
const confirmBtn = document.getElementById("post-confirm-btn");
const confirmCancel = confirmModal.getElementsByClassName("confirm-cancel")[0];
confirmBtn.onclick = function() {
    confirmModal.style.display = "block";
};

confirmCancel.onclick = function() {
    confirmModal.style.display = "none";
};

document.getElementById("confirm-btn").addEventListener("click", () => {
    const timestamp = new Date();
    moment.locale("ja");
    const newPost = {
        userIcon: "./images/user.jpeg",
        userName: username,
        bookTitle: document.getElementById("book-title").value,
        bookImg: "./images/book.jpg",
        evalutaion: document.getElementsByClassName("active-star")[0].value,
        comment: document.getElementById("book-comment").value,
        thoughts: document.getElementById("book-thoughts").value,
        goodCount: 0,
        time: moment(timestamp).fromNow(),
    };
    bookSite.cardList.unshift(newPost);
    postCard(0);
    formModal.style.display = "none";
    confirmModal.style.display = "none";
    document.getElementById("post-form").reset();
});

let goodNum = 0;
const containerEl = document.querySelector("#all-tweet"); 
function postCard(index) {
    const card = bookSite.cardList[index];

    const cardEl = document.createElement("div");
    cardEl.className = "card";

    const userEl = document.createElement("div");
    userEl.className ="card-user";

    const userIconEl = document.createElement("img");
    userIconEl.className = "card-user-icon"
    userIconEl.src = card.userIcon;
    userEl.append(userIconEl)

    const userNameEl = document.createElement("div");
    userNameEl.className = "card-user-name";
    userNameEl.innerHTML = card.userName;
    userEl.append(userNameEl);
    cardEl.append(userEl);

    const bookEl = document.createElement("div");
    bookEl.className = "card-book";

    const bookTitleEl = document.createElement("div");
    bookTitleEl.className = "card-book-title";
    bookTitleEl.innerHTML = card.bookTitle;
    bookEl.append(bookTitleEl);

    const bookImgEl = document.createElement("img");
    bookImgEl.className = "card-book-image"
    bookImgEl.src = card.bookImg;
    const bookImgBlockEl = document.createElement("div");
    bookImgBlockEl.className = "card-book-image-block";
    bookImgBlockEl.append(bookImgEl);
    bookEl.append(bookImgBlockEl);
    cardEl.append(bookEl);

    const bookEvalEl = document.createElement("div");
    bookEvalEl.className = "card-book-evaluation";

    const bookEvalIconEl = document.createElement("img");
    bookEvalIconEl.className = "card-book-evaluation-icon";
    bookEvalIconEl.src = "./images/star.png";
    bookEvalEl.append(bookEvalIconEl);

    const bookEvalPointEl = document.createElement("div");
    bookEvalPointEl.className = "card-book-evaluation-point";
    bookEvalPointEl.innerHTML = card.evalutaion;
    bookEvalEl.append(bookEvalPointEl);
    bookEl.append(bookEvalEl);

    const underEl = document.createElement("div");
    underEl.className = "card-under";

    const goodEl = document.createElement("div");
    goodEl.className = "card-good";

    const goodIconEl = document.createElement("i");
    goodIconEl.className = `fa-regular fa-thumbs-up ${goodNum}`;
    goodNum ++;
    goodEl.append(goodIconEl);

    const goodCountEl = document.createElement("div");
    goodCountEl.className = "good-count";
    goodCountEl.innerHTML = 0;
    goodEl.append(goodCountEl);
    underEl.append(goodEl);

    const timeEl = document.createElement("div");
    timeEl.className = "time";
    timeEl.innerHTML = card.time;
    underEl.append(timeEl);
    cardEl.append(underEl);

    containerEl.prepend(cardEl);

    const goods = document.getElementsByClassName("fa-thumbs-up");
    goods[0].addEventListener("click", goodSwitch, false);
}

})