var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//add item
function addItem(e) {
  e.preventDefault();

  //   console.log(1);

  // get input value
  var newItem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";
  //   console.log(li);

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create a delete button element

  var delbutton = document.createElement("button");

  //add classes to delbutton

  delbutton.className = "btn btn-danger btn-sm float-right delete";

  //append text node
  delbutton.appendChild(document.createTextNode("X"));

  //append to button
  li.appendChild(delbutton);

  //append li to list
  itemList.appendChild(li);

  //add and edit button
  var edibutton = document.createElement("button");

  //add classes to edibutton

  edibutton.className = "btn btn-danger btn-sm float-right edit";

  //append text node
  edibutton.appendChild(document.createTextNode("#"));

  //append to button
  li.appendChild(edibutton);

  //append li to list
  itemList.appendChild(li);
}

function removeItem(e) {
  //console.log('1');

  if (e.target.classList.contains("delete")) {
    //console.log(1);
    if (confirm("Are You Sure")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
