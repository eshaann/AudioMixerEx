var tabList = {};
var debug;
let tabs = chrome.tabs.query({"currentWindow":true, "audible":true}, updateTabList);


function updateSliders () {
    for (i = 0; i < Object.keys(tabList).length; i ++) {
        listContainer = document.getElementById("sliders");
        var divToAdd = document.createElement("div");
        divToAdd.setAttribute("id", "slider_" + toString(tabList[Object.keys(tabList)[i]]));

        listContainer.appendChild(divToAdd);

        let name = "slider_" + toString(tabList[Object.keys(tabList)[i]]);

        // Create A Slider For Each Audible Tab
        var slider = document.createElement("input");
        slider.setAttribute("type", "range");
        slider.setAttribute("min", "1");
        slider.setAttribute("max", "100");
        slider.setAttribute("value", "50");
        slider.setAttribute("class", "slider");


        document.getElementById(name).appendChild(slider);
    }
}

function updateTabList (inpList) {
    console.log("Orig keys: " + Object.keys(tabList));
    for (i = 0; i < inpList.length; i ++) {
        console.log("ID: " + inpList[i].id);
        // if (Object.keys(inpList).indexOf(toString(inpList[i].id)) < 0) {
            
        // }

        tabList[toString(inpList[i].id)] = 100;

    }

    console.log("Final keys: " + Object.keys(tabList));

    updateSliders();
}
