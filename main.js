const uploadBox = document.querySelector('.upload-box');
const ctaButton = document.querySelector('.cta-button');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
    setTheme(savedTheme);
});

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = 'var(--border-color)'; /* Use CSS variable */
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.style.backgroundColor = 'var(--secondary-bg-color)'; /* Use CSS variable */
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = 'var(--secondary-bg-color)'; /* Use CSS variable */
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        alert(`${files[0].name} 파일이 업로드되었습니다.`);
    }
});

ctaButton.addEventListener('click', () => {
    alert('AI 체형 분석을 시작합니다!');
});