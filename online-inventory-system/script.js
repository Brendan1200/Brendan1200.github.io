let inventory = [];

function addItem() {
  const name = prompt("Enter item name:");
  const quantity = prompt("Enter quantity:");
  const category = prompt("Enter category:");

  if (name && quantity && category) {
    inventory.push({ name, quantity, category });
    displayInventory();
  }
}

function displayInventory() {
  const tbody = document.querySelector("#inventoryTable tbody");
  tbody.innerHTML = "";

  inventory.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.category}</td>
        <td>
          <button onclick="deleteItem(${index})">Delete</button>
        </td>
      </tr>`;
    tbody.innerHTML += row;
  });
}

function deleteItem(index) {
  inventory.splice(index, 1);
  displayInventory();
}

// Document upload preview
document.getElementById('docUpload').addEventListener('change', function() {
  const docList = document.getElementById('docList');
  docList.innerHTML = "";
  for (let file of this.files) {
    const li = document.createElement('li');
    li.textContent = file.name;
    docList.appendChild(li);
  }
});
