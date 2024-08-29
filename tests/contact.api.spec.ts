import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import ContactPage from '../pages/contacts.page';
import apiController from '../controller/api.controller';



test.describe('Contact page', () => {
    let contactPage : ContactPage;
    let randomPerson : APIResponse;

    test.beforeAll(async () => {
        await apiController.init();
        randomPerson = await apiController.getUsers();
        const newUserToDo = await apiController.createUserToDo({'title':'Hello', 'completed':'false'})
        console.log(newUserToDo)   
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
