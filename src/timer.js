let flashCooldown = 5 * 60;

function startTimer(time) {
    let current = time;

    let updateTimer = setInterval(() => {
        let min = parseInt(current / 60);
        let sec = current % 60;
        document.querySelector('.timer').innerHTML = min + ':' + sec;
        if (current == 0) {
            clearInterval(updateTimer);
        }
        current--;
    }, 1000);
}