// Formulär [Översättning]

console.log("(contact form körs");

// console.log("selectedLanguage (i contact form) (1) = " + selectedLanguage);

// selectedLanguage = getSelectedLanguage();

selectedLanguage = sessionStorage.getItem("languageVariable");

console.log("selectedLanguage (i contact form) (2) = " + selectedLanguage);

// // Formulär-rubrik (footer)
// const footerFormTitle = {
//     sv: `Kontaktformulär <i class="fa-solid fa-pencil"></i>`,
//     en: `Contact Form <i class="fa-solid fa-pencil"></i>`,
// }

// const formTitle = {
//     sv: "Kontaktformulär",
//     en: "Contact Form",
// }

// const usernameLabel = {
//     sv: "Namn",
//     en: "Name",
// }

// const emailLabel = {
//     sv: "E-post",
//     en: "Email",
// }

// const messageLabel = {
//     sv: "Meddelande",
//     en: "Message",
// }

// const charCounterText = {
//     sv: "Antal tecken (Nu/Max): 0/1000",
//     en: "Characters (current/max): 0/1000",
// }

// const sendButtonText = {
//     sv: "Skicka",
//     en: "Send",
// }

// const usernamePlaceholder = {
//     sv: "Uppge gärna namn...",
//     en: "Please write name...",
// }

// const userEmailPlaceholder = {
//     sv: "min.epost@domän.com...",
//     en: "my.email@domain.com...",
// }

// const userSubjectPlaceholder = {
//     sv: "Ämne...",
//     en: "Subject...",
// }

// const userMessagePlaceholder = {
//     sv: "(Skriv gärna något :)...",
//     en: "(Please write something anything :)...",
// }

// let navBarContainer = document.querySelector('.grid-container');
var navBarContainer = document.querySelector('.grid-container');

if (!selectedLanguage) {
    // sessionStorage.removeItem("selectedLanguage");
    sessionStorage.setItem("languageVariable", 'sv');
    selectedLanguage = sessionStorage.getItem("languageVariable");
    console.log("selectedLanguage (om !selectedLanguage (i form)) = " + selectedLanguage)
  }

// // Formulär-rubriker (text) [Översättning]
// document.getElementById('form-button').innerHTML = footerFormTitle[selectedLanguage];
// // document.querySelector('.get-contact-form').innerHTML = footerFormTitle[selectedLanguage];
// document.querySelector('.contact-form-title').innerHTML = formTitle[selectedLanguage];
// document.getElementById("name-label").innerHTML = usernameLabel[selectedLanguage];
// document.getElementById("email-label").innerHTML = emailLabel[selectedLanguage];
// document.getElementById("message-label").innerHTML = messageLabel[selectedLanguage];
// document.getElementById("char-counter").innerHTML = charCounterText[selectedLanguage];
// document.getElementById("send-button").innerHTML = sendButtonText[selectedLanguage];

// //Placeholders [Översättning]
// document.getElementById('user-name').placeholder = usernamePlaceholder[selectedLanguage];
// document.getElementById('user-email').placeholder = userEmailPlaceholder[selectedLanguage];
// document.getElementById('subject').placeholder = userSubjectPlaceholder[selectedLanguage];
// document.getElementById('user-message').placeholder = userMessagePlaceholder[selectedLanguage];

// Tack-meddelande (alert-box) [Översättning]
var formThankYouMessage = [{
    formMessage: {
    en: ["Thank you for your message! :) ʕ •ᴥ•ʔ "],
    sv: ["Tack för ditt meddelande! :) ʕ •ᴥ•ʔ "],
}
}]

var isFormOpen = false;

// Get the Form
var form = document.getElementById("myForm");

// Get the element that opens the form
var formBtn = document.getElementById("form-button");

// Get the <span> element that closes the form
var closeFormSpan = document.getElementsByClassName("close-form")[0];

var formMessageBox = document.getElementById("user-message");
var charCounter = document.getElementById('char-counter');
var maxChars = 1000;


// const formMessageBox = document.getElementById("user-message");
// const charCounter = document.getElementById('char-counter');
// const maxChars = 1000;

// When the user clicks the button, open the form
formBtn.onclick = function() {
  form.style.display = "flex";
  isFormOpen = true;
  navBarContainer.style.display = "none";
//   navBarContainer.style.opacity = 0;
}

// Initialize the input field booleans to false
var isUserNameValid = false;
var isUserEmailValid = false;
var isUserSubjectValid = false;
var isUserMessageValid = false;

var isSendFormValid = false;

var usernamePattern = /^[a-zA-Z0-9_åäöÅÄÖ ]{2,50}$/;
var userEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// let isUserNameValid = false;
// let isUserEmailValid = false;
// let isUserSubjectValid = false;
// let isUserMessageValid = false;

// let isSendFormValid = false;

// const usernamePattern = /^[a-zA-Z0-9_åäöÅÄÖ ]{2,50}$/;
// const userEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Get references to the input fields
var usernameField = document.getElementById('user-name');
var userEmailField = document.getElementById('user-email');
var userSubjectField = document.getElementById('subject');
var userMessageField = document.getElementById('user-message');
// const usernameField = document.getElementById('user-name');
// const userEmailField = document.getElementById('user-email');
// const userSubjectField = document.getElementById('subject');
// const userMessageField = document.getElementById('user-message');

// const sendFormButton = document.getElementById('send-button');
var sendFormButton = document.querySelector('.send-form-button');
var loaderSymbol = document.querySelector('.loader');

var username = '';
var userEmail = '';
var userSubject = '';
var userMessage = '';

var formInputText = '';

// const sendFormButton = document.querySelector('.send-form-button');
// const loaderSymbol = document.querySelector('.loader');

// let username = '';
// let userEmail = '';
// let userSubject = '';
// let userMessage = '';

// let formInputText = '';

// When the user clicks on <span> (x), close the form
function closeForm() {
    console.log("closeForm() körs")
        resetForm();
        form.style.display = "none";
        isUserNameValid = false;
        isUserEmailValid = false;
        isUserSubjectValid = false;
        isUserMessageValid = false;
        isFormOpen = false;
        navBarContainer.style.display = "grid";
        // navBarContainer.style.opacity = 1;
}

// When the user clicks anywhere outside of the form, close it
window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
    isFormOpen === false;
    navBarContainer.style.display = "grid";
  }
}

// Check number of characters in the form message
function checkNumberOfCharacters(formMessageBox) {
const currentLength = formMessageBox.value.length;
charCounter.textContent = `${currentLength}/${maxChars}`;

if (currentLength > maxChars) {
    formMessageBox.value = formMessageBox.value.slice(0, maxChars); // Trim the excess characters
    charCounter.textContent = `${maxChars}/${maxChars}`;
}

// Add or remove 'exceeded' class based on current length
if (currentLength > maxChars) {
  charCounter.classList.add('exceeded');
} else {
  charCounter.classList.remove('exceeded');
}

return formMessageBox.value;
}

formMessageBox.addEventListener("keydown", (e) => {checkNumberOfCharacters(formMessageBox)});


// _ _ _

        //usernameField
        // Add an event listener to the username field
        usernameField.addEventListener('input', function() {
            username = usernameField.value;

            // Check if the controller field has a certain value or condition
            // For example, let's enable the userEmail field when the username field is passes the usernamePattern-test and has more than 1 character.
            if (usernamePattern.test(username)) {
                isUserNameValid = true;
                userEmailField.style.backgroundColor = '#fefefe';
                usernameField.style.backgroundColor = '#fefefe';
            } else if (!usernamePattern.test(username) || username.length < 2) {
                usernameField.style.backgroundColor = '#e6bc86';
                isUserNameValid = false;
                sendFormButton.disabled = true;
                sendFormButton.style.backgroundColor = '(138, 31, 31, 0.822)';
            }

            // Enable or disable the userEmail field based on the (boolean value) "isUserNameValid"
            userEmailField.disabled = !isUserNameValid;
            formInputText = usernameField.value;
            usernameField.value = validateInput(formInputText);
            checkFormInputBooleans();
        });

        //userEmailField
        // Add an event listener to the userEmail field
        userEmailField.addEventListener('input', function() {
            userEmail = userEmailField.value;
            if (userEmailPattern.test(userEmail)) {
                isUserEmailValid = true;
                userSubjectField.style.backgroundColor = 'rgb(248, 248, 248)';
                userEmailField.style.backgroundColor = 'rgb(248, 248, 248)';
            } else {
                userEmailField.style.backgroundColor = '#e6bc86';
                isUserEmailValid = false;
                sendFormButton.disabled = true;
                sendFormButton.style.backgroundColor = 'rgb(191, 127, 24)';
            }
            userSubjectField.disabled = !isUserEmailValid;
            formInputText = userEmailField.value;
            userEmailField.value = validateInput(formInputText);
            checkFormInputBooleans();
        })

        //userSubjectField
        // Add an event listener to the userSubject field
        userSubjectField.addEventListener('input', function() {
                userSubject = userSubjectField.value;
            if (userSubject.length > 0) {
                isUserSubjectValid = true;
                userMessageField.style.backgroundColor = 'rgb(248, 248, 248)';
                userSubjectField.style.backgroundColor = 'rgb(248, 248, 248)';
            } else if (userSubject.length < 1) {
                userSubjectField.style.backgroundColor = '#e6bc86';
                userMessageField.style.backgroundColor = 'rgba(235, 235, 235, 0.795)';
                isUserSubjectValid = false;
                sendFormButton.disabled = true;
                sendFormButton.style.backgroundColor = 'rgb(191, 127, 24)';
            }
            userMessageField.disabled = !isUserSubjectValid;
            formInputText = userSubjectField.value;
            userSubjectField.value = validateInput(formInputText);
            checkFormInputBooleans();
        });

        //userMessageField
        // Add an event listener to the userMessage field
        userMessageField.addEventListener('input', function() {
            userMessage = userMessageField.value;
        if (userMessage.length > 0) {
            isUserMessageValid = true;
            userMessageField.style.backgroundColor = '#fefefe';
            userSubjectField.style.backgroundColor = '#fefefe';
        } else if (userMessage.length < 1) {
            userMessageField.style.backgroundColor = '#e6bc86';
            isUserMessageValid = false;
            sendFormButton.disabled = true;
            sendFormButton.style.backgroundColor = 'rgb(191, 127, 24)';
        }
        userMessageField.disabled = !isUserMessageValid;
        formInputText = userMessageField.value;
        userMessageField.value = validateInput(formInputText);
        checkFormInputBooleans();
    });

    function checkFormInputBooleans() {
        isSendFormValid = isUserNameValid && isUserEmailValid && isUserSubjectValid && isUserMessageValid;
        if (isUserNameValid && isUserEmailValid && isUserSubjectValid && isUserMessageValid) {
            sendFormButton.style.backgroundColor = 'rgb(94, 143, 128)';
            sendFormButton.style.color = 'rgb(248, 248, 248)';
            sendFormButton.disabled = false;
            isSendFormValid = true;
        } else if (!isUserNameValid || !isUserEmailValid || !isUserSubjectValid || !isUserMessageValid){
            sendFormButton.disabled = true;
            sendFormButton.style.backgroundColor = 'rgb(180, 90, 12)';
            isSendFormValid = false;
        }
        userMessageField.disabled = false;
    }

    // _ _ _

    // document.addEventListener("DOMContentLoaded", function () {
    //     const sendFormButton = document.getElementById("sendFormButton");
    //     sendFormButton.addEventListener("click", function(event) {
    //         console.log("sendForm-knappen trycks ned");
    //         if (!sendFormButton.disabled) {
    //             sendFormEmail();
    //         } else {
    //             event.preventDefault();
    //         }
    //     });
    // });

    // _ _ _

        // Event listener for the sendFormButton click
        sendFormButton.addEventListener("click", function(event) {
            console.log("sendForm-knappen trycks ned");
            // Check if the button is disabled
            if (!sendFormButton.disabled) {
                // If the button is not disabled, run the submit functionality
                sendFormEmail();
            } else {
                // Prevent form submission if the button is disabled
                event.preventDefault();
            }
        });

            // _ _ _


// Ersätt "http" och "www" om de finns i input (test kan användas på RegEx)
function validateInput(formInputText) {

    let formInputTextA = formInputText;
    const words = formInputTextA.split(/\s+/);

    const httpRegEx = /http/;
    const wwwRegEx = /www/;
    if (httpRegEx.test(words)) {
        alert("Input can't 'http' or 'https'.");
        formInputText = formInputTextA.replace(httpRegEx, '');
    } else if (wwwRegEx.test(words)) {
        alert("Input can't include 'www'.");
        formInputText = formInputTextA.replace(wwwRegEx, '');
    }
    return formInputText;
}

function resetForm() {
    usernameField.value = "";
    userEmailField.value = "";
    userSubjectField.value = "";
    userMessageField.value = "";
    usernameField.style.backgroundColor = 'rgb(248, 248, 248)';
    userEmailField.style.backgroundColor = 'rgba(180, 180, 180, 0.795)';
    userSubjectField.style.backgroundColor = 'rgba(180, 180, 180, 0.795)';
    userMessageField.style.backgroundColor = 'rgba(180, 180, 180, 0.795)';
    sendFormButton.style.backgroundColor = 'rgba(138, 31, 31, 0.822)';
    userEmailField.disabled = true;
    userSubjectField.disabled = true;
    userMessageField.disabled = true;
    sendFormButton.disabled = true;
}

document.addEventListener('keydown', checkKey);

function checkKey(e) {
    e = e || window.event;

    if (isFormOpen && e.keyCode == "27") {
        // escape (-> close form)
        closeForm();
    } else {

    }
  }

  // Activate arrow-key-press inside the opened form
    checkKey();

// Send form to email
function sendFormEmail() {
    console.log("sendFormEmail() körs");
    selectedLanguage = sessionStorage.getItem("languageVariable");

    console.log("selectedLanguage i sendFormEmail() = " + selectedLanguage);

    let user_name = usernameField.value;
    let message = "Email: " + userEmailField.value + "\nSubject: " + userSubjectField.value + "\n\nMessage:\n" + userMessageField.value;

    emailjs.send("service_qes9d4k", "template_cmihpce", {
        from_name: user_name,
        message: message,
    }).then(function(response) {
    }, function(error) {
    });

    alert(formThankYouMessage[0].formMessage[selectedLanguage]);
    resetForm();
    closeForm()
}