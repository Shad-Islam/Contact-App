let nameInput = document.getElementById("nameInput");
let submitBtn = document.getElementById("submit-btn");
let emailInput = document.getElementById("emailInput");
let list = document.getElementById("list");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const information = {
    name: nameInput.value,
    email: emailInput.value,
  };

  console.log("Name:", information.name);
  console.log("Email:", information.email);

  addContact(information);
});

function addContact(info) {
  let li = document.createElement("li");

  li.innerHTML = `<div class="info">
   <h3 id="nameDisplay">${info.name}</h3>
   <h3 id="emailDisplay">${info.email}</h3>
 </div>
 <div class="btns">
   <button>Edit</button>
   <button onClick=deleteItem(this)>Delete</button>
 </div>`;

  list.appendChild(li);
}

function deleteItem(tag) {
  tag.parentElement.parentElement.remove();
}
function editItem(tag) {
  console.log(tag);
}
