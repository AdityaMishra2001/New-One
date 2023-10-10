// var headerTitle = document.getElementById("header-title");
// var headerTitle = document.getElementById("main-header");

// var titlemew = document.getElementsByClassName("title");
// titlemew[0].style.fontWeight = "bold";
// titlemew[0].style.color = "green";

// console.log(titlemew);

// headerTitle.style.borderBottom = "solid 3px #000";

// var items = document.getElementsByClassName("list-group-item");
// items[0].style.fontWeight = "bold";
// items[1].style.fontWeight = "bold";
// items[2].style.fontWeight = "bold";
// items[3].style.fontWeight = "bold";

// items[2].style.backgroundColor = "green";

//get elements by tag name
// var li = document.getElementsByTagName("li");

// console.log(li);

// li[0].style.fontWeight = "bold";
// li[1].style.fontWeight = "bold";
// li[2].style.fontWeight = "bold";
// li[3].style.fontWeight = "bold";

//li[2].style.backgroundColor = "green";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// var item = document.querySelector(".list-group-item:nth-child(2)");
// item.style.backgroundColor = "green";

// var nextitem = document.querySelector(".list-group-item:nth-child(3)");
// nextitem.style.visibility = "hidden";

// var item = document.querySelectorAll("li:nth-child(odd)");
// //item.style.backgroundColor = "green";

// for (var i = 0; i < item.length; i++) {
//   item[i].style.backgroundColor = "green";
// }

var itemList = document.querySelector("#items");
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";

//parentElemet

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";

//child nodes

// console.log(itemList.childNodes);

//chldren
// console.log(itemList.children);
// console.log(itemList.childNodes[1]);
// itemList.children[1].style.backgroundColor ="green";

// //firstchild
// console.log(itemList.firstChild);

// //firstelement child
// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = "hello";

//last child
// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent = "hello";

//nextsbling
// console.log(itemList.nextSibling);

// //nextelement sibling
// console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.Color = "green";

//createlelment

//create div

var newDiv = document.createElement("div");

//add class
newDiv.className = "hello";

//add id
newDiv.id = "hello 1";

//add attribute
newDiv.setAttribute("title", "hello Div");

//crete a text node
var newDivText = document.createTextNode("HEllo word ");

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);


//add before item 1
newDiv.appendChild(newDivText);

var container1 = document.querySelector("div .list-group");
var h2 = document.querySelector("div li");

console.log(newDiv);

newDiv.style.fontSize = "30px";
container1.insertBefore(newDiv, h2);
