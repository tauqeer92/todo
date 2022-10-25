class TodoListModel {

    constructor () {
        this.items = [];

    }

    getItems() {
        return this.items;
    }

    addItem(title) {
        this.items.push(title)

    }

    clear() {
        this.items = [];
    }

}

module.exports = TodoListModel;