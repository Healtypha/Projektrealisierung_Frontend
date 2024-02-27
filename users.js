// Funktion zum Abrufen und Anzeigen der registrierten Benutzernamen
function displayRegisteredUsers() {
    const userList = document.getElementById('userList');

    // Benutzernamen aus dem localStorage abrufen
    const storedName = localStorage.getItem('studentName');

    // Wenn ein Benutzername gefunden wurde, füge ihn der Liste hinzu
    if (storedName) {
        const listItem = document.createElement('li');
        listItem.textContent = storedName;
        userList.appendChild(listItem);
    }
}

// Benutzerliste beim Laden der Seite anzeigen
window.addEventListener('load', displayRegisteredUsers);
