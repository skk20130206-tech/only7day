const uploadBox = document.querySelector('.upload-box');
const ctaButton = document.querySelector('.cta-button');

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = '#3a3a3a';
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.style.backgroundColor = '#2a2a2a';
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = '#2a2a2a';
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        alert(`${files[0].name} 파일이 업로드되었습니다.`);
    }
});

ctaButton.addEventListener('click', () => {
    alert('AI 체형 분석을 시작합니다!');
});