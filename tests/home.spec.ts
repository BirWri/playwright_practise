import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test('Open HomePage and verify title', async ({ page }) => {
        homePage = new HomePage(page);

        // Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate();

        // Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Click on "Get started" using the CSS selector', async ({ page }) => {
        homePage = new HomePage(page);
        // Open URL
        await homePage.navigate();

        await expect(page).not.toHaveURL(/.*get-started/);

        // Click on button
        //await page.locator('#get-started').click()
        await homePage.getStartedBtn.click()

        // Verify url has #get-started
        await expect(page).toHaveURL(/.*get-started/)
    })

    test('Locate heading text is visible "Think different." using the text selector', async ({ page }) => {
        homePage = new HomePage(page);
        // Open URL
        await homePage.navigate();

        // Find the text locator "Think different."
        //const headingText = page.locator('text=Think different.');
        const headingText = await homePage.headingText


        // Verify the heading is there and correct
        await expect(headingText).toBeVisible();
        //await expect(homePage.headingText).toBeVisible();
    })
    
    test('Verify search icon is visible using XPath', async ({ page }) => {
        homePage = new HomePage(page);

        // Open URL
        await homePage.navigate();

        // Find the Search Icon
        //const searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        const searchIcon = await homePage.searchIcon

        // Verify the Search icon is visible
        //await expect(homePage.searchIcon).toBeVisible();
        await expect(searchIcon).toBeVisible();
    })

    test('Verify the text for all primary nav links', async ({ page }) => {
        homePage = new HomePage(page);

        const expectedLinks = [
            "Home", 
            "About", 
            "Shop", 
            "Blog", 
            "Contact", 
            "My account",
        ];
        
        // Open URL
        await homePage.navigate();

        // Find the Primary nav links
        //const navLinks = page.locator('#zak-primary-nav li[id*=menu]');
        //const navLinks = await homePage.navLinks

        // Print out all the nav links
        //for (const element of await navLinks.elementHandles()) {
        //    console.log(await element.textContent())   
        //}

        // Verify the Nav links
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
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




