import { test, expect } from '@playwright/test';
const path = require('path');

test.describe('Upload a large file on Cart page', () => {
    test('Upload a large file', async ({ page }) => {
        // Open the url on the Cart page
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // Store the test file path
        const filePath = path.join(__dirname, '../data/large_file.pdf')

        // Click the Select file button
        await page.setInputFiles('input#upfile_1', filePath);

        // Click on upload a button
        await page.locator('#upload_1').click();

        // hardcoded sleep - not the best way
        //await page.waitForTimeout(5000);

        // wait for condition 
        await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state:'visible', timeout: 10000})

        // Check that the file has been uploaded aka assertion
        const verifyText = page.locator('#wfu_messageblock_header_1_label_1');
        
        await expect(verifyText).toContainText('uploaded successfully');
        
    })
    
    
})
