
function blurImages() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {image.style.filter = 'blur(10px)';}
    );
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'blurImages') {
        blurImages();
    }
});
