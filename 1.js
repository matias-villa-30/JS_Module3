const container = document.getElementById('target');
let list_items = ["First item", "Second item", "Third item"];

for (let i = 0; i < list_items.length; i++) {
  let displayListItems = document.createElement("li");
  displayListItems.textContent = list_items[i];
  container.append(displayListItems);
}
