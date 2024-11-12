function addItem() {
            const list = document.getElementById('items');
            const currentItemsCount = document.getElementsByTagName('li').length;

            const newItem = document.createElement('li');
            newItem.classList.add('item');
            newItem.textContent = `Item ${currentItemsCount + 1}`;

            list.appendChild(newItem);
        }

        document.getElementById('addButton').addEventListener('click', addItem);

