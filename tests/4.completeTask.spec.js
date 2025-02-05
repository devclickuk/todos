import { test, expect } from '@playwright/test';

test.describe('Complete a Task', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
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