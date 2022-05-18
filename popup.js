let tabs = chrome.tabs.query({"currentWindow":true}, updateTabList);
var tabList;

function updateTabList (tabList) {
    for (i = 0; i < tabList.length; i ++) {
        addListItem(tabList[i], i);
    }
    tabList = this.tabList;
}

function addListItem (tab, number) {
    listContainer = document.getElementById("sliders");
    var divToAdd = document.createElement("div");
    divToAdd.setAttribute("id", "slider_" + toString(i));

    listContainer.appendChild(divToAdd);

    let name = "slider_" + toString(i);

    var slider = document.createElement("input");
    slider.setAttribute("type", "slider");
    slider.setAttribute("min", "1");
    slider.setAttribute("max", "100");
    slider.setAttribute("value", "50");
    slider.setAttribute("class", "slider");

    document.getElementById(name).appendChild(slider);
}
