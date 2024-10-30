'use strict';
const names = ['John', 'Paul', 'Jones'];
let target = document.getElementById("target");


for (let i =0;i<names.length;i++){
  let lista = document.createElement("li");
  lista.innerHTML = names[i];
  target.appendChild(lista);

}
