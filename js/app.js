const tabs = document.getElementsByClassName('tab');
for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
}

function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");
    this.classList.add("active");
};