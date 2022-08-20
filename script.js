let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputFiled = document.getElementById('inputFiled');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputFiled.value;
    toDoContainer.appendChild(paragraph);
    inputFiled.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    });
});


