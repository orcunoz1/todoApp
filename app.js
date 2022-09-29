const addBtn = document.querySelector(".add_btn");
const input = document.querySelector(".todo_input");
const list = document.querySelector(".todo_list");

addBtn.addEventListener("click", () => {
  const todoText = input.value;

  if (todoText.trim().length < 3) {
    Toastify({
      text: "Please enter more than 3 letters",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  } else {
    const newItem = document.createElement("li");
    newItem.classList.add("single_todo");
    newItem.innerText = todoText;
    list.appendChild(newItem);
    Toastify({
      text: "You added todo succesfully",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }
});
