// alert box
alert("Welcome to Digital Clock (SAST)");

// // clock
function updateClock() {
    const now = new Date();

    // hours, minutes, seconds
    const hours24 = now.getHours();
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    // AM/PM and 12-hour format
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    const hours12 = padZero((hours24 % 12) || 12);

    // time string
    const timeString = `${hours12}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;

    // date string
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}

const padZero = num => num.toString().padStart(2, '0');

// immeditiate clock and setup
updateClock();
setInterval(updateClock, 1000);



