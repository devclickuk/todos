// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Layout', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/todos');
    });

    test('should have the correct title', async ({ page }) => {
        await expect(page).toHaveTitle("Dave Amison - Todos");
    });

    test('check the list container is visible', async ({ page }) => {
        const listContainer = page.getByTestId('listContainer');
        await expect(listContainer).toBeVisible();
    });

    test('check the No Tasks container is not visible', async ({ page }) => {
        const emptyListContainer = page.getByTestId('emptyListContainer');
        await expect(emptyListContainer).not.toBeVisible();
    });

    test('check the add container is visible', async ({ page }) => {
        const addContainer = page.getByTestId('addContainer');
        await expect(addContainer).toBeVisible();
    });

    test('check the placeholder of the add input is correct', async ({ page }) => {
        const addInput = page.getByTestId('addInput');
        await expect(addInput).toHaveAttribute('placeholder', 'Add a task');
    });

    test('check the add input is visible', async ({ page }) => {
        const addInput = page.getByTestId('addInput');
        await expect(addInput).toBeVisible();
    });

    test('check the add button has the correct text', async ({ page }) => {
        const addButton = page.getByTestId('addButton');
        await expect(addButton).toHaveText('Add');
    });
});

test.describe('Add Task', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/todos');
    });

    // check that there are 3 list items
    test('check that there are 3 list items', async ({ page }) => {
        const listItems = page.locator('[data-testid^="listItem-"]');
        await expect(listItems).toHaveCount(3);
    });

    test('add Buy Ham to the list', async ({ page }) => {
        // add the text 'Buy Ham' to the input
        const addInput = page.getByTestId('addInput');
        await addInput.fill('Buy Ham');

        // click the add button
        const addButton = page.getByTestId('addButton');
        await addButton.click();

        // check that the list now has 4 items
        const listItems = page.locator('[data-testid^="listItem-"]');
        await expect(listItems).toHaveCount(4);

        // check that the new item is visible
        const listItem = page.getByTestId('listItem-4');
        await expect(listItem).toBeVisible();

        // check that the new item has the text 'Buy Ham'
        await expect(listItem).toHaveText('Buy Ham');

        // check that the input is empty after adding the item
        await expect(addInput).toHaveAttribute('placeholder', 'Add a task');
    });

});

test.describe('Delete Task', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/todos');
    });

    // check that there are 3 list items
    test('check that there are 3 list items', async ({ page }) => {
        const listItems = page.locator('[data-testid^="listItem-"]');
        await expect(listItems).toHaveCount(3);
    });

    test('delete the first item', async ({ page }) => {
        // click the delete icon of the first item
        const itemDeleteIcon = page.getByTestId('itemDeleteIcon-2');
        await itemDeleteIcon.click();

        // check that the list now has 2 items
        const listItems = page.locator('[data-testid^="listItem-"]');
        await expect(listItems).toHaveCount(2);

        // check that the two remaining items have text 'Buy milk' and 'Buy bread'
        const listItem1 = page.getByTestId('listItem-1');
        await expect(listItem1).toHaveText('Buy milk');

        const listItem2 = page.getByTestId('listItem-2');
        await expect(listItem2).toHaveText('Buy bread');
    });
});

test.describe('Complete a Task', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/todos');
    });

    test('complete the first task', async ({ page }) => {
        // click the toggle icon of the first item
        const itemToggleIcon = page.getByTestId('itemToggleIcon-1');
        await itemToggleIcon.click();

        // check that the last item has the class 'itemComplete'
        const listItemText3 = page.getByTestId('itemText-3');
        // check it has the class 'itemComplete'
        await expect(listItemText3).toHaveClass('itemText itemComplete');
        // check it has text 'Buy bread'
        await expect(listItemText3).toHaveText('Buy milk');


        // click the undo icon of the last item
        const itemUndoIcon = page.getByTestId('itemUndoIcon-3');
        await itemUndoIcon.click();

        const listItemText1 = page.getByTestId('itemText-1');
        // check that the first item does not have the class 'itemComplete' anymore
        await expect(listItemText1).not.toHaveClass('itemText-1');
        // check it has text 'Buy bread'
        await expect(listItemText1).toHaveText('Buy milk');
    });
});