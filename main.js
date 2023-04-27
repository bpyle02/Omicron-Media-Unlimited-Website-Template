var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//     fields.firstName = document.getElementById('firstName');
//     fields.lastName = document.getElementById('lastName');
//     fields.email = document.getElementById('email');
//     fields.question = document.getElementById('question');
// })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' )
    {
        return false;
    } else {
        return (value.length > 0);
    }
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
    
    let isFieldValid = validationFunction(field.value)
    
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    
    return isFieldValid;
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
    
    return valid;
}

function sendContact() {
    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, email.value);
        alert(`Thanks for your input, ${usr.firstName}.`)
    } else {
        alert("Please fill out all fields.")
    }
}

class User {
    constructor(firstName, lastName, email, question) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.question = question;
    }
}