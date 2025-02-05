import { test, expect } from '@playwright/test';

test.describe('Add Task', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
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