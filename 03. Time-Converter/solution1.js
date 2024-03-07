function attachEventsListeners() {
    const mainElement = document.querySelector('main');

    mainElement.addEventListener('click', function(event) {
        switch (event.target.id) {
            case 'daysBtn':
                const inputDays = Number(document.getElementById('days').value);
                const hours = inputDays * 24;
                const minutes = hours * 60;
                const seconds = minutes * 60;
                document.getElementById('hours').value = hours;
                document.getElementById('minutes').value = minutes;
                document.getElementById('seconds').value = seconds;
                break;
            case 'hoursBtn':
                const inputHours = Number(document.getElementById('hours').value);
                const daysFromHours = inputHours / 24;
                const minutesFromHours = inputHours * 60;
                const secondsFromHours = minutesFromHours * 60;
                document.getElementById('days').value = daysFromHours;
                document.getElementById('minutes').value = minutesFromHours;
                document.getElementById('seconds').value = secondsFromHours;
                break;
            case 'minutesBtn':
                const inputMinutes = Number(document.getElementById('minutes').value);
                const hoursFromMinutes = inputMinutes / 60;
                const daysFromMinutes = hoursFromMinutes / 24;
                const secondsFromMinutes = inputMinutes * 60;
                document.getElementById('days').value = daysFromMinutes;
                document.getElementById('hours').value = hoursFromMinutes;
                document.getElementById('seconds').value = secondsFromMinutes;
                break;
            case 'secondsBtn':
                const inputSeconds = Number(document.getElementById('seconds').value);
                const minutesFromSeconds = inputSeconds / 60;
                const hoursFromSeconds = minutesFromSeconds / 60;
                const daysFromSeconds = hoursFromSeconds / 24;
                document.getElementById('days').value = daysFromSeconds;
                document.getElementById('hours').value = hoursFromSeconds;
                document.getElementById('minutes').value = minutesFromSeconds;
                break;
            default:
               
                break;
        }
    });
}
