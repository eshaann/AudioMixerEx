var volArray = [];

function renderSliders(){
    var querys = {};
    let tabs = chrome.tabs.query({"currentWindow":true, "audible":true},querys, function(tabs){
        console.log(tabs.length);
        for(i = 0; i<tabs.length; i++){
            //go through tabs and make sliders
            //querys[i] = tablist[id]
            var slider = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("min", "1");
            slider.setAttribute("max", "100");
            slider.setAttribute("value", "50");
            slider.setAttribute("class", "slider");
            document.getElementById("sliders").append(slider);
        }
    });
}

$(document).ready(function(){
    renderSliders();
    //on click, adjust volume of tab at certain number to slider.value
    //chrome.runtime.sendMessage({purpose: "changeLevel", tabNumber: querys[i], volumeLevel:  slider.value});

})

//add in new method if user opens new audio tabs
