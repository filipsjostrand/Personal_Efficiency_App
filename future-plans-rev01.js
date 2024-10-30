// // 1. Week Plan Display
// // HTML Structure:

// // Heading and Current Date Section: Shows the current week, date, and day.
// // Week Table: Create a <table> with dynamic headers for weekdays and dates.
// // JavaScript Code to Populate Week Information:

// const weekPlanContainer = document.getElementById("week-plan-container");

// // Generate current date and day information
// function updateCurrentWeekInfo() {
//     const today = new Date();
//     const weekNumber = getWeekNumber(today);
//     const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
//     const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD format
//     document.getElementById("week-info").innerHTML = `Week ${weekNumber} - ${weekday}, ${formattedDate}`;
// }

// function getWeekNumber(date) {
//     const startDate = new Date(date.getFullYear(), 0, 1);
//     const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
//     return Math.ceil((days + startDate.getDay() + 1) / 7);
// }

// // Call this function on page load
// updateCurrentWeekInfo();

// // Table Structure:
// function generateWeekTableHeaders() {
//     const startDate = new Date(); // Assume current date is the start of the week
//     const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     const headerRow = document.getElementById("weekdays-header");

//     for (let i = 0; i < 7; i++) {
//         const date = new Date(startDate);
//         date.setDate(startDate.getDate() + i);
//         const dateStr = date.toISOString().split('T')[0];

//         const th = document.createElement("th");
//         th.innerText = `${weekdays[i]} ${dateStr}`;
//         headerRow.appendChild(th);
//     }
// }

// generateWeekTableHeaders();

// // JavaScript to Handle Form Submission:
// const plannedTodos = JSON.parse(localStorage.getItem("plannedTodos")) || [];

// document.getElementById("todo-form").addEventListener("submit", (event) => {
//     event.preventDefault();

//     const date = document.getElementById("date-input").value;
//     const todo = document.getElementById("todo-input").value;
//     const color = document.getElementById("color-input").value || "#cccccc";

//     const newTodo = { date, todo, color, isEmpty: false, recurring: false };
//     plannedTodos.push(newTodo);

//     localStorage.setItem("plannedTodos", JSON.stringify(plannedTodos));
//     renderWeekTable(plannedTodos);
//     renderFuturePlans(plannedTodos);
// });

// // 3. Future Plans Section
// // Rendering Todos in Future Plans:
// function renderFuturePlans(todos) {
//     const futurePlanContainer = document.getElementById("future-plan-list");
//     futurePlanContainer.innerHTML = ""; // Clear list

//     todos.forEach((todo) => {
//         const row = document.createElement("div");
//         row.classList.add("todo-row");

//         const dateCell = document.createElement("span");
//         dateCell.innerText = todo.date;
//         const todoCell = document.createElement("span");
//         todoCell.innerText = todo.todo;
//         const colorBox = document.createElement("span");
//         colorBox.style.backgroundColor = todo.color;
//         colorBox.classList.add("color-box");

//         row.append(dateCell, todoCell, colorBox);
//         futurePlanContainer.appendChild(row);
//     });
// }

// renderFuturePlans(plannedTodos);


// // 4. Import/Export Todos to and from Excel
// // To handle import/export functionality, consider using libraries:

// // ExcelJS for parsing Excel files to and from JSON.

// // Importing Excel Data:

// function importTodos(file) {
//     // Use ExcelJS to parse file into JSON, then update plannedTodos array
//     // Render updated todos in the Week Plan and Future Plans areas
// }

// // Exporting Past Todos:

// function exportPastTodos() {
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Past Todos");

//     // Set headers
//     worksheet.columns = [
//         { header: "Date", key: "date", width: 15 },
//         { header: "Todo", key: "todo", width: 30 },
//         { header: "Color", key: "color", width: 10 },
//     ];

//     // Add rows from pastTodos array
//     pastTodos.forEach(todo => {
//         worksheet.addRow(todo);
//     });

//     workbook.xlsx.writeBuffer().then((buffer) => {
//         const blob = new Blob([buffer], { type: "application/octet-stream" });
//         saveAs(blob, "PastTodos.xlsx");
//     });
// }
