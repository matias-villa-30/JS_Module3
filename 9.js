'use strict';

const button = document.querySelector('button');
button.addEventListener('click', function(evt) {
  let str_num = document.getElementById("calculation").value;
  console.log(str_num);
  let num_split, num1, num2, resultado;
  if (str_num.includes("x")) {
    num_split = str_num.split("x");
    num1 = parseInt(num_split[0]);
    num2 = parseInt(num_split[1]);
    resultado = num1 * num2;
} else if (str_num.includes("+")) {
    num_split = str_num.split("+");
    num1 = parseInt(num_split[0]);
    num2 = parseInt(num_split[1]);
    resultado = num1 + num2;
} else if (str_num.includes("-")) {
    num_split = str_num.split("-");
    num1 = parseInt(num_split[0]);
    num2 = parseInt(num_split[1]);
    resultado = num1 - num2;
} else if (str_num.includes("/")) {
    num_split = str_num.split("/");
    num1 = parseInt(num_split[0]);
    num2 = parseInt(num_split[1]);
    resultado = num1 / num2;
}
  console.log(resultado);
})

