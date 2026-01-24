const generateBtn = document.getElementById('generate');
const numberElements = document.querySelectorAll('.number');
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

// Event listener for the lotto number generator
generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });
});

// On page load, check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    applyTheme(savedDarkMode);
});
