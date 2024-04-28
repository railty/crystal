
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("worker.js: ", request);
    sendResponse({
        message: 'success',
        payload: "data.name"
    });
});