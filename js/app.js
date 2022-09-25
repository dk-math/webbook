window.addEventListener("load", () => {
    const tweet = new Tweet();
    const tab = new Tab();

    window.bookSite = {};
    bookSite.cardList = [];

    let username = localStorage.getItem("username");
    if (!username) {
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
    }

    tab.setSwitchTabs();

    const stars = document.getElementsByClassName("star");
    for(let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("click", evaluateBook, false);
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
            goodCount: 0,
            time: moment(timestamp).fromNow(),
        };
        bookSite.cardList.unshift(newPost);
        tweet.postCard(0);
        formModal.style.display = "none";
        confirmModal.style.display = "none";
        document.getElementById("post-form").reset();
        return false;
    });
})