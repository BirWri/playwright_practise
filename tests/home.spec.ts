import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Click on "Get started" using the CSS selector', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Click on button
        await page.locator('#get-started').click()

        // Verify url has #get-started
        await expect(page).toHaveURL(/.*get-started/)
    })

    test('Locate heading text is visible "Think different." using the text selector', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Find the text locator "Think different."
        const headingText = page.locator('text=Think different.');

        // Verify the heading is there and correct
        await expect(headingText).toBeVisible();
    })
    
    
})

test.describe('About page', () => {
    test('Open About page and verify title', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/about/');

        // Verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
    
})

