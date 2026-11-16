import{test,expect} from '@playwright/test';


test('Checkbox and radio button test',async({page})=>{
    // go to the url
    await page.goto("https://jqueryui.com/checkboxradio/");

    //locate the iframe

    const checkBoxIframe = page.frameLocator(
      "xpath=//iframe[@class='demo-frame']",
    );

    const radioButton= checkBoxIframe.locator("xpath=//label[@for='radio-1']");

    await expect(radioButton).not.toBeChecked();

    await radioButton.check();

    // validate the radio button is checked
   await expect(radioButton).toBeChecked();



});