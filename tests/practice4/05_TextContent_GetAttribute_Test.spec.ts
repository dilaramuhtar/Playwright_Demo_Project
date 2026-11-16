import{test,expect} from '@playwright/test';

test('Get Text Content and Get Attribute', async ({page}) => {

    // Navigate to the URL

    await page.goto("https://the-internet-5chk.onrender.com/");

    const textContentName = await page.locator("xpath = //span[@class='h1y']").textContent();
    console.log("Text Content of the element is: " + textContentName);

});