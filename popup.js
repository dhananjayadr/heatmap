// document.getElementById('run-script').addEventListener('click', function() {
//     browser.tabs.executeScript({
//         file: 'content.js'
//     });
// });

// document.getElementById('remove-highlight').addEventListener('click', function() {
//     browser.tabs.reload();
// });


document.getElementById('run-script').addEventListener('click', function() {
    chrome.tabs.executeScript({
        file: 'content.js'
    });
});

document.getElementById('remove-highlight').addEventListener('click', function() {
    chrome.tabs.reload();
});
