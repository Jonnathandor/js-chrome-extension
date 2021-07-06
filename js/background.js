chrome.runtime.onInstalled.addListener(details => {
    if(details.reason == 'install'){
        console.log('installed');
        chrome.storage.sync.set({
            items: []
        });
    }
});