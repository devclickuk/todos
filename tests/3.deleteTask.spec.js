import { test, expect } from '@playwright/test';

test.describe('Delete Task', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
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