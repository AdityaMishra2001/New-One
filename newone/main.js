var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItems);

//add item
function addItem(e) {
  e.preventDefault();
  //   console.log(1);

  // get input value
  var newItem = document.getElementById("item").value;
  var detail = document.getElementById("description").value;
  var final = newItem + " " + detail;

  //storing input to local storage
  localStorage.setItem("item input", final);

  //create new li element
  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";
  //   console.log(li);

  //add text node with input value
  li.appendChild(document.createTextNode(final));

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
  edibutton.appendChild(document.createTextNode("EDIT"));

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

//filter items
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //console.log(text);

  //get all li
  var items = itemList.getElementsByTagName("li");

  // convert to array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    //var desName = item.childNodes[1].textContent;
    //console.log(desName);
    //console.log(itemName);
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
