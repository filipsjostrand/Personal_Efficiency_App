"use strict"

let fileHandle;
const dateInput = document.getElementById('date-input');

// Ska todo-objekt-array ("plannedTodos") innehålla några objekt från början (exempelvis 3 till 9 objekt/dag*365 dagar = 3285 objekt/år) eller ska den vara tom?

var plannedTodos = [];

// _ _ _
// _ _ _

// Skapa plannedTodos-objekt med en klass

// class PlannedTodosClass {
//     // constructor(date, todo, color, isRecurring, dateData, intervalType, isEmpty) {
//         constructor(date, todo, color, isRecurring, recurringType, duration, everyWeek, weekPeriod, dateData, isEmpty) {
//             this.date = date;
//             this.todo = todo;
//             this.color = color;
//             this.isRecurring = isRecurring;
//             this.recurringType = recurringType;
//             this.duration = duration;
//             this.everyWeek = everyWeek;
//             this.weekPeriod = weekPeriod;
//             this.dateData = dateData;
//             this.isEmpty = isEmpty;
//         }

//         // Generera HTML för det aktuella objektet
//         // Ändra färg
//         // Anropa alla ställen där färg ska uppdateras (mha set:er) ((Anropa flera funktioner samtidigt(?)))
//         // När något ändras (i eventListener, kan man ha eventListener (som anropar olika funktioner/saker som ska uppdateras) i sin klass) ((Exempel: en klass ansvarar för (att funktioner kopplade till klassen) uppdaterar färger (överallt), automatisera uppdateringen))

//     addDivToList() {
//         let addDiv = console.log("add div")
//         return addDiv;
//     }

//     removeDivFromList() {
//         let removeDiv = console.log("remove div")
//         return removeDiv;
//     }

//     addPlannedTodoToDiv() {
//         let addDivObject = console.log("add object to div")
//         return addDivObject;
//     }

//     removePlannedTodoFromDiv() {
//         let removeDiv = console.log("remove object from div")
//         return removeDiv;
//     }

//     editPlannedTodoInDiv() {
//         let removeDivObject = console.log("edit (div and) object in div")
//         return removeDivObject;
//     }



//     //Getters & Setters?
// }

// _ _ _

// class recurringTodoCodeBluePrint {
//     constructor(date, intervalType, duration) {
//         this.date = date;
//         this.intervalType = intervalType;
//         this.duration = duration;
//     }

//     if (intervalType === "")



// }

// _ _ _
// _ _ _

// _ _ _

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

// Current Plan-div:ar
var todoContainer = document.getElementById('todo-container');
var todoElements = todoContainer.querySelectorAll('[data-id]');
var specificRecDiv;

var firstDateDiv = document.getElementById("todo-0-date")
var secondDateDiv = document.getElementById("todo-0-date")
var thirdDateDiv = document.getElementById("todo-0-date")

let dateInputValue = document.getElementById('date-input');
var textInputValue = document.getElementById('add-todo-text');
let isRecurringCheckbox = document.getElementById("todo-recurring-input");

// _ _ _

// var defaultDate; // Variable to store default date
var defaultDate; // Variable to store default date
var defaultTodoText; // Variable to store default todo text

// _ _ _

// Recurring Task Menu
let recUnderline = document.getElementById("rec-text-span");

// Day Choices (Selections)
let isRecurringDayRadioButton = document.getElementById('day');

let isRecurringWeekDayNameRadioButton = document.getElementById('day-name');
let isRecurringDayMonCheckbox = document.getElementById('rec-mon');
let isRecurringDayTueCheckbox = document.getElementById('rec-tue');
let isRecurringDayWedCheckbox = document.getElementById('rec-wed');
let isRecurringDayThuCheckbox = document.getElementById('rec-thu');
let isRecurringDayFriCheckbox = document.getElementById('rec-fri');
let isRecurringDaySatCheckbox = document.getElementById('rec-sat');
let isRecurringDaySunCheckbox = document.getElementById('rec-sun');
var recurringDayEveryWeekCheckBox = document.getElementById('every-week');

let isRecurringWeekDayNumberRadioButton = document.getElementById('day-count');
// let recurringDayDurationInput = document.getElementById('#rec-day-days');

// Week Choices (Selections)
let isRecurringWeekRadioButton = document.getElementById('week');

let isRecurringWeekNrOneRadioButton = document.getElementById('rec-1-week');
let isRecurringWeekNrTwoRadioButton = document.getElementById('rec-2-week');
let isRecurringWeekNrThreeRadioButton = document.getElementById('rec-3-week');
let isRecurringWeekNrFourRadioButton = document.getElementById('rec-4-week');

let recurringWeekDayDurationInput = document.getElementById('#rec-week-days');

// var currentweekPeriod;
// var currentRecurringType;

// Month Choices (Selections)
let isRecurringMonthRadioButton = document.getElementById('month');
let recurringMonthDayDurationInput = document.getElementById('#rec-month-days');

// Year Choices (Selections)
let isRecurringYearRadioButton = document.getElementById('year');
let recurringYearDayDurationInput = document.getElementById('rec-year-days');

let periodicityMenu = document.getElementById('periodicity');
let PeriodicityDayMenu = document.getElementById('per-weekday');
let PeriodicityWeekMenu = document.getElementById('per-week');
let PeriodicityMonthMenu = document.getElementById('per-month');
let PeriodicityYearMenu = document.getElementById('per-year');

// Duration input fields
const dayInput = document.getElementById('rec-day-days');
const weekInput = document.getElementById('rec-week-days');
const monthInput = document.getElementById('rec-month-days');
const yearInput = document.getElementById('rec-year-days');

// If old plannedTodos exists (in plannedTodos)
var pastTasksSet = new Set();

// _ _ _

var dynamicContainerToken;
var dynamicContainerDataId;
var newId;

// _ _ _
// _ _ _

// Get the fieldset element by its ID (days/week/month/year)
// Get all radio buttons within the fieldset
class PeriodicityManager {
    constructor(fieldsetId) {
        this.fieldset = document.getElementById(fieldsetId);
        this.radioButtons = this.fieldset.querySelectorAll('input[type="radio"]');
    }

    // Find the selected radio button and return its value
    getSelectedValue() {
        const selectedRadio = Array.from(this.radioButtons).find(radio => radio.checked);
        return selectedRadio ? selectedRadio.value : null;
    }

    // Set the radio button with the specified value to checked
    setSelectedValue(value) {
        this.radioButtons.forEach(radio => {
            radio.checked = radio.value === value;
        });
    }

    // Add event listener to all radio buttons
    addEventListenerToAll(event, callback) {
        this.radioButtons.forEach(radio => {
            radio.addEventListener(event, callback);
        });
    }
}

// Simplified ChoiceManager class
// Get the fieldset element by its ID (days/week/month/year)
// Determine the mode (day/week/month/year) based on fieldset ID
// Initialize mode-specific elements
// Get the event duration input element
// Initialize state and add listeners

class ChoiceManager {
    constructor(fieldsetId) {
        this.fieldset = document.getElementById(fieldsetId);
        if (!this.fieldset) {
            console.error(`Fieldset with ID "${fieldsetId}" does not exist.`);
            return;
        }

        this.mode = this.determineMode(fieldsetId);
        this.initModeSpecificElements();

        this.eventDurationInput = this.getElement('input[type="number"]', 'Event duration input');
        this.updateState();
        this.addListeners();
    }

    // Helper method to safely query elements
    getElement(selector, description) {
        const element = this.fieldset.querySelector(selector);
        if (!element) {
            console.warn(`Element "${description}" with selector "${selector}" not found in fieldset.`);
        }
        return element;
    }

    // Helper method to query multiple elements safely
    getElements(selector, description) {
        const elements = this.fieldset.querySelectorAll(selector);
        if (!elements || elements.length === 0) {
            console.warn(`Elements "${description}" with selector "${selector}" not found in fieldset.`);
        }
        return elements;
    }

    // Determine the mode based on the fieldset ID (days/week/month/year)
    determineMode(fieldsetId) {
        if (fieldsetId.includes('day')) return 'day';
        if (fieldsetId.includes('week')) return 'week';
        if (fieldsetId.includes('month')) return 'month';
        if (fieldsetId.includes('year')) return 'year';
        return null;
    }

    // Initialize elements based on the mode
    initModeSpecificElements() {
        if (this.mode === 'day') {
            this.initDayModeElements();
        } else if (this.mode === 'week') {
            this.weekRadioButtons = this.getElements('input[type="radio"][name="select-week-periodicity"]', 'Week radio buttons');
        }
    }

    // Initialize elements specific to day mode
    initDayModeElements() {
        this.radioSelect = this.getElement('input[type="radio"][value="select"]', 'Day mode select radio');
        this.radioDuration = this.getElement('input[type="radio"][value="duration"]', 'Day mode duration radio');
        this.dayCheckboxes = this.getElements('input[type="checkbox"][id^="rec-"]', 'Day mode checkboxes');
        this.everyWeekCheckbox = this.getElement('#every-week', 'Every week checkbox');
    }

    // Update the state based on the selected mode and elements
    updateState() {
        if (this.mode === 'day') {
            if (this.radioSelect && this.eventDurationInput) {
                this.toggleDayCheckboxes(this.radioSelect.checked);
                this.eventDurationInput.disabled = this.radioSelect.checked;
            }
        } else if (this.mode === 'week') {
            // Handle week-specific state updates
        } else if (this.mode === 'month' || this.mode === 'year') {
            if (this.eventDurationInput) {
                this.eventDurationInput.disabled = false;
            }
        }
    }

    // Enable or disable day checkboxes
    toggleDayCheckboxes(enabled) {
        console.log("toggleDayCheckboxes() körs");
        if (!this.dayCheckboxes) return;
        this.dayCheckboxes.forEach(checkbox => {
            checkbox.disabled = !enabled;
        });
    }

    // Add event listeners based on the mode
    addListeners() {
        if (this.mode === 'day') {
            if (this.radioSelect) {
                this.radioSelect.addEventListener('change', () => this.updateState());
            }
            if (this.radioDuration) {
                this.radioDuration.addEventListener('change', () => this.updateState());
            }
            if (this.dayCheckboxes) {
                this.dayCheckboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', (event) => {
                        console.log(`Day ${event.target.id} selected: ${event.target.checked}`);
                    });
                });
            }
            if (this.everyWeekCheckbox) {
                this.everyWeekCheckbox.addEventListener('change', (event) => {
                    console.log(`Every week: ${event.target.checked}`);
                });
            }
        } else if (this.mode === 'week') {
            if (this.weekRadioButtons) {
                this.weekRadioButtons.forEach(radio => {
                    radio.addEventListener('change', () => {
                        console.log(`Selected weeks: ${radio.value}`);
                        this.updateState();
                    });
                });
            }
        }

        if (this.eventDurationInput) {
            this.eventDurationInput.addEventListener('input', (event) => {
                console.log(`Event duration (${this.mode}): ${event.target.value}`);
            });
        }
    }

    // Get the selected days (for day mode)
    getSelectedDays() {
        return this.mode === 'day' && this.dayCheckboxes
            ? Array.from(this.dayCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id.replace('rec-', ''))
            : null;
    }

    // Get the selected week (for week mode)
    getSelectedWeeks() {
        if (this.mode === 'week' && this.weekRadioButtons) {
            const selectedRadio = Array.from(this.weekRadioButtons).find(radio => radio.checked);
            return selectedRadio ? selectedRadio.value : null;
        }
        return null;
    }

    // Get the event duration input value
    getEventDuration() {
        return this.eventDurationInput ? this.eventDurationInput.value : null;
    }
}


// _ _ _
// _ _ _

// class ChoiceManager {
//     constructor(fieldsetId) {
//         this.fieldset = document.getElementById(fieldsetId);
//         this.mode = this.determineMode(fieldsetId);
//         this.initModeSpecificElements();
//         this.eventDurationInput = this.fieldset.querySelector('input[type="number"]');
//         this.updateState();
//         this.addListeners();
//     }

//     // Determine the mode based on the fieldset ID (days/week/month/year)
//     determineMode(fieldsetId) {
//         if (fieldsetId.includes('day')) return 'day';
//         if (fieldsetId.includes('week')) return 'week';
//         if (fieldsetId.includes('month')) return 'month';
//         if (fieldsetId.includes('year')) return 'year';
//         return null;
//     }

//     // Initialize elements based on the mode
//     initModeSpecificElements() {
//         if (this.mode === 'day') {
//             this.initDayModeElements();
//         } else if (this.mode === 'week') {
//             this.weekRadioButtons = this.fieldset.querySelectorAll('input[type="radio"][name="select-week-periodicity"]');
//         }
//     }

//     // Initialize elements specific to day mode
//     initDayModeElements() {
//         this.radioSelect = this.fieldset.querySelector('input[type="radio"][value="select"]');
//         this.radioDuration = this.fieldset.querySelector('input[type="radio"][value="duration"]');
//         this.dayCheckboxes = this.fieldset.querySelectorAll('input[type="checkbox"][id^="rec-"]');
//         this.everyWeekCheckbox = this.fieldset.querySelector('#every-week');
//     }

//     // Update the state based on the selected mode and elements
//     updateState() {
//         if (this.mode === 'day') {
//             this.toggleDayCheckboxes(this.radioSelect.checked);
//             this.eventDurationInput.enabled = !this.radioSelect.checked;
//             // currentRecurringType = 'd';
//         } else if (this.mode === 'week') {
//             // currentRecurringType = 'w';
//             // this.logSelectedWeek();
//         } else if (this.mode === 'month' || this.mode === 'year') {
//             this.eventDurationInput.disabled = false;
//         }

//         // } else if (this.mode === 'month') {
//         //     this.eventDurationInput.disabled = false;
//         //     currentRecurringType = 'm';
//         // } else if (this.mode === 'year') {
//         //     this.eventDurationInput.disabled = false;
//         //     currentRecurringType = 'y';
//         // }
//     }

//     // Enable or disable day checkboxes
//     toggleDayCheckboxes(enabled) {
//         this.dayCheckboxes.forEach(checkbox => checkbox.disabled = !enabled);
//         this.eventDurationInput.disabled = this.radioSelect.checked;
//     }

//     // // Log the selected week radio button value
//     // logSelectedWeek() {
//     //     const selectedWeekRadio = Array.from(this.weekRadioButtons).find(radio => radio.checked);
//     //     if (selectedWeekRadio) {
//     //         console.log(`Selected weeks: ${selectedWeekRadio.value}`);
//     //     }
//     // }

//     // Add event listeners based on the mode
//     // Common listener for duration input
//     addListeners() {
//         if (this.mode === 'day') {
//             this.radioSelect.addEventListener('change', () => this.updateState());
//             this.radioDuration.addEventListener('change', () => this.updateState());
//             this.dayCheckboxes.forEach(checkbox => {
//                 checkbox.addEventListener('change', (event) => {
//                     console.log(`Day ${event.target.id} selected: ${event.target.checked}`);
//                 });
//             });
//             this.everyWeekCheckbox.addEventListener('change', (event) => {
//                 console.log(`Every week: ${event.target.checked}`);
//             });
//         } else if (this.mode === 'week') {
//             this.weekRadioButtons.forEach(radio => {
//                 radio.addEventListener('change', () => {
//                     console.log(`Selected weeks: ${radio.value}`);
//                     // console.log("Week Periodicity: " + radio.value);
//                     // currentweekPeriod = "w" + radio.value;
//                     this.updateState();
//                 });
//             });
//         }

//         if (this.eventDurationInput) {
//             this.eventDurationInput.addEventListener('input', (event) => {
//                 console.log(`Event duration (${this.mode}): ${event.target.value}`);
//             });
//         }
//     }

//     // Get the selected days (for day mode)
//     getSelectedDays() {
//         return this.mode === 'day' ? Array.from(this.dayCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id.replace('rec-', '')) : null;
//     }

//     // Get the selected week (for week mode)
//     getSelectedWeeks() {
//         if (this.mode === 'week') {
//             const selectedRadio = Array.from(this.weekRadioButtons).find(radio => radio.checked);
//             return selectedRadio ? selectedRadio.value : null;
//         }
//         return null;
//     }

//     // Get the event duration input value
//     getEventDuration() {
//         return this.eventDurationInput ? this.eventDurationInput.value : null;
//     }
// }

// _ _ _
// _ _ _

// Usage Examples
const dayManager = new ChoiceManager('per-weekday');
const weekManager = new ChoiceManager('per-week');
const monthManager = new ChoiceManager('per-month');
const yearManager = new ChoiceManager('per-year');

console.log('Day Event Duration:', dayManager.getEventDuration());
console.log('Week Event Duration:', weekManager.getEventDuration());
console.log('Month Event Duration:', monthManager.getEventDuration());
console.log('Year Event Duration:', yearManager.getEventDuration());

console.log('Selected Days:', dayManager.getSelectedDays());
console.log('Selected Weeks:', weekManager.getSelectedWeeks());

const daySelectOrDuration = new PeriodicityManager('per-weekday');
daySelectOrDuration.addEventListenerToAll('change', (e) => {
    console.log(`Radio button selected: ${e.target.value}`);
});

// Get the fieldset element by its ID (day mode)
// Get radio buttons and checkboxes specific to day mode
// Get the event duration input element
// Initialize state and add listeners
// class DayChoiceManager {
//     constructor(fieldsetId) {
//         this.fieldset = document.getElementById(fieldsetId);
//         this.radioSelect = this.fieldset.querySelector('input[type="radio"][value="select"]');
//         this.radioDuration = this.fieldset.querySelector('input[type="radio"][value="duration"]');
//         this.dayCheckboxes = this.fieldset.querySelectorAll('input[type="checkbox"][id^="rec-"]');
//         this.everyWeekCheckbox = this.fieldset.querySelector('#every-week');
//         this.eventDurationInput = this.fieldset.querySelector('#rec-days');
//         this.updateState();
//         this.addListeners();
//     }

//     // Update state based on selected radio button
//     updateState() {
//         this.toggleDayCheckboxes(this.radioSelect.checked);
//         this.eventDurationInput.disabled = !this.radioSelect.checked;
//     }

//     // Enable or disable day checkboxes
//     toggleDayCheckboxes(enabled) {
//         this.dayCheckboxes.forEach(checkbox => checkbox.disabled = !enabled);
//     }

//     // Add event listeners based on the mode
//     // Common listener for duration input
//     addListeners() {
//         this.radioSelect.addEventListener('change', () => this.updateState());
//         this.radioDuration.addEventListener('change', () => this.updateState());
//     }

//     getSelectedDays() {
//         return Array.from(this.dayCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id.replace('rec-', ''));
//     }

//     getEventDuration() {
//         return this.eventDurationInput.value;
//     }
// }

// // Usage
// const dayChoiceManager = new DayChoiceManager('per-weekday');
// console.log('Selected Days:', dayChoiceManager.getSelectedDays());
// console.log('Event Duration:', dayChoiceManager.getEventDuration());



// _ _ _
// _ _ _ _

// // Blueprint for radio buttons (Recurring task)
// class PeriodicityManager {
//     constructor(fieldsetId) {
//         this.fieldset = document.getElementById(fieldsetId);
//         this.radioButtons = this.fieldset.querySelectorAll('input[type="radio"]');
//     }

//     getSelectedValue() {
//         const selectedRadio = Array.from(this.radioButtons).find(radio => radio.checked);
//         return selectedRadio ? selectedRadio.value : null;
//     }

//     setSelectedValue(value) {
//         this.radioButtons.forEach(radio => {
//             radio.checked = radio.value === value;
//         });
//     }

//     addEventListenerToAll(event, callback) {
//         this.radioButtons.forEach(radio => {
//             radio.addEventListener(event, callback);
//         });
//     }
// }

// // _ _ _

// const currentSelectedRadioButton = new PeriodicityManager('periodicity');

// let dayStep = 0;

// console.log('Selected Value:', currentSelectedRadioButton.getSelectedValue());

// // Set the periodicity radio button value to "week"
// // currentSelectedRadioButton.setSelectedValue('week');

// currentSelectedRadioButton.addEventListenerToAll('change', (e) => {
//     console.log(`Radio button selected: ${e.target.value}`);
// });

// // _ _ _
// // _ _ _ _ _

// // Select day/week/month/year
// class ChoiceManager {
//     constructor(fieldsetId) {
//       this.fieldset = document.getElementById(fieldsetId);

//       // Determine mode based on fieldset ID
//       if (fieldsetId.includes('day')) {
//         this.mode = 'day';
//       } else if (fieldsetId.includes('week')) {
//         this.mode = 'week';
//       } else if (fieldsetId.includes('month')) {
//         this.mode = 'month';
//       } else if (fieldsetId.includes('year')) {
//         this.mode = 'year';
//       }

//       // Common element for duration input
//       this.eventDurationInput = this.fieldset.querySelector('input[type="number"]');

//       // Mode-specific elements
//       if (this.mode === 'day') {
//         this.radioSelect = this.fieldset.querySelector('input[type="radio"][value="select"]');
//         this.radioDuration = this.fieldset.querySelector('input[type="radio"][value="duration"]');
//         this.dayCheckboxes = this.fieldset.querySelectorAll('input[type="checkbox"][id^="rec-"]');
//         this.everyWeekCheckbox = this.fieldset.querySelector('#every-week');
//       } else if (this.mode === 'week') {
//         this.weekRadioButtons = this.fieldset.querySelectorAll('input[type="radio"][name="select-week-periodicity"]');
//       }

//       // Initialize state and add listeners
//       this.updateState();
//       this.addListeners();
//       console.log("ChoiceManager class constructor");
//     }

//     updateState() {
//       if (this.mode === 'day') {
//         // Day mode: Enable/disable checkboxes or duration input based on selected radio button
//         if (this.radioSelect.checked) {
//           this.toggleDayCheckboxes(true);
//           this.eventDurationInput.disabled = true;
//         } else if (this.radioDuration.checked) {
//           this.toggleDayCheckboxes(false);
//           this.eventDurationInput.disabled = false;
//         }
//       } else if (this.mode === 'week') {
//         // Week mode: Handle selected week frequency
//         const selectedWeekRadio = Array.from(this.weekRadioButtons).find(radio => radio.checked);
//         if (selectedWeekRadio) {
//           console.log(`Selected weeks: ${selectedWeekRadio.value}`);
//         }
//       } else if (this.mode === 'month' || this.mode === 'year') {
//         // Month or Year mode: Ensure duration input is enabled
//         this.eventDurationInput.disabled = false;
//       }
//     }

//     toggleDayCheckboxes(enabled) {
//       if (this.mode === 'day') {
//         this.dayCheckboxes.forEach(checkbox => {
//           checkbox.disabled = !enabled;
//         });
//       }
//     }

//     addListeners() {
//       if (this.mode === 'day') {
//         // Listeners for day mode
//         this.radioSelect.addEventListener('change', () => this.updateState());
//         this.radioDuration.addEventListener('change', () => this.updateState());
//         this.dayCheckboxes.forEach(checkbox => {
//           checkbox.addEventListener('change', (event) => {
//             console.log(`Day ${event.target.id} selected: ${event.target.checked}`);
//           });
//         });
//         this.everyWeekCheckbox.addEventListener('change', (event) => {
//           console.log(`Every week: ${event.target.checked}`);
//         });
//       } else if (this.mode === 'week') {
//         // Listeners for week mode
//         this.weekRadioButtons.forEach(radio => {
//           radio.addEventListener('change', () => {
//             console.log(`Selected weeks: ${radio.value}`);
//             this.updateState();
//           });
//         });
//       }

//       // Common listener for duration input
//       if (this.eventDurationInput) {
//         this.eventDurationInput.addEventListener('input', (event) => {
//           console.log(`Event duration (${this.mode}): ${event.target.value}`);
//         });
//       }
//     }

//     getSelectedDays() {
//       if (this.mode === 'day') {
//         return Array.from(this.dayCheckboxes)
//           .filter(checkbox => checkbox.checked)
//           .map(checkbox => checkbox.id.replace('rec-', ''));
//       }
//       return null;
//     }

//     getSelectedWeeks() {
//       if (this.mode === 'week') {
//         const selectedRadio = Array.from(this.weekRadioButtons).find(radio => radio.checked);
//         return selectedRadio ? selectedRadio.value : null;
//       }
//       return null;
//     }

//     getEventDuration() {
//       return this.eventDurationInput ? this.eventDurationInput.value : null;
//     }
//   }

//   // Usage Examples
//   const dayManager = new ChoiceManager('per-weekday');
//   const weekManager = new ChoiceManager('per-week');
//   const monthManager = new ChoiceManager('per-month');
//   const yearManager = new ChoiceManager('per-year');

//   // Example: Get event durations
//   console.log('Day Event Duration:', dayManager.getEventDuration());
//   console.log('Week Event Duration:', weekManager.getEventDuration());
//   console.log('Month Event Duration:', monthManager.getEventDuration());
//   console.log('Year Event Duration:', yearManager.getEventDuration());

//   // Example: Get selected days and weeks
//   console.log('Selected Days:', dayManager.getSelectedDays());
//   console.log('Selected Weeks:', weekManager.getSelectedWeeks());


// // _ _ _
// // _ _ _ _ _

// // _ _ _
// // _ _ _ _

// const daySelectOrDuration = new PeriodicityManager('per-weekday');

// daySelectOrDuration.addEventListenerToAll('change', (e) => {
//     console.log(`Radio button selected: ${e.target.value}`);
// });

// // _ _ _
// // _ _ _

// class DayChoiceManager {
//     constructor(fieldsetId) {
//       this.fieldset = document.getElementById(fieldsetId);

//       // Radios
//       this.radioSelect = this.fieldset.querySelector('input[type="radio"][value="select"]');
//       this.radioDuration = this.fieldset.querySelector('input[type="radio"][value="duration"]');

//       // Checkboxes for days
//       this.dayCheckboxes = this.fieldset.querySelectorAll('input[type="checkbox"][id^="rec-"]');

//       // "Every week" checkbox
//       this.everyWeekCheckbox = this.fieldset.querySelector('#every-week');

//       // Event Day Number input (Days)
//       this.eventDurationInput = this.fieldset.querySelector('#rec-days');

//       // Initial State Management
//       this.updateState();
//       this.addListeners();
//       console.log("DayChoiceManager class constructor");
//     }

//     updateState() {
//       if (this.radioSelect.checked) {
//         // Enable day checkboxes
//         this.toggleDayCheckboxes(true);
//         this.eventDurationInput.disabled = true;
//       } else if (this.radioDuration.checked) {
//         // Enable event duration input
//         this.toggleDayCheckboxes(false);
//         this.eventDurationInput.disabled = false;
//       }
//     }

//     toggleDayCheckboxes(enabled) {
//       this.dayCheckboxes.forEach(checkbox => {
//         checkbox.disabled = !enabled;
//       });
//     }

//     addListeners() {
//       // Radio button listeners
//       this.radioSelect.addEventListener('change', () => this.updateState());
//       this.radioDuration.addEventListener('change', () => this.updateState());

//     }

//     getSelectedDays() {
//       return Array.from(this.dayCheckboxes)
//         .filter(checkbox => checkbox.checked)
//         .map(checkbox => checkbox.id.replace('rec-', ''));
//     }

//     getEventDuration() {
//       return this.eventDurationInput.value;
//     }
//   }

//   // Usage
//   const dayChoiceManager = new DayChoiceManager('per-weekday');

//   // Example to get selected days
//   console.log('Selected Days:', dayChoiceManager.getSelectedDays());

//   // Example to get event duration
//   console.log('Event Duration:', dayChoiceManager.getEventDuration());

// _ _ _
// _ _ _

//   // Example to check if "Every Week" is selected
//   console.log('Every Week Selected:', dayChoiceManager.isEveryWeekChecked());


// _ _ _
// _ _ _
// _ _ _

    // // Event Day Number input (Week)
    // this.eventDayDurationWeekInput = this.fieldset.querySelector('#rec-week-days');

//     const numberOfWeeksPeriodicity = new PeriodicityManager('per-week');

//     numberOfWeeksPeriodicity.addEventListenerToAll('change', (e) => {
//         console.log(`Radio button selected: ${e.target.value}`);
//     });

// // _ _ _

//   // Usage
//   const weekChoiceManager = new DayChoiceManager('per-week');

//   // Example to get selected days
//   console.log('Selected Days:', weekChoiceManager.getSelectedDays());

//   // Example to get event duration
//   console.log('Event Duration:', weekChoiceManager.getEventDuration());

//   // Example to check if "Every Week" is selected
//   console.log('Every Week Selected:', weekChoiceManager.isEveryWeekChecked());


// _ _ _

// if (isRecurringCheckbox.checked === true) {
// createIntervalType();}

// let recurringPeriodicity = 0;

// class intervalTypeClass {

//     getPeriodicity() {
//         return "d";
//     }
// }

// function createIntervalType(date) {

//     if (isRecurringDayRadioButton.checked === true) {
//         recurringPeriodicity = "d";
//     }
//     else if (isRecurringWeekDayNameRadioButton.checked === true) {
//         recurringPeriodicity = "w";
//     }
//     else if (isRecurringMonthRadioButton.checked === true) {
//         recurringPeriodicity = "m";
//     }
//     else if (isRecurringYearRadioButton.checked === true) {
//         recurringPeriodicity = "y";
//     }
// }


// _ _ _

// Ska ...Collection ha "let" eller "const"(?)

// var dateField = document.querySelector('.todo-date');
var dateFields = document.querySelectorAll('.todo-date');
var todoFields = document.querySelectorAll('.todo-text');

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
        console.log("formatDate() körs");
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

    // Veckonummer för dagens datum
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

      const weekDisplay2 = document.getElementById('week-display-2');
      weekDisplay2.textContent = "Week# " + weekNumber;

// _ _ _

    dateInput.min = dateDisplay.textContent

    dateInput.value = dateDisplay.textContent;

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

// Function to convert dates to time and sort the objects (2024-12-04 Används ej!?)
// function sortArrayOfObjectsDataByDateAndTIme(arrayOfObjects) {
//     console.log("sortArrayOfObjectsDataByDateAndTIme körs");
//     return arrayOfObjects.sort((a, b) => {
//     let timeA = new Date(a.date).getTime();
//     let timeB = new Date(b.date).getTime();

//     timeA - timeB

//     timeA = timeToNumber(extractTime(a.todo));
//     timeB = timeToNumber(extractTime(b.todo));

//       return timeA - timeB; // Sort in ascending order
//     });
//   }

// function sortObjectsArrayByDateAndTime(objectsArray) {
//     console.log("sortObjectsArrayByDateAndTime körs");
//         // Sorteringsfunktion (sortera 1. Datum, 2. Tid)
//         objectsArray.sort(function(a, b) {
//             // Jämför datum först
//             if (a.date < b.date) return -1;
//             if (a.date > b.date) return 1;

//             // Om datum är lika, försök jämföra tid från "time" eller "todo"
//             const timeA = a.time || extractTimeFromTodo(a.todo); // Kolla om tid finns i "time" eller i "todo"
//             const timeB = b.time || extractTimeFromTodo(b.todo);

//             if (timeA && timeB) {
//                 if (timeA < timeB) return -1;
//                 if (timeA > timeB) return 1;
//             }

//             return 0; // Om både datum och tid (från time eller todo) är lika
//         });
// }

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


// let blockedDates = [];
let blockedDates = new Set();

// Function to validate date format (YYYY-MM-DD)
function isValidDateFormat(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Regex for YYYY-MM-DD
    console.log("dateRegex.test(dateString) in isValidDateFormat(dateString): " + dateRegex.test(dateString))
    return dateRegex.test(dateString);
}

// Function to handle date input

// // dataId is defined here
// let dataId;

var resultString;

// function handleDateInput(event) {
    function handleDateInput(dateInputString, defaultDate) {
    // const resultString = event.target.value.trim(); // Get the input value and trim whitespace

    console.log("handleDateInput() körs")

        // let dataId = getDataId(dataId);

    // const resultString = dateInputString.trim(); // Get the input value and trim whitespace
    // let resultString = dateInputString.trim(); // Get the input value and trim whitespace
    console.log("dateInputString (handle) = " + dateInputString)
    resultString = dateInputString.trim(); // Get the input value and trim whitespace
    console.log("resultString (handle) = " + resultString)

    if (isValidDateFormat(resultString)) {
        if (blockedDates.has(resultString)) {
            console.log(`Date ${resultString} is blocked.`);
            // addTaskToList(""); // Send an empty string to `addTaskToList()` for blocked dates
        } else {
            console.log(`Date ${resultString} is valid and unblocked.`);

            // _ _ _
            // console.log(" dataId = " + dataId)
            // console.log(" dateCollection[dataId].value = " + dateCollection[dataId].value)
            // plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumber(dateCollection[dataId].value)
            //     console.log("plannedTodos[dataId].dataDate = " +  weekdayNameToWeekDayNumber(dateCollection[dataId].value))
            // _ _ _

            // updateCurrentWeekSchedule(resultString); // Send valid, unblocked date to `updateCurrentWeekSchedule()`
            // updateCurrentWeekSchedule(); // Send valid, unblocked date to `updateCurrentWeekSchedule()`
        }
    } else {
        console.log(`is Invalid date format: ${resultString}`);
        resultString = defaultDate;

        checkIfDateAndTextAreEmpty();

        // addTaskToList(""); // Send an empty string for invalid dates

        // dateCollection[dataId].value = defaultDate;
        // dateCollection[dataId].innerHTML = defaultDate;
    }
    console.log("resultString (end of handleDateInput = " + resultString)
    updateCurrentWeekSchedule();
    return resultString;
}

// _ _ _

function getCurrentDataIdOnClick(dataFieldClass) {
    // Select all elements with the specified class (or datafield type)
    const dataFields = document.querySelectorAll(`.${dataFieldClass}`);

    // Add a click event listener to each element
    dataFields.forEach(dataField => {
        dataField.addEventListener('click', () => {
            // Get the value of the data-id attribute of the clicked element
            const currentDataId = dataField.getAttribute('data-id');
            console.log(`Current data-id: ${currentDataId}`);

            // Return the current data-id
            // (Optional: Call a function or process the data-id here)
            processDataId(currentDataId);
        });
    });
}

// Example function to process the data-id
function processDataId(dataId) {
    console.log(`Processing data-id: ${dataId}`);
    return dataId;
}

// Example usage: Attach to fields with the class 'todo-date'
getCurrentDataIdOnClick('todo-date');

// _ _ _

// Recurring menus

function recCheckBoxIsUnchecked() {
    recUnderline.style.textDecorationColor = "rgba(0,117,255,0.5)";
    periodicityMenu.style.display = "none";
    PeriodicityDayMenu.style.display = "none";
    PeriodicityWeekMenu.style.display = "none";
    PeriodicityMonthMenu.style.display = "none";
    PeriodicityYearMenu.style.display = "none";
    isRecurringDayRadioButton.checked = false;
    isRecurringWeekDayNameRadioButton.checked = false;
    isRecurringDayMonCheckbox.checked = false;
    isRecurringDayTueCheckbox.checked = false;
    isRecurringDayWedCheckbox.checked = false;
    isRecurringDayThuCheckbox.checked = false;
    isRecurringDayFriCheckbox.checked = false;
    isRecurringDaySatCheckbox.checked = false;
    isRecurringDaySunCheckbox.checked = false;
    isRecurringWeekDayNumberRadioButton.checked = false;
    recurringDayEveryWeekCheckBox.checked = false;
    isRecurringWeekRadioButton.checked = false;
    isRecurringWeekNrOneRadioButton.checked = false;
    isRecurringWeekNrTwoRadioButton.checked = false;
    isRecurringWeekNrThreeRadioButton.checked = false;
    isRecurringWeekNrFourRadioButton.checked = false;
    isRecurringMonthRadioButton.checked = false;
    isRecurringYearRadioButton.checked = false;
}

isRecurringCheckbox.addEventListener("click", (e) => {

    if (isRecurringCheckbox.checked) {
        periodicityMenu.style.display = "block";
        PeriodicityYearMenu.style.display = "none";
        recUnderline.style.textDecorationColor = "rgba(235,235,235,0.5)";
    }
    else if (!isRecurringCheckbox.checked) {
        recCheckBoxIsUnchecked();
        // recUnderline.style.textDecorationColor = "rgba(0,117,255,0.5)";
        // periodicityMenu.style.display = "none";
        // PeriodicityDayMenu.style.display = "none";
        // PeriodicityWeekMenu.style.display = "none";
        // PeriodicityMonthMenu.style.display = "none";
        // PeriodicityYearMenu.style.display = "none";
        // isRecurringDayRadioButton.checked = false;
        // isRecurringWeekDayNameRadioButton.checked = false;
        // isRecurringDayMonCheckbox.checked = false;
        // isRecurringDayTueCheckbox.checked = false;
        // isRecurringDayWedCheckbox.checked = false;
        // isRecurringDayThuCheckbox.checked = false;
        // isRecurringDayFriCheckbox.checked = false;
        // isRecurringDaySatCheckbox.checked = false;
        // isRecurringDaySunCheckbox.checked = false;
        // isRecurringWeekDayNumberRadioButton.checked = false;
        // recurringDayEveryWeekCheckBox.checked = false;
        // isRecurringWeekRadioButton.checked = false;
        // isRecurringWeekNrOneRadioButton.checked = false;
        // isRecurringWeekNrTwoRadioButton.checked = false;
        // isRecurringWeekNrThreeRadioButton.checked = false;
        // isRecurringWeekNrFourRadioButton.checked = false;
        // isRecurringMonthRadioButton.checked = false;
        // isRecurringYearRadioButton.checked = false;
    }
})

// Recurring task (daily)
isRecurringDayRadioButton.addEventListener("click", (e) => {

    if (isRecurringDayRadioButton.value === "day") {
        PeriodicityDayMenu.style.display = "block";
        PeriodicityWeekMenu.style.display = "none";
        PeriodicityMonthMenu.style.display = "none";
        PeriodicityYearMenu.style.display = "none";

        dayInput.value = '1';

        isRecurringWeekNrOneRadioButton.checked = false;
        isRecurringWeekNrTwoRadioButton.checked = false;
        isRecurringWeekNrThreeRadioButton.checked = false;
        isRecurringWeekNrFourRadioButton.checked = false;
        // isRecurringWeekRadioButton.value = "";
        // isRecurringMonthRadioButton.value = "";
        // isRecurringYearRadioButton.value = "";
    }
    else if (!isRecurringDayRadioButton.value === "day") {
        PeriodicityDayMenu.style.display = "none";
    }
})

// Recurring task (weekly)
isRecurringWeekRadioButton.addEventListener("click", (e) => {

    if (isRecurringWeekRadioButton.value === "week") {
        PeriodicityWeekMenu.style.display = "block";
        PeriodicityDayMenu.style.display = "none";
        PeriodicityMonthMenu.style.display = "none";
        PeriodicityYearMenu.style.display = "none";
        weekInput.value = '1';
        isRecurringWeekDayNameRadioButton.checked = false;
        isRecurringDayMonCheckbox.checked = false;
        isRecurringDayTueCheckbox.checked = false;
        isRecurringDayWedCheckbox.checked = false;
        isRecurringDayThuCheckbox.checked = false;
        isRecurringDayFriCheckbox.checked = false;
        isRecurringDaySatCheckbox.checked = false;
        isRecurringDaySunCheckbox.checked = false;
        isRecurringWeekDayNumberRadioButton.checked = false;
        recurringDayEveryWeekCheckBox.checked = false;
        // isRecurringDayRadioButton.value = "";
        // isRecurringMonthRadioButton.value = "";
        // isRecurringYearRadioButton.value = "";
    }
    else if (!isRecurringWeekRadioButton.value === "week") {
        PeriodicityWeekMenu.style.display = "none";
    }
})

// Recurring task (monthly)
isRecurringMonthRadioButton.addEventListener("click", (e) => {

    if (isRecurringMonthRadioButton.value === "month") {
        PeriodicityMonthMenu.style.display = "block";
        PeriodicityDayMenu.style.display = "none";
        PeriodicityWeekMenu.style.display = "none";
        PeriodicityYearMenu.style.display = "none";
        monthInput.value = '1';
        isRecurringWeekDayNameRadioButton.checked = false;
        isRecurringDayMonCheckbox.checked = false;
        isRecurringDayTueCheckbox.checked = false;
        isRecurringDayWedCheckbox.checked = false;
        isRecurringDayThuCheckbox.checked = false;
        isRecurringDayFriCheckbox.checked = false;
        isRecurringDaySatCheckbox.checked = false;
        isRecurringDaySunCheckbox.checked = false;
        isRecurringWeekDayNumberRadioButton.checked = false;
        recurringDayEveryWeekCheckBox.checked = false;
        isRecurringWeekNrOneRadioButton.checked = false;
        isRecurringWeekNrTwoRadioButton.checked = false;
        isRecurringWeekNrThreeRadioButton.checked = false;
        isRecurringWeekNrFourRadioButton.checked = false;
        // isRecurringDayRadioButton.value = "";
        // isRecurringWeekRadioButton.value = "";
        // isRecurringYearRadioButton.value = "";
    }
    else if (!isRecurringMonthRadioButton.value === "month") {
        PeriodicityMonthMenu.style.display = "none";
    }
    })

// Recurring task (yearly)
isRecurringYearRadioButton.addEventListener("click", (e) => {

    if (isRecurringYearRadioButton.value === "year") {
        PeriodicityYearMenu.style.display = "block";
        PeriodicityDayMenu.style.display = "none";
        PeriodicityWeekMenu.style.display = "none";
        PeriodicityMonthMenu.style.display = "none";
        yearInput.value = '1';
        isRecurringWeekDayNameRadioButton.checked = false;
        isRecurringDayMonCheckbox.checked = false;
        isRecurringDayTueCheckbox.checked = false;
        isRecurringDayWedCheckbox.checked = false;
        isRecurringDayThuCheckbox.checked = false;
        isRecurringDayFriCheckbox.checked = false;
        isRecurringDaySatCheckbox.checked = false;
        isRecurringDaySunCheckbox.checked = false;
        isRecurringWeekDayNumberRadioButton.checked = false;
        recurringDayEveryWeekCheckBox.checked = false;
        isRecurringWeekNrOneRadioButton.checked = false;
        isRecurringWeekNrTwoRadioButton.checked = false;
        isRecurringWeekNrThreeRadioButton.checked = false;
        isRecurringWeekNrFourRadioButton.checked = false;
    }
    else if (!isRecurringYearRadioButton.value === "year") {
        PeriodicityYearMenu.style.display = "none";
    }
    })


// PeriodicityMonthMenu
// PeriodicityYearMenu

// _ _ _

let sortedData;

// Add todos (to todo list)
// add task (addtask)

// Function to check if a todo already exists
// function isDuplicateTodo(newTodo, plannedTodosArray) {
//     return plannedTodosArray.some(existingTodo =>
//         existingTodo.date === newTodo.date &&
//         existingTodo.todo === newTodo.todo
//     );
// }

var weekDayNumber;

// Convert
function weekdayNameToWeekDayNumber(dateInputValue) {
    console.log("dateInputValue =" + dateInputValue);
    console.log("dateInputValue.value =" + dateInputValue.value);

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
    console.log("weekDayNumber = " + weekDayNumber);
    return weekDayNumber;
}

function weekdayNameToWeekDayNumberMultiDuration(newConvertedDateString) {
    // console.log("weekdayNameToWeekDayNumberMultiDuration()");
    // console.log("newConvertedDateString = " + newConvertedDateString);

    if (getDayOfWeek(newConvertedDateString) === "mon") {
        weekDayNumber = "0";
    }
    else if (getDayOfWeek(newConvertedDateString) === "tue") {
        weekDayNumber = "1";
    }
    else if (getDayOfWeek(newConvertedDateString) === "wed") {
        weekDayNumber = "2";
    }
    else if (getDayOfWeek(newConvertedDateString) === "thu") {
        weekDayNumber = "3";
    }
    else if (getDayOfWeek(newConvertedDateString) === "fri") {
        weekDayNumber = "4";
    }
    else if (getDayOfWeek(newConvertedDateString) === "sat") {
        weekDayNumber = "5";
    }
    else if (getDayOfWeek(newConvertedDateString) === "sun") {
        weekDayNumber = "6";
    }
    console.log("weekDayNumber = " + weekDayNumber);
    return weekDayNumber;
}

let isCopy;

// plannedTodos-objects-array with PlannedTodosClass
let plannedTodosObjectsArray = [];
// let plannedTodosObjectArray = PlannedTodosClass.createObjectsArray()

    // _ _ _
    // _ _ _

    // // Example ChoiceManager setup
    // const dayChoiceManager = new ChoiceManager('per-day');
    // const weekChoiceManager = new ChoiceManager('per-week');

    // _ _ _
    // _ _ _

    // let selectedPeriod = null;

    let selectedPeriod = '';
    let everyWeek = false;
    let weekPeriod = '';
    let recurringType = '';
    let duration = '';

    recurringDayEveryWeekCheckBox.addEventListener('change', function() {
        if (selectedPeriod !== 'day') {
            everyWeek = false;
        } else if (recurringDayEveryWeekCheckBox.checked === true) {
            everyWeek = true;
        } else if (recurringDayEveryWeekCheckBox.checked === false) {
            everyWeek = false;
        }
        console.log(everyWeek);
        updateDuration();
    })



    // _ _ _



    document.getElementsByName('select-period').forEach((element) => {
        element.addEventListener('change', function() {
            selectedPeriod = this.value;
            console.log(selectedPeriod);

            // Reset weekPeriod if the selectedPeriod is not 'week'
            if (selectedPeriod !== 'week') {
                weekPeriod = '';
                console.log(weekPeriod);
            }
            updateDuration();
        });
    });

    document.getElementsByName('select-week-periodicity').forEach((element) => {
        element.addEventListener('change', function() {
            if (selectedPeriod === 'week') {
                weekPeriod = 'w' + this.value; console.log(weekPeriod);
            }
            updateDuration();
        });
    });

    // // Add event listeners only if the elements exist if (dayInput)
    // if (dayInput) dayInput.addEventListener('input', updateDuration);
    // if (weekInput) weekInput.addEventListener('input', updateDuration);
    // if (monthInput) monthInput.addEventListener('input', updateDuration);
    // if (yearInput) yearInput.addEventListener('input', updateDuration);

    // // Function to remove event listeners
    // function removePeriodicityDurationEventListeners() {
    //     if (dayInput) dayInput.removeEventListener('input', updateDuration);
    //     if (weekInput) weekInput.removeEventListener('input', updateDuration);
    //     if (monthInput) monthInput.removeEventListener('input', updateDuration);
    //     if (yearInput) yearInput.removeEventListener('input', updateDuration);
    // }

    // Event listeners for duration input fields
    document.getElementById('rec-day-days').addEventListener('input', updateDuration);
    document.getElementById('rec-week-days').addEventListener('input', updateDuration);
    document.getElementById('rec-month-days').addEventListener('input', updateDuration);
    document.getElementById('rec-year-days').addEventListener('input', updateDuration);

    function updateDuration() {
        if (selectedPeriod === 'day') {
            duration = dayInput.value; }
        else if (selectedPeriod === 'day' && dayInput.disabled) {
            duration = "1";
        }
        else if (selectedPeriod === 'week') {
            duration = weekInput.value;
        }
        else if (selectedPeriod === 'month') {
            duration = monthInput.value;
        }
        else if (selectedPeriod === 'year') {
            duration = yearInput.value; }
        else {
            duration = "1"; // Default value if no period is selected
        }
    };

    console.log(duration);

    function getRecurringType(selectedPeriod, isRecurringCheckbox) {
        if (!isRecurringCheckbox.checked) {
            return '';
        }
        else if (selectedPeriod === "day" && isRecurringCheckbox.checked) {
            return recurringType = "d";
          } else if (selectedPeriod === "week" && isRecurringCheckbox.checked) {
            return recurringType = "w";
          } else if (selectedPeriod === "month" && isRecurringCheckbox.checked) {
            return recurringType = "m";
          } else if (selectedPeriod === "year" && isRecurringCheckbox.checked) {
            return recurringType = "y";
          }
    }
    // _ _ _
    // _ _ _

    function getDuration(selectedPeriod) {
        if (selectedPeriod === "day" && dayInput.value !== '' && dayInput.value !== null && dayInput.value !== undefined) {
            return duration = dayInput.value;
          } else if (selectedPeriod === "week" && weekInput.value !== '' && weekInput.value !== null && weekInput.value !== undefined) {
            return duration = weekInput.value;
          } else if (selectedPeriod === "month" && monthInput.value !== '' && monthInput.value !== null && monthInput.value !== undefined) {
            return duration = monthInput.value;
          } else if (selectedPeriod === "year" && yearInput.value !== '' && yearInput.value !== null && yearInput.value !== undefined) {
            return duration = yearInput.value;
          } else {
          return duration = "1";
          }
    }


    // _ _ _
    // _ _ _

    // Fungerar inte 2025-01-24
    // function updateRecDivBgColor() {
    //     for (let i = 0; i < plannedTodos.length; i++) {

    //         // Select each specific todo container
    //         specificRecDiv = document.querySelector(`.todo-rec[data-id="${i}"]`)
    //         console.log("specificRecDiv = " + specificRecDiv)

    //         // If the plannedTodo-object is recurring, change container bg-color to blue
    //         if (plannedTodos[i].isRecurring === true) {
    //             specificRecDiv.style.backgroundColor = 'rgb(0, 117, 255)';  // Change to desired color
    //         }
    //         // else if the plannedTodo-object is !recurring, change container bg-color opacity to 0
    //         else if (plannedTodos[i].isRecurring === false) {
    //             specificRecDiv.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    //         }
    //     };
    // }
    // _ _ _
    // _ _ _

    function sortPlannedTodos(plannedTodos) {
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
    }

    // function updateCurrentPlan(plannedTodos) {
    //     console.log("updateCurrentPlan() körs");
    //     for (let i = 0; i < plannedTodos.length; i++) {

    //         console.log("JSON.stringify(plannedTodos) (1) = " + JSON.stringify(plannedTodos))
    //         console.log("JSON.stringify(plannedTodos[i]) (1) = " + JSON.stringify(plannedTodos[i]))

    //         console.log("dateCollection[i].innerHTML = " + dateCollection[i].innerHTML);

    //         //Update HTML to (input order) plannedTodos values
    //         dateCollection[i].innerHTML = plannedTodos[i].date;
    //         dateCollection[i].value = plannedTodos[i].date;
    //         todoCollection[i].innerHTML = plannedTodos[i].todo;
    //         todoCollection[i].value = plannedTodos[i].todo;
    //         todoColorCollection[i].value = plannedTodos[i].todo

    //         todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);

    //         // Change color on created todo element
    //         todoColorElements.forEach((todoColorElement) => colorPickerElementFunction(todoColorElement));

    //     }
    // }

    // _ _ _

    // textInputValue

    // // Get the input field
    // var todoInput = document.getElementById('add-todo-text');

    // Add focus event listener
    textInputValue.addEventListener('focus', () => {
        textInputValue.classList.add('highlight');
    });

    // Add blur event listener
    textInputValue.addEventListener('blur', () => {
        textInputValue.classList.remove('highlight');
    });


    // _ _ _

    // var enterKeyPressActive = false;


    // document.onkeydown = checkKey;

    // function checkKey(e) {
    //     e = e || window.event;

    //     if (enterKeyPressActive === true && textInputValue.value !== '' && textInputValue.value !== undefined) {
    //         if (e.keyCode == "13") {
    //             // Enter key
    //             console.log("ooa ooa");
    //             addTaskToList();
    //             enterKeyPressActive = false;
    //         }
    //     }
    // }

    //     // Activate arrow-key-press inside the opened idea modal
    //     checkKey();

    // _ _ _
    // _ _ _

    // function changeFontSizeOfString(elementId, searchString, fontSize) {
    //     // Get the element by its ID
    //     const element = document.getElementById(elementId);

    //     // Check if the element exists
    //     if (element) {
    //         // Get the inner HTML of the element
    //         let innerHTML = element.innerHTML;

    //         // Create a regular expression to find the specific string (case-sensitive)
    //         const regex = new RegExp(`(${searchString})`, 'g');

    //         // Replace the specific string with a styled span containing the string
    //         innerHTML = innerHTML.replace(regex, `<span style="font-size: ${fontSize};">$1</span>`);

    //         // Set the modified inner HTML back to the element
    //         element.innerHTML = innerHTML;
    //     } else {
    //         console.error(`Element with ID "${elementId}" does not exist.`);
    //     }
    // }

    // // Example usage: Change font size of 'specific string' to '24px'
    // changeFontSizeOfString('exampleText', 'specific string', '24px');

    // _ _ _
    // _ _ _

// function addTaskToList() (start)
// function addTaskToList(dateInputValue) {
    function addTaskToList(resultString) {
        isCopy = false;

        console.log("addTaskToList() körs")

        console.log("resultString = " + resultString);

        // _ _ _

        if (resultString === "" || dateInputValue.value === "") {
        }

        else if(dateInputValue.value !== "") {
            // else if(dateInputValue.value !== undefined && dateInputValue.value !== null) {
            let newTodo = {
                date: dateInputValue.value,
                todo: textInputValue.value,
                color: colorPickerSelect.value,
                isRecurring: isRecurringCheckbox.checked,
                recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                everyWeek: everyWeek,
                weekPeriod: weekPeriod,
                duration: getDuration(selectedPeriod),
                dataDate: weekdayNameToWeekDayNumber(dateInputValue),
                isEmpty: false
            }

        // _ _ _

            console.log("aa");

            console.log("newTodo.isRecurring = " + newTodo.isRecurring)

            console.log("newTodo.duration (i addTask) = " +  newTodo.duration);
            console.log("typeof newTodo.duration (i addTask) = " +  typeof(newTodo.duration));

        // _ _ _

        var dataDateNr = '';

        // Get date for recurring daily tasks
        // function checkIfDailyRecTaskInPast(dataDateNr) {

        // Returns the coming date for a daily recurring task (based on selected day (dataDate))
        // (startingDate >= dateDisplay.textContent)
            function getComingDailyRecTaskDate(dataDateNr) {
                console.log("getComingDailyRecTaskDate() körs");

                let nextDate = '';
                let comingSevenRecDays = [];

                let startingDate = newTodo.date;    // First weekday date for the daily task (mon/tue/wed/..., dataDate 0/1/2/...)
                console.log("startingDate: " + startingDate);

                let startingDailyRecDate = new Date(startingDate);
                let nextOneRecDate = new Date(startingDate);
                let nextTwoRecDate = new Date(startingDate);
                let nextThreeRecDate = new Date(startingDate);
                let nextFourRecDate = new Date(startingDate);
                let nextFiveRecDate = new Date(startingDate);
                let nextSixRecDate = new Date(startingDate);

                let startingDailyRecDateString = startingDailyRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                console.log("startingDailyRecDateString = " + startingDailyRecDateString);
                Number(weekdayNameToWeekDayNumberMultiDuration(startingDailyRecDateString));

                // console.log("startingRecDataDate: " + startingDataDate);
                // let nextOneRecMonDate = startingDailyRecDate.setDate(startingDailyRecDate.getDate() + 1);
                nextOneRecDate.setDate(startingDailyRecDate.getDate() + 1);
                // console.log("new Date(nextOneRecMonDate) = " + new Date(nextOneRecMonDate));
                console.log("nextOneRecDate = " + nextOneRecDate);
                nextTwoRecDate.setDate(startingDailyRecDate.getDate() + 2);
                nextThreeRecDate.setDate(startingDailyRecDate.getDate() + 3);
                nextFourRecDate.setDate(startingDailyRecDate.getDate() + 4);
                nextFiveRecDate.setDate(startingDailyRecDate.getDate() + 5);
                nextSixRecDate.setDate(startingDailyRecDate.getDate() + 6);

                let nextOneRecDateString = nextOneRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                console.log("nextOneRecDateString = " + nextOneRecDateString);
                let nextTwoRecDateString = nextTwoRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                console.log("nextTwoRecDateString = " + nextTwoRecDateString);
                let nextThreeRecDateString = nextThreeRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextFourRecDateString = nextFourRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextFiveRecDateString = nextFiveRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextSixRecDateString = nextSixRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format


                comingSevenRecDays.push(startingDailyRecDateString, nextOneRecDateString, nextTwoRecDateString, nextThreeRecDateString, nextFourRecDateString, nextFiveRecDateString, nextSixRecDateString);
                    console.log("comingSevenRecDays = " + comingSevenRecDays);
                comingSevenRecDays.forEach((comingWeekDate) => {
                    console.log("JSON.stringify(comingWeekDate) = " + JSON.stringify(comingWeekDate));
                    if (Number(weekdayNameToWeekDayNumberMultiDuration(comingWeekDate)) === dataDateNr) {
                        console.log("comingWeekDate (to return) = " + comingWeekDate);
                        nextDate = comingWeekDate;
                        // if (plannedTodos.length > 3) {
                        //     console.log("add dynamic container");
                        //     dynamicContainerToken = "addTaskToList";
                        //     // dynamicContainerDataId = plannedTodos.length-1;
                        //     addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        // }
                        if (plannedTodos.length >= 3) {
                            console.log("add dynamic container");
                            dynamicContainerToken = "load_func";
                            dynamicContainerDataId = plannedTodos.length;
                            console.log("plannedTodos.length (add rec day everyday) = " + plannedTodos.length);
                            addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        }
                    }
                })
                return nextDate;
            }

        // _ _ _

        if (plannedTodos.length > 0) {
            console.log("Here ooooa");
                plannedTodos.forEach(todoRow => {
                if (todoRow.date === newTodo.date && todoRow.todo === newTodo.todo) {
                    isCopy = true
                }
            })
        }

        if (plannedTodos.length > 0 && isCopy === true) {
            alert("Current todo already exists.");
            return 0;
        }
        // Add todo-object to plannedTodos (object array)

        // Add yearly recurring todo
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'y') {
            console.log("Here bbbooooa");
            // plannedTodos.push(newTodo);

            // Handle duration >= 1

            //stringToNumber
            let durationStringToNumber = Number(newTodo.duration);
            console.log("durationStringToNumber = " + durationStringToNumber);

            if (durationStringToNumber === 1) {

                // Test: 2025-02-23 (start)
                console.log("Add rec yearly task");

                console.log("plannedTodos.length = " + plannedTodos.length);
                if (plannedTodos.length >= 3) {
                    // dynamicContainerToken = "addTaskToList";
                    dynamicContainerToken = "load_func";
                    dynamicContainerDataId = plannedTodos.length;
                    // dynamicContainerDataId = plannedTodos.length+1;
                    console.log("dynamicContainerDataId = " + dynamicContainerDataId);
                    addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                }

                let ifRecYearAddToTodoText = "🔁Y ";

                newTodo.todo = ifRecYearAddToTodoText + textInputValue.value;

                plannedTodos.push(newTodo);

            } else if (durationStringToNumber > 1) {

                for (let i = 0; i < durationStringToNumber; i++) {
                    console.log("i = " + i);

                    let newDurationDate = new Date(newTodo.date);
                    newDurationDate.setDate(newDurationDate.getDate() + i); // Increment the date by 'i' days
                    let newConvertedDateString = newDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                    // if duration > '1' -> multiple newConvertedDateString variables
                    console.log("newConvertedDateString = " + newConvertedDateString);

                    console.log("JSON.stringify(newTodo) = " + JSON.stringify(newTodo));

                    console.log("weekdayNameToWeekDayNumber(newConvertedDateString) = " + weekdayNameToWeekDayNumber(newConvertedDateString));

                    // MAKE A DUPLICATE CHECKER !? (Don't add duplicates)

                    isCopy = false;

                    plannedTodos.forEach((todoRow) => {
                        if (todoRow.date === newConvertedDateString && todoRow.todo === textInputValue.value) {
                            isCopy = true;
                        }
                        if (isCopy === true) {
                            alert("Todo duplicate exists in the interval.");
                            return 0;
                        }
                        console.log("isCopy ooa = " + isCopy);
                    })

                    if (isCopy === false) {

                        let ifRecYearAddToTodoText = "🔁Y ";

                        plannedTodos.push({
                            date: newConvertedDateString,
                            todo: ifRecYearAddToTodoText + textInputValue.value,
                            color: colorPickerSelect.value,
                            isRecurring: isRecurringCheckbox.checked,
                            recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                            everyWeek: everyWeek,
                            weekPeriod: weekPeriod,
                            duration: getDuration(selectedPeriod),
                            dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedDateString),
                            isEmpty: false
                        });
                    }

                // _ _ _

                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {


                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);


                        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                    }


                        // Add container (if plannedTodoos > 3)
                        // add div
                        if (plannedTodos.length > 3) {
                            dynamicContainerToken = "addTaskToList";
                            // dynamicContainerDataId = plannedTodos.length-1;
                            addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        }

                        // _ _ _

                    }
                    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                }



            // _ _ _
            // _ _ _
        }
        // Add monthly recurring todo (if date <= 28)
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'm' && isDayLessThan29(newTodo.date) === true) {
            // plannedTodos.push(newTodo);
            // Handle duration >= 1

            //stringToNumber
            let monthlyRecDurationStringToNumber = Number(newTodo.duration);
            console.log("monthlyRecdurationStringToNumber = " + monthlyRecDurationStringToNumber);

            if (monthlyRecDurationStringToNumber === 1) {
                if (plannedTodos.length >= 3) {
                dynamicContainerToken = "load_func";
                dynamicContainerDataId = plannedTodos.length;
                // dynamicContainerDataId = plannedTodos.length+1;
                console.log("dynamicContainerDataId = " + dynamicContainerDataId);
                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
            }
                // let newLine = "\n";
                // let ifRecMonthAddToTodoText = newLine + "🔁M";
                let ifRecMonthAddToTodoText = "🔁M ";
                newTodo.todo = ifRecMonthAddToTodoText + textInputValue.value;
                plannedTodos.push(newTodo);
        }
        else if (monthlyRecDurationStringToNumber > 1) {

            for (let i = 0; i < monthlyRecDurationStringToNumber; i++) {
                console.log("i = " + i);

                let newMontlyRecDurationDate = new Date(newTodo.date);
                newMontlyRecDurationDate.setDate(newMontlyRecDurationDate.getDate() + i); // Increment the date by 'i' days
                let newConvertedMontlyRecDateString = newMontlyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                // if duration > '1' -> multiple newConvertedDateString variables
                console.log("newConvertedMontlyRecDateString = " + newConvertedMontlyRecDateString);
                // newTodo.date = newConvertedDateString;
                console.log("JSON.stringify(newTodo) = " + JSON.stringify(newTodo));

                console.log("weekdayNameToWeekDayNumber(newConvertedDateString) = " + weekdayNameToWeekDayNumber(newConvertedMontlyRecDateString));

                // MAKE A DUPLICATE CHECKER !? (Don't add duplicates)

                isCopy = false;

                plannedTodos.forEach((todoRow) => {
                    if (todoRow.date === newConvertedMontlyRecDateString && todoRow.todo === textInputValue.value) {
                        isCopy = true;
                    }
                    if (isCopy === true) {
                        alert("Todo duplicate exists in the interval.");
                        return 0;
                    }
                    console.log("isCopy ooa = " + isCopy);
                })

                if (isCopy === false) {
                    let ifRecMonthAddToTodoText = "🔁M ";
                    plannedTodos.push({
                        date: newConvertedMontlyRecDateString,
                        todo: ifRecMonthAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: everyWeek,
                        weekPeriod: weekPeriod,
                        duration: getDuration(selectedPeriod),
                        dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedMontlyRecDateString),
                        isEmpty: false
                    });
                }

                // _ _ _

                // Ändrat 2025-02-18:
                // if (plannedTodos.length > 1) {
                if (plannedTodos.length > 1 && plannedTodos.length < 3) {


                    // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                    sortPlannedTodos(plannedTodos);


                    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                }


                // Add container (if plannedTodoos > 3)
                // add div
                    if (plannedTodos.length > 3) {
                        dynamicContainerToken = "addTaskToList";
                        // dynamicContainerDataId = plannedTodos.length-1;
                        addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                    }

                // _ _ _

                }
                console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            }


        // _ _ _
        }
        // Don´t add monthly recurring todos if date > 28
        else if (newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'm' && isDayLessThan29(newTodo.date) === false) {
            //todoDateLoad >= currentDate (M), day > 28"
            alert('Can´t add recurring month dates > 28');
        }

        // Add weekly recurring todo
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'w' && newTodo.weekPeriod !== '') {
            // plannedTodos.push(newTodo);
            // Handle duration >= 1

            console.log("newTodo.weekPeriod !== '' = " + newTodo.weekPeriod !== '');
            console.log("Here weekly");

            //stringToNumber
            let weeklyRecDurationStringToNumber = Number(newTodo.duration);
            console.log("weeklyRecdurationStringToNumber = " + weeklyRecDurationStringToNumber);

            if (weeklyRecDurationStringToNumber === 1) {
                if (plannedTodos.length >= 3) {
                    dynamicContainerToken = "load_func";
                    dynamicContainerDataId = plannedTodos.length;
                    // dynamicContainerDataId = plannedTodos.length+1;
                    console.log("dynamicContainerDataId = " + dynamicContainerDataId);
                    addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                }

                let weekOption = newTodo.weekPeriod;
                weekOption = weekOption.toUpperCase();
                let ifRecWeekAddToTodoText = "🔁" + weekOption + " ";
                newTodo.todo = ifRecWeekAddToTodoText + textInputValue.value;
                plannedTodos.push(newTodo);
            } else if (weeklyRecDurationStringToNumber > 1) {

                for (let i = 0; i < weeklyRecDurationStringToNumber; i++) {
                    console.log("i = " + i);

                    let newWeeklyRecDurationDate = new Date(newTodo.date);
                    newWeeklyRecDurationDate.setDate(newWeeklyRecDurationDate.getDate() + i); // Increment the date by 'i' days
                    let newConvertedWeeklyRecDateString = newWeeklyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                    // if duration > '1' -> multiple newConvertedDateString variables
                    console.log("newConvertedWeeklyRecDateString = " + newConvertedWeeklyRecDateString);
                    console.log("JSON.stringify(newTodo) = " + JSON.stringify(newTodo));

                    console.log("weekdayNameToWeekDayNumber(newConvertedWeeklyRecDateString) = " + weekdayNameToWeekDayNumber(newConvertedWeeklyRecDateString));

                    // MAKE A DUPLICATE CHECKER !? (Don't add duplicates)

                    isCopy = false;

                    plannedTodos.forEach((todoRow) => {
                        if (todoRow.date === newConvertedWeeklyRecDateString && todoRow.todo === textInputValue.value) {
                            isCopy = true;
                        }
                        if (isCopy === true) {
                            alert("Todo duplicate exists in the interval.");
                            return 0;
                        }
                        console.log("isCopy ooa = " + isCopy);
                    })

                    if (isCopy === false) {
                        let weekOption = newTodo.weekPeriod;
                        weekOption = weekOption.toUpperCase();
                        let ifRecWeekAddToTodoText = "🔁" + weekOption + " ";
                        plannedTodos.push({
                            date: newConvertedWeeklyRecDateString,
                            todo: ifRecWeekAddToTodoText + textInputValue.value,
                            color: colorPickerSelect.value,
                            isRecurring: isRecurringCheckbox.checked,
                            recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                            everyWeek: everyWeek,
                            weekPeriod: weekPeriod,
                            duration: getDuration(selectedPeriod),
                            dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedWeeklyRecDateString),
                            isEmpty: false
                        });
                    }

                // _ _ _

                // Ändrat 2025-02-18:
                // if (plannedTodos.length > 1) {
                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {


                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);


                        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                    }


                    // Add container (if plannedTodoos > 3)
                    // add div
                        if (plannedTodos.length > 3) {
                            console.log("add dynamic container");
                            dynamicContainerToken = "addTaskToList";
                            // dynamicContainerDataId = plannedTodos.length-1;
                            addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        }

                // _ _ _

                    }
                    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                }



            // _ _ _
            // _ _ _
        }

        // _ _ _
        // _ _ _
        // _ _ _
        // _ _ _

        // Add daily recurring todo (Every week)
        else if (plannedTodos.length >= 0 &&
            isCopy === false &&
            newTodo.date >= dateDisplay.textContent &&
            newTodo.isRecurring === true &&
            newTodo.recurringType === 'd' &&
            isRecurringWeekDayNameRadioButton.checked === true &&
            recurringDayEveryWeekCheckBox.checked === true) {
            // plannedTodos.push(newTodo);
            // Handle duration >= 1

            console.log("Here daily");

            //stringToNumber
            let dailyRecDurationStringToNumber = Number(newTodo.duration);
            console.log("weeklyRecdurationStringToNumber = " + dailyRecDurationStringToNumber);

            let ifRecDaySpecificDaysAddToTodoText = "🔁D ";
            console.log("ifRecDaySpecificDaysAddToTodoText = " + ifRecDaySpecificDaysAddToTodoText);

            // duration === 1

            // Add next coming Monday (after startingDate)
            if (isRecurringDayMonCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 0;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '0',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayTueCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 1;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '1',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayWedCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 2;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '2',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayThuCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 3;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '3',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayFriCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 4;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '4',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySatCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 5;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '5',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySunCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 6;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '6',
                        isEmpty: false
                    });
                }
            }

                // _ _ _
                // _ _ _
                // _ _ _
                // _ _ _

                // Ändrat 2025-02-18:
                // if (plannedTodos.length > 1) {
                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {


                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);


                        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                    }


                    // removeLastDynamicTodoContainer();

                    // Add container (if plannedTodoos > 3)
                    // add div
                        // if (plannedTodos.length > 3) {
                        //     console.log("add dynamic container");
                        //     dynamicContainerToken = "addTaskToList";
                        //     // dynamicContainerDataId = plannedTodos.length-1;
                        //     addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        // }

                        // _ _ _

                //     }
                //     console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                // }



            // _ _ _
            // _ _ _
        }

        // _ _ _
        // Add daily recurring todo (!Every week)
        else if (plannedTodos.length >= 0 &&
            isCopy === false &&
            newTodo.date >= dateDisplay.textContent &&
            newTodo.isRecurring === true &&
            newTodo.recurringType === 'd' &&
            isRecurringWeekDayNameRadioButton.checked === true &&
            recurringDayEveryWeekCheckBox.checked === false) {
            // plannedTodos.push(newTodo);
            // Handle duration >= 1

            console.log("Here daily");

            //stringToNumber
            let dailyRecDurationStringToNumber = Number(newTodo.duration);
            console.log("weeklyRecdurationStringToNumber = " + dailyRecDurationStringToNumber);

            // duration === 1

            // Add next coming Monday (after startingDate)
            if (isRecurringDayMonCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 0;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '0',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayTueCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 1;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '1',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayWedCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 2;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '2',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayThuCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 3;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '3',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayFriCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 4;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '4',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySatCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 5;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '5',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySunCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 6;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '6',
                        isEmpty: false
                    });
                }
            }

                // _ _ _
                // _ _ _

                // Ändrat 2025-02-18:
                // if (plannedTodos.length > 1) {
                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {


                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);


                        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                    }


            // _ _ _
            // _ _ _
        }

        // _ _ _

                        // duration

            // Add daily recurring (duration) todo (Every week)
            else if (plannedTodos.length >= 0 &&
                isCopy === false &&
                newTodo.date >= dateDisplay.textContent &&
                newTodo.isRecurring === true &&
                newTodo.recurringType === 'd' &&
                isRecurringWeekDayNumberRadioButton.checked === true &&
                recurringDayEveryWeekCheckBox.checked === true) {

                        let durationDaysNumber = Number(dayInput.value);
                        console.log("durationDaysNumber (1) = " + durationDaysNumber);

                        if (durationDaysNumber > 7) {
                            durationDaysNumber = 7;
                        }

                        console.log("durationDaysNumber (2) = " + durationDaysNumber);

                        // addDateDaysRecDailyWithDuration(durationDaysNumber);

                        // function addDateDaysRecDailyWithDuration(durationDaysNumber) {

                        for (let i = 1; i <= durationDaysNumber; i++) {

                            let newDailyRecDurationDate = new Date(newTodo.date);
                            newDailyRecDurationDate.setDate(newDailyRecDurationDate.getDate() + i-1); // Increment the date by 'i' days
                            let newConvertedDailyRecDateString = newDailyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                            // newTodo.date = newConvertedDailyRecDateString;


                            // console.log("newTodo.date = ") = newTodo.date;
                            console.log("newConvertedDailyRecDateString = ");

                            // let dailyDaysDurationDateToPush =
                            // plannedTodos.push(newTodo);
                            // return newTodo.date;

                            let ifRecDayDurationDaysAddToTodoText = "🔁#D ";
                            console.log("ifRecDayDurationDaysAddToTodoText = " + ifRecDayDurationDaysAddToTodoText);

                            console.log("i.toString() = " + i.toString());

                            if (plannedTodos.length >= 3) {
                                dynamicContainerToken = "load_func";
                                dynamicContainerDataId = plannedTodos.length;
                                // dynamicContainerDataId = plannedTodos.length+1;
                                console.log("dynamicContainerDataId = " + dynamicContainerDataId);
                                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                            }

                            if (isCopy === false) {
                                // dataDateNr = 0;
                                plannedTodos.push({
                                    date: newConvertedDailyRecDateString,
                                    todo: ifRecDayDurationDaysAddToTodoText + textInputValue.value,
                                    color: colorPickerSelect.value,
                                    isRecurring: true,
                                    recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                                    everyWeek: true,
                                    weekPeriod: '',
                                    // duration: '1',
                                    duration: durationDaysNumber.toString(),
                                    dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedDailyRecDateString),
                                    isEmpty: false
                                });
                            }
                        }

                    if (plannedTodos.length > 1 && plannedTodos.length <= 3) {
                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);
                        console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                    }
                console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                }

                // Add daily recurring (duration) todo (!Every week)
                else if (plannedTodos.length >= 0 &&
                    isCopy === false &&
                    newTodo.date >= dateDisplay.textContent &&
                    newTodo.isRecurring === true &&
                    newTodo.recurringType === 'd' &&
                    isRecurringWeekDayNumberRadioButton.checked === true &&
                    recurringDayEveryWeekCheckBox.checked === false) {

                        let durationDaysNumber = Number(dayInput.value);
                        console.log("durationDaysNumber (1) = " + durationDaysNumber);

                        if (durationDaysNumber > 14) {
                            alert("Duration set to 14 (Add multiple todos if duration > 14 days)")
                            durationDaysNumber = 14;
                        }


                        console.log("durationDaysNumber (2) = " + durationDaysNumber);

                        // addDateDaysRecDailyWithDuration(durationDaysNumber);

                        // function addDateDaysRecDailyWithDuration(durationDaysNumber) {

                        for (let i = 1; i <= durationDaysNumber; i++) {

                            let newDailyRecDurationDate = new Date(newTodo.date);
                            newDailyRecDurationDate.setDate(newDailyRecDurationDate.getDate() + i-1); // Increment the date by 'i' days
                            let newConvertedDailyRecDateString = newDailyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                            // newTodo.date = newConvertedDailyRecDateString;


                            // console.log("newTodo.date = ") = newTodo.date;
                            console.log("newConvertedDailyRecDateString = ");

                            // let dailyDaysDurationDateToPush =
                            // plannedTodos.push(newTodo);
                            // return newTodo.date;

                            console.log("i.toString() = " + i.toString());

                            if (plannedTodos.length >= 3) {
                                dynamicContainerToken = "load_func";
                                dynamicContainerDataId = plannedTodos.length;
                                // dynamicContainerDataId = plannedTodos.length+1;
                                console.log("dynamicContainerDataId = " + dynamicContainerDataId);
                                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                            }

                            if (isCopy === false) {
                                // dataDateNr = 0;
                                plannedTodos.push({
                                    date: newConvertedDailyRecDateString,
                                    todo: textInputValue.value,
                                    color: colorPickerSelect.value,
                                    isRecurring: false,
                                    recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                                    everyWeek: false,
                                    weekPeriod: '',
                                    // duration: '1',
                                    duration: durationDaysNumber,
                                    dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedDailyRecDateString),
                                    isEmpty: false
                                });
                            }
                        }

                        if (plannedTodos.length > 1 && plannedTodos.length <= 3) {
                            // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                            sortPlannedTodos(plannedTodos);
                            console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                        }
                    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                    }

        // _ _ _

        // Add todo object to plannedTodos (!recurring)
        // else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring !== true) {
            else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === false) {
                plannedTodos.push(newTodo);
                    // Ändrat 2025-02-18:
                    // if (plannedTodos.length > 1) {
            if (plannedTodos.length > 1 && plannedTodos.length < 3) {


            // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
            sortPlannedTodos(plannedTodos);


            console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
        }


        // Add container (if plannedTodoos > 3)
        // add div
            if (plannedTodos.length > 3) {
                dynamicContainerToken = "addTaskToList";
                // dynamicContainerDataId = plannedTodos.length-1;
                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
            }
        }

        // Past dates should not be added!?
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date < dateDisplay.textContent) {
            alert("You can't make plans for yesterdays :)");
        }

        // _ _ _
        // _ _ _

    sortPlannedTodos(plannedTodos);
    // Update Current Plan (DOM)

    // _ _ _
    // updateCurrentPlan(plannedTodos);

    // _ _ _
    // _ _ _
        // Fungerar inte 2025-01-24
    // updateRecDivBgColor();
    // _ _ _

    // // todoContainer.forEach((element) => {
    // //     console.log("todoContainer element = " + element)
    // // });

    // // const todoContainer = document.getElementById('todo-container');
    // // var todoElements = todoContainer.querySelectorAll('[data-id]');

    // for (let i = 0; i < plannedTodos.length; i++) {

    // // todoElements.forEach(todo => {
    //     // let containerDataId = todo.getAttribute('data-id');

    //     // const innerHTML = todo.innerHTML.trim();  // Add specific check if needed

    //     // console.log("containerDataId = " + containerDataId)
    //     // console.log("plannedTodos[containerDataId].isRecurring = " + plannedTodos[containerDataId].isRecurring)

    //     specificRecDiv = document.querySelector(`.todo-container-element[data-id="${i}"]`)

    //     // if (innerHTML === "specific content" && plannedTodos[dataId] && plannedTodos[dataId].isRecurring) {
    //         // if (plannedTodos[containerDataId].isRecurring === true) {
    //     if (plannedTodos[i].isRecurring === true) {
    //         specificRecDiv.style.backgroundColor = 'rgb(0, 117, 255)';  // Change to desired color
    //     }
    //     // else if (plannedTodos[containerDataId].isRecurring === false) {
    //     else if (plannedTodos[i].isRecurring === false) {
    //         specificRecDiv.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    //     }
    // };


    // _ _ _


    // Empty todo text input
    textInputValue.value = '';

    // // Följande funktioner behöver uppdateras? (2024-10-16)
    // updateTodoSchedule();

    // currentMondayTodos = currentMondayTodosStart;

    console.log("JSON.stringify(plannedTodos) (i addTaskToList, före updateCurrentWeekSchedule = " + JSON.stringify(plannedTodos));

    // Update the week schedule (when a new task is added)
    updateCurrentWeekSchedule();
    ifPlannedTodosIsPastPutToPastPlans();
    // removePeriodicityDurationEventListeners();
    recurringType = '';
    everyWeek= false;
    duration = '';
    // Skapa vecko-specifika array-objekt?

    // _ _ _
    // _ _ _

    updateRecurringPlannedTodos(plannedTodos);

    // _ _ _
    // _ _ _

    // console.log(plannedTodos[0].date)
    console.log(JSON.stringify(plannedTodos))

    }
    // }

    // Get an alert if recurring day-s radio button is selected (but 'Select days' or 'Duration (days) are unchecked)
    if (isRecurringDayRadioButton.checked === true && isRecurringWeekDayNameRadioButton.checked === false && isRecurringWeekDayNumberRadioButton.checked === false) {
        alert('Please make a selection (Select days or duration)');
    }

    // Get an alert if recurring day-s radio button is selected (but 'Select days' or 'Duration (days) are unchecked)
    if (isRecurringWeekRadioButton.checked === true && isRecurringWeekNrOneRadioButton.checked === false && isRecurringWeekNrTwoRadioButton.checked === false && isRecurringWeekNrThreeRadioButton.checked === false && isRecurringWeekNrFourRadioButton.checked === false) {
        alert('Please make a selection (Number of weeks)');
    }

    recurringYearDayDurationInput.value = 1;
    recCheckBoxIsUnchecked();
    isRecurringCheckbox.checked = false;
}

// function addTaskToList() (end)

// _ _ _
// _ _ _

// Add task when Enter button is pressed
textInputValue.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTaskToList();
    }
});

// _ _ _
// _ _ _

// function updateRecurrinTasks(plannedTodos) {

// // add recurring plannedTodos for the next "period" (is the recurring plannedTodo is in the past)

// // remove expired recurring plannedTodos (from the object and the DOM)

// // Recurring tasks (year)
// if (plannedTodos.reccuringType === 'year' && plannedTodos.date < dateDisplay.textContent) {

// }

// }

// _ _ _
// _ _ _

// function updateRecurringPlannedTodos() {
//     console.log("updateRecurringPlannedTodos(); körs");

//     const today = new Date(); // Get the current date

//     plannedTodos.forEach(task => {
//         let taskDate = new Date(task.date);
//         console.log("taskDate = " + taskDate)

//         // Validate the date
//         if (isNaN(taskDate)) {
//             console.error(`Invalid date in task: ${task.date}`);
//             return; // Skip this task
//         }

//         // Check if the date is in the past and update if it's a recurring task
//         // while (task.isRecurring && taskDate > today) {
//         if (task.isRecurring && taskDate > today) {
//             if (task.recurringType === 'd') {
//                 taskDate.setDate(taskDate.getDate() + 1);
//             } else if (task.recurringType === 'w') {
//                 taskDate.setDate(taskDate.getDate() + 7);
//             } else if (task.recurringType === 'm') {
//                 taskDate.setMonth(taskDate.getMonth() + 1);
//             } else if (task.recurringType === 'y') {
//                 taskDate.setFullYear(taskDate.getFullYear() + 1);
//                 console.log("year+1 = " + taskDate.setFullYear(taskDate.getFullYear() + 1))
//             }
//         }

//         // Update the task's date in the object
//         if (!isNaN(taskDate)) {
//             task.date = taskDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
//         } else {
//             console.error(`Failed to update date for task: ${JSON.stringify(task)}`);
//         }
//     });
// }


// updateRecurringPlannedTodos();

// _ _ _
// _ _ _
// _ _ _
// _ _ _

function updateRecurringPlannedTodos(plannedTodos) {
    console.log("updateRecurringPlannedTodos() körs")

    // Example dateDisplay and plannedTodos
    const dateDisplay = document.getElementById('date-display'); // Assuming this element exists
    // const plannedTodos = [
    //     {
    //         date: "2025-01-08",
    //         todo: "Example Task",
    //         color: "grayColor",
    //         isRecurring: true,
    //         recurringType: "y",
    //         everyWeek: false,
    //         weekPeriodicity: "",
    //         duration: "1",
    //         dataDate: "",
    //         isEmpty: false
    //     }
    // ];

    // Ensure dateDisplay.textContent is a valid date
    if (dateDisplay.textContent) {
        const displayDate = new Date(dateDisplay.textContent);
        if (!isNaN(displayDate)) {
            const displayYear = displayDate.getFullYear();

    if (plannedTodos.length > 0) {

        // If yearly recurring:
            plannedTodos.forEach(task => {
                // Ensure the task is recurring yearly and its date is valid
                if (task.recurringType === 'y' && task.date < displayDate.textContent) {
                    const taskDate = new Date(task.date);

                    if (!isNaN(taskDate)) {
                        // Check if the task date is in the future and matches the display year
                        if (
                            taskDate.getFullYear() === displayYear &&
                            taskDate < new Date()
                        ) {
                            // Replace the year with the coming year
                            taskDate.setFullYear(taskDate.getFullYear() + 1);

                            // Update task.date with the adjusted date in 'YYYY-MM-DD' format
                            task.date = taskDate.toISOString().split('T')[0];
                            console.log("task.date = " + task.date);
                            plannedTodos.push(task);
                        }
                    } else {
                        console.error(`Invalid date format for task: ${task.date}`);
                    }
                }
            });
        }
            console.log("Updated plannedTodos:", plannedTodos);
        } else {
            console.error('Invalid date format in dateDisplay.textContent');
        }
    } else {
        console.error('dateDisplay.textContent is empty');
    }

    updateCurrentWeekSchedule();

}


updateRecurringPlannedTodos(plannedTodos);


    // _ _ _
    // _ _ _

        // Fixa så att edit fungerar för week schedule (2024-10-16)
        // Edit task (change todo)


        // const textareas = document.querySelectorAll('textarea');
        // const textareas = dateFields

        // _ _ _
        // _ _ _

        // (OBS!) dateFields === document.querySelectorAll(".todo-date");

        // _ _ _
        // textareas används inte? (2025-01-20)
        const textareas = document.querySelectorAll('textarea');

        const status = document.getElementById('status');

        // var defaultDate; // Variable to store default date
        var currentDateDiv;
        var editDate; // Variable to store edited date
        let currentDataId; // To keep track of the current data-id
        // _ _ _

        var editDateButton;
        var editDateStatus = true;

        // let newDate = editDate;
        var newDate;

        // dateFieldTextarea.addEventListener('onChange', () => {
        //     newDate = dateCollection[dataId].value;
        //     console.log("newDate  ( dateFieldTextarea (addEventListener onChange) ) = " + newDate);
        //     console.log("defaultDate  ( dateFieldTextarea (addEventListener onChange) ) = " + defaultDate);
        //     return newDate;
        // });

        // _ _ _
        // _ _ _

        // Attach focus event listener to all todo-text textareas
        document.querySelectorAll(".todo-text").forEach(todoTextArea => {
            todoTextArea.addEventListener("focus", () => {
                // Get the current data-id of the focused textarea
                const dataId = todoTextArea.getAttribute("data-id");

                // Get the value of the todo-text textarea for this data-id
                const todoValue = todoTextArea.value;

                if (plannedTodos.length === 0) {
                    alert("Add tasks before editing");
                    console.log("Add tasks before editing");
                    // removeEditDateButton(dataId);
                    // isDateFieldFocus = false;
                    // changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                    // dateFieldTextarea.style.backgroundColor = '';
                    todoTextArea.blur();
                    textInputValue.focus();
                } else if (plannedTodos.length > 0) {

                    // Log the data-id and value
                    console.log(`Focused todo-text with data-id="${dataId}"`);
                    console.log(`Value: "${todoValue}"`);
                    defaultTodoText = todoValue;
                    console.log("defaultDate = " + defaultDate + ", " + "defaultTodoText = " + defaultTodoText);

                    // Optional: Update a status or display this information somewhere in the UI
                    const status = document.getElementById("status");
                    if (status) {
                        status.textContent = `Focused todo-text (data-id: ${dataId}): "${todoValue}"`;
                    }
                }
            });
        });

        var isDateCopy = false;
        var isTodoCopy = false;
        var isEditDuplicate = false;

        // if (plannedTodos.length > 0) {
        //     plannedTodos.forEach(todoRow => {
        //     if (todoRow.date === newTodo.date && todoRow.todo === newTodo.todo) {
        //         isCopy = true
        //     }

        // _ _ _

        // function checkForTodoDuplicates(dataId) {
        //     plannedTodos.forEach((todo) => {
        //         for (let i = 0; i < plannedTodos.length; i++) {
        //             console.log("todo === plannedTodos[i].todo = " + todo === todoCollection[dataId].value)
        //             if (todo === todoCollection[dataId].value) {
        //                 console.log("Todo copy exists, check for dates")
        //                 // isTodoCopy = true;
        //                 return isTodoCopy = true;
        //             }
        //             // else if (todo !== plannedTodos[i].todo) {
        //             //     isTodoCopy = false;
        //             // }
        //         }
        //     });
        // }

        // function checkForDateDuplicates(dataId) {
        //     plannedTodos.forEach((date) => {
        //         for (let i = 0; i < plannedTodos.length; i++) {
        //             if (date === dateCollection[dataId].value) {
        //                 console.log("Date copy exists")
        //                 // isDateCopy = true;
        //                 return isDateCopy = true;
        //             }
        //         }
        //     });
        // }

        // _ _ _

        function checkForTodoDateDuplicates(defaultDate, defaultTodoText, dateCollection, todoCollection, dataId) {
            console.log("checkForTodoDateDuplicates() körs")
            // let defaultDateForId = dateCollection[dataId].value;
            // let defaultTodoForId = todoCollection[dataId].value;

            // let isDateCopy;
            // let isTodoCopy;
            // isDuplicate = false;

            // checkForTodoDuplicates(dataId);
            // console.log("isTodoCopy: " + isTodoCopy);
            // checkForDateDuplicates(dataId);
            // console.log("isDateCopy: " + isDateCopy);

            plannedTodos.forEach(todoRow => {
                console.log("todoRow.date = " + todoRow.date);
                console.log("dateCollection[dataId].value = " + dateCollection[dataId].value);
                console.log("todoRow.todo = " + todoRow.todo);
                console.log("todoCollection[dataId].value = " + todoCollection[dataId].value);
                if (todoRow.date === dateCollection[dataId].value && todoRow.todo === todoCollection[dataId].value && plannedTodos.length > 3) {
                    dateCollection[dataId].value = defaultDate
                    dateCollection[dataId].innerHTML = defaultDate
                    todoCollection[dataId].value = defaultTodoText
                    todoCollection[dataId].innerHTML = defaultTodoText

                    return isEditDuplicate = true
                }
            });

            // if (plannedTodos.length > 0 && isCopy === true) {
            //     alert("Current todo already exists.");
            //     return 0;
            // }
            // // Add todo-object to plannedTodos (object array)
            // else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent) {
            //     plannedTodos.push(newTodo);
            // }
            // // Past dates should not be added!?
            // else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date < dateDisplay.textContent) {
            //     alert("You can't make plans for yesterdays :)");
            // }

                    // if (isDateCopy === true && isTodoCopy === true) {
                    //     dateCollection[dataId].value = defaultDate
                    //     dateCollection[dataId].innerHTML = defaultDate
                    //     todoCollection[dataId].value = defaultTodoText
                    //     todoCollection[dataId].innerHTML = defaultTodoText
                    //     return isDuplicate = true;
                    // }
        }

        // _ _ _
        // _ _ _

        // Check newDate format and time -> editDate = ...
        function validateAndAssignDate(newDate, defaultDate, dataId) {

            console.log("in validateAndAssignDate, newDate = " + newDate);
            console.log("in validateAndAssignDate, defaultDate = " + defaultDate);
            console.log("in validateAndAssignDate, dataId = " + dataId);

            // Regular expression to check if the string is in the format "YYYY-MM-DD"
            const regexA = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
            const regexB = /^\d{4}-\d{2}-\d{2}$/;

            // Helper function to check if the date is today or later
            function isTodayOrLater(dateString) {
                const today = new Date();
                const inputDate = new Date(dateString);

                // Compare only dates, ignoring time
                today.setHours(0, 0, 0, 0);
                inputDate.setHours(0, 0, 0, 0);

                return inputDate >= today;
            }

            // Validate the date format and check if it's a valid calendar date
            if (regexA.test(newDate) && regexB.test(newDate)) {
                const [year, month, day] = newDate.split("-").map(Number);
                const date = new Date(year, month - 1, day);

                if (
                    date.getFullYear() === year &&
                    date.getMonth() === month - 1 &&
                    date.getDate() === day &&
                    isTodayOrLater(newDate)
                ) {
                    // If valid and today or later, return newDate
                    // return newDate;
                    console.log("The edited date is a valid date");
                    editDate = newDate;
                }
            } else if (newDate === undefined || regexA.test(newDate) === false || regexB.test(newDate) === false) {
                // If invalid or not today or later, assign defaultDate
                alert("Invalid date. Assigning default date.");

                newDate = defaultDate;
                dateCollection[dataId].value = defaultDate;
                dateCollection[dataId].innerHTML = defaultDate;

                console.log("defaultDate (if invalid date): " + defaultDate);
                console.log("dataId = " + dataId)
                console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos))
                if (plannedTodos.length === 0) {
                    editDate = '';
                }
                else if (defaultDate !== plannedTodos[dataId].date) {
                    defaultDate = plannedTodos[dataId].date;
                }
                editDate = defaultDate;
                // return defaultDate;
            }
            // else if (editDate === '') {
            //     alert("Invalid date. Please select a valid date (YYYY-MM-DD).");
            // }

            // return editDate;
        }

        function editDateButtonFunctionality(newDate, dataId) {

            console.log("editDateButtonFunctionality() körs!");

            // dataId = ?

            newDate = dateCollection[dataId].value;
            console.log("newDate to be edited ooa = " + newDate)

            validateAndAssignDate(newDate, defaultDate, dataId);
            // let currentDate = new Date().toISOString().split('T')[0]; // Get today's date
            // let currentCollectionDate = dateCollection[dataId].value;

            // if (currentCollectionDate && /^\d{4}-\d{2}-\d{2}$/.test(currentCollectionDate) && currentCollectionDate >= currentDate) {
            //     // Store the dateCollection value in the editedDate variable if valid
            //     editDate = currentCollectionDate;
            //     console.log(`editDate: ${editDate}`);
            // } else {
            //     alert("Invalid date! Please enter a date in the format YYYY-MM-DD. It should be today or a future date.");
            //     editDate = defaultDate;
            // }
            // return editDate;
            console.log("editDate (in editDateButtonFunctionality) = " + editDate)

            console.log("dateCollection[dataId].date = " + dateCollection[dataId].date);
            console.log("defaultDate = " + defaultDate);

            if (dateCollection[dataId].date === defaultDate) {
                console.log("Date hasn't been edited");
            } else if (dateCollection[dataId].date !== defaultDate) {
                console.log("Date has been edited");
            updateCurrentWeekSchedule();
            }
        }


        function createEditDateButton(currentDateDiv, dataId) {
            console.log("currentDateDiv = " + currentDateDiv)
            // Create the orange button
            // const editDateButton = document.createElement('button');
            editDateButton = document.createElement('button');
            editDateButton.textContent = 'Edit Date';
            editDateButton.classList.add('edit-date-button');

            console.log("Edit Date button created!");
            console.log("editDateButton = " + editDateButton)

            // Add click event listener to the button
            editDateButton.addEventListener('click', () => {

                console.log("Edit Date button clicked!");

                // What should happen when the Edit Button is clicked!?
                // Return "editDate"
                editDateButtonFunctionality(newDate, dataId);
                console.log("editDate = " + editDate)

                // -

                // const currentDate = new Date().toISOString().split('T')[0]; // Get today's date
                // const currentCollectionDate = dateCollection[dataId].value;

                // if (currentCollectionDate && /^\d{4}-\d{2}-\d{2}$/.test(currentCollectionDate) && currentCollectionDate >= currentDate) {
                //     // Store the dateCollection value in the editedDate variable if valid
                //     editDate = currentCollectionDate;
                //     console.log(`editDate: ${editDate}`);
                // } else {
                //     alert("Invalid date! Please enter a valid date in the format YYYY-MM-DD and make sure it is today's date or a future date.");
                // }
                removeEditDateButton(dataId);
                isDateFieldFocus = false;
                changeDateFieldBackgroundColor(isDateFieldFocus, currentDateDiv) // Optional: Highlight when active });
            });

            // Add the button after the currentDateDiv
            if (!document.getElementById(`edit-button-${dataId}`)) {
                editDateButton.id = `edit-button-${dataId}`;
                currentDateDiv.parentNode.appendChild(editDateButton);
            }
        }

        function validateDate(newDate, defaultDate) {
            // Regular expression to check if the date is in "YYYY-MM-DD" format
            const datePattern = /^\d{4}-\d{2}-\d{2}$/;

            // Check if newDate matches the pattern
            if (!datePattern.test(newDate)) {
                console.log('Invalid date format. Setting newDate to defaultDate.');
                return defaultDate;
            }

            // Check if newDate is today or later
            const currentDate = new Date().toISOString().split('T')[0];
            if (newDate < currentDate) {
                console.log('Date is earlier than today. Setting newDate to defaultDate.');
                return defaultDate;
            }

            // If newDate is valid and today or later, return newDate
            return newDate;
        }

        // _ _ _

        // dateFields.forEach(dateFieldTextarea => {

        //         if (dateFieldTextarea.editDateButton != undefined) {
        //             console.log("editDateButton isn't undefined");
        //             // Add click event listener to the Add Event button
        //             editDateButton.addEventListener('click', (event) => {

        //                 console.log("Edit Date button clicked!");

        //                 // What should happen when the Edit Button is clicked!?
        //                 // Return "editDate"
        //                 editDateButtonFunctionality(newDate, dataId);
        //                 console.log("editDate = " + editDate)

        //             });
        //         }

        // })


        // _ _ _

        var isDateFieldFocus;
        // Change date text field background color

        function changeDateFieldBackgroundColor(isDateFieldFocus, currentDateDiv) {

            if (isDateFieldFocus === false) {
                    // dateFieldTextarea.style.backgroundColor = 'rgb(202, 202, 202)';
                    currentDateDiv.style.backgroundColor = 'rgb(202, 202, 202)';

            } else if (isDateFieldFocus === true) {
                // currentDateDiv.style.backgroundColor = 'lightyellow';
                currentDateDiv.style.backgroundColor = 'rgb(240, 240, 231)';
            }

        }
        // _ _ _
        // _ _ _

        function getlastDateOfCurrentMonth() {
            console.log("getlastDateOfCurrentMonth() körs")
            // Get the current date
            const today = new Date();

            // Get the current year and month
            const year = today.getFullYear();
            const month = today.getMonth();

            // Create a new date object for the first day of the next month
            const firstDayNextMonth = new Date(year, month + 1, 1);

            // Subtract one day to get the last day of the current month
            const lastDay = new Date(firstDayNextMonth - 1);

            // Format the date as YYYY-MM-DD
            const formattedDate = lastDay.toISOString().split('T')[0];

            console.log(`The last date of the current month is: ${formattedDate}`);

            return formattedDate;
        }

        // _ _ _
        // _ _ _

        // Example usage:
        var lastDateOfMonth = getlastDateOfCurrentMonth();


        console.log(`The last date of the current month is: ${lastDateOfMonth}`);

            // _ _ _

            // // dateInputString (sträng som skickas in i handleDateInput()-funktionen)
            // var dateInputString;

            // function getDateInputString() {
            //     console.log("getDateInputString() körs");
            //     console.log("dataId = " + dataId);
            //     dateInputString = dateCollection[dataId].value;
            //     console.log("dateInputString: " + dateInputString);
            //     return dateInputString;
            // }

            // _ _ _

            // function ifEditingTaskBeforeCreation(dataId) {
            //     console.log("ifEditingTaskBeforeCreation() körs");
            //     alert("Add tasks before editing");
            //     console.log("Add tasks before editing");
            //     removeEditDateButton(dataId);
            //     isDateFieldFocus = false;
            //     changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
            //     dateFieldTextarea.style.backgroundColor = '';
            //     dateFieldTextarea.blur();
            //     textInputValue.focus();
            // }

            // _ _ _

        dateFields.forEach(dateFieldTextarea => {

            // Event listener for focus event
            dateFieldTextarea.addEventListener('focus', () => {

                console.log(" dateFieldTextarea (focus) addEventListener ")

                let dataId = `${dateFieldTextarea.getAttribute('data-id')}`

                // if (plannedTodos.length === 0) {
                //     alert("Add tasks before editing");
                //     console.log("Add tasks before editing");
                //     removeEditDateButton(dataId);
                //     isDateFieldFocus = false;
                //     changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                //     dateFieldTextarea.style.backgroundColor = '';
                //     dateFieldTextarea.blur();
                //     textInputValue.focus();
                // }

                defaultDate = dateCollection[dataId].value;

                console.log(`Date textarea with data-id="${dateFieldTextarea.getAttribute('data-id')}" is active.`)
                status.textContent = `Date textarea with data-id="${dateFieldTextarea.getAttribute('data-id')}" is active.`;
                // dateFieldTextarea.style.backgroundColor = 'lightyellow'; // Optional: Highlight when active });
                isDateFieldFocus = true;

                // changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });


                currentDateDiv = document.querySelector(`.todo-date[data-id="${dataId}"]`);

                // createEditDateButton(currentDateDiv, dataId);

                // _ _ _


                if (editDateButton) {
                    console.log("editDateButton exists!");

                    // Add click event listener to the Add Event button
                    editDateButton.addEventListener('click', () => {

                        console.log("Edit Date button clicked!");

                        // What should happen when the Edit Button is clicked!?
                        // Return "editDate"
                        editDateButtonFunctionality();
                        console.log("editDate = " + editDate)

                    });

                }

                console.log("defaultDate = " + defaultDate);
                editDate = dateCollection[dataId].value

                // if (plannedTodos.length === 0) {
                //     console.log("plannedTodos.length === 0 -> ifEditingTaskBeforeCreation()")
                //     console.log("ifEditingTaskBeforeCreation() körs");
                //     alert("Add tasks before editing");
                //     console.log("Add tasks before editing");
                //     removeEditDateButton(dataId);
                //     isDateFieldFocus = false;
                //     changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                //     dateFieldTextarea.style.backgroundColor = '';
                //     dateFieldTextarea.blur();
                //     textInputValue.focus();
                // }

                if (plannedTodos.length === 0) {
                    console.log("plannedTodos.length === 0 -> ifEditingTaskBeforeCreation()")
                    console.log("ifEditingTaskBeforeCreation() körs");
                    alert("Add tasks before editing");
                    console.log("Add tasks before editing");
                    removeEditDateButton(dataId);
                    isDateFieldFocus = false;
                    changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                    dateFieldTextarea.style.backgroundColor = '';
                    dateFieldTextarea.blur();
                    textInputValue.focus();
                } else if (plannedTodos.length === 1 && dataId === "1") {
                    console.log("plannedTodos.length === 1 , dataId === 1 -> ifEditingTaskBeforeCreation()")
                    console.log("ifEditingTaskBeforeCreation() körs");
                    alert("Add tasks before editing");
                    console.log("Add tasks before editing");
                    removeEditDateButton(dataId);
                    isDateFieldFocus = false;
                    changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                    dateFieldTextarea.style.backgroundColor = '';
                    dateFieldTextarea.blur();
                    textInputValue.focus();
                } else if (plannedTodos.length === 1 && dataId === "2") {
                    console.log("plannedTodos.length === 1 , dataId === 2 -> ifEditingTaskBeforeCreation()")
                    console.log("ifEditingTaskBeforeCreation() körs");
                    alert("Add tasks before editing");
                    console.log("Add tasks before editing");
                    removeEditDateButton(dataId);
                    isDateFieldFocus = false;
                    changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                    dateFieldTextarea.style.backgroundColor = '';
                    dateFieldTextarea.blur();
                    textInputValue.focus();
                } else if (plannedTodos.length === 2 && dataId === "2") {
                    console.log("plannedTodos.length === 2 -> ifEditingTaskBeforeCreation()")
                    console.log("ifEditingTaskBeforeCreation() körs");
                    alert("Add tasks before editing");
                    console.log("Add tasks before editing");
                    removeEditDateButton(dataId);
                    isDateFieldFocus = false;
                    changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                    dateFieldTextarea.style.backgroundColor = '';
                    dateFieldTextarea.blur();
                    textInputValue.focus();
                }

            });

            // _ _ _

            // function getlastDateOfCurrentMonth() {
            //     console.log("getlastDateOfCurrentMonth() körs")
            //     // Get the current date
            //     const today = new Date();

            //     // Get the current year and month
            //     const year = today.getFullYear();
            //     const month = today.getMonth();

            //     // Create a new date object for the first day of the next month
            //     const firstDayNextMonth = new Date(year, month + 1, 1);

            //     // Subtract one day to get the last day of the current month
            //     const lastDay = new Date(firstDayNextMonth - 1);

            //     // Format the date as YYYY-MM-DD
            //     const formattedDate = lastDay.toISOString().split('T')[0];

            //     console.log(`The last date of the current month is: ${formattedDate}`);

            //     return formattedDate;
            // }

            // // Example usage:
            // var lastDateOfMonth = getlastDateOfCurrentMonth();
            // console.log(`The last date of the current month is: ${lastDateOfMonth}`);


            // _ _ _

            // // dateInputString (sträng som skickas in i handleDateInput()-funktionen)
            // var dateInputString;

            // function getDateInputString() {
            //     console.log("getDateInputString() körs");
            //     console.log("dataId = " + dataId);
            //     dateInputString = dateCollection[dataId].value;
            //     console.log("dateInputString: " + dateInputString);
            // }

            // _ _ _

            // Event listener for blur event (start)

            dateFieldTextarea.addEventListener('blur', (event) => {
                console.log(" dateFieldTextarea (blur) addEventListener ")
                let dataId = `${dateFieldTextarea.getAttribute('data-id')}`

                // Prevent blur event if the Edit Date button is clicked
                if (event.relatedTarget && event.relatedTarget.id === `edit-button-${dataId}`) {
                    console.log("Blur prevented because Edit Date button was clicked.");
                    return;
                }

                console.log("JSON.stringify(plannedTodos) (on blur) (1) = " + JSON.stringify(plannedTodos));

                // console.log("ADD dateInputString HERE!? = " + dateInputString);

                console.log("lastDateOfMonth = " + lastDateOfMonth);
                // dateInputString = dateCollection[dataId].value;
                dateInputString = getDateInputString();

                if (dateInputString >= dateDisplay.textContent && dateInputString <= lastDateOfMonth) {
                    console.log("Edited date is OK, update date!")
                    handleDateInput(dateInputString, defaultDate);
                } else if (dateInputString < dateDisplay.textContent) {
                    console.log("Edited date is in the past, don't update date!")
                    console.log("dateInputString (< dateDisplay.textContent) = " + dateInputString)
                    console.log("dataId = " + dataId);
                    console.log("dateCollection[dataId].value = " + dateCollection[dataId].value);
                    dateCollection[dataId].value = defaultDate;
                    dateCollection[dataId].innerHTML = defaultDate;
                    // plannedTodos[dataId].date = defaultDate

                    if (plannedTodos.length > 0 && dataId !== "2") {
                        console.log("dataId = " + dataId)
                        console.log("typeOf(dataId) = " + typeOf(dataId))
                        console.log("plannedTodos[dataId].date (1) = " + plannedTodos[dataId].date)
                        plannedTodos[dataId].date = defaultDate
                        console.log("plannedTodos[dataId].date (2) = " + plannedTodos[dataId].date)
                        plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumber(dateCollection[dataId])
                    }

                    dateInputString = defaultDate;
                    console.log("dateInputString (< dateDisplay.textContent) = " + dateInputString)
                    handleDateInput(dateInputString, defaultDate);
                    updateCurrentWeekSchedule()
                } else if (dateInputString === undefined) {
                    console.log("dateInputString (undefined) = " + dateInputString)
                    dateInputString = defaultDate;
                    // console.log("defaultDate = " + defaultDate)
                    // console.log("dateInputString (undefined / too big) = " + dateInputString)
                    // console.log("handleDateInput(dateInputString, defaultDate) = " + handleDateInput(dateInputString, defaultDate));
                    handleDateInput(dateInputString, defaultDate);
                } else if (dateInputString > lastDateOfMonth) {
                        console.log("dateInputString (date number too high) = " + dateInputString)
                        dateInputString = defaultDate;
                        // console.log("defaultDate = " + defaultDate)
                        // console.log("dateInputString (undefined / too big) = " + dateInputString)
                        // console.log("handleDateInput(dateInputString, defaultDate) = " + handleDateInput(dateInputString, defaultDate));
                        handleDateInput(dateInputString, defaultDate);
                } else if (dateInputString = '') {
                    // alert("Add dates before editing")
                    console.log("dateInputString is empty");
                }

                // handleDateInput(dateInputString, defaultDate);


                console.log("dataId (1) = " + dataId)
                console.log("dateCollection[dataId].value (1) = " + dateCollection[dataId].value)
                console.log(`Date textarea  with data-id="${dateFieldTextarea.getAttribute('data-id')}" is inactive.`)
                status.textContent = 'No Date textarea is active.';

                // defaultDate = dateCollection[dataId].value;
                console.log("defaultDate (blur) = " + defaultDate);

                // if (dateCollection[dataId].value = defaultDate) {
                //     // ...
                // }

                // (2025-01-23 change)
                // dateCollection[dataId].value = defaultDate;
                // dateCollection[dataId].innerHTML = defaultDate;

                // plannedTodos[dataId].date = dateCollection[dataId].value;

                //  if (resultString >= dateDisplay.textContent) {

                checkForTodoDateDuplicates(defaultDate, defaultTodoText, dateCollection, todoCollection, dataId);

                    console.log("resultString = " + resultString);

                    if (plannedTodos.length > 0  && dataId !== "2") {
                        plannedTodos[dataId].date = resultString;
                    }

                    dateCollection[dataId].value = resultString;
                    dateCollection[dataId].innerHTML = resultString;

                    sortPlannedTodos(plannedTodos);

                    console.log("JSON.stringify(plannedTodos) (on blur) (2) = " + JSON.stringify(plannedTodos));

                updateCurrentWeekSchedule();

                removeEditDateButton(dataId);
                isDateFieldFocus = false;
                changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                dateFieldTextarea.style.backgroundColor = ''; // Optional: Reset background color }); });
            });

            // _ _ _

        });
        //Event listener for blur event (end)

        // _ _ _
        // _ _ _


        function removeEditDateButton(dataId) {
            console.log("removeEditDateButton() körs")
            defaultDate = '';
            // Remove the "Edit Date" button
            const button = document.getElementById(`edit-button-${dataId}`);
            console.log("button exists?")
            if (button) {
                console.log("button exists!")
                button.remove();
            }
        }

        function updateDateCollection(dataId) {
            // Set dateCollection value to defaultDate and update innerHTML
            if (defaultDate) {
                dateCollection[dataId].value = defaultDate;
                dateCollection[dataId].innerHTML = defaultDate;
                const planCurrentDdateDiv = document.querySelector(`.todo-date[data-id="${dataId}"]`);
                if (planCurrentDdateDiv) {
                    planCurrentDdateDiv.value = defaultDate; // Update the textarea value
                }
                console.log(`Updated dateCollection for data-id="${dataId}": ${dateCollection[dataId]}`);
            }
        }


// ooooooo
// ooooooo

// dataId is defined here
let dataId;

function getDataId(dataId) {
    if (!dataId) {
        console.warn("dataId is not provided.");
    }
    let currentDataId = dataId;
    console.log("currentDataId = " + currentDataId);
    return currentDataId;
}

    // dateInputString (sträng som skickas in i handleDateInput()-funktionen)
    var dateInputString;

    function getDateInputString() {
        console.log("getDateInputString() körs");
        // getDataId(dataId);
        dataId = event.target.getAttribute('data-id');
        console.log("dataId = " + dataId);
        dateInputString = dateCollection[dataId].value;

        // 2025-03-03: Ta bort 9-gräns
        // blockedDates.forEach((blockedDate) => {
        //     if (dateInputString === blockedDate) {
        //         console.log("defaultDate = " + defaultDate);
        //         dateInputString = defaultDate;
        //         plannedTodos[dataId].date = defaultDate;
        //         plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumberMultiDuration(defaultDate);
        //     }
        // })
        // _ _ _

    //     blockedDates.forEach(blockedDate => {
    //         for (let i = 0; i < plannedTodos.length; i++) {

    //             if (plannedTodos[i].date === blockedDate) {

    // }
    console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
        updateCurrentWeekSchedule();
        console.log("dateInputString: " + dateInputString);
        return dateInputString;
    }

function getDateFields(dateFields) {
    if (!dateFields) {
        console.warn("dateFields are not provided.");
    }
    let currentDateFields = dateFields;
    console.log("currentDateFields = " + currentDateFields);
    return currentDateFields;
}

function getTodoFields(todoFields) {
    if (!todoFields) {
        console.warn("todoFields are not provided.");
    }
    let currentTodoFields = todoFields;
    console.log("currentTodoFields = " + currentTodoFields);
    return currentTodoFields;
}

// _ _ _

// _ _ _

// Behöver uppdateras (2024-10-16?)
function checkIfDateAndTextAreEmpty() {
    getDataId(dataId);
    if (dateCollection[dataId].value === '' && todoCollection[dataId].value === '') {
        console.log("DOM Date and todo are empty (for dataId)")
        if (plannedTodos.length > 0 && dataId !== "2") {
            plannedTodos[dataId].date = '';
            plannedTodos[dataId].todo = '';
            plannedTodos[dataId].color = '';
            todoColorCollection[dataId].style.backgroundColor = 'rgb(221, 221, 221)';
            plannedTodos[dataId].isEmpty = true;
        }
    }
    // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
}


        // Date fields
        // Select all date fields (textareas) with the class 'todo-date'

        // UPPDATERA nya date-div:ar med addeventlistener!!! (och kör funktionen nedan när de editeras)
        // const dateFields = document.querySelectorAll('.todo-date');
        // var dateFields = document.querySelectorAll('.todo-date');

        // Add event listeners to all the created date fields

        dateFields = getDateFields(dateFields);
        console.log("dateFields.length (first three) = " + dateFields.length)

        // _ _ _

        // // dateInputString (sträng som skickas in i handleDateInput()-funktionen)
        // var dateInputString;

        // When input is changed for any date field (in Current Plan)... (start)
        dateFields.forEach(function(field) {

            // console.log("blockedDates = " + blockedDates)

            field.addEventListener('input', function(event) {

                console.log("plannedTodos.length (i dateFields-addeventlistener-funk) = " + plannedTodos.length)

                dataId = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)
                console.log("key = " + key)

                getDataId(dataId);

                // handleDateInput(event);

                // let dateInputString = dateCollection[dataId].value
                // dateInputString = dateCollection[dataId].value;
                dateInputString = getDateInputString();
                console.log("dateInputString changed to: " + dateInputString);

                // handleDateInput(dateInputString);

                // gggggggg
                // // Check if the value contains a blocked date
                // if (isBlockedDate(dateCollection[dataId].value)) {
                //     alert("This date is not allowed.");
                //     textarea.value = ""; // Clear the invalid input
                // }
                // gggggggg

                // _ _ _
                // _ _ _
                // Ta bort (2024-12-03) ((Ersätts av handleDateInput()!?!?))
                // if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                //         checkIfDateAndTextAreEmpty();
                //         // console.log("plannedTodos[dataId][key] (2) = " + plannedTodos[dataId][key])
                //         plannedTodos[dataId][key] = dateCollection[dataId].value;
                //         plannedTodos[dataId].isEmpty = false;
                //     }
                // _ _ _
                // _ _ _

                //if (dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[0] && currentMondayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[1] && currentTuesdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[2] && currentWednesdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[3] && currentThursdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[4] && currentFridayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[5] && currentSaturdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[6] && currentSundayTodos.length < 9) {

                // 2025-03-03: Ta bort 9-gräns
                if (dateCollection[dataId].value !== ''
                    // &&
                    // currentMondayTodos.length < 9
                    || dateCollection[dataId].value !== ''
                    // &&
                    // currentTuesdayTodos.length < 9
                    || dateCollection[dataId].value !== ''
                    // &&
                    // currentWednesdayTodos.length < 9
                    || dateCollection[dataId].value !== ''
                    // &&
                    // currentThursdayTodos.length < 9
                    || dateCollection[dataId].value !== ''
                    // &&
                    // currentFridayTodos.length < 9
                    || dateCollection[dataId].value !== ''
                    // &&
                    // currentSaturdayTodos.length < 9
                    || dateCollection[dataId].value !== ''
                    // &&
                    // currentSundayTodos.length < 9
                    )
                    {

                    // _ _ _

                // UPPDATERA TODO-TASK-List-DATUM (och dataDate), Lägg till på nytt (objekt och DOM-element) och ta bort gammalt (objekt och DOM-element)

                // 1. Om DOM-datumet (dateCollection[dataId].value) ändras && nytt datum finns i veckovy. (loopa igenom och undersök om dateCollection[dataId].value === weekDates[i]) => Ta bort old todo-vecko-div från vecko-vy (se removeSpecificTodo)
                // 2. Lägg till ny todo-vecko-div i vecko-vy (för nytt datum) ((där style.backgroundColor === ''(?)))


                console.log("vid date input change, plannedTodos[dataId].date = " + plannedTodos[dataId].date);
                console.log("vid date input change, plannedTodos[dataId].dataDate = " + plannedTodos[dataId].dataDate);

                plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumber(dateCollection[dataId])
                console.log("plannedTodos[dataId].dataDate = " +  weekdayNameToWeekDayNumber(dateCollection[dataId]))

                // _ _ _

                // _ _ _

                // (change 2025-01-23)
                // console.log("JSON.stringify(plannedTodos) (on input change) (1) = " + JSON.stringify(plannedTodos));

                //     plannedTodos[dataId][key] = dateCollection[dataId].value;

                // console.log("JSON.stringify(plannedTodos) (on input change) (2) = " + JSON.stringify(plannedTodos));

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

                    // (2025-01-23) x updateCurrentWeekSchedule();
                    // updateCurrentWeekSchedule();

                    // domUpdateCurrentWeekSchedule();



                } else if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                    console.log("dateCollection (dataId) is invalid")
                    checkIfDateAndTextAreEmpty();
                }
                // 2025-03-03: Ta bort 9-gräns
                else if (dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[0]
                    // && currentMondayTodos.length === 9
                    || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[1]
                    // && currentTuesdayTodos.length === 9
                    || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[2]
                    // && currentWednesdayTodos.length === 9
                    || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[3]
                    // && currentThursdayTodos.length === 9
                    || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[4]
                    // && currentFridayTodos.length === 9
                    || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[5]
                    // && currentSaturdayTodos.length === 9
                    || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[6]
                    // && currentSundayTodos.length === 9
                ) {
                    dateCollection[dataId].value = '';
                    alert('Unavailable selection: The task limit has been reached for that day.')
                }

                // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            });
        });
        // When input is changed for any date field (in Current Plan)... (end)

        // _ _ _
        // _ _ _
        // _ _ _

        // _ _ _
        // _ _ _
        // _ _ _


        // Text fields
        // Select all text fields (textareas) with the class 'todo-text'
        // const todoFields = document.querySelectorAll('.todo-text');

        // let currentTodoField = document.querySelector('.todo-text');

        // Add event listeners to all the created todo-text fields
        todoFields = getTodoFields(todoFields);
        todoFields.forEach(function(field) {
            field.addEventListener('input', function(event) {
                console.log("task row, listening for added todo input (3199)");
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

                                if (currentMondayTodos[i]?.date === plannedTodos[dataId]?.date && currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo)
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
                    console.log("invalid todo, -> checkIfDateAndTextAreEmpty()")
                    checkIfDateAndTextAreEmpty();
                }
                // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
            });
        });


        // Edit color (for specific task)
        // currentTodoField.addEventListener('click', function() {
        //     console.log("Todo field is clicked?")
        // });

        // Select the parent element and the childDivs
        const parentDiv = document.getElementById('todo-wrapper');

        // childDivsColor  (old & new color switcher panel-divs)
        const childDivsColor = parentDiv.querySelectorAll('.todo-color');

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

            // _ _ _
            // // Ut-kommenterat 2025-02-19
                console.log("currentMondayTodoItems[0].color = " + currentMondayTodoItems[0].color)
                console.log("currentMondayTodoItems[0].innerHTML = " + currentMondayTodoItems[0].innerHTML)
                console.log("currentMondayTodoItems[0].style.backgroundColor = " + currentMondayTodoItems[0].style.backgroundColor)
            // _ _ _

            // 1. Hitta currentDayTodos[i] som matchar plannedTodos[dataId].date && plannedTodos[dataId].todo
            // 2. Ändra färg för aktuellt index ([i]), (currentDayTodos[i].color && currentDayTodoItems[i].style.backgroundColor)

            // _ _ _

            console.log("which day ooa");

            let currentDayTodoItems;

            if (plannedTodos[dataId].dataDate === "0") {
                currentDayTodoItems = currentMondayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "1") {
                currentDayTodoItems = currentTuesdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "2") {
                currentDayTodoItems = currentWednesdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "3") {
                currentDayTodoItems = currentThursdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "4") {
                currentDayTodoItems = currentFridayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "5") {
                currentDayTodoItems = currentSaturdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "6") {
                currentDayTodoItems = currentSundayTodos.length
            }
            // Fill up the week schedule divs with edited data
            // 2025-03-03: Ta bort 9-gräns
            // for (let i = 0; i < 8; i++) {
            for (let i = 0; i < currentDayTodoItems; i++) {
            if (plannedTodos[dataId].dataDate === "0" &&
                currentMondayTodos.length > 0 &&
                // Om currentMondayTodos-objekt och plannedTodos-objekt är lika ==> hämta färg för currentMondayTodos-objekt från plannedTodos-DOM-färg-listan (todoColorCollection)
                currentMondayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                console.log("Monday ooa");
                        currentMondayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        console.log("here, Monday, returnRgbColor(e.target.getAttribute('data-color')) = " + returnRgbColor(e.target.getAttribute('data-color')))
                        currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "1" &&
                currentTuesdayTodos.length > 0 &&
                currentTuesdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentTuesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentTuesdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "2" &&
                currentWednesdayTodos.length > 0 &&
                currentWednesdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentWednesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentWednesdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "3" &&
                currentThursdayTodos.length > 0 &&
                currentThursdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentThursdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentThursdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "4" &&
                currentFridayTodos.length > 0 &&
                currentFridayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentFridayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentFridayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (
                plannedTodos[dataId].dataDate === "5" &&currentSaturdayTodos.length > 0 &&
                currentSaturdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentSaturdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentSaturdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "6" &&
                currentSundayTodos.length > 0 &&
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

    // TEST (Fungerar ej 2025-01-15)
        // function changeRecDivBackgroundColor(todoContainerId) {
        //     console.log("changeContainerBackgroundColor(dataId) körs")

        //     let specificRecDiv = document.querySelector(`.todo-rec[data-id="${todoContainerId}"]`);

        //     console.log("specificRecDiv.style.backgroundColor = " + specificRecDiv.style.backgroundColor);
        //     console.log("plannedTodos[todoContainerId].isRecurring = " + plannedTodos[todoContainerId].isRecurring);

        //     if (plannedTodos[todoContainerId].isRecurring === true && specificRecDiv.style.backgroundColor === 'rgb(0, 117, 255)') {
        //         specificRecDiv.style.backgroundColor = 'rgba(0, 0, 0, 0)';  // Change to desired color
        //     }
        // }

       // (Fungerar ej 2025-01-15)
    // _ _ _


    var isRemoveAllRecurringCopies = false;
    var plannedTodosEditRecurring = [];
    var plannedTodosEditOneRecurring = [];
    var plannedTodosEditOneAny = [];

    function removeAllRecurringCopies() {
        // Display a confirm dialog box
        let userResponse = confirm("Remove all copies of this recurring task?");

        // Check the user's response
        if (userResponse) {
            console.log("User chose Yes.");
            isRemoveAllRecurringCopies = true;
            // Add additional actions for Yes
        } else {
            console.log("User chose No.");
            isRemoveAllRecurringCopies = false;
            // Add additional actions for No
        }
        return isRemoveAllRecurringCopies;
    }


    // _ _ _

// Clear Specific Todo row (start)
    // clearSpecificTodoRowButton.addEventListener('click', function() {
        clearSpecificTodoRowButton.addEventListener('click', function() {
                console.log("clearSpecificTodo-function() körs")
                // getDataId();
                getDataId(dataId);
                console.log("getDataId(dataId) körs i clear specifictodo (= #" + getDataId(dataId) + " )");

                // _ _ _

                // Delete specific week schedule day div (if div number > 10)

                // if (currentMondayTodoItems.length > 10 && currentMondayTodos.length < currentMondayTodoItems.length) {

                if (currentMondayTodoItems.length > 10 ||
                    currentTuesdayTodoItems.length > 10 ||
                    currentWednesdayTodoItems.length > 10 ||
                    currentThursdayTodoItems.length > 10 ||
                    currentFridayTodoItems.length > 10 ||
                    currentSaturdayTodoItems.length > 10 ||
                    currentSundayTodoItems.length > 10
                ) {

                    // Get current day
                    // if (plannedTodos[dataId].date === )
                    console.log("plannedTodos[dataId].dataDate = " + plannedTodos[dataId].dataDate)
                    let dataDateOfplannedTodosToRemove = plannedTodos[dataId].dataDate

                    console.log("plannedTodos[dataId].date === weekDates[dataDateOfplannedTodosToRemove = " + plannedTodos[dataId].date === weekDates[dataDateOfplannedTodosToRemove]);

                    // Om date to be removed ingår i veckoschemat
                    if (plannedTodos[dataId].date === weekDates[dataDateOfplannedTodosToRemove]) {
                        // getDayOfWeek(plannedTodos[dataId].date)



                        if (plannedTodos[dataId].dataDate === "0") {
                            // deleteMondayTodo();
                            // removeLastMondayTodoDiv();
                            removeLastMondayTodoDiv();

                            // _ _ _
                            // let currentMondayTodosLengthStart = currentMondayTodos.length;
                            // let currentMondayTodosLengthEnd = currentMondayTodoItems.length - 1;

                            // // let dateCollectionLengthEnd = plannedTodos.length;

                            // let currentMondayTodosDiff = currentMondayTodosLengthStart - currentMondayTodosLengthEnd
                            // // let dateCollectionLengthDiff = dateCollectionLengthStart - dateCollectionLengthEnd;

                            // for (let i = 0; i < currentMondayTodosDiff; i++) {
                            //     // deleteMondayTodo();
                            //     removeLastMondayTodoDiv();
                            // }
                            // _ _ _


                        }
                        else if (plannedTodos[dataId].dataDate === "1") {
                            removeLastTuesdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "2") {
                            removeLastWednesdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "3") {
                            removeLastThursdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "4") {
                            removeLastFridayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "5") {
                            removeLastSaturdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "6") {
                            removeLastSundayTodoDiv();
                        }

                    }
                }

                // remove all recurring todos with duration >1 (not necessarily the same name and date)
                if (plannedTodos[dataId].isRecurring === true && plannedTodos[dataId].duration > '1') {
                    console.log("Here #0");

                        console.log("isRemoveAllRecurringCopies (1) = " + isRemoveAllRecurringCopies);
                        removeAllRecurringCopies();
                        console.log("isRemoveAllRecurringCopies (2) = " + isRemoveAllRecurringCopies);

                        // Remove all recurring (duration > '1') copies (of todos with the same todo text)
                        if (isRemoveAllRecurringCopies === true) {
                            console.log("Here #1 a");

                            let dateCollectionLengthStart = dateCollection.length;

                            // Töm DOM:en

                            currentMondayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentTuesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentWednesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentThursdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentFridayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSaturdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSundayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })


                            // for (let i = 0; i < currentSaturdayTodoItems.length; i++) {
                            //     currentMondayTodoItems[i].innerHTML = '';
                            //     currentMondayTodoItems[i].value = '';
                            //     currentMondayTodoItems[i].style.backgroundColor = '';
                            //     currentTuesdayTodoItems[i].innerHTML = '';
                            //     currentTuesdayTodoItems[i].value = '';
                            //     currentTuesdayTodoItems[i].style.backgroundColor = '';
                            //     currentWednesdayTodoItems[i].innerHTML = '';
                            //     currentWednesdayTodoItems[i].value = '';
                            //     currentWednesdayTodoItems[i].style.backgroundColor = '';
                            //     currentThursdayTodoItems[i].innerHTML = '';
                            //     currentThursdayTodoItems[i].value = '';
                            //     currentThursdayTodoItems[i].style.backgroundColor = '';
                            //     currentFridayTodoItems[i].innerHTML = '';
                            //     currentFridayTodoItems[i].value = '';
                            //     currentFridayTodoItems[i].style.backgroundColor = '';
                            //     currentSaturdayTodoItems[i].innerHTML = '';
                            //     currentSaturdayTodoItems[i].value = '';
                            //     currentSaturdayTodoItems[i].style.backgroundColor = '';
                            //     currentSundayTodoItems[i].innerHTML = '';
                            //     currentSundayTodoItems[i].value = '';
                            //     currentSundayTodoItems[i].style.backgroundColor = '';
                            // }

                            for (let i = 0; i < dateCollection.length; i++) {
                                dateCollection[i].value = '';
                                dateCollection[i].innerHTML = '';
                                todoCollection[i].value = '';
                                todoCollection[i].innerHTML = '';
                                todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            }


                                for (let i = 0; i < plannedTodos.length; i++) {
                                    // push the !copies to an object array
                                    if (plannedTodos[dataId].todo !== plannedTodos[i].todo) {

                                        console.log("JSON.stringify(plannedTodos) a = " + JSON.stringify(plannedTodos))

                                        plannedTodosEditRecurring.push({
                                            date: plannedTodos[i].date,
                                            todo: plannedTodos[i].todo,
                                            color: plannedTodos[i].color,
                                            isRecurring: plannedTodos[i].isRecurring,
                                            recurringType: plannedTodos[i].recurringType,
                                            everyWeek: plannedTodos[i].everyWeek,
                                            weekPeriod: plannedTodos[i].weekPeriod,
                                            duration: plannedTodos[i].duration,
                                            dataDate: plannedTodos[i].dataDate,
                                            isEmpty: false
                                        })
                                    }
                                }
                            plannedTodos = plannedTodosEditRecurring;
                            plannedTodosEditRecurring = [];

                            let dateCollectionLengthEnd = plannedTodos.length;

                            let dateCollectionLengthDiff = dateCollectionLengthStart - dateCollectionLengthEnd;

                            for (let i = 0; i < dateCollectionLengthDiff; i++) {
                                removeLastDynamicTodoContainer();
                            }

                            console.log("JSON.stringify(plannedTodos) b = " + JSON.stringify(plannedTodos))

                            plannedTodos.forEach((todoRow) => {
                                console.log("getDayOfWeek(todoRow.date) = " + getDayOfWeek(todoRow.date));
                                console.log("todoRow.isRecurring = " + todoRow.isRecurring);
                                console.log("todoRow.date = " + todoRow.date);
                                console.log("todoRow.color = " + todoRow.color);
                                console.log("weekDates[3] = " + weekDates[3]);
                                console.log("currentThursdayTodos.length = " + currentThursdayTodos.length);

                                if (getDayOfWeek(todoRow.date) === 'thu') {
                                    console.log("getDayOfWeek(todoRow.date) === 'thu' = " + getDayOfWeek(todoRow.date) === 'thu');
                                }
                                if (todoRow.isRecurring === true) {
                                console.log("todoRow.isRecurring === true = " + todoRow.isRecurring === true);
                                }
                                if (todoRow.isRecurring === false) {
                                console.log("todoRow.isRecurring === false = " + todoRow.isRecurring === false);
                            }
                                if (todoRow.date <= weekDates[3]) {
                                console.log("todoRow.date <= weekDates[3] = " + todoRow.date <= weekDates[3]);
                            }
                            // 2025-03-03: Ta bort 9-gräns
                                // if (currentThursdayTodos.length < 9) {
                                // console.log("currentThursdayTodos.length < 9 = " + currentThursdayTodos.length < 9);
                                // }
                                if (getDayOfWeek(todoRow.date) === "thu" &&
                                todoRow.isRecurring === false &&
                                todoRow.dataDate === "3" &&
                                todoRow.date <= weekDates[3]
                                // && currentThursdayTodos.length < 9
                                )
                                {
                                    console.log("getDayOfWeek(todoRow.date) === 'thu' && todoRow.isRecurring === false && todoRow.dataDate === '3' ... MATCH")
                                }
                            })

                            sortPlannedTodos(plannedTodos);

                            // Uppdatera DOM:en (med plannedTodos-objekt-data)

                            //_ _ _

                            for (let i = 0; i < plannedTodos.length; i++) {
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

                            updateCurrentWeekSchedule();

                            // console.log("JSON.stringify(currentMondayTodos) = " + JSON.stringify(currentMondayTodos))
                            // console.log("JSON.stringify(currentTuesdayTodos) = " + JSON.stringify(currentTuesdayTodos))
                            // console.log("JSON.stringify(currentWednesdayTodos) = " + JSON.stringify(currentWednesdayTodos))
                            // console.log("JSON.stringify(currentThursdayTodos) = " + JSON.stringify(currentThursdayTodos))
                            // console.log("JSON.stringify(currentFridayTodos) = " + JSON.stringify(currentFridayTodos))
                            // console.log("JSON.stringify(currentSaturdayTodos) = " + JSON.stringify(currentSaturdayTodos))
                            // console.log("JSON.stringify(currentSundayTodos) = " + JSON.stringify(currentSundayTodos))

                            event.stopPropagation();
                            colorSwitcherPanel.classList.add('hidden');
                            colorSwitcherPanel.style.display = 'none';

                        }
                        // plannedTodos[dataId].isRecurring === true && plannedTodos[dataId].duration > '1'
                        // Remove 1x recurringTodo with duration > '1' ([dataId])
                        else if (isRemoveAllRecurringCopies === false) {
                            console.log("Here #1 b");

                            // 1. Töm DOM:en
                            // 2. Push:a alla plannedTodos-object utom [dataId] (!== ...[dataId]) till en object-array (-> ny plannedTodos)
                            // 3. Kör updateCurrentWeekSchedule()   (sortera eventuellt plannedTodos?)


                            // Töm DOM:en
                            // for (let i = 0; i < currentSaturdayTodoItems.length; i++) {
                            //     currentMondayTodoItems[i].innerHTML = '';
                            //     currentMondayTodoItems[i].value = '';
                            //     currentMondayTodoItems[i].style.backgroundColor = '';
                            //     currentTuesdayTodoItems[i].innerHTML = '';
                            //     currentTuesdayTodoItems[i].value = '';
                            //     currentTuesdayTodoItems[i].style.backgroundColor = '';
                            //     currentWednesdayTodoItems[i].innerHTML = '';
                            //     currentWednesdayTodoItems[i].value = '';
                            //     currentWednesdayTodoItems[i].style.backgroundColor = '';
                            //     currentThursdayTodoItems[i].innerHTML = '';
                            //     currentThursdayTodoItems[i].value = '';
                            //     currentThursdayTodoItems[i].style.backgroundColor = '';
                            //     currentFridayTodoItems[i].innerHTML = '';
                            //     currentFridayTodoItems[i].value = '';
                            //     currentFridayTodoItems[i].style.backgroundColor = '';
                            //     currentSaturdayTodoItems[i].innerHTML = '';
                            //     currentSaturdayTodoItems[i].value = '';
                            //     currentSaturdayTodoItems[i].style.backgroundColor = '';
                            //     currentSundayTodoItems[i].innerHTML = '';
                            //     currentSundayTodoItems[i].value = '';
                            //     currentSundayTodoItems[i].style.backgroundColor = '';
                            // }

                            currentMondayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentTuesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentWednesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentThursdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentFridayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSaturdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSundayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })

                            for (let i = 0; i < dateCollection.length; i++) {
                                dateCollection[i].value = '';
                                dateCollection[i].innerHTML = '';
                                todoCollection[i].value = '';
                                todoCollection[i].innerHTML = '';
                                todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            }

                            console.log("JSON.stringify(plannedTodos) b1 = " + JSON.stringify(plannedTodos))

                            for (let i = 0; i < plannedTodos.length; i++) {
                                // push the !copies to an object array
                                if (plannedTodos[i].todo !== plannedTodos[dataId].todo) {
                                // if (plannedTodos[i].isRecurring === true && plannedTodos[i].date !== plannedTodos[dataId].date && plannedTodos[i].todo !== plannedTodos[dataId].todo) {
                                // if (plannedTodos[i].recurring === false && plannedTodos[i].todo !== plannedTodos[dataId].todo || plannedTodos[i].recurring === true && plannedTodos[i].date !== plannedTodos[dataId].date) {
                                // if (plannedTodos[i].recurring === false && plannedTodos[i].todo !== plannedTodos[dataId].todo) {

                                    console.log("JSON.stringify(plannedTodos) b2 = " + JSON.stringify(plannedTodos))

                                    // plannedTodosEditOneRecurring.push({
                                    //     date: `${plannedTodos[i].date}`,
                                    //     todo: `${plannedTodos[i].todo}`,
                                    //     color: `${plannedTodos[i].color}`,
                                    //     isRecurring: `${plannedTodos[i].isRecurring}`,
                                    //     recurringType: `${plannedTodos[i].recurringType}`,
                                    //     everyWeek: `${plannedTodos[i].everyWeek}`,
                                    //     weekPeriod: `${plannedTodos[i].weekPeriod}`,
                                    //     duration: `${plannedTodos[i].duration}`,
                                    //     dataDate: `${plannedTodos[i].dataDate}`,
                                    //     isEmpty: false
                                    // })

                                    plannedTodosEditOneRecurring.push({
                                        date: plannedTodos[i].date,
                                        todo: plannedTodos[i].todo,
                                        color: plannedTodos[i].color,
                                        isRecurring: plannedTodos[i].isRecurring,
                                        recurringType: plannedTodos[i].recurringType,
                                        everyWeek: plannedTodos[i].everyWeek,
                                        weekPeriod: plannedTodos[i].weekPeriod,
                                        duration: plannedTodos[i].duration,
                                        dataDate: plannedTodos[i].dataDate,
                                        isEmpty: false
                                    })
                                }
                                // push the todo text copies (with different date) to the object array
                                else if (plannedTodos[i].todo === plannedTodos[dataId].todo && plannedTodos[i].date !== plannedTodos[dataId].date) {

                                    plannedTodosEditOneRecurring.push({
                                        date: plannedTodos[i].date,
                                        todo: plannedTodos[i].todo,
                                        color: plannedTodos[i].color,
                                        isRecurring: plannedTodos[i].isRecurring,
                                        recurringType: plannedTodos[i].recurringType,
                                        everyWeek: plannedTodos[i].everyWeek,
                                        weekPeriod: plannedTodos[i].weekPeriod,
                                        duration: plannedTodos[i].duration,
                                        dataDate: plannedTodos[i].dataDate,
                                        isEmpty: false
                                    })

                                }
                            }

                            console.log("JSON.stringify(plannedTodosEditOneRecurring) = " + JSON.stringify(plannedTodosEditOneRecurring))

                            plannedTodos = plannedTodosEditOneRecurring;
                            plannedTodosEditOneRecurring = [];

                            sortPlannedTodos(plannedTodos);

                            removeLastDynamicTodoContainer();

                            for (let i = 0; i < plannedTodos.length; i++) {
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

                            updateCurrentWeekSchedule();

                            // _ _ _
                            // _ _ _
                            // _ _ _

                            // // Empty the innerHTML & the backgroundColor in the week schedule (for the current todo, selected/matched from the Current Plan list)
                            // if (plannedTodos[dataId].date === weekDates[0]) {

                            //     // Clear the weekschedule divs (9x)
                            //     currentMondayTodoItems.forEach(Element => {
                            //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                            //             Element.innerHTML = "";
                            //             Element.style.backgroundColor = "";
                            //         }
                            //     })
                            // } else if (plannedTodos[dataId].date === weekDates[1]) {
                            //     currentTuesdayTodoItems.forEach(Element => {
                            //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                            //             Element.innerHTML = "";
                            //             Element.style.backgroundColor = "";
                            //         }
                            //     })
                            // } else if (plannedTodos[dataId].date === weekDates[2]) {
                            //     currentWednesdayTodoItems.forEach(Element => {
                            //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                            //             Element.innerHTML = "";
                            //             Element.style.backgroundColor = "";
                            //         }
                            //     })
                            // } else if (plannedTodos[dataId].date === weekDates[3]) {
                            //     currentThursdayTodoItems.forEach(Element => {
                            //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                            //             Element.innerHTML = "";
                            //             Element.style.backgroundColor = "";
                            //         }
                            //     })
                            // } else if (plannedTodos[dataId].date === weekDates[4]) {
                            //     currentFridayTodoItems.forEach(Element => {
                            //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                            //             Element.innerHTML = "";
                            //             Element.style.backgroundColor = "";
                            //         }
                            //     })
                            // } else if (plannedTodos[dataId].date === weekDates[5]) {
                            //     currentSaturdayTodoItems.forEach(Element => {
                            //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                            //             Element.innerHTML = "";
                            //             Element.style.backgroundColor = "";
                            //         }
                            //     })
                            // } else if (plannedTodos[dataId].date === weekDates[6]) {
                            //     currentSundayTodoItems.forEach(Element => {
                            //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                            //             Element.innerHTML = "";
                            //             Element.style.backgroundColor = "";
                            //         }
                            //     })
                            // }

                            // // _ _ _

                            // // Add the specific object (to be deleted) to a specific "dayArrayToRemove"

                            // // if (plannedTodos[dataId].date === weekDates[0] || plannedTodos[dataId].date === weekDates[1] ...

                            // // If the todo also needs to be deleted from the current week schedule


                            // // _ _ _
                            // // Vilka tasks visas i week schedule?  (( Lägg in task i "dayArrayObjectToRemove" oavsett om den finns med i currentDayArray eller ej!?!!? ))
                            // // currentMondayTodo.forEach(todoRow => { if (plannedTodos[dataId].todo === todoRow.todo && )}
                            // // _ _ _

                            // // _ _ _
                            // // _ _ _

                            // // _ _ _

                            // let taskNotInCurrentWeekScheduleArray = [];

                            // if (plannedTodos[dataId].date <= weekDates[0] && getDayOfWeek(plannedTodos[dataId].date) === "mon" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[1] && getDayOfWeek(plannedTodos[dataId].date) === "tue" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[2] && getDayOfWeek(plannedTodos[dataId].date) === "wed" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[3] && getDayOfWeek(plannedTodos[dataId].date) === "thu" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[4] && getDayOfWeek(plannedTodos[dataId].date) === "fri" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[5] && getDayOfWeek(plannedTodos[dataId].date) === "sat" && plannedTodos[dataId].isRecurring === true || plannedTodos[dataId].date <= weekDates[6] && getDayOfWeek(plannedTodos[dataId].date) === "sun" && plannedTodos[dataId].isRecurring === true) {

                            //     // plannedTodos[dataId].date = dateCollection[dataId].value
                            //     console.log(" plannedTodos[dataId].date = " +  plannedTodos[dataId].date)
                            //     console.log(" JSON.stringify(plannedTodos) = " +  JSON.stringify(plannedTodos))

                            //     console.log(" `${plannedTodos[dataId].isRecurring}` = " +  `${plannedTodos[dataId].isRecurring}`)

                            //     dayArrayObjectToRemove.push({
                            //         date: `${plannedTodos[dataId].date}`,
                            //         todo: `${plannedTodos[dataId].todo}`,
                            //         color: `${plannedTodos[dataId].color}`,
                            //         isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                            //         recurringType: `${plannedTodos[dataId].recurringType}`,
                            //         everyWeek: `${plannedTodos[dataId].everyWeek}`,
                            //         weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                            //         duration: `${plannedTodos[dataId].duration}`,
                            //         dataDate: `${plannedTodos[dataId].dataDate}`,
                            //         isEmpty: false
                            //     });
                            // } else if (plannedTodos[dataId].date === weekDates[0] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[1] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[2] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[3] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[4] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[5] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date === weekDates[6] && plannedTodos[dataId].isRecurring === false) {
                            //     dayArrayObjectToRemove.push({
                            //         date: `${plannedTodos[dataId].date}`,
                            //         todo: `${plannedTodos[dataId].todo}`,
                            //         color: `${plannedTodos[dataId].color}`,
                            //         isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                            //         recurringType: `${plannedTodos[dataId].recurringType}`,
                            //         everyWeek: `${plannedTodos[dataId].everyWeek}`,
                            //         weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                            //         duration: `${plannedTodos[dataId].duration}`,
                            //         dataDate: `${plannedTodos[dataId].dataDate}`,
                            //         isEmpty: false
                            //         // date: `${plannedTodos[dataId].date}`,
                            //         // todo: `${plannedTodos[dataId].todo}`,
                            //         // color: `${plannedTodos[dataId].color}`,
                            //         // isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                            //         // dataDate: `${plannedTodos[dataId].dataDate}`,
                            //         // isEmpty: false
                            //     });
                            // }
                            // // If the todo doesn't need to be deleted from the current week schedule
                            // else if (plannedTodos[dataId].date !== weekDates[0] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[1] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[2] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[3] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[4] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[5] && plannedTodos[dataId].isRecurring === false || plannedTodos[dataId].date !== weekDates[6] && plannedTodos[dataId].isRecurring === false) {
                            //     dayArrayObjectToRemove.push({
                            //         date: `${plannedTodos[dataId].date}`,
                            //         todo: `${plannedTodos[dataId].todo}`,
                            //         color: `${plannedTodos[dataId].color}`,
                            //         isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                            //         recurringType: `${plannedTodos[dataId].recurringType}`,
                            //         everyWeek: `${plannedTodos[dataId].everyWeek}`,
                            //         weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                            //         duration: `${plannedTodos[dataId].duration}`,
                            //         dataDate: `${plannedTodos[dataId].dataDate}`,
                            //         isEmpty: false
                            //     });
                            //         taskNotInCurrentWeekScheduleArray.push({
                            //             date: `${plannedTodos[dataId].date}`,
                            //             todo: `${plannedTodos[dataId].todo}`,
                            //             color: `${plannedTodos[dataId].color}`,
                            //             isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                            //             recurringType: `${plannedTodos[dataId].recurringType}`,
                            //             everyWeek: `${plannedTodos[dataId].everyWeek}`,
                            //             weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                            //             duration: `${plannedTodos[dataId].duration}`,
                            //             dataDate: `${plannedTodos[dataId].dataDate}`,
                            //             isEmpty: false
                            //     });
                            // }

                            // console.log("dayArrayObjectToRemove = " + JSON.stringify(dayArrayObjectToRemove));

                            // // _ _ _
                            // // _ _ _
                            // // _ _ _

                            // // let taskNotInCurrentWeekScheduleArray = [];

                            // const arraysByDay = {
                            //     currentMondayTodos,
                            //     currentTuesdayTodos,
                            //     currentWednesdayTodos,
                            //     currentThursdayTodos,
                            //     currentFridayTodos,
                            //     currentSaturdayTodos,
                            //     currentSundayTodos,
                            //     taskNotInCurrentWeekScheduleArray
                            // };

                            // // Define the specific object you want to find
                            // let targetObject = dayArrayObjectToRemove[0];

                            // console.log("targetObject = " + JSON.stringify(targetObject));
                            // console.log("currentMondayTodos = " + JSON.stringify(currentMondayTodos));
                            // console.log("JSON.stringify(arraysByDay) = " + JSON.stringify(arraysByDay));

                            // // Function to search for the object in each array
                            // function findArrayContainingObject(target, arrays) {
                            //     console.log("findArrayContainingObject() körs");
                            //     for (const [arrayName, todosArray] of Object.entries(arrays)) {
                            //         for (const todo of todosArray) {

                            //             // Undersök innehåll i todo & target
                            //             console.log("Comparing:", JSON.stringify(todo), "with", JSON.stringify(target));

                            //         const found = todosArray.some(todo =>
                            //             JSON.stringify(todo) === JSON.stringify(target)
                            //         );
                            //         if (found) {
                            //             return arrayName;
                            //         }
                            //         // else if ()
                            //     }
                            //     }
                            //     return null; // If no matching object is found in any array
                            // }

                            // // Call the function
                            // const resultArray = findArrayContainingObject(targetObject, arraysByDay);



                            // console.log("resultArray = " + resultArray); // Outputs: e.g. "currentWeekdayTodos" if the object is found

                            // let key = resultArray;
                            // currentDynamicDayArray = arraysByDay[key];

                            // console.log("JSON.stringify(currentDynamicDayArray) (1) = " + JSON.stringify(currentDynamicDayArray));

                            // if (currentDynamicDayArray.length > 0) {
                            //     for ( let i = 0; i < currentDynamicDayArray.length; i++) {
                            //         console.log("targetObject.date = " +  targetObject.date)
                            //         console.log("currentDynamicDayArray[0].date = " + currentDynamicDayArray[0].date)
                            //         console.log("currentDynamicDayArray[i].todo == targetObject.date = " + currentDynamicDayArray[i].todo == targetObject.date)

                            //         if (currentDynamicDayArray[i].todo !== targetObject.todo) {

                            //         console.log("KÖR: currentDynamicDayArray[i].todo !== targetObject.todo = " + currentDynamicDayArray[i].todo !== targetObject.todo)

                            //             currentDynamicDayArrayEdit.push({
                            //                 date: `${currentDynamicDayArray[i].date}`,
                            //                 todo: `${currentDynamicDayArray[i].todo}`,
                            //                 color: `${currentDynamicDayArray[i].color}`,
                            //                 isRecurring: convertStringToBoolean(`${currentDynamicDayArray[i].isRecurring}`),
                            //                 recurringType: `${currentDynamicDayArray[i].recurringType}`,
                            //                 everyWeek: `${currentDynamicDayArray[i].everyWeek}`,
                            //                 weekPeriod: `${currentDynamicDayArray[i].weekPeriod}`,
                            //                 duration: `${currentDynamicDayArray[i].duration}`,
                            //                 dataDate: `${currentDynamicDayArray[i].dataDate}`,
                            //                 isEmpty: false
                            //                 // date: `${currentDynamicDayArray[i].date}`,
                            //                 // todo: `${currentDynamicDayArray[i].todo}`,
                            //                 // color: `${currentDynamicDayArray[i].color}`,
                            //                 // isRecurring: convertStringToBoolean(`${currentDynamicDayArray[i].isRecurring}`),
                            //                 // dataDate: `${currentDynamicDayArray[i].dataDate}`,
                            //                 // isEmpty: false
                            //             });
                            //         }
                            //     }
                            // }

                            // currentDynamicDayArray = currentDynamicDayArrayEdit;

                            // // currentDynamicDayArrayEdit = [];

                            // console.log("JSON.stringify(currentDynamicDayArrayEdit) = " + JSON.stringify(currentDynamicDayArrayEdit));

                            // console.log("currentDynamicDayArray = " + currentDynamicDayArray);
                            // console.log("JSON.stringify(currentDynamicDayArray) (2) = " + JSON.stringify(currentDynamicDayArray));

                            // // _ _ _

                            // // Function to exclude the target object from each array and collect the rest
                            // function excludeObjectFromArrays(target, arrays) {
                            //     console.log("excludeObjectFromArrays() körs");
                            //     const newArray = [];

                            //     Object.values(arrays).forEach(todosArray => {
                            //         const filteredArray = todosArray.filter(todo =>
                            //             JSON.stringify(todo) !== JSON.stringify(target)
                            //         );
                            //         newArray.push(...filteredArray); // Add all non-matching objects to newArray
                            //     });

                            //     return newArray;
                            // }



                            // // Call the function
                            // let updatedResultArray = excludeObjectFromArrays(targetObject, arraysByDay);

                            // console.log("JSON.stringify(updatedResultArray) = " + JSON.stringify(updatedResultArray));
                            // console.log("updatedResultArray = " + updatedResultArray);

                            // // _ _ _

                            // plannedTodos = updatedResultArray;

                            // // _ _ _

                            // // Töm DOM:en
                            // for (let i = 0; i < currentSaturdayTodoItems.length; i++) {
                            //     currentMondayTodoItems[i].innerHTML = '';
                            //     currentMondayTodoItems[i].value = '';
                            //     currentMondayTodoItems[i].style.backgroundColor = '';
                            //     currentTuesdayTodoItems[i].innerHTML = '';
                            //     currentTuesdayTodoItems[i].value = '';
                            //     currentTuesdayTodoItems[i].style.backgroundColor = '';
                            //     currentWednesdayTodoItems[i].innerHTML = '';
                            //     currentWednesdayTodoItems[i].value = '';
                            //     currentWednesdayTodoItems[i].style.backgroundColor = '';
                            //     currentThursdayTodoItems[i].innerHTML = '';
                            //     currentThursdayTodoItems[i].value = '';
                            //     currentThursdayTodoItems[i].style.backgroundColor = '';
                            //     currentFridayTodoItems[i].innerHTML = '';
                            //     currentFridayTodoItems[i].value = '';
                            //     currentFridayTodoItems[i].style.backgroundColor = '';
                            //     currentSaturdayTodoItems[i].innerHTML = '';
                            //     currentSaturdayTodoItems[i].value = '';
                            //     currentSaturdayTodoItems[i].style.backgroundColor = '';
                            //     currentSundayTodoItems[i].innerHTML = '';
                            //     currentSundayTodoItems[i].value = '';
                            //     currentSundayTodoItems[i].style.backgroundColor = '';
                            // }

                            // for (let i = 0; i < dateCollection.length; i++) {
                            //     dateCollection[i].value = '';
                            //     dateCollection[i].innerHTML = '';
                            //     todoCollection[i].value = '';
                            //     todoCollection[i].innerHTML = '';
                            //     todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            // }

                            // updateCurrentWeekSchedule();

                            // removeLastDynamicTodoContainer();


                            // // _ _ _
                            // // _ _ _
                            // // _ _ _
                            // // _ _ _

                            // // if (resultArray == "currentMondayTodos") {
                            // //     console.log("töm ('') currentMondayTodos")

                            // //     for (let i = 0; i < currentMondayTodos.length; i++) {
                            // //         currentMondayTodoItems.forEach(Element => {
                            // //             Element.innerHTML = "";
                            // //             Element.style.backgroundColor = "";
                            // //         });
                            // //     }
                            // //     console.log("currentMondayTodos = arraysByDay(monday), not updatedResultArray!, arraysByDay = " + arraysByDay)

                            // //     currentMondayTodos = currentDynamicDayArray;
                            // //     for (let i = 0; i < currentMondayTodos.length; i++) {
                            // //         currentMondayTodoItems[i].innerHTML = currentMondayTodos[i].todo;
                            // //         currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
                            // //     }
                            // // } else if (resultArray == "currentTuesdayTodos") {
                            // //     console.log("töm ('') currentTuesdayTodos")

                            // //     for (let i = 0; i < currentTuesdayTodos.length; i++) {
                            // //         currentTuesdayTodoItems.forEach(Element => {
                            // //             Element.innerHTML = "";
                            // //             Element.style.backgroundColor = "";
                            // //         });
                            // //     }
                            // //     currentTuesdayTodos = currentDynamicDayArray;
                            // //     for (let i = 0; i < currentTuesdayTodos.length; i++) {
                            // //         currentTuesdayTodoItems[i].innerHTML = currentTuesdayTodos[i].todo;
                            // //         currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentTuesdayTodos[i].color);
                            // //     }
                            // // } else if (resultArray == "currentWednesdayTodos") {
                            // //     console.log("töm ('') currentWednesdayTodos")

                            // //     for (let i = 0; i < currentWednesdayTodos.length; i++) {
                            // //         currentWednesdayTodoItems.forEach(Element => {
                            // //             Element.innerHTML = "";
                            // //             Element.style.backgroundColor = "";
                            // //         });
                            // //     }
                            // //     currentWednesdayTodos = currentDynamicDayArray;
                            // //     for (let i = 0; i < currentWednesdayTodos.length; i++) {
                            // //         currentWednesdayTodoItems[i].innerHTML = currentWednesdayTodos[i].todo;
                            // //         currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentWednesdayTodos[i].color);
                            // //     }
                            // // } else if (resultArray == "currentThursdayTodos") {
                            // //     console.log("töm ('') currentThursdayTodos")

                            // //     for (let i = 0; i < currentThursdayTodos.length; i++) {
                            // //         currentThursdayTodoItems.forEach(Element => {
                            // //             Element.innerHTML = "";
                            // //             Element.style.backgroundColor = "";
                            // //         });
                            // //     }
                            // //     currentThursdayTodos= currentDynamicDayArray;
                            // //     for (let i = 0; i < currentThursdayTodos.length; i++) {
                            // //         currentThursdayTodoItems[i].innerHTML = currentThursdayTodos[i].todo;
                            // //         currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(currentThursdayTodos[i].color);
                            // //     }
                            // // } else if (resultArray == "currentFridayTodos") {
                            // //     console.log("töm ('') currentFridayTodos")
                            // //     for (let i = 0; i < currentFridayTodos.length; i++) {
                            // //         currentFridayTodoItems.forEach(Element => {
                            // //             Element.innerHTML = "";
                            // //             Element.style.backgroundColor = "";
                            // //         });
                            // //     }
                            // //     currentFridayTodos = currentDynamicDayArray;
                            // //     for (let i = 0; i < currentFridayTodos.length; i++) {
                            // //         currentFridayTodoItems[i].innerHTML = currentFridayTodos[i].todo;
                            // //         currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(currentFridayTodos[i].color);
                            // //     }
                            // // } else if (resultArray == "currentSaturdayTodos") {
                            // //     console.log("töm ('') currentSaturdayTodos")
                            // //     for (let i = 0; i < currentSaturdayTodos.length; i++) {
                            // //         currentSaturdayTodoItems.forEach(Element => {
                            // //             Element.innerHTML = "";
                            // //             Element.style.backgroundColor = "";
                            // //         });
                            // //     }
                            // //     currentSaturdayTodos = currentDynamicDayArray;
                            // //     for (let i = 0; i < currentSaturdayTodos.length; i++) {
                            // //         currentSaturdayTodoItems[i].innerHTML = currentSaturdayTodos[i].todo;
                            // //         currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(currentSaturdayTodos[i].color);
                            // //     }
                            // // } else if (resultArray == "currentSundayTodos") {
                            // //     console.log("töm ('') currentSundayTodos")
                            // //     for (let i = 0; i < currentSundayTodos.length; i++) {
                            // //         currentSundayTodoItems.forEach(Element => {
                            // //             Element.innerHTML = "";
                            // //             Element.style.backgroundColor = "";
                            // //         });
                            // //     }
                            // //     currentSundayTodos = currentDynamicDayArray;
                            // //     for (let i = 0; i < currentSundayTodos.length; i++) {
                            // //         currentSundayTodoItems[i].innerHTML = currentSundayTodos[i].todo;
                            // //         currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(currentSundayTodos[i].color);
                            // //     }
                            // // }

                            // // _ _ _
                            // // _ _ _
                            // // _ _ _
                            // // _ _ _

                            //     // // Empty the Current Plan HTML row (in the DOM)
                            //     // dateCollection[dataId].value = '';
                            //     // dateCollection[dataId].innerHTML = '';
                            //     // todoCollection[dataId].value = '';
                            //     // todoCollection[dataId].innerHTML = '';
                            //     // todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

                            //     // _ _ _
                            //     // _ _ _

                            //     // _ _ _

                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _

                            //     // var lastDomRowNumber;
                            //     // var lastDomRowNumberIndexNr;

                            //     // if (plannedTodos.length <= 3) {
                            //     //     console.log("plannedTodos.length <= 3")
                            //     //     lastDomRowNumber = 2;
                            //     // } else if (plannedTodos.length > 3) {
                            //     //     console.log("plannedTodos.length > 3")
                            //     //     lastDomRowNumber = plannedTodos.length - 1;
                            //     // } else if (!plannedTodos.length) {
                            //     //     console.log("!plannedTodos.length")
                            //     //     lastDomRowNumber = 2;
                            //     //     currentMondayTodos = [];
                            //     //     currentTuesdayTodos = [];
                            //     //     currentWednesdayTodos = [];
                            //     //     currentThursdayTodos = [];
                            //     //     currentFridayTodos = [];
                            //     //     currentSaturdayTodos = [];
                            //     //     currentSundayTodos = [];
                            //     //     taskNotInCurrentWeekScheduleArray = [];
                            //     // }

                            //     // console.log("lastDomRowNumber = " + lastDomRowNumber);
                            //     // console.log("lastDomRowNumber === 'number' = " + lastDomRowNumber === "number");
                            //     // if (typeof lastDomRowNumber === "number") {
                            //     // lastDomRowNumberIndexNr = lastDomRowNumber-1
                            //     // console.log("lastDomRowNumberIndex = " + lastDomRowNumberIndexNr);
                            //     // }

                            //     // // _ _ _

                            //     // console.log("plannedTodos.length (1) = " + plannedTodos.length);

                            //     // // Fyll på Edit-objektet (ny plannedTodo)

                            //     // if (plannedTodosEdit.length > 0) {
                            //     //     console.log("JSON.stringify(plannedTodosEdit) (if plannedTodosEdit.length > 0) = " + JSON.stringify(plannedTodosEdit));
                            //     // }

                            //     // plannedTodos.forEach(plannedTodosElement => {
                            //     //     console.log("plannedTodosElement.todo = " + plannedTodosElement.todo);
                            //     //     console.log("targetObject.todo = " + targetObject.todo);
                            //     //     if (plannedTodosElement.todo !== targetObject.todo) {
                            //     //         plannedTodosEdit.push({
                            //     //             date: `${plannedTodosElement.date}`,
                            //     //             todo: `${plannedTodosElement.todo}`,
                            //     //             color: `${plannedTodosElement.color}`,
                            //     //             isRecurring: convertStringToBoolean(`${plannedTodosElement.isRecurring}`),
                            //     //             recurringType: `${plannedTodosElement.recurringType}`,
                            //     //             everyWeek: `${plannedTodosElement.everyWeek}`,
                            //     //             weekPeriod: `${plannedTodosElement.weekPeriod}`,
                            //     //             duration: `${plannedTodosElement.duration}`,
                            //     //             dataDate: `${plannedTodosElement.dataDate}`,
                            //     //             isEmpty: false
                            //     //             // date: `${plannedTodosElement.date}`,
                            //     //             // todo: `${plannedTodosElement.todo}`,
                            //     //             // color: `${plannedTodosElement.color}`,
                            //     //             // isRecurring: convertStringToBoolean(`${plannedTodosElement.isRecurring}`),
                            //     //             // dataDate: `${plannedTodosElement.dataDate}`,
                            //     //             // isEmpty: false
                            //     //         });
                            //     //     }
                            //     // });

                            //     // console.log("Här 5 a")
                            //     // // _ _ _

                            //     // console.log("JSON.stringify(plannedTodosEdit) (after) = " + JSON.stringify(plannedTodosEdit));

                            //     // // Ny plannedTodos (med ett färre objekt än tidigare)
                            //     // plannedTodos = plannedTodosEdit;

                            //     // // plannedTodosEdit = plannedTodosStart;
                            //     // plannedTodosEdit = [];

                            //     // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                            //     // console.log("plannedTodos.length (2) = " + plannedTodos.length);

                            //     // // Uppdatera DOM:en (med plannedTodos-objekt-data)

                            //     // //_ _ _

                            //     // for (let i = 0; i < plannedTodos.length; i++) {
                            //     //     console.log("'i' vid iterering över plannedTodos.length: " + i);
                            //     // }

                            //     // [...dateCollection].forEach(item => {
                            //     //     console.log("item.innerHTML: " + item.innerHTML);
                            //     // });

                            //     // for (let i = 0; i < plannedTodos.length; i++) {
                            //     //     console.log("'i' in remove specific todo: " + i);
                            //     //     console.log("plannedTodos[i].date = " + plannedTodos[i].date);
                            //     //     console.log("dateCollection.length = " + dateCollection.length);
                            //     //     console.log("todoCollection.length = " + todoCollection.length);
                            //     //     console.log("[...dateCollection][i].value = " + [...dateCollection][i].value);
                            //     //     console.log("[...todoCollection][i].value = " + [...todoCollection][i].value);
                            //     //     dateCollection[i].value = plannedTodos[i].date;
                            //     //     dateCollection[i].innerHTML = plannedTodos[i].date;
                            //     //     todoCollection[i].value = plannedTodos[i].todo;
                            //     //     todoCollection[i].innerHTML = plannedTodos[i].todo;
                            //     //     todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);
                            //     // }

                            //     // //_ _ _
                            //     // //_ _ _

                            //     // console.log("plannedTodos.length (3) = " + plannedTodos.length);

                            //     // //_ _ _
                            //     // //_ _ _

                            //     // // 1. Töm sista raden i DOM:en
                            //     // // 2. Ta (eventuellt) bort sista raden i DOM:En (om fler än 3)

                            //     // // _ _ _
                            //     // // _ _ _ (modellering, ta bort specifik todo)

                            //     // [...dateCollection].forEach(date => {
                            //     //     console.log("[...dateCollection].forEach (innerHTML & value) = " + date.innerHTML + " & " + date.value);
                            //     // });

                            //     // console.log("plannedTodos.length = " + plannedTodos.length);
                            //     // console.log("specificTodoContainer.length = " + specificTodoContainer.length);
                            //     // console.log("currentWednesdayTodos.length = " + currentWednesdayTodos.length);
                            //     // console.log("dateCollection.length = " + dateCollection.length);
                            //     // console.log("todoCollection.length = " + todoCollection.length);

                            //     // plannedTodos.forEach(element => {console.log("JSON.sfy(plannedTodos-element) = " + JSON.stringify(element))})
                            //     // currentWednesdayTodos.forEach(element => {console.log("JSON.sfy(wed-element) = " + JSON.stringify(element))})

                            //     // console.log("lastDomRowNumber = " + lastDomRowNumber)
                            //     // console.log("lastDomRowNumberIndexNr = " + lastDomRowNumberIndexNr)

                            //     // console.log("dataId = " + dataId);
                            //     // // console.log("currentDataId = " + currentDataId);


                            //     // // _ _ _

                            //     // console.log("To remove:");
                            //     // console.log("lastDomRowNumber = " + lastDomRowNumber);
                            //     // console.log("dateCollection[lastDomRowNumber].value: " + dateCollection[lastDomRowNumber].value);
                            //     // console.log("dateCollection[lastDomRowNumber].innerHTML: " + dateCollection[lastDomRowNumber].innerHTML);
                            //     // console.log("todoCollection[lastDomRowNumber].value: " + todoCollection[lastDomRowNumber].value);
                            //     // console.log("todoCollection[lastDomRowNumber].innerHTML: " + todoCollection[lastDomRowNumber].innerHTML);
                            //     // console.log("todoColorCollection[lastDomRowNumber].style.backgroundColor: " + todoColorCollection[lastDomRowNumber].style.backgroundColor);

                            //     // console.log("dateCollection[lastDomRowNumberIndexNr].value: " + dateCollection[lastDomRowNumberIndexNr].value);
                            //     // console.log("dateCollection[lastDomRowNumberIndexNr].innerHTML: " + dateCollection[lastDomRowNumberIndexNr].innerHTML);
                            //     // console.log("todoCollection[lastDomRowNumberIndexNr].value: " + todoCollection[lastDomRowNumberIndexNr].value);
                            //     // console.log("todoCollection[lastDomRowNumberIndexNr].innerHTML: " + todoCollection[lastDomRowNumberIndexNr].innerHTML);
                            //     // console.log("todoColorCollection[lastDomRowNumberIndexNr].style.backgroundColor: " + todoColorCollection[lastDomRowNumberIndexNr].style.backgroundColor);

                            //     // dateCollection[lastDomRowNumber].value = '';
                            //     // dateCollection[lastDomRowNumber].innerHTML = '';
                            //     // todoCollection[lastDomRowNumber].value = '';
                            //     // todoCollection[lastDomRowNumber].innerHTML = '';
                            //     // todoColorCollection[lastDomRowNumber].style.backgroundColor = 'rgb(228,228,228)';

                            //     // if (plannedTodos.length === 1 && dateCollection[1].value !== '') {
                            //     //     dateCollection[1].value = '';
                            //     //     todoCollection[1].value = '';
                            //     //     todoColorCollection[1].style.backgroundColor = 'rgb(228,228,228)';

                            //     // }

                            //     // // _ _ _
                            //     // // _ _ _
                            //     // // _ _ _

                            //     // removeLastDynamicTodoContainer();

                            //     // // _ _ _
                            //     // // Loop backward to avoid issues with live updates to the collection
                            //     // console.log("dateCollection.length === plannedTodos.length+1: " + dateCollection.length === plannedTodos.length+1);


                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _

                            //     // if (dateCollection.length === plannedTodos.length+1) {
                            //     //     dateCollection[plannedTodos.length].remove();
                            //     // }
                            //     // _ _ _

                            //     // for (let i = dateCollection.length - 1; i >= 0; i--) {
                            //     //     if (items[i].innerHTML === "Second") {
                            //     //         items[i].remove(); // Remove the element from the DOM
                            //     //     }
                            //     // }

                            //     // _ _ _
                            //     // _ _ _
                            //     // _ _ _

                            //     //         // console.log("specificTodoContainer.length (i removespecifictodo) = " + specificTodoContainer.length);

                            //     //         let lastCollectionNumber;

                            //     //         if (plannedTodos.length <= 3) {
                            //     //                 lastCollectionNumber = 2;


                            //     //             if (lastCollectionNumber === 2) {
                            //     //             // console.log("lastCollectionNumber (plannedTodos.length) = " + dateCollection.plannedTodos.length);
                            //     //             // console.log("plannedTodos.length - 1 (lastCollectionNumber) = " + plannedTodos.length - 1);
                            //     //             console.log("lastCollectionNumber (1)  = " + lastCollectionNumber);

                            //     //                 if (lastCollectionNumber === 2 && plannedTodos.length === 1) {

                            //     //                     let emptyRowOne = 0;
                            //     //                 // } else if (dateCollection.length === 3)
                            //     //                 // console.log("lastElement.innerHTML = " + lastElement.innerHTML);

                            //     //                     dateCollection[emptyRowOne].value = '';
                            //     //                     dateCollection[emptyRowOne].innerHTML = '';
                            //     //                     todoCollection[emptyRowOne].value = '';
                            //     //                     todoCollection[emptyRowOne].innerHTML = '';
                            //     //                     todoColorCollection[emptyRowOne].style.backgroundColor = 'rgb(228, 228, 228)';

                            //     //                 }
                            //     //                 else if (lastCollectionNumber === 2 && plannedTodos.length === 2) {
                            //     //                     let emptyRowTwo = 1;
                            //     //                             dateCollection[emptyRowTwo].value = '';
                            //     //                             dateCollection[emptyRowTwo].innerHTML = '';
                            //     //                             todoCollection[emptyRowTwo].value = '';
                            //     //                             todoCollection[emptyRowTwo].innerHTML = '';
                            //     //                             todoColorCollection[emptyRowTwo].style.backgroundColor = 'rgb(228, 228, 228)';
                            //     //                 }
                            //     //                 else if (lastCollectionNumber === 2 && plannedTodos.length === 3) {
                            //     //                     let emptyRowThree = 2;
                            //     //                             dateCollection[emptyRowThree].value = '';
                            //     //                             dateCollection[emptyRowThree].innerHTML = '';
                            //     //                             todoCollection[emptyRowThree].value = '';
                            //     //                             todoCollection[emptyRowThree].innerHTML = '';
                            //     //                             todoColorCollection[emptyRowThree].style.backgroundColor = 'rgb(228, 228, 228)';
                            //     //                 }

                            //     //             }
                            //     //         }
                            //     // //     else if (plannedTodos.length === 3) {
                            //     // //         lastCollectionNumber = plannedTodos.length;
                            //     // //         console.log("lastCollectionNumber = plannedTodos.length: " + lastCollectionNumber)
                            //     // //         dateCollection[lastCollectionNumber].value = '';
                            //     // //         dateCollection[lastCollectionNumber].innerHTML = '';
                            //     // //         todoCollection[lastCollectionNumber].value = '';
                            //     // //         todoCollection[lastCollectionNumber].innerHTML = '';
                            //     // //         todoColorCollection[lastCollectionNumber].style.backgroundColor = 'rgb(228, 228, 228)';
                            //     // // }
                            //     //         // else if (plannedTodos.length === 3) {
                            //     //         else if (plannedTodos.length > 3) {
                            //     //             lastCollectionNumber = plannedTodos.length - 1;
                            //     //             console.log("lastCollectionNumber = plannedTodos.length: " + lastCollectionNumber)
                            //     //             dateCollection[lastCollectionNumber].value = '';
                            //     //             dateCollection[lastCollectionNumber].innerHTML = '';
                            //     //             todoCollection[lastCollectionNumber].value = '';
                            //     //             todoCollection[lastCollectionNumber].innerHTML = '';
                            //     //             todoColorCollection[lastCollectionNumber].style.backgroundColor = 'rgb(228, 228, 228)';
                            //     //         removeLastDynamicTodoContainer();
                            //     //     }
                            //     //         // else if (plannedTodos.length > 3) {
                            //     //         //     lastCollectionNumber = plannedTodos.length;
                            //     //         //     dateCollection[lastCollectionNumber].value = '';
                            //     //         //     dateCollection[lastCollectionNumber].innerHTML = '';
                            //     //         //     todoCollection[lastCollectionNumber].value = '';
                            //     //         //     todoCollection[lastCollectionNumber].innerHTML = '';
                            //     //         //     todoColorCollection[lastCollectionNumber].style.backgroundColor = 'rgb(228, 228, 228)';
                            //     //         //     removeLastDynamicTodoContainer();
                            //     //         // }




                            //     //         else if (!lastCollectionNumber) {
                            //     //             currentMondayTodos = [];
                            //     //             currentTuesdayTodos = [];
                            //     //             currentWednesdayTodos = [];
                            //     //             currentThursdayTodos = [];
                            //     //             currentFridayTodos = [];
                            //     //             currentSaturdayTodos = [];
                            //     //             currentSundayTodos = [];
                            //     //         }

                            //             // _ _ _
                            //             // _ _ _
                            //             // _ _ _

                            //             dayArrayObjectToRemove = [];
                            //             currentDynamicDayArray = [];
                            //             currentDynamicDayArrayEdit = [];
                            //             taskNotInCurrentWeekScheduleArray = [];
                            //             // resetWeekdayEditArrays();
                            //             // updatedResultArray = 0;
                            //             // updatedResultArray = [];

                            //             // _ _ _
                            //             // Test 2025-02-03
                            //             // sortPlannedTodos(plannedTodos);
                            //             // updateCurrentWeekSchedule();

                            //             // _ _ _

                            //             ifPlannedTodosIsPastPutToPastPlans();

                                        event.stopPropagation();
                                        colorSwitcherPanel.classList.add('hidden');
                                        colorSwitcherPanel.style.display = 'none';

                }
            }
                // _ _ _
                // _ _ _
                // _ _ _

                // else if (isRemoveAllRecurringCopies === false) {

                // Remove a specific todo for non recurring todos (duration === '1')
            else {
                console.log("Here #2");

                    // Lägg till alla todos (utom ...dataId) i object-array

                    getDataId(dataId);

                    dataId = Number(getDataId(dataId));
                    // console.log("currentDataId = " + currentDataId);
                    console.log("dataId = " + dataId);

                    for (let i = 0; i < plannedTodos.length; i++) {
                        console.log("i = " + i);
                        console.log("typeof dataId = " + typeof dataId);
                        console.log("i === dataId " + i === dataId);
                        if (i !== dataId) {
                            plannedTodosEditOneAny.push({
                                date: `${plannedTodos[i].date}`,
                                todo: `${plannedTodos[i].todo}`,
                                color: `${plannedTodos[i].color}`,
                                isRecurring: convertStringToBoolean(`${plannedTodos[i].isRecurring}`),
                                recurringType: `${plannedTodos[i].recurringType}`,
                                everyWeek: `${plannedTodos[i].everyWeek}`,
                                weekPeriod: `${plannedTodos[i].weekPeriod}`,
                                duration: `${plannedTodos[i].duration}`,
                                dataDate: `${plannedTodos[i].dataDate}`,
                                isEmpty: false
                            });
                        }
                        // else if (i === dataId) {

                        // }
                    }

                    // plannedTodos = [];

                    plannedTodos = plannedTodosEditOneAny;

                    console.log("JSON.stringify(plannedTodos)" + JSON.stringify(plannedTodos));

                    plannedTodosEditOneAny = [];




                            // // 1. Töm DOM:en
                            // // 2. Push:a alla plannedTodos-object utom [dataId] (!== ...[dataId]) till en object-array (-> ny plannedTodos)
                            // // 3. Kör updateCurrentWeekSchedule()   (sortera eventuellt plannedTodos?)

                            // // Töm DOM:en
                            // for (let i = 0; i < currentSaturdayTodoItems.length; i++) {
                            //     currentMondayTodoItems[i].innerHTML = '';
                            //     currentMondayTodoItems[i].value = '';
                            //     currentMondayTodoItems[i].style.backgroundColor = '';
                            //     currentTuesdayTodoItems[i].innerHTML = '';
                            //     currentTuesdayTodoItems[i].value = '';
                            //     currentTuesdayTodoItems[i].style.backgroundColor = '';
                            //     currentWednesdayTodoItems[i].innerHTML = '';
                            //     currentWednesdayTodoItems[i].value = '';
                            //     currentWednesdayTodoItems[i].style.backgroundColor = '';
                            //     currentThursdayTodoItems[i].innerHTML = '';
                            //     currentThursdayTodoItems[i].value = '';
                            //     currentThursdayTodoItems[i].style.backgroundColor = '';
                            //     currentFridayTodoItems[i].innerHTML = '';
                            //     currentFridayTodoItems[i].value = '';
                            //     currentFridayTodoItems[i].style.backgroundColor = '';
                            //     currentSaturdayTodoItems[i].innerHTML = '';
                            //     currentSaturdayTodoItems[i].value = '';
                            //     currentSaturdayTodoItems[i].style.backgroundColor = '';
                            //     currentSundayTodoItems[i].innerHTML = '';
                            //     currentSundayTodoItems[i].value = '';
                            //     currentSundayTodoItems[i].style.backgroundColor = '';
                            // }

                            // for (let i = 0; i < dateCollection.length; i++) {
                            //     dateCollection[i].value = '';
                            //     dateCollection[i].innerHTML = '';
                            //     todoCollection[i].value = '';
                            //     todoCollection[i].innerHTML = '';
                            //     todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            // }

                            // console.log("JSON.stringify(plannedTodos) a2 = " + JSON.stringify(plannedTodos))

                            // // _ _ _

                            // let specificTaskisRecurring = plannedTodos[dataId].isRecurring

                            // for (let i = 0; i < plannedTodos.length; i++) {
                            //     // push the !copies to an object array
                            //     console.log("plannedTodos[i].isRecurring === specificTaskisRecurring && plannedTodos[i].todo !== plannedTodos[dataId].todo = " + plannedTodos[i].isRecurring === specificTaskisRecurring && plannedTodos[i].todo !== plannedTodos[dataId].todo)
                            //     if (plannedTodos[i].isRecurring === specificTaskisRecurring && plannedTodos[i].todo !== plannedTodos[dataId].todo) {

                            //         console.log("JSON.stringify(plannedTodos) b2 = " + JSON.stringify(plannedTodos))

                            //         plannedTodosEditOneAny.push({
                            //             date: plannedTodos[i].date,
                            //             todo: plannedTodos[i].todo,
                            //             color: plannedTodos[i].color,
                            //             isRecurring: plannedTodos[i].isRecurring,
                            //             recurringType: plannedTodos[i].recurringType,
                            //             everyWeek: plannedTodos[i].everyWeek,
                            //             weekPeriod: plannedTodos[i].weekPeriod,
                            //             duration: plannedTodos[i].duration,
                            //             dataDate: plannedTodos[i].dataDate,
                            //             isEmpty: false
                            //         })
                            //     }
                            // }

                            // console.log("JSON.stringify(plannedTodosEditOneAny) c2 = " + JSON.stringify(plannedTodosEditOneAny))

                            // plannedTodos = plannedTodosEditOneAny;
                            // plannedTodosEditOneAny = [];

                            // sortPlannedTodos(plannedTodos);

                            // removeLastDynamicTodoContainer();

                            // for (let i = 0; i < plannedTodos.length; i++) {
                            //     console.log("'i' in remove specific todo: " + i);
                            //     console.log("plannedTodos[i].date = " + plannedTodos[i].date);
                            //     console.log("dateCollection.length = " + dateCollection.length);
                            //     console.log("todoCollection.length = " + todoCollection.length);
                            //     console.log("[...dateCollection][i].value = " + [...dateCollection][i].value);
                            //     console.log("[...todoCollection][i].value = " + [...todoCollection][i].value);
                            //     dateCollection[i].value = plannedTodos[i].date;
                            //     dateCollection[i].innerHTML = plannedTodos[i].date;
                            //     todoCollection[i].value = plannedTodos[i].todo;
                            //     todoCollection[i].innerHTML = plannedTodos[i].todo;
                            //     todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);
                            // }

                            // updateCurrentWeekSchedule();

                            // _ _ _
                            // _ _ _
                            // _ _ _
                // }
                // _ _ _
                // _ _ _

                // if
                // plannedTodos[dataId].isRecurring === true &&
                // plannedTodos[dataId].duration > '1' &&
                //  Then open alert (yes/cancel)
                //      if yes:
                //              Push all but the specific multiple duration recurring todos to an object Array (called plannedTodosEditRecurring)
                //          if
                //          plannedTodos[dataId].todo !== plannedTodos[i].todo &&
                //          plannedTodos[dataId].duration !== plannedTodos[i].duration
                //          Then {plannedTodosEditRecurring.push {(
                //              plannedTodos[i])}
                                    // date: `${plannedTodos[i].date}`, plannedTodos[i].date(?)
                                    // todo: plannedTodos[i].todo,
                                    // color: plannedTodos[i].color,
                                    // isRecurring: plannedTodos[i].recurring,
                                    // recurringType: plannedTodos[i].recurringType,
                                    // everyWeek: plannedTodos[i].everyWeek,
                                    // weekPeriod: plannedTodos[i].weekPeriod,
                                    // duration: plannedTodos[i].duration,
                                    // dataDate: plannedTodos[i].dataDate,
                                    // isEmpty: false
                                    // });

                // plannedTodos = plannedTodosEditRecurring
                // sortPlannedTodos(plannedTodos);

                //updateCurrentWeekSchedule();

                //      if cancel: ... {}

                // TEST (Fungerar ej 2025-01-15)
                    // changeRecDivBackgroundColor(dataId);
                // (Fungerar ej 2025-01-15)
                // _ _ _

                //let specificContainerDataId = todo.getAttribute('data-id');

                // _ _ _
                // _ _ _
                // _ _ _

                // _ _ _


                            // Töm DOM:en
                            // for (let i = 0; i < currentSaturdayTodoItems.length; i++) {
                            //     currentMondayTodoItems[i].innerHTML = '';
                            //     currentMondayTodoItems[i].value = '';
                            //     currentMondayTodoItems[i].style.backgroundColor = '';
                            //     currentTuesdayTodoItems[i].innerHTML = '';
                            //     currentTuesdayTodoItems[i].value = '';
                            //     currentTuesdayTodoItems[i].style.backgroundColor = '';
                            //     currentWednesdayTodoItems[i].innerHTML = '';
                            //     currentWednesdayTodoItems[i].value = '';
                            //     currentWednesdayTodoItems[i].style.backgroundColor = '';
                            //     currentThursdayTodoItems[i].innerHTML = '';
                            //     currentThursdayTodoItems[i].value = '';
                            //     currentThursdayTodoItems[i].style.backgroundColor = '';
                            //     currentFridayTodoItems[i].innerHTML = '';
                            //     currentFridayTodoItems[i].value = '';
                            //     currentFridayTodoItems[i].style.backgroundColor = '';
                            //     currentSaturdayTodoItems[i].innerHTML = '';
                            //     currentSaturdayTodoItems[i].value = '';
                            //     currentSaturdayTodoItems[i].style.backgroundColor = '';
                            //     currentSundayTodoItems[i].innerHTML = '';
                            //     currentSundayTodoItems[i].value = '';
                            //     currentSundayTodoItems[i].style.backgroundColor = '';
                            // }

                            currentMondayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentTuesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentWednesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentThursdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentFridayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSaturdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSundayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })

                            for (let i = 0; i < dateCollection.length; i++) {
                                dateCollection[i].value = '';
                                dateCollection[i].innerHTML = '';
                                todoCollection[i].value = '';
                                todoCollection[i].innerHTML = '';
                                todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            }

                // console.log("plannedTodos[dataId].date = " + plannedTodos[dataId].date);

                // // Empty the innerHTML & the backgroundColor in the week schedule (for the current todo, selected/matched from the Current Plan list)
                // if (plannedTodos[dataId].date === weekDates[0]) {

                //     currentMondayTodoItems.forEach(Element => {
                //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         }
                //     })
                // } else if (plannedTodos[dataId].date === weekDates[1]) {
                //     currentTuesdayTodoItems.forEach(Element => {
                //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         }
                //     })
                // } else if (plannedTodos[dataId].date === weekDates[2]) {
                //     currentWednesdayTodoItems.forEach(Element => {
                //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         }
                //     })
                // } else if (plannedTodos[dataId].date === weekDates[3]) {
                //     currentThursdayTodoItems.forEach(Element => {
                //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         }
                //     })
                // } else if (plannedTodos[dataId].date === weekDates[4]) {
                //     currentFridayTodoItems.forEach(Element => {
                //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         }
                //     })
                // } else if (plannedTodos[dataId].date === weekDates[5]) {
                //     currentSaturdayTodoItems.forEach(Element => {
                //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         }
                //     })
                // } else if (plannedTodos[dataId].date === weekDates[6]) {
                //     currentSundayTodoItems.forEach(Element => {
                //         if (Element.innerHTML == plannedTodos[dataId].todo) {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         }
                //     })
                // }

                // _ _ _

                // _ _ _
                // _ _ _

                // Add the specific object (to be deleted) to a specific "dayArrayToRemove"

                // if (plannedTodos[dataId].date === weekDates[0] || plannedTodos[dataId].date === weekDates[1] ...

                // If the todo also needs to be deleted from the current week schedule


                // _ _ _
                // Vilka tasks visas i week schedule?  (( Lägg in task i "dayArrayObjectToRemove" oavsett om den finns med i currentDayArray eller ej!?!!? ))
                // currentMondayTodo.forEach(todoRow => { if (plannedTodos[dataId].todo === todoRow.todo && )}
                // _ _ _

                // _ _ _
                // _ _ _
                // _ _ _
                // _ _ _
                // _ _ _

                // let taskNotInCurrentWeekScheduleArray = [];

                // if (plannedTodos[dataId].date <= weekDates[0] && getDayOfWeek(plannedTodos[dataId].date) === "mon" && plannedTodos[dataId].isRecurring === false ||
                // plannedTodos[dataId].date <= weekDates[1] && getDayOfWeek(plannedTodos[dataId].date) === "tue" && plannedTodos[dataId].isRecurring === false ||
                // plannedTodos[dataId].date <= weekDates[2] && getDayOfWeek(plannedTodos[dataId].date) === "wed" && plannedTodos[dataId].isRecurring === false ||
                // plannedTodos[dataId].date <= weekDates[3] && getDayOfWeek(plannedTodos[dataId].date) === "thu" && plannedTodos[dataId].isRecurring === false ||
                // plannedTodos[dataId].date <= weekDates[4] && getDayOfWeek(plannedTodos[dataId].date) === "fri" && plannedTodos[dataId].isRecurring === false ||
                // plannedTodos[dataId].date <= weekDates[5] && getDayOfWeek(plannedTodos[dataId].date) === "sat" && plannedTodos[dataId].isRecurring === false ||
                // plannedTodos[dataId].date <= weekDates[6] && getDayOfWeek(plannedTodos[dataId].date) === "sun" && plannedTodos[dataId].isRecurring === false) {

                //     // plannedTodos[dataId].date = dateCollection[dataId].value
                //     console.log(" plannedTodos[dataId].date = " +  plannedTodos[dataId].date)
                //     console.log(" JSON.stringify(plannedTodos) = " +  JSON.stringify(plannedTodos))

                //     console.log(" `${plannedTodos[dataId].isRecurring}` = " +  `${plannedTodos[dataId].isRecurring}`)

                //     dayArrayObjectToRemove.push({
                //         date: `${plannedTodos[dataId].date}`,
                //         todo: `${plannedTodos[dataId].todo}`,
                //         color: `${plannedTodos[dataId].color}`,
                //         isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                //         recurringType: `${plannedTodos[dataId].recurringType}`,
                //         everyWeek: `${plannedTodos[dataId].everyWeek}`,
                //         weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                //         duration: `${plannedTodos[dataId].duration}`,
                //         dataDate: `${plannedTodos[dataId].dataDate}`,
                //         isEmpty: false
                //         // date: `${plannedTodos[dataId].date}`,
                //         // todo: `${plannedTodos[dataId].todo}`,
                //         // color: `${plannedTodos[dataId].color}`,
                //         // isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                //         // dataDate: `${plannedTodos[dataId].dataDate}`,
                //         // isEmpty: false
                //     });
                // } else if (plannedTodos[dataId].date === weekDates[0] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date === weekDates[1] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date === weekDates[2] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date === weekDates[3] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date === weekDates[4] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date === weekDates[5] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date === weekDates[6] && plannedTodos[dataId].isRecurring === false) {
                //     dayArrayObjectToRemove.push({
                //         date: `${plannedTodos[dataId].date}`,
                //         todo: `${plannedTodos[dataId].todo}`,
                //         color: `${plannedTodos[dataId].color}`,
                //         isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                //         recurringType: `${plannedTodos[dataId].recurringType}`,
                //         everyWeek: `${plannedTodos[dataId].everyWeek}`,
                //         weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                //         duration: `${plannedTodos[dataId].duration}`,
                //         dataDate: `${plannedTodos[dataId].dataDate}`,
                //         isEmpty: false
                //     });
                // }
                // // If the todo doesn't need to be deleted from the current week schedule
                // else if (plannedTodos[dataId].date !== weekDates[0] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date !== weekDates[1] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date !== weekDates[2] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date !== weekDates[3] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date !== weekDates[4] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date !== weekDates[5] && plannedTodos[dataId].isRecurring === false ||
                //     plannedTodos[dataId].date !== weekDates[6] && plannedTodos[dataId].isRecurring === false) {
                //     dayArrayObjectToRemove.push({
                //         date: `${plannedTodos[dataId].date}`,
                //         todo: `${plannedTodos[dataId].todo}`,
                //         color: `${plannedTodos[dataId].color}`,
                //         isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                //         recurringType: `${plannedTodos[dataId].recurringType}`,
                //         everyWeek: `${plannedTodos[dataId].everyWeek}`,
                //         weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                //         duration: `${plannedTodos[dataId].duration}`,
                //         dataDate: `${plannedTodos[dataId].dataDate}`,
                //         isEmpty: false
                //     });
                //         taskNotInCurrentWeekScheduleArray.push({
                //             date: `${plannedTodos[dataId].date}`,
                //             todo: `${plannedTodos[dataId].todo}`,
                //             color: `${plannedTodos[dataId].color}`,
                //             isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                //             recurringType: `${plannedTodos[dataId].recurringType}`,
                //             everyWeek: `${plannedTodos[dataId].everyWeek}`,
                //             weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                //             duration: `${plannedTodos[dataId].duration}`,
                //             dataDate: `${plannedTodos[dataId].dataDate}`,
                //             isEmpty: false
                //     });
                // }
                // // else if (plannedTodos[dataId].date <= weekDates[0] && getDayOfWeek(plannedTodos[dataId].date) === "mon" && plannedTodos[dataId].isRecurring === true ||
                // // plannedTodos[dataId].date <= weekDates[1] && getDayOfWeek(plannedTodos[dataId].date) === "tue" && plannedTodos[dataId].isRecurring === true ||
                // // plannedTodos[dataId].date <= weekDates[2] && getDayOfWeek(plannedTodos[dataId].date) === "wed" && plannedTodos[dataId].isRecurring === true ||
                // // plannedTodos[dataId].date <= weekDates[3] && getDayOfWeek(plannedTodos[dataId].date) === "thu" && plannedTodos[dataId].isRecurring === true ||
                // // plannedTodos[dataId].date <= weekDates[4] && getDayOfWeek(plannedTodos[dataId].date) === "fri" && plannedTodos[dataId].isRecurring === true ||
                // // plannedTodos[dataId].date <= weekDates[5] && getDayOfWeek(plannedTodos[dataId].date) === "sat" && plannedTodos[dataId].isRecurring === true ||
                // // plannedTodos[dataId].date <= weekDates[6] && getDayOfWeek(plannedTodos[dataId].date) === "sun" && plannedTodos[dataId].isRecurring === true) {

                // //     // plannedTodos[dataId].date = dateCollection[dataId].value
                // //     console.log(" plannedTodos[dataId].date = " +  plannedTodos[dataId].date)
                // //     console.log(" JSON.stringify(plannedTodos) = " +  JSON.stringify(plannedTodos))

                // //     console.log(" `${plannedTodos[dataId].isRecurring}` = " +  `${plannedTodos[dataId].isRecurring}`)

                // //     dayArrayObjectToRemove.push({
                // //         date: `${plannedTodos[dataId].date}`,
                // //         todo: `${plannedTodos[dataId].todo}`,
                // //         color: `${plannedTodos[dataId].color}`,
                // //         isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                // //         recurringType: `${plannedTodos[dataId].recurringType}`,
                // //         everyWeek: `${plannedTodos[dataId].everyWeek}`,
                // //         weekPeriod: `${plannedTodos[dataId].weekPeriod}`,
                // //         duration: `${plannedTodos[dataId].duration}`,
                // //         dataDate: `${plannedTodos[dataId].dataDate}`,
                // //         isEmpty: false
                // //         // date: `${plannedTodos[dataId].date}`,
                // //         // todo: `${plannedTodos[dataId].todo}`,
                // //         // color: `${plannedTodos[dataId].color}`,
                // //         // isRecurring: convertStringToBoolean(`${plannedTodos[dataId].isRecurring}`),
                // //         // dataDate: `${plannedTodos[dataId].dataDate}`,
                // //         // isEmpty: false
                // //     });
                // // }

                // console.log("dayArrayObjectToRemove = " + JSON.stringify(dayArrayObjectToRemove));

                // // _ _ _

                // // let taskNotInCurrentWeekScheduleArray = [];

                // const arraysByDay = {
                //     currentMondayTodos,
                //     currentTuesdayTodos,
                //     currentWednesdayTodos,
                //     currentThursdayTodos,
                //     currentFridayTodos,
                //     currentSaturdayTodos,
                //     currentSundayTodos,
                //     taskNotInCurrentWeekScheduleArray
                // };

                // // Define the specific object you want to find
                // let targetObject = dayArrayObjectToRemove[0];

                // console.log("targetObject = " + JSON.stringify(targetObject));
                // console.log("currentMondayTodos = " + JSON.stringify(currentMondayTodos));
                // console.log("JSON.stringify(arraysByDay) = " + JSON.stringify(arraysByDay));

                // // Function to search for the object in each array
                // function findArrayContainingObject(target, arrays) {
                //     for (const [arrayName, todosArray] of Object.entries(arrays)) {
                //         for (const todo of todosArray) {

                //             // Undersök innehåll i todo & target
                //             console.log("Comparing:", JSON.stringify(todo), "with", JSON.stringify(target));

                //         const found = todosArray.some(todo =>
                //             JSON.stringify(todo) === JSON.stringify(target)
                //         );
                //         if (found) {
                //             return arrayName;
                //         }
                //         // else if ()
                //     }
                //     }
                //     return null; // If no matching object is found in any array
                // }

                // // Call the function
                // const resultArray = findArrayContainingObject(targetObject, arraysByDay);



                // console.log("resultArray = " + resultArray); // Outputs: e.g. "currentWeekdayTodos" if the object is found

                // let key = resultArray;
                // currentDynamicDayArray = arraysByDay[key];

                // console.log("JSON.stringify(currentDynamicDayArray) (1) = " + JSON.stringify(currentDynamicDayArray));

                // if (currentDynamicDayArray.length > 0) {
                //     for ( let i = 0; i < currentDynamicDayArray.length; i++) {
                //         console.log("targetObject.date = " +  targetObject.date)
                //         console.log("currentDynamicDayArray[0].date = " + currentDynamicDayArray[0].date)
                //         console.log("currentDynamicDayArray[i].todo == targetObject.date = " + currentDynamicDayArray[i].todo == targetObject.date)

                //         if (currentDynamicDayArray[i].todo !== targetObject.todo) {

                //         console.log("KÖR: currentDynamicDayArray[i].todo !== targetObject.todo = " + currentDynamicDayArray[i].todo !== targetObject.todo)

                //             currentDynamicDayArrayEdit.push({
                //                 date: `${currentDynamicDayArray[i].date}`,
                //                 todo: `${currentDynamicDayArray[i].todo}`,
                //                 color: `${currentDynamicDayArray[i].color}`,
                //                 isRecurring: convertStringToBoolean(`${currentDynamicDayArray[i].isRecurring}`),
                //                 recurringType: `${currentDynamicDayArray[i].recurringType}`,
                //                 everyWeek: `${currentDynamicDayArray[i].everyWeek}`,
                //                 weekPeriod: `${currentDynamicDayArray[i].weekPeriod}`,
                //                 duration: `${currentDynamicDayArray[i].duration}`,
                //                 dataDate: `${currentDynamicDayArray[i].dataDate}`,
                //                 isEmpty: false
                //             });
                //         }
                //     }
                // }

                // currentDynamicDayArray = currentDynamicDayArrayEdit;

                // // currentDynamicDayArrayEdit = [];

                // console.log("JSON.stringify(currentDynamicDayArrayEdit) = " + JSON.stringify(currentDynamicDayArrayEdit));

                // console.log("currentDynamicDayArray = " + currentDynamicDayArray);
                // console.log("JSON.stringify(currentDynamicDayArray) (2) = " + JSON.stringify(currentDynamicDayArray));

                // // _ _ _

                // // Function to exclude the target object from each array and collect the rest
                // function excludeObjectFromArrays(target, arrays) {
                //     const newArray = [];

                //     Object.values(arrays).forEach(todosArray => {
                //         const filteredArray = todosArray.filter(todo =>
                //             JSON.stringify(todo) !== JSON.stringify(target)
                //         );
                //         newArray.push(...filteredArray); // Add all non-matching objects to newArray
                //     });

                //     return newArray;
                // }



                // // Call the function
                // let updatedResultArray = excludeObjectFromArrays(targetObject, arraysByDay);

                // console.log("JSON.stringify(updatedResultArray) = " + JSON.stringify(updatedResultArray));
                // console.log("updatedResultArray = " + updatedResultArray);

                // // _ _ _

                // plannedTodos = updatedResultArray;

                // console.log("JSON.stringify(plannedTodos) (updatedResultArray) = " + JSON.stringify(plannedTodos));

                // // _ _ _
                // // _ _ _
                // // _ _ _

                // if (resultArray == "currentMondayTodos") {
                //     console.log("töm ('') currentMondayTodos")

                //     for (let i = 0; i < currentMondayTodos.length; i++) {
                //         currentMondayTodoItems.forEach(Element => {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         });
                //     }
                //     console.log("currentMondayTodos = arraysByDay(monday), not updatedResultArray!, arraysByDay = " + arraysByDay)
                //     // currentMondayTodos = updatedResultArray;
                //     currentMondayTodos = currentDynamicDayArray;
                //     for (let i = 0; i < currentMondayTodos.length; i++) {
                //         currentMondayTodoItems[i].innerHTML = currentMondayTodos[i].todo;
                //         currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
                //         // currentMondayTodoItems.forEach(Element => {
                //         //     Element.innerHTML = currentMondayTodos[i].todo;
                //         //     Element.style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
                //         // });
                //     }
                // } else if (resultArray == "currentTuesdayTodos") {
                //     console.log("töm ('') currentTuesdayTodos")

                //     for (let i = 0; i < currentTuesdayTodos.length; i++) {
                //         currentTuesdayTodoItems.forEach(Element => {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         });
                //     }
                //     // currentTuesdayTodos = updatedResultArray;
                //     currentTuesdayTodos = currentDynamicDayArray;
                //     for (let i = 0; i < currentTuesdayTodos.length; i++) {
                //         currentTuesdayTodoItems[i].innerHTML = currentTuesdayTodos[i].todo;
                //         currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentTuesdayTodos[i].color);
                //     }
                // } else if (resultArray == "currentWednesdayTodos") {
                //     console.log("töm ('') currentWednesdayTodos")

                //     for (let i = 0; i < currentWednesdayTodos.length; i++) {
                //         currentWednesdayTodoItems.forEach(Element => {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         });
                //     }
                //     // currentWednesdayTodos = updatedResultArray;
                //     currentWednesdayTodos = currentDynamicDayArray;
                //     for (let i = 0; i < currentWednesdayTodos.length; i++) {
                //         currentWednesdayTodoItems[i].innerHTML = currentWednesdayTodos[i].todo;
                //         currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentWednesdayTodos[i].color);
                //     }
                // } else if (resultArray == "currentThursdayTodos") {
                //     console.log("töm ('') currentThursdayTodos")

                //     for (let i = 0; i < currentThursdayTodos.length; i++) {
                //         currentThursdayTodoItems.forEach(Element => {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         });
                //     }
                //     // currentThursdayTodos = updatedResultArray;
                //     currentThursdayTodos= currentDynamicDayArray;
                //     for (let i = 0; i < currentThursdayTodos.length; i++) {
                //         currentThursdayTodoItems[i].innerHTML = currentThursdayTodos[i].todo;
                //         currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(currentThursdayTodos[i].color);
                //     }
                // } else if (resultArray == "currentFridayTodos") {
                //     console.log("töm ('') currentFridayTodos")
                //     for (let i = 0; i < currentFridayTodos.length; i++) {
                //         currentFridayTodoItems.forEach(Element => {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         });
                //     }
                //     // currentFridayTodos = updatedResultArray;
                //     currentFridayTodos = currentDynamicDayArray;
                //     for (let i = 0; i < currentFridayTodos.length; i++) {
                //         currentFridayTodoItems[i].innerHTML = currentFridayTodos[i].todo;
                //         currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(currentFridayTodos[i].color);
                //     }
                // } else if (resultArray == "currentSaturdayTodos") {
                //     console.log("töm ('') currentSaturdayTodos")
                //     for (let i = 0; i < currentSaturdayTodos.length; i++) {
                //         currentSaturdayTodoItems.forEach(Element => {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         });
                //     }
                //     // currentSaturdayTodos = updatedResultArray;
                //     currentSaturdayTodos = currentDynamicDayArray;
                //     for (let i = 0; i < currentSaturdayTodos.length; i++) {
                //         currentSaturdayTodoItems[i].innerHTML = currentSaturdayTodos[i].todo;
                //         currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(currentSaturdayTodos[i].color);
                //     }
                // } else if (resultArray == "currentSundayTodos") {
                //     console.log("töm ('') currentSundayTodos")
                //     for (let i = 0; i < currentSundayTodos.length; i++) {
                //         currentSundayTodoItems.forEach(Element => {
                //             Element.innerHTML = "";
                //             Element.style.backgroundColor = "";
                //         });
                //     }
                //     // currentSundayTodos = updatedResultArray;
                //     currentSundayTodos = currentDynamicDayArray;
                //     for (let i = 0; i < currentSundayTodos.length; i++) {
                //         currentSundayTodoItems[i].innerHTML = currentSundayTodos[i].todo;
                //         currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(currentSundayTodos[i].color);
                //     }
                // }

                // _ _ _
                // _ _ _

                // _ _ _

                    // // Empty the Current Plan HTML row (in the DOM)
                    // dateCollection[dataId].value = '';
                    // dateCollection[dataId].innerHTML = '';
                    // todoCollection[dataId].value = '';
                    // todoCollection[dataId].innerHTML = '';
                    // todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';

                // _ _ _

                //Empty the Current Plan HTML rows (in the DOM)

                for (let i = 0; i < dateCollection.length; i++) {
                    dateCollection[i].value = '';
                    dateCollection[i].innerHTML = '';
                    todoCollection[i].value = '';
                    todoCollection[i].innerHTML = '';
                    todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                }

                // _ _ _

                updateCurrentWeekSchedule();

                removeLastDynamicTodoContainer();

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

                // _ _ _
                // _ _ _
                // _ _ _

                    // var lastDomRowNumber;
                    // var lastDomRowNumberIndexNr;

                    // if (plannedTodos.length <= 3) {
                    //     console.log("plannedTodos.length <= 3")
                    //     lastDomRowNumber = 2;
                    // } else if (plannedTodos.length > 3) {
                    //     console.log("plannedTodos.length > 3")
                    //     console.log("plannedTodos.length = " + plannedTodos.length);
                    //     lastDomRowNumber = plannedTodos.length - 1;
                    // } else if (!plannedTodos.length) {
                    //     console.log("!plannedTodos.length")
                    //     lastDomRowNumber = 2;
                    //     currentMondayTodos = [];
                    //     currentTuesdayTodos = [];
                    //     currentWednesdayTodos = [];
                    //     currentThursdayTodos = [];
                    //     currentFridayTodos = [];
                    //     currentSaturdayTodos = [];
                    //     currentSundayTodos = [];
                    //     taskNotInCurrentWeekScheduleArray = [];
                    // }

                    // console.log("lastDomRowNumber = " + lastDomRowNumber);
                    // console.log("lastDomRowNumber === 'number' = " + lastDomRowNumber === "number");
                    // if (typeof lastDomRowNumber === "number") {
                    // lastDomRowNumberIndexNr = lastDomRowNumber-1
                    // console.log("lastDomRowNumberIndex = " + lastDomRowNumberIndexNr);
                    // }

                    // // _ _ _

                    // console.log("plannedTodos.length (1) = " + plannedTodos.length);

                    // // Fyll på Edit-objektet (ny plannedTodo)

                    // if (plannedTodosEdit.length > 0) {
                    //     console.log("JSON.stringify(plannedTodosEdit) (if plannedTodosEdit.length > 0) = " + JSON.stringify(plannedTodosEdit));
                    // }

                    // plannedTodos.forEach(plannedTodosElement => {
                    //     console.log("plannedTodosElement.todo = " + plannedTodosElement.todo);
                    //     console.log("targetObject.todo = " + targetObject.todo);
                    //     if (plannedTodosElement.todo !== targetObject.todo) {
                    //         plannedTodosEdit.push({
                    //             date: `${plannedTodosElement.date}`,
                    //             todo: `${plannedTodosElement.todo}`,
                    //             color: `${plannedTodosElement.color}`,
                    //             isRecurring: convertStringToBoolean(`${plannedTodosElement.isRecurring}`),
                    //             recurringType: `${plannedTodosElement.recurringType}`,
                    //             everyWeek: `${plannedTodosElement.everyWeek}`,
                    //             weekPeriod: `${plannedTodosElement.weekPeriod}`,
                    //             duration: `${plannedTodosElement.duration}`,
                    //             dataDate: `${plannedTodosElement.dataDate}`,
                    //             isEmpty: false
                    //         });
                    //     }
                    // });

                    // console.log("Här 5 b")
                    // // _ _ _

                    // console.log("JSON.stringify(plannedTodosEdit) (after) = " + JSON.stringify(plannedTodosEdit));

                    // // Ny plannedTodos (med ett färre objekt än tidigare)
                    // plannedTodos = plannedTodosEdit;

                    // // plannedTodosEdit = plannedTodosStart;
                    // plannedTodosEdit = [];

                    // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
                    // console.log("plannedTodos.length (2) = " + plannedTodos.length);

                    // // Uppdatera DOM:en (med plannedTodos-objekt-data)

                    // //_ _ _

                    // for (let i = 0; i < plannedTodos.length; i++) {
                    //     console.log("'i' vid iterering över plannedTodos.length: " + i);
                    // }

                    // [...dateCollection].forEach(item => {
                    //     console.log("item.innerHTML: " + item.innerHTML);
                    // });

                    // for (let i = 0; i < plannedTodos.length; i++) {
                    //     console.log("'i' in remove specific todo: " + i);
                    //     console.log("plannedTodos[i].date = " + plannedTodos[i].date);
                    //     console.log("dateCollection.length = " + dateCollection.length);
                    //     console.log("todoCollection.length = " + todoCollection.length);
                    //     console.log("[...dateCollection][i].value = " + [...dateCollection][i].value);
                    //     console.log("[...todoCollection][i].value = " + [...todoCollection][i].value);
                    //     dateCollection[i].value = plannedTodos[i].date;
                    //     dateCollection[i].innerHTML = plannedTodos[i].date;
                    //     todoCollection[i].value = plannedTodos[i].todo;
                    //     todoCollection[i].innerHTML = plannedTodos[i].todo;
                    //     todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);
                    // }

                    // //_ _ _
                    // //_ _ _

                    // console.log("plannedTodos.length (3) = " + plannedTodos.length);

                    // //_ _ _
                    // //_ _ _

                    // // 1. Töm sista raden i DOM:en
                    // // 2. Ta (eventuellt) bort sista raden i DOM:En (om fler än 3)

                    // // _ _ _
                    // // _ _ _ (modellering, ta bort specifik todo)

                    // [...dateCollection].forEach(date => {
                    //     console.log("[...dateCollection].forEach (innerHTML & value) = " + date.innerHTML + " & " + date.value);
                    // });

                    // console.log("plannedTodos.length = " + plannedTodos.length);
                    // console.log("specificTodoContainer.length = " + specificTodoContainer.length);
                    // console.log("currentWednesdayTodos.length = " + currentWednesdayTodos.length);
                    // console.log("dateCollection.length = " + dateCollection.length);
                    // console.log("todoCollection.length = " + todoCollection.length);

                    // plannedTodos.forEach(element => {console.log("JSON.sfy(plannedTodos-element) = " + JSON.stringify(element))})
                    // currentWednesdayTodos.forEach(element => {console.log("JSON.sfy(wed-element) = " + JSON.stringify(element))})

                    // console.log("lastDomRowNumber = " + lastDomRowNumber)
                    // console.log("lastDomRowNumberIndexNr = " + lastDomRowNumberIndexNr)

                    // console.log("dataId = " + dataId);
                    // // console.log("currentDataId = " + currentDataId);


                    // // _ _ _

                    // console.log("To remove:");
                    // console.log("lastDomRowNumber = " + lastDomRowNumber);
                    // console.log("dateCollection[lastDomRowNumber].value: " + dateCollection[lastDomRowNumber].value);
                    // console.log("dateCollection[lastDomRowNumber].innerHTML: " + dateCollection[lastDomRowNumber].innerHTML);
                    // console.log("todoCollection[lastDomRowNumber].value: " + todoCollection[lastDomRowNumber].value);
                    // console.log("todoCollection[lastDomRowNumber].innerHTML: " + todoCollection[lastDomRowNumber].innerHTML);
                    // console.log("todoColorCollection[lastDomRowNumber].style.backgroundColor: " + todoColorCollection[lastDomRowNumber].style.backgroundColor);

                    // console.log("dateCollection[lastDomRowNumberIndexNr].value: " + dateCollection[lastDomRowNumberIndexNr].value);
                    // console.log("dateCollection[lastDomRowNumberIndexNr].innerHTML: " + dateCollection[lastDomRowNumberIndexNr].innerHTML);
                    // console.log("todoCollection[lastDomRowNumberIndexNr].value: " + todoCollection[lastDomRowNumberIndexNr].value);
                    // console.log("todoCollection[lastDomRowNumberIndexNr].innerHTML: " + todoCollection[lastDomRowNumberIndexNr].innerHTML);
                    // console.log("todoColorCollection[lastDomRowNumberIndexNr].style.backgroundColor: " + todoColorCollection[lastDomRowNumberIndexNr].style.backgroundColor);

                    // dateCollection[lastDomRowNumber].value = '';
                    // dateCollection[lastDomRowNumber].innerHTML = '';
                    // todoCollection[lastDomRowNumber].value = '';
                    // todoCollection[lastDomRowNumber].innerHTML = '';
                    // todoColorCollection[lastDomRowNumber].style.backgroundColor = 'rgb(228,228,228)';

                    // if (plannedTodos.length === 1 && dateCollection[1].value !== '') {
                    //     dateCollection[1].value = '';
                    //     todoCollection[1].value = '';
                    //     todoColorCollection[1].style.backgroundColor = 'rgb(228,228,228)';

                    // }

                    // // _ _ _
                    // // _ _ _
                    // // _ _ _

                    // removeLastDynamicTodoContainer();

                    // // _ _ _
                    // // Loop backward to avoid issues with live updates to the collection
                    // console.log("dateCollection.length === plannedTodos.length+1: " + dateCollection.length === plannedTodos.length+1);

                // _ _ _
                // _ _ _
                // _ _ _

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

                // _ _ _
                // _ _ _
                // _ _ _

                            // dayArrayObjectToRemove = [];
                            // currentDynamicDayArray = [];
                            // currentDynamicDayArrayEdit = [];
                            // taskNotInCurrentWeekScheduleArray = [];
                // _ _ _

                            // resetWeekdayEditArrays();
                            // updatedResultArray = 0;
                            // updatedResultArray = [];

                            // _ _ _
                            // Test 2025-02-03
                            // sortPlannedTodos(plannedTodos);
                            // updateCurrentWeekSchedule();

                            // _ _ _

                            ifPlannedTodosIsPastPutToPastPlans();

                // _ _ _
                // _ _ _
                // _ _ _
                // _ _ _
                // _ _ _

                            event.stopPropagation();
                            colorSwitcherPanel.classList.add('hidden');
                            colorSwitcherPanel.style.display = 'none';

                            // // Check and apply readonly if needed
                            // addReadonlyToRemovedRowElements(dataId);
            }
        // }
    });

    // Remove Specific Todo row (slut)
    // Clear Specific Todo row
    // _ _ _
    // _ _ _

    // Fixa så att clear todos fungerar för week schedule (2024-10-16)

    // Delete, erase, remove
    // Clear todos

    // Clear All todos
    function clearAll() {
        console.log("clearAll() körs")

        todoElements.forEach((element) => {
            element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });

    // clear the DOM todo data
    for (let i = 0; i < dateCollection.length; i++) {
        dateCollection[i].value = '';
        dateCollection[i].innerHTML = '';
        todoCollection[i].value = '';
        todoCollection[i].innerHTML = '';
        todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
    }

    dateInputValue.value = dateDisplay.textContent;
    // dateInputValue.value = '';
    // plannedTodos.length = 0;
    // plannedTodos = plannedTodosStart;
    plannedTodos = [];

    for (let i = currentMondayTodoItems.length; currentMondayTodoItems.length > 10; i--) {
        removeLastMondayTodoDiv();
    }
    for (let i = currentTuesdayTodoItems.length; currentTuesdayTodoItems.length > 10; i--) {
        removeLastTuesdayTodoDiv();
    }
    for (let i = currentWednesdayTodoItems.length; currentWednesdayTodoItems.length > 10; i--) {
        removeLastWednesdayTodoDiv();
    }
    for (let i = currentThursdayTodoItems.length; currentThursdayTodoItems.length > 10; i--) {
        removeLastThursdayTodoDiv();
    }
    for (let i = currentFridayTodoItems.length; currentFridayTodoItems.length > 10; i--) {
        removeLastFridayTodoDiv();
    }
    for (let i = currentSaturdayTodoItems.length; currentSaturdayTodoItems.length > 10; i--) {
        removeLastSaturdayTodoDiv();
    }
    for (let i = currentSundayTodoItems.length; currentSundayTodoItems.length > 10; i--) {
        removeLastSundayTodoDiv();
    }

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

    // _ _ _
    pastTasksSet = new Set();
    pastPlansTextArea.innerHTML = '';
    pastPlansTextArea.value = '';
    pastPlanStringToSaveUpdate = '';



// _ _ _
// _ _ _

        // Attach focus event listener to all todo-text textareas
        document.querySelectorAll(".todo-date").forEach(todoTextArea => {
            todoTextArea.addEventListener("focus", () => {
                // Get the current data-id of the focused textarea
                // const dataId = todoTextArea.getAttribute("data-id");
                dataId = todoTextArea.getAttribute("data-id");

                // console.log("dataId = " + dataId);
                // console.log("getDataId(dataId) = " + getDataId(dataId));

                // // Get the value of the todo-text textarea for this data-id
                // const todoValue = todoTextArea.value;

                if (plannedTodos.length === 0) {
                    alert("Add tasks before editing");
                    console.log("Add tasks before editing");
                    todoTextArea.blur();
                    textInputValue.focus();
                }
            });
        });

// _ _ _
// _ _ _
        // Attach focus event listener to all todo-text textareas
        document.querySelectorAll(".todo-text").forEach(todoTextArea => {
            todoTextArea.addEventListener("focus", () => {
                // Get the current data-id of the focused textarea
                // const dataId = todoTextArea.getAttribute("data-id");
                dataId = todoTextArea.getAttribute("data-id");

                console.log("dataId = " + dataId);
                console.log("getDataId(dataId) = " + getDataId(dataId));

                // // Get the value of the todo-text textarea for this data-id
                // const todoValue = todoTextArea.value;

                if (plannedTodos.length === 0) {
                    alert("Add tasks before editing");
                    console.log("Add tasks before editing");
                    // removeEditDateButton(dataId);
                    // isDateFieldFocus = false;
                    // changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                    // dateFieldTextarea.style.backgroundColor = '';
                    todoTextArea.blur();
                    textInputValue.focus();
                }
                // else if (plannedTodos.length > 0) {

                //     // Log the data-id and value
                //     console.log(`Focused todo-text with data-id="${dataId}"`);
                //     console.log(`Value: "${todoValue}"`);
                //     defaultTodoText = todoValue;
                //     console.log("defaultDate = " + defaultDate + ", " + "defaultTodoText = " + defaultTodoText);

                //     // Optional: Update a status or display this information somewhere in the UI
                //     const status = document.getElementById("status");
                //     if (status) {
                //         status.textContent = `Focused todo-text (data-id: ${dataId}): "${todoValue}"`;
                //     }
                // }
            });
        });

// _ _ _
//_ _ _

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
var monScheduleWrapper = document.getElementById("mon-todo");
var tueScheduleWrapper = document.getElementById("tue-todo");
var wedScheduleWrapper = document.getElementById("wed-todo");
var thuScheduleWrapper = document.getElementById("thu-todo");
var friScheduleWrapper = document.getElementById("fri-todo");
var satScheduleWrapper = document.getElementById("sat-todo");
var sunScheduleWrapper = document.getElementById("sun-todo");


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

// function addTodoDivs() {

//     // 2025-03-03: Ta bort 9-gräns
//     // for (let i = 0; i < 8; i++) {

//         // Create 9 Monday divs
//         newMonWeekDiv.classList.add("mon-todo-week-item");
//         newMonWeekDiv.id = "mon-week-schedule";
//         addCurrentWeekdayDivStyle(newMonWeekDiv)

//         // Create 9 Tuesday divs
//         newTueWeekDiv.classList.add("tue-todo-week-item");
//         newTueWeekDiv.id = "tue-week-schedule";
//         addCurrentWeekdayDivStyle(newTueWeekDiv)

//         // Create 9 Wednesday divs
//         newWedWeekDiv.classList.add("wed-todo-week-item");
//         newWedWeekDiv.id = "wed-week-schedule";
//         addCurrentWeekdayDivStyle(newWedWeekDiv)

//         // Create 9 Thursday divs
//         newThuWeekDiv.classList.add("thu-todo-week-item");
//         newThuWeekDiv.id = "thu-week-schedule";
//         addCurrentWeekdayDivStyle(newThuWeekDiv)

//         // Create 9 Friday divs
//         newFriWeekDiv.classList.add("fri-todo-week-item");
//         newFriWeekDiv.id = "fri-week-schedule";
//         addCurrentWeekdayDivStyle(newFriWeekDiv)

//         // Create 9 Saturday divs
//         newSatWeekDiv.classList.add("sat-todo-week-item");
//         newSatWeekDiv.id = "sat-week-schedule";
//         addCurrentWeekdayDivStyle(newSatWeekDiv)

//         // Create 9 Sunday divs
//         newSunWeekDiv.classList.add("sun-todo-week-item");
//         newSunWeekDiv.id = "sun-week-schedule";
//         addCurrentWeekdayDivStyle(newSunWeekDiv)

//         // Create new divs (e.g. id = "mon-week-schedule") in the Monday -> Sunday schedule fields
//         monScheduleWrapper.appendChild(newMonWeekDiv)
//         tueScheduleWrapper.appendChild(newTueWeekDiv)
//         wedScheduleWrapper.appendChild(newWedWeekDiv)
//         thuScheduleWrapper.appendChild(newThuWeekDiv)
//         friScheduleWrapper.appendChild(newFriWeekDiv)
//         satScheduleWrapper.appendChild(newSatWeekDiv)
//         sunScheduleWrapper.appendChild(newSunWeekDiv)
//     // }
// }

// _ _ _
// Edit 2025-03-03:
// // Add divs to week schedule
// addTodoDivs();
// _ _ _

// for (let i = 0; i < plannedTodos.length; i++) {

//     if (plannedTodos[i].date === weekDates[0]) {
//         plannedTodos[i].todo
//     }

// }

// const currentMondayTodoItems = document.querySelectorAll("[class^='mon-todo-week-item-']");

// let currentMondayTodoItems = document.querySelectorAll(".mon-todo-week-item");

// let currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
// let currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
// let currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
// let currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
// let currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
// let currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
// let currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");

var currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
var currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
var currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
var currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
var currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
var currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
var currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");

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



// function updateCurrentWeekScheduleSpecial() {

// }


    // Function to add a new divs

    // Add Monday weekschedule divs (> 10)
    function addNewMondayTodoDiv() {
        console.log("addNewMondayTodoDiv() körs");
        if (currentMondayTodos.length > 10) {
            console.log("currentMondayTodos.length > 10");
            console.log("ooa");

            // If more todos exist than the current divs, add more divs
            if (currentMondayTodos.length > currentMondayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("monday-target-div");
                newDiv.setAttribute("data-date", "0");
                monScheduleWrapper.appendChild(newDiv);
                // currentMondayTodoItems.appendChild(newDiv);

                    // Update the NodeList by re-selecting the elements
                currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
                console.log("currentMondayTodoItems.length = " + currentMondayTodoItems);
            }
        }
    }

    // Add Tuesday weekschedule divs (> 10)
    function addNewTuesdayTodoDiv() {
        console.log("addNewTuesdayTodoDiv() körs");
        if (currentTuesdayTodos.length > 10) {
            console.log("currentTuesdayTodos.length > 10");

            // If more todos exist than the current divs, add more divs
            if (currentTuesdayTodos.length > currentTuesdayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("tuesday-target-div");
                newDiv.setAttribute("data-date", "1");
                tueScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
                console.log("currentTuesdayTodoItems.length = " + currentTuesdayTodoItems);
            }
        }
    }

    // Add Wednesday weekschedule divs (> 10)
    function addNewWednesdayTodoDiv() {
        console.log("addNewWednesdayTodoDiv() körs");
        if (currentWednesdayTodos.length > 10) {
            console.log("currentWednesdayTodos.length > 10");

            // If more todos exist than the current divs, add more divs
            if (currentWednesdayTodos.length > currentWednesdayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("wednesday-target-div");
                newDiv.setAttribute("data-date", "2");
                wedScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
                console.log("currentWednesdayTodoItems.length = " + currentWednesdayTodoItems);
            }
        }
    }

        // Add Thursday weekschedule divs (> 10)
        function addNewThursdayTodoDiv() {
            console.log("addNewThursdayTodoDiv() körs");
            if (currentThursdayTodos.length > 10) {
                console.log("currentThursdayTodos.length > 10");

                // If more todos exist than the current divs, add more divs
                if (currentThursdayTodos.length > currentThursdayTodoItems.length) {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("thursday-target-div");
                    newDiv.setAttribute("data-date", "3");
                    thuScheduleWrapper.appendChild(newDiv);

                    // Update the NodeList by re-selecting the elements
                    currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
                    console.log("currentThursdayTodoItems.length = " + currentThursdayTodoItems);
                }
            }
        }

         // Add Friday weekschedule divs (> 10)
    function addNewFridayTodoDiv() {
        console.log("addNewFridayTodoDiv() körs");
        if (currentFridayTodos.length > 10) {
            console.log("currentFridayTodos.length > 10");

            // If more todos exist than the current divs, add more divs
            if (currentFridayTodos.length > currentFridayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("friday-target-div");
                newDiv.setAttribute("data-date", "4");
                friScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
                console.log("currentFridayTodoItems.length = " + currentFridayTodoItems);
            }
        }
    }

        // Add Saturday weekschedule divs (> 10)
        function addNewSaturdayTodoDiv() {
            console.log("addNewSaturdayTodoDiv() körs");
            if (currentSaturdayTodos.length > 10) {
                console.log("currentSaturdayTodos.length > 10");

                // If more todos exist than the current divs, add more divs
                if (currentSaturdayTodos.length > currentSaturdayTodoItems.length) {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("saturday-target-div");
                    newDiv.setAttribute("data-date", "5");
                    satScheduleWrapper.appendChild(newDiv);

                    // Update the NodeList by re-selecting the elements
                    currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
                    console.log("currentSaturdayTodoItems.length = " + currentSaturdayTodoItems);
                }
            }
        }

            // Add Sunday weekschedule divs (> 10)
    function addNewSundayTodoDiv() {
        console.log("addNewSundayTodoDiv() körs");
        if (currentSundayTodos.length > 10) {
            console.log("currentSundayTodos.length > 10");

            // If more todos exist than the current divs, add more divs
            if (currentSundayTodos.length > currentSundayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("sunday-target-div");
                newDiv.setAttribute("data-date", "6");
                sunScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");
                console.log("currentSundayTodoItems.length = " + currentSundayTodoItems);
            }
        }
    }

    // _ _ _


    // function deleteMondayTodo() {
    //     console.log("deleteMondayTodo() körs");
    //     // if (currentMondayTodos.length > 10) {


    //     // if (currentMondayTodoItems.length > 10 && currentMondayTodos.length < currentMondayTodoItems.length) {


    //             // let currentMondayTodoItems = document.querySelectorAll(".monday-target-div");

    //         // // Ensure there is at least one div left to remove
    //         // if (currentMondayTodoItems.length > 10) {


    //             // let wrapperContainer = document.getElementById('todo-wrapper');
    //             // let specificTodoContainer = wrapperContainer.getElementsByClassName('todo-container-element');

    //             // let lastContainerNumber = specificTodoContainer.length - 1

    //             // console.log("specificTodoContainer (i removeLastDynamicTodoContainer) = " + specificTodoContainer);

    //             // if (specificTodoContainer.length > 3) {
    //             //     let lastContainer = specificTodoContainer[lastContainerNumber];
    //             //     wrapperContainer.removeChild(lastContainer);
    //             // } else if (specificTodoContainer.length <= 3) {
    //             //     console.log("No more todo containers to remove.");
    //             // }

    //             // wrapperContainer ~ monScheduleWrapper

    //         if (currentMondayTodoItems.length > 10) {

    //             var specificMonDiv = document.getElementsByClassName('monday-target-div');

    //             let lastMonDivIndex = currentMondayTodoItems.length - 1;

    //             console.log("[...specificMonDiv] = " + [...specificMonDiv])
    //             console.log("[...specificMonDiv[0] = " + [...specificMonDiv][0])

    //             // removelast

    //                 let lastMonDiv = specificMonDiv[lastMonDivIndex];
    //                 monScheduleWrapper.removeChild(lastMonDiv);

    //         }

    //             // let lastDiv = currentMondayTodoItems[currentMondayTodoItems.length - 1];
    //         //     // lastDiv.remove();
    //         // }
    //     // }

    //     // for (let i = currentMondayTodoItems.length; i > currentMondayTodos.length; i--) {
    //     //         console.log("index number to remove (from currentMondayTodoItems): = " + i);
    //     //     // Remove the item from the array
    //     //     // if ()
    //     //     currentMondayTodos.splice(i, 1);
    //     // }
    // }

    // _ _ _

    function removeLastMondayTodoDiv() {
        // let monTodoContainer = document.getElementById("mon-todo");
        // let currentMondayTodoItems = document.querySelectorAll(".monday-target-div");

        // // Ensure there's at least one div left before removing
        // if (currentMondayTodoItems.length > 10) {
        //     monTodoContainer.removeChild(currentMondayTodoItems[currentMondayTodoItems.length - 1]);
        //     currentMondayTodoItems = document.querySelectorAll(".monday-target-div");

            // _ _ _

            // let currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
            // currentMondayTodoItems = document.querySelectorAll(".monday-target-div");

            if (currentMondayTodoItems.length > 10) {
                currentMondayTodoItems[currentMondayTodoItems.length - 1].remove();

                // Update the NodeList by re-selecting the elements
            currentMondayTodoItems = document.querySelectorAll(".monday-target-div");

            console.log("Updated currentMondayTodoItems.length = " + currentMondayTodoItems.length);
            }

    }

    function removeLastTuesdayTodoDiv() {

            if (currentTuesdayTodoItems.length > 10) {
                currentTuesdayTodoItems[currentTuesdayTodoItems.length - 1].remove();

                // Update the NodeList by re-selecting the elements
            currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
            console.log("Updated currentTuesdayTodoItems.length = " + currentTuesdayTodoItems.length);
            }
    }
    function removeLastWednesdayTodoDiv() {

        if (currentWednesdayTodoItems.length > 10) {
            currentWednesdayTodoItems[currentWednesdayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
        console.log("Updated currentWednesdayTodoItems.length = " + currentWednesdayTodoItems.length);
        }
    }
    function removeLastThursdayTodoDiv() {

        if (currentThursdayTodoItems.length > 10) {
            currentThursdayTodoItems[currentThursdayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
        console.log("Updated currentThursdayTodoItems.length = " + currentThursdayTodoItems.length);
        }
    }
    function removeLastFridayTodoDiv() {

        if (currentFridayTodoItems.length > 10) {
            currentFridayTodoItems[currentFridayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
        console.log("Updated currentFridayTodoItems.length = " + currentFridayTodoItems.length);
        }
    }
    function removeLastSaturdayTodoDiv() {

        if (currentSaturdayTodoItems.length > 10) {
            currentSaturdayTodoItems[currentSaturdayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
        console.log("Updated currentSaturdayTodoItems.length = " + currentSaturdayTodoItems.length);
        }
    }
    function removeLastSundayTodoDiv() {

        if (currentSundayTodoItems.length > 10) {
            currentSundayTodoItems[currentSundayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");
        console.log("Updated currentSundayTodoItems.length = " + currentSundayTodoItems.length);
        }
    }


    // _ _ _

    // // If more todos exist than the current divs, add more divs
    // if (currentMondayTodos.length > currentMondayTodoItems.length) {
    //     let newDiv = document.createElement("div");
    //     newDiv.classList.add("monday-target-div");
    //     newDiv.setAttribute("data-date", "0");
    //     monScheduleWrapper.appendChild(newDiv);
    // }

    // _ _ _

// updateCurrentWeekSchedule() (start)
// update data (to divs in the week schedule)
function updateCurrentWeekSchedule() {
    console.log("updateCurrentWeekSchedule() körs");
    // currentMondayTodos = plannedTodos.filter(todo => todo.date === weekDates[0]);
    // console.log("currentMondayTodos.object, JSON.stringify(currentMondayTodos) (i updateCurrentWeekSchedule)  = " + JSON.stringify(currentMondayTodos))

    // _ _ _
    // // Function to add a new div
    // function addNewMondayTodoDiv() {
    //     console.log("addNewMondayTodoDiv() körs");
    //     if (currentMondayTodos.length > 10) {
    //         const newDiv = document.createElement('div');
    //         newDiv.className = 'monday-target-div';
    //         newDiv.setAttribute('data-date', '0');
    //         document.getElementById('mon-todo').appendChild(newDiv);
    //     }
    // }
    // _ _ _


    console.log("plannedTodos.length = " + plannedTodos.length)
    console.log("JSON.stringify(plannedTodos) (i updateCurrentWeekSchedule) = " + JSON.stringify(plannedTodos))

        // _ _ _
        // _ _ _ (2025-01-07 test)

        // Uppdatera DOM:en (för recurring Todos, "year")

        // if the year for the recurring plannedTodos is in the past:

        console.log("if the year for the recurring plannedTodos (recurringType: 'y') is in the past (future (for this test)):")

        plannedTodos.forEach(element => {
            console.log("element.date = " + element.date);
            console.log("AAAAAAAAAAA");
            console.log("date < dateDisplay.textContent = " + element.date < dateDisplay.textContent)

            // if (element.date < dateDisplay.textContent) {
            //     // plannedTodos.remove(element);
            //     // for (let i = 0; i < plannedTodos.length; i++) {
            //     //     dateCollection[i].innerHTML = '';
            //     //     dateCollection[i].value = '';
            //     //     todoCollection[i].innerHTML = '';
            //     //     todoCollection[i].value = '';
            //     //     todoColorCollection[i].style.backgroundColor = '';
            //     // }
            // }

            if (element.date >= dateDisplay.textContent) {
            console.log("if (element.date < dateDisplay: delete the plannedTodos from the DOM)");
            plannedTodosEdit.push(element);
            }

        })

        console.log("plannedTodosEdit = " + plannedTodosEdit);
        plannedTodos = plannedTodosEdit;

        plannedTodosEdit = [];

            // uppdatera DOM:en
            for (let i = 0; i < plannedTodos.length; i++) {

                console.log("plannedTodos[i] (1) = " + JSON.stringify(plannedTodos[i]))
                console.log("plannedTodos.length = " + plannedTodos.length);
                console.log("i (update current plan) = " + i);

                //Update HTML to (input order) values
                dateCollection[i].innerHTML = plannedTodos[i].date;
                dateCollection[i].value = plannedTodos[i].date;
                todoCollection[i].innerHTML = plannedTodos[i].todo;
                todoCollection[i].value = plannedTodos[i].todo;
                todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color)
            }

        // _ _ _
        // _ _ _

        // 2025-03-03: Ta bort 9-gräns
        // let matchCount = 0;
        // let blockedDatesBoolean = false;

        // //Ge felmeddelande om blockedDates matchar plannedTodos-date
        // blockedDates.forEach(blockedDate => {
        //     for (let i = 0; i < plannedTodos.length; i++) {

        //         if (plannedTodos[i].date === blockedDate) {
        //         // if (plannedTodos[i].date === blockedDate && matchCount <= 9) {
        //             matchCount++;
        //             // console.log(plannedTodos[i].date + " should not be added to plannedTodos, nor currentDayTodos.")
        //             // alert(plannedTodos[i].date + " should not be added to plannedTodos, nor currentDayTodos.")
        //             // break;
        //             console.log("matchCount (i loop)" + matchCount)
        //             // blockedDatesBoolean = false;
        //         }
        //         // if (matchCount <= 9) {
        //         //     console.log("keep going");
        //         // }
        //         // else if (matchCount > 9) {
        //         //     alert(plannedTodos[i].date + " should not be added to plannedTodos, nor currentDayTodos.")
        //         //     console.log(`Too many tasks scheduled for ${blockedDate}.`);
        //         //     blockedDatesBoolean = true;
        //         //     break;
        //         // }
        //         else if (matchCount > 9) {
        //             // console.log(`Too many tasks scheduled for ${targetDate}.`);

        //             // defaultDate = dateCollection[dataId].value;
        //             console.log("defaultDate (mc>9) = " + defaultDate);
        //             // dateCollection[dataId].value = defaultDate;
        //             // plannedTodos[dataId].date = defaultDate;

        //             // blockedDates.delete(defaultDate);
        //             // dateCollection[dataId].value = defaultDate;
        //             // //     dateCollection[dataId].innerHTML = defaultDate;
        //             // plannedTodos[dataId].date = defaultDate;
        //             if (dateCollection[dataId].value === blockedDate && isValidDateFormat(defaultDate)) {
        //             dateCollection[dataId].value = defaultDate;
        //             //     dateCollection[dataId].innerHTML = defaultDate;
        //             plannedTodos[dataId].date = defaultDate;

        //             // blockedDates.add(defaultDate);

        //             console.log(`Too many tasks scheduled for ${blockedDate}.`);
        //             }
        //             // alert("Task number (9) for current day has exceeded, please replace a todo or select another date :)")

        //             else if (dateCollection[dataId].value !== blockedDate) {

        //             }

        //             // dateCollection[dataId].innerHTML = '';
        //             //_ _ _
        //             // dateCollection[dataId].value = '';
        //             // plannedTodos[dataId].date = '';
        //             //_ _ _
        //             // let defaultdate = dateCollection[dataId].value;
        //             // dateCollection[dataId].value = defaultdate;
        //             // plannedTodos[dataId].date = defaultdate;

        //             // dateCollection[dataId].value = defaultDate;
        //             // dateCollection[dataId].innerHTML = defaultDate;
        //             // plannedTodos[dataId].date = defaultDate;

        //             // blockedDates.delete(defaultDate);
        //             // dateCollection[dataId].value = defaultDate;
        //             // //     dateCollection[dataId].innerHTML = defaultDate;
        //             // plannedTodos[dataId].date = defaultDate;
        //             // blockedDates.add(defaultDate);

        //             // _ _ _

        //             // if ()

        //             // _ _ _
        //             blockedDatesBoolean = true;
        //             break;
        //         }
        //         // if (dataId !== undefined && plannedTodos[dataId].date === blockedDate) {
        //         //     console.log("dataId = " + dataId);
        //         //     console.log("defaultDate = " + defaultDate);
        //         //     console.log("dateCollection[dataId].value = " + dateCollection[dataId].value);
        //         //     blockedDatesBoolean = false;
        //         //     dateCollection[dataId].value = defaultDate;
        //         //     dateCollection[dataId].innerHTML = defaultDate;
        //         //     plannedTodos[dataId].date = defaultDate;
        //         // }
        //     }
        // });


    // const targetDate = "2024-11-24";
    // let matchCount = 0;

    // // Iterate through the array of objects
    // for (let i = 0; i < plannedTodos.length; i++) {
    //     if (plannedTodos[i].date === targetDate) {
    //         matchCount++;
    //     }

    //     if (matchCount > 9) {
    //         console.log(`Too many tasks scheduled for ${targetDate}.`);
    //         break;
    //     }
    // }

    // console.log("blockedDatesBoolean = " + blockedDatesBoolean)


        // _ _ _

        // 2025-03-03: Ta bort 9-gräns
        // if (blockedDatesBoolean === false) {

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
        console.log("todoRow.color = " + todoRow.color)
        console.log("getDayOfWeek(todoRow.date) = " + getDayOfWeek(todoRow.date))
        console.log("todoRow.dataDate = " + todoRow.dataDate)
        console.log("todoRow.date + weekDates[0] = " + todoRow.date + " " + weekDates[0])
        console.log("currentMondayTodos.length = " + currentMondayTodos.length)

        console.log("getDayOfWeek(todoRow.date) === 'mon' = " + getDayOfWeek(todoRow.date) === "mon")
        console.log("todoRow.isRecurring === false = " + todoRow.isRecurring === false)
        console.log("todoRow.dataDate === '0' = " + todoRow.dataDate === '0')
        console.log("todoRow.date <= weekDates[0] = " + todoRow.date === weekDates[0])

        // 2025-03-03: Ta bort 9-gräns
        // console.log("currentMondayTodos.length < 9 = " + currentMondayTodos.length < 9)

            // plannedTodos (isRecurring === true, todoRow <= weekDates[x])
            // if (getDayOfWeek(todoRow.date) === "mon" && todoRow.isRecurring === true && todoRow.dataDate === "0" && todoRow.date <= weekDates[0]) {
            if (getDayOfWeek(todoRow.date) === "mon" &&
            todoRow.isRecurring === true &&
            todoRow.dataDate === "0" &&
            todoRow.date <= weekDates[0]
            // && currentMondayTodos.length < 9
        ) {
                    console.log("Den här todo:n är återkommande för måndagar" + todoRow.date + ", " + dataId);
                    currentMondayTodos.push({
                        date: `${todoRow.date}`,
                        todo: `${todoRow.todo}`,
                        color: `${todoRow.color}`,
                        isRecurring: true,
                        recurringType: `${todoRow.recurringType}`,
                        everyWeek: `${todoRow.everyWeek}`,
                        weekPeriod: `${todoRow.weekPeriod}`,
                        duration: `${todoRow.duration}`,
                        dataDate: `${todoRow.dataDate}`,
                        isEmpty: false
                        // date: `${todoRow.date}`,
                        // todo: `${todoRow.todo}`,
                        // color: `${todoRow.color}`,
                        // isRecurring: true,
                        // dataDate: `${todoRow.dataDate}`,
                        // isEmpty: false
                    })
            }
            else if (getDayOfWeek(todoRow.date) === "tue" &&
            todoRow.isRecurring === true &&
            todoRow.dataDate === "1" &&
            todoRow.date <= weekDates[1]
            // && currentTuesdayTodos.length < 9
        ) {
            console.log("Den här todo:n är återkommande för tisdagar" + todoRow.date + ", " + dataId);
            currentTuesdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "wed" && todoRow.isRecurring === true && todoRow.dataDate === "2" && todoRow.date <= weekDates[2]
    // && currentWednesdayTodos.length < 9
    ) {
            console.log("Den här todo:n är återkommande för onsdagar" + todoRow.date + ", " + dataId);
            currentWednesdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "thu" && todoRow.isRecurring === true && todoRow.dataDate === "3" && todoRow.date <= weekDates[3]
    // && currentThursdayTodos.length < 9
    ) {
            console.log("Den här todo:n är återkommande för torsdagar" + todoRow.date + ", " + dataId);
            currentThursdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "fri" && todoRow.isRecurring === true && todoRow.dataDate === "4" && todoRow.date <= weekDates[4]
    // && currentFridayTodos.length < 9
    ) {
        console.log("Den här todo:n är återkommande för fredagar" + todoRow.date + ", " + dataId);
        currentFridayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sat" && todoRow.isRecurring === true && todoRow.dataDate === "5" && todoRow.date <= weekDates[5]
    // && currentSaturdayTodos.length < 9
    ) {
        console.log("Den här todo:n är återkommande för lördagar" + todoRow.date + ", " + dataId);
        currentSaturdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sun" && todoRow.isRecurring === true && todoRow.dataDate === "6" && todoRow.date <= weekDates[6]
    // && currentSundayTodos.length < 9
    ) {
        console.log("Den här todo:n är återkommande för söndagar" + todoRow.date + ", " + dataId);
        currentSundayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    // plannedTodos (isRecurring === false, todoRow === weekDates[x])
    else if (getDayOfWeek(todoRow.date) === "mon" && todoRow.isRecurring === false && todoRow.dataDate === "0" && todoRow.date === weekDates[0]
    // && currentMondayTodos.length < 9
    ) {
            console.log("Den här todo:n är för måndag" + todoRow.date + ", " + dataId);
            currentMondayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: false,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
                // date: `${todoRow.date}`,
                // todo: `${todoRow.todo}`,
                // color: `${todoRow.color}`,
                // isRecurring: false,
                // dataDate: `${todoRow.dataDate}`,
                // isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "tue" && todoRow.isRecurring === false && todoRow.dataDate === "1" && todoRow.date === weekDates[1]
    // && currentTuesdayTodos.length < 9
    ) {
        console.log("Den här todo:n är för tisdag" + todoRow.date + ", " + dataId);
        currentTuesdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "wed" && todoRow.isRecurring === false && todoRow.dataDate === "2" && todoRow.date === weekDates[2]
    // && currentWednesdayTodos.length < 9
    ) {
        console.log("Den här todo:n är för onsdag" + todoRow.date + ", " + dataId);
        currentWednesdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "thu" && todoRow.isRecurring === false && todoRow.dataDate === "3" && todoRow.date === weekDates[3]
    // && currentThursdayTodos.length < 9
    ) {
        console.log("Den här todo:n är för torsdag" + todoRow.date + ", " + dataId);
        currentThursdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "fri" && todoRow.isRecurring === false && todoRow.dataDate === "4" && todoRow.date === weekDates[4]
    // && currentFridayTodos.length < 9
    ) {
        console.log("Den här todo:n är för fredag" + todoRow.date + ", " + dataId);
        currentFridayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sat" && todoRow.isRecurring === false && todoRow.dataDate === "5" && todoRow.date === weekDates[5]
    // && currentSaturdayTodos.length < 9
    ) {
        console.log("Den här todo:n är för lördag" + todoRow.date + ", " + dataId);
        currentSaturdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sun" && todoRow.isRecurring === false && todoRow.dataDate === "6" && todoRow.date === weekDates[6]
    // && currentSundayTodos.length < 9
    ) {
        console.log("Den här todo:n är för söndag" + todoRow.date + ", " + dataId);
        currentSundayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    // else if (todoRow.date === weekDates[0] && currentMondayTodos.length === 9 || todoRow.date === weekDates[1] && currentTuesdayTodos.length === 9 || todoRow.date === weekDates[2] && currentWednesdayTodos.length === 9 || todoRow.date === weekDates[3] && currentThursdayTodos.length === 9 || todoRow.date === weekDates[4] && currentFridayTodos.length === 9 || todoRow.date === weekDates[5] && currentSaturdayTodos.length === 9 || todoRow.date === weekDates[6] && currentSundayTodos.length === 9) {
    //     // todoRow.date = '';
    //     // isDuplicateTodo(todoRow, todosArray)
    //     // console.log("todoRow.date = " + todoRow.date)
    //     todoRow.date = "1999-01-01";
    //     todoRow.dataDate = "4";
    //     alert("Current weekday tasks have exceeded the maximum number (9)")
    //     updateCurrentWeekScheduleSpecial();
    //     // todoRow.date = "2000-01-01";
    //     // domUpdateCurrentWeekSchedule();
    //     // return 0;
    // }

    // _________________________
    // _________________________



})
// updateCurrentWeekSchedule() (end)

// } else if (blockedDatesBoolean === true) {

// }

domUpdateCurrentWeekSchedule();


// if (currentSaturdayTodos.length === 9) {
//     alert ("Task limit reached for current Saturday (recurring todos for this day).")
// }

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

// updateCurrentWeekSchedule() (end)

    // _ _ _
// _ _ _

function domUpdateCurrentWeekSchedule() {

    console.log("domUpdateCurrentWeekSchedule() körs");

    console.log("plannedTodos.length = " + plannedTodos.length);
    console.log("JSON.stringify(plannedTodos) (i updateDOM) = " + JSON.stringify(plannedTodos));

    // _ _ _

// console.log("currentMondayTodos.length = " + currentMondayTodos.length)
// console.log("currentMondayTodoItems.length = " + currentMondayTodoItems.length)
// console.log("currentTuesdayTodos.length = " + currentTuesdayTodos.length)
// console.log("currentTuesdayTodoItems.length = " + currentTuesdayTodoItems.length)

    // addNewMondayTodoDiv();
    // addNewTuesdayTodoDiv();

    if (currentMondayTodos.length > 10 && currentMondayTodos.length > currentMondayTodoItems.length) {
        console.log("add more mon divs");
        addNewMondayTodoDiv();
    }

    if (currentTuesdayTodos.length > 10 && currentTuesdayTodos.length > currentTuesdayTodoItems.length) {
        console.log("add more tue divs");
        addNewTuesdayTodoDiv();
    }

    if (currentWednesdayTodos.length > 10 && currentWednesdayTodos.length > currentWednesdayTodoItems.length) {
        console.log("add more wed divs");
        addNewWednesdayTodoDiv();
    }

    if (currentThursdayTodos.length > 10 && currentThursdayTodos.length > currentThursdayTodoItems.length) {
        console.log("add more thu divs");
        addNewThursdayTodoDiv();
    }

    if (currentFridayTodos.length > 10 && currentFridayTodos.length > currentFridayTodoItems.length) {
        console.log("add more fri divs");
        addNewFridayTodoDiv();
    }

    if (currentSaturdayTodos.length > 10 && currentSaturdayTodos.length > currentSaturdayTodoItems.length) {
        console.log("add more sat divs");
        addNewSaturdayTodoDiv();
    }

    if (currentSundayTodos.length > 10 && currentSundayTodos.length > currentSundayTodoItems.length) {
        console.log("add more sun divs");
        addNewSundayTodoDiv();
    }

    // // delete div from weekday (in week schedule)
    // if (currentMondayTodoItems.length > currentMondayTodos.length) {
    //     console.log("delete mon div");
    //     deleteMondayTodo()
    // }


    // Ta bort div!? (delete specific) också! currentMondayTodos.length > 10 && currentMondayTodoItems.length > currentMondayTodos.length <
    // _ _ _

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

// var dynamicContainerToken;
// var dynamicContainerDataId;

// add divs
// add containers
function addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId) {
    console.log("addDynamicTodoContainer() körs");
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

    // let newId = dynamicContainerDataId;

    console.log("dynamicContainerDataId (1) = " + dynamicContainerDataId);


    if (dynamicContainerToken === "addTaskToList") {
        newId = plannedTodos.length-1;
    } else if (dynamicContainerToken === "load_func") {
        newId = dynamicContainerDataId;
    }

    console.log("newId (2) = " + dynamicContainerDataId);

    // let newId = plannedTodos.length-1;

    console.log("newId = " + newId)

    // Create a new div for the todo-container-element
    // var dynamicTodoContainer = document.createElement('div');
    const dynamicTodoContainer = document.createElement('div');
    dynamicTodoContainer.id = 'todo-container';
    dynamicTodoContainer.classList.add('todo-container-element');
    dynamicTodoContainer.setAttribute('data-id', newId);
    dynamicTodoContainer.style.display = "flex";

    // Lägg in data från plannedTodos[sistaIndexNr???]

    // Create and append the first textarea for date
    const userCreatedDateField = document.createElement('textarea');
    userCreatedDateField.id = `todo-${newId}-date`;
    userCreatedDateField.classList.add('todo-date');
    userCreatedDateField.setAttribute('type', 'text');
    userCreatedDateField.setAttribute('data-id', newId);
    userCreatedDateField.setAttribute('data-key', 'date');
    userCreatedDateField.setAttribute('name', 'date');
    userCreatedDateField.textContent = `Date ${newId}`; // Placeholder text
    dynamicTodoContainer.appendChild(userCreatedDateField);

    // Create and append the second textarea for text
    const userCreatedTextField = document.createElement('textarea');
    userCreatedTextField.id = `todo-${newId}-text`;
    userCreatedTextField.classList.add('todo-text');
    userCreatedTextField.setAttribute('type', 'text');
    userCreatedTextField.setAttribute('data-id', newId);
    userCreatedTextField.setAttribute('data-key', 'todo');
    userCreatedTextField.setAttribute('name', 'text');
    userCreatedTextField.textContent = `Todo Text ${newId}`; // Placeholder text
    dynamicTodoContainer.appendChild(userCreatedTextField);

    // Create and append the color div
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('todo-color');
    colorDiv.setAttribute('data-id', newId);
    colorDiv.setAttribute('data-key', 'color');
    colorDiv.setAttribute('name', 'color');
    // colorDiv.style.backgroundColor = "lightgreen"; // Set a color for the color div
    dynamicTodoContainer.appendChild(colorDiv);

    // Create and append the recurring div
    const recurringDiv = document.createElement('div');
    recurringDiv.classList.add('todo-rec');
    recurringDiv.setAttribute('data-id', newId);
    recurringDiv.setAttribute('data-key', 'rec');
    recurringDiv.setAttribute('name', 'rec');
    // colorDiv.style.backgroundColor = "lightgreen"; // Set a color for the color div
    dynamicTodoContainer.appendChild(recurringDiv);

    // Append the new container to the main container
    // const wrapperContainer = document.getElementById('todo-wrapper');
    wrapperContainer.appendChild(dynamicTodoContainer);

    dynamicTodoContainer.addEventListener('click', function() {
        // Access the data-id attribute

        const dataId = dynamicTodoContainer.dataset.id;
        // getDataId(dataId);
        console.log('Clicked div data-id (i dynamicTodoContainer addeventlistener):', dataId);
        console.log('taskDate (default) = ', dateCollection[dataId].value);
        console.log('todoDate (default) = ', todoCollection[dataId].value);
        defaultDate = dateCollection[dataId].value;
        defaultTodoText = todoCollection[dataId].value;

        console.log("defaultDate = " + defaultDate + ", " + "defaultTodoText = " + defaultTodoText);
    });

    // Add dateField event listeners to the new (all) dateFields
    dateFields = document.querySelectorAll(".todo-date");

    getDateFields(dateFields)
    console.log("dateFields.length (after user created) = " + dateFields.length)

    // userCreatedDateField.forEach(function(field) {

    // _ _ _
    // _ _ _

            // // Attach focus event listener to all todo-text textareas
            // document.querySelectorAll(".todo-text").forEach(todoTextArea => {
            //     todoTextArea.addEventListener("focus", () => {
            //         // Get the current data-id of the focused textarea
            //         const dataId = todoTextArea.getAttribute("data-id");

            //         // Get the value of the todo-text textarea for this data-id
            //         const todoValue = todoTextArea.value;

            //         // Log the data-id and value
            //         console.log(`Focused todo-text with data-id="${dataId}"`);
            //         console.log(`Value: "${todoValue}"`);

            //         // Optional: Update a status or display this information somewhere in the UI
            //         const status = document.getElementById("status");
            //         if (status) {
            //             status.textContent = `Focused todo-text (data-id: ${dataId}): "${todoValue}"`;
            //         }
            //     });
            // });

    // _ _ _
    // _ _ _

    // Add focus event listener (to (created(?)) date fields)
    userCreatedDateField.addEventListener('focus', () => {
        console.log(" userCreatedDateField (focus) addEventListener ");

        let dataId = `${userCreatedDateField.getAttribute('data-id')}`;
        defaultDate = dateCollection[dataId]?.value || ""; // Use value from dateCollection if available

        console.log(`Date textarea with data-id="${dataId}" is active.`);
        status.textContent = `Date textarea with data-id="${dataId}" is active.`;

        isDateFieldFocus = true;
        changeDateFieldBackgroundColor(isDateFieldFocus, userCreatedDateField); // Optional: Highlight when active

        // Handle Edit Date Button
        const currentDateDiv = document.querySelector(`.todo-date[data-id="${dataId}"]`);
        createEditDateButton(currentDateDiv, dataId);

        if (editDateButton) {
            console.log("editDateButton exists!");
        }

        editDate = dateCollection[dataId]?.value || ""; // Ensure editDate is set correctly
        console.log("defaultDate = " + defaultDate);
    });

    // Add blur event listener
    userCreatedDateField.addEventListener('blur', (event) => {
        console.log(" userCreatedDateField (blur) addEventListener ");
        let dataId = `${userCreatedDateField.getAttribute('data-id')}`;

        let lastDateOfMonth = getlastDateOfCurrentMonth();

        let dateInputString = getDateInputString();
        console.log("dateInputString (when blur, userCreatedDateField) = " + dateInputString);

        // Prevent blur if the Edit Date button is clicked
        if (event.relatedTarget && event.relatedTarget.id === `edit-button-${dataId}`) {
            console.log("Blur prevented because Edit Date button was clicked.");
            return;
        }

    // console.log("ADD dateInputString HERE!? = " + dateInputString);

    if (dateInputString >= dateDisplay.textContent && dateInputString <= lastDateOfMonth) {
        handleDateInput(dateInputString, defaultDate);
    } else if (dateInputString < dateDisplay.textContent) {
        alert("Date must be today (or future) and in a valid format (YYYY-MM-DD) (5348)")
        console.log("dateInputString (< dateDisplay.textContent) = " + dateInputString)
        dateInputString = defaultDate;
        console.log("dateInputString (< dateDisplay.textContent) = " + dateInputString)
        handleDateInput(dateInputString, defaultDate);
    // } else if (dateInputString < dateDisplay.textContent || dateInputString === undefined || dateInputString > lastDateOfMonth) {
    } else if (dateInputString === undefined || dateInputString > lastDateOfMonth) {
        console.log("dateInputString = " + dateInputString);
        alert("Date must be in a valid format (YYYY-MM-DD) (5355)");
        console.log("dateInputString (undefined / too big) = " + dateInputString);
        dateInputString = defaultDate;
        console.log("defaultDate = " + defaultDate);
        console.log("dateInputString (undefined / too big) = " + dateInputString)
        console.log("handleDateInput(dateInputString, defaultDate) = " + handleDateInput(dateInputString, defaultDate));
        handleDateInput(dateInputString, defaultDate);
    }

    // } else if (dateInputString < dateDisplay.textContent || dateInputString === undefined || dateInputString > lastDateOfMonth) {
    //     console.log("defaultDate = " + defaultDate)
    //     handleDateInput(dateInputString, defaultDate);
    // }

    console.log("dataId (1) = " + dataId);
    console.log("dateCollection[dataId].value (1) = " + dateCollection[dataId]?.value);
    console.log(`Date textarea with data-id="${dataId}" is inactive.`);
    status.textContent = 'No Date textarea is active.';

    console.log("defaultDate (blur) = " + defaultDate);

    // dateCollection[dataId].value = defaultDate;
    // dateCollection[dataId].innerHTML = defaultDate;

    checkForTodoDateDuplicates(defaultDate, defaultTodoText, dateCollection, todoCollection, dataId);

    plannedTodos[dataId].date = resultString;

    dateCollection[dataId].value = resultString;
    dateCollection[dataId].innerHTML = resultString;

    sortPlannedTodos(plannedTodos);
    removeEditDateButton(dataId);

    updateCurrentWeekSchedule();

    isDateFieldFocus = false;
    changeDateFieldBackgroundColor(isDateFieldFocus, userCreatedDateField); // Reset background color
    userCreatedDateField.style.backgroundColor = ''; // Optional: Reset background color }); });
});
// addDynamicTodoContainer (end)

// _ _ _
// _ _ _


    // Den här funktionen ska inte köras om matchCount === 10 (för blockedDate) && dateCollection[dataId].value === targetDate (= blockedDate)

    dateFields.forEach(function(field) {
        field.addEventListener('input', function(event) {

            console.log("plannedTodos.length (i dateFields-addeventlistener-funk) = " + plannedTodos.length)

            dataId = event.target.getAttribute('data-id');  // Get the todo index
            const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)
            console.log("key = " + key)

            getDataId(dataId);

            if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                    console.log("invalid todo -> checkIfDateAndTextAreEmpty()" )
                    checkIfDateAndTextAreEmpty();
                    // console.log("plannedTodos[dataId][key] (2) = " + plannedTodos[dataId][key])
                    plannedTodos[dataId][key] = dateCollection[dataId].value;
                    plannedTodos[dataId].isEmpty = false;
                }

                    //if (dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[0] && currentMondayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[1] && currentTuesdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[2] && currentWednesdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[3] && currentThursdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[4] && currentFridayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[5] && currentSaturdayTodos.length < 9 || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[6] && currentSundayTodos.length < 9) {

                    // 2025-03-03: Ta bort 9-gräns
                    if (
                        dateCollection[dataId].value !== ''
                        // && currentMondayTodos.length < 9
                        || dateCollection[dataId].value !== ''
                        // && currentTuesdayTodos.length < 9
                        || dateCollection[dataId].value !== ''
                        // && currentWednesdayTodos.length < 9
                        || dateCollection[dataId].value !== ''
                        // && currentThursdayTodos.length < 9
                        || dateCollection[dataId].value !== ''
                        // && currentFridayTodos.length < 9
                        || dateCollection[dataId].value !== ''
                        // && currentSaturdayTodos.length < 9
                        || dateCollection[dataId].value !== ''
                        // && currentSundayTodos.length < 9
                    )
                        {

                // UPPDATERA TODO-TASK-List-DATUM (och dataDate), Lägg till på nytt (objekt och DOM-element) och ta bort gammalt (objekt och DOM-element)

                // 1. Om DOM-datumet (dateCollection[dataId].value) ändras && nytt datum finns i veckovy. (loopa igenom och undersök om dateCollection[dataId].value === weekDates[i]) => Ta bort old todo-vecko-div från vecko-vy (se removeSpecificTodo)
                // 2. Lägg till ny todo-vecko-div i vecko-vy (för nytt datum) ((där style.backgroundColor === ''(?)))


                plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumber(dateCollection[dataId])
                console.log("plannedTodos[dataId].dataDate = " +  weekdayNameToWeekDayNumber(dateCollection[dataId]))

                // Edit date (1-3 plannedTodos, index: 0-2) (1, start)
                var oldDate = '';
                var freshDate = '';
                console.log("dataId, input = " + dataId);

                for (let i = 0; i < plannedTodos.length; i++) {
                    console.log("plannedTodos[i].date = " + plannedTodos[i].date)
                    console.log("dateCollection[i].innerHTML (1) = " + dateCollection[i].innerHTML)
                    console.log("dateCollection[i].value = " + dateCollection[i].value)
                    oldDate = dateCollection[i].innerHTML;
                    dateCollection[i].innerHTML = dateCollection[i].value;
                    freshDate = dateCollection[i].innerHTML;
                    console.log("dateCollection[i].innerHTML (2) = " + dateCollection[i].innerHTML)

                }
                // If date is changed to a valid date (first 3 todoRows)
                if (isValidDateFormat(oldDate) && isValidDateFormat(freshDate) && oldDate !== freshDate) {
                    plannedTodos[dataId].date = freshDate;
                }

                console.log("plannedTodos.length = " + plannedTodos.length)

                console.log("dataId = " + dataId)
                console.log("typeof(dataId) = " + typeof(dataId))
                // Edit date (1-3 plannedTodos, index: 0-2) (1, end)

                // _ _ _

                // _ _ _

                plannedTodos[dataId][key] = dateCollection[dataId].value;
                console.log("plannedTodos[dataId][key] (i input) " + plannedTodos[dataId][key]);
                console.log("JSON.stringify(plannedTodos) (1, input) = " + JSON.stringify(plannedTodos));

                // Varför töms ...dayTodoItems?
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


                // (2025-01-23) x updateCurrentWeekSchedule();
                // Update the week schedule (when a task has been edited)
                // updateCurrentWeekSchedule();

                // domUpdateCurrentWeekSchedule();



            } else if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                checkIfDateAndTextAreEmpty();
            }
            else if (dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[0]
                // && currentMondayTodos.length === 9
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[1]
                // && currentTuesdayTodos.length === 9
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[2]
                // && currentWednesdayTodos.length === 9
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[3]
                // && currentThursdayTodos.length === 9
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[4]
                // && currentFridayTodos.length === 9
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[5]
                // && currentSaturdayTodos.length === 9
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[6]
                // && currentSundayTodos.length === 9
            ) {
                dateCollection[dataId].value = '';
                alert('Unavailable selection: The task limit has been reached for that day.')
            }

            // Edit date (1-3 plannedTodos, index: 0-2) (2 start)
            console.log("JSON.stringify(plannedTodos), input (näst sist) = " + JSON.stringify(plannedTodos));
            var todoDatesAreValid = true;
            plannedTodos.forEach((todoRow) => {
                if (!isValidDateFormat(todoRow.date)) {
                    todoDatesAreValid = false;
                }
            })
            if (todoDatesAreValid === true) {
                updateCurrentWeekSchedule();
            }
            // Edit date (1-3 plannedTodos, index: 0-2) (2 end)
        });
    });


    // Add todoField event listeners to the new (all) todoFields
    todoFields = document.querySelectorAll(".todo-text");

    getTodoFields(todoFields)

    todoFields.forEach(function(field) {
        field.addEventListener('input', function(event) {
            console.log("task row, listening for added todo input(5550)");
            dataId = event.target.getAttribute('data-id');  // Get the todo index
            const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)

            console.log("todoCollection[dataId].value = " + todoCollection[dataId].value)
            console.log("currentMondayTodos.length = " + currentMondayTodos.length)
            console.log("currentWednesdayTodos.length = " + currentWednesdayTodos.length)

            // Check if edited todo already exists (isEditDuplicate)

            // checkForTodoDateDuplicates(defaultDate, defaultTodoText, dateCollection, todoCollection, dataId);

            console.log("isEditDuplicate = " + isEditDuplicate);
            if (isEditDuplicate === true) {
                console.log("isEditDuplicate === true")
                alert("That task may already exists!")
            }

            // Edit plannedTodos (object) when todo (DOM-list) is changed

            if (todoCollection[dataId].value === "ooa") {

            }

            else if (todoCollection[dataId].value !== '') {

                // Om måndag-array-objekt finns, gå igenom alla måndags-objekt,    OM måndags-objekt-datum är lika plannedTodos-objekt-datum     &&  måndags-objekt-todo är lika plannedTodos-objekt-todo (för aktuell todo-liste-rad)  DÅ  (Hämta todo-värden från DOM-raden och lägg in i week schedule (för måndags-objekten i tur och ordning, efter "i"))
                if (currentMondayTodos.length > 0) {
                    for (let i = 0; i < currentMondayTodos.length; i++) {
                        // Hitta currentMondayTodos-objekt som är lika plannedTodos[dataId]

                        // if (currentMondayTodos[i].date === plannedTodos[dataId].date && currentMondayTodos[i].todo === plannedTodos[dataId].todo)

                            if (currentMondayTodos[i]?.date === plannedTodos[dataId]?.date && currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo)
                            {
                            console.log("Monday todo change ooa");
                            console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                            console.log("i (mon) = " + i);
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
                            console.log("i (tue) = " + i);
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
                            console.log("Wednesday todo change ooa (in dynamic div)");
                            console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                            console.log("i (wed) = " + i);
                            currentWednesdayTodos[i].todo = todoCollection[dataId].value;
                            currentWednesdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }

                if (currentThursdayTodos.length > 0) {
                    for (let i = 0; i < currentThursdayTodos.length; i++) {
                        // Hitta currentThursdayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentThursdayTodos[i]?.date === plannedTodos[dataId]?.date && currentThursdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            console.log("Thursday todo change ooa (in dynamic div)");
                            console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                            console.log("i (thu) = " + i);
                            currentThursdayTodos[i].todo = todoCollection[dataId].value;
                            currentThursdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }
                if (currentFridayTodos.length > 0) {
                    for (let i = 0; i < currentFridayTodos.length; i++) {
                        // Hitta currentFridayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentFridayTodos[i]?.date === plannedTodos[dataId]?.date && currentFridayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            console.log("Friday todo change ooa (in dynamic div)");
                            console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                            console.log("i (fri) = " + i);
                            currentFridayTodos[i].todo = todoCollection[dataId].value;
                            currentFridayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }
                if (currentSaturdayTodos.length > 0) {
                    for (let i = 0; i < currentSaturdayTodos.length; i++) {
                        // Hitta currentSaturdayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentSaturdayTodos[i]?.date === plannedTodos[dataId]?.date && currentSaturdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            console.log("Saturday todo change ooa (in dynamic div)");
                            console.log("todoCollection[dataId].value (2) = " + todoCollection[dataId].value)
                            console.log("i (sat) = " + i);
                            currentSaturdayTodos[i].todo = todoCollection[dataId].value;
                            currentSaturdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }
                if (currentSundayTodos.length > 0) {
                    for (let i = 0; i < currentSundayTodos.length; i++) {
                        // Hitta currentSundayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentSundayTodos[i]?.date === plannedTodos[dataId]?.date && currentSundayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            console.log("Sunday todo change ooa (in dynamic div)");
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
            isEditDuplicate = false;
        });
    });

}

//
//
// Add eventlistener to new todo-date-div-elements(?)



//
//


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
        const userCreatedDateField = document.createElement('textarea');
        userCreatedDateField.id = `todo-${i}-date`;
        userCreatedDateField.classList.add('todo-date');
        userCreatedDateField.setAttribute('type', 'text');
        userCreatedDateField.setAttribute('data-id', i);
        userCreatedDateField.setAttribute('data-key', 'date');
        userCreatedDateField.setAttribute('name', 'date');
        userCreatedDateField.placeholder = i === 0 ? 'Next date...' : ''; // Set placeholder for the first one
        dynamicTodoContainer.appendChild(userCreatedDateField);

        // Create and append the second textarea for text
        const userCreatedTextField = document.createElement('textarea');
        userCreatedTextField.id = `todo-${i}-text`;
        userCreatedTextField.classList.add('todo-text');
        userCreatedTextField.setAttribute('type', 'text');
        userCreatedTextField.setAttribute('data-id', i);
        userCreatedTextField.setAttribute('data-key', 'todo');
        userCreatedTextField.setAttribute('name', 'text');
        userCreatedTextField.placeholder = i === 0 ? 'Planned todo...' : ''; // Set placeholder for the first one
        dynamicTodoContainer.appendChild(userCreatedTextField);

        // Create and append the color div
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('todo-color');
        colorDiv.setAttribute('data-id', i);
        colorDiv.setAttribute('data-key', 'color');
        colorDiv.setAttribute('name', 'color');
        dynamicTodoContainer.appendChild(colorDiv);

        // Create and append the recurring div
        const recurringDiv = document.createElement('div');
        recurringDiv.classList.add('todo-rec');
        recurringDiv.setAttribute('data-id', i);
        recurringDiv.setAttribute('data-key', 'rec');
        recurringDiv.setAttribute('name', 'rec');
        dynamicTodoContainer.appendChild(recurringDiv);

        // Append the new container to the main container
        wrapperContainer.appendChild(dynamicTodoContainer);
    }
}

// _ _ _

// dataId = getDataId(dataId)
// document.getElementById(`todo-${dataId}-text`).addEventListener("keydown", function (e) {
//     const textarea = e.target;
//     const currentInput = textarea.value + e.key; // Current value + key being pressed

//     // If the condition is true and the input is a blocked date
//     if (isConditionTrue && isBlockedDate(currentInput)) {
//         e.preventDefault(); // Prevent the key press
//         alert("This date is not allowed.");
//     }
// });

// aaaaaaa

// // Condition to block specific dates
// function isBlockedDate(inputValue) {
//     // Check if the date matches the blocked format
//     const regexBlocked = /^\d{4}-\d{2}-\d{2}$/; // Match "YYYY-MM-DD" format
//     const isRegexMatch = regexBlocked.test(inputValue);

//     // Check if the exact date is in the blockedDates array
//     const isExactMatch = blockedDates.includes(inputValue);

//     // return isRegexMatch || isExactMatch;
//     return isRegexMatch || isExactMatch;
// }

// aaaaaaa

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

let pastPlansTextArea = document.getElementById('past-tasks-input-field');
var pastPlansTextString;
var pastTasksArray = [];
// var pastTasksSet = new Set();
var pastPlanStringToSave = '';
var pastPlanStringToSaveUpdate = '';

// function sortPastTasksSet(pastTasksSet) {
//     pastTasksArray = pastTasksSet;
//     sortObjectsArrayByDateAndTime(pastTasksArray);
//     pastTasksSet = pastTasksArray;
//     pastTasksArray = [];
//     return pastTasksSet;
// }


function ifPlannedTodosIsPastPutToPastPlans() {

    // 1. Check if plannedTodos is past
    // 2. Put to past plans
    // 3. Update plannedTodos && dateCollection && todoCollection todoColorCollection (&& currentDayTodos && currentDayTodosItems ?)


    console.log("ifPlannedTodosIsPastPutToPastPlans() körs");

    // pastPlansTextArea.innerHTML = '';
    // pastPlansTextArea.value = '';

    // Add past plans to textarea
    plannedTodos.forEach(todoRow => {
        if (todoRow.date < dateDisplay.textContent && todoRow.isRecurring !== true) {
            pastPlansTextString = todoRow.date + "    " + todoRow.todo + "    " + returnColorText(todoRow.color) + "\n";
            // pastPlansTextString = todoRow.date + "    " + todoRow.todo + "    " + returnColorText(todoRow.color) + "\n";
            // pastPlansTextString = todoRow.date + "    " + todoRow.todo + "    " + returnColorText(todoRow.color) + ", ";
            pastTasksSet.add(pastPlansTextString)
            console.log("pastPlansTextString = " + pastPlansTextString);
            // for (let i = 0; i < pastTasksSet.size; i++) {
            //     pastTasksArray.push([...pastTasksSet][i]);
            //     // pastPlansTextArea.value = [...pastTasksSet][i];
            // }
            // sortPastTasksSet(pastTasksSet);
            pastPlansTextArea.innerHTML = [...pastTasksSet]
            pastPlansTextArea.innerHTML = pastPlansTextArea.innerHTML.replaceAll(/,+/g, "")
            pastPlansTextArea.value  = [...pastTasksSet]
            pastPlansTextArea.value = pastPlansTextArea.innerHTML.replaceAll(/,+/g, "")
        }
    })
        // pastTasksArray = [];
        pastPlanStringToSave = `${pastPlansTextArea.innerHTML}`
    }

let clearPastButton = document.getElementById('clear-past-tasks');

var past_data;
clearPastButton.addEventListener('click', () => {
    pastPlansTextArea.innerHTML = '';
    pastPlansTextArea.value = '';
    pastTasksSet = new Set();
    pastPlanStringToSave = '';
    past_data = '';
})

// Old todos (end)


// Hur hantera data som finns i input-fält (i browsern) vid uppstart? (2024-10-07)

// window.addEventListener("load", (event) => {
// window.addEventListener("DOMContentLoaded", function () {
//     console.log("DOMContentLoaded - loaded");
//     // document.getElementById("todo-0-date").innerHTML = ``;
//     // document.getElementById("todo-1-date").innerHTML = ``;
//     // document.getElementById("todo-2-date").innerHTML = ``;
//     // document.getElementById("todo-0-text").innerHTML = ``;
//     // document.getElementById("todo-1-text").innerHTML = ``;
//     // document.getElementById("todo-2-text").innerHTML = ``;
// });

    // document.addEventListener("DOMContentLoaded", () => {
        window.onload = () => {
    console.log("page is fully loaded");

    // clear the DOM todo data
    for (let i = 0; i < dateCollection.length; i++) {
        dateCollection[i].value = '';
        dateCollection[i].innerHTML = '';
        todoCollection[i].value = '';
        todoCollection[i].innerHTML = '';
        todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
    }

    // console.log("plannedTodos before DOM update" + JSON.stringify(plannedTodos))
    console.log("dateCollection[0].value (alpha) = " + dateCollection[0].value)
    updatePlannedTodosWithDomData();
    ifPlannedTodosIsPastPutToPastPlans();
    // updateCurrentWeekSchedule();
    console.log("plannedTodos after DOM update" + JSON.stringify(plannedTodos))
    console.log("object updated with DOM data?");

    // Loading delay (load file)
    // let loadButton = document.getElementById("load");
    // loadButton.disabled = false;
    // document.body.style.cursor = 'default';

//   });
        }

function updatePlannedTodosWithDomData() {

    // if no localStorage saved



    // if localStorage exists!?

    console.log("updatePlannedTodosWithDomData() körs")

    if (dateCollection.length > 0) {
        console.log("dateCollection[0].value (1) = " + dateCollection[0].value)
        console.log("dateCollection.length = " + dateCollection.length)

        for (let i = 0; i < dateCollection.length; i++) {
            // dateCollection[i].value = dateCollection[i].innerHTML
            // todoCollection[i].value = todoCollection[i].innerHTML

            console.log("dateCollection[0].value (2) = " + dateCollection[i].value)

            console.log("dateCollection[i].value = " + dateCollection[i].value)
            if (dateCollection[i].value !== "") {

                dateCollection[i].value = "";
                dateCollection[i].innerHTML = "";
                todoCollection[i].value = "";
                todoCollection[i].innerHTML = "";

                document.getElementById("todo-`${0}`-date").innerHTML = ``;
                document.getElementById("todo-0-text").innerHTML = ``;

                // document.getElementById('add-todo-text').value = "";

                // plannedTodos[i].date = dateCollection[i].value;
                // plannedTodos[i].todo = todoCollection[i].value;
                // plannedTodos[i].color = "grayColor";
                // plannedTodos[i].isEmpty = false;

                // _ _ _

                // plannedTodos.push({
                //     date: dateCollection[i].value,
                //     todo: todoCollection[i].value,
                //     color: "grayColor",
                //     isRecurring: false,
                //     dataDate: weekdayNameToWeekDayNumber(dateCollection[i]),
                //     isEmpty: false
                // })
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




// Save plan

    // _ _ _
    // _ _ _
// let pastPlanStringToSave = `${pastPlansTextArea.innerHTML}`

    // _ _ _
    // _ _ _


// function save_func(plannedTodos) {

    // Use a delimiter to concatenate the strings (JSON.stringify(plannedTodos) and pastPlanStringToSave)
    var delimiter = "<DELIMITER>";

    // // var fileName = document.getElementById('file-name').value;
    // fileName = document.getElementById('file-name').value;
    // console.log("fileName (1.0) = " + fileName);
    // var fullFileName = fileName + ".txt";
    // console.log("fullFileName (1) = " + fullFileName);

function save_func() {
    // var data_string = JSON.stringify(plannedTodos)

    // _ _ _

    // if (pastPlanStringToSave != undefined || pastPlanStringToSave != null) {
    //     var data_string_past = JSON.stringify(pastPlanStringToSave)
    //     var past_file = new Blob([data_string_past],{type:"text"})
    //     var anchorTwo = document.createElement("a");
    //     anchorTwo.href = URL.createObjectURL(past_file);
    //     anchorTwo.download = "save_past.txt";
    //     anchorTwo.click();
    // }

    // _ _ _
    // Get the file name from the input field
    var fileName = document.getElementById('file-name').value;
    console.log("fileName (1.0) = " + fileName);
    var fullFileName = fileName + ".txt";
    console.log("fullFileName (1) = " + fullFileName);

    // Check if the file name is not empty
    if (!fileName) {
        alert("Please enter a file name.");
        return;
    }


    // _ _ _

    var planned_data = JSON.stringify(plannedTodos)
    // var past_data = JSON.stringify(pastPlanStringToSave)
    // var past_data = pastPlanStringToSave
    past_data = pastPlanStringToSave

    console.log("planned_data = " + planned_data);
    console.log("past_data = " + past_data);

    // var data_string = planned_data + "," + past_data;

    // _ _ _


        // // Use a delimiter to concatenate the strings
        // var delimiter = "<DELIMITER>";
        let combinedString = planned_data + delimiter + past_data;

        // alert("Test save-button");
        var file = new Blob([combinedString],{type:"text/plain"})
        var anchor = document.createElement("a");
        // I want to create a file from this location: "file:///C:/Users/filip/Desktop/Personal_Efficiency_App/index.html"
        anchor.href = URL.createObjectURL(file);
        // anchor.download = "saved_plans.txt";
        anchor.download = fullFileName;
        console.log("fullFileName (2) = " + fullFileName);
        console.log("fileName (2.0) = " + fileName);
        anchor.click();

    // _ _ _

    // alert("Test save-button");
    // var file = new Blob([data_string],{type:"text"})
    // var anchor = document.createElement("a");
    // // I want to create a file from this location: "file:///C:/Users/filip/Desktop/Personal_Efficiency_App/index.html"
    // anchor.href = URL.createObjectURL(file);
    // anchor.download = "save.txt";
    // anchor.click();

    // _ _ _

    // console.log("plannedTodos = " + plannedTodos)
    // console.log("data_string = " + data_string)
}

// _ _ _
// _ _ _

// function save_func(plannedTodos) {
//     // Convert the plannedTodos object to a JSON string
//     var data_string = JSON.stringify(plannedTodos, null, 2); // Use null, 2 for better readability (indentation)

//     // Display a message for debugging
//     alert("Test save-button");

//     // Create a Blob object with the JSON string
//     var file = new Blob([data_string], { type: "application/json" }); // Set MIME type to JSON

//     // Create a temporary anchor element
//     var anchor = document.createElement("a");

//     // Create an object URL for the Blob and set it as the anchor's href
//     anchor.href = URL.createObjectURL(file);

//     // Set the download attribute with a filename
//     anchor.download = "plannedTodos.json";

//     // Trigger a click on the anchor to start the download
//     anchor.click();

//     // Clean up the object URL to avoid memory leaks
//     URL.revokeObjectURL(anchor.href);
// }


// _ _ _
// _ _ _

// async function save() {
//     let stream = await fileHandle.createWritable();
//     await stream.write(JSON.stringify(plannedTodos));
//     await stream.close();
// }

// async function save() {
async function saveAs() {
    try {
        // Get the file name from the input field
        const fileNameElement = document.getElementById('file-name');
        if (!fileNameElement) {
            alert("File name element not found.");
            return;
        }

        // const fileName = fileNameElement.innerText || fileNameElement.textContent;
        const fileName = fileNameElement.value;
        if (!fileName) {
            alert("Please enter a file name.");
            return;
        }

        const fullFileName = fileName.trim() + ".txt";
        console.log("fullFileName = " + fullFileName);

        // Create the options object for the save file picker
        const options = {
            suggestedName: fullFileName,
            types: [{
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt'],
                },
            }],
        };

        // Open the save file picker and get the file handle
        const fileHandle = await window.showSaveFilePicker(options);

        // Prepare the data to be saved
        const planned_data = JSON.stringify(plannedTodos);
        const past_data = pastPlanStringToSave;
        const combinedString = planned_data + delimiter + past_data;

        // Create a writable stream and write the data to the file
        const writableStream = await fileHandle.createWritable();
        await writableStream.write(combinedString);
        await writableStream.close();

        console.log("File saved successfully!");
    } catch (error) {
        console.error("An error occurred while saving the file:", error);
    }
}

//     try {
//         // Prompt the user to select a file location and name
//         const options = {
//             types: [{
//                 description: 'Text Files',
//                 accept: {
//                     'text/plain': ['.txt'],
//                 },
//             }],
//         };

//         const fileHandle = await window.showSaveFilePicker(options);

//         // Get the file name from the input field
//         var fileName = document.getElementById('file-name').value;
//         console.log("fileName (1.0) = " + fileName);
//         var fullFileName = fileName + ".txt";
//         console.log("fullFileName (1) = " + fullFileName);

//         // Check if the file name is not empty
//         if (!fileName) {
//             alert("Please enter a file name.");
//             return;
//         }

//         var planned_data = JSON.stringify(plannedTodos);
//         var past_data = pastPlanStringToSave;
//         let combinedString = planned_data + delimiter + past_data;

//         // Create a writable stream
//         const writableStream = await fileHandle.createWritable();

//         // Write the combined data to the file
//         await writableStream.write(combinedString);

//         // Close the writable stream
//         await writableStream.close();
//         console.log("File saved successfully!");
//     } catch (error) {
//         console.error("An error occurred while saving the file:", error);
//     }
// }


// // saveAs plan
// async function saveAs() {
//     try {
//         // Prompt the user to select a file location and name
//         const options = {
//             types: [{
//                 description: 'Text Files',
//                 accept: {
//                     'text/plain': ['.txt'],
//                 },
//             }],
//         };

//         const fileHandle = await window.showSaveFilePicker(options);

//         // Get the file name from the input field
//         var fileName = document.getElementById('file-name').value;
//         console.log("fileName (1.0) = " + fileName);
//         var fullFileName = fileName + ".txt";
//         console.log("fullFileName (1) = " + fullFileName);

//         // Check if the file name is not empty
//         if (!fileName) {
//             alert("Please enter a file name.");
//             return;
//         }

//         var planned_data = JSON.stringify(plannedTodos);
//         var past_data = pastPlanStringToSave;
//         let combinedString = planned_data + delimiter + past_data;

//         // Create a writable stream
//         const writableStream = await fileHandle.createWritable();

//         // Write the combined data to the file
//         await writableStream.write(combinedString);

//         // Close the writable stream
//         await writableStream.close();
//         console.log("File saved successfully!");
//     } catch (error) {
//         console.error("An error occurred while saving the file:", error);
//     }

//     // fileHandle = await window.showSaveFilePicker();
//     // save();
// }

// _ _ _
// _ _ _

// // Load plan
// async function loadPlan() {
//     let [fileHandle] = await window.showOpenFilePicker({
//         types: [
//             {
//                 // description: 'Images',
//                 description: 'JS-object (date, todo-text, color and isEmpty)',
//                 accept: {
//                     // 'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
//                     'text/*': ['.txt', '.json'],
//                 }
//             },
//         ],
//         excludeAcceptAlloption: true,
//         multiple: false
//     });
//     let fileData = await fileHandle.getFile();
//     let text = await fileData.text();
//     console.log(text);
//     console.log("typeof text = " + typeof text);

//     // Convert the loaded JSON.stringify(plannedTodos) (= "text" (string)) into an object (-> "plannedTodos" (object))
//     plannedTodos = JSON.parse(text)
//     console.log("JSON.stringify(plannedTodos) (loaded) = " + JSON.stringify(plannedTodos));
//     // _ _ _

//     // Idé (2025-01-14): kör addTaskToList-funktionalitet (om plannedTodos[i].date >= today...) ((for-loop))

//     ifPlannedTodosIsPastPutToPastPlans();
//     updateCurrentWeekSchedule();
//     updateRecurringPlannedTodos(plannedTodos);

// }


function getExactYearDifference(todoDate, currentDate) {
    console.log("getExactYearDifference() körs")
    let diff = currentDate.getFullYear() - todoDate.getFullYear();

    // If the month/day of todoDate hasn't passed yet in the current year, subtract 1
    if (
        currentDate.getMonth() < todoDate.getMonth() ||
        (currentDate.getMonth() === todoDate.getMonth() && currentDate.getDate() < todoDate.getDate())
    ) {
        diff--;
    }

    return diff;
}

function isDayLessThan29(dateString) {
    console.log("isDayLessThan29() körs")
    // Parse the date string to extract the day component
    const dateParts = dateString.split('-');
    const day = parseInt(dateParts[2], 10);

    // Check if the day is less than 29
    return day < 29;
}

function ensureRecurringMonthDate(todoDateLoad, currentDate) {
    console.log("ensureRecurringMonthDate() körs")
    // Parse the loaded date and current date
    const loadedDate = new Date(todoDateLoad);
    const current = new Date(currentDate);

    console.log("loadedDate (old date) = " + loadedDate);
    console.log("current (today) = " + current);

    // Initialize the new date with the loaded date
    let newDate = new Date(todoDateLoad);

    console.log("newDate (1) (date to be updated) = " + newDate);

    // Check if the loaded date is in the past
    if (loadedDate < current) {
        // Check if the same day of the current month is in the future
        newDate = new Date(current.getFullYear(), current.getMonth(), loadedDate.getDate());

        console.log("newDate (2a) (date to be updated) = " + newDate);

        if (newDate < current) {
            // If the same day of the current month is in the past, set to the next month (this year)
            newDate = new Date(current.getFullYear(), current.getMonth() + 1, loadedDate.getDate());
            console.log("newDate (2b) (date to be updated) = " + newDate);
        }
    }

    let newDateToBeUpdated = formatDate(newDate);

    // let newDateToBeUpdated = newDate.toISOString().split('T')[0];
    console.log("newDateToBeUpdated = " + newDateToBeUpdated);

    // Ensure the new date is in the 'YYYY-MM-DD' format
    return newDateToBeUpdated;
}

var diffDays = '';

function calculateDaysBetweenDates(smallDateString1, largeDateString2) {
    // Parse the two date strings
    const date1 = new Date(smallDateString1);
    const date2 = new Date(largeDateString2);

    // Get the time values in milliseconds
    const time1 = date1.getTime();
    const time2 = date2.getTime();

    // Calculate the difference in milliseconds
    const differenceInMillis = Math.abs(time2 - time1);

    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);

    diffDays = differenceInDays

    return diffDays;
}

// function getRemainderDividingWithSeven(number) {
//     return number % 7
// }

function getRemainderDividingWithFourteen(number) {
    return number % 14
}

function getRemainderDividingWithTwentyone(number) {
    return number % 21
}

function getRemainderDividingWithTwentyeight(number) {
    return number % 28
}

function ensureRecurringWeekDate(todoDateLoad, currentDate, weekPeriod) {
    console.log("ensureRecurringWeekDate() körs");
    const loadedDate = new Date(todoDateLoad);
    console.log("loadedDate = " + loadedDate);
    const current = new Date(currentDate);
    console.log("current = " + current);

    let loadedDataDate = weekdayNameToWeekDayNumberMultiDuration(loadedDate); // 0-6
    console.log("loadedDataDate = " + loadedDataDate);

    loadedDataDate = Number(loadedDataDate);

    let currentDataDate = weekdayNameToWeekDayNumberMultiDuration(current); // 0-6
    console.log("currentDataDate = " + currentDataDate);

    currentDataDate = Number(currentDataDate);

    // Hitta datum med samma dataDate i aktuell vecka,
    // Om hittat datum < current -> hittat datum + 7 dagar (weekPeriod === 'w1')

    // _ _ _

    // // Create a Date object from the given date string
    // const date = new Date(dateString);

    // // Add the specified number of days to the date
    // date.setDate(date.getDate() + daysToAdd);

    // // Convert the new date back to 'YYYY-MM-DD' format
    // const newDateString = date.toISOString().split('T')[0];

    // _ _ _

    console.log("weekdayNameToWeekDayNumberMultiDuration(loadedDate) = " + weekdayNameToWeekDayNumberMultiDuration(loadedDate));

    let newDate = '';
    let addDaysW1 = '';
    let addDaysW2 = '';
    let addDaysW3 = '';
    let addDaysW4 = '';

    console.log("newDate (1 - w) (date to be updated) = " + newDate);



    // Check if the loaded date is in the past
    if (loadedDate < current) {
        console.log("loadedDate < current");
        console.log("weekPeriod = " + weekPeriod);

        // if (weekPeriod === 'w1') {
        //     console.log("w1 ooa");

        //     console.log("currentDataDate = " + currentDataDate);
        //     console.log("loadedDataDate = " + loadedDataDate);

            // _ _ _

            // let recW1DateForThisWeek = weekDates[loadedDataDate]
            // console.log("recW1DateForThisWeek = " + recW1DateForThisWeek);

            // if (recW1DateForThisWeek < dateDisplay.textContent) {


            //     // let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
            //     let convertedW1DateFromFullDate = new Date(recW1DateForThisWeek);
            //     convertedW1DateFromFullDate.setDate(convertedW1DateFromFullDate.getDate() + 6);
            //     let convertedW1DateFromFullDateString = convertedW1DateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

            //     newDate = convertedW1DateFromFullDateString;
            // }

            // _ _ _

            // else if (recW1DateForThisWeek >= dateDisplay.textContent)
            // calculateDaysBetweenDates(loadedDate, current);

            // _ _ _

        //     console.log("diffDays = " + diffDays);

        //     let getRemainder = '';

        //     if (diffDays < 7) {
        //         getRemainder = 7-diffDays;
        //         // getRemainder = getRemainder - 1;
        //         console.log("W1 getRemainder (< 7) = " + getRemainder);
        //     }

        //     else if (diffDays >= 7) {
        //         getRemainder = 7-getRemainderDividingWithSeven(diffDays);
        //         // getRemainder = getRemainder - 1;
        //         console.log("W1 getRemainder (>= 7) = " + getRemainder);
        //         if (diffDays % getRemainder === 0) {
        //             getRemainder = 0;
        //         }
        //     }

        //     console.log("getRemainder = " + getRemainder);

        //     addDaysW1 = getRemainder;

        //     newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW1);
        // }

        // _ _ _

        if (weekPeriod === 'w1') {
            console.log("w1 ooa");

            console.log("currentDataDate = " + currentDataDate);
            console.log("loadedDataDate = " + loadedDataDate);

            if (loadedDataDate < currentDataDate) {
                let dayDifference = currentDataDate-loadedDataDate
                addDaysW1 = 7-Math.abs(dayDifference); // 2025-03-03 Notering: Kan bli större än 7 (om ej absolut-belopp)
                console.log()
            } else if (loadedDataDate === currentDataDate) {
                addDaysW1 = 0;
            } else if (loadedDataDate > currentDataDate) {
                addDaysW1 = Math.abs(currentDataDate-loadedDataDate); // 2025-03-03 Notering: Kan bli negativt 7 - - x (om ej absolut-belopp)
            }

            console.log("addDaysW1 = " + addDaysW1);

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW1);
        }

        // _ _ _

        else if (weekPeriod === 'w2') {
            console.log("w2 ooa");

            console.log("currentDataDate = " + currentDataDate);
            console.log("loadedDataDate = " + loadedDataDate);

            calculateDaysBetweenDates(loadedDate, current);

            console.log("diffDays = " + diffDays);

            let getRemainder = '';

            if (diffDays < 14) {
                getRemainder = 14-diffDays;
            }

            else if (diffDays >= 14) {
                getRemainder = 14-getRemainderDividingWithFourteen(diffDays);
                if (diffDays % getRemainder === 0) {
                    getRemainder = 0;
                }
            }

            console.log("getRemainder = " + getRemainder);

            addDaysW2 = getRemainder;

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW2);
        }

        // 2025-03-04: OBS! Se över!?
        else if (weekPeriod === 'w3') {
            console.log("w3 ooa");

            console.log("currentDataDate = " + currentDataDate);
            console.log("loadedDataDate = " + loadedDataDate);

            calculateDaysBetweenDates(loadedDate, current);

            console.log("diffDays = " + diffDays);

            let getRemainder = '';

            if (diffDays < 21) {
                console.log("diffDays < 21");
                getRemainder = 21-diffDays;
                addDaysW3 = getRemainder;
                console.log("addDaysW3 = " + addDaysW3);
            }

            // else if (diffDays >= 21) {
            else if (diffDays >= 21) {
                console.log("diffDays >= 21");
                getRemainder = 21-getRemainderDividingWithTwentyone(diffDays);

                console.log("getRemainderDividingWithTwentyone(diffDays) = " + getRemainderDividingWithTwentyone(diffDays));

                console.log("diffDays % getRemainder = " + diffDays % getRemainder);

                // let daysToAddW3 = Number(diffDays) % Number(getRemainder);
                // console.log("daysToAddW3 (1) = " + daysToAddW3);

                // console.log("Number(diffDays) % Number(getRemainder) == 0 = " + Number(diffDays) % Number(getRemainder) == 0);

                // console.log("Number(diffDays) % Number(getRemainder) === 0 = " + Number(diffDays) % Number(getRemainder) === 0);




                // _ _ _

                // if (daysToAddW3 === 0) {
                //     daysToAddW3 = daysToAddW3 - 21;
                //     getRemainder = daysToAddW3.toString();
                //     console.log("daysToAddW3 (2) = " + daysToAddW3);
                // }

                // _ _ _

                // if (diffDays % getRemainder === 0) {
                //     getRemainder = 0;
                // }

                // _ _ _

                // let dateForLoadedDataDateCurrentWeek = weekDates[loadedDataDate];
                // let currentDayDate = new Date(current.getFullYear(), current.getMonth(), current.getDate());

                // _ _ _

                // if (diffDays % getRemainder === 0 && dateForLoadedDataDateCurrentWeek === currentDayDate) {
                console.log("getRemainder === diffDays = " + getRemainder === diffDays);
                    if (diffDays % getRemainder === 0 && getRemainder === diffDays) {
                        console.log("Here === 0 (1)")
                    getRemainder = '';
                    } else if (diffDays % getRemainder === 0 && getRemainder !== diffDays) {
                        console.log("Here === 0 (2)")
                        getRemainder = 21-getRemainderDividingWithTwentyone(diffDays);
                    }

                // _ _ _
                // För att undvika att
                // if (diffDays % getRemainder === 0) {

                //     // getRemainder = 0;
                //     let dateForLoadedDataDateCurrentWeek = weekDates[loadedDataDate]
                // }


                // _ _ _
            }

            console.log("getRemainder = " + getRemainder);

            addDaysW3 = getRemainder;

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW3);
        }
        else if (weekPeriod === 'w4') {
            console.log("w4 ooa");

            console.log("currentDataDate = " + currentDataDate);
            console.log("loadedDataDate = " + loadedDataDate);

            calculateDaysBetweenDates(loadedDate, current);

            console.log("diffDays = " + diffDays);

            let getRemainder = '';

            if (diffDays < 28) {
                getRemainder = 28-diffDays;
                addDaysW4 = getRemainder;
            }

            else if (diffDays >= 28) {
                getRemainder = 28-getRemainderDividingWithTwentyeight(diffDays);
                // if (diffDays % getRemainder === '0') {
                //     getRemainder = '';
                // }

                if (diffDays % getRemainder === 0 && getRemainder === diffDays) {
                    console.log("Here === 0 (1)")
                getRemainder = '';
                } else if (diffDays % getRemainder === 0 && getRemainder !== diffDays) {
                    console.log("Here === 0 (2)")
                    getRemainder = 28-getRemainderDividingWithTwentyone(diffDays);
                }

            }

            console.log("getRemainder = " + getRemainder);

            addDaysW4 = getRemainder;

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW4);
        }
    }

    let newDateToBeUpdated = formatDate(newDate);
    console.log("newDateToBeUpdated = " + newDateToBeUpdated);

    return newDateToBeUpdated;

}


// _ _ _

// function getExactMonthDifference(todoDate, currentDate) {
//     let diff = currentDate.getFullYear() - todoDate.getFullYear();

//     // If the month/day of todoDate hasn't passed yet in the current year, subtract 1
//     if (
//         currentDate.getMonth() < todoDate.getMonth() ||
//         (currentDate.getMonth() === todoDate.getMonth() && currentDate.getDate() < todoDate.getDate())
//     ) {
//         diff--;
//     }

//     return diff;
// }

// _ _ _

// 2025-03-03: Ta bort 9-gräns
// function hasLessThanNineTodos(plannedTodos, targetDate) {
//     console.log("hasLessThanNineTodos() körs");

//     // console.log("JSON.stringify(plannedTodos) = " + JSON.stringify(plannedTodos));
//     console.log("targetDate = " + targetDate);

//     // Filter todos (in the objects array, that has the target date) by the target date
//     let todosForDate = plannedTodos.filter(todo => todo.date === targetDate);
//     // const todosForDate = plannedTodos.filter(todo => todo && todo.date === targetDate);

//     console.log("todosForDate = " + todosForDate);
//     console.log("JSON.stringify(todosForDate) = " + JSON.stringify(todosForDate));
//     console.log("todosForDate.length = " + todosForDate.length);
//     // console.log("todosForDate.length < 9 = " + todosForDate.length < 9);

//     // // Check if the number of todos for the target date is less than 9
//     // return todosForDate.length < 9;
//     return todosForDate.length;
// }


// _ _ _

function checkTodoText(todoText) {
    // Regex to match 🔁#D
    const patternFalse = /🔁#D/;
    // Regex to match 🔁D
    const patternTrue = /🔁D/;

    // Check if the todo text matches the false pattern
    if (patternFalse.test(todoText)) {
        return false;
    }

    // Check if the todo text matches the true pattern
    if (patternTrue.test(todoText)) {
        return true;
    }

    // Default return value if neither pattern matches
    return null;
}

// Function to read the Blob (file) content and separate the strings

function readFile(file) {
    const reader = new FileReader();

    reader.onload = function(event) {
        const result = event.target.result;
        console.log("Concatenated string with delimiter:", result);

        // Split the result using the delimiter
        let [planned_data, past_data] = result.split(delimiter);

        console.log("String 1 (planned_data):", planned_data);
        console.log("String 2 (past_data):", past_data);



        plannedTodos = planned_data;

        // Convert the loaded JSON.stringify(plannedTodos) (= "text" (string)) into an object (-> "plannedTodos" (object))
        planned_data = JSON.parse(planned_data)
        plannedTodos = planned_data;
        console.log("JSON.stringify(plannedTodos) (= planned_data) = " + JSON.stringify(plannedTodos));

        ifPlannedTodosIsPastPutToPastPlans();

        let plannedTodosOnLoad = [];

        plannedTodos.forEach(todoRow => {
            let todoDateLoad = new Date(todoRow.date);  // Convert to Date object
            console.log("todoDateLoad = " + todoDateLoad);
            let currentDate = new Date(dateDisplay.textContent); // Convert dateDisplay to Date

            // let formatTodoDateLoad = formatDate(todoDateLoad)
            // console.log("formatTodoDateLoad = " + formatTodoDateLoad);
            // hasLessThanNineTodos(plannedTodos, formatTodoDateLoad);
            // console.log("hasLessThanNineTodos(plannedTodos, formatTodoDateLoad) = " + hasLessThanNineTodos(plannedTodos, formatTodoDateLoad));

            if (todoDateLoad >= currentDate && todoRow.isRecurring !== true) {
                console.log("todoDateLoad.date >= dateDisplay.textContent");
                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring year is in the future: Update recurring todos (year)
            else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'y') {
                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring year is in the past: update the year (and dataDate) to the coming year (and weekday number)
            else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'y') {
                console.log("todoRowLoad.date < dateDisplay.textContent");

                console.log("todoDateLoad.getFullYear() = " + todoDateLoad.getFullYear())

                let yearDifference = getExactYearDifference(todoDateLoad, currentDate);
                console.log("yearDifference = " + yearDifference);

                // Add "yearDifference" year
                todoDateLoad.setFullYear(todoDateLoad.getFullYear() + yearDifference);

                // Format back to YYYY-MM-DD
                let updatedDate = todoDateLoad.toISOString().split("T")[0];
                console.log("Updated Date (1) = " + updatedDate);

                if (updatedDate >= dateDisplay.textContent) {
                    console.log("updatedDate >= currentDate")

                    // updatedDate = todoDate.toISOString().split("T")[0];
                    console.log("Updated Date (2) = " + updatedDate);

                    // Update the todoRow date
                    todoRow.date = updatedDate;
                    todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);
                }

                // If todoDateLoad < currentDate, but same year, add 1 year
                else if (updatedDate < dateDisplay.textContent) {
                    console.log("updatedDate < currentDate")
                    todoDateLoad.setFullYear(todoDateLoad.getFullYear() + 1);
                    updatedDate = todoDateLoad.toISOString().split("T")[0];
                    console.log("Updated Date (3) = " + updatedDate);
                    // Update the todoRow date
                    todoRow.date = updatedDate;
                    todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);
                }

                // // Update the todoRow date
                // todoRow.date = updatedDate;

                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring month is in the future: Update recurring todos (month)
            else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'm' && isDayLessThan29(todoRow.date) === true) {
                console.log("todoDateLoad >= currentDate (M)")
                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring month is in the past: update the month (and dataDate) to the coming month (and weekday number)
            else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'm' && isDayLessThan29(todoRow.date) === true) {
                console.log("todoRowLoad.date < dateDisplay.textContent");

                // Format back to YYYY-MM-DD
                let updatedDate = ensureRecurringMonthDate(todoDateLoad, currentDate);

                console.log("Updated Date (m1) = " + updatedDate);

                todoRow.date = updatedDate;
                todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);
                console.log("new dataDate = " + todoRow.dataDate);

                plannedTodosOnLoad.push(todoRow);
            }

            // If the recurring week is in the future: Update recurring todos (week)
            else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'w' && todoRow.weekperiod !== '') {
                console.log("todoDateLoad >= currentDate (W)")
                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring week is in the past: update the week (and dataDate) to the coming week... (and weekday number)
            else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'w' && todoRow.weekperiod !== '') {
                console.log("todoRowLoad.date < dateDisplay.textContent (W)");

                console.log("JSON.stringify(todoRow) = " + JSON.stringify(todoRow));

                let weekPeriod = todoRow.weekPeriod;
                console.log("weekPeriod = " + weekPeriod);

                // Format back to YYYY-MM-DD
                let updatedDate = ensureRecurringWeekDate(todoDateLoad, currentDate, weekPeriod);

                console.log("Updated Date (w ooa) = " + updatedDate);

                todoRow.date = updatedDate;
                todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);
                console.log("new dataDate = " + todoRow.dataDate);

                plannedTodosOnLoad.push(todoRow);
            }
                // If the recurring day is in the future: Update recurring todos (day)
                else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'd') {
                    console.log("todoDateLoad >= currentDate (D)")
                    plannedTodosOnLoad.push(todoRow);
                }
                // If the recurring day is in the past: update the day to the coming week... (specific day-s) ("D")
                else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.everyWeek === true && todoRow.recurringType === 'd' && checkTodoText(todoRow.todo) === true) {
                    console.log("todoRowLoad.date < dateDisplay.textContent (D)");

                    console.log("JSON.stringify(todoRow) = " + JSON.stringify(todoRow));

                    console.log("checkTodoText(todoRow.todo) (= true!?) = " + checkTodoText(todoRow.todo));

                    // let currentDateFormatted = formatDate(currentDate);
                    // console.log(currentDateFormatted)

                    let currentWeekDayDateFromDataDate = weekDates[todoRow.dataDate];
                    console.log("currentWeekDayDateFromDataDate = " + currentWeekDayDateFromDataDate);

                        // if (currentWeekDayDateFromDataDate >= currentDate) {
                        if (currentWeekDayDateFromDataDate >= dateDisplay.textContent) {
                            let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                            let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                            convertedDateFromFullDate.setDate(convertDateToFullDate.getDate());
                            let convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                            todoRow.date = convertedDateFromFullDateString

                            plannedTodosOnLoad.push(todoRow);
                        }

                        // console.log("Here (currentWeekDayDateFromDataDate < currentDate) ");

                        // else if (currentWeekDayDateFromDataDate < currentDate) {

                            else if (currentWeekDayDateFromDataDate < dateDisplay.textContent) {

                            let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                            let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                            convertedDateFromFullDate.setDate(convertDateToFullDate.getDate() + 7);
                            let convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                            console.log("convertedDateFromFullDateString = " + convertedDateFromFullDateString);

                            // Add 7 days to currentWeekDayDateFromDataDate
                            todoRow.date = convertedDateFromFullDateString

                            plannedTodosOnLoad.push(todoRow);
                        }
                        // todoRow.date = convertedDateFromFullDateString

                        // plannedTodosOnLoad.push(todoRow);
                }
                        // If the recurring day is in the past: update the day to the coming week... (duration) ("#D")
                    else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.everyWeek === true && todoRow.recurringType === 'd' && checkTodoText(todoRow.todo) === false) {
                        console.log("todoRowLoad.date < dateDisplay.textContent (D)");

                        console.log("JSON.stringify(todoRow) = " + JSON.stringify(todoRow));
                        console.log("checkTodoText(todoRow.todo) (= false!?) = " + checkTodoText(todoRow.todo));

                        let convertedDateFromFullDateString;

                        let currentWeekDayDateFromDataDate = weekDates[todoRow.dataDate];
                        console.log("currentWeekDayDateFromDataDate = " + currentWeekDayDateFromDataDate);
                        console.log("currentDate = " + currentDate);

                            if (currentWeekDayDateFromDataDate >= dateDisplay.textContent) {

                                console.log("Here (currentWeekDayDateFromDataDate < currentDate) ");

                                let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                                let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                                convertedDateFromFullDate.setDate(convertDateToFullDate.getDate());
                                convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                                console.log("convertedDateFromFullDateString = " + convertedDateFromFullDateString);
                            }
                            else if (currentWeekDayDateFromDataDate < dateDisplay.textContent) {
                                let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                                let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                                convertedDateFromFullDate.setDate(convertDateToFullDate.getDate() + 7);
                                convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                                console.log("convertedDateFromFullDateString = " + convertedDateFromFullDateString);

                                // Add 7 days to currentWeekDayDateFromDataDate
                            }

                            // Add 0 days to currentWeekDayDateFromDataDate
                            todoRow.date = convertedDateFromFullDateString

                            plannedTodosOnLoad.push(todoRow);
                    }
                                    // If the recurring day is in the past: update the day to the coming week... (duration)
                                    else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.everyWeek === true && todoRow.recurringType === 'd' && checkTodoText(todoRow.todo) === false) {
                                        console.log("todoRowLoad.date < dateDisplay.textContent (D)");

                                        console.log("JSON.stringify(todoRow) = " + JSON.stringify(todoRow));



                                        let currentWeekDayDateFromDataDate = weekDates[todoRow.dataDate];
                                        console.log("currentWeekDayDateFromDataDate = " + currentWeekDayDateFromDataDate);

                                            console.log("Here (currentWeekDayDateFromDataDate < currentDate) ");

                                            let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                                            let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                                            convertedDateFromFullDate.setDate(convertDateToFullDate.getDate());
                                            let convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                                            console.log("convertedDateFromFullDateString = " + convertedDateFromFullDateString);

                                            // Add 0 days to currentWeekDayDateFromDataDate
                                            todoRow.date = convertedDateFromFullDateString

                                            plannedTodosOnLoad.push(todoRow);
                                    }
        });

        console.log("JSON.stringify(plannedTodos) i readFile() = " + JSON.stringify(plannedTodos));
        console.log("JSON.stringify(plannedTodosOnLoad) i readFile() = " + JSON.stringify(plannedTodosOnLoad));

        plannedTodos = plannedTodosOnLoad;
        // sortPlannedTodos(plannedTodos)
        plannedTodosOnLoad = '';

        console.log("plannedTodos.length = " + plannedTodos.length)
        console.log("JSON.stringify(plannedTodos) (on load) = " + JSON.stringify(plannedTodos))

        // Uppdatera plannedTodos här(?) ((innan nya div:ar skapas))

        if (plannedTodos.length > 3) {
            // addDynamicTodoContainer();
            for (let i = 3; i < plannedTodos.length; i++) {
                console.log("i = " + i)
                if (plannedTodos[i].date >= dateDisplay.textContent) {
                    console.log("plannedTodos[i].date >= dateDisplay.textContent");
                    console.log("plannedTodos[i].date = " + plannedTodos[i].date);
                    dynamicContainerToken = "load_func";
                    dynamicContainerDataId = i;
                    addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                }
            }
        }

        console.log("past_data (1) = " + past_data)

        past_data = `${past_data}`
        // Remove the quotation marks and newline character
        past_data = past_data.replaceAll(/["]/g, '').replaceAll(/\n/g, '');
        // past_data = past_data.replace(/["\n]/g, '');

        // /,+/g, ""
        // past_data = past_data.replace(/\n/g, '')
        // let trimPastData = past_data.trim();
        // past_data = past_data.trim();
        // past_data = trimPastData;

        // console.log("past_data (2) = " + past_data)

        if (past_data != '') {
            pastPlanStringToSaveUpdate = past_data + "" + pastPlanStringToSave;
            console.log("pastPlanStringToSave = " + pastPlanStringToSave)
            console.log("pastPlanStringToSaveUpdate (1)  = " + pastPlanStringToSaveUpdate)
            pastTasksSet.add(past_data)
        } else if (past_data === '') {
            console.log>("past_data != ''")
            pastPlanStringToSaveUpdate = pastPlanStringToSave;
        }

        // pastPlanStringToSaveUpdate.replaceAll(/,/g, '\n');

        let inputString = pastPlanStringToSaveUpdate;

        // Add newline characters

        let outputString = inputString.replace(/(2025-\d{2}-\d{2})/g, '\n$1');
        outputString = outputString.trim();


        // Log the result
        console.log("outputString = " + outputString);

        pastPlanStringToSaveUpdate = outputString;

        console.log("pastPlanStringToSaveUpdate (2) = " + pastPlanStringToSaveUpdate)

        pastPlansTextArea.innerHTML = pastPlanStringToSaveUpdate
        pastPlansTextArea.value = pastPlanStringToSaveUpdate
        // pastPlansTextArea.value = pastPlanStringToSave
        console.log("pastPlansTextArea.innerHTML = " + pastPlansTextArea.innerHTML)

        pastPlanStringToSave = `${pastPlansTextArea.innerHTML}`

        var filePath = document.getElementById('load').value;

        // // Example file path
        // var filePath = 'C:\\fakepath\\bbbb.txt';

        // Extract the file name from the path
        var loadedFileName = filePath.split('\\').pop().split('.')[0];
        console.log("loadedFileName = " + loadedFileName);
        document.getElementById('file-name').value = loadedFileName;
        // // Original string with commas
        // let dataString = "2024-01-14, bbbbb, yellow, 2024-01-15, aaaaa, gray";
        // // Replace commas with newline characters
        // dataString = dataString.replace(/,/g, '\n');
        // // Set the updated string as the value of the text area
        // document.getElementById('textArea').value = dataString;

        // ifPlannedTodosIsPastPutToPastPlans();

        sortPlannedTodos(plannedTodos);

        updateCurrentWeekSchedule();
        // updateRecurringPlannedTodos(plannedTodos);
        // updateRecDivBgColor();
    };
    reader.readAsText(file);
}

    // reader.readAsText(file);


// // Call the function to read the Blob content
// readFile(file);

function load_func(delimiter) {
    clearAll();
    // pastPlansTextArea.innerHTML = '';
    // pastPlansTextArea.value = '';
    // pastPlanStringToSaveUpdate = '';

    var file = document.getElementById("load").files[0];

    readFile(file);

    // var reader = new FileReader();

    // readFile(file)

    // reader.onloadend = function(event) {

    //     const result = event.target.result;
    //     console.log("Concatenated string with delimiter:", result);

        // _ _ _

        // Split the result using the delimiter

        // const [retrievedString1, retrievedString2] = result.split(delimiter);

        // console.log("String 1:", retrievedString1);
        // console.log("String 2:", retrievedString2);

        // _ _ _

        // let [planned_data, past_data] = result.split(delimiter);
        // console.log("String 1:", planned_data);
        // console.log("String 2:", past_data);

        // _ _ _

        // var textBox = document.getElementById(textarea).value;
        // var load = JSON.parse(reader.result)[0];
        // alert(load);

        // textbox = load;

    };
    // reader.readAsText(file);