import { test, expect } from '@playwright/test';
const path = require('path');
import CartPage from '../pages/cart.page';

test.describe('Upload a file on Cart page', () => {
    let cartPage: CartPage;

    const fileName = ['book.png', 'large_file.pdf']

    for ( const name of fileName) {
        test(`Upload a file named ${name}`, async ({ page }) => {
            cartPage = new CartPage(page);
    
            // Open the url on the Cart page
            await page.goto('https://practice.sdetunicorns.com/cart/');
    
            // Store the test file path
            const filePath = path.join(__dirname, `../data/${name}`)
    
            //Upload test file
            cartPage.uploadComponent().uploadFile(filePath);
    
            // Check that the file has been uploaded aka assertion
                await expect(cartPage.uploadComponent().verifyText).toContainText('uploaded successfully');
            
        })
    }

    test.skip('Upload a file', async ({ page }) => {
        cartPage = new CartPage(page);

        // Open the url on the Cart page
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // Store the test file path
        const filePath = path.join(__dirname, '../data/book.png')

        //Upload test file
        cartPage.uploadComponent().uploadFile(filePath);

        // Check that the file has been uploaded aka assertion
            await expect(cartPage.uploadComponent().verifyText).toContainText('uploaded successfully');
        
    })
    
    
})
