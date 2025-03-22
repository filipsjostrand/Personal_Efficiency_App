// Object to map days of the week to image paths
const dailyImages = {
    0: "./media/img/sunday.jpg",    // Replace with your Sunday image path
    1: "./media/img/monday.jpg",    // Replace with your Monday image path
    2: "./media/img/tuesday.jpg",   // Replace with your Tuesday image path
    3: "./media/img//wednesday.jpg", // Replace with your Wednesday image path
    4: "./media/img/thursday.jpg",  // Replace with your Thursday image path
    5: "./media/img/friday.jpg",    // Replace with your Friday image path
    6: "./media/img/saturday.jpg"   // Replace with your Saturday image path
};

// Get the current day of the week (0 = Sunday, 1 = Monday, ...)
const todaysWeekday = new Date().getDay();

// Get the image element by its ID
const dailyImage = document.getElementById("daily-image");

// Set the source of the image element to today's image
dailyImage.src = dailyImages[todaysWeekday];

// Provide an alt text description dynamically
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
dailyImage.alt = `Image for ${dayNames[todaysWeekday]}`;
