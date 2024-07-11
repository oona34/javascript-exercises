let container = document.querySelector("body");

let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

let deleteItem = function() {
    let listItem = this.parentNode;
    listItem.remove();
}

let addItem = function() {
    let inputField = document.querySelector("input");
    alert(inputField.textContent);
    if(inputField.textContent == null || inputField.textContent != "") {
        return;
    }

    let newItem = inputField.textContent;
    inputField.textContent = "";

    let listItem = document.createElement("li");
    let listSpan = document.createElement("span");
    let listBtn = document.createElement("button");

    listItem.append(listSpan, listBtn);
    listSpan.textContent = newItem;
    listBtn.textContent = "Delete";
    ul.append(listItem);

    listBtn.addEventListener("click", deleteItem);

    inputField.focus();
}

btn.addEventListener("click", addItem);