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

  const languageFlagImage = {
    en: "us-uk-flag-small.png",
    sv: "sweden-flag-icon-small.png",
  }

  const dynamicLanguageImage = document.querySelector(".flag-div");
  const fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

  function changeFlagImage() {
    dynamicLanguageImage.innerHTML =
    fetchLanguageImage +
    `<img class="flag-img" src="./media/img/${languageFlagImage[selectedLanguage]}" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
  };
  // changeFlagImage();


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


  const monDayAbb = {
    sv: "Mån",
    en: "Mon",
  }
  const tueDayAbb = {
    sv: "Tis",
    en: "Tue",
  }
  const wedDayAbb = {
    sv: "Ons",
    en: "Wed",
  }
  const thuDayAbb = {
    sv: "Tor",
    en: "Thu",
  }
  const friDayAbb = {
    sv: "Fre",
    en: "Fri",
  }
  const satDayAbb = {
    sv: "Lör",
    en: "Sat",
  }
  const sunDayAbb = {
    sv: "Sön",
    en: "Sun",
  }

  // Get the current day number of the week (0 = Sunday, 1 = Monday, ...)
  var todaysWeekdayAbbNr = new Date().getDay();

  // Day id variable
  var dailyAbbreviation;

function getTodaysDayAbbreviation(todaysWeekdayAbbNr) {
  console.log("getTodaysDayAbbreviation() körs");

  console.log("selectedLanguage = " + selectedLanguage);

  console.log("todaysWeekdayAbbNr = " + todaysWeekdayAbbNr);

  console.log("typeof todaysWeekdayAbbNr = " + typeof todaysWeekdayAbbNr);

  if (todaysWeekdayAbbNr === 0) {
    dailyAbbreviation = sunDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 1) {
    dailyAbbreviation = monDayAbb[selectedLanguage];
    console.log("dailyAbbreviation = " + dailyAbbreviation);
  }
  else if (todaysWeekdayAbbNr === 2) {
    dailyAbbreviation = tueDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 3) {
    dailyAbbreviation = wedDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 4) {
    dailyAbbreviation = thuDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 5) {
    dailyAbbreviation = friDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 6) {
    dailyAbbreviation = satDayAbb[selectedLanguage];
  }
  return dailyAbbreviation;
}


// _ _ _

  // const weekdayDisplayText = {
  //   // sv: "Ons",
  //   // en: "Wed",
  // }

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
  sv: `Lägg till text...`,
  en: `Add todo text...`,
}

const top3Label = {
  sv: `i:`,
  en: `Apply to:`,
}

const addButton2 = {
  sv: `Lägg till (fix)`,
  en: `Add Todo`,
}

const appInfo = {
  sv: `Fixa`,
  en: `Top3`,
}

const appInfoWeek = {
  sv: `Vecka`,
  en: `Week`,
}

const appInfoFuture = {
  sv: `Plan`,
  en: `Future`,
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

// Översättning (veckoschema)
// week schedule

// function capitalizeFirstLetter(str) {
//   if (!str) return ''; // Handle empty strings
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const veckoSchemaSV = capitalizeFirstLetter("Veckoschema");
// const weekScheduleEN = capitalizeFirstLetter("Week Schedule");

const weekHeading = {
  sv: `Veckoschema`,
  en: `Week schedule`,
  // sv: veckoSchemaSV,
  // en: weekScheduleEN,
}

const weekPDesc = {
  sv: `Nedan följer aktuellt veckoschema,`,
  en: `Check current week schedule,`,
}

const goFuturePlans = {
  sv: `Lägg till uppgifter i "Framtidsplaner",`,
  en: `Go to "Future Plans" (to add tasks)`,
}

const goFutureNavbar = {
  sv: `Scrolla ner eller klicka "Plan" (i navbar)`,
  en: `Scroll down or click "Future" (navbar)`,
}

// const weekDisplayTwo = {
//   sv: `v.`,
//   en: `wk.`,
// }

const monWeekSchedule = {
  sv: `Mån`,
  en: `Mon`,
}
const tueWeekSchedule = {
  sv: `Tis`,
  en: `Tue`,
}
const wedWeekSchedule = {
  sv: `Ons`,
  en: `Wed`,
}
const thuWeekSchedule = {
  sv: `Tor`,
  en: `Thu`,
}
const friWeekSchedule = {
  sv: `Fre`,
  en: `Fri`,
}
const satWeekSchedule = {
  sv: `Lör`,
  en: `Sat`,
}
const sunWeekSchedule = {
  sv: `Sön`,
  en: `Sun`,
}


// Översättning (Future plans)


const futureHeading = {
  sv: `Framtidsplaner`,
  en: `Future Plans`,
}

const futureRememberSave = {
  sv: `- Kom ihåg att spara!`,
  en: `- Remember to save!`,
}

//  Current Plan and watch Past tasks.
// Add Task / Load File (Schedule).
// Save (Schedule).
// Edit (in table).
// Copy/clear (past tasks).

// const currentPlanWords = {
//   sv: `Framtidsplaner`,
//   en: `Future Plans`,
// }

// const pastTasksWords = {
//   sv: `Framtidsplaner`,
//   en: `Future Plans`,
// }

// const futureDesc = {
//   sv: `Handle current Plan Words and watch pastTasksWords tasks`,
//   en: `Hantera currentPlanWords and watch pastTasksWords tasks`,
//   // sv: `Handle ${currentPlanWords[selectedLanguage]} and watch ${pastTasksWords[selectedLanguage]} tasks`,
//   // en: `Handle ${currentPlanWords[selectedLanguage]} and watch ${pastTasksWords[selectedLanguage]} tasks`,
// }

const futureDesc = {
  sv: `Hantera <u id="current-plan-words">Framtidsplaner</u> och visa <u id="past-tasks-words">Tidigare händelser</u>:
    <ul>
      <li id="add-list">Lägg till uppgift / Ladda fil (Schema).</li>
      <li id="save-list">Spara (Schema).</li>
      <li id="edit-list">Redigera (i tabell).</li>
      <li id="copy-clear-list">Kopiera/rensa (tidigare händelser).</li>
    </ul>
  `,
  en: `Handle <u id="current-plan-words">"Future Plans"</u> and watch <u id="past-tasks-words">Past tasks</u>:
    <ul>
      <li id="add-list">Add Task / Load File (Schedule)..</li>
      <li id="save-list">Save (Schedule).</li>
      <li id="edit-list">Edit (in table).</li>
      <li id="copy-clear-list">Copy/clear (past tasks).</li>
    </ul>
  `,
}

const addTaskSpan = {
  sv: 'Lägg till (nedan)',
  en: 'Add Task (below)',
}

const addDateLabel = {
  sv: 'Datum',
  en: 'Date',
}

const addTodoLabel = {
  sv: 'Text',
  en: 'Task',
}

const placeholderScheduleTask = {
  sv: `Lägg till text...`,
  en: `Add task text...`,
}

const addColorLabel = {
  sv: 'Färg',
  en: 'Color',
}

const grayPicker = {
  sv: '-',
  en: '-',
}
const yellowPicker = {
  sv: 'Gul',
  en: 'Yellow',
}
const greenPicker = {
  sv: 'Grön',
  en: 'Green',
}
const bluePicker = {
  sv: 'Blå',
  en: 'Blue',
}
const purplePicker = {
  sv: 'Lila',
  en: 'Purple',
}
const redPicker = {
  sv: 'Röd',
  en: 'Red',
}

//
//
//

const recHeader = {
  sv: 'Återkommande 🔁',
  en: 'Recurring Task 🔁',
}

const periodicityHeader = {
  sv: 'Intervall',
  en: 'Periodicity',
}

const periodDay = {
  sv: 'Dag-ar (per vecka)',
  en: 'Day-s (per week)',
}
const periodWeek = {
  sv: 'Vecka',
  en: 'Week',
}
const periodMonth = {
  sv: 'Månad',
  en: 'Month',
}
const periodYear = {
  sv: 'År',
  en: 'Year',
}

const dayChoices = {
  sv: 'Dagligen:',
  en: 'Day choices:',
}
const selectDays = {
  sv: 'Välj dagar &nbsp [D]',
  en: 'Select days &nbsp [D]',
}
const selectDuration = {
  sv: 'Varaktighet (dagar) &nbsp [#D]',
  en: 'Duration (days) &nbsp [#D]',
}

const recMon = {
  sv: 'Mån',
  en: 'Mon',
}
const recTue = {
  sv: 'Tis',
  en: 'Tue',
}
const recWed = {
  sv: 'Ons',
  en: 'Wed',
}
const recThu = {
  sv: 'Tor',
  en: 'Thu',
}
const recFri = {
  sv: 'Fre',
  en: 'Fri',
}
const recSat = {
  sv: 'Lör',
  en: 'Sat',
}
const recSun = {
  sv: 'Sön',
  en: 'Sun',
}

const eventDurationDay = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}
const eachWeek = {
  sv: 'Varje vecka',
  en: 'Every week',
}

const eventDurationWeek = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}
const eventDurationMonth = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}
const eventDurationYear = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}

const recEvery = {
  sv: 'Var (återkommande):',
  en: 'Every:',
}
const recWeek = {
  sv: 'vecka',
  en: 'week',
}
const weekHeader = {
  sv: 'Veckovis:',
  en: 'Weekly choices:',
}
const monthHeader = {
  sv: 'Månadsvis:',
  en: 'Monthly:',
}
const yearHeader = {
  sv: 'Årligen:',
  en: 'Yearly:',
}
const addTaskToScheduleButton = {
  sv: 'Lägg till',
  en: 'Add Task',
}

// Edit current plan (in the table).

const currentPlanHeader = {
  sv: 'Aktuell plan',
  en: 'Current Plan',
}

const currentPlanDatePlaceholder = {
  sv: 'Datum...',
  en: 'Next date...',
}

const currentPlanTodoPlaceholder = {
  sv: 'Planerad uppg... (Lägg till)',
  en: 'Planned todo... (Add Task)',
}

const clearAllButtonTranslate = {
  sv: 'Rensa allt',
  en: 'Clear All',
  // sv: 'Rensa Schema',
  // en: 'Clear Schedule',
}

const colorSwitcherHeading = {
  sv: 'Ändra färg:',
  en: 'Change color:',
}

const clearRowTranslation = {
  sv: 'Ta bort rad:',
  en: 'Clear row:',
}
const closePanelButtonTranslation = {
  sv: 'Spara val',
  en: 'Store Current',
}

// Load
const loadPlanHeading = {
  sv: 'Hämta schema (sparat)',
  en: 'Load Plan',
}
const loadFileButton = {
  sv: 'Hämta fil',
  en: 'Load File',
}

// Save
const savePlanHeading = {
  sv: 'Spara schema',
  en: 'Save Plan',
}
const saveFileName = {
  sv: 'Filnamn:',
  en: 'File Name:',
}
const downloadOpt1 = {
  sv: 'Nedladdning (Alt 1):',
  en: 'Download (option 1):',
}
const incompatibleDevices = {
  sv: 'Firefox, iOS-enheter (Apple-enheter)',
  en: 'Firefox, iOS devices',
}
const saveAsAnywhere = {
  sv: 'Spara som (välj)',
  en: 'Save As (anywhere)',
}

const downloadOpt2 = {
  sv: 'Nedladdning (Alt 1):',
  en: 'Download (option 2):',
}
const anyBrowserDl = {
  sv: 'Alla webbläsare',
  en: 'Any browser',
}
const saveToDownloads = {
  sv: 'Spara (hämtade filer)',
  en: 'Save (to downloads)',
}

// Copy/clear past tasks.
const pastTasks = {
  sv: 'Tidigare händelser',
  en: 'Past Tasks',
}

const copyOrClearPast = {
  sv: 'Kopiera eller töm (tidigare händelser)',
  en: 'Copy or clear (past tasks).',
}

const clearPastTasksButtonTranslate = {
  sv: 'Töm utfört',
  en: 'Clear Past',
}

const clearAllAppDataButtonTranslate = {
  sv: 'Rensa webbläsar-app-data',
  en: 'Clear browser app data',
}

// Timer
const timerLimit = {
  sv: 'Välj en tidsgräns:',
  en: 'Set a time limit:',
}
const hourList = {
  sv: 'timmar,',
  en: 'hours,',
}
const minutesList = {
  sv: 'minuter,',
  en: 'minutes,',
}
const secondsList = {
  sv: 'sekunder,',
  en: 'seconds,',
}
const tenthsList = {
  sv: 'tiondelar.',
  en: 'tenths.',
}
const timerHours = {
  sv: 'Timmar:',
  en: 'Hours:',
}
const timerMinutes = {
  sv: 'Minuter:',
  en: 'Minutes:',
}
const timerSeconds = {
  sv: 'Sekunder:',
  en: 'Seconds:',
}
const timerTenths = {
  sv: 'Tiondelar:',
  en: 'Tenths:',
}
const timerMode = {
  sv: 'Läge:',
  en: 'Mode:',
}
const countDown = {
  sv: 'Räkna ner',
  en: 'Countdown',
}
const countUp = {
  sv: 'Räkna upp',
  en: 'Count Up',
}
const timerTime = {
  sv: 'Tid:',
  en: 'Time:',
}

// Om
const aboutHeading = {
  sv: 'Om',
  en: 'About',
}

  // Översättning (Footer)

const footerContact = {
    en: `Contact`,
    sv: `Kontakt`,
  }

  const footerContactEmail = {
    en: `Send e-mail <i class="fa-solid fa-envelope"></i>`,
    sv: `Skicka e-post <i class="fa-solid fa-envelope"></i>`,
  }

// Formulär-rubrik (footer)
const footerFormTitle = {
  sv: `Kontaktformulär <i class="fa-solid fa-pencil"></i>`,
  en: `Contact Form <i class="fa-solid fa-pencil"></i>`,
}

const formTitle = {
  sv: "Kontaktformulär",
  en: "Contact Form",
}

const usernameLabel = {
  sv: "Namn",
  en: "Name",
}

const emailLabel = {
  sv: "E-post",
  en: "Email",
}

const messageLabel = {
  sv: "Meddelande",
  en: "Message",
}

const charCounterText = {
  sv: "Antal tecken (Nu/Max): 0/1000",
  en: "Characters (current/max): 0/1000",
}

const sendButtonText = {
  sv: "Skicka",
  en: "Send",
}

const usernamePlaceholder = {
  sv: "Uppge gärna namn...",
  en: "Please write name...",
}

const userEmailPlaceholder = {
  sv: "min.epost@domän.com...",
  en: "my.email@domain.com...",
}

const userSubjectPlaceholder = {
  sv: "Ämne...",
  en: "Subject...",
}

const userMessagePlaceholder = {
  sv: "(Skriv gärna något :)...",
  en: "(Please write something anything :)...",
}

  // document.querySelector('.footer-contact h3').innerHTML = footerContact[selectedLanguage];
  // document.querySelector('.footer-contact a').innerHTML = footerContactEmail[selectedLanguage];

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
      //   sv: `Lägg till text...`,
      //   en: `Add todo text...`,
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

    // // Tack-meddelande (alert-box) [Översättning]
    // var formThankYouMessage = [{
    //   formMessage: {
    //   en: ["Thank you for your message! :) ʕ •ᴥ•ʔ "],
    //   sv: ["Tack för ditt meddelande! :) ʕ •ᴥ•ʔ "],
    // }
    // }]

        var selectedLanguage;

        // Select the dropdown element
        var languageSelectElement = document.querySelector('.language-selector');
        var languageSelectVariable;
        var languageVariable = 'sv';
        sessionStorage.setItem("languageVariable", languageVariable);
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
                languageVariable = selectedLanguage;
                sessionStorage.setItem("languageVariable", languageVariable);
                languageSelectVariable = languageSelectElement.options[0].text
                console.log("languageSelectVariable = " + languageSelectVariable);
                runTranslation(selectedLanguage);
            } else if (selectedValue === 'en') {
                console.log('You selected English');
                selectedLanguage = 'en';
                languageVariable = selectedLanguage;
                sessionStorage.setItem("languageVariable", languageVariable);
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

          // function getSelectedLanguage() {
          //   var languageVariable = selectedLanguage;
          //   return languageVariable;
          // }


        // runTranslation(selectedLanguage);
        function runTranslation(selectedLanguage) {
          console.log("runTranslation(selectedLanguage) körs");
          console.log("selectedLanguage (i runTranslation(selectedLanguage)) = "+ selectedLanguage);

          // Navbar
          document.getElementById('top-todos').innerHTML = navbarTodo[selectedLanguage];
          document.getElementById('weekly-calendar').innerHTML = navbarWeek[selectedLanguage];
          document.getElementById('important-dates').innerHTML = navbarPlan[selectedLanguage];
          document.getElementById('timer').innerHTML = navbarTimer[selectedLanguage];
          document.getElementById('about-me').innerHTML = navbarAbout[selectedLanguage];
          document.querySelector('.info').innerHTML = infoBullets[selectedLanguage];

          // document.getElementById('weekday-display').innerHTML = weekdayDisplayText[selectedLanguage];
          // document.getElementById('weekday-display').innerHTML = weekdayDisplayText;
          document.getElementById('weekday-display').innerHTML = getTodaysDayAbbreviation(todaysWeekdayAbbNr);

          document.querySelector('.add-button-v2').innerHTML = addButton2[selectedLanguage];
          document.getElementById('top3-label').innerHTML = top3Label[selectedLanguage];
          document.getElementById('input-box-v2').placeholder = placeholderTop3Text[selectedLanguage];
          document.getElementById('app-info').innerHTML = appInfo[selectedLanguage];
          document.getElementById('app-info-week').innerHTML = appInfoWeek[selectedLanguage];
          document.getElementById('app-info-future').innerHTML = appInfoFuture[selectedLanguage];
          document.getElementById('todos-heading').innerHTML = top3Todos[selectedLanguage];

          // Veckoschema
          document.getElementById('weekly-heading').innerHTML = weekHeading[selectedLanguage];
          document.getElementById('weekly-desc').innerHTML = weekPDesc[selectedLanguage];
          // document.getElementById('week-display-2').innerHTML = weekDisplayTwo[selectedLanguage];

          document.getElementById('go-future-plans').innerHTML = goFuturePlans[selectedLanguage];
          document.getElementById('go-future-navbar').innerHTML = goFutureNavbar[selectedLanguage];
          document.getElementById('rec-mon-day').innerHTML = monWeekSchedule[selectedLanguage];
          document.getElementById('rec-tue-day').innerHTML = tueWeekSchedule[selectedLanguage];
          document.getElementById('rec-wed-day').innerHTML = wedWeekSchedule[selectedLanguage];
          document.getElementById('rec-thu-day').innerHTML = thuWeekSchedule[selectedLanguage];
          document.getElementById('rec-fri-day').innerHTML = friWeekSchedule[selectedLanguage];
          document.getElementById('rec-sat-day').innerHTML = satWeekSchedule[selectedLanguage];
          document.getElementById('rec-sun-day').innerHTML = sunWeekSchedule[selectedLanguage];



          // Framtidsplaner
          document.getElementById('future-heading').innerHTML = futureHeading[selectedLanguage];
          document.getElementById('future-remember-save').innerHTML = futureRememberSave[selectedLanguage];
          document.getElementById('future-desc').innerHTML = futureDesc[selectedLanguage];

          document.getElementById('add-task-span').innerHTML = addTaskSpan[selectedLanguage];

          document.getElementById('add-date-label').innerHTML = addDateLabel[selectedLanguage];
          document.getElementById('add-todo-label').innerHTML = addTodoLabel[selectedLanguage];

          document.getElementById('add-todo-text').placeholder = placeholderScheduleTask[selectedLanguage];

          document.getElementById('add-color-label').innerHTML = addColorLabel[selectedLanguage];

          document.getElementById('gray-color').innerHTML = grayPicker[selectedLanguage];
          document.getElementById('yellow-color').innerHTML = yellowPicker[selectedLanguage];
          document.getElementById('green-color').innerHTML = greenPicker[selectedLanguage];
          document.getElementById('blue-color').innerHTML = bluePicker[selectedLanguage];
          document.getElementById('purple-color').innerHTML = purplePicker[selectedLanguage];
          document.getElementById('red-color').innerHTML = redPicker[selectedLanguage];

          document.getElementById('rec-text-span').innerHTML = recHeader[selectedLanguage];

          // Periodicity
          document.getElementById('periodicity-header').innerHTML = periodicityHeader[selectedLanguage];
          document.getElementById('day-period').innerHTML = periodDay[selectedLanguage];
          document.getElementById('week-period').innerHTML = periodWeek[selectedLanguage];
          document.getElementById('month-period').innerHTML = periodMonth[selectedLanguage];
          document.getElementById('year-period').innerHTML = periodYear[selectedLanguage];

          document.getElementById('day-choices').innerHTML = dayChoices[selectedLanguage];
          document.getElementById('select-days').innerHTML = selectDays[selectedLanguage];
          document.getElementById('select-duration').innerHTML = selectDuration[selectedLanguage];

          document.getElementById('mon-day').innerHTML = recMon[selectedLanguage];
          document.getElementById('tue-day').innerHTML = recTue[selectedLanguage];
          document.getElementById('wed-day').innerHTML = recWed[selectedLanguage];
          document.getElementById('thu-day').innerHTML = recThu[selectedLanguage];
          document.getElementById('fri-day').innerHTML = recFri[selectedLanguage];
          document.getElementById('sat-day').innerHTML = recSat[selectedLanguage];
          document.getElementById('sun-day').innerHTML = recSun[selectedLanguage];

          document.getElementById('event-duration-day').innerHTML = eventDurationDay[selectedLanguage];
          document.getElementById('every-week-label').innerHTML = eachWeek[selectedLanguage];

          document.getElementById('event-duration-week').innerHTML = eventDurationWeek[selectedLanguage];
          document.getElementById('event-duration-month').innerHTML = eventDurationMonth[selectedLanguage];
          document.getElementById('event-duration-year').innerHTML = eventDurationYear[selectedLanguage];

          document.getElementById('event-duration-year').innerHTML = recEvery[selectedLanguage];
          document.getElementById('week-intervall-weeks').innerHTML = recWeek[selectedLanguage];
          document.getElementById('week-header').innerHTML = weekHeader[selectedLanguage];
          document.getElementById('month-header').innerHTML = monthHeader[selectedLanguage];
          document.getElementById('year-header').innerHTML = yearHeader[selectedLanguage];

          document.getElementById('add-todo-button').innerHTML = addTaskToScheduleButton[selectedLanguage];

          // Current Plan
          document.getElementById('current-plan-text').innerHTML = currentPlanHeader[selectedLanguage];

          document.getElementById('todo-0-date').placeholder = currentPlanDatePlaceholder[selectedLanguage];
          document.getElementById('todo-0-text').placeholder = currentPlanTodoPlaceholder[selectedLanguage];
          document.getElementById('clear-all').innerHTML = clearAllButtonTranslate[selectedLanguage];
          // document.getElementById('clear-schedule').innerHTML = clearAllButtonTranslate[selectedLanguage];

          document.getElementById('color-switcher-heading').innerHTML = colorSwitcherHeading[selectedLanguage];
          document.getElementById('clear-row').innerHTML = clearRowTranslation[selectedLanguage];
          document.getElementById('close-panel').innerHTML = closePanelButtonTranslation[selectedLanguage];

          // Load Plan
          document.getElementById('load-plan-heading').innerHTML = loadPlanHeading[selectedLanguage];
          document.getElementById('load-file-button').innerHTML = loadFileButton[selectedLanguage];

          // Save Plan
          document.getElementById('save-plan-heading').innerHTML = savePlanHeading[selectedLanguage];
          document.getElementById('file-name-label').innerHTML = saveFileName[selectedLanguage];
          document.getElementById('save-as-anywhere').innerHTML = saveAsAnywhere[selectedLanguage];
          document.getElementById('save-to-downloads').innerHTML = saveToDownloads[selectedLanguage];

          // Download
          document.getElementById('dl-1').innerHTML = downloadOpt1[selectedLanguage];
          document.getElementById('incompatible-devices').innerHTML = incompatibleDevices[selectedLanguage];
          document.getElementById('dl-2').innerHTML = downloadOpt2[selectedLanguage];
          document.getElementById('any-browser-dl').innerHTML = anyBrowserDl[selectedLanguage];

          // Past Tasks
          document.getElementById('past-tasks').innerHTML = pastTasks[selectedLanguage];
          document.getElementById('copy-or-clear-past').innerHTML = copyOrClearPast[selectedLanguage];
          document.getElementById('clear-past-tasks').innerHTML = clearPastTasksButtonTranslate[selectedLanguage];
          // document.getElementById('clear-all-data').innerHTML = clearAllAppDataButtonTranslate[selectedLanguage];

          // Timer
          document.getElementById('timer-limit').innerHTML = timerLimit[selectedLanguage];

          document.getElementById('hours-list').innerHTML = hourList[selectedLanguage];
          document.getElementById('minutes-list').innerHTML = minutesList[selectedLanguage];
          document.getElementById('seconds-list').innerHTML = secondsList[selectedLanguage];
          document.getElementById('tenths-list').innerHTML = tenthsList[selectedLanguage];

          document.getElementById('hours-label').innerHTML = timerHours[selectedLanguage];
          document.getElementById('minutes-label').innerHTML = timerMinutes[selectedLanguage];
          document.getElementById('seconds-label').innerHTML = timerSeconds[selectedLanguage];
          document.getElementById('tenths-label').innerHTML = timerTenths[selectedLanguage];
          document.getElementById('timer-mode').innerHTML = timerMode[selectedLanguage];

          document.getElementById('countdown').innerHTML = countDown[selectedLanguage];
          document.getElementById('countup').innerHTML = countUp[selectedLanguage];

          document.getElementById('timer-time').innerHTML = timerTime[selectedLanguage];

          // Om
          document.getElementById('about-heading').innerHTML = aboutHeading[selectedLanguage];


          // Footer
          document.querySelector('.footer-contact h3').innerHTML = footerContact[selectedLanguage];
          document.querySelector('.footer-contact a').innerHTML = footerContactEmail[selectedLanguage];

          // Formulär-rubriker (text) [Översättning]
          document.getElementById('form-button').innerHTML = footerFormTitle[selectedLanguage];
          // document.querySelector('.get-contact-form').innerHTML = footerFormTitle[selectedLanguage];
          document.querySelector('.contact-form-title').innerHTML = formTitle[selectedLanguage];
          document.getElementById("name-label").innerHTML = usernameLabel[selectedLanguage];
          document.getElementById("email-label").innerHTML = emailLabel[selectedLanguage];
          document.getElementById("message-label").innerHTML = messageLabel[selectedLanguage];
          document.getElementById("char-counter").innerHTML = charCounterText[selectedLanguage];
          document.getElementById("send-button").innerHTML = sendButtonText[selectedLanguage];

          //Placeholders [Översättning]
          document.getElementById('user-name').placeholder = usernamePlaceholder[selectedLanguage];
          document.getElementById('user-email').placeholder = userEmailPlaceholder[selectedLanguage];
          document.getElementById('subject').placeholder = userSubjectPlaceholder[selectedLanguage];
          document.getElementById('user-message').placeholder = userMessagePlaceholder[selectedLanguage];

          // weekDisplay.textContent = weekInfo[selectedLanguage] + weekNumber;
          // weekDisplay2.textContent = weekInfo2[selectedLanguage] + weekNumber;

          changeFlagImage();
        }

        // Declare the variable
        // export const exportedLanguageVariable = selectedLanguage;

        // window.myGlobalLanguageVariable = selectedLanguage;

  //       const sharedData = { exportedLanguageVariable: selectedLanguage };
  // export { sharedData }