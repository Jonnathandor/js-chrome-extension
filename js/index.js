const addButton = document.getElementById('save__link');
addButton.addEventListener('click', () => {
    getCurrentTab().then(tab => {
        add(tab.title, tab.favIconUrl, tab.url);
    }); 
});

async function getCurrentTab() {
    return await new Promise((resolve, reject)=>{
      chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
          resolve(tabs[0]);
        }
      );
    })
}

const deleteItemEvent = (e) => {
    const id = e.target.parentElement.getAttribute('item-id');
    const parent = e.target.parentElement;

    chrome.storage.sync.get(['items'], (data) => {
        let items = data.items;

        const filteredItems = items.filter(item => {
            return item.id !== id;
        });
        
        chrome.storage.sync.set({
            items: filteredItems
        }, () => {
            parent.remove();
            setBrowserData(filteredItems.length);
        });
    });
}

const renderItem = (id, title, iconUrl, url) => {
    let itemContainer = document.querySelector('.item__container');

    let actionItem = document.createElement('div');
    actionItem.classList.add('action__item');
    actionItem.setAttribute('item-id', id);

    let itemIcon = document.createElement('div');
    itemIcon.classList.add('action__item--icon');

    let itemText = document.createElement('div');
    itemText.classList.add('action__item--text');

    let deleteItem = document.createElement('div');
    deleteItem.classList.add('action__item--delete');
    deleteItem.addEventListener('click', deleteItemEvent);

    itemIcon.innerHTML = `<img src="${iconUrl}">`;
    itemText.innerHTML = `<a href="${url}" target="_blank">${title}</a>`;
    deleteItem.innerHTML = `<i class="fas fa-times"></i>`;

    actionItem.appendChild(itemIcon);
    actionItem.appendChild(itemText);
    actionItem.appendChild(deleteItem);
    itemContainer.appendChild(actionItem);
}

const add = (title, icon, url) => {
    if(icon === undefined){
        icon = '../images/icons32.png';
    }
    let item = {
        id: uuidv4(),
        added: new Date().toString(),
        title: title,
        icon: icon,
        url: url
    }

    chrome.storage.sync.get(['items'], (data) => {
        let items = data.items;
        if(!items){
            items = [item];
        } else {
            items.push(item);
        }
        
        chrome.storage.sync.set({
            items
        }, () => {
            chrome.storage.sync.get(['items'], data => {
                let lastItem = data.items[items.length - 1];
                renderItem(lastItem.id, lastItem.title, lastItem.icon, lastItem.url);
                setBrowserData(data.items.length);
            });
        });
    });
}

const getInitialData = () => {
    chrome.storage.sync.get(['items', 'name'], (data) => {
        let items = data.items;
        let name = data.name
        items.forEach(item => {
            renderItem(item.id, item.title, item.icon, item.url);
        });

        setUserName(name);
        setBrowserData(items.length);
    });

}

const setBrowserData = (totalItems) => {
    chrome.browserAction.setBadgeText({text: `${totalItems}`});
}

getInitialData();
