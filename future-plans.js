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

let currentTodoContainerRowLength;

function returnCurrentTodoContainerRowLength(plannedTodos) {

    if (plannedTodos.length <= 3) {
        currentTodoContainerRowLength = 3
        } else if (plannedTodos.length > 3) {
        currentTodoContainerRowLength = plannedTodos.length
        }

    console.log("currentTodoContainerRowLength = " + currentTodoContainerRowLength)

    return currentTodoContainerRowLength;

}

var plannedTodosStart = [];
var plannedTodosEdit = [];
var dayArrayObjectToRemove = [];

var currentMondayTodos = [];
var currentTuesdayTodos = [];
var currentWednesdayTodos = [];
var currentThursdayTodos = [];
var currentFridayTodos = [];
var currentSaturdayTodos = [];
var currentSundayTodos = [];

var currentDynamicDayArray = [];
var currentDynamicDayArrayEdit = [];

// var recurringTodosArray = []; // Maximum objects: 9
// var recurringTodosArrayEdit = [];

// var currentMondayTodosEdit = [];
// var currentTuesdayTodosEdit = [];
// var currentWednesdayTodosEdit = [];
// var currentThursdayTodosEdit = [];
// var currentFridayTodosEdit = [];
// var currentSaturdayTodosEdit = [];
// var currentSundayTodosEdit = [];

// var currentMondayTodosStart = [];

//
let dateInputValue = document.getElementById('date-input');
let textInputValue = document.getElementById('add-todo-text');
let isRecurringCheckbox = document.getElementById("todo-recurring-input");

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

// let currentDay = todayDate.getDay();
// let firstDayOfWeek = new Date(todayDate.setDate(todayDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1))); // Adjust if today is Sunday

// function getCurrentWeekDates(firstDayOfWeek) {
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

// _ _ _

function getDayOfWeek(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);

    // Array of weekday names, starting with Sunday
    const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    // Get the day index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayIndex = date.getDay();

    // Return the corresponding day name
    return daysOfWeek[dayIndex];
}

// _ _ _

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

function returnColorText(colorText) {
    if (colorText === "grayColor") {
        return "gray";
    } else if (colorText === "yellowColor") {
        return "yellow";
    } else if (colorText === "greenColor") {
        return "green";
    } else if (colorText === "blueColor") {
        return "blue";
    } else if (colorText === "purpleColor") {
        return "purple";
    } else if (colorText === "redColor") {
        return "red";
    }
}

// Color picker drop down (change)
colorPickerSelect.addEventListener("change", (e) => {
    colorPickerSelect.style.backgroundColor = colorPickerFunction()
});

let todoContainers = document.querySelectorAll('.todo-container-element');


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


// _ _ _

// Function to convert dates to time and sort the objects
function sortArrayOfObjectsDataByDateAndTIme(arrayOfObjects) {
    console.log("sortArrayOfObjectsDataByDateAndTIme körs");
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

let sortedData;

// Add todos (to todo list)
// add task (addtask)

// // Make the todo list readonly (start)
// document.getElementById("todo-0-date").setAttribute("readonly", true);
// document.getElementById("todo-0-text").setAttribute("readonly", true);
// document.getElementById("todo-0-color").setAttribute("readonly", true);

// document.getElementById("todo-1-date").setAttribute("readonly", true);
// document.getElementById("todo-1-text").setAttribute("readonly", true);
// document.getElementById("todo-1-color").setAttribute("readonly", true);

// document.getElementById("todo-2-date").setAttribute("readonly", true);
// document.getElementById("todo-2-text").setAttribute("readonly", true);
// document.getElementById("todo-2-color").setAttribute("readonly", true);

// Function to check if a todo already exists
function isDuplicateTodo(newTodo, todosArray) {
    return todosArray.some(existingTodo =>
        existingTodo.date === newTodo.date &&
        existingTodo.todo === newTodo.todo
    );
}

// function enableInputsWhenTodosAdded(plannedTodos) {
//     // Select all textareas and elements you want to update
//     // const dateInputs = document.querySelectorAll(".todo-date"); (= dateFields)
//     // const textInputs = document.querySelectorAll(".todo-text"); (= todoTextElements)
//     // const colorDivs = document.querySelectorAll(".todo-color"); (= todoColorElements)


//     // Loop through the plannedTodos array
//     plannedTodos.forEach((todo, index) => {
//         // Enable date input if a plannedTodo exists for the current index
//         if (todo.date) {
//             dateFields[index].removeAttribute("readonly");
//             dateFields[index].value = todo.date; // Fill with planned todo's date
//         }

//         // Enable text input if a plannedTodo exists for the current index
//         if (todo.todo) {
//             todoTextElements[index].removeAttribute("readonly");
//             todoTextElements[index].value = todo.todo; // Fill with planned todo's text
//         }

//         // Optional: Handle divs (color divs don't have a readonly attribute, so just set their styles or values)
//         if (todo.color) {
//             todoColorElements[index].style.backgroundColor = todo.color; // Set background color
//         }
//     });
// }

var weekDayNumber;

function weekdayNameToWeekDayNumber(dateInputValue) {
    if (getDayOfWeek(dateInputValue.value) === "mon") {
        weekDayNumber = "0";
    }
    else if (getDayOfWeek(dateInputValue.value) === "tue") {
        weekDayNumber = "1";
    }
    else if (getDayOfWeek(dateInputValue.value) === "wed") {
        weekDayNumber = "2";
    }
    else if (getDayOfWeek(dateInputValue.value) === "thu") {
        weekDayNumber = "3";
    }
    else if (getDayOfWeek(dateInputValue.value) === "fri") {
        weekDayNumber = "4";
    }
    else if (getDayOfWeek(dateInputValue.value) === "sat") {
        weekDayNumber = "5";
    }
    else if (getDayOfWeek(dateInputValue.value) === "sun") {
        weekDayNumber = "6";
    }
    return weekDayNumber;
}


function addTaskToList() {

    // let isRecurring = isRecurringCheckbox.checked; // Get the recurring checkbox

        console.log("addTaskToList() körs")

        if (dateInputValue.value === "") {
            alert("You must select a valid date!");
        }
        else if (currentMondayTodos.length >= 9) {
            alert("Current Monday tasks (9) has exceeded")
            return 0;
        }
        else if (currentTuesdayTodos.length >= 9) {
            alert("Current Tuesday tasks (9) has exceeded")
            return 0;
        }
        else if (currentWednesdayTodos.length >= 9) {
            alert("Current Wednesday tasks (9) has exceeded")
            return 0;
        }
        else if (currentThursdayTodos.length >= 9) {
            alert("Current Thursday tasks (9) has exceeded")
            return 0;
        }
        else if (currentFridayTodos.length >= 9) {
            alert("Current Friday tasks (9) has exceeded")
            return 0;
        }
        else if (currentSaturdayTodos.length >= 9) {
            alert("Current Saturday tasks (9) has exceeded")
            return 0;
        }
        else if (currentSundayTodos.length >= 9) {
            alert("Current Sunday tasks (9) has exceeded")
            return 0;
        }
        else if(dateInputValue.value !== "") {
            let newTodo = {
                date: dateInputValue.value,
                todo: textInputValue.value,
                color: colorPickerSelect.value,
                isRecurring: isRecurringCheckbox.checked,
                dataDate: '',
                isEmpty: false
            }

            // if (getDayOfWeek(dateInputValue.value) === "mon") {
            //     newTodo.dataDate = "0";
            // }
            // else if (getDayOfWeek(dateInputValue.value) === "tue") {
            //     newTodo.dataDate = "1";
            // }
            // else if (getDayOfWeek(dateInputValue.value) === "wed") {
            //     newTodo.dataDate = "2";
            // }
            // else if (getDayOfWeek(dateInputValue.value) === "thu") {
            //     newTodo.dataDate = "3";
            // }
            // else if (getDayOfWeek(dateInputValue.value) === "fri") {
            //     newTodo.dataDate = "4";
            // }
            // else if (getDayOfWeek(dateInputValue.value) === "sat") {
            //     newTodo.dataDate = "5";
            // }
            // else if (getDayOfWeek(dateInputValue.value) === "sun") {
            //     newTodo.dataDate = "6";
            // }

        newTodo.dataDate = weekdayNameToWeekDayNumber(dateInputValue);

        if (isDuplicateTodo(newTodo, plannedTodos)) {
            console.log("Duplicate todo detected! This todo will not be added.");
            alert("Duplicate todo detected! This todo will not be added.");
        } else {
            plannedTodos.push(newTodo);
            console.log("Todo added successfully!");
        }

        // plannedTodos.push(
        //     {
        //         date: `${dateInputValue.value}`,
        //         todo: `${textInputValue.value}`,
        //         color: `${colorPickerSelect.value}`,
        //         isEmpty: false
        //     }
        // )


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
            addDynamicTodoContainer();
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


    // _ _ _

    // if (newTodo.isRecurring === true && recurringTodosArray.length < 9) {
    //     // push newTodo + dataDate
    //     recurringTodosArray.push({
    //         date: dateInputValue.value,
    //         todo: textInputValue.value,
    //         color: colorPickerSelect.value,
    //         isRecurring: isRecurringCheckbox.checked,
    //         dataDate: '',
    //         isEmpty: false
    //     });
    //     console.log("JSON.stringify(recurringTodosArray) (1) = " + JSON.stringify(recurringTodosArray));
    // } else if (newTodo.isRecurring === true && recurringTodosArray.length >= 9) {
    //     alert("Maximum number of recurring tasks (9) exceeded");
    // }

    // _ _ _


    // Empty todo text input
    textInputValue.value = '';

    // // Följande funktioner behöver uppdateras? (2024-10-16)
    // updateTodoSchedule();

    // currentMondayTodos = currentMondayTodosStart;

    // Update the week schedule (when a new task is added)
    updateCurrentWeekSchedule();
    ifPlannedTodosIsPastPutToPastPlans();

    // Skapa vecko-specifika array-objekt?

    // console.log(plannedTodos[0].date)
    console.log(JSON.stringify(plannedTodos))

    // // Add an event listener to detect changes in the textarea
    // myTextArea.addEventListener("input", function () {
    //     // Check if the textarea is filled with data (not empty)
    //     if (myTextArea.value.trim() !== "") {
    //         // Remove the 'readonly' attribute
    //         myTextArea.removeAttribute("readonly");
    //         console.log("Readonly attribute removed!");
    //     }
    // });

// _ _ _

    // // Call the function when todos are added
    // if (plannedTodos <= 3) {
    //     enableInputsWhenTodosAdded(plannedTodos);
    // }

    // _ _ _ (recursive functionality, 2024-11-27)

    // // Optionally, re-render the schedule or update the UI
    // renderWeeklySchedule(new Date()); // Assuming today's week start date

    // _ _ _

        // if (newTodo.isRecurring === true && recurringTodosArray.length < 9) {
        //     // push newTodo + dataDate
        //     recurringTodosArray.push({
        //         date: dateInputValue.value,
        //         todo: textInputValue.value,
        //         color: colorPickerSelect.value,
        //         isRecurring: isRecurringCheckbox.checked,
        //         dataDate: '',
        //         isEmpty: false
        //     });
        //     console.log("JSON.stringify(recurringTodosArray) (1) = " + JSON.stringify(recurringTodosArray));
        // } else if (newTodo.isRecurring === true && recurringTodosArray.length >= 9) {
        //     alert("Maximum number of recurring tasks (9) exceeded");
        // }

    }
}

// _ _ _

// Fixa så att edit fungerar för week schedule (2024-10-16)
// Edit task (change todo)

// let currentTodoInitialValue;

function getCurrentDataId() {
    // Select all divs with the class 'clickable-div'
    // const divs = document.querySelectorAll('.todo-container-element');

    // Add click event listener to each div
    todoContainers.forEach(div => {
    // divs.forEach(div => {
        // console.log("addEventListener for " + div.dataset.id);   (Jocke-kommentar 2024-11-13)
        div.addEventListener('click', function() {
            // Access the data-id attribute
            const dataId = div.dataset.id;
            console.log('Clicked div data-id:', dataId);

            // let currentTodoInitialValue = plannedTodos[dataId].todo;
            // console.log("currentTodoInitialValue (start) = " + currentTodoInitialValue);

            // currentTodoInitialValue = plannedTodos[dataId].todo;
            // console.log("currentTodoInitialValue (1) = " + currentTodoInitialValue);
        });
    });
}

getCurrentDataId('todo-container-element');

let dataId;

function getDataId(dataId) {
    if (!dataId) {
        console.warn("dataId is not provided.");
    }
    let currentDataId = dataId;
    console.log("currentDataId = " + currentDataId);
    return currentDataId;
}

// _ _ _

    // // Add input event listener to each div
    // todoContainers.forEach(div => {
    //     // div.addEventListener('click', function() {
    //     //     getDataId(dataId)
    //     //     let currentTodoInitialValue = plannedTodos[dataId].todo;
    //     //     console.log("currentTodoInitialValue (start) = " + currentTodoInitialValue);
    //     //     });
    //         div.addEventListener('input', function() {
    //             console.log("currentTodoInitialValue (i input-listener) = " + currentTodoInitialValue);
    //             getDataId(dataId)
    //             console.log('Clicked div dataId = ', dataId);

    //             // let currentTodoInitialValue = plannedTodos[dataId].todo;
    //             // console.log("currentTodoInitialValue (2) = " + currentTodoInitialValue);
    //             console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));

    //             // 1. if plannedTodos[dataId].todo matches currentMondayTodos[any].todo && plannedTodos[dataId].date matches currentMondayTodos[any].todo, DÅ: currentMondayTodos[any].todo = plannedTodos[dataId].todo && currentMondayTodoItems[any].innerHTML = plannedTodos[dataId].todo

    //             if (currentMondayTodos.length > 0) {
    //                 for (let i = 0; i < currentMondayTodos.length; i++) {
    //                     if (currentMondayTodos[i].date === plannedTodos[dataId].date && currentMondayTodos[i].todo === currentTodoInitialValue) {
    //                         console.log("Monday change ooa");
    //                         console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
    //                         console.log("i = " + i);
    //                         // currentMondayTodos[i].todo = plannedTodos[dataId].todo;
    //                         // currentMondayTodoItems[i].innerHTML = plannedTodos[dataId].todo
    //                         currentMondayTodos[i].todo = todoCollection[dataId].value;
    //                         currentMondayTodoItems[i].innerHTML = todoCollection[dataId].value;
    //                     }
    //                 }

    //             }
    //         });
    // });

// _ _ _
// _ _ _
// _ _ _ (idé 2024-11-20)

// let specificTodoContainerLength = specificTodoContainer.length;

// function getSpecificTodoContainerLength(specificTodoContainerLength) {
//     if (!specificTodoContainerLength) {
//         console.warn("SpecificTodoContainer is not provided.");
//     }
// }

// _ _ _

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

                // UPPDATERA TODO-TASK-List-DATUM (och dataDate), Lägg till på nytt (objekt och DOM-element) och ta bort gammalt (objekt och DOM-element)

                // 1. Om DOM-datumet (dateCollection[dataId].value) ändras && nytt datum finns i veckovy. (loopa igenom och undersök om dateCollection[dataId].value === weekDates[i]) => Ta bort old todo-vecko-div från vecko-vy (se removeSpecificTodo)
                // 2. Lägg till ny todo-vecko-div i vecko-vy (för nytt datum) ((där style.backgroundColor === ''(?)))


                plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumber(dateCollection[dataId])
                console.log("plannedTodos[dataId].dataDate = " +  weekdayNameToWeekDayNumber(dateCollection[dataId]))

                // _ _ _

                    // if (currentMondayTodos.length > 0) {
                    //     for (let i = 0; i < currentMondayTodos.length; i++) {
                    //         // Hitta currentMondayTodos-objekt som är lika plannedTodos[dataId]

                    //         // _ _ _
                    //         if (currentMondayTodos[i].date === plannedTodos[dataId].date && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {
                    //             console.log("Monday date change ooa");
                    //             console.log("dateCollection[dataId].value (2) = " + dateCollection[dataId].value)
                    //             console.log("i = " + i);

                    //             plannedTodos[dataId].dateDate = weekdayNameToWeekDayNumber(dateCollection[dataId]);
                    //             console.log("plannedTodos[dataId].dateDate (mon) = " + plannedTodos[dataId].dateDate)


                    //             // currentMondayTodos[i].date = '';
                    //             // currentMondayTodos[i].todo = '';
                    //             // currentMondayTodos[i].color = '';
                    //             // currentMondayTodoItems[i].style.backgroundColor = '';
                    //             // currentMondayTodoItems[i].innerHTML = '';
                    //             // currentMondayTodos[i].date = dateCollection[dataId].value;
                    //         }
                    //     }
                    // }

                    // if (currentTuesdayTodos.length > 0) {
                    //     for (let i = 0; i < currentTuesdayTodos.length; i++) {
                    //         // Hitta currentMondayTodos-objekt som är lika plannedTodos[dataId]

                    //         // _ _ _
                    //         if (currentTuesdayTodos[i].date === plannedTodos[dataId].date && currentTuesdayTodos[i].todo === plannedTodos[dataId].todo) {
                    //             console.log("Monday date change ooa");
                    //             console.log("dateCollection[dataId].value (2) = " + dateCollection[dataId].value)
                    //             console.log("i = " + i);

                    //             plannedTodos[dataId].dateDate = weekdayNameToWeekDayNumber(dateCollection[dataId]);
                    //             console.log("plannedTodos[dataId].dateDate (tue) = " + plannedTodos[dataId].dateDate)
                    //         }
                    //     }
                    // }


                    // _ _ _
                    // _ _ _

                    //         if (plannedTodos[dataId].date === weekDates[0] && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {

                    //             currentMondayTodoItems.forEach(Element => {
                    //                 if (Element.innerHTML == plannedTodos[dataId].todo) {
                    //                     Element.innerHTML = "";
                    //                     Element.style.backgroundColor = "";
                    //                 }
                    //             })
                    //         }
                    //         // else if (plannedTodos[dataId].date === weekDates[0] && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {

                    //         //     currentMondayTodoItems.forEach(Element => {
                    //         //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                    //         //             Element.innerHTML = "";
                    //         //             Element.style.backgroundColor = "";
                    //         //         }
                    //         //     })
                    //         // }
                    //         // else if (plannedTodos[dataId].date === weekDates[0] && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {

                    //         //     currentMondayTodoItems.forEach(Element => {
                    //         //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                    //         //             Element.innerHTML = "";
                    //         //             Element.style.backgroundColor = "";
                    //         //         }
                    //         //     })
                    //         // }
                    //         // else if (plannedTodos[dataId].date === weekDates[0] && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {

                    //         //     currentMondayTodoItems.forEach(Element => {
                    //         //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                    //         //             Element.innerHTML = "";
                    //         //             Element.style.backgroundColor = "";
                    //         //         }
                    //         //     })
                    //         // }
                    //         // else if (plannedTodos[dataId].date === weekDates[0] && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {

                    //         //     currentMondayTodoItems.forEach(Element => {
                    //         //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                    //         //             Element.innerHTML = "";
                    //         //             Element.style.backgroundColor = "";
                    //         //         }
                    //         //     })
                    //         // }
                    //         // else if (plannedTodos[dataId].date === weekDates[0] && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {

                    //         //     currentMondayTodoItems.forEach(Element => {
                    //         //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                    //         //             Element.innerHTML = "";
                    //         //             Element.style.backgroundColor = "";
                    //         //         }
                    //         //     })
                    //         // }
                    //         // else if (plannedTodos[dataId].date === weekDates[0] && currentMondayTodos[i].todo === plannedTodos[dataId].todo) {

                    //         //     currentMondayTodoItems.forEach(Element => {
                    //         //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                    //         //             Element.innerHTML = "";
                    //         //             Element.style.backgroundColor = "";
                    //         //         }
                    //         //     })
                    //         // }
                    //     }
                    // }

                // _ _ _

                    plannedTodos[dataId][key] = dateCollection[dataId].value;

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

                    // recurringTodosArrayEdit.push({
                    // })

                    // Update the week schedule (when a task has been edited)
                    updateCurrentWeekSchedule();
                    // domUpdateCurrentWeekSchedule();



                } else if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                    checkIfDateAndTextAreEmpty();
                }

                // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            });
        });

        // Text fields
        // Select all text fields (textareas) with the class 'todo-text'
        const todoFields = document.querySelectorAll('.todo-text');
        // let currentTodoField = document.querySelector('.todo-text');

        // Add event listeners to all the created todo-text fields
        todoFields.forEach(function(field) {
            field.addEventListener('input', function(event) {
                console.log("task row, listening for added todo input");
                dataId = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)

                console.log("todoCollection[dataId].value = " + todoCollection[dataId].value)
                console.log("currentMondayTodos.length = " + currentMondayTodos.length)
                console.log("currentWednesdayTodos.length = " + currentWednesdayTodos.length)

                // Edit plannedTodos (object) when todo (DOM-list) is changed
                if (todoCollection[dataId].value !== '') {

                    // Om måndag-array-objekt finns, gå igenom alla måndags-objekt,    OM måndags-objekt-datum är lika plannedTodos-objekt-datum     &&  måndags-objekt-todo är lika plannedTodos-objekt-todo (för aktuell todo-liste-rad)  DÅ  (Hämta todo-värden från DOM-raden och lägg in i week schedule (för måndags-objekten i tur och ordning, efter "i"))
                    if (currentMondayTodos.length > 0) {
                        for (let i = 0; i < currentMondayTodos.length; i++) {
                            // Hitta currentMondayTodos-objekt som är lika plannedTodos[dataId]

                            // if (currentMondayTodos[i].date === plannedTodos[dataId].date && currentMondayTodos[i].todo === plannedTodos[dataId].todo)

                                if (
                                currentMondayTodos[i]?.date === plannedTodos[dataId]?.date &&
                                currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo)
                                {
                                console.log("Monday todo change ooa");
                                console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                                console.log("i = " + i);
                                currentMondayTodos[i].todo = todoCollection[dataId].value;
                                currentMondayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }

                    // _ _ _
                    // _ _ _
                    // _ _ _

                    if (currentTuesdayTodos.length > 0) {
                        for (let i = 0; i < currentTuesdayTodos.length; i++) {
                            // Hitta currentTuesdayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentTuesdayTodos[i]?.date === plannedTodos[dataId]?.date && currentTuesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                console.log("Tuesday todo change ooa");
                                console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                                console.log("i = " + i);
                                currentTuesdayTodos[i].todo = todoCollection[dataId].value;
                                currentTuesdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }


                        // currentWednesdayTodos.forEach(todoRow => {

                        //     if (todoRow.date === plannedTodos[dataId].date && todoRow.todo === plannedTodos[dataId].todo) {
                        //         console.log("Wednesday todo change ooa");
                        //         console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                        //         todoRow.todo = todoCollection[dataId].value;
                        //         todoRow.innerHTML = todoCollection[dataId].value;
                        //     }
                        // })

                                            if (currentWednesdayTodos.length > 0) {
                        for (let i = 0; i < currentWednesdayTodos.length; i++) {

                            // Hitta currentWednesdayTodos-objekt som är lika plannedTodos[dataId]

                            if (currentWednesdayTodos[i]?.date === plannedTodos[dataId]?.date && currentWednesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                console.log("Wednesday todo change ooa");
                                console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                                console.log("i = " + i);
                                currentWednesdayTodos[i].todo = todoCollection[dataId].value;
                                currentWednesdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }

                    if (currentThursdayTodos.length > 0) {
                        for (let i = 0; i < currentThursdayTodos.length; i++) {
                            // Hitta currentThursdayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentThursdayTodos[i]?.date === plannedTodos[dataId]?.date && currentThursdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                console.log("Thursday todo change ooa");
                                console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                                console.log("i = " + i);
                                currentThursdayTodos[i].todo = todoCollection[dataId].value;
                                currentThursdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }
                    if (currentFridayTodos.length > 0) {
                        for (let i = 0; i < currentFridayTodos.length; i++) {
                            // Hitta currentFridayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentFridayTodos[i]?.date === plannedTodos[dataId]?.date && currentFridayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                console.log("Friday todo change ooa");
                                console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                                console.log("i = " + i);
                                currentFridayTodos[i].todo = todoCollection[dataId].value;
                                currentFridayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }
                    if (currentSaturdayTodos.length > 0) {
                        for (let i = 0; i < currentSaturdayTodos.length; i++) {
                            // Hitta currentSaturdayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentSaturdayTodos[i]?.date === plannedTodos[dataId]?.date && currentSaturdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                console.log("Saturday todo change ooa");
                                console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                                console.log("i = " + i);
                                currentSaturdayTodos[i].todo = todoCollection[dataId].value;
                                currentSaturdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }
                    if (currentSundayTodos.length > 0) {
                        for (let i = 0; i < currentSundayTodos.length; i++) {
                            // Hitta currentSundayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentSundayTodos[i]?.date === plannedTodos[dataId]?.date && currentSundayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                console.log("Sunday todo change ooa");
                                console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                                console.log("i = " + i);
                                currentSundayTodos[i].todo = todoCollection[dataId].value;
                                currentSundayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }


                    // _ _ _
                    // _ _ _
                    // _ _ _

                    // ((((()))))

                    // ((((()))))

                    // // Uppdatera recurringTodosArray
                    // if (recurringTodosArray.length > 0) {
                    //     for (let i = 0; i < recurringTodosArray.length; i++) {
                    //         // Hitta recurringTodosArray-objekt som är lika plannedTodos[dataId]
                    //         if (plannedTodos[dataId].isRecurring = true && recurringTodosArray[i].todo === plannedTodos[dataId].todo && recurringTodosArray[i].dataDate !== plannedTodos[dataId].dataDate) {
                    //             console.log("recurringTodosArray todo change ooa");
                    //             console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                    //             console.log("i = " + i);
                    //             recurringTodosArray[i].todo = todoCollection[dataId].value;
                    //             currentSundayTodoItems[i].innerHTML = todoCollection[dataId].value;
                    //         }
                    //     }
                    // }

                    plannedTodos[dataId][key] = todoCollection[dataId].value;

                } else if (todoCollection[dataId].value === undefined || todoCollection[dataId].value === null || todoCollection[dataId].value === '') {
                    checkIfDateAndTextAreEmpty();
                }
                // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            });
        });


// currentTodoField.addEventListener('click', function() {
//     console.log("Todo field is clicked?")
// });

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
    // getDataId();
    getDataId(dataId);
        // console.log("colorSwitcherPanel (dataId) = " + dataId);
    todoColorCollection[dataId].value = returnRgbColor(e.target.getAttribute('data-color'));
        // console.log("returnRgbColor(e.target.getAttribute('data-color')) = " + returnRgbColor(e.target.getAttribute('data-color')))
    todoColorCollection[dataId].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));


    // const key = e.target.getAttribute('data-key');

    // console.log("JSON.stringify(plannedTodos) (1) = " + JSON.stringify(plannedTodos));
    // console.log(" plannedTodos[dataId].color (11) = " +  plannedTodos[dataId].color)
    // console.log("returnDefinedColorText(todoColorCollection[dataId].value) (select) = " + returnDefinedColorText(todoColorCollection[dataId].value))

    // Vilken currentDAY(?)todos har samma date & todo som plannedTodos[dataId].date && plannedTodos[dataId].todo?

    console.log("currentMondayTodos.length = " + currentMondayTodos.length);

    console.log("[...currentMondayTodoItems] = " + [...currentMondayTodoItems]);

    // [...currentMondayTodoItems].forEach(MondayTodoItem => {
    //     if (MondayTodoItem.date === plannedTodos[dataId].date && MondayTodoItem.todo === plannedTodos[dataId].todo)
    //     // console.log(MondayTodoItem.innerHTML);
    //     MondayTodoItem.style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
    // });

    // currentMondayTodoItems.forEach(Element =>
    // if (Element.innerHTML == plannedTodos[dataId] && ) {
    // })
    console.log("currentMondayTodoItems[0].color = " + currentMondayTodoItems[0].color)
    console.log("currentMondayTodoItems[0].innerHTML = " + currentMondayTodoItems[0].innerHTML)
    console.log("currentMondayTodoItems[0].style.backgroundColor = " + currentMondayTodoItems[0].style.backgroundColor)

    // 1. Hitta currentDayTodos[i] som matchar plannedTodos[dataId].date && plannedTodos[dataId].todo
    // 2. Ändra färg för aktuellt index ([i]), (currentDayTodos[i].color && currentDayTodoItems[i].style.backgroundColor)

    // _ _ _

    console.log("which day ooa");

    for (let i = 0; i < 8; i++) {
    if (currentMondayTodos.length > 0 &&
        // Om currentMondayTodos-objekt och plannedTodos-objekt är lika ==> hämta färg för currentMondayTodos-objekt från plannedTodos-DOM-färg-listan (todoColorCollection)
        currentMondayTodos[i]?.date === plannedTodos[dataId]?.date &&
        currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
        console.log("Monday ooa");
                currentMondayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                console.log("here, Monday, returnRgbColor(e.target.getAttribute('data-color')) = " + returnRgbColor(e.target.getAttribute('data-color')))
                currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
            }
    else if (currentTuesdayTodos.length > 0 &&
        currentTuesdayTodos[i]?.date === plannedTodos[dataId]?.date &&
        currentTuesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                currentTuesdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
            }
    else if (currentWednesdayTodos.length > 0 &&
        currentWednesdayTodos[i]?.date === plannedTodos[dataId]?.date &&
        currentWednesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                currentWednesdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
            }
    else if (currentThursdayTodos.length > 0 &&
        currentThursdayTodos[i]?.date === plannedTodos[dataId]?.date &&
        currentThursdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                currentThursdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
            }
    else if (currentFridayTodos.length > 0 &&
        currentFridayTodos[i]?.date === plannedTodos[dataId]?.date &&
        currentFridayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                currentFridayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
            }
    else if (currentSaturdayTodos.length > 0 &&
        currentSaturdayTodos[i]?.date === plannedTodos[dataId]?.date &&
        currentSaturdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                currentSaturdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
            }
    else if (currentSundayTodos.length > 0 &&
        currentSundayTodos[i]?.date === plannedTodos[dataId]?.date &&
        currentSundayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                currentSundayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
            }
    }

    // _ _ _

    plannedTodos[dataId].color = returnDefinedColorText(todoColorCollection[dataId].value)

    console.log("e.target.getAttribute('data-color') = " + e.target.getAttribute('data-color'));
    console.log(" plannedTodos[dataId].color (22) = " +  plannedTodos[dataId].color)
    // console.log("JSON.stringify(plannedTodos) (2) = " + JSON.stringify(plannedTodos));
});


// Add event listener to close the panel
closePanelButton.addEventListener('click', function(event) {
    event.stopPropagation();
    colorSwitcherPanel.classList.add('hidden');
    colorSwitcherPanel.style.display = 'none';
});

// _ _ _

//  resetWeekdayEditArrays() körs inte !?!? (2024-11-28)
    // function resetWeekdayEditArrays() {
    //     currentMondayTodosEdit = [];
    //     currentTuesdayTodosEdit = [];
    //     currentWednesdayTodosEdit = [];
    //     currentThursdayTodosEdit = [];
    //     currentFridayTodosEdit = [];
    //     currentSaturdayTodosEdit = [];
    //     currentSundayTodosEdit = [];
    // };

// _ _ _

let recurringOutput;

function convertStringToBoolean(recurring) {
    if (recurring === "true") {
        recurringOutput = true;
    }
    else if (recurring === "false") {
        recurringOutput = false;
    }
    return recurringOutput;
}

// Remove specific todo (start)
// delete specific todo
// removespecific

let wrapperContainer = document.getElementById('todo-wrapper');
let specificTodoContainer = wrapperContainer.getElementsByClassName('todo-container-element');

// function addReadonlyToRemovedRowElements(dataId) {
//     // Select the elements for the specified dataId
//     const dateInput = document.querySelector(`textarea.todo-date[data-id="${dataId}"]`);
//     const textInput = document.querySelector(`textarea.todo-text[data-id="${dataId}"]`);
//     const colorDiv = document.querySelector(`div.todo-color[data-id="${dataId}"]`);

//     // Check if plannedTodos has 3 or fewer elements
//     if (plannedTodos.length <= 3) {
//         // Add the readonly attribute back to the textareas
//         if (dateInput) {
//             dateInput.setAttribute("readonly", true);
//             dateInput.value = ""; // Optionally clear the value
//         }

//         if (textInput) {
//             textInput.setAttribute("readonly", true);
//             textInput.value = ""; // Optionally clear the value
//         }

//         // Optional: Reset color div (if needed)
//         if (colorDiv) {
//             colorDiv.style.backgroundColor = "rgb(228,228,228)"; // Reset background color
//         }
//     }
// }

// Clear Specific Todo row (start)
    clearSpecificTodoRowButton.addEventListener('click', function() {

                console.log("clearSpecificTodo-function() körs")
                // getDataId();
                getDataId(dataId);
                console.log("getDataId(dataId) körs i clear specifictodo (= #" + getDataId(dataId) + " )");

        // _ _ _

        // Empty the innerHTML & the backgroundColor in the week schedule (for the current todo, selected/matched from the Current Plan list)
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

        // Add the specific object (to be deleted) to a specific "dayArrayToRemove"

        // if (plannedTodos[dataId].date === weekDates[0] || plannedTodos[dataId].date === weekDates[1] ...

        // If the todo also needs to be deleted from the current week schedule


        // _ _ _
        // Vilka tasks visas i week schedule?  (( Lägg in task i "dayArrayObjectToRemove" oavsett om den finns med i currentDayArray eller ej!?!!? ))
        // currentMondayTodo.forEach(todoRow => { if (plannedTodos[dataId].todo === todoRow.todo && )}
        // _ _ _

        let taskNotInCurrentWeekScheduleArray = [];

        if (plannedTodos[dataId].date <= weekDates[0] && getDayOfWeek(plannedTodos[dataId].date) === "mon" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[1] && getDayOfWeek(plannedTodos[dataId].date) === "tue" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[2] && getDayOfWeek(plannedTodos[dataId].date) === "wed" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[3] && getDayOfWeek(plannedTodos[dataId].date) === "thu" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[4] && getDayOfWeek(plannedTodos[dataId].date) === "fri" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[5] && getDayOfWeek(plannedTodos[dataId].date) === "sat" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[6] && getDayOfWeek(plannedTodos[dataId].date) === "sun" && plannedTodos[dataId].isRecurring === true) {

            // plannedTodos[dataId].date = dateCollection[dataId].value
            console.log(" plannedTodos[dataId].date = " +  plannedTodos[dataId].date)
            console.log(" JSON.stringify(plannedTodos) = " +  JSON.stringify(plannedTodos))

            console.log(" `${plannedTodos[dataId].isRecurring}` = " +  `${plannedTodos[dataId].isRecurring}`)

            dayArrayObjectToRemove.push({
                date: `${plannedTodos[dataId].date}`,
                todo: `${plannedTodos[dataId].todo}`,
                color: `${plannedTodos[dataId].color}`,
                isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                dataDate: `${plannedTodos[dataId].dataDate}`,
                isEmpty: false
            });
        } else if (plannedTodos[dataId].date === weekDates[0] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[1] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[2] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[3] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[4] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[5] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[6] && plannedTodos[dataId].isRecurring === false) {
            dayArrayObjectToRemove.push({
                date: `${plannedTodos[dataId].date}`,
                todo: `${plannedTodos[dataId].todo}`,
                color: `${plannedTodos[dataId].color}`,
                isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                dataDate: `${plannedTodos[dataId].dataDate}`,
                isEmpty: false
            });
        }
        // If the todo doesn't need to be deleted from the current week schedule
        else if (plannedTodos[dataId].date !== weekDates[0] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[1] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[2] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[3] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[4] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[5] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[6] && plannedTodos[dataId].isRecurring === false) {
            dayArrayObjectToRemove.push({
                date: `${plannedTodos[dataId].date}`,
                todo: `${plannedTodos[dataId].todo}`,
                color: `${plannedTodos[dataId].color}`,
                isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                dataDate: `${plannedTodos[dataId].dataDate}`,
                isEmpty: false
            });
                taskNotInCurrentWeekScheduleArray.push({
                    date: `${plannedTodos[dataId].date}`,
                    todo: `${plannedTodos[dataId].todo}`,
                    color: `${plannedTodos[dataId].color}`,
                    isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                    dataDate: `${plannedTodos[dataId].dataDate}`,
                    isEmpty: false
            });
        }

        console.log("dayArrayObjectToRemove = " + JSON.stringify(dayArrayObjectToRemove));

        // _ _ _

        // let taskNotInCurrentWeekScheduleArray = [];

        const arraysByDay = {
            currentMondayTodos,
            currentTuesdayTodos,
            currentWednesdayTodos,
            currentThursdayTodos,
            currentFridayTodos,
            currentSaturdayTodos,
            currentSundayTodos,
            taskNotInCurrentWeekScheduleArray
        };

        // Define the specific object you want to find
        let targetObject = dayArrayObjectToRemove[0];

        console.log("targetObject = " + JSON.stringify(targetObject));
        console.log("currentMondayTodos = " + JSON.stringify(currentMondayTodos));
        console.log("JSON.stringify(arraysByDay) = " + JSON.stringify(arraysByDay));

        // Function to search for the object in each array
        function findArrayContainingObject(target, arrays) {
            for (const [arrayName, todosArray] of Object.entries(arrays)) {
                for (const todo of todosArray) {

                    // Undersök innehåll i todo & target
                    console.log("Comparing:", JSON.stringify(todo), "with", JSON.stringify(target));

                const found = todosArray.some(todo =>
                    JSON.stringify(todo) === JSON.stringify(target)
                );
                if (found) {
                    return arrayName;
                }
                // else if ()
            }
            }
            return null; // If no matching object is found in any array
        }

        // Call the function
        const resultArray = findArrayContainingObject(targetObject, arraysByDay);



        console.log("resultArray = " + resultArray); // Outputs: e.g. "currentWeekdayTodos" if the object is found

        let key = resultArray;
        currentDynamicDayArray = arraysByDay[key];

        console.log("JSON.stringify(currentDynamicDayArray) (1) = " + JSON.stringify(currentDynamicDayArray));

        for ( i = 0; i < currentDynamicDayArray.length; i++) {
            console.log("targetObject.date = " +  targetObject.date)
            console.log("currentDynamicDayArray[0].date = " + currentDynamicDayArray[0].date)
            console.log("currentDynamicDayArray[i].todo == targetObject.date = " + currentDynamicDayArray[i].todo == targetObject.date)

            if (currentDynamicDayArray[i].todo !== targetObject.todo) {

            console.log("KÖR: currentDynamicDayArray[i].todo !== targetObject.todo = " + currentDynamicDayArray[i].todo !== targetObject.todo)

                currentDynamicDayArrayEdit.push({
                    date: `${currentDynamicDayArray[i].date}`,
                    todo: `${currentDynamicDayArray[i].todo}`,
                    color: `${currentDynamicDayArray[i].color}`,
                    isRecurring: convertStringToBoolean(`${currentDynamicDayArray[i].isRecurring}`),
                    dataDate: `${currentDynamicDayArray[i].dataDate}`,
                    isEmpty: false
                });
            }
        }

        currentDynamicDayArray = currentDynamicDayArrayEdit;

        // currentDynamicDayArrayEdit = [];

        console.log("JSON.stringify(currentDynamicDayArrayEdit) = " + JSON.stringify(currentDynamicDayArrayEdit));

        console.log("currentDynamicDayArray = " + currentDynamicDayArray);
        console.log("JSON.stringify(currentDynamicDayArray) (2) = " + JSON.stringify(currentDynamicDayArray));

        // _ _ _

        // Function to exclude the target object from each array and collect the rest
        function excludeObjectFromArrays(target, arrays) {
            const newArray = [];

            Object.values(arrays).forEach(todosArray => {
                const filteredArray = todosArray.filter(todo =>
                    JSON.stringify(todo) !== JSON.stringify(target)
                );
                newArray.push(...filteredArray); // Add all non-matching objects to newArray
            });

            return newArray;
        }



        // Call the function
        let updatedResultArray = excludeObjectFromArrays(targetObject, arraysByDay);

        console.log("JSON.stringify(updatedResultArray) = " + JSON.stringify(updatedResultArray));
        console.log("updatedResultArray = " + updatedResultArray);

        // _ _ _

        if (resultArray == "currentMondayTodos") {
            console.log("töm ('') currentMondayTodos")

            for (let i = 0; i < currentMondayTodos.length; i++) {
                currentMondayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                });
            }
            console.log("currentMondayTodos = arraysByDay(monday), not updatedResultArray!, arraysByDay = " + arraysByDay)
            // currentMondayTodos = updatedResultArray;
            currentMondayTodos = currentDynamicDayArray;
            for (let i = 0; i < currentMondayTodos.length; i++) {
                currentMondayTodoItems[i].innerHTML = currentMondayTodos[i].todo;
                currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
                // currentMondayTodoItems.forEach(Element => {
                //     Element.innerHTML = currentMondayTodos[i].todo;
                //     Element.style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
                // });
            }
        } else if (resultArray == "currentTuesdayTodos") {
            console.log("töm ('') currentTuesdayTodos")

            for (let i = 0; i < currentTuesdayTodos.length; i++) {
                currentTuesdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                });
            }
            // currentTuesdayTodos = updatedResultArray;
            currentTuesdayTodos = currentDynamicDayArray;
            for (let i = 0; i < currentTuesdayTodos.length; i++) {
                currentTuesdayTodoItems[i].innerHTML = currentTuesdayTodos[i].todo;
                currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentTuesdayTodos[i].color);
            }
        } else if (resultArray == "currentWednesdayTodos") {
            console.log("töm ('') currentWednesdayTodos")

            for (let i = 0; i < currentWednesdayTodos.length; i++) {
                currentWednesdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                });
            }
            // currentWednesdayTodos = updatedResultArray;
            currentWednesdayTodos = currentDynamicDayArray;
            for (let i = 0; i < currentWednesdayTodos.length; i++) {
                currentWednesdayTodoItems[i].innerHTML = currentWednesdayTodos[i].todo;
                currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentWednesdayTodos[i].color);
            }
        } else if (resultArray == "currentThursdayTodos") {
            console.log("töm ('') currentThursdayTodos")

            for (let i = 0; i < currentThursdayTodos.length; i++) {
                currentThursdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                });
            }
            // currentThursdayTodos = updatedResultArray;
            currentThursdayTodos= currentDynamicDayArray;
            for (let i = 0; i < currentThursdayTodos.length; i++) {
                currentThursdayTodoItems[i].innerHTML = currentThursdayTodos[i].todo;
                currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(currentThursdayTodos[i].color);
            }
        } else if (resultArray == "currentFridayTodos") {
            console.log("töm ('') currentFridayTodos")
            for (let i = 0; i < currentFridayTodos.length; i++) {
                currentFridayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                });
            }
            // currentFridayTodos = updatedResultArray;
            currentFridayTodos = currentDynamicDayArray;
            for (let i = 0; i < currentFridayTodos.length; i++) {
                currentFridayTodoItems[i].innerHTML = currentFridayTodos[i].todo;
                currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(currentFridayTodos[i].color);
            }
        } else if (resultArray == "currentSaturdayTodos") {
            console.log("töm ('') currentSaturdayTodos")
            for (let i = 0; i < currentSaturdayTodos.length; i++) {
                currentSaturdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                });
            }
            // currentSaturdayTodos = updatedResultArray;
            currentSaturdayTodos = currentDynamicDayArray;
            for (let i = 0; i < currentSaturdayTodos.length; i++) {
                currentSaturdayTodoItems[i].innerHTML = currentSaturdayTodos[i].todo;
                currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(currentSaturdayTodos[i].color);
            }
        } else if (resultArray == "currentSundayTodos") {
            console.log("töm ('') currentSundayTodos")
            for (let i = 0; i < currentSundayTodos.length; i++) {
                currentSundayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                });
            }
            // currentSundayTodos = updatedResultArray;
            currentSundayTodos = currentDynamicDayArray;
            for (let i = 0; i < currentSundayTodos.length; i++) {
                currentSundayTodoItems[i].innerHTML = currentSundayTodos[i].todo;
                currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(currentSundayTodos[i].color);
            }
        }

        // _ _ _
        // _ _ _

                // Empty the Current Plan HTML row (in the DOM)
                dateCollection[dataId].value = '';
                dateCollection[dataId].innerHTML = '';
                todoCollection[dataId].value = '';
                todoCollection[dataId].innerHTML = '';
                todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

                // // Empty the Current Plan object row (in the plannedTodos array of objects)
                // plannedTodos[dataId].date = '';
                // plannedTodos[dataId].todo = '';
                // plannedTodos[dataId].color = '';
                // plannedTodos[dataId].isEmpty = true;

                // plannedTodos.forEach(Element => {
                //     if (Element.isEmpty === false) {
                //         plannedTodosEdit.push(Element);

                //         console.log("element to save")

                //     }})

                //     console.log("JSON.stringify(plannedTodosEdit) = " + JSON.stringify(plannedTodosEdit))
                //     console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))

                //     // Find the unique "extra" object in arrayOfObjectsOne
                //     const uniqueObject = plannedTodos.filter(obj1 =>
                //         !plannedTodosEdit.some(obj2 => JSON.stringify(obj2) === JSON.stringify(obj1))
                //     );

                //     console.log("uniqueObject = " + uniqueObject);
                //     console.log("uniqueObject.length = " + uniqueObject.length);

                // _ _ _
                // _ _ _

                // _ _ _

                var lastDomRowNumber;
                var lastDomRowNumberIndexNr;

                if (plannedTodos.length <= 3) {
                    console.log("plannedTodos.length <= 3")
                    lastDomRowNumber = 2;
                } else if (plannedTodos.length > 3) {
                    console.log("plannedTodos.length > 3")
                    lastDomRowNumber = plannedTodos.length - 1;
                } else if (!plannedTodos.length) {
                    console.log("!plannedTodos.length")
                    lastDomRowNumber = 2;
                    currentMondayTodos = [];
                    currentTuesdayTodos = [];
                    currentWednesdayTodos = [];
                    currentThursdayTodos = [];
                    currentFridayTodos = [];
                    currentSaturdayTodos = [];
                    currentSundayTodos = [];
                    taskNotInCurrentWeekScheduleArray = [];
                }

                console.log("lastDomRowNumber = " + lastDomRowNumber);
                console.log("lastDomRowNumber === 'number' = " + lastDomRowNumber === "number");
                if (typeof lastDomRowNumber === "number") {
                lastDomRowNumberIndexNr = lastDomRowNumber-1
                console.log("lastDomRowNumberIndex = " + lastDomRowNumberIndexNr);
                }

                // _ _ _

                console.log("plannedTodos.length (1) = " + plannedTodos.length);

                // Fyll på Edit-objektet (ny plannedTodo)

                if (plannedTodosEdit.length > 0) {
                    console.log("JSON.stringify(plannedTodosEdit) (if plannedTodosEdit.length > 0) = " + JSON.stringify(plannedTodosEdit));
                }

                plannedTodos.forEach(plannedTodosElement => {
                    console.log("plannedTodosElement.todo = " + plannedTodosElement.todo);
                    console.log("targetObject.todo = " + targetObject.todo);
                    if (plannedTodosElement.todo !== targetObject.todo) {
                        plannedTodosEdit.push({
                            date: `${plannedTodosElement.date}`,
                            todo: `${plannedTodosElement.todo}`,
                            color: `${plannedTodosElement.color}`,
                            isRecurring: convertStringToBoolean(`${plannedTodosElement.isRecurring}`),
                            dataDate: `${plannedTodosElement.dataDate}`,
                            isEmpty: false
                        });
                    }
                });

                console.log("Här 5")
                // _ _ _

                console.log("JSON.stringify(plannedTodosEdit) (after) = " + JSON.stringify(plannedTodosEdit));

                // Ny plannedTodos (med ett färre objekt än tidigare)
                plannedTodos = plannedTodosEdit;

                // plannedTodosEdit = plannedTodosStart;
                plannedTodosEdit = [];

                console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                console.log("plannedTodos.length (2) = " + plannedTodos.length);

                // Uppdatera DOM:en (med plannedTodos-objekt-data)

                //_ _ _

                for (i = 0; i < plannedTodos.length; i++) {
                    console.log("'i' vid iterering över plannedTodos.length: " + i);
                }

                [...dateCollection].forEach(item => {
                    console.log("item.innerHTML: " + item.innerHTML);
                });

                for (i = 0; i < plannedTodos.length; i++) {
                    console.log("'i' in remove specific todo: " + i);
                    console.log("plannedTodos[i].date = " + plannedTodos[i].date);
                    console.log("dateCollection.length = " + dateCollection.length);
                    console.log("todoCollection.length = " + todoCollection.length);
                    console.log("[...dateCollection][i].value = " + [...dateCollection][i].value);
                    console.log("[...todoCollection][i].value = " + [...todoCollection][i].value);
                    dateCollection[i].value = plannedTodos[i].date;
                    dateCollection[i].innerHTML = plannedTodos[i].date;
                    todoCollection[i].value = plannedTodos[i].todo;
                    todoCollection[i].innerHTML = plannedTodos[i].todo;
                    todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);
                }

                //_ _ _
                //_ _ _

                console.log("plannedTodos.length (3) = " + plannedTodos.length);

                //_ _ _
                //_ _ _

                // 1. Töm sista raden i DOM:en
                // 2. Ta (eventuellt) bort sista raden i DOM:En (om fler än 3)

                // _ _ _
                // _ _ _ (modellering, ta bort specifik todo)

                [...dateCollection].forEach(date => {
                    console.log("[...dateCollection].forEach (innerHTML & value) = " + date.innerHTML + " & " + date.value);
                });

                console.log("plannedTodos.length = " + plannedTodos.length);
                console.log("specificTodoContainer.length = " + specificTodoContainer.length);
                console.log("currentWednesdayTodos.length = " + currentWednesdayTodos.length);
                console.log("dateCollection.length = " + dateCollection.length);
                console.log("todoCollection.length = " + todoCollection.length);

                plannedTodos.forEach(element => {console.log("JSON.sfy(plannedTodos-element) = " + JSON.stringify(element))})
                currentWednesdayTodos.forEach(element => {console.log("JSON.sfy(wed-element) = " + JSON.stringify(element))})

                console.log("lastDomRowNumber = " + lastDomRowNumber)
                console.log("lastDomRowNumberIndexNr = " + lastDomRowNumberIndexNr)

                console.log("dataId = " + dataId);
                // console.log("currentDataId = " + currentDataId);


                // _ _ _

                console.log("To remove:");
                console.log("lastDomRowNumber = " + lastDomRowNumber);
                console.log("dateCollection[lastDomRowNumber].value: " + dateCollection[lastDomRowNumber].value);
                console.log("dateCollection[lastDomRowNumber].innerHTML: " + dateCollection[lastDomRowNumber].innerHTML);
                console.log("todoCollection[lastDomRowNumber].value: " + todoCollection[lastDomRowNumber].value);
                console.log("todoCollection[lastDomRowNumber].innerHTML: " + todoCollection[lastDomRowNumber].innerHTML);
                console.log("todoColorCollection[lastDomRowNumber].style.backgroundColor: " + todoColorCollection[lastDomRowNumber].style.backgroundColor);

                console.log("dateCollection[lastDomRowNumberIndexNr].value: " + dateCollection[lastDomRowNumberIndexNr].value);
                console.log("dateCollection[lastDomRowNumberIndexNr].innerHTML: " + dateCollection[lastDomRowNumberIndexNr].innerHTML);
                console.log("todoCollection[lastDomRowNumberIndexNr].value: " + todoCollection[lastDomRowNumberIndexNr].value);
                console.log("todoCollection[lastDomRowNumberIndexNr].innerHTML: " + todoCollection[lastDomRowNumberIndexNr].innerHTML);
                console.log("todoColorCollection[lastDomRowNumberIndexNr].style.backgroundColor: " + todoColorCollection[lastDomRowNumberIndexNr].style.backgroundColor);

                dateCollection[lastDomRowNumber].value = '';
                dateCollection[lastDomRowNumber].innerHTML = '';
                todoCollection[lastDomRowNumber].value = '';
                todoCollection[lastDomRowNumber].innerHTML = '';
                todoColorCollection[lastDomRowNumber].style.backgroundColor = 'rgb(228,228,228)';

                if (plannedTodos.length === 1 && dateCollection[1].value !== '') {
                    dateCollection[1].value = '';
                    todoCollection[1].value = '';
                    todoColorCollection[1].style.backgroundColor = 'rgb(228,228,228)';

                }

                // _ _ _
                // _ _ _
                // _ _ _

                removeLastDynamicTodoContainer();

                // _ _ _
                // Loop backward to avoid issues with live updates to the collection
                console.log("dateCollection.length === plannedTodos.length+1: " + dateCollection.length === plannedTodos.length+1);
                // if (dateCollection.length === plannedTodos.length+1) {
                //     dateCollection[plannedTodos.length].remove();
                // }
                // _ _ _

                // for (let i = dateCollection.length - 1; i >= 0; i--) {
                //     if (items[i].innerHTML === "Second") {
                //         items[i].remove(); // Remove the element from the DOM
                //     }
                // }

                // _ _ _
                // _ _ _
                // _ _ _

        //         // console.log("specificTodoContainer.length (i removespecifictodo) = " + specificTodoContainer.length);

        //         let lastCollectionNumber;

        //         if (plannedTodos.length <= 3) {
        //                 lastCollectionNumber = 2;


        //             if (lastCollectionNumber === 2) {
        //             // console.log("lastCollectionNumber (plannedTodos.length) = " + dateCollection.plannedTodos.length);
        //             // console.log("plannedTodos.length - 1 (lastCollectionNumber) = " + plannedTodos.length - 1);
        //             console.log("lastCollectionNumber (1)  = " + lastCollectionNumber);

        //                 if (lastCollectionNumber === 2 && plannedTodos.length === 1) {

        //                     let emptyRowOne = 0;
        //                 // } else if (dateCollection.length === 3)
        //                 // console.log("lastElement.innerHTML = " + lastElement.innerHTML);

        //                     dateCollection[emptyRowOne].value = '';
        //                     dateCollection[emptyRowOne].innerHTML = '';
        //                     todoCollection[emptyRowOne].value = '';
        //                     todoCollection[emptyRowOne].innerHTML = '';
        //                     todoColorCollection[emptyRowOne].style.backgroundColor = 'rgb(228, 228, 228)';

        //                 }
        //                 else if (lastCollectionNumber === 2 && plannedTodos.length === 2) {
        //                     let emptyRowTwo = 1;
        //                             dateCollection[emptyRowTwo].value = '';
        //                             dateCollection[emptyRowTwo].innerHTML = '';
        //                             todoCollection[emptyRowTwo].value = '';
        //                             todoCollection[emptyRowTwo].innerHTML = '';
        //                             todoColorCollection[emptyRowTwo].style.backgroundColor = 'rgb(228, 228, 228)';
        //                 }
        //                 else if (lastCollectionNumber === 2 && plannedTodos.length === 3) {
        //                     let emptyRowThree = 2;
        //                             dateCollection[emptyRowThree].value = '';
        //                             dateCollection[emptyRowThree].innerHTML = '';
        //                             todoCollection[emptyRowThree].value = '';
        //                             todoCollection[emptyRowThree].innerHTML = '';
        //                             todoColorCollection[emptyRowThree].style.backgroundColor = 'rgb(228, 228, 228)';
        //                 }

        //             }
        //         }
        // //     else if (plannedTodos.length === 3) {
        // //         lastCollectionNumber = plannedTodos.length;
        // //         console.log("lastCollectionNumber = plannedTodos.length: " + lastCollectionNumber)
        // //         dateCollection[lastCollectionNumber].value = '';
        // //         dateCollection[lastCollectionNumber].innerHTML = '';
        // //         todoCollection[lastCollectionNumber].value = '';
        // //         todoCollection[lastCollectionNumber].innerHTML = '';
        // //         todoColorCollection[lastCollectionNumber].style.backgroundColor = 'rgb(228, 228, 228)';
        // // }
        //         // else if (plannedTodos.length === 3) {
        //         else if (plannedTodos.length > 3) {
        //             lastCollectionNumber = plannedTodos.length - 1;
        //             console.log("lastCollectionNumber = plannedTodos.length: " + lastCollectionNumber)
        //             dateCollection[lastCollectionNumber].value = '';
        //             dateCollection[lastCollectionNumber].innerHTML = '';
        //             todoCollection[lastCollectionNumber].value = '';
        //             todoCollection[lastCollectionNumber].innerHTML = '';
        //             todoColorCollection[lastCollectionNumber].style.backgroundColor = 'rgb(228, 228, 228)';
        //         removeLastDynamicTodoContainer();
        //     }
        //         // else if (plannedTodos.length > 3) {
        //         //     lastCollectionNumber = plannedTodos.length;
        //         //     dateCollection[lastCollectionNumber].value = '';
        //         //     dateCollection[lastCollectionNumber].innerHTML = '';
        //         //     todoCollection[lastCollectionNumber].value = '';
        //         //     todoCollection[lastCollectionNumber].innerHTML = '';
        //         //     todoColorCollection[lastCollectionNumber].style.backgroundColor = 'rgb(228, 228, 228)';
        //         //     removeLastDynamicTodoContainer();
        //         // }




        //         else if (!lastCollectionNumber) {
        //             currentMondayTodos = [];
        //             currentTuesdayTodos = [];
        //             currentWednesdayTodos = [];
        //             currentThursdayTodos = [];
        //             currentFridayTodos = [];
        //             currentSaturdayTodos = [];
        //             currentSundayTodos = [];
        //         }

                // _ _ _
                // _ _ _
                // _ _ _

                dayArrayObjectToRemove = [];
                currentDynamicDayArray = [];
                currentDynamicDayArrayEdit = [];
                taskNotInCurrentWeekScheduleArray = [];
                // resetWeekdayEditArrays();
                // updatedResultArray = 0;
                // updatedResultArray = [];

                event.stopPropagation();
                colorSwitcherPanel.classList.add('hidden');
                colorSwitcherPanel.style.display = 'none';

                // // Check and apply readonly if needed
                // addReadonlyToRemovedRowElements(dataId);
    });

// Clear Specific Todo row (slut)
// _ _ _
// _ _ _

// Fixa så att clear todos fungerar för week schedule (2024-10-16)

// Delete, erase, remove
// Clear todos

// Clear All todos
function clearAll() {
    console.log("clearAll() körs")

    // clearthe DOM todo data
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

    // removeAllTodoContainersWithDataIdGreaterThanTwo();
    // removeAllExceptThreeDynamicTodoContainers();
    // removeAllDynamicTodoContainers();
    restoreTodoWrapper();

    // returnRgbColor(colorPickerGray.value) = 'rgb(150, 150, 150)';
    colorPickerSelect.style.backgroundColor = returnRgbColor(colorPickerGray.value);
    colorPickerSelect.value = colorPickerGray.value;
    // _ _ _
    // _ _ _

    currentMondayTodos = [];
    currentTuesdayTodos = [];
    currentWednesdayTodos = [];
    currentThursdayTodos = [];
    currentFridayTodos = [];
    currentSaturdayTodos = [];
    currentSundayTodos = [];

    pastPlansTextArea.innerHTML = '';

}

clearAllButton.addEventListener('click', clearAll);


// FIXA! plannedTodos som ligger under
// clearSpecificTodoRow() körs aldrig (2024-11-06)

// Clear specific todo-row (select the trash can symbol)    //trash can dust bin recycle
// function clearSpecificTodoRow() {
//     console.log("clearSpecificTodo() körs")

//     // clearTheDOM();

//         dateCollection[dataId].value = '';
//         dateCollection[dataId].innerHTML = '';
//         todoCollection[dataId].value = '';
//         todoCollection[dataId].innerHTML = '';
//         todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

//         plannedTodos[dataId].date = '';
//         plannedTodos[dataId].todo = '';
//         plannedTodos[dataId].color = '';
//         plannedTodos[dataId].isEmpty = true;


//         console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
// }

// _ _ _

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

    for (let i = 0; i < 8; i++) {

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

// // Gör inget(?) ((2024-10-10))
// function updateTodoSchedule() {

//     for (let i = 0; i < plannedTodos.length; i++) {
//         if (plannedTodos[i].isEmpty === false && dateCollection[i].innerHTML == mondayDateDiv.textContent) {
//             alert("This todo date matches the current Monday date");

//             console.log("i (1) = " + i);
//         }
//         else if (plannedTodos[i].isEmpty === false && dateCollection[i].innerHTML == tuesdayDateDiv.textContent) {
//             alert("This todo date matches the current Tuesday date");
//         }

//     }
// }

// _ _ _

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

// Om dag (datum, plannedTodos[x].date) ändras ska även recurringTodosArray-datum ändras för aktuell todo)
// Lägg in, push recurringTodosArray-värden för aktuell dag (Day: currentDayTodos..)



// console.log("currentMondayTodoItems[0].innerHTML = " + currentMondayTodoItems[0].innerHTML);
// console.log("currentMondayTodos efter reset, JSON.stringify = " + JSON.stringify(currentMondayTodos));

plannedTodos.forEach(todoRow => {

console.log("ooa");

    // . . .
    // . . .

//     1. 	Ändrar plannedTodos[x].date (i DOM:en)

//      2.	if (getWeekDay(plannedTodos[x].date === "mon") {   plannedTodos[x].dataDate = "0"  }
// 	    else if ((getWeekDay(plannedTodos[x].date === "tue") {   plannedTodos[x].dataDate = "1"  }
// 	    …

//      3.	Töm (currentDayTodos)

//      4.	Fyll på (currentDayTodos)    ((med plannedTodos-objekt))
// 	    (uppdatera currentDayTodos[ooa].date (med plannedTodos[x].dataDate (= "0")))

// 	    if (plannedTodos[x].dataDate === "0" && plannedTodos[x].isRecurring === true) { currentDayTodos.push(
// 	    {
// 		    date: 		weekDates[0],
// 		    todo: 		plannedTodos[x].todo,
// 		    color: 		plannedTodos[x].color,
// 		    isRecurring: 		plannedTodos[x].isRecurring,
// 		    dataDate: 		plannedTodos[x].dataDate
// 	    })

    // _ _ _

console.log("JSON.stringify(todoRow) = " + JSON.stringify(todoRow));
console.log("todoRow.date = " + todoRow.date)
console.log("getDayOfWeek(todoRow.date) = " + getDayOfWeek(todoRow.date))
console.log("todoRow.dataDate = " + todoRow.dataDate)
console.log("todoRow.date + weekDates[0] = " + todoRow.date + " " + weekDates[0])
console.log("currentMondayTodos.length = " + currentMondayTodos.length)

console.log("getDayOfWeek(todoRow.date) === 'mon' = " + getDayOfWeek(todoRow.date) === "mon")
console.log("todoRow.isRecurring === false = " + todoRow.isRecurring === false)
console.log("todoRow.dataDate === '0' = " + todoRow.dataDate === '0')
console.log("todoRow.date <= weekDates[0] = " + todoRow.date === weekDates[0])
console.log("currentMondayTodos.length < 9 = " + currentMondayTodos.length < 9)

    // plannedTodos (isRecurring === true, todoRow <= weekDates[x])
    if (getDayOfWeek(todoRow.date) === "mon" && todoRow.isRecurring === true && todoRow.dataDate === "0" && todoRow.date <= weekDates[0] && currentMondayTodos.length < 9) {
            console.log("Den här todo:n är återkommande för måndagar" + todoRow.date + ", " + dataId);
            currentMondayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "tue" && todoRow.isRecurring === true && todoRow.dataDate === "1" && todoRow.date <= weekDates[1] && currentTuesdayTodos.length < 9) {
            console.log("Den här todo:n är återkommande för tisdagar" + todoRow.date + ", " + dataId);
            currentTuesdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "wed" && todoRow.isRecurring === true && todoRow.dataDate === "2" && todoRow.date <= weekDates[2] && currentWednesdayTodos.length < 9) {
            console.log("Den här todo:n är återkommande för onsdagar" + todoRow.date + ", " + dataId);
            currentWednesdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "thu" && todoRow.isRecurring === true && todoRow.dataDate === "3" && todoRow.date <= weekDates[3] && currentThursdayTodos.length < 9) {
            console.log("Den här todo:n är återkommande för torsdagar" + todoRow.date + ", " + dataId);
            currentThursdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "fri" && todoRow.isRecurring === true && todoRow.dataDate === "4" && todoRow.date <= weekDates[4] && currentFridayTodos.length < 9) {
        console.log("Den här todo:n är återkommande för fredagar" + todoRow.date + ", " + dataId);
        currentFridayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sat" && todoRow.isRecurring === true && todoRow.dataDate === "5" && todoRow.date <= weekDates[5] && currentSaturdayTodos.length < 9) {
        console.log("Den här todo:n är återkommande för lördagar" + todoRow.date + ", " + dataId);
        currentSaturdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sun" && todoRow.isRecurring === true && todoRow.dataDate === "6" && todoRow.date <= weekDates[6] && currentSundayTodos.length < 9) {
        console.log("Den här todo:n är återkommande för söndagar" + todoRow.date + ", " + dataId);
        currentSundayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    // plannedTodos (isRecurring === false, todoRow === weekDates[x])
    else if (getDayOfWeek(todoRow.date) === "mon" && todoRow.isRecurring === false && todoRow.dataDate === "0" && todoRow.date === weekDates[0] && currentMondayTodos.length < 9) {
            console.log("Den här todo:n är för måndag" + todoRow.date + ", " + dataId);
            currentMondayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: false,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "tue" && todoRow.isRecurring === false && todoRow.dataDate === "1" && todoRow.date === weekDates[1] && currentTuesdayTodos.length < 9) {
        console.log("Den här todo:n är för tisdag" + todoRow.date + ", " + dataId);
        currentTuesdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "wed" && todoRow.isRecurring === false && todoRow.dataDate === "2" && todoRow.date === weekDates[2] && currentWednesdayTodos.length < 9) {
        console.log("Den här todo:n är för onsdag" + todoRow.date + ", " + dataId);
        currentWednesdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "thu" && todoRow.isRecurring === false && todoRow.dataDate === "3" && todoRow.date === weekDates[3] && currentThursdayTodos.length < 9) {
        console.log("Den här todo:n är för torsdag" + todoRow.date + ", " + dataId);
        currentThursdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "fri" && todoRow.isRecurring === false && todoRow.dataDate === "4" && todoRow.date === weekDates[4] && currentFridayTodos.length < 9) {
        console.log("Den här todo:n är för fredag" + todoRow.date + ", " + dataId);
        currentFridayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sat" && todoRow.isRecurring === false && todoRow.dataDate === "5" && todoRow.date === weekDates[5] && currentSaturdayTodos.length < 9) {
        console.log("Den här todo:n är för lördag" + todoRow.date + ", " + dataId);
        currentSaturdayTodos.push({
        date: `${todoRow.date}`,
        todo: `${todoRow.todo}`,
        color: `${todoRow.color}`,
        isRecurring: false,
        dataDate: `${todoRow.dataDate}`,
        isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sun" && todoRow.isRecurring === false && todoRow.dataDate === "6" && todoRow.date === weekDates[6] && currentSundayTodos.length < 9) {
        console.log("Den här todo:n är för söndag" + todoRow.date + ", " + dataId);
        currentSundayTodos.push({
        date: `${todoRow.date}`,
        todo: `${todoRow.todo}`,
        color: `${todoRow.color}`,
        isRecurring: false,
        dataDate: `${todoRow.dataDate}`,
        isEmpty: false
        })
    }

    // _________________________
    // _________________________

    // else if (getDayOfWeek(todo.date) === "tue" && todo.isRecurring === true && todo.dataDate === "1") {
    //     // todo.dataDate = "1"
    //         console.log("Den här todo:n är återkommande för tisdagar" + todo.date + ", " + dataId);
    //         // todo.date = weekDates[1];
    // }
    // else if (getDayOfWeek(todo.date) === "wed" && todo.isRecurring === true && todo.dataDate === "2") {
    //     // todo.dataDate = "2"
    //         console.log("Den här todo:n är återkommande för onsdagar" + todo.date + ", " + dataId);
    //         // todo.date = weekDates[2];
    // }
    // else if (getDayOfWeek(todo.date) === "thu" && todo.isRecurring === true && todo.dataDate === "3") {
    //     // todo.dataDate = "3"
    //         console.log("Den här todo:n är återkommande för torsdagar" + todo.date + ", " + dataId);
    //         // todo.date = weekDates[3];
    // }
    // else if (getDayOfWeek(todo.date) === "fri" && todo.isRecurring === true && todo.dataDate === "4") {
    //     // todo.dataDate = "4"
    //         console.log("Den här todo:n är återkommande för fredagar" + todo.date + ", " + dataId);
    //         // todo.date = weekDates[4];
    // }
    // else if (getDayOfWeek(todo.date) === "sat" && todo.isRecurring === true && todo.dataDate === "5") {
    //     // todo.dataDate = "5"
    //         console.log("Den här todo:n är återkommande för lördagar" + todo.date + ", " + dataId);
    //         // todo.date = weekDates[5];
    // }
    // else if (getDayOfWeek(todo.date) === "sun" && todo.isRecurring === true && todo.dataDate === "6") {
    //     // todo.dataDate = "6"
    //         console.log("Den här todo:n är återkommande för söndagar" + todo.date + ", " + dataId);
    //         // todo.date = weekDates[6];
    // }

    // // _ _ _
    // // _ _ _

    // // for (let i = 0; i < plannedTodos.length; i++) {
    // //     console.log("i (här) = " + i);
    // //     dateCollection[i].innerHTML =  plannedTodos[i].date;
    // //     dateCollection[i].value = plannedTodos[i].date;
    // // }

    // if (todo.date === weekDates[0] && currentMondayTodos.length < 9) {
    //     currentMondayTodos.push({
    //         date: `${todo.date}`,
    //         todo: `${todo.todo}`,
    //         color: `${todo.color}`,
    //         isRecurring: `${todo.isRecurring}`,
    //         dataDate: `${todo.dataDate}`,
    //         isEmpty: false
    //     });
    // }
    // else if (todo.date === weekDates[1] && currentTuesdayTodos.length < 9) {
    //     currentTuesdayTodos.push({
    //         date: `${todo.date}`,
    //         todo: `${todo.todo}`,
    //         color: `${todo.color}`,
    //         isRecurring: `${todo.isRecurring}`,
    //         dataDate: `${todo.dataDate}`,
    //         isEmpty: false
    //     });
    // }
    // else if (todo.date === weekDates[2] && currentWednesdayTodos.length < 9) {
    //     currentWednesdayTodos.push({
    //         date: `${todo.date}`,
    //         todo: `${todo.todo}`,
    //         color: `${todo.color}`,
    //         isRecurring: `${todo.isRecurring}`,
    //         dataDate: `${todo.dataDate}`,
    //         isEmpty: false
    //     });
    // }
    // else if (todo.date === weekDates[3] && currentThursdayTodos.length < 9) {
    //     currentThursdayTodos.push({
    //         date: `${todo.date}`,
    //         todo: `${todo.todo}`,
    //         color: `${todo.color}`,
    //         isRecurring: `${todo.isRecurring}`,
    //         dataDate: `${todo.dataDate}`,
    //         isEmpty: false
    //     });
    // }
    // else if (todo.date === weekDates[4] && currentFridayTodos.length < 9) {
    //     currentFridayTodos.push({
    //         date: `${todo.date}`,
    //         todo: `${todo.todo}`,
    //         color: `${todo.color}`,
    //         isRecurring: `${todo.isRecurring}`,
    //         dataDate: `${todo.dataDate}`,
    //         isEmpty: false
    //     });
    // }
    // else if (todo.date === weekDates[5] && currentSaturdayTodos.length < 9) {
    //     currentSaturdayTodos.push({
    //         date: `${todo.date}`,
    //         todo: `${todo.todo}`,
    //         color: `${todo.color}`,
    //         isRecurring: `${todo.isRecurring}`,
    //         dataDate: `${todo.dataDate}`,
    //         isEmpty: false
    //     });
    // }
    // else if (todo.date === weekDates[6] && currentSundayTodos.length < 9) {
    //     currentSundayTodos.push({
    //         date: `${todo.date}`,
    //         todo: `${todo.todo}`,
    //         color: `${todo.color}`,
    //         isRecurring: `${todo.isRecurring}`,
    //         dataDate: `${todo.dataDate}`,
    //         isEmpty: false
    //     });
    // }

    // _________________________
    // _________________________

    // . . .
    // . . .

    // _ _ _
    // _ _ _

//     // getDayOfWeek(todo.date) = getDayOfWeek(todo.date) === "tue" &&

//     // if (todo.date === weekDates[0] && todo.isRecurring === true && currentMondayTodos.length < 9) {
//     // Lägg till recurring todo-objekt i currentMondayTodos-array (om aktuell todo ligger samma (aktuell) vecka)
//     if (todo.date === weekDates[0] && currentMondayTodos.length < 9) {
//         console.log("ooa Monday recurring here");
//         currentMondayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "0",
//             isEmpty: false
//         });

//         // _ _ _
//         todo.dataDate = "0";
//         // _ _ _
//     }

//     // Lägg till recurring todo-objekt i currentMondayTodos-array (om aktuell todo ligger i en vecka som passerat) (("2024-11-27" > "2024-11-26" === true, "2024-11-25" > "2024-11-26" === false))
//     else if (weekDates[0] > todo.date && todo.date !== weekDates[0] && todo.isRecurring === true && todo.dataDate === "0" && getDayOfWeek(todo.date) === "mon" && currentMondayTodos.length < 9) {
//         todo.date = weekDates[0];
//         todo.dataDate = "0";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentMondayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "0",
//             isEmpty: false
//         });
//         // todo.dataDate = "0";
//     }
//     // Lägg till recurring todo-objekt i currentMondayTodos-array (om aktuell todo ligger i en vecka framåt i tiden) (("2024-11-27" > "2024-11-26" === true, "2024-11-25" > "2024-11-26" === false))
//     else if (weekDates[0] < todo.date && todo.date !== weekDates[0] && todo.isRecurring === true && todo.dataDate === "0" && getDayOfWeek(todo.date) === "mon" && currentMondayTodos.length < 9) {
//         todo.date = weekDates[0];
//         todo.dataDate = "0";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentMondayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "0",
//             isEmpty: false
//         });
//         // todo.dataDate = "0";
//     }


//     // _ _ _


//     else if (todo.date === weekDates[0] && currentMondayTodos.length >= 9) {
//         alert("Maximum number of Monday tasks (9) exceeded)")
//     }

//     else if (todo.date === weekDates[1] && currentTuesdayTodos.length < 9) {
//         currentTuesdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "1",
//             isEmpty: false
//         });
//         todo.dataDate = "1";
//     }
//     // else if (todo.date === weekDates[0] && todo.isRecurring === false && currentMondayTodos.length < 9) {
//     //     currentMondayTodos.push({
//     //         date: `${todo.date}`,
//     //         todo: `${todo.todo}`,
//     //         color: `${todo.color}`,
//     //         isRecurring: `${todo.isRecurring}`,
//     //         dataDate: '',
//     //         isEmpty: false
//     //     });
//     // }
//     else if (weekDates[1] > todo.date && todo.date !== weekDates[1] && todo.isRecurring === true && todo.dataDate === "1" && getDayOfWeek(todo.date) === "tue" && currentTuesdayTodos.length < 9) {
//         todo.date = weekDates[1];
//         todo.dataDate = "1";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentTuesdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "1",
//             isEmpty: false
//         });
//         // todo.dataDate = "1";
//     }

//     else if (todo.date === weekDates[1] && currentTuesdayTodos.length >= 9) {
//         alert("Maximum number of Tuesday tasks (9) exceeded)")
//     }
//     else if (todo.date === weekDates[2] && currentWednesdayTodos.length < 9) {
//         currentWednesdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "2",
//             isEmpty: false
//         })
//         todo.dataDate = "2";
//      }
//      else if (weekDates[2] > todo.date && todo.date !== weekDates[2] && todo.isRecurring === true && todo.dataDate === "2" && getDayOfWeek(todo.date) === "wed" && currentWednesdayTodos.length < 9) {
//         todo.date = weekDates[2];
//         todo.dataDate = "2";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentWednesdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "2",
//             isEmpty: false
//         });
//         // todo.dataDate = "2";
//     }
//      else if (todo.date === weekDates[2] && currentWednesdayTodos.length >= 9) {
//         alert("Maximum number of Wednesday tasks (9) exceeded)")
//     }
//      else if (todo.date === weekDates[3] && currentThursdayTodos.length < 9) {
//         currentThursdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "3",
//             isEmpty: false
//         });
//         todo.dataDate = "3";
//     }
//     else if (weekDates[3] > todo.date && todo.date !== weekDates[3] && todo.isRecurring === true && todo.dataDate === "3" && getDayOfWeek(todo.date) === "thu" && currentThursdayTodos.length < 9) {
//         todo.date = weekDates[3];
//         todo.dataDate = "3";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentThursdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "3",
//             isEmpty: false
//         });
//         // todo.dataDate = "3";
//     }
//     else if (todo.date === weekDates[3] && currentThursdayTodos.length >= 9) {
//         alert("Maximum number of Thursday tasks (9) exceeded)")
//     }
//     else if (todo.date === weekDates[4] && currentFridayTodos.length < 9) {
//         currentFridayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "4",
//             isEmpty: false
//         });
//         todo.dataDate = "4";
//     }
//     else if (weekDates[4] > todo.date && todo.date !== weekDates[4] && todo.isRecurring === true && todo.dataDate === "4" && getDayOfWeek(todo.date) === "fri" && currentFridayTodos.length < 9) {
//         todo.date = weekDates[4];
//         todo.dataDate = "4";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentFridayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "4",
//             isEmpty: false
//         });
//         // todo.dataDate = "4";
//     }
//     else if (todo.date === weekDates[4] && currentFridayTodos.length >= 9) {
//         alert("Maximum number of Friday tasks (9) exceeded)")
//     }
//     else if (todo.date === weekDates[5] && currentSaturdayTodos.length < 9) {
//         currentSaturdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "5",
//             isEmpty: false
//         });
//         todo.dataDate = "5";
//     }
//     else if (weekDates[5] > todo.date && todo.date !== weekDates[5] && todo.isRecurring === true && todo.dataDate === "5" && getDayOfWeek(todo.date) === "sat" && currentSaturdayTodos.length < 9) {
//         todo.date = weekDates[5];
//         todo.dataDate = "5";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentSaturdayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "5",
//             isEmpty: false
//         });
//         // todo.dataDate = "5";
//     }
//     else if (todo.date === weekDates[5] && currentSaturdayTodos.length >= 9) {
//         alert("Maximum number of Saturday tasks (9) exceeded)")
//     }
//     else if (todo.date === weekDates[6] && currentSundayTodos.length < 9) {
//         currentSundayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "6",
//             isEmpty: false
//         });
//         todo.dataDate = "6";
//     }
//     else if (weekDates[6] > todo.date && todo.date !== weekDates[6] && todo.isRecurring === true && todo.dataDate === "6" && getDayOfWeek(todo.date) === "sun" && currentSundayTodos.length < 9) {
//         console.log("here");
//         todo.date = weekDates[6];
//         todo.dataDate = "6";
//         for (i = 0; i < dateCollection.length; i++) {
//             if (dateCollection[i].value === todo.date && todoCollection[i].value === todo.todo) {
//                 dateCollection[i].value = todo.date;
//                 dateCollection[i].innerHTML = todo.date;
//             }
//         }

//         currentSundayTodos.push({
//             date: `${todo.date}`,
//             todo: `${todo.todo}`,
//             color: `${todo.color}`,
//             isRecurring: `${todo.isRecurring}`,
//             dataDate: "6",
//             isEmpty: false
//         });
//         // todo.dataDate = "6";
//     }
//     else if (todo.date === weekDates[6] && currentSundayTodos.length >= 9) {
//         alert("Maximum number of Sunday tasks (9) exceeded)")
//     }

// domUpdateCurrentWeekSchedule();

})

domUpdateCurrentWeekSchedule();

    // _ _ _
    // _ _ _

// Update med recurring tasks (i currentDayTodos (& currentDayTodosItem (DOM:en))) (om plannedTodos[i].isRecurring = true && plannedTodos[i].date === recurringTodosArray[x].date && weekDates.forEach(Element => Element !== plannedTodos[i].date) ... if (recurringTodosArray[x].dataDate === 0 {currentMondayTodos.push(recurringTodosArray[x] data... (förutom dataDate!?))})
//recurringTodosArray

// recurringTodosArray.forEach(Element => {

//     //  Om en todos editeras måste recurringTodosArray:en uppdateras (Element.dataDate har i så fall redan en siffra!)
//     if (Element.date === weekDates[0] && Element.dataDate === '') {
//         Element.dataDate = 0;
//     }
//     else if (Element.date === weekDates[1] && Element.dataDate === '') {
//         Element.dataDate = 1;
//     }
//     else if (Element.date === weekDates[2] && Element.dataDate === '') {
//         Element.dataDate = 2;
//     }
//     else if (Element.date === weekDates[3] && Element.dataDate === '') {
//         Element.dataDate = 3;
//     }
//     else if (Element.date === weekDates[4] && Element.dataDate === '') {
//         Element.dataDate = 4;
//     }
//     else if (Element.date === weekDates[5] && Element.dataDate === '') {
//         Element.dataDate = 5;
//     }
//     else if (Element.date === weekDates[6] && Element.dataDate === '') {
//         Element.dataDate = 6;
//     }
// })

// console.log("JSON.stringify(recurringTodosArray) (2) = " + JSON.stringify(recurringTodosArray));

}

    // _ _ _
// _ _ _

function domUpdateCurrentWeekSchedule() {

    console.log("domUpdateCurrentWeekSchedule() körs");
    // Loop through the current...dayTodos and fill in the corresponding divs
    for (let i = 0; i < currentMondayTodos.length; i++) {

        // console.log("i = " + i)

        //if-sats behövs inte? (2024-11-29)
        // if (i < currentMondayTodoItems.length) {
            currentMondayTodoItems[i].innerHTML = currentMondayTodos[i].todo;
            currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
        // }
    }

    for (let i = 0; i < currentTuesdayTodos.length; i++) {

        // console.log("i = " + i)

        // if (i < currentTuesdayTodoItems.length) {
            currentTuesdayTodoItems[i].innerHTML = currentTuesdayTodos[i].todo;
            currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentTuesdayTodos[i].color);
        // }
    }

    for (let i = 0; i < currentWednesdayTodos.length; i++) {

        // console.log("i = " + i)

        // if (i < currentWednesdayTodoItems.length) {
            currentWednesdayTodoItems[i].innerHTML = currentWednesdayTodos[i].todo;
            currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentWednesdayTodos[i].color);
        // }
    }

    for (let i = 0; i < currentThursdayTodos.length; i++) {

        // console.log("i = " + i)

        // if (i < currentThursdayTodoItems.length) {
            currentThursdayTodoItems[i].innerHTML = currentThursdayTodos[i].todo;
            currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(currentThursdayTodos[i].color);
        // }
    }

    for (let i = 0; i < currentFridayTodos.length; i++) {

        // console.log("i = " + i)

        // if (i < currentFridayTodoItems.length) {
            currentFridayTodoItems[i].innerHTML = currentFridayTodos[i].todo;
            currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(currentFridayTodos[i].color);
        // }
    }

    for (let i = 0; i < currentSaturdayTodos.length; i++) {

        // console.log("i = " + i)

        // if (i < currentSaturdayTodoItems.length) {
            currentSaturdayTodoItems[i].innerHTML = currentSaturdayTodos[i].todo;
            currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(currentSaturdayTodos[i].color);
        // }
    }

    for (let i = 0; i < currentSundayTodos.length; i++) {

        // console.log("i = " + i)

        // if (i < currentSundayTodoItems.length) {
            currentSundayTodoItems[i].innerHTML = currentSundayTodos[i].todo;
            currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(currentSundayTodos[i].color);
        // }
    }
}


// _ _ _
// _ _ _
// :+:+:+:
// let addTodoButton = document.getElementById("add-todo-button");

// addTodoButton.addEventListener("click", function(e) {

//     // Add: Uppdatera DOM:en (veckoschemat) med data från currentDayTodos-objekt-array:erna (när task läggs till via add-knappen)
//     domUpdateCurrentWeekSchedule()

// // function domUpdateCurrentWeekSchedule() {
// //         // Loop through the current...dayTodos and fill in the corresponding divs
// //         for (let i = 0; i < currentMondayTodos.length; i++) {

// //             // console.log("i = " + i)

// //             if (i < currentMondayTodoItems.length) {
// //                 currentMondayTodoItems[i].innerHTML = currentMondayTodos[i].todo;
// //                 currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
// //             }
// //         }

// //         for (let i = 0; i < currentTuesdayTodos.length; i++) {

// //             // console.log("i = " + i)

// //             if (i < currentTuesdayTodoItems.length) {
// //                 currentTuesdayTodoItems[i].innerHTML = currentTuesdayTodos[i].todo;
// //                 currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentTuesdayTodos[i].color);
// //             }
// //         }

// //         for (let i = 0; i < currentWednesdayTodos.length; i++) {

// //             // console.log("i = " + i)

// //             if (i < currentWednesdayTodoItems.length) {
// //                 currentWednesdayTodoItems[i].innerHTML = currentWednesdayTodos[i].todo;
// //                 currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentWednesdayTodos[i].color);
// //             }
// //         }

// //         for (let i = 0; i < currentThursdayTodos.length; i++) {

// //             // console.log("i = " + i)

// //             if (i < currentThursdayTodoItems.length) {
// //                 currentThursdayTodoItems[i].innerHTML = currentThursdayTodos[i].todo;
// //                 currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(currentThursdayTodos[i].color);
// //             }
// //         }

// //         for (let i = 0; i < currentFridayTodos.length; i++) {

// //             // console.log("i = " + i)

// //             if (i < currentFridayTodoItems.length) {
// //                 currentFridayTodoItems[i].innerHTML = currentFridayTodos[i].todo;
// //                 currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(currentFridayTodos[i].color);
// //             }
// //         }

// //         for (let i = 0; i < currentSaturdayTodos.length; i++) {

// //             // console.log("i = " + i)

// //             if (i < currentSaturdayTodoItems.length) {
// //                 currentSaturdayTodoItems[i].innerHTML = currentSaturdayTodos[i].todo;
// //                 currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(currentSaturdayTodos[i].color);
// //             }
// //         }

// //         for (let i = 0; i < currentSundayTodos.length; i++) {

// //             // console.log("i = " + i)

// //             if (i < currentSundayTodoItems.length) {
// //                 currentSundayTodoItems[i].innerHTML = currentSundayTodos[i].todo;
// //                 currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(currentSundayTodos[i].color);
// //             }
// //         }
// //     }
// })
// :+:+:+:

// _ _ _

        // // _ _ _ ((Används (2024-10-14)?))

        // function redistributeScheduleContent(scheduleWrappers) {
        //     scheduleWrappers.forEach(wrapper => {
        //         let emptyChildIndex = -1;


        //         // Find the first empty child element
        //         for (let i = 0; i < wrapper.children.length; i++) {
        //             if (wrapper.children[i].textContent.trim() === '') {
        //                 emptyChildIndex = i;
        //                 break;
        //             }
        //         }

        //         // If an empty child element is found, find a later filled child element
        //         if (emptyChildIndex !== -1) {
        //             for (let j = emptyChildIndex + 1; j < wrapper.children.length; j++) {
        //                 if (wrapper.children[j].textContent.trim() !== '') {
        //                     // Replace the empty child's textContent with the filled child's textContent
        //                     wrapper.children[emptyChildIndex].textContent = wrapper.children[j].textContent;
        //                     wrapper.children[emptyChildIndex].style.backgroundColor = wrapper.children[j].style.backgroundColor;
        //                     // Make the filled child's textContent become empty
        //                     wrapper.children[j].textContent = '';
        //                     wrapper.children[j].style.backgroundColor = '';
        //                     break;
        //                 }
        //             }
        //         }
        //     });
        // }

        // // Usage
        // const scheduleWrappers = [
        //     monScheduleWrapper,
        //     tueScheduleWrapper,
        //     wedScheduleWrapper,
        //     thuScheduleWrapper,
        //     friScheduleWrapper,
        //     satScheduleWrapper,
        //     sunScheduleWrapper
        // ];

        // redistributeScheduleContent(scheduleWrappers);

// _ _ _

        // currentMondayTodos.forEach(currentMondayTodos => {
        //     console.log("currentMondayTodos = " + currentMondayTodos)})

        // currentMondayTodoItems.forEach(currentMondayTodoItems => {
        //     console.log("currentMondayTodoItems = " + currentMondayTodoItems.innerHTML)})

        // currentTuesdayTodos.forEach(currentTuesdayTodos => {
        //     console.log("currentTuesdayTodos = " + currentTuesdayTodos)})

        // currentTuesdayTodoItems.forEach(currentTuesdayTodoItems => {
        //     console.log("currentTuesdayTodoItems = " + currentTuesdayTodoItems.innerHTML)})



console.log("currentTuesdayTodos (utanför updateCurrent...) = " + currentTuesdayTodos)


//_ _ _
//_ _ _
//_ _ _

// Används inte (2024-11-25)?
// // createDataIdArray is a NodeList of elements with `data-id` attributes
// var createDataIdArray = document.querySelectorAll('.todo-text');

//_ _ _

// let count = -1;

// Main todo-list-container
    // let wrapperContainer = document.getElementById('todo-wrapper');

function addDynamicTodoContainer() {
    // // Select all existing todo containers
//     count += 1;

// // Find the highest data-id among the existing containers

// // Initialize maxId to be a negative number to ensure it will be updated
// var maxId = -1;

// // Loop through each element in createDataIdArray
// createDataIdArray.forEach(element => {
//     // Get the `data-id` attribute and convert it to an integer
//     dataId = parseInt(element.getAttribute('data-id'), 10);

//     dataId = dataId + count;

//     console.log("dataId = " + dataId);

//     // If dataId is a valid number, update maxId if dataId is greater
//     if (!isNaN(dataId) && dataId > maxId) {
//         maxId = dataId;
//     }
// });

// console.log("maxId = " + maxId);
// let highestId = maxId


// _ _ _

    // Set the new data-id to be one higher than the highest existing data-id
    // let newId = highestId + 1;
    let newId = plannedTodos.length-1;

    // Create a new div for the todo-container-element
    const dynamicTodoContainer = document.createElement('div');
    dynamicTodoContainer.id = 'todo-container';
    dynamicTodoContainer.classList.add('todo-container-element');
    dynamicTodoContainer.setAttribute('data-id', newId);
    dynamicTodoContainer.style.display = "flex";

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
    dynamicTodoContainer.appendChild(dateTextarea);

    // Create and append the second textarea for text
    const textTextarea = document.createElement('textarea');
    textTextarea.id = `todo-${newId}-text`;
    textTextarea.classList.add('todo-text');
    textTextarea.setAttribute('type', 'text');
    textTextarea.setAttribute('data-id', newId);
    textTextarea.setAttribute('data-key', 'todo');
    textTextarea.setAttribute('name', 'text');
    textTextarea.textContent = `Todo Text ${newId}`; // Placeholder text
    dynamicTodoContainer.appendChild(textTextarea);

    // Create and append the color div
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('todo-color');
    colorDiv.setAttribute('data-id', newId);
    colorDiv.setAttribute('data-key', 'color');
    colorDiv.setAttribute('name', 'color');
    // colorDiv.style.backgroundColor = "lightgreen"; // Set a color for the color div
    dynamicTodoContainer.appendChild(colorDiv);

    // Append the new container to the main container
    // const wrapperContainer = document.getElementById('todo-wrapper');
    wrapperContainer.appendChild(dynamicTodoContainer);

    dynamicTodoContainer.addEventListener('click', function() {
        // Access the data-id attribute
        const dataId = dynamicTodoContainer.dataset.id;
        console.log('Clicked div data-id:', dataId);
    });

}

// let specificTodoContainer = wrapperContainer.getElementsByClassName('todo-container-element');

function removeLastDynamicTodoContainer() {
    console.log("removeLastDynamicTodoContainer() körs");
    // const wrapperContainer = document.getElementById('todo-wrapper');

    // _ _ _
    // let specificTodoContainer = wrapperContainer.getElementsByClassName('todo-container-element');
    // _ _ _

    console.log("specificTodoContainer.length (i removeLastDynamicTodoContainer) = " + specificTodoContainer.length);

    // let lastContainerNumber = plannedTodos.length + 1
    // let lastContainerNumber = plannedTodos.length;
    let lastContainerNumber = specificTodoContainer.length - 1

    console.log("specificTodoContainer (i removeLastDynamicTodoContainer) = " + specificTodoContainer);

    // if (specificTodoContainer.length > 0) {
    // if (lastContainerNumber >= 3) {
        // const lastContainer = specificTodoContainer[specificTodoContainer.length - 1];
    if (specificTodoContainer.length > 3) {
        let lastContainer = specificTodoContainer[lastContainerNumber];
        wrapperContainer.removeChild(lastContainer);
    } else if (specificTodoContainer.length <= 3) {
        console.log("No more todo containers to remove.");
    }

    // _ _ _

    console.log("plannedTodos.length = " + plannedTodos.length);
    console.log("specificTodoContainer.length = " + specificTodoContainer.length);
    console.log("currentWednesdayTodos.length = " + currentWednesdayTodos.length);

    console.log("dateCollection.length = " + dateCollection.length);
    console.log("todoCollection.length = " + todoCollection.length);

    console.log("currentDynamicDayArray.length = " + currentDynamicDayArray.length);
    console.log("currentDynamicDayArray" + currentDynamicDayArray);

    plannedTodos.forEach(element => {console.log("JSON.sfy(plannedTodos-element) = " + JSON.stringify(element))})
    currentWednesdayTodos.forEach(element => {console.log("JSON.sfy(wed-element) = " + JSON.stringify(element))})


    // console.log("lastDomRowNumber = " + lastDomRowNumber)
    //lastDomRowNumber is not defined

    // console.log("lastDomRowNumberIndexNr = " + lastDomRowNumberIndexNr)
    // lastDomRowNumberIndexNr is not defined

    console.log("dataId = " + dataId);

    // _ _ _

}


// _ _ _

// Function to restore the todo-wrapper to the original structure
function restoreTodoWrapper() {
    // let wrapperContainer = document.getElementById('todo-wrapper');

    // Clear all existing child elements in wrapperContainer
    wrapperContainer.innerHTML = '';

    // Create the initial three containers with specific data and structure
    for (let i = 0; i < 3; i++) {
        // Create the todo container div
        const dynamicTodoContainer = document.createElement('div');
        dynamicTodoContainer.id = 'todo-container';
        dynamicTodoContainer.classList.add('todo-container-element');
        dynamicTodoContainer.setAttribute('data-id', i);

        // Create and append the first textarea for date
        const dateTextarea = document.createElement('textarea');
        dateTextarea.id = `todo-${i}-date`;
        dateTextarea.classList.add('todo-date');
        dateTextarea.setAttribute('type', 'text');
        dateTextarea.setAttribute('data-id', i);
        dateTextarea.setAttribute('data-key', 'date');
        dateTextarea.setAttribute('name', 'date');
        dateTextarea.placeholder = i === 0 ? 'Next date...' : ''; // Set placeholder for the first one
        dynamicTodoContainer.appendChild(dateTextarea);

        // Create and append the second textarea for text
        const textTextarea = document.createElement('textarea');
        textTextarea.id = `todo-${i}-text`;
        textTextarea.classList.add('todo-text');
        textTextarea.setAttribute('type', 'text');
        textTextarea.setAttribute('data-id', i);
        textTextarea.setAttribute('data-key', 'todo');
        textTextarea.setAttribute('name', 'text');
        textTextarea.placeholder = i === 0 ? 'Planned todo...' : ''; // Set placeholder for the first one
        dynamicTodoContainer.appendChild(textTextarea);

        // Create and append the color div
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('todo-color');
        colorDiv.setAttribute('data-id', i);
        colorDiv.setAttribute('data-key', 'color');
        colorDiv.setAttribute('name', 'color');
        dynamicTodoContainer.appendChild(colorDiv);

        // Append the new container to the main container
        wrapperContainer.appendChild(dynamicTodoContainer);
    }
}

// _ _ _

// function removeAllExceptThreeDynamicTodoContainers() {
//     const wrapperContainer = document.getElementById('todo-wrapper');
//     const todoContainers = wrapperContainer.getElementsByClassName('todo-container-element');

//     // Convert HTMLCollection to an array to work with slice
//     const containersArray = Array.from(todoContainers);

//     // Calculate the number of elements to keep
//     const keepCount = 3;
//     const elementsToRemove = containersArray.slice(0, -keepCount);

//     // Remove each element in elementsToRemove from wrapperContainer
//     elementsToRemove.forEach(container => wrapperContainer.removeChild(container));
// }


// function removeAllDynamicTodoContainers() {
//     const wrapperContainer = document.getElementById('todo-wrapper');
//     const todoContainers = wrapperContainer.getElementsByClassName('todo-container-element');

//     // Convert the HTMLCollection to an array to safely iterate and remove each element
//     Array.from(todoContainers).forEach(container => wrapperContainer.removeChild(container));
// }

// _ _ _
// _ _ _

// function removeAllTodoContainersWithDataIdGreaterThanTwo() {
//     console.log("removeAllTodoContainersWithDataIdGreaterThanTwo() körs");

// // _ _ _

//     // dataId = dynamicTodoContainer.dataset.id;

// // _ _ _

//     // todoContainers = document.getElementById("todo-container");
//     // let childNodes = todoContainers.childNodes;
//     // console.log(todoContainers.length); // let's assume "2"

// // _ _ _

//     // Select all elements with the class `todo-container-element`
//     // const todoContainers = document.querySelectorAll('.todo-container-element');

//     // Loop through each container
//     todoContainers.forEach(container => {
//         // Find any child element within the container that has `data-id` attribute
//         const childWithDataId = container.querySelector('[data-id]');

//         // If the child element exists, check its `data-id` value
//         if (childWithDataId) {
//             const dataId = parseInt(childWithDataId.getAttribute('data-id'), 10);
//             console.log("dataId = " + dataId)

//             // If `data-id` is greater than 2, remove the container
//             if (dataId > 2) {
//                 container.remove();
//             }
//         }
//     });
// }

// _ _ _
// _ _ _

// // Add an event listener to the button to trigger the function on click
// document.getElementById('clear-all').addEventListener('click', removeAllTodoContainersWithDataIdGreaterThanTwo);

// let currentPlanListContainers = docume

// _ _ _



// console.log("dynamicTodoContainer[plannedTodos.length - 1].value = " + dynamicTodoContainer[plannedTodos.length - 1].value)

//         // Check if there is at least one container
//         if (dynamicTodoContainer.length > 0) {
//             // Get the last container in the list
//             const lastTodoContainer = dynamicTodoContainer[plannedTodos.length - 1];

//             // Remove the last container
//             lastTodoContainer.remove();
//         }
// }

// // Add an event listener to the button to trigger the function on click
// document.getElementById('trash-can').addEventListener('click', removeLastTodoContainer);

// _ _ _

// function removeSpecificTodoContainer() {
//     // Calculate the target data-id value
//     const targetDataId = plannedTodos.length - 1;

//     console.log("targetDataId = " + targetDataId)

//     // Select all elements with the class `todo-container-element`
//     const todoContainers = document.querySelectorAll('.todo-container-element');

//     // Loop through each container to find the one with data-id equal to targetDataId
//     todoContainers.forEach(container => {
//         // Find a child element within the container that has `data-id`
//         const childWithDataId = container.querySelector('[data-id]');

//         // If the child element exists and its data-id matches targetDataId, remove the container
//         if (childWithDataId && parseInt(childWithDataId.getAttribute('data-id'), 10) === targetDataId) {
//             container.remove();
//         }
//     });
// }


//_ _ _
//_ _ _

// _ _ _

// Old todos (start)
// Old tasks
// Past plans

let pastPlansTextArea = document.getElementById('past-plans-input-field');
var pastPlansTextString;
// let pastTasks = [];
var pastTasks = [];

// const comaButtonRm = document.getElementById("removeCommasBtn");

// comaButtonRm.addEventListener("click", () => {
// pastPlansTextArea.value.replaceAll(/,+/g, "")
// pastPlansTextArea.innerHTML.replaceAll(/,+/g, "")
// })

function ifPlannedTodosIsPastPutToPastPlans() {

    // 1. Check if plannedTodos is past
    // 2. Put to past plans
    // 3. Update plannedTodos && dateCollection && todoCollection colorCollection (&& currentDayTodos && currentDayTodosItems ?)

    pastPlansTextArea.innerHTML = '';

    plannedTodos.forEach(todoRow => {
        if (todoRow.date < dateDisplay.textContent && todoRow.isRecurring !== true) {

            pastPlansTextString = todoRow.date + "    " + todoRow.todo + "    " + returnColorText(todoRow.color) + "\n";
            pastTasks.push(pastPlansTextString)
            console.log("pastPlansTextString = " + pastPlansTextString);
            pastPlansTextArea.innerHTML = pastTasks
            pastPlansTextArea.innerHTML = pastPlansTextArea.innerHTML.replaceAll(/,+/g, "")
        }
    })
        pastTasks = []
    }



// Old todos (end)


// Hur hantera data som finns i input-fält (i browsern) vid uppstart? (2024-10-07)

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    // console.log("plannedTodos before DOM update" + JSON.stringify(plannedTodos))
    updatePlannedTodosWithDomData();
    ifPlannedTodosIsPastPutToPastPlans();
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