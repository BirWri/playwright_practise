import {Page, Locator} from '@playwright/test';

class BlogPage {
    private page: Page;
    numberOfBlogPosts: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.numberOfBlogPosts = page.locator('//section[@id="recent-posts-3"] // ul //li')
    }

    async navigate() {
        await this.page.goto('https://practice.sdetunicorns.com/blog');
    }

    

}

export default BlogPage;