document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('item-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('item-list');

    function createListItem(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        li.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        editBtn.onclick = function() {
            if (editBtn.textContent === 'Edit') {
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.value = span.textContent;
                li.insertBefore(editInput, span);
                li.removeChild(span);
                editBtn.textContent = 'Save';
            } else {
                const editInput = li.querySelector('input[type="text"]');
                span.textContent = editInput.value;
                li.insertBefore(span, editInput);
                li.removeChild(editInput);
                editBtn.textContent = 'Edit';
            }
        };

        deleteBtn.onclick = function() {
            list.removeChild(li);
        };

        return li;
    }

    addBtn.onclick = function() {
        const value = input.value.trim();
        if (value) {
            const li = createListItem(value);
            list.appendChild(li);
            input.value = '';
        }
    };
});
