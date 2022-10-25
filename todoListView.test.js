/**
 * @jest-environment jsdom
 */
const TodoListView = require('./todoListView');
const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('TodoListView', () => {
    it('should display on note on the page', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html') 
        const view = new TodoListView();

        // Act
        view.displayItems(['This is a test TODO item'])

        // Assert
        const todoItemElements = document.querySelectorAll('div.todo-item'); // when is this defined
        expect(todoItemElements.length).toBe(1);
        expect(todoItemElements[0].innerText).toBe('This is a test TODO item')




    })
})