import {Page, Locator} from '@playwright/test';
const path = require('path');

class UploadComponent{
    private page: Page;
    verifyText: Locator;
    submitButton: Locator;
    uploadInput: string;
    
    constructor(page: Page) {
        this.page = page;
        this.uploadInput =  'input#upfile_1';
        this.submitButton = page.locator('#upload_1');
        this. verifyText= page.locator('#wfu_messageblock_header_1_label_1')

    }

    async uploadFile(filePath: string){
       
           await this.page.setInputFiles(this.uploadInput, filePath);
           await this.submitButton.click();

    }

    

}

export default UploadComponent;