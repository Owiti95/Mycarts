const inputField = document.getElementById("item-box");
const list = document.getElementById("list-item");
const clearList = document.getElementById('clearList');
const addButton = document.querySelector("button");



addButton.addEventListener("click", addItem)
function addItem(){
    if(inputField.value === ''){
        alert("type an item");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputField.value;
        console.log(list);
        list.appendChild(li);
      
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "delete";
        li.appendChild(deleteButton);

        const purchaseButton = document.createElement("button")
        purchaseButton.textContent = "purchased";
        li.appendChild(purchaseButton)


        deleteButton.addEventListener("click", function() {
            li.remove();
            deleteButton.remove();
            purchaseButton.remove(); 
        });

        purchaseButton.addEventListener("click", function(){
            if(li.style.textDecoration === "line-through") {
                li.style.textDecoration = "none";
            }else{
                li.style.textDecoration = "line-through";
            }
        });
         
    inputField.value = "";
}
}

clearList.addEventListener("click", function() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
});
