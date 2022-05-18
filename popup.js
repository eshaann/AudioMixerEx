var tabs = chrome.tabs.query({"currentWindow":true, "audible":true}, updateTabList);

function updateTabList (tabList) {
    for (i = 0; i < tabList.length; i ++) {
        addListItem(tabList[i]);
    }
}

function addListItem (tab) {
    list = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tab.index));
    list.appendChild(li);
}
