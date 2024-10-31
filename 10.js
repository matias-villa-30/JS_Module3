'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('source');

    form.addEventListener('submit', function(evt) {
        evt.preventDefault(); // Prevent the form from submitting


        let first_name = document.getElementsByName("firstname")[0]; // Access the first element
        let last_name = document.getElementsByName("lastname")[0];   // Access the first element


        const firstNameValue = first_name.value;
        const lastNameValue = last_name.value;


        document.getElementById("target").textContent = `Your name is ${firstNameValue} ${lastNameValue}`;


        console.log(firstNameValue, lastNameValue);
    });
});
