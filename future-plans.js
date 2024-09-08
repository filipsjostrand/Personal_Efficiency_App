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

//

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


        // Select all date fields (textareas) with the class 'todo-date'
        const dateFields = document.querySelectorAll('.todo-date');

        // Add event listeners to all the created date fields
        dateFields.forEach(function(field) {
            field.addEventListener('input', function(event) {
                const todoIndex = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)

                plannedTodos[todoIndex][key] = dateCollection[todoIndex].value;

                console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            });
        });

        // Select all date fields (textareas) with the class 'todo-text'
        const todoFields = document.querySelectorAll('.todo-text');

        // Add event listeners to all the created date fields
        todoFields.forEach(function(field) {
            field.addEventListener('input', function(event) {
                const todoIndex = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)

                plannedTodos[todoIndex][key] = todoCollection[todoIndex].value;

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

let dataId;

function getDataId(dataId) {
    let currentDataId = dataId;
    console.log("currentDataId = " + currentDataId);
    return currentDataId;
}

// _ _ _

// Add event listener to the parent element
parentDiv.addEventListener('click', function(event) {
    // Check if the clicked element is a div with the name "color"
    if (event.target && event.target.getAttribute('name') === 'color') {
        dataId = event.target.getAttribute('data-id');
        console.log('Data-id of clicked color div:', dataId);

        // You can add additional logic here
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

colorSwitcherPanel.addEventListener('click', function(e) {
    console.log(e.target.getAttribute('data-color'))
    console.log(returnRgbColor(e.target.getAttribute('data-color')));
    getDataId();
    console.log("dataId (in colorSwitcherPanel) = " + dataId);
    todoColorCollection[dataId].value = returnRgbColor(e.target.getAttribute('data-color'));
    todoColorCollection[dataId].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));

    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));

});

// Optionally, add logic to close the panel when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === colorSwitcherPanel) {
        colorSwitcherPanel.classList.add('hidden');
    }
});


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