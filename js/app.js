window.bookSite = {};
bookSite.newsfeed = [];

const tabs = document.getElementsByClassName('tab-item');
for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
}

// document.getElementById("btn").addEventListener("click", () => {
//     const newPost = {
//       friend: username,
//       text: document.getElementById("text-input").value,
//       feeling: document.getElementById("feeling-select").value,
//       image: "images/icon/my-icon.jpg",
//       timestamp: "posted " + moment(Date()).fromNow(),
//     };
//     const friend = newPost.friend;
//     bacefook.friends[friend] = [];
//     bacefook.friends[friend].push(newPost);
//     bacefook.newsfeed.push(newPost);
//     post(bacefook.newsfeed.length - 1);

//     document.getElementById("form").reset();
//     feelSum();
//   });

function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");
    this.classList.add("active");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("is-show")[0].classList.remove('is-show');
    document.getElementsByClassName("tab-content")[index].classList.add('is-show');
};

const containerEl = document.querySelector("#tweet"); 
function postCard(index) {
    const card = bookSite.cardList[index];

    const cardEl = document.createElement("div");
    cardEl.className = "card";

    const iconEl = document.createElement("img");
    iconEl.className = "icon"
    iconEl.src = card.image;
    cardEl.prepend(iconEl);

    const nameEl = document.createElement("div");
    nameEl.className = "name"
    cardEl.prepend(nameEl);

    containerEl.prepend(cardEl);

}