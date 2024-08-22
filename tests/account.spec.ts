
import { test, expect, Page } from '@playwright/test';

test.describe.serial('My account', () => {
    let page: Page
    
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage()

        await page.goto('/my-account')
        await page.locator('#username').fill('tadare9944@chaladas.com')
        await page.locator('#password').fill('Practicepass1!')
        await page.locator('[value="Log in"]').click()
        await expect(page.locator('li a[href*=logout]'))
        .toBeVisible()
        
    })
    
    test('Access Orders', async () => {
        await page.locator(`li a[href*=orders]`).click()
        await expect(page).toHaveURL(/.*orders/)  
    })

    test('Access Downloads', async () => {
        await page.locator(`li a[href*='downloads']`).click()
        await expect(page).toHaveURL(/.*downloads/) 
    }) 
    
})
