console.log('The notes app is running')

const TodoListModel = require("./todoListModel");
const TodoListView = require("./todoListView");

const model = new TodoListModel();
const view = new TodoListView();

model.addItem('Some todo item - urgent!!!')

view.displayItems(model.getItems());