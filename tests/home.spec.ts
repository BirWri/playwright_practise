import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Click on "Get started" using the CSS selector', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Click on button
        await page.locator('#get-started').click()

        // Verify url has #get-started
        await expect(page).toHaveURL(/.*get-started/)
    })

    test('Locate heading text is visible "Think different." using the text selector', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Find the text locator "Think different."
        const headingText = page.locator('text=Think different.');

        // Verify the heading is there and correct
        await expect(headingText).toBeVisible();
    })
    
    test('Verify search icon is visible using XPath', async ({ page }) => {
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Find the Search Icon
        const searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');

        // Verify the Search icon is visible
        await expect(searchIcon).toBeVisible;
    })

    test('Verify the text for all primary nav links', async ({ page }) => {
        const expectedLinks = [
            "Home", 
            "About", 
            "Shop", 
            "Blog", 
            "Contact", 
            "My account",
        ];
        
        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Find the Primary nav links
        const navLinks = page.locator('#zak-primary-nav li[id*=menu]');

        // Print out all the nav links
        for (const element of await navLinks.elementHandles()) {
            console.log(await element.textContent())   
        }

        // Verify the Nav links
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
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


test.describe('Blog page', () => {
    test('Verify the number of blog posts and the length of the blog post titles to be above 10 char', async ({ page }) => {
        //Open url
        await page.goto('https://practice.sdetunicorns.com/')

        // Click on Blog
        await page.locator('#menu-item-490').click()

        // Retrieve the number of blog posts
        const numberOfBlogPosts = page.locator('//section[@id="recent-posts-3"] // ul //li')
        //const titlesOfTheBlogPosts = page.locator('//section[@id="recent-posts-3"] // ul //li//a')
        //const titles = page.locator('#recent-posts-3').getByRole('link', { name: 'IFrame Sample' })

        // Verify the number of posts
        await expect(numberOfBlogPosts).toHaveCount(5);

        // Verify the blog post titles to have more than 10 char
        for (const el of await numberOfBlogPosts.elementHandles()) {
        expect(((await el.textContent()).trim()).length).toBeGreaterThan(10)
      }
        
    })

})


