import {Page, Locator} from '@playwright/test';

class ContactPage {
    private page: Page;
    contactInputText: Locator;
    contactMobile: Locator;
    contactEmail: Locator;
    contactName: Locator;
    SubmitButton: Locator;
    confirmationText: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.contactName = page.locator('#evf-277-field_ys0GeZISRs-1')
        this.contactEmail = page.locator('#evf-277-field_LbH5NxasXM-2')
        this.contactMobile = page.locator('#evf-277-field_66FR384cge-3')
        this.contactInputText = page.locator('#evf-277-field_yhGx3FOwr2-4')
        this.SubmitButton = page.locator('button[type=submit]')
        this.confirmationText = page.locator('text=Thanks for contacting us! We will be in touch with you shortly')
    }

    async navigate() {
        await this.page.goto('/contact');
    }

    async fillForm(name, email, mobile, inputText){
        await this.contactName.fill(name)
        await this.contactEmail.fill(email)
        await this.contactMobile.fill(mobile)
        await this.contactInputText.fill(inputText)
        await this.page.waitForTimeout(5000)
        await this.SubmitButton.click()
    }

}

export default ContactPage;