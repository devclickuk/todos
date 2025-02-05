import { test, expect } from '@playwright/test';

test.describe('Layout', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
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