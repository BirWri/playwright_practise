import {Page, Locator} from '@playwright/test';

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    searchIcon: Locator;
    navLinks: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different.');
        this.searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        this.navLinks = page.locator('#zak-primary-nav li[id*=menu]')
    }

    async navigate() {
        await this.page.goto('/');
    }

    async getNavLinksText() {
        return this.navLinks.allTextContents();
    }
}

export default HomePage;