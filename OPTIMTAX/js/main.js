const closeButton = document.querySelector('.modal-header button.close');
const modalScreens = document.querySelectorAll('.modal-screen');

function scrollModalScreen() {
    for(let i = 0; i < modalScreens.length; i++) {
        let modalScreen = modalScreens[i];

        modalScreen.scrollIntoView({
            behavior: "smooth"
        });
    }
}


closeButton.addEventListener('click', () => {
    scrollModalScreen();
});






