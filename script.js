const modeSwitch = document.getElementById('modeSwitch');

// Beim Laden der Seite überprüfen, ob der Benutzer einen bevorzugten Modus hat
window.addEventListener('load', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setMode(isDarkMode);
    modeSwitch.checked = isDarkMode;
});

// Funktion zum Aktualisieren des Modus basierend auf dem Schalterzustand
function toggleMode() {
    const isDarkMode = modeSwitch.checked;
    setMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

// Funktion zum Setzen des Modus basierend auf dem übergebenen Wert
function setMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

// Event-Listener für den Modusumschalter
modeSwitch.addEventListener('change', toggleMode);

// Funktion zum Anzeigen/Verstecken des Popup-Fensters
function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}