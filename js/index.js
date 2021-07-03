const addButton = document.getElementById('save__link');

addButton.addEventListener('click', () => {
    console.log('a link is being added');
    renderItem();
});

const renderItem = () => {
    // const item = `
    // <div class="action__item">
    //     <div class="action__item--check">

    //     </div>
    //     <div class="action__item--text"></div>
    //     <div class="action__item--delete"></div>
    // </div>

    // `;
    let itemContainer = document.querySelector('.item__container');

    let actionItem = document.createElement('div');
    actionItem.classList.add('action__item');

    let itemCheck = document.createElement('div');
    itemCheck.classList.add('action__item--check');

    let itemText = document.createElement('div');
    itemText.classList.add('action__item--text');

    let deleteItem = document.createElement('div');
    deleteItem.classList.add('action__item--delete');

    itemCheck.innerHTML = `
    <div class="action__item--checkbox">
        <i class="fas fa-check" aria-hidden="true"></i>
    </div>
    `;

    itemText.textContent = 'For Later: ';

    deleteItem.innerHTML = `<i class="fas fa-times"></i>`;

    actionItem.appendChild(itemCheck);
    actionItem.appendChild(itemText);
    actionItem.appendChild(deleteItem);
    itemContainer.appendChild(actionItem);
}