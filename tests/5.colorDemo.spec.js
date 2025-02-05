import { test, expect } from '@playwright/test';

test.describe('Color Demo', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/colorDemo');
    });

    test('check the background changes color', async ({ page }) => {

        const container = page.getByTestId('colorDemoContainer');

        // check the background color of the container is green
        expect(container).toHaveCSS('background-color', 'rgb(0, 128, 0)');

        // check the button text is 'Change Color'
        const button = page.getByTestId('changeColorButton');
        expect(button).toHaveText('Change Color');

        // click the button
        await button.click();

        // check the background color of the container is red
        expect(container).toHaveCSS('background-color', 'rgb(255, 0, 0)');

        // click the button again
        await button.click();

        // check the background color of the container is green
        expect(container).toHaveCSS('background-color', 'rgb(0, 128, 0)');
    });
});