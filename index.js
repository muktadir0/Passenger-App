var count = 0;
var countEl = document.getElementById("count-el");
var saveEl = document.getElementById("save-el");
function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    var countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
}