var headerTitle = document.getElementById("header-title");
var headerTitle = document.getElementById("main-header");

var titlemew = document.getElementsByClassName("title");
titlemew[0].style.fontWeight = "bold";
titlemew[0].style.color = "green";

console.log(titlemew);

headerTitle.style.borderBottom = "solid 3px #000";

// var items = document.getElementsByClassName("list-group-item");
// items[0].style.fontWeight = "bold";
// items[1].style.fontWeight = "bold";
// items[2].style.fontWeight = "bold";
// items[3].style.fontWeight = "bold";

// items[2].style.backgroundColor = "green";

//get elements by tag name
var li = document.getElementsByTagName("li");

console.log(li);

li[0].style.fontWeight = "bold";
li[1].style.fontWeight = "bold";
li[2].style.fontWeight = "bold";
li[3].style.fontWeight = "bold";

//li[2].style.backgroundColor = "green";

for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}

var item = document.querySelector(".list-group-item:nth-child(2)");
item.style.backgroundColor = "green";

var nextitem = document.querySelector(".list-group-item:nth-child(3)");
nextitem.style.visibility = "hidden";
