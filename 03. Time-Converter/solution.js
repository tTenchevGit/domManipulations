function attachEventsListeners() {
    let main = document.querySelector('main');
    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');
    main.addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'daysBtn':
                convert(+inputDays.value * 86400);
                break;
            case 'hoursBtn':
                convert(+inputHours.value * 3600);
                break;
            case 'minutesBtn':
                convert(+inputMinutes.value * 60);
                break;
            case 'secondsBtn':
                convert(+inputSeconds.value);
                break;
            default: break;
        }
    });

    function convert(sec) {
        let day = sec / (24 * 60 * 60);
        let hour = sec / (60 * 60);
        let min = sec / 60

        inputDays.value = day;
        inputHours.value = hour;
        inputMinutes.value = min;
        inputSeconds.value = sec;

    }
}
