window.addEventListener("load", () => {
    window.bookSite = {};
    bookSite.cardList = [];

    let username = localStorage.getItem("username");
    if (!username) {
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
    }

const tabs = document.getElementsByClassName('tab-item');
for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
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

document.getElementById("post-btn").addEventListener("click", () => {
    const timestamp = new Date();
    moment.locale('ja');
    const newPost = {
        userIcon: "./images/user.jpeg",
        userName: username,
        bookTitle: "人は話し方が9割",
        bookImg: "./images/book.jpg",
        evalutaion: 5,
        // goodIcon: "images/post.jpg",
        goodCount: 0,
        time: moment(timestamp).fromNow(),
    };
    bookSite.cardList.push(newPost);
    postCard(bookSite.cardList.length - 1);

    // document.getElementById("form").reset();
});

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

    // const goodIconEl = document.createElement("img");
    // goodIconEl.className = "card-good-icon"
    // goodIconEl.src = card.image;
    // goodEl.append(goodIconEl);

    const goodCountEl = document.createElement("div");
    goodCountEl.className = "good-count";
    goodEl.append(goodCountEl);
    underEl.append(goodEl);

    const timeEl = document.createElement("div");
    timeEl.className = "time";
    timeEl.innerHTML = card.time;
    underEl.append(timeEl);
    cardEl.append(underEl);

    containerEl.prepend(cardEl);
}

})