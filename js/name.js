const updateNameListener = () => {
    const greetingName = document.querySelector('.greeting__name');
    greetingName.addEventListener('click', () => {
        chrome.storage.sync.get(['name'], (data) => {
            let name = data.name ? data.name : '';
            document.getElementById('input__name').value = name;
        })
        $('#update__name--modal').modal('show');
        updateName();
    });
}

const updateName = () => {
    let changeNameButton = document.querySelector('#update__name');

    changeNameButton.addEventListener('click', (e) => {
        const userName = document.querySelector('#input__name').value; 
        if(userName){
            saveName(userName, () => {
                setUserName(userName);
                $('#update__name--modal').modal('hide');
            });
        }
    });
}

const saveName = (name, callback) => {
    chrome.storage.sync.set({
        name: name
    }, callback);
}

const setUserName = (name = 'Add Your Name') => {
    // let userName = name ? name : 'Add Your Name';
    document.querySelector('.name__value').innerText = name;
}

updateNameListener();