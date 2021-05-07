// Create a "deleteElement" button and append it to each list item
var myNodelist = document.getElementsByTagName("Li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "deleteElement";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a deleteElement button to hide the current list item
var deleteListElement = document.getElementsByClassName("deleteElement");
var i;
for (i = 0; i < deleteListElement.length; i++) {
  deleteListElement[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Listeye boş eleman eklenemez!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "deleteElement";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < deleteListElement.length; i++) {
    deleteListElement[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

//Delete all ul items when clicking on the trash icon button
function deleteAll() {
  var inputValue = document.getElementById("myInput").value;
  if(myNodelist.length === 0) {
    document.getElementById("myInput").value = "";
    alert("Liste zaten boş!");
  } else {
    document.getElementById("myInput").value = "";
    var myList = document.getElementById('myUL');
    myList.innerHTML = '';
  }
}
