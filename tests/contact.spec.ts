import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contacts.page';

test.describe('Contact page', () => {
    let contactPage : ContactPage;

    test('Open contact page, fill and submit the "Send Us Message" form', async ({ page }) => {
        contactPage = new ContactPage(page);

        // Open URL
        await contactPage.navigate();

        // Find and fill the forms inputs name, email, phone and message
        await contactPage.fillForm('Ro Wright', 'janedoe@gmail.com', '2222222222', 'Hello, greate job!');

        // Verify confirmation text
         // Verify the heading is there and correct
         await expect(contactPage.confirmationText).toBeVisible();

    })
    
})
