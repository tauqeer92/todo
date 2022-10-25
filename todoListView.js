class TodoListView {
    displayItems(todoItems) {
        todoItems.forEach((todoItem) => {
            const newElement = document.createElement('div');
            newElement.className = 'todo-item';
            newElement.innerText = todoItem;
            document.querySelector('#main-container').append(newElement);
        }

    )}
};

module.exports = TodoListView;