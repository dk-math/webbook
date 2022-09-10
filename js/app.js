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
    document.getElementsByClassName("active")[0].classList.remove("active");
    this.classList.add("active");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("is-show")[0].classList.remove('is-show');
    document.getElementsByClassName("tab-content")[index].classList.add('is-show');
};

document.getElementById("post-btn").addEventListener("click", () => {
    const newPost = {
        // userIcon: "images/post.jpg",
        userName: username,
        bookTitle: "",
        // bookImg: "images/post.jpg",
        // goodIcon: "images/post.jpg",
        goodCount: 0,
        time: "posted " + moment(Date()).fromNow(),
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

    // const userIconEl = document.createElement("img");
    // userIconEl.className = "user-icon"
    // userIconEl.src = card.image;
    // cardEl.prepend(userIconEl);

    const userNameEl = document.createElement("div");
    userNameEl.className = "user-name";
    userNameEl.innerHTML = username;
    cardEl.prepend(userNameEl);

    const bookTitleEl = document.createElement("div");
    bookTitleEl.className = "book-title";
    cardEl.prepend(bookTitleEl);

    // const bookImgEl = document.createElement("img");
    // bookImgEl.className = "book-image"
    // bookImgEl.src = card.image;
    // cardEl.prepend(bookImgEl);

    // const goodIconEl = document.createElement("img");
    // goodIconEl.className = "good-icon"
    // goodIconEl.src = card.image;
    // cardEl.prepend(goodIconEl);

    const goodCountEl = document.createElement("div");
    goodCountEl.className = "good-count";
    cardEl.prepend(goodCountEl);

    const timeEl = document.createElement("div");
    timeEl.className = "time";
    cardEl.prepend(timeEl);

    containerEl.prepend(cardEl);
}

})