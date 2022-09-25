class Tweet {
    constructor() {
        this.goodNum = 0;
    }

    postCard(index) {
        const containerEl = document.querySelector("#all-tweet"); 
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
        goodIconEl.className = `fa-regular fa-thumbs-up ${this.goodNum}`;
        this.goodNum ++;
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
        goods[0].addEventListener("click", this.addGoodCount, false);
    }

    setEvaluateBookEvent() {
        const stars = document.getElementsByClassName("star");
        for(let i = 0; i < stars.length; i++) {
            stars[i].addEventListener("click", function() {
                document.getElementsByClassName("active-star")[0].classList.remove("active-star");
                this.classList.add("active-star");
            }, false);
        }
    }

    ResetBookEvaluation() {
        document.getElementsByClassName("active-star")[0].classList.remove("active-star");
        const zeroStarEl = document.getElementById("star0");
        zeroStarEl.classList.add("active-star");
    }

    addGoodCount() {
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
}

window.Tweet = Tweet;