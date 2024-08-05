import {Page, Locator} from '@playwright/test';

class BlogPage {
    private page: Page;
    menuBlogButton: Locator;
    numberOfBlogPosts: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.menuBlogButton = page.locator('#menu-item-490')
        this.numberOfBlogPosts = page.locator('//section[@id="recent-posts-3"] // ul //li')
    }

    async navigate() {
        await this.page.goto('https://practice.sdetunicorns.com/blog');
    }

    

}

export default BlogPage;