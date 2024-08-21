
import { test, expect } from '@playwright/test';

test.describe('My account', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/my-account')
        await page.locator('#username').fill('tadare9944@chaladas.com')
        await page.locator('#password').fill('Practicepass1!')
        await page.locator('[value="Log in"]').click()
        await expect(page.locator('li a[href*=logout]'))
        .toBeVisible()
        
    })
    
    test('Access Orders', async ({ page }) => {
        await page.goto('/my-account/')
        await page.locator(`li a[href*=orders]`).click()
        await expect(page).toHaveURL('/my-account/orders/')  
    })

    test('Access Downloads', async ({ page }) => {
        await page.goto('/my-account/')
        await page.locator(`li a[href*='downloads']`).click()
        await expect(page).toHaveURL('/my-account/downloads/') 
    }) 
    
})
