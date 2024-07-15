
Viktor <dreamteam92@gmail.com>
14:39 (0 perccel ezelőtt)
címzett: én

// script.js

// Content in English and Spanish
const content = {
    en: {
        title: "Welcome to Your Massage Pro",
        description: "Experience the best massage therapy.",
        // Add other translations
    },
    es: {
        title: "Bienvenido a Your Massage Pro",
        description: "Experimente la mejor terapia de masaje.",
        // Add other translations
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.getElementById('title').innerText = content[lang].title;
    document.getElementById('description').innerText = content[lang].description;
    // Update other elements with translations

    // Update button text
    document.getElementById('toggle-btn').innerText = lang === 'en' ? 'Español' : 'English';
}

// Event listener for the button
document.getElementById('toggle-btn').addEventListener('click', function() {
    const currentLang = document.getElementById('toggle-btn').innerText === 'Español' ? 'en' : 'es';
    switchLanguage(currentLang);
});

// Initial language setup
switchLanguage('en');
