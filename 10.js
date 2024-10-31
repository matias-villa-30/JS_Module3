'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('source');

    form.addEventListener('submit', function(evt) {
        evt.preventDefault();

        let first_name = document.getElementsByName("firstname")[0];
        let last_name = document.getElementsByName("lastname")[0];

        const firstNameValue = first_name.value;
        const lastNameValue = last_name.value;

        document.getElementById("target").textContent = `Your name is ${firstNameValue} ${lastNameValue}`;

    });
});
