
import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

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
