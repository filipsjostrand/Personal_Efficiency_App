let fileHandle;
const dateInput = document.getElementById('date-input');

var plannedTodos = [
    // todo #1
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    // todo #2
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
    {
        date: 'YYYY-MM-DD',
        todo: 'Todo X',
        isEmpty: true,
    },
];

//

let dateInputValue = document.getElementById('date-input');
let textInputValue = document.getElementById('add-todo-text');

const dateCollection = document.getElementsByClassName("todo-date");
const todoCollection = document.getElementsByClassName("todo-text");

let todoListMap = new Map();

// Add todos (to todo list)
function addTaskToList() {
    console.log("addTaskToList() körs")
    console.log("dateInputValue.value + ' ' + textInputValue.value = " + dateInputValue.value + " " + textInputValue.value)

    // Idé: Iterera över plannedTodos-objektet och använd boolean "isEmpty"
    for (let i = 0; i < plannedTodos.length; i++) {
        if (plannedTodos[i].isEmpty === true) {
            plannedTodos[i].date = dateInputValue.value;
            plannedTodos[i].todo = textInputValue.value;
            plannedTodos[i].isEmpty = false;

            dateCollection[i].innerHTML = dateInputValue.value;
            todoCollection[i].innerHTML = textInputValue.value;


            plannedTodos.sort((a,b)=>{
                return new Date(a.date) - new Date(b.date);
            })

            // Stoppa for-loop när siffra hitttats.
            break;
        }
    }
    textInputValue.value = '';

    for (let j = dateCollection.length; j >= 0; j--) {
        if (plannedTodos[j].isEmpty === false) {
        dateCollection[j].innerHTML = plannedTodos[j].date
        todoCollection[j].innerHTML = plannedTodos[j].todo
        }
    }

    console.log(plannedTodos[0].date)
    console.log(plannedTodos[1].date)
    console.log(plannedTodos[2].date)

    console.log(JSON.stringify(plannedTodos))
}

async function loadPlan() {
    let [fileHandle] = await window.showOpenFilePicker({
        types: [
            {
                // description: 'Images',
                description: 'JS-object (date and todo-text)',
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