const TodoListModel = require('./todoListModel')

describe('TodoListModel', () => {
    it('returns an empty list of items', () => {
        const model = new TodoListModel();
        expect(model.getItems()).toEqual([]);
    });

    it('adds a new item to a list', () => {
        const model = new TodoListModel();
        model.addItem('Cancel subscription to the gym')
        expect(model.getItems()).toEqual(['Cancel subscription to the gym']);
    })

    it('clears all items from list', () => {
        const model = new TodoListModel();
        model.addItem('Cancel subscription to the gym')
        model.clear();
        expect(model.getItems()).toEqual([]);
    })
});