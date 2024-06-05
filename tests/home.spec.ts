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

        // Verify url
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started')
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

