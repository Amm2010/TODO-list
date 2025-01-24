var notesArray = [];
const notesInput = document.getElementById("notesInput");
const itemCount = document.getElementById("itemCount");
const listDiv = document.getElementById("listDiv");

function addNote() {
    const newNote = notesInput.value;
    if (newNote == "") {
        alert("enter your note")
    } else {
        notesArray.push(newNote)
        notesInput.value = "";
        itemCount.innerText = notesArray.length;
        console.log(notesArray);     
    }    
}

function showList(){

    listDiv.innerHTML = "";

    for (let index = 0; index < notesArray.length; index++) {
        const element = notesArray[index];
        
        const newLi = document.createElement("li");

        newLi.innerText = element;

            newLi.className = "theList";

        listDiv.appendChild(newLi);
    }    
}

function hide() {
    listDiv.innerHTML = "";
}

function deleteNote() {
    notesArray = [];   
    hide();
    itemCount.innerText = notesArray.length;
}