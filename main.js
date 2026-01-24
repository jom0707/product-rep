const generateBtn = document.getElementById('generate');
const menuImage = document.getElementById('menu-image');
const menuName = document.getElementById('menu-name');
const themeSwitch = document.getElementById('checkbox');

// Function to apply theme
const applyTheme = (isDarkMode) => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        themeSwitch.checked = false;
    }
};

// Function to toggle theme and save preference
const toggleTheme = () => {
    const isDarkMode = themeSwitch.checked;
    applyTheme(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
};

// Event listener for the theme switch
themeSwitch.addEventListener('change', toggleTheme);

// Event listener for the menu recommendation button
generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * menus.length);
    const selectedMenu = menus[randomIndex];

    // menuImage.src = selectedMenu.image; // Removed as image tag is removed
    menuName.textContent = selectedMenu.name;
});

// On page load, check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    applyTheme(savedDarkMode);
});
