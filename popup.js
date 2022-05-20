var tabList = {};
let tabs = chrome.tabs.query({"currentWindow":true}, updateTabList);


function updateSliders () {
    for (i = 0; i < tabList.keys().length; i ++) {
        listContainer = document.getElementById("sliders");
        var divToAdd = document.createElement("div");
        divToAdd.setAttribute("id", "slider_" + toString(tabList[tabList.keys()[i]]));

        listContainer.appendChild(divToAdd);

        let name = "slider_" + toString(tabList[tabList.keys()[i]]);

        // Create A Slider For Each Audible Tab
        var slider = document.createElement("input");
        slider.setAttribute("type", "slider");
        slider.setAttribute("min", "1");
        slider.setAttribute("max", "100");
        slider.setAttribute("value", "50");
        slider.setAttribute("class", "slider");

        tabList.push("")

        document.getElementById(name).appendChild(slider);
    }
}

function updateTabList (tabList) {
    for (i = 0; i < tabList.length; i ++) {
        if (tabList.keys().indexOf(tabList[i].id) >= 0) {

            tabList.push({
                key: tabList[i].id,
                value: 100
            });

        }
    }

    updateSliders();
}
