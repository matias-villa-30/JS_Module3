'use strict';

const button = document.querySelector('button');
button.addEventListener('click', function(evt) {

    let num_1 = document.getElementById("num1").value;
    let num_2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;

    let num1 = parseInt(num_1);
    let num2 = parseInt(num_2);

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
    }

    document.getElementById("result").innerText = `Result: ${result}`;
});
