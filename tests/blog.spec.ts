
import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Blog page', () => {
    let blogPage: BlogPage;

    test.beforeEach(async ({ page }) => {
      blogPage = new BlogPage(page);

      //Open url
        await blogPage.navigate();
    })
    

    test('Verify the number of blog posts and the length of the blog post titles to be above 10 char', async ({ page }) => {

        // Verify the number of posts
        await expect(blogPage.numberOfBlogPosts).toHaveCount(5);

        // Verify the blog post titles to have more than 10 char
        for (const el of await blogPage.numberOfBlogPosts.elementHandles()) {
        expect(((await el.textContent())!.trim()).length).toBeGreaterThan(10)
      }
        
    })

})
