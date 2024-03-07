function lockedProfile() {
    Array.from(document.getElementsByTagName('button')).forEach((b, i) => {  //[...document.getElementsByTagName('button')]
        b.setAttribute('id', `button${i}`);
        b.addEventListener('click', () => handleButtonClick(i));
    });

    function handleButtonClick(buttonIndex) {
        switch (buttonIndex) {
            case 0:
                checkRadioButton('user1Locked', buttonIndex);
                break;
            case 1:
                checkRadioButton('user2Locked', buttonIndex);
                break;
            case 2:
                checkRadioButton('user3Locked', buttonIndex);
                break;
            default:
                console.log('Button clicked:', buttonIndex);
                break;
        }
    }

    function checkRadioButton(lockInputName, buttonIndex) {
        const lockedInput = document.querySelector(`input[name="${lockInputName}"]:checked`);
        const profileIndex = Number(lockInputName.charAt(4)) - 1; 
        const showMoreButton = document.getElementById(`button${buttonIndex}`);
        if (lockedInput && lockedInput.value === 'unlock') {
            const hiddenFields = document.getElementById(`user${profileIndex + 1}HiddenFields`);
            hiddenFields.style.display = 'block';
            showMoreButton.textContent = 'Hide'; // Change the text of the button to "Hide"
        } else {
            const hiddenFields = document.getElementById(`user${profileIndex + 1}HiddenFields`);
            hiddenFields.style.display = 'none';
            showMoreButton.textContent = 'Show more'; // Change the text of the button back to "Show more"
        }
    }
}
