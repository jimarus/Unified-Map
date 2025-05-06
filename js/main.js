// JavaScript for the dropdown menus and campus map
const userDropdown = document.getElementById('userDropdown');
const dropdownMenu = document.getElementById('dropdownMenu');

let hoverTimeout;

userDropdown.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
    dropdownMenu.classList.add('show');
});

userDropdown.addEventListener('mouseleave', () => {
    hoverTimeout = setTimeout(() => {
        dropdownMenu.classList.remove('show');
    }, 300); // delay to avoid flicker when moving between icon and menu
});

const toolDropdown = document.getElementById('toolDropdown');
const toolMenu = document.getElementById('toolDropdownMenu');

let toolTimeout;

toolDropdown.addEventListener('mouseenter', () => {
    clearTimeout(toolTimeout);
    toolMenu.classList.add('show');
});

toolDropdown.addEventListener('mouseleave', () => {
    toolTimeout = setTimeout(() => {
        toolMenu.classList.remove('show');
    }, 300); // delay to prevent flicker
});


const campusMap = document.getElementById("campusMap");

const campusLocations = {
    main: "14.1120879,121.5614933",
    lucena: "13.9486066,121.6295241",
    gumaca: "13.9228116,122.1012285",
    alabat: "14.0991669,122.0129519",
    catanauan: "13.568023,122.3430143",
    polillo: "14.7216832,121.9383093",
    infanta: "14.7136875,121.6207669",
    tagkawayan: "13.9571693,122.5436085",
    tiaong: "13.9470652,121.3695996"
};

function goToCampus(campus) {
    const coords = campusLocations[campus];
    const url = `https://www.google.com/maps?q=${coords}&output=embed`;
    campusMap.src = url;
}

function logoutUser() {
// Clear session storage or perform any logout-related tasks
sessionStorage.clear(); 
alert("You have been logged out.");
window.location.href = "login-form.html"; // Redirect to the login page
}

const toggleButton = document.getElementById('conditionsToggle');
const content = document.getElementById('conditionsContent');
const arrowIcon = document.getElementById('arrowIcon');

toggleButton.addEventListener('click', () => {
    content.classList.toggle('show');
    arrowIcon.classList.toggle('rotate');
});

