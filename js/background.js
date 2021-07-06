//adding the background to the manifest breaks the delete functionality...
// I will debug this ... some day
chrome.runtime.onInstalled.addListener(details => {
    if(details.reason == 'install'){
        chrome.storage.sync.set({
            items: []
        });
    }
});