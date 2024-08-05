
import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Blog page', () => {
    let blogPage: BlogPage;

    test('Verify the number of blog posts and the length of the blog post titles to be above 10 char', async ({ page }) => {
      blogPage = new BlogPage(page);

      //Open url
        await blogPage.navigate();

        // Click on Blog
        await blogPage.menuBlogButton.click()

        // Retrieve the number of blog posts
        const numberOfBlogPosts = await blogPage.numberOfBlogPosts
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
