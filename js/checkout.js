// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firstName = document.querySelector('.name');
var mail = document.querySelector('.email');
var text = document.querySelectorAll('input[type=text]');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorEmail = document.getElementById('errorEmail');
var errorAdress = document.getElementById('errorAdress');




(function () {
'use strict'
const forms = document.querySelectorAll('.requires-validation')
Array.from(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
  
      form.classList.add('was-validated')
    }, false)
  })
})()

// Exercise 6
function validate() {
}
