import {test, expect} from '@playwright/test';


test('visual Test',async({page})=>{

    await page.goto("https://the-internet-5chk.onrender.com/");

    await expect (page).toHaveScreenshot('HomePage.png');
});
