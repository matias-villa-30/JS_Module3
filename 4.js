'use strict';
let target = document.getElementById("target");

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i = 0; i < students.length; i++) {
  let opcion1 = document.createElement("option");
  let opcion2 = document.createElement("option");

  opcion1.textContent = students[i].name;

  opcion2.textContent = students[i].id;

  target.appendChild(opcion1);
  target.appendChild(opcion2);
}
