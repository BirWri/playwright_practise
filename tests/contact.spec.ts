import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Contact page', () => {
    test('Open contact page, fill and submit the "Send Us Message" form', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Click on Contact
        await page.locator('#menu-item-493').click()

        // Find and fill the forms inputs name, email, phone and message
        await page.locator('#evf-277-field_ys0GeZISRs-1').fill('Ro Wright')
        await page.locator('#evf-277-field_LbH5NxasXM-2').fill('janedoe@gmail.com')
        await page.locator('#evf-277-field_66FR384cge-3').fill('2222222222')
        await page.locator('#evf-277-field_yhGx3FOwr2-4').fill('Hello, greate job!')

        // Submit the form
        await page.locator('button[type=submit]').click()

        // Verify confirmation text
         // Find the text locator "Thanks for contacting us! We will be in touch with you shortly"
         const confirmationText = page.locator('text=Thanks for contacting us! We will be in touch with you shortly');

         // Verify the heading is there and correct
         await expect(confirmationText).toBeVisible();

    })
    
})
