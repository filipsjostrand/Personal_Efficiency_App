let fileHandle;
const dateInput = document.getElementById('date-input');

// Ska todo-objekt-array, "plannedTodos" innehålla några objekt från början (exempelvis 3 till 9 objekt/dag*365 dagar = 3285 objekt/år) eller ska den vara tom?

var plannedTodos = [
    // // todo #1
    // {
    //     date: '',
    //     todo: '',
    //     color: '',
    //     isEmpty: true,
    // },
    // // todo #2
    // {
    //     date: '',
    //     todo: '',
    //     color: '',
    //     isEmpty: true,
    // },
    // {
    //     date: '',
    //     todo: '',
    //     color: '',
    //     isEmpty: true,
    // },

    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
    // {
    //     date: 'YYYY-MM-DD',
    //     todo: 'Todo X',
    //     color: 'Select',
    //     isEmpty: true,
    // },
];

var plannedTodosStart = [];
var plannedTodosEdit = [];

var currentMondayTodos = [];
var currentTuesdayTodos = [];
var currentWednesdayTodos = [];
var currentThursdayTodos = [];
var currentFridayTodos = [];
var currentSaturdayTodos = [];
var currentSundayTodos = [];

// var currentMondayTodosStart = [];

//
let dateInputValue = document.getElementById('date-input');
let textInputValue = document.getElementById('add-todo-text');

// Ska ...Collection ha "let" eller "const"(?)

let dateCollection = document.getElementsByClassName("todo-date");
let todoCollection = document.getElementsByClassName("todo-text");
let todoTextElements = document.querySelectorAll(".todo-text");
let todoColorCollection = document.getElementsByClassName("todo-color");
let todoColorElement = document.querySelector(".todo-color");
let todoColorElements = document.querySelectorAll(".todo-color");

//
let colorPickerSelect = document.querySelector('select#colors');
let colorPickerGray = document.getElementById('gray-color');
let colorPickerYellow = document.getElementById('yellow-color');
let colorPickerGreen = document.getElementById('green-color');
let colorPickerBlue = document.getElementById('blue-color');
let colorPickerPurple = document.getElementById('purple-color');
let colorPickerRed = document.getElementById('red-color');

// Clear todos...
let clearAllButton = document.getElementById('clear-all');
let clearSpecificTodoRowButton = document.getElementById('trash-can');

// Color definition
let grayColor = "rgb(150,150,150)";
let yellowColor = "rgb(255,204,0)";
let greenColor = "rgb(51,153,102)";
let blueColor = "rgb(51,102,255)";
let purpleColor = "rgb(153,51,102)";
let redColor = "rgb(255,64,64)";
let colorText;
let rgbColor;

let returnPickerBackgroundColor = colorPickerSelect.style.backgroundColor;
let returnListElementBackgroundColor = colorPickerSelect.style.backgroundColor;

colorPickerGray.style.backgroundColor = grayColor;
colorPickerYellow.style.backgroundColor = yellowColor;
colorPickerGreen.style.backgroundColor = greenColor;
colorPickerBlue.style.backgroundColor = blueColor;
colorPickerPurple.style.backgroundColor = purpleColor;
colorPickerRed.style.backgroundColor = redColor;

// _ _ _

// Week schedule

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Function to get the current weekday as a three-letter abbreviation
    function getWeekday(date) {
        // const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        return weekdays[date.getDay()];
    }

    // Function to format date as YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // _ _ _

    var todayDate = new Date();

    Date.prototype.getWeekNumber = function () {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                              - 3 + (week1.getDay() + 6) % 7) / 7);
    };

    // Example usage:
    var weekNumber = todayDate.getWeekNumber();

    // _ _ _

    // Function to get the current date in CET
    function getCETDate() {
        const now = new Date();
        // Convert to milliseconds
        const utcOffset = now.getTimezoneOffset() * 60000;
        // Create a new date object in UTC
        const utcTime = now.getTime() + utcOffset;
        // Add the CET offset (UTC+1, which is 3600000 milliseconds)
        const cetTime = utcTime + 3600000;

        return new Date(cetTime);
    }


      // Get today's date in CET
      const today = getCETDate();

      // Display current weekday
      const weekdayDisplay = document.getElementById('weekday-display');
      weekdayDisplay.textContent = `${getWeekday(today)}`;

      // Display today's date
      const dateDisplay = document.getElementById('date-display');
      dateDisplay.textContent = `${formatDate(today)}`;

      // Display current week number
      const weekDisplay = document.getElementById('week-display');
      weekDisplay.textContent = "Week: " + weekNumber;

// _ _ _


function getCurrentWeekDates() {
    const currentDay = todayDate.getDay();
    const firstDayOfWeek = new Date(todayDate.setDate(todayDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1))); // Adjust if today is Sunday
    const weekDates = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(firstDayOfWeek);
        date.setDate(firstDayOfWeek.getDate() + i);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const dd = String(date.getDate()).padStart(2, '0');
        weekDates.push(`${yyyy}-${mm}-${dd}`);
    }

    return weekDates;
}

let mondayDateDiv = document.getElementById('mon-date');
let tuesdayDateDiv = document.getElementById('tue-date');
let wednesdayDateDiv = document.getElementById('wed-date');
let thursdayDateDiv = document.getElementById('thu-date');
let fridayDateDiv = document.getElementById('fri-date')
let saturdayDateDiv = document.getElementById('sat-date')
let sundayDateDiv = document.getElementById('sun-date')


// Example usage:
const weekDates = getCurrentWeekDates();

mondayDateDiv.textContent = weekDates[0];
tuesdayDateDiv.textContent = weekDates[1];
wednesdayDateDiv.textContent = weekDates[2];
thursdayDateDiv.textContent = weekDates[3];
fridayDateDiv.textContent = weekDates[4];
saturdayDateDiv.textContent = weekDates[5];
sundayDateDiv.textContent = weekDates[6];


// _ _ _

// Color picker drop down

// Change color value on color picker
    if (colorPickerSelect.value === colorPickerGray.value) {
        colorPickerSelect.style.backgroundColor = grayColor;
    } else if (colorPickerSelect.value === colorPickerYellow.value) {
        colorPickerSelect.style.backgroundColor = yellowColor;
    } else if (colorPickerSelect.value === colorPickerGreen.value) {
        colorPickerSelect.style.backgroundColor = greenColor;
    } else if (colorPickerSelect.value === colorPickerBlue.value) {
        colorPickerSelect.style.backgroundColor = blueColor;
    } else if (colorPickerSelect.value === colorPickerPurple.value) {
        colorPickerSelect.style.backgroundColor = purpleColor;
    } else if (colorPickerSelect.value === colorPickerRed.value) {
        colorPickerSelect.style.backgroundColor = redColor;
    }

// Change color on color picker
function colorPickerFunction() {
    if (colorPickerSelect.value === "grayColor") {
        returnPickerBackgroundColor = grayColor;
    } else if (colorPickerSelect.value === "yellowColor") {
        returnPickerBackgroundColor = yellowColor;
    } else if (colorPickerSelect.value === "greenColor") {
        returnPickerBackgroundColor = greenColor;
    } else if (colorPickerSelect.value === "blueColor") {
        returnPickerBackgroundColor = blueColor;
    } else if (colorPickerSelect.value === "purpleColor") {
        returnPickerBackgroundColor = purpleColor;
    } else if (colorPickerSelect.value === "redColor") {
        returnPickerBackgroundColor = redColor;
    }

    return returnPickerBackgroundColor;
}

// Translator: Change background color on todoElement (in construction), with variable value (string)
function colorPickerElementFunction(todoColorElement) {
    if (todoColorElement.value === "grayColor") {
        todoColorElement.style.backgroundColor = grayColor;
    } else if (todoColorElement.value === "yellowColor") {
        todoColorElement.style.backgroundColor = yellowColor;
    } else if (todoColorElement.value === "greenColor") {
        todoColorElement.style.backgroundColor = greenColor;
    } else if (todoColorElement.value === "blueColor") {
        todoColorElement.style.backgroundColor = blueColor;
    } else if (todoColorElement.value === "purpleColor") {
        todoColorElement.style.backgroundColor = purpleColor;
    } else if (todoColorElement.value === "redColor") {
        todoColorElement.style.backgroundColor = redColor;
    }
}

// Translator: Color text variable to color text string
function returnRgbColor(colorText) {
    if (colorText === "grayColor") {
        return grayColor;
    } else if (colorText === "yellowColor") {
        return yellowColor;
    } else if (colorText === "greenColor") {
        return greenColor;
    } else if (colorText === "blueColor") {
        return blueColor;
    } else if (colorText === "purpleColor") {
        return purpleColor;
    } else if (colorText === "redColor") {
        return redColor;
    }
}

// Translator: rgb color to color text string
function returnDefinedColorText(rgbColor) {
    if (rgbColor === "rgb(150,150,150)") {
        return "grayColor";
    } else if (rgbColor === "rgb(255,204,0)") {
        return "yellowColor";
    } else if (rgbColor === "rgb(51,153,102)") {
        return "greenColor";
    } else if (rgbColor === "rgb(51,102,255)") {
        return "blueColor";
    } else if (rgbColor === "rgb(153,51,102)") {
        return "purpleColor";
    } else if (rgbColor === "rgb(255,64,64)") {
        return "redColor";
    }
}

// Color picker drop down (change)
colorPickerSelect.addEventListener("change", (e) => {
    colorPickerSelect.style.backgroundColor = colorPickerFunction()
});


// Funktion för att extrahera tid från todo-text (hh:mm)
function extractTime(todo) {
    console.log("extractTime(todo) körs")
    const timePattern = /^\d{2}:\d{2}/; // Hitta tidsformat hh:mm i början
    const match = todo.match(timePattern);
    return match ? match[0] : null;
}

// Funktion för att konvertera tidsträng till ett tal för enkel jämförelse (t.ex. "16:30" blir 1630)
function timeToNumber(time) {
    console.log("timeToNumber(time) körs")
    return time ? parseInt(time.replace(':', '')) : Infinity; // Ingen tid sorteras sist (Infinity)
}


// Function to convert dates to time and sort the objects
function sortArrayOfObjectsDataByDateAndTIme(arrayOfObjects) {
    return arrayOfObjects.sort((a, b) => {
    let timeA = new Date(a.date).getTime();
    let timeB = new Date(b.date).getTime();

    timeA - timeB

    timeA = timeToNumber(extractTime(a.todo));
    timeB = timeToNumber(extractTime(b.todo));

      return timeA - timeB; // Sort in ascending order
    });
  }

// _ _ _
// _ _ _

// Hjälpfunktion för att extrahera tid från "todo"-texten om den finns
function extractTimeFromTodo(todo) {
    const timePattern = /\b([01]\d|2[0-3]):([0-5]\d)\b/; // Regex för tid i formatet hh:mm
    const match = todo.match(timePattern);
    return match ? match[0] : null;
}

//_ _ _
//_ _ _


function addNewTodoContainer() {
    // // Select all existing todo containers

    // Find the highest data-id among the existing containers

// _ _ _

// createDataIdArray is a NodeList of elements with `data-id` attributes

var createDataIdArray = document.querySelectorAll('.todo-text');

// Initialize maxId to be a negative number to ensure it will be updated
var maxId = -1;

// Loop through each element in createDataIdArray
createDataIdArray.forEach(element => {
    // Get the `data-id` attribute and convert it to an integer
    var dataId = parseInt(element.getAttribute('data-id'), 10);

    console.log("dataId = " + dataId);

    // If dataId is a valid number, update maxId if dataId is greater
    if (!isNaN(dataId) && dataId > maxId) {
        maxId = dataId;
    }
});

console.log("maxId = " + maxId);
let highestId = maxId


// _ _ _

    // Set the new data-id to be one higher than the highest existing data-id
    const newId = highestId + 1;

    // Create a new div for the todo-container-element
    const newTodoContainer = document.createElement('div');
    newTodoContainer.classList.add('todo-container-element');
    newTodoContainer.setAttribute('data-id', newId);

    // Lägg in data från plannedTodos[sistaIndexNr???]

    // Create and append the first textarea for date
    const dateTextarea = document.createElement('textarea');
    dateTextarea.id = `todo-${newId}-date`;
    dateTextarea.classList.add('todo-date');
    dateTextarea.setAttribute('type', 'text');
    dateTextarea.setAttribute('data-id', newId);
    dateTextarea.setAttribute('data-key', 'date');
    dateTextarea.setAttribute('name', 'date');
    dateTextarea.textContent = `Date ${newId}`; // Placeholder text
    newTodoContainer.appendChild(dateTextarea);

    // Create and append the second textarea for text
    const textTextarea = document.createElement('textarea');
    textTextarea.id = `todo-${newId}-text`;
    textTextarea.classList.add('todo-text');
    textTextarea.setAttribute('type', 'text');
    textTextarea.setAttribute('data-id', newId);
    textTextarea.setAttribute('data-key', 'todo');
    textTextarea.setAttribute('name', 'text');
    textTextarea.textContent = `Todo Text ${newId}`; // Placeholder text
    newTodoContainer.appendChild(textTextarea);

    // Create and append the color div
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('todo-color');
    colorDiv.setAttribute('data-id', newId);
    colorDiv.setAttribute('data-key', 'color');
    colorDiv.setAttribute('name', 'color');
    // colorDiv.style.backgroundColor = "lightgreen"; // Set a color for the color div
    newTodoContainer.appendChild(colorDiv);

    // Append the new container to the main container
    const wrapperContainer = document.getElementById('todo-wrapper');
    wrapperContainer.appendChild(newTodoContainer);
}

let sortedData;

// Add todos (to todo list)
function addTaskToList() {
        console.log("addTaskToList() körs")

        plannedTodos.push(
            {
                date: `${dateInputValue.value}`,
                todo: `${textInputValue.value}`,
                color: `${colorPickerSelect.value}`,
                isEmpty: false
            }
        )


    if (plannedTodos.length > 1) {

        // Sorteringsfunktion (sortera 1. Datum, 2. Tid)
        plannedTodos.sort(function(a, b) {
            // Jämför datum först
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;

            // Om datum är lika, försök jämföra tid från "time" eller "todo"
            const timeA = a.time || extractTimeFromTodo(a.todo); // Kolla om tid finns i "time" eller i "todo"
            const timeB = b.time || extractTimeFromTodo(b.todo);

            if (timeA && timeB) {
                if (timeA < timeB) return -1;
                if (timeA > timeB) return 1;
            }

            return 0; // Om både datum och tid (från time eller todo) är lika
        });


        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
    }

    // if (plannedTodos.length > 3) {
        if (plannedTodos.length > 3) {
            addNewTodoContainer();
        }

    for (let i = 0; i < plannedTodos.length; i++) {

        console.log("plannedTodos[i] (1) = " + JSON.stringify(plannedTodos[i]))

        //Update HTML to (input order) values
        dateCollection[i].innerHTML =  plannedTodos[i].date;
        dateCollection[i].value = plannedTodos[i].date;
        todoCollection[i].innerHTML = plannedTodos[i].todo;
        todoCollection[i].value = plannedTodos[i].todo;
        todoColorCollection[i].value = plannedTodos[i].todo

        todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);

        // Change color on created todo element
        todoColorElements.forEach((todoColorElement) => colorPickerElementFunction(todoColorElement));

    }

// _ _ _

    // Följande for-loop kan integreras i ovanstående for-loop?

    // // Idé: Iterera över plannedTodos-objektet och använd boolean "isEmpty"
    // for (let i = 0; i < plannedTodos.length; i++) {
    //     console.log("for-loop körs")

    //     console.log("reset week schedule HTML")
    //     monScheduleWrapper.children[i].innerHTML = '';
    //     tueScheduleWrapper.children[i].innerHTML = '';
    //     wedScheduleWrapper.children[i].innerHTML = '';
    //     thuScheduleWrapper.children[i].innerHTML = '';
    //     friScheduleWrapper.children[i].innerHTML = '';
    //     satScheduleWrapper.children[i].innerHTML = '';
    //     sunScheduleWrapper.children[i].innerHTML = '';

    //     monScheduleWrapper.children[i].style.backgroundColor = '';
    //     tueScheduleWrapper.children[i].style.backgroundColor = '';
    //     wedScheduleWrapper.children[i].style.backgroundColor = '';
    //     thuScheduleWrapper.children[i].style.backgroundColor = '';
    //     friScheduleWrapper.children[i].style.backgroundColor = '';
    //     satScheduleWrapper.children[i].style.backgroundColor = '';
    //     sunScheduleWrapper.children[i].style.backgroundColor = '';

    //     console.log("plannedTodos[i] (1) = " + JSON.stringify(plannedTodos[i]))
    // }

// _ _ _

    // Empty todo text input
    textInputValue.value = '';

    // Följande funktioner behöver uppdateras? (2024-10-16)
    updateTodoSchedule();

    // currentMondayTodos = currentMondayTodosStart;
    updateCurrentWeekSchedule();

    // Skapa vecko-specifika array-objekt?

    // console.log(plannedTodos[0].date)
    console.log(JSON.stringify(plannedTodos))
}

// _ _ _

// Fixa så att edit fungerar för week schedule (2024-10-16)
// Edit task

let dataId;

function getDataId(dataId) {
    let currentDataId = dataId;
    console.log("currentDataId = " + currentDataId);
    return currentDataId;
}

// Behöver uppdateras (2024-10-16?)
function checkIfDateAndTextAreEmpty() {
    getDataId(dataId);
    if (dateCollection[dataId].value === '' && todoCollection[dataId].value === '') {
        plannedTodos[dataId].date = '';
        plannedTodos[dataId].todo = '';
        plannedTodos[dataId].color = '';
        todoColorCollection[dataId].style.backgroundColor = 'rgb(221, 221, 221)';
        plannedTodos[dataId].isEmpty = true;
    }
    // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
}


        // Date fields
        // Select all date fields (textareas) with the class 'todo-date'
        const dateFields = document.querySelectorAll('.todo-date');

        // Add event listeners to all the created date fields
        dateFields.forEach(function(field) {
            field.addEventListener('input', function(event) {
                dataId = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)
                console.log("key = " + key)

                getDataId(dataId);

                // console.log("plannedTodos[dataId][key] (1) = " + plannedTodos[dataId][key])
                // console.log("plannedTodos[dataId].key (1) = " + plannedTodos[dataId].key)

                if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                        checkIfDateAndTextAreEmpty();
                        // console.log("plannedTodos[dataId][key] (2) = " + plannedTodos[dataId][key])
                        plannedTodos[dataId][key] = dateCollection[dataId].value;
                        plannedTodos[dataId].isEmpty = false;
                    }

                if (dateCollection[dataId].value !== '') {
                    plannedTodos[dataId][key] = dateCollection[dataId].value;

                } else if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                    checkIfDateAndTextAreEmpty();
                }

                // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            });
        });

        // Text fields
        // Select all text fields (textareas) with the class 'todo-text'
        const todoFields = document.querySelectorAll('.todo-text');

        // Add event listeners to all the created text fields
        todoFields.forEach(function(field) {
            field.addEventListener('input', function(event) {
                dataId = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)


                if (todoCollection[dataId].value !== '') {
                    plannedTodos[dataId][key] = todoCollection[dataId].value;

                } else if (todoCollection[dataId].value === undefined || todoCollection[dataId].value === null || todoCollection[dataId].value === '') {
                    checkIfDateAndTextAreEmpty();
                }
                // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            });
        });


// Select the parent element and the color switcher panel
const parentDiv = document.getElementById('todo-wrapper');
const childDivs = parentDiv.querySelectorAll('.todo-color');

const colorSwitcherPanel = document.getElementById('color-switcher-panel');
const closePanelButton = document.getElementById('close-panel');

const colorOption = document.querySelector('.color-option');

// _ _ _

// Add event listener to the parent element
parentDiv.addEventListener('click', function(event) {
    // Check if the clicked element is a div with the name "color"
    if (event.target && event.target.getAttribute('name') === 'color') {
        dataId = event.target.getAttribute('data-id');
    }
});


// Add event listener to the parent div (event delegation)
parentDiv.addEventListener('click', function(event) {
    if (event.target && event.target.getAttribute('name') === 'color') {
        // Open the color switcher panel by removing the 'hidden' class
        // colorSwitcherPanel.classList.remove('hidden');
        colorSwitcherPanel.style.display = 'flex';
    }
});


// colorSwitcherPanel click
colorSwitcherPanel.addEventListener('click', function(e) {
        console.log("colorSwitcherPanel körs");
    getDataId();
        // console.log("colorSwitcherPanel (dataId) = " + dataId);
    todoColorCollection[dataId].value = returnRgbColor(e.target.getAttribute('data-color'));
        // console.log("returnRgbColor(e.target.getAttribute('data-color')) = " + returnRgbColor(e.target.getAttribute('data-color')))
    todoColorCollection[dataId].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));


    // const key = e.target.getAttribute('data-key');

    // console.log("JSON.stringify(plannedTodos) (1) = " + JSON.stringify(plannedTodos));
    // console.log(" plannedTodos[dataId].color (11) = " +  plannedTodos[dataId].color)
    // console.log("returnDefinedColorText(todoColorCollection[dataId].value) (select) = " + returnDefinedColorText(todoColorCollection[dataId].value))

    plannedTodos[dataId].color = returnDefinedColorText(todoColorCollection[dataId].value)

    // console.log(" plannedTodos[dataId].color (22) = " +  plannedTodos[dataId].color)
    // console.log("JSON.stringify(plannedTodos) (2) = " + JSON.stringify(plannedTodos));
});


// Add event listener to close the panel
closePanelButton.addEventListener('click', function(event) {
    event.stopPropagation();
    colorSwitcherPanel.classList.add('hidden');
    colorSwitcherPanel.style.display = 'none';
});

    clearSpecificTodoRowButton.addEventListener('click', function() {
        console.log("clearSpecificTodo")
        getDataId();

// _ _ _

// Empty the innerHTML & the backgroundColor in the weekplan (for the current todo, selected/matched from the Current Plan list)
if (plannedTodos[dataId].date === weekDates[0]) {

    currentMondayTodoItems.forEach(Element => {
        if (Element.innerHTML == plannedTodos[dataId].todo) {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        }
    })
} else if (plannedTodos[dataId].date === weekDates[1]) {
    currentTuesdayTodoItems.forEach(Element => {
        if (Element.innerHTML == plannedTodos[dataId].todo) {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        }
    })
} else if (plannedTodos[dataId].date === weekDates[2]) {
    currentWednesdayTodoItems.forEach(Element => {
        if (Element.innerHTML == plannedTodos[dataId].todo) {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        }
    })
} else if (plannedTodos[dataId].date === weekDates[3]) {
    currentThursdayTodoItems.forEach(Element => {
        if (Element.innerHTML == plannedTodos[dataId].todo) {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        }
    })
} else if (plannedTodos[dataId].date === weekDates[4]) {
    currentFridayTodoItems.forEach(Element => {
        if (Element.innerHTML == plannedTodos[dataId].todo) {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        }
    })
} else if (plannedTodos[dataId].date === weekDates[5]) {
    currentSaturdayTodoItems.forEach(Element => {
        if (Element.innerHTML == plannedTodos[dataId].todo) {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        }
    })
} else if (plannedTodos[dataId].date === weekDates[6]) {
    currentSundayTodoItems.forEach(Element => {
        if (Element.innerHTML == plannedTodos[dataId].todo) {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        }
    })
}

// _ _ _

        // Empty the Current Plan HTML row (in the DOM)
        dateCollection[dataId].value = '';
        dateCollection[dataId].innerHTML = '';
        todoCollection[dataId].value = '';
        todoCollection[dataId].innerHTML = '';
        todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

        // Empty the Current Plan object row (in the plannedTodos array of objects)
        plannedTodos[dataId].date = '';
        plannedTodos[dataId].todo = '';
        plannedTodos[dataId].color = '';
        plannedTodos[dataId].isEmpty = true;



        plannedTodos.forEach(Element => {
            if (Element.isEmpty === false) {
                plannedTodosEdit.push(Element);
            }})

        plannedTodos = plannedTodosEdit;

        plannedTodosEdit = plannedTodosStart;

        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
        event.stopPropagation();
    });

// _ _ _
// _ _ _

// Fixa så att clear todos fungerar för week schedule (2024-10-16)

// Delete, erase, remove
// Clear todos

// Clear All todos
function clearAll() {
    console.log("clearAll() körs")

    for (let i = 0; i < dateCollection.length; i++) {

        dateCollection[i].value = '';
        dateCollection[i].innerHTML = '';
        todoCollection[i].value = '';
        todoCollection[i].innerHTML = '';
        todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
    }
    dateInputValue.value = '';
    plannedTodos.length = 0;
    plannedTodos = plannedTodosStart;

    currentMondayTodoItems.forEach(Element => {
        Element.innerHTML = "";
        Element.style.backgroundColor = "";
    })
    currentTuesdayTodoItems.forEach(Element => {
        Element.innerHTML = "";
        Element.style.backgroundColor = "";
    })
    currentWednesdayTodoItems.forEach(Element => {
        Element.innerHTML = "";
        Element.style.backgroundColor = "";
    })
    currentThursdayTodoItems.forEach(Element => {
        Element.innerHTML = "";
        Element.style.backgroundColor = "";
    })
    currentFridayTodoItems.forEach(Element => {
        Element.innerHTML = "";
        Element.style.backgroundColor = "";
    })
    currentSaturdayTodoItems.forEach(Element => {
        Element.innerHTML = "";
        Element.style.backgroundColor = "";
    })
    currentSundayTodoItems.forEach(Element => {
        Element.innerHTML = "";
        Element.style.backgroundColor = "";
    })

    // returnRgbColor(colorPickerGray.value) = 'rgb(150, 150, 150)';
    colorPickerSelect.style.backgroundColor = returnRgbColor(colorPickerGray.value);
    colorPickerSelect.value = colorPickerGray.value;
    // _ _ _
    // _ _ _
}

clearAllButton.addEventListener('click', clearAll);

// Clear specific todo-row (select the trash can symbol)    //trash can dust bin recycle
function clearSpecificTodoRow() {
    console.log("clearSpecificTodo() körs")
        dateCollection[dataId].value = '';
        dateCollection[dataId].innerHTML = '';
        todoCollection[dataId].value = '';
        todoCollection[dataId].innerHTML = '';
        todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

        plannedTodos[dataId].date = '';
        plannedTodos[dataId].todo = '';
        plannedTodos[dataId].color = '';
        plannedTodos[dataId].isEmpty = true;


        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
}

// Clear todos from Week schedule!


// _ _ _

// Show plan (in week schedule)

// Monday Schedule Div
let monScheduleWrapper = document.getElementById("mon-todo");
let tueScheduleWrapper = document.getElementById("tue-todo");
let wedScheduleWrapper = document.getElementById("wed-todo");
let thuScheduleWrapper = document.getElementById("thu-todo");
let friScheduleWrapper = document.getElementById("fri-todo");
let satScheduleWrapper = document.getElementById("sat-todo");
let sunScheduleWrapper = document.getElementById("sun-todo");


function addCurrentWeekdayDivStyle(currentWeekdayDiv) {
    currentWeekdayDiv.style.display = "grid";
    currentWeekdayDiv.style.width = "100%";
    currentWeekdayDiv.style.fontSize = "13px";
    currentWeekdayDiv.style.color = "rgb(0, 0, 0)";
    currentWeekdayDiv.style.borderRadius = "5px";
}

// _ _ _

// Define 9x (Monday -> Sunday) Week Schedule Divs
let newMonWeekDiv = document.createElement("mon-schedule-div");
let newTueWeekDiv = document.createElement("tue-schedule-div");
let newWedWeekDiv = document.createElement("wed-schedule-div");
let newThuWeekDiv = document.createElement("thu-schedule-div");
let newFriWeekDiv = document.createElement("fri-schedule-div");
let newSatWeekDiv = document.createElement("sat-schedule-div");
let newSunWeekDiv = document.createElement("sun-schedule-div");

function addTodoDivs() {

    for (let i = 0; i < 9; i++) {


// `${mon-todo-week-div-i}`

        // // Create 9 Monday divs
        // newMonWeekDiv.classList.add(`mon-todo-week-div-${i}`);
        // newMonWeekDiv.id = "mon-week-schedule";
        // addCurrentWeekdayDivStyle(newMonWeekDiv)

        // // Create 9 Tuesday divs
        // newTueWeekDiv.classList.add("tue-todo-week-item");
        // newTueWeekDiv.id = "tue-week-schedule";
        // addCurrentWeekdayDivStyle(newTueWeekDiv)

        // // Create 9 Wednesday divs
        // newWedWeekDiv.classList.add("wed-todo-week-item");
        // newWedWeekDiv.id = "wed-week-schedule";
        // addCurrentWeekdayDivStyle(newWedWeekDiv)

        // // Create 9 Thursday divs
        // newThuWeekDiv.classList.add("thu-todo-week-item");
        // newThuWeekDiv.id = "thu-week-schedule";
        // addCurrentWeekdayDivStyle(newThuWeekDiv)

        // // Create 9 Friday divs
        // newFriWeekDiv.classList.add("fri-todo-week-item");
        // newFriWeekDiv.id = "fri-week-schedule";
        // addCurrentWeekdayDivStyle(newFriWeekDiv)

        // // Create 9 Saturday divs
        // newSatWeekDiv.classList.add("sat-todo-week-item");
        // newSatWeekDiv.id = "sat-week-schedule";
        // addCurrentWeekdayDivStyle(newSatWeekDiv)

        // // Create 9 Sunday divs
        // newSunWeekDiv.classList.add("sun-todo-week-item");
        // newSunWeekDiv.id = "sun-week-schedule";
        // addCurrentWeekdayDivStyle(newSunWeekDiv)

        // Create 9 Monday divs
        newMonWeekDiv.classList.add("mon-todo-week-item");
        newMonWeekDiv.id = "mon-week-schedule";
        addCurrentWeekdayDivStyle(newMonWeekDiv)

        // Create 9 Tuesday divs
        newTueWeekDiv.classList.add("tue-todo-week-item");
        newTueWeekDiv.id = "tue-week-schedule";
        addCurrentWeekdayDivStyle(newTueWeekDiv)

        // Create 9 Wednesday divs
        newWedWeekDiv.classList.add("wed-todo-week-item");
        newWedWeekDiv.id = "wed-week-schedule";
        addCurrentWeekdayDivStyle(newWedWeekDiv)

        // Create 9 Thursday divs
        newThuWeekDiv.classList.add("thu-todo-week-item");
        newThuWeekDiv.id = "thu-week-schedule";
        addCurrentWeekdayDivStyle(newThuWeekDiv)

        // Create 9 Friday divs
        newFriWeekDiv.classList.add("fri-todo-week-item");
        newFriWeekDiv.id = "fri-week-schedule";
        addCurrentWeekdayDivStyle(newFriWeekDiv)

        // Create 9 Saturday divs
        newSatWeekDiv.classList.add("sat-todo-week-item");
        newSatWeekDiv.id = "sat-week-schedule";
        addCurrentWeekdayDivStyle(newSatWeekDiv)

        // Create 9 Sunday divs
        newSunWeekDiv.classList.add("sun-todo-week-item");
        newSunWeekDiv.id = "sun-week-schedule";
        addCurrentWeekdayDivStyle(newSunWeekDiv)

        // Create new divs (e.g. id = "mon-week-schedule") in the Monday -> Sunday schedule fields
        monScheduleWrapper.appendChild(newMonWeekDiv)
        tueScheduleWrapper.appendChild(newTueWeekDiv)
        wedScheduleWrapper.appendChild(newWedWeekDiv)
        thuScheduleWrapper.appendChild(newThuWeekDiv)
        friScheduleWrapper.appendChild(newFriWeekDiv)
        satScheduleWrapper.appendChild(newSatWeekDiv)
        sunScheduleWrapper.appendChild(newSunWeekDiv)
    }
}

// Add divs to week schedule
addTodoDivs();

// for (let i = 0; i < plannedTodos.length; i++) {

//     if (plannedTodos[i].date === weekDates[0]) {
//         plannedTodos[i].todo
//     }

// }

// const currentMondayTodoItems = document.querySelectorAll("[class^='mon-todo-week-item-']");

// let currentMondayTodoItems = document.querySelectorAll(".mon-todo-week-item");
let currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
let currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
let currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
let currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
let currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
let currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
let currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");

let mondayTodoItem = document.querySelector(".mon-todo-week-item");
let tuesdayTodoItem = document.querySelector(".tue-todo-week-item");
let wednesdayTodoItem = document.querySelector(".wed-todo-week-item");
let thursdayTodoItem = document.querySelector(".thu-todo-week-item");
let fridayTodoItem = document.querySelector(".fri-todo-week-item");
let saturdayTodoItem = document.querySelector(".sat-todo-week-item");
let sundayTodoItem = document.querySelector(".sun-todo-week-item");

let currentMonCollection = document.getElementsByClassName("mon-todo-week-item");
let currentTueCollection = document.getElementsByClassName("tue-todo-week-item");
let currentWedCollection = document.getElementsByClassName("wed-todo-week-item");
let currentThuCollection = document.getElementsByClassName("thu-todo-week-item");
let currentFriCollection = document.getElementsByClassName("fri-todo-week-item");
let currentSatCollection = document.getElementsByClassName("sat-todo-week-item");
let currentSunCollection = document.getElementsByClassName("sun-todo-week-item");

// _ _ _

// Gör inget(?) ((2024-10-10))
function updateTodoSchedule() {

    for (let i = 0; i < plannedTodos.length; i++) {
        if (plannedTodos[i].isEmpty === false && dateCollection[i].innerHTML == mondayDateDiv.textContent) {
            alert("This todo date matches the current Monday date");

            console.log("i (1) = " + i);
        }
        else if (plannedTodos[i].isEmpty === false && dateCollection[i].innerHTML == tuesdayDateDiv.textContent) {
            alert("This todo date matches the current Tuesday date");
        }

    }
}


let mondayTodoCollection = document.querySelectorAll(".grid-item day1");
let tuesdayTodoCollection = document.querySelectorAll(".grid-item day2");
let wednesdayTodoCollection = document.querySelectorAll(".grid-item day3");
let thursdayTodoCollection = document.querySelectorAll(".grid-item day4");
let fridayTodoCollection = document.querySelectorAll(".grid-item day5");
let saturdayTodoCollection = document.querySelectorAll(".grid-item day6");
let sundayTodoCollection = document.querySelectorAll(".grid-item day7");



// update data (to divs in the week schedule)
function updateCurrentWeekSchedule() {
    console.log("updateCurrentWeekSchedule() körs");
    // currentMondayTodos = plannedTodos.filter(todo => todo.date === weekDates[0]);
    // console.log("currentMondayTodos.object, JSON.stringify(currentMondayTodos) (i updateCurrentWeekSchedule)  = " + JSON.stringify(currentMondayTodos))

    console.log("plannedTodos.length = " + plannedTodos.length)

// _ _ _

currentMondayTodos = [];
currentTuesdayTodos = [];
currentWednesdayTodos = [];
currentThursdayTodos = [];
currentFridayTodos = [];
currentSaturdayTodos = [];
currentSundayTodos = [];

// console.log("currentMondayTodoItems[0].innerHTML = " + currentMondayTodoItems[0].innerHTML);
// console.log("currentMondayTodos efter reset, JSON.stringify = " + JSON.stringify(currentMondayTodos));

plannedTodos.forEach((todo) => {
    if (todo.date === weekDates[0] && currentMondayTodos.length <= 9) {
        currentMondayTodos.push({
            date: `${todo.date}`,
            todo: `${todo.todo}`,
            color: `${todo.color}`,
            isEmpty: false
        });

    } else if (todo.date === weekDates[1] && currentTuesdayTodos.length <= 9) {
        currentTuesdayTodos.push({
            date: `${todo.date}`,
            todo: `${todo.todo}`,
            color: `${todo.color}`,
            isEmpty: false
        });
    } else if (todo.date === weekDates[2] && currentWednesdayTodos.length <= 9) {
        currentWednesdayTodos.push({
            date: `${todo.date}`,
            todo: `${todo.todo}`,
            color: `${todo.color}`,
            isEmpty: false
        })
     } else if (todo.date === weekDates[3] && currentThursdayTodos.length <= 9) {
        currentThursdayTodos.push({
            date: `${todo.date}`,
            todo: `${todo.todo}`,
            color: `${todo.color}`,
            isEmpty: false
        });
    } else if (todo.date === weekDates[4] && currentFridayTodos.length <= 9) {
        currentFridayTodos.push({
            date: `${todo.date}`,
            todo: `${todo.todo}`,
            color: `${todo.color}`,
            isEmpty: false
        });
    } else if (todo.date === weekDates[5] && currentSaturdayTodos.length <= 9) {
        currentSaturdayTodos.push({
            date: `${todo.date}`,
            todo: `${todo.todo}`,
            color: `${todo.color}`,
            isEmpty: false
        });
    } else if (todo.date === weekDates[6] && currentSundayTodos.length <= 9) {
        currentSundayTodos.push({
            date: `${todo.date}`,
            todo: `${todo.todo}`,
            color: `${todo.color}`,
            isEmpty: false
        });
    }
})
}

    // _ _ _

let addTodoButton = document.getElementById("add-todo-button");

addTodoButton.addEventListener("click", function(e) {



        // Loop through the current...dayTodos and fill in the corresponding divs
        for (let i = 0; i < currentMondayTodos.length; i++) {

            console.log("i = " + i)

            if (i < currentMondayTodoItems.length) {
                currentMondayTodoItems[i].innerHTML = currentMondayTodos[i].todo;
                currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
            }
        }

        for (let i = 0; i < currentTuesdayTodos.length; i++) {

            console.log("i = " + i)

            if (i < currentTuesdayTodoItems.length) {
                currentTuesdayTodoItems[i].innerHTML = currentTuesdayTodos[i].todo;
                currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentTuesdayTodos[i].color);
            }
        }

        for (let i = 0; i < currentWednesdayTodos.length; i++) {

            console.log("i = " + i)

            if (i < currentWednesdayTodoItems.length) {
                currentWednesdayTodoItems[i].innerHTML = currentWednesdayTodos[i].todo;
                currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentWednesdayTodos[i].color);
            }
        }

        for (let i = 0; i < currentThursdayTodos.length; i++) {

            console.log("i = " + i)

            if (i < currentThursdayTodoItems.length) {
                currentThursdayTodoItems[i].innerHTML = currentThursdayTodos[i].todo;
                currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(currentThursdayTodos[i].color);
            }
        }

        for (let i = 0; i < currentFridayTodos.length; i++) {

            console.log("i = " + i)

            if (i < currentFridayTodoItems.length) {
                currentFridayTodoItems[i].innerHTML = currentFridayTodos[i].todo;
                currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(currentFridayTodos[i].color);
            }
        }

        for (let i = 0; i < currentSaturdayTodos.length; i++) {

            console.log("i = " + i)

            if (i < currentSaturdayTodoItems.length) {
                currentSaturdayTodoItems[i].innerHTML = currentSaturdayTodos[i].todo;
                currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(currentSaturdayTodos[i].color);
            }
        }

        for (let i = 0; i < currentSundayTodos.length; i++) {

            console.log("i = " + i)

            if (i < currentSundayTodoItems.length) {
                currentSundayTodoItems[i].innerHTML = currentSundayTodos[i].todo;
                currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(currentSundayTodos[i].color);
            }
        }

})


        // _ _ _ ((Används (2024-10-14)?))

        function redistributeScheduleContent(scheduleWrappers) {
            scheduleWrappers.forEach(wrapper => {
                let emptyChildIndex = -1;


                // Find the first empty child element
                for (let i = 0; i < wrapper.children.length; i++) {
                    if (wrapper.children[i].textContent.trim() === '') {
                        emptyChildIndex = i;
                        break;
                    }
                }

                // If an empty child element is found, find a later filled child element
                if (emptyChildIndex !== -1) {
                    for (let j = emptyChildIndex + 1; j < wrapper.children.length; j++) {
                        if (wrapper.children[j].textContent.trim() !== '') {
                            // Replace the empty child's textContent with the filled child's textContent
                            wrapper.children[emptyChildIndex].textContent = wrapper.children[j].textContent;
                            wrapper.children[emptyChildIndex].style.backgroundColor = wrapper.children[j].style.backgroundColor;
                            // Make the filled child's textContent become empty
                            wrapper.children[j].textContent = '';
                            wrapper.children[j].style.backgroundColor = '';
                            break;
                        }
                    }
                }
            });
        }

        // Usage
        const scheduleWrappers = [
            monScheduleWrapper,
            tueScheduleWrapper,
            wedScheduleWrapper,
            thuScheduleWrapper,
            friScheduleWrapper,
            satScheduleWrapper,
            sunScheduleWrapper
        ];

        redistributeScheduleContent(scheduleWrappers);

        currentMondayTodos.forEach(currentMondayTodos => {
            console.log("currentMondayTodos = " + currentMondayTodos)})

        currentMondayTodoItems.forEach(currentMondayTodoItems => {
            console.log("currentMondayTodoItems = " + currentMondayTodoItems.innerHTML)})

        // currentTuesdayTodos.forEach(currentTuesdayTodos => {
        //     console.log("currentTuesdayTodos = " + currentTuesdayTodos)})

        // currentTuesdayTodoItems.forEach(currentTuesdayTodoItems => {
        //     console.log("currentTuesdayTodoItems = " + currentTuesdayTodoItems.innerHTML)})



console.log("currentTuesdayTodos (utanför updateCurrent...) = " + currentTuesdayTodos)

// _ _ _


// Hur hantera data som finns i input-fält (i browsern) vid uppstart? (2024-10-07)

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    // console.log("plannedTodos before DOM update" + JSON.stringify(plannedTodos))
    updatePlannedTodosWithDomData();
    // updateCurrentWeekSchedule();
    console.log("plannedTodos after DOM update" + JSON.stringify(plannedTodos))
    console.log("object updated with DOM data?");
  });

function updatePlannedTodosWithDomData() {
    if (dateCollection.length > 0) {
        for (i = 0; i < dateCollection.length; i++) {
            if (dateCollection[i].value !== "") {
                plannedTodos[i].date = dateCollection[i].value;
                plannedTodos[i].todo = todoCollection[i].value;
                plannedTodos[i].color = "grayColor";
                plannedTodos[i].isEmpty = false;
            }
        }
    }
}

// _ _ _


// _ _ _

// Skapa en tom struktur för veckans todos (FIXA gräns!? (max 9 todos(?))
// let weekTodos = {
//     mon: [],
//     tue: [],
//     wed: [],
//     thu: [],
//     fri: [],
//     sat: [],
//     sun: []
// };
let weekTodos = [];


// _ _ _
// _ _ _

// Load plan
async function loadPlan() {
    let [fileHandle] = await window.showOpenFilePicker({
        types: [
            {
                // description: 'Images',
                description: 'JS-object (date, todo-text, color and isEmpty)',
                accept: {
                    // 'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
                    'text/*': ['.txt', '.json'],
                }
            },
        ],
        excludeAcceptAlloption: true,
        multiple: false
    });
    // console.log(fileHandle.kind);
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    console.log(text);
    console.log("typeof text = " + typeof text);

    // Convert the loaded JSON.stringify(plannedTodos) (= "text" (string)) into an object (-> "plannedTodos" (object))
    plannedTodos = JSON.parse(text)
    console.log("JSON.stringify(plannedTodos) (loaded) = " + JSON.stringify(plannedTodos));
    // _ _ _

    // FIXA! (Lägg till nya todo-rader! (samt system för plannedTodos (antal), max 3650 todos i plannedTodos? (max length, plannedTodos.length))
    for (let i = 0; i < plannedTodos.length; i++) {
        console.log("for-loop (load) körs")

        console.log("plannedTodos[i].date = " + plannedTodos[i].date)
            dateCollection[i].value = plannedTodos[i].date;
            dateCollection[i].innerHTML = plannedTodos[i].date;
            todoCollection[i].value = plannedTodos[i].todo;
            todoCollection[i].innerHTML = plannedTodos[i].todo;
            todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);
    }

    for (let i = 0; i < plannedTodos.length; i++) {
        if (plannedTodos[i].date == weekDates[0]) {
            console.log("mondayDate Matches (on load)")
            monScheduleWrapper.children[i].textContent = plannedTodos[i].todo
            monScheduleWrapper.children[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color)
        }
    }

    // _ _ _

}

// Save plan
async function save() {
    let stream = await fileHandle.createWritable();
    await stream.write(JSON.stringify(plannedTodos));
    await stream.close();
}

// saveAs plan
async function saveAs() {
    fileHandle = await window.showSaveFilePicker();
    save();
}