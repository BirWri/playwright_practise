import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config:FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage()

    await page.goto('https://practice.sdetunicorns.com/my-account')
    //await page.context().storageState({path: 'notLoggedInState.json'})
    await page.context().storageState({ path: 'notLoggedInState.json' });

    //login
    await page.locator('#username').fill('tadare9944@chaladas.com')
    await page.locator('#password').fill('Practicepass1!')
    await page.locator('[value="Log in"]').click()

    // Save signed-in state to a json
    await page.context().storageState({path: 'loggedInState.json'})
    await browser.close()

}



export default globalSetup;