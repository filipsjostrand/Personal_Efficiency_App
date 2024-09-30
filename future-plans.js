let fileHandle;
const dateInput = document.getElementById('date-input');

var plannedTodos = [
    // todo #1
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    // todo #2
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        color: 'Select',
        isEmpty: true,
    },
];

//
let dateInputValue = document.getElementById('date-input');
let textInputValue = document.getElementById('add-todo-text');

const dateCollection = document.getElementsByClassName("todo-date");
const todoCollection = document.getElementsByClassName("todo-text");
const todoTextElements = document.querySelectorAll(".todo-text");
const todoColorCollection = document.getElementsByClassName("todo-color");
const todoColorElement = document.querySelector(".todo-color");
const todoColorElements = document.querySelectorAll(".todo-color");

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

    // Function to get the current weekday as a three-letter abbreviation
    function getWeekday(date) {
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return weekdays[date.getDay()];
    }

    // Function to format date as YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    //   // Function to get the current week number of the year
    //   function getWeekNumber(date) {
    //     const startOfYear = new Date(date.getFullYear(), 0, 1);
    //     const pastDaysOfYear = (date - startOfYear) / 86400000;
    //     console.log("weekday: " + Math.ceil((pastDaysOfYear + startOfYear.getDay()) / 7))
    //     return Math.ceil((pastDaysOfYear + startOfYear.getDay()) / 7)((pastDaysOfYear + startOfYear.getDay()) / 7);
    // }

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
    // var todayDate = new Date();
    var weekNumber = todayDate.getWeekNumber();
    console.log("Week number: " + weekNumber);

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
        // console.log(cetTime.toString())
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
    // const today = new Date();
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

// Example usage:
const weekDates = getCurrentWeekDates();
console.log(weekDates);

document.getElementById('mon-date').textContent = weekDates[0];
document.getElementById('tue-date').textContent = weekDates[1];
document.getElementById('wed-date').textContent = weekDates[2];
document.getElementById('thu-date').textContent = weekDates[3];
document.getElementById('fri-date').textContent = weekDates[4];
document.getElementById('sat-date').textContent = weekDates[5];
document.getElementById('sun-date').textContent = weekDates[6];

// function getWeekDates() {
//     const today = new Date();
//     const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday
//     const weekDates = [];

//     for (let i = 0; i < 7; i++) {
//         const date = new Date(firstDayOfWeek);
//         date.setDate(firstDayOfWeek.getDate() + i);
//         const yyyy = date.getFullYear();
//         const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//         const dd = String(date.getDate()).padStart(2, '0');
//         weekDates.push(`${yyyy}-${mm}-${dd}`);
//     }

//     return weekDates;
// }

// // Example usage:
// const weekDates = getWeekDates();
// console.log(weekDates);

// _ _ _

    // // Get todays date (YYYY-MM-DD)
    // function getCurrentDate() {
    //     let dateFunc = new Date()

    //     day = dateFunc.getDate()
    //     month = dateFunc.getMonth()+1 //1
    //     year = dateFunc.getYear()
    //     if(year < 1000){year = year + 1900}//2

    //     if(month<10)
    //     {
    //     month = "0" + month
    //     } //3

    //     if(day <10)
    //     {
    //     day = "0" + day
    //     } //4

    //     console.log(year + "-" + month + "-" + day)
    // }



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

// Add todos (to todo list)
function addTaskToList() {
    console.log("addTaskToList() körs")
    console.log("dateInputValue.value + ' ' + textInputValue.value = " + dateInputValue.value + " " + textInputValue.value)

    // Idé: Iterera över plannedTodos-objektet och använd boolean "isEmpty"
    for (let i = 0; i < plannedTodos.length; i++) {
        console.log("for-loop körs")
        if (plannedTodos[i].isEmpty === true) {
            plannedTodos[i].date = dateInputValue.value;
            plannedTodos[i].todo = textInputValue.value;
            plannedTodos[i].color = colorPickerSelect.value;
            plannedTodos[i].isEmpty = false;

            //Update HTML to (input order) values
            dateCollection[i].innerHTML = dateInputValue.value;
            todoCollection[i].innerHTML = textInputValue.value;
            todoColorCollection[i].value = colorPickerSelect.value;

            // Change color on created todo element
            todoColorElements.forEach((todoColorElement) => colorPickerElementFunction(todoColorElement));

            // Sort todo list after date (closest first)
            plannedTodos.sort((a,b)=>{
                return new Date(a.date) - new Date(b.date);
            })

            // Stoppa for-loop när siffra hitttats och reviderats.
            break;
        }
    }

    // Empty todo text input
    textInputValue.value = '';


    // Update HTML to (sorted object) values
    for (let j = dateCollection.length; j >= 0; j--) {
        if (plannedTodos[j].isEmpty === false) {
        dateCollection[j].innerHTML = plannedTodos[j].date
        todoCollection[j].innerHTML = plannedTodos[j].todo
        dateCollection[j].value = plannedTodos[j].date
        todoCollection[j].value = plannedTodos[j].todo
        todoColorCollection[j].value = returnRgbColor(plannedTodos[j].color)
        todoColorCollection[j].style.backgroundColor = returnRgbColor(plannedTodos[j].color)
        }
    }

    console.log(plannedTodos[0].date)
    console.log(plannedTodos[1].date)
    console.log(plannedTodos[2].date)

    console.log(JSON.stringify(plannedTodos))
}

// _ _ _

// Edit task

let dataId;

function getDataId(dataId) {
    let currentDataId = dataId;
    console.log("currentDataId = " + currentDataId);
    return currentDataId;
}

function checkIfDateAndTextAreEmpty() {
    getDataId(dataId);
    if (dateCollection[dataId].value === '' && todoCollection[dataId].value === '') {
        plannedTodos[dataId].date = 'YYYY-MM-DD';
        plannedTodos[dataId].todo = 'Todo X';
        plannedTodos[dataId].color = 'Select';
        todoColorCollection[dataId].style.backgroundColor = 'rgb(221, 221, 221)';
        plannedTodos[dataId].isEmpty = true;
    }
    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
}


        // Date fields
        // Select all date fields (textareas) with the class 'todo-date'
        const dateFields = document.querySelectorAll('.todo-date');

        // Add event listeners to all the created date fields
        dateFields.forEach(function(field) {
            field.addEventListener('input', function(event) {
                dataId = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)

                getDataId(dataId);

                if (dateCollection[dataId].value !== '') {
                    plannedTodos[dataId][key] = dateCollection[dataId].value;

                } else if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                    checkIfDateAndTextAreEmpty();
                }

                console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
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
                console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
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
        colorSwitcherPanel.classList.remove('hidden');
    }
});

// Add event listener to close the panel
closePanelButton.addEventListener('click', function() {
    plannedTodos[dataId].color = returnDefinedColorText(todoColorCollection[dataId].value);
    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
    colorSwitcherPanel.classList.add('hidden');
});

// colorSwitcherPanel click
colorSwitcherPanel.addEventListener('click', function(e) {
    getDataId();
    console.log("colorSwitcherPanel (dataId) = " + dataId);
    todoColorCollection[dataId].value = returnRgbColor(e.target.getAttribute('data-color'));
    todoColorCollection[dataId].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));

    // console.log("e.target.getAttribute('trash-can').style.backgroundColor = 'white' = " + e.target.getAttribute('trash-can').style.backgroundColor = 'white')

    // if (e.target == clearSpecificTodoRowButton) {

    //     alert('Trash can clicked!')
    //     console.log("colorSwitcherPanel (trash can press)");
    //     clearSpecificTodoRowButton.addEventListener('click', clearSpecificTodoRow(dataId));
    // }

    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
});

    clearSpecificTodoRowButton.addEventListener('click', function() {
        console.log("clearSpecificTodo")
        getDataId();

        dateCollection[dataId].value = '';
        dateCollection[dataId].innerHTML = '';
        todoCollection[dataId].value = '';
        todoCollection[dataId].innerHTML = '';
        todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

        plannedTodos[dataId].date = 'YYYY-MM-DD';
        plannedTodos[dataId].todo = 'Todo X';
        plannedTodos[dataId].color = 'Select';
        plannedTodos[dataId].isEmpty = true;

        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
    });

// Optionally, add logic to close the panel when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === colorSwitcherPanel) {
        colorSwitcherPanel.classList.add('hidden');
    }
});

// _ _ _
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

        plannedTodos[i].date = 'YYYY-MM-DD';
        plannedTodos[i].todo = 'Todo X';
        plannedTodos[i].color = 'Select';
        plannedTodos[i].isEmpty = true;
    }
}

clearAllButton.addEventListener('click', clearAll);

// Clear specific todo-row (select the trash can symbol)
function clearSpecificTodoRow() {
    console.log("clearSpecificTodo() körs")
        dateCollection[dataId].value = '';
        dateCollection[dataId].innerHTML = '';
        todoCollection[dataId].value = '';
        todoCollection[dataId].innerHTML = '';
        todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

        plannedTodos[dataId].date = 'YYYY-MM-DD';
        plannedTodos[dataId].todo = 'Todo X';
        plannedTodos[dataId].color = 'Select';
        plannedTodos[dataId].isEmpty = true;

        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
}



// _ _ _


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
}

async function save() {
    let stream = await fileHandle.createWritable();
    await stream.write(dateInput.value);
    // await stream.write(", ");
    await stream.write(textarea.innerText);
    await stream.close();
}

async function saveAs() {
    fileHandle = await window.showSaveFilePicker();
    save();
}