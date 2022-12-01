function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
        total, minutes,seconds
    };
}


function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    function updateClock() {
        const t = getTimeRemaining(endtime);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
        if (t.total <= 0) {//PONER AQUI
            clearInterval(timeinterval);
            showResults();
            submitButton.style.display = 'none';
            previousButton.style.display = 'none';
            nextButton.style.display = 'none';
            tryAgainButton.style.display = 'inline-block';
        } else {
            tryAgainButton.style.display = 'none';
        }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}


const deadline = new Date(Date.parse(new Date()) + 3 * 60 * 1000);// Regresar valor de .1 a 3 PRUEBAS 
const tryAgainButton = document.getElementById("tryAgain");
initializeClock('clockdiv', deadline);

/*Quitar
if (t.total <= 0) {
    clearInterval(timeinterval);
    showResults();
    submitButton.style.display = 'none';
    previousButton.style.display = 'none';
    nextButton.style.display = 'none';
    tryAgainButton.style.display = 'inline-block';
} else { 
    tryAgainButton.style.display = 'none';
}*/

tryAgainButton.addEventListener("click", resetQuiz);

function resetQuiz() {
    location.reload();
}