// if (window.localStorage) {
//     // localStorage is supported
//     // You can use it here
//     window.localStorage.setItem('key', 'value');
//     let storedValue = window.localStorage.getItem('key');
//   } else {
//     // localStorage is not supported
//   }



// var selectedLanguage;

//   // Select the dropdown element
//   const languageSelectElement = document.querySelector('.language-selector');
//   var languageSelectVariable;
//   // var languageSelectVariable = languageSelectElement.options[languageSelectElement.selectedIndex].text;

// if (!selectedLanguage) {
//   console.log("HERE!!");
//   selectedLanguage = 'sv';
//   runTranslation(selectedLanguage);
// }

//   // Add a 'change' event listener to the dropdown
//   languageSelectElement.addEventListener('change', function() {
//       // Get the selected value
//       const selectedValue = languageSelectElement.value;

//       // Perform some action based on the selected value
//       if (selectedValue === 'sv') {
//           console.log('You selected Svenska');
//           languageSelectVariable = languageSelectElement.options[0].text
//           console.log("languageSelectVariable = " + languageSelectVariable);
//           runTranslation(selectedLanguage);
//       } else if (selectedValue === 'en') {
//           console.log('You selected English');
//           languageSelectVariable = languageSelectElement.options[1].text
//           // languageSelectElement.options[languageSelectElement.selectedIndex].text = 'English';
//           console.log("languageSelectVariable = " + languageSelectVariable);
//           runTranslation(selectedLanguage);
//       }
//       // sessionStorage.setItem("languageVariable", selectedValue);
//     });


  // _ _ _



  // _ _ _
  // _ _ _

  // let changedLanguageToSv = false;
  // let changedLanguageToEn = false;

  var flagDiv = document.querySelector(".flag-div");
  // var dynamicLanguageImage = document.querySelector(".flag-div");
  // var fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

  // _ _ _

//  var languageSelector = document.querySelector(".language-selector");
 var languageSelectId = document.getElementById("select-language");

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

//   let dynamicLanguageImage = document.querySelector(".flag-div");
//   let fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

// if (selectedLanguage === 'sv') {
//   flagDiv.innerHTML = `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
// } else if (selectedLanguage === 'en') {
//   flagDiv.innerHTML = `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
// }


// if (selectedLanguage === 'sv') {
//   dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
// } else if (selectedLanguage === 'en') {
//   dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
// }

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

  // _ _ _
   // _ _ _

//  languageSelector.selectedIndex = '';

  // Get current selectedLanguage (from localStorage)
    // var selectedLanguage = localStorage.getItem("selectedLanguage");
    // var selectedLanguage;

    // console.log("(1) selectedLanguage från localStorage = " + selectedLanguage);

    // location.reload();

    // window.addEventListener("load", () => {
    //   console.log("page is fully loaded");

    //   localStorage.removeItem("languageVariable");

    //     if (!selectedLanguage) {
    //       selectedLanguage = 'sv';
    //       // localStorage.removeItem("selectedLanguage");

    //       // localStorage.setItem("languageVariable", 'sv');
    //       // selectedLanguage = localStorage.getItem("languageVariable");
    //       flagDiv.innerHTML = `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`;
    //       console.log("selectedLanguage (om !selectedLanguage (vid load)) = " + selectedLanguage)
    //     }

    //     // if (selectedLanguage === null || localStorage.getItem("selectedLanguage") === null || localStorage.getItem("selectedLanguage") === undefined) {
    //     //   console.log("språk undef");
    //     //   console.log("undef ooa -> sv ...");
    //     //   console.log("Convert to Swedish");

    //     //   // selectedLanguage = 'sv';
    //     //   // localStorage.setItem("selectedLanguage", selectedLanguage);
    //     //   console.log("selectedLanguage (1) = " + selectedLanguage);
    //     //   localStorage.removeItem("selectedLanguage");
    //     //   localStorage.setItem("selectedLanguage", 'sv');

    //     //   console.log("selectedLanguage (2) = " + selectedLanguage);
    //     //   console.log("languageSelector.value = " + languageSelector.value);
    //     //   languageSelector.options[languageSelector.selectedIndex].text = 'Svenska';

    //     //   // languageSelector.selectedIndex = 0;

    //     //   // languageSelectId.innerHTML = 'Svenska'

    //     //   languageSelector.selectedIndex = 0;

    //     //   languageSelector.options[0].text = 'Svenska';
    //     //   languageSelector.options[1].text = 'English';

    //     //   console.log("languageSelectId.innerHTML = " + languageSelectId.innerHTML);
    //     //   console.log("languageSelectId.value (1) = " + languageSelectId.value);
    //     //   // languageSelectId.value = 'sv';
    //     //   // console.log("languageSelectId.value (2) = " + languageSelectId.value);

    //     //   console.log("languageSelector.options[languageSelector.selectedIndex].text (ooa) = " + languageSelector.options[languageSelector.selectedIndex].text);
    //     //   console.log("languageSelector.selectedIndex = " + languageSelector.selectedIndex);
    //     //   console.log("typeof languageSelector.selectedIndex = " + typeof languageSelector.selectedIndex);

    //     //   let localStorageDataInLanguageUndefined = localStorage.getItem("selectedLanguage", selectedLanguage);
    //     //   console.log("selectedLanguage (3) ((localStorageDataInLanguageUndefined = )) = " + localStorageDataInLanguageUndefined);

    //     // _ _ _
    //     // _ _ _

    //       // languageSelector.options[languageSelector.selectedIndex].text = 'Svenska';

    //       // selectedLanguage = 'sv';
    //       // languageSelector.selectedIndex = 0;

    //       // flagDiv.innerHTML = `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`;

    //             // languageSelector.options[0].text
    //       // languageSelector.selectedIndex = 0;

    //       // localStorage.setItem("selectedLanguage", selectedLanguage);

    //       // location.reload();

    //       runTranslation(selectedLanguage);

    //     })

            // else if (localStorage.getItem("selectedLanguage") === 'sv') {
            //   runTranslation(selectedLanguage);
            // }
            // else if (localStorage.getItem("selectedLanguage") === 'en') {
            //   runTranslation(selectedLanguage);
            // }

          // });

          // _ _ _
          // _ _ _

        // else if (languageSelector.options[languageSelector.selectedIndex].text === 'Svenska' && changedLanguageToSv === false && changedLanguageToEn === false) {
        //   console.log("språk sv start");
        //   console.log("svenska gggg (start)");

        //   // selectedLanguage = 'sv';
        //   // localStorage.setItem("selectedLanguage", selectedLanguage);
        //   console.log("selectedLanguage (1) = " + selectedLanguage);
        //   localStorage.removeItem("selectedLanguage");
        //   localStorage.setItem("selectedLanguage", 'sv');

        //   console.log("selectedLanguage (2) = " + selectedLanguage);
        //   console.log("languageSelector.value = " + languageSelector.value);
        //   console.log("languageSelector.options[languageSelector.selectedIndex].text = " + languageSelector.options[languageSelector.selectedIndex].text);

        //   // console.log("selectedLanguage (1) = " + selectedLanguage)
        //   // selectedLanguage = 'sv'
        //   // console.log("selectedLanguage (2) = " + selectedLanguage)
        //   // flagDiv.innerHTML = `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`;

        //   // location.reload();

        //   runTranslation(selectedLanguage);

        // } else if (languageSelector.options[languageSelector.selectedIndex].text === 'English' && changedLanguageToSv === false && changedLanguageToEn === false) {
        //   console.log("språk en start");
        //   console.log("english aaa (start)" );
        //   console.log("Convert to Swedish");

        //   // selectedLanguage = 'sv';
        //   // localStorage.setItem("selectedLanguage", selectedLanguage);
        //   console.log("selectedLanguage (1) = " + selectedLanguage);
        //   localStorage.removeItem("selectedLanguage");
        //   localStorage.setItem("selectedLanguage", 'sv');

        //   console.log("selectedLanguage (2) = " + selectedLanguage);
        //   console.log("languageSelector.value = " + languageSelector.value);
        //   console.log("languageSelector.options[languageSelector.selectedIndex].text = " + languageSelector.options[languageSelector.selectedIndex].text);

        //   runTranslation(selectedLanguage);

        //   // selectedLanguage = 'en'
        //   // flagDiv.innerHTML = `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`;

        //   // location.reload();
        // }


          // _ _ _
          // _ _ _

        // if (selectedLanguage === "sv") {
        //   // languageSelector.value = "sv";

        //   // languageSelector.options[languageSelector.selectedIndex].value = 'sv';
        //   // languageSelector.options[languageSelector.selectedIndex].innerHTML = 'Svenska';
        //   // languageSelector.options[languageSelector.selectedIndex].text = 'Svenska';
        // }


        // else if (selectedLanguage === "en") {
        //   // languageSelector.value = "en";

        //   // languageSelector.options[languageSelector.selectedIndex].value = 'en';
        //   // languageSelector.options[languageSelector.selectedIndex].innerHTML = 'English';
        //   // languageSelector.options[languageSelector.selectedIndex].text = 'English';
        // }

        // _ _ _

          // Listen for changes in the <select> element
        //   languageSelector.addEventListener("change", (e) => {

        //     // selectedLanguage = localStorage.getItem("languageVariable");
        //     // console.log("selectedLanguage (0 (i change addeventlistener)) = " + selectedLanguage);

        //     console.log("selectedLanguage (0 (i change addeventlistener)) = " + selectedLanguage);

        //       // changing languageSelector value to English:
        //     if (selectedLanguage === "sv") {
        //       console.log("Om språk till en");

        //       console.log("selectedLanguage (2) = " + selectedLanguage);
        //       console.log("languageSelector.value = " + languageSelector.value);
        //       console.log("languageSelector.options[languageSelector.selectedIndex].text = " + languageSelector.options[languageSelector.selectedIndex].text);

        //       // changedLanguageToSv = true;
        //       // changedLanguageToEn = false;

        //       // selectedLanguage = 'sv';
        //       console.log("selectedLanguage (i språk till sv) ((2)) = " + selectedLanguage);
        //       console.log("sv ooa");
        //       flagDiv.innerHTML = `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`;
        //     // localStorage.setItem("selectedLanguage", selectedLanguage);
        //     console.log("selectedLanguage (1) = " + selectedLanguage);
        //     localStorage.removeItem("languageVariable");
        //     localStorage.setItem("languageVariable", 'en');
        //     selectedLanguage = localStorage.getItem("languageVariable");
        //     console.log("selectedLanguage (i språk till en) (2) = " + selectedLanguage);
        //     // location.reload();

        //       // changing languageSelector value to Swedish:
        //   } else if (selectedLanguage === "en") {

        //     console.log("Om språk till sv");

        //     // console.log("selectedLanguage (1) = " + selectedLanguage);
        //     // console.log("languageSelector.value = " + languageSelector.value);
        //     // console.log("languageSelector.options[languageSelector.selectedIndex].text = " + languageSelector.options[languageSelector.selectedIndex].text);

        //     // // changedLanguageToSv = false;
        //     // // changedLanguageToEn = true;

        //     // // selectedLanguage = 'en';
        //     // // console.log("selectedLanguage (i språk till en) (1) = " + selectedLanguage);
        //     // // languageSelector.value = "en";
        //     // console.log("en ooa");

        //     flagDiv.innerHTML = `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`;
        //     // localStorage.setItem("selectedLanguage", selectedLanguage);
        //     // console.log("selectedLanguage (2) = " + selectedLanguage);
        //     localStorage.removeItem("languageVariable");
        //     localStorage.setItem("languageVariable", 'sv');
        //     selectedLanguage = localStorage.getItem("languageVariable");
        //     console.log("selectedLanguage (i språk till sv) = " + selectedLanguage);
        //     // location.reload();
        //   }
        //   runTranslation(selectedLanguage);
        //   // changedLanguage = true;
        // });

        // _ _ _
        // _ _ _
        // _ _ _

      //     location.reload();

      // if (selectedLanguage === 'sv') {
      //   dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      // } else if (selectedLanguage === 'en') {
      //   dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      // }

      //   });


        // _ _ _
        // _ _ _

      // console.log("selectedLanguage (1) (i language.js) = " + selectedLanguage);
      // localStorage.getItem("languageVariable");
      // console.log("selectedLanguage (2) (i language.js) = " + selectedLanguage);

        // _ _ _
        // _ _ _

      //   //Översättning (navbar)

      //   const navbarTodo = {
      //     sv: "Fixa",
      //     en: "Todos",
      //   }

      //   const navbarWeek = {
      //     sv: "Vecka",
      //     en: "Week",
      //   }

      //   const navbarPlan = {
      //     sv: "Plan",
      //     en: "Plan",
      //   }

      //   const navbarTimer = {
      //     sv: "Timer",
      //     en: "Timer",
      //   }

      //   const navbarAbout = {
      //     sv: "Om",
      //     en: "About",
      //   }

      //   document.getElementById('top-todos').innerHTML = navbarTodo[selectedLanguage];
      //   document.getElementById('weekly-calendar').innerHTML = navbarWeek[selectedLanguage];
      //   document.getElementById('important-dates').innerHTML = navbarPlan[selectedLanguage];
      //   document.getElementById('timer').innerHTML = navbarTimer[selectedLanguage];
      //   document.getElementById('about-me').innerHTML = navbarAbout[selectedLanguage];


      //     // _ _ _

      //   // Översättning (language)

      // // const languageFlagImage = {
      // //     en: "us-uk-flag-small.png",
      // //     sv: "sweden-flag-icon-small.png",
      // //   }

      // //   let dynamicLanguageImage = document.querySelector(".flag-div");
      // //   let fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

      // // if (selectedLanguage === 'sv') {
      // //   flagDiv.innerHTML = `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      // // } else if (selectedLanguage === 'en') {
      // //   flagDiv.innerHTML = `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      // // }


      // // if (selectedLanguage === 'sv') {
      // //   dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./sweden-flag-icon-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      // // } else if (selectedLanguage === 'en') {
      // //   dynamicLanguageImage.innerHTML = fetchLanguageImage + `<img class="flag-img" src="./us-uk-flag-small.png" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      // // }

      // //   let dynamicLanguageImage = document.querySelector(".flag-div");
      // //   let fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

      // // function changeFlagImage() {
      // //   dynamicLanguageImage.innerHTML =
      // //   fetchLanguageImage +
      // //   `<img class="flag-img" src="./${languageFlagImage[selectedLanguage]}" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
      // // };
      // // changeFlagImage();

      // // _ _ _

      // // Översättning Tid-info (längst upp)
      // // Fixa vecka i future-plans?

      // // var weekInfo = {
      // //   sv: `Top3 Fix`,
      // //   en: `Top3 Todos`,
      // // }

      // // document.getElementById('todos-heading').innerHTML = top3Todos[selectedLanguage];

      // // _ _ _

      // // Översättning Top3 Todos

      // const top3Todos = {
      //   sv: `Fixa Top3`,
      //   en: `Top3 Todos`,
      // }

      // const placeholderTop3Text = {
      //   sv: `Lägg till text`,
      //   en: `Add todo text`,
      // }

      // const top3Label = {
      //   sv: `i:`,
      //   en: `Apply to:`,
      // }

      // const addButton2 = {
      //   sv: `Lägg till`,
      //   en: `Add Todo`,
      // }

      // const appInfo = {
      //   sv: `App-information`,
      //   en: `Application information`,
      // }

      // const infoBullets = {
      //   sv: `<ol>
      //       <li><b>Återställ:</b> &nbsp Tryck "Start Reset" (applikationen startas om).</li><br>
      //       <li><b>Lägg till:</b> &nbsp Skriv text &nbsp &nbsp → &nbsp &nbsp tryck "Lägg till" ("Top3 list" ska stå i rullisten).</li><br>
      //       <li><b>Ersätt: </b> &nbsp Skriv text &nbsp &nbsp → &nbsp &nbsp Välj "#" (att ersätta) i rullisten &nbsp &nbsp → &nbsp &nbsp tryck "Lägg till".</li>
      //       </ol>`,
      //   en: `<ol>
      //       <li><b>Reset:</b> &nbsp Press "Start Reset" (application reactivates).</li><br>
      //       <li><b>Add:</b> &nbsp Write a todo text &nbsp &nbsp → &nbsp &nbsp press "Add Todo" (ensure "Top3 list" is selected in rolldown).</li><br>
      //       <li><b>Replace: </b> &nbsp Write a new todo text &nbsp &nbsp → &nbsp &nbsp select "#" (to replace) in rolldown &nbsp &nbsp → &nbsp &nbsp press "Add Todo".</li>
      //       </ol>`,
      //   }


      // document.querySelector('.info').innerHTML = infoBullets[selectedLanguage];
      // document.querySelector('.add-button-v2').innerHTML = addButton2[selectedLanguage];
      // document.getElementById('top3-label').innerHTML = top3Label[selectedLanguage];
      // document.getElementById('input-box-v2').placeholder = placeholderTop3Text[selectedLanguage];
      // document.getElementById('app-info').innerHTML = appInfo[selectedLanguage];
      // document.getElementById('todos-heading').innerHTML = top3Todos[selectedLanguage];

      //   // Översättning (Footer)

      // const footerContact = {
      //     en: `Contact`,
      //     sv: `Kontakt`,
      //   }

      //   const footerContactEmail = {
      //     en: `Send e-mail <i class="fa-solid fa-envelope"></i>`,
      //     sv: `Skicka e-post <i class="fa-solid fa-envelope"></i>`,
      //   }

      //   document.querySelector('.footer-contact h3').innerHTML = footerContact[selectedLanguage];
      //   document.querySelector('.footer-contact a').innerHTML = footerContactEmail[selectedLanguage];

        // function runTranslation(selectedLanguage) {
        //   navbarTodo[selectedLanguage];
        //   navbarWeek[selectedLanguage];
        //   navbarPlan[selectedLanguage];
        //   navbarTimer[selectedLanguage];
        //   navbarAbout[selectedLanguage];
        //   infoBullets[selectedLanguage];
        //   addButton2[selectedLanguage];
        //   top3Label[selectedLanguage];
        //   placeholderTop3Text[selectedLanguage];
        //   appInfo[selectedLanguage];
        //   top3Todos[selectedLanguage];
        //   footerContact[selectedLanguage];
        //   footerContactEmail[selectedLanguage];
        // }

        var selectedLanguage;

        // Select the dropdown element
        var languageSelectElement = document.querySelector('.language-selector');
        var languageSelectVariable;
        var selectedValue;
        // var languageSelectVariable = languageSelectElement.options[languageSelectElement.selectedIndex].text;

      languageSelectElement.value = 'sv'

      if (!selectedLanguage) {
        console.log("HERE!!");
        selectedLanguage = 'sv';
        runTranslation(selectedLanguage);
      }

        // Add a 'change' event listener to the dropdown
        languageSelectElement.addEventListener('change', function() {
            // Get the selected value
            selectedValue = languageSelectElement.value;

            // Perform some action based on the selected value
            if (selectedValue === 'sv') {
                console.log('You selected Svenska');
                selectedLanguage = 'sv';
                languageSelectVariable = languageSelectElement.options[0].text
                console.log("languageSelectVariable = " + languageSelectVariable);
                runTranslation(selectedLanguage);
            } else if (selectedValue === 'en') {
                console.log('You selected English');
                selectedLanguage = 'en';
                languageSelectVariable = languageSelectElement.options[1].text
                // languageSelectElement.options[languageSelectElement.selectedIndex].text = 'English';
                console.log("languageSelectVariable = " + languageSelectVariable);
                runTranslation(selectedLanguage);
            }
            // sessionStorage.setItem("languageVariable", selectedValue);
            
            // sessionStorage.setItem("selectedLanguage", selectedLanguage);
            // console.log("selectedLanguage (sessionStorage i langugage.js (change)) = " + selectedLanguage);
          });

          // sessionStorage.setItem("selectedLanguage", selectedLanguage);
          // console.log("selectedLanguage (sessionStorage i langugage.js) = " + selectedLanguage);

        // runTranslation(selectedLanguage);
        function runTranslation(selectedLanguage) {
          console.log("runTranslation(selectedLanguage) körs");
          console.log("selectedLanguage (i runTranslation(selectedLanguage)) = "+ selectedLanguage);

          document.getElementById('top-todos').innerHTML = navbarTodo[selectedLanguage];
          document.getElementById('weekly-calendar').innerHTML = navbarWeek[selectedLanguage];
          document.getElementById('important-dates').innerHTML = navbarPlan[selectedLanguage];
          document.getElementById('timer').innerHTML = navbarTimer[selectedLanguage];
          document.getElementById('about-me').innerHTML = navbarAbout[selectedLanguage];
          document.querySelector('.info').innerHTML = infoBullets[selectedLanguage];
          document.querySelector('.add-button-v2').innerHTML = addButton2[selectedLanguage];
          document.getElementById('top3-label').innerHTML = top3Label[selectedLanguage];
          document.getElementById('input-box-v2').placeholder = placeholderTop3Text[selectedLanguage];
          document.getElementById('app-info').innerHTML = appInfo[selectedLanguage];
          document.getElementById('todos-heading').innerHTML = top3Todos[selectedLanguage];
          document.querySelector('.footer-contact h3').innerHTML = footerContact[selectedLanguage];
          document.querySelector('.footer-contact a').innerHTML = footerContactEmail[selectedLanguage];

          // weekDisplay.textContent = weekInfo[selectedLanguage] + weekNumber;
          // weekDisplay2.textContent = weekInfo2[selectedLanguage] + weekNumber;
        }

        // Declare the variable
        // export const exportedLanguageVariable = selectedLanguage;

        // window.myGlobalLanguageVariable = selectedLanguage;

  //       const sharedData = { exportedLanguageVariable: selectedLanguage };
  // export { sharedData }