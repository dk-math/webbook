const tabs = document.getElementsByClassName('tab_item');
for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
}

function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");
    this.classList.add("active");
    document.getElementsByClassName("is-show")[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("tab_content")[index].classList.add('is-show');
};