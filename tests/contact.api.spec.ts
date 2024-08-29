import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import ContactPage from '../pages/contacts.page';



test.describe('Contact page', () => {
    let contactPage : ContactPage;
    let fakerAPI: APIRequestContext;
    let randomPerson : APIResponse;

    test.beforeAll(async ({ playwright }) => {
        fakerAPI = await playwright.request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });
        
        const response = await fakerAPI.get('users');
        const responseBody = (await response.json());
        randomPerson = responseBody[0];
    })
    

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);

        // Open URL
        await contactPage.navigate();
    })
    

    test('Open contact page, fill and submit the "Send Us Message" form', async ({ page }) => {

        // Find and fill the forms inputs name, email, phone and message
        await contactPage.fillForm(
            randomPerson['name'],
            randomPerson['email'],
            randomPerson['phone'],
            randomPerson['website']
        );

         // Verify the heading is there and correct
         await expect(contactPage.confirmationText).toBeVisible();

    })
    
})
