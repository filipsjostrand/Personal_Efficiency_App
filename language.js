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
  }


  if (selectedLanguage === "en") {
    languageSelector.value = "en";
  }

  // _ _ _

    // Listen for changes in the <select> element
    languageSelector.addEventListener("change", () => {

        // changing languageSelector value to English:
      if (languageSelector.value  === "sv") {
      selectedLanguage = 'sv';
      sessionStorage.setItem("selectedLanguage", selectedLanguage);

        // changing languageSelector value to Swedish:
    } else if (languageSelector.value  === "en") {
      selectedLanguage = 'en';
      languageSelector.value = "en";
      sessionStorage.setItem("selectedLanguage", selectedLanguage);
    }

    location.reload();
  });


  // _ _ _

  //Översättning (navbar)

  const navbarTodo = {
    sv: "Fixa",
    en: "Todos",
  }


  document.getElementById('top-todos').innerHTML = navbarTodo[selectedLanguage];


    // _ _ _

  // Översättning (language)

const languageFlagImage = {
    en: "us-uk-flag-small.png",
    sv: "sweden-flag-icon-small.png",
  }

  const dynamicLanguageImage = document.querySelector(".flag-div");
const fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

function changeFlagImage() {
  dynamicLanguageImage.innerHTML =
  fetchLanguageImage +
  `<img class="flag-img" src="./${languageFlagImage[selectedLanguage]}" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
};
changeFlagImage();

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
