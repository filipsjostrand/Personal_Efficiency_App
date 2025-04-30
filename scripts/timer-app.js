let countdown;
// let countUp;
let timeStart;
let timeRemaining = 0;
let targetTime = 0;
let isCountingDown = true;

const timerDisplay = document.getElementById('timerDisplay');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const tenthsInput = document.getElementById('tenths');
const countModeSelect = document.getElementById('countMode');
const alarmSound = document.getElementById('alarmSound');

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Uppdatera isCountingDown-variabel när timer-typ-rolldown ("Count up" <-> "Countdown") ändras
countModeSelect.addEventListener('change', timerCountTypeController)

selectedLanguage = sessionStorage.getItem("languageVariable");

if (selectedLanguage === undefined) {
    selectedLanguage = 'sv';
    } else if (typeof(selectedLanguage) === "string" && typeof(languageVariable) === "string") {
        selectedLanguage = localStorage.getItem("languageVariable");
    }

    const countDirectionDown = {
        sv: 'Räkna ner',
        en: 'Countdown',
      }

function setTimerToCountDown() {
    countModeSelect.value = "countdown"
    // countModeSelect.options[countModeSelect.selectedIndex].text = "Countdown";
    countModeSelect.options[countModeSelect.selectedIndex].text = countDirectionDown[selectedLanguage];
    isCountingDown = true;
}

function timerCountTypeController() {
    if (countModeSelect.value === "countdown") {
        isCountingDown = true;
    } else if (countModeSelect.value === "countup") {
        isCountingDown = false;
    }
    return isCountingDown;
}

const stopVideos = () => {
    document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
    document.querySelectorAll('video').forEach(v => { v.pause() });
  };

function startTimer() {
    if (countdown) {
        clearInterval(countdown);
    }

    // Define target time (from input)
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const tenths = parseInt(tenthsInput.value) || 0;

    targetTime = (hours * 3600 + minutes * 60 + seconds) * 10 + tenths; // Convert to tenths of a second

    // check if "countdown" or "count up"
    timerCountTypeController();
    if (countModeSelect.value === "countdown") {
        clearInterval(countdown);
        timeStart = targetTime;
        timeRemaining = targetTime;
    } else if (countModeSelect.value === "count up") {
        timeStart = 0;
        timeRemaining = targetTime;
    }

    // Decide to count down or up, clear the interval when timeRemaining is out, stop videos and play alarm sound.
    countdown = setInterval(() => {
        if (isCountingDown) {
            timeRemaining--;
            if (timeRemaining <= 0) {
                clearInterval(countdown);
                timeRemaining = 0;
                stopVideos();
                alarmSound.play(); // Play alarm when countdown ends
            }
        } else if (!isCountingDown) {
            timeRemaining++;
            if (timeRemaining >= targetTime) {
                clearInterval(countdown);
                timeRemaining = targetTime;
                stopVideos();
                alarmSound.play(); // Play alarm when count up reaches target time
            }
        }
        updateDisplay();
    }, 100); // Update every 100 milliseconds (0.1 seconds)
}

function pauseTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timeRemaining = 0;
    updateDisplay();
    alarmSound.pause();
    alarmSound.currentTime = 0;
    setTimerToCountDown();
}

function updateDisplay() {
    let totalSeconds = Math.floor(timeRemaining / 10);
    let tenths = timeRemaining % 10;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    timerDisplay.textContent =
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}.` +
        `${String(tenths).padStart(2, '')}`;

    // timerCountTypeController();

    // if (isCountingDown) {
    // timerDisplay.textContent =
    //     `${String(hours).padStart(2, '0')}:` +
    //     `${String(minutes).padStart(2, '0')}:` +
    //     `${String(seconds).padStart(2, '0')}.` +
    //     `${String(tenths).padStart(2, '')}`;
    // } else if (!isCountingDown) {

    //     timerDisplay.textContent =
    //     `${String(hours).padStart(2, '0')}:` +
    //     `${String(minutes).padStart(2, '0')}:` +
    //     `${String(seconds).padStart(2, '0')}.` +
    //     `${String(tenths).padStart(2, '')}`;
    // }
}

