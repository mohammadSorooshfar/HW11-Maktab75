document.querySelector("#row-2").classList.add("bg-blue-300");
document.querySelector("#row-3").classList.add("bg-purple-300");
document.querySelector("#row-4").classList.add("bg-green-300");
document.querySelector("#row-5").classList.add("bg-red-300");
document.querySelector("#row-6").classList.add("bg-yellow-300");
document.querySelector("#row-7").classList.add("bg-blue-400");
document.querySelector("#row-9").classList.add("darkBlue");

let tableBody = document.querySelector("tbody");
let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");
    console.log("here");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    cell1.textContent = "light";
    cell2.textContent = "cell";
    cell3.textContent = "cell";
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.classList.add("border-b");
    tableBody.appendChild(row);
  }
});
let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
  let allTr = document.querySelectorAll("tr");
  for (let i = 1; i < 6; i++) {
    allTr[i].remove();
  }
});
