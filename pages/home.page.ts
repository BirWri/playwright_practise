class HomePage {
    page: any;
    getStartedBtn: any;
    headingText: any;
    searchIcon: any;
    navLinks: any;
    
    constructor(page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different.');
        this.searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        this.navLinks = page.locator('#zak-primary-nav li[id*=menu]')
    }
}

export default HomePage;