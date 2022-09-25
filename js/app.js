window.addEventListener("load", () => {
    let username = localStorage.getItem("username");
    if (!username) {
        username = window.prompt("What is your name?");
        localStorage.setItem("username", username);
    }

    window.bookSite = {};
    bookSite.cardList = [];

    const tab = new Tab();
    const modal = new Modal();
    const tweet = new Tweet();

    tab.setSwitchTabsEvent();
    modal.setFormModalOpenBtnEvent();
    modal.setFormModalCloseBtnEvent();
    modal.setForModalCloseOutsideEvent();
    modal.setConfirmModalBtnEvent();
    modal.setConfirmModalCancelBtnEvent();
    tweet.setEvaluateBookEvent();
    setTweetEvent(username);

    function setTweetEvent(username) {
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
            tweet.ResetBookEvaluation();
            modal.formModal.style.display = "none";
            modal.confirmModal.style.display = "none";
            document.getElementById("post-form").reset();
            return false;
        });
    }
})