function allowDrop(ev){
   ev.preventDefault();
}

// drag event get all the data of that particular product and put it down in the target id
function drag(ev){
   ev.dataTransfer.setData("text",ev.target.id)
}
// in this text we got all the data ,whatever data we are dragged all the data in the text comming inside "dataTransfer" and then going inside 'data' and we append this 'data' variable to the target 

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}