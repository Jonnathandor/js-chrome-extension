const addButton = document.getElementById('save__link');
addButton.addEventListener('click', () => {
    add('Save For Later!!');
    renderItem('save');
});

const renderItem = (text) => {
    let itemContainer = document.querySelector('.item__container');

    let actionItem = document.createElement('div');
    actionItem.classList.add('action__item');

    let itemText = document.createElement('div');
    itemText.classList.add('action__item--text');

    let deleteItem = document.createElement('div');
    deleteItem.classList.add('action__item--delete');

    itemText.textContent = text;

    deleteItem.innerHTML = `<i class="fas fa-times"></i>`;

    actionItem.appendChild(itemText);
    actionItem.appendChild(deleteItem);
    itemContainer.appendChild(actionItem);
}

const add = (text) => {
    let item = {
        id: uuidv4(),
        added: new Date().toString(),
        text: text
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
            chrome.storage.sync.get('items', data => {
                console.log(data);
            });
        });
    });
}

const getItems = () => {
    chrome.storage.sync.get(['items'], (data) => {
        let items = data.items;
        items.forEach(item => {
            renderItem(item.text);
        });
    });
}

getItems();