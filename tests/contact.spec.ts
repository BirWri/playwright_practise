import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contacts.page';
import { faker } from '@faker-js/faker';


test.describe('Contact page', () => {
    let contactPage : ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);

        // Open URL
        await contactPage.navigate();
    })
    

    test('Open contact page, fill and submit the "Send Us Message" form', async ({ page }) => {

        // Find and fill the forms inputs name, email, phone and message
        await contactPage.fillForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraph(2));

         // Verify the heading is there and correct
         await expect(contactPage.confirmationText).toBeVisible();

    })
    
})
