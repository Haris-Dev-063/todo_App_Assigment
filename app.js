var inp = document.getElementById("inp");
function addItems() {
  if (inp.value !== "") {
    var ul = document.getElementById("ul");
    var li = document.createElement("li");

    var li_Text = document.createTextNode(inp.value);

    li.setAttribute("class", "li");

    var div = document.createElement("div");

    var divText = document.createTextNode("");

    div.setAttribute("class", "div-1");

    div.appendChild(divText);

    var delete_Btn = document.createElement("button");

    var delete_Btn_Text = document.createTextNode("Delete");

    delete_Btn.setAttribute("class", "del_btn");

    delete_Btn.setAttribute("onclick", "del_Btn_Handle(this)");

    delete_Btn.appendChild(delete_Btn_Text);

    var edit_Btn = document.createElement("button");

    var edit_Btn_Text = document.createTextNode("Edit");

    edit_Btn.setAttribute("class", "btn");

    edit_Btn.appendChild(edit_Btn_Text);

    edit_Btn.setAttribute("onclick", "edit_Btn_Handle(this)");

    li.appendChild(li_Text);

    div.appendChild(delete_Btn);

    div.appendChild(edit_Btn);

    li.appendChild(div);

    ul.appendChild(li);

    inp.value = "";
  } else {
    alert("Please enter some text");
  }
}

function del_Btn_Handle(x) {
  x.parentNode.parentNode.remove();
}

function edit_Btn_Handle(e) {
  var update = prompt("Enter A Updated value!");

  e.parentNode.parentNode.firstChild.nodeValue = update;
}
