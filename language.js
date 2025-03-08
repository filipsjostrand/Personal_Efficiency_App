if (window.sessionStorage) {
    // sessionStorage is supported
    // You can use it here
    window.sessionStorage.setItem('key', 'value');
    let storedValue = window.sessionStorage.getItem('key');
  } else {
    // sessionStorage is not supported
  }

  // _ _ _

  function returnSelectedLanguage() {
    return selectedLanguage;
  }


  // _ _ _

  const languageSelector = document.querySelector(".language-selector");

    var selectedLanguage = sessionStorage.getItem("selectedLanguage");

    if (selectedLanguage === null || sessionStorage.getItem("selectedLanguage") === null || sessionStorage.getItem("selectedLanguage") === undefined) {
      selectedLanguage = 'sv';

      sessionStorage.setItem("selectedLanguage", selectedLanguage);
    }

    // _ _ _

  if (selectedLanguage === "sv") {
    languageSelector.value = "sv";
    languageSelector.selectedIndex = 0;
  }


  if (selectedLanguage === "en") {
    languageSelector.value = "en";
    languageSelector.selectedIndex = 1;
  }

  // _ _ _

    // Listen for changes in the <select> element
    languageSelector.addEventListener("change", () => {

        // changing languageSelector value to English:
      if (languageSelector.value === "sv") {
      selectedLanguage = 'sv';
      languageSelector.selectedIndex = 0;
      dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      sessionStorage.setItem("selectedLanguage", selectedLanguage);

        // changing languageSelector value to Swedish:
    } else if (languageSelector.value === "en") {
      selectedLanguage = 'en';
      // languageSelector.value = "en";
      languageSelector.selectedIndex = 1;
      dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      sessionStorage.setItem("selectedLanguage", selectedLanguage);
    }

    location.reload();

    if (selectedLanguage === 'sv') {
      languageSelector.selectedIndex = 0;
      dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
    } else if (selectedLanguage === 'en') {
      languageSelector.selectedIndex = 1;
      dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
    }

  });


  // _ _ _

  //Översättning (navbar)

  const navbarTodo = {
    sv: "Fixa",
    en: "Todos",
  }

  const navbarWeek = {
    sv: "Vecka",
    en: "Week",
  }

  const navbarPlan = {
    sv: "Plan",
    en: "Plan",
  }

  const navbarTimer = {
    sv: "Timer",
    en: "Timer",
  }

  const navbarAbout = {
    sv: "Om",
    en: "About",
  }

  document.getElementById('top-todos').innerHTML = navbarTodo[selectedLanguage];
  document.getElementById('weekly-calendar').innerHTML = navbarWeek[selectedLanguage];
  document.getElementById('important-dates').innerHTML = navbarPlan[selectedLanguage];
  document.getElementById('timer').innerHTML = navbarTimer[selectedLanguage];
  document.getElementById('about-me').innerHTML = navbarAbout[selectedLanguage];


    // _ _ _

  // Översättning (language)

// const languageFlagImage = {
//     en: "us-uk-flag-small.png",
//     sv: "sweden-flag-icon-small.png",
//   }

  let dynamicLanguageImage = document.querySelector(".flag-div");
  let fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

if (selectedLanguage === 'sv') {
  dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
} else if (selectedLanguage === 'en') {
  dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
}

//   let dynamicLanguageImage = document.querySelector(".flag-div");
//   let fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

// function changeFlagImage() {
//   dynamicLanguageImage.innerHTML =
//   fetchLanguageImage +
//   `<img class="flag-img" src="./${languageFlagImage[selectedLanguage]}" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
// };
// changeFlagImage();

// _ _ _

// Översättning Tid-info (längst upp)
// Fixa vecka i future-plans?

// var weekInfo = {
//   sv: `Top3 Fix`,
//   en: `Top3 Todos`,
// }

// document.getElementById('todos-heading').innerHTML = top3Todos[selectedLanguage];

// _ _ _

// Översättning Top3 Todos

const top3Todos = {
  sv: `Fixa Top3`,
  en: `Top3 Todos`,
}

const placeholderTop3Text = {
  sv: `Lägg till text`,
  en: `Add todo text`,
}

const top3Label = {
  sv: `i:`,
  en: `Apply to:`,
}

const addButton2 = {
  sv: `Lägg till`,
  en: `Add Todo`,
}

const appInfo = {
  sv: `App-information`,
  en: `Application information`,
}

const infoBullets = {
  sv: `<ol>
      <li><b>Återställ:</b> &nbsp Tryck "Start Reset" (applikationen startas om).</li><br>
      <li><b>Lägg till:</b> &nbsp Skriv text &nbsp &nbsp → &nbsp &nbsp tryck "Lägg till" ("Top3 list" ska stå i rullisten).</li><br>
      <li><b>Ersätt: </b> &nbsp Skriv text &nbsp &nbsp → &nbsp &nbsp Välj "#" (att ersätta) i rullisten &nbsp &nbsp → &nbsp &nbsp tryck "Lägg till".</li>
      </ol>`,
  en: `<ol>
      <li><b>Reset:</b> &nbsp Press "Start Reset" (application reactivates).</li><br>
      <li><b>Add:</b> &nbsp Write a todo text &nbsp &nbsp → &nbsp &nbsp press "Add Todo" (ensure "Top3 list" is selected in rolldown).</li><br>
      <li><b>Replace: </b> &nbsp Write a new todo text &nbsp &nbsp → &nbsp &nbsp select "#" (to replace) in rolldown &nbsp &nbsp → &nbsp &nbsp press "Add Todo".</li>
      </ol>`,
  }


document.querySelector('.info').innerHTML = infoBullets[selectedLanguage];
document.querySelector('.add-button-v2').innerHTML = addButton2[selectedLanguage];
document.getElementById('top3-label').innerHTML = top3Label[selectedLanguage];
document.getElementById('input-box-v2').placeholder = placeholderTop3Text[selectedLanguage];
document.getElementById('app-info').innerHTML = appInfo[selectedLanguage];
document.getElementById('todos-heading').innerHTML = top3Todos[selectedLanguage];

  // Översättning (Footer)

const footerContact = {
    en: `Contact`,
    sv: `Kontakt`,
  }

  const footerContactEmail = {
    en: `Send e-mail <i class="fa-solid fa-envelope"></i>`,
    sv: `Skicka e-post <i class="fa-solid fa-envelope"></i>`,
  }

  document.querySelector('.footer-contact h3').innerHTML = footerContact[selectedLanguage];
  document.querySelector('.footer-contact a').innerHTML = footerContactEmail[selectedLanguage];
