import type { Locator, Page } from "@playwright/test";


export class HomePage{

    readonly page: Page;
    readonly accountButton : Locator;
    readonly loginLinkButton : Locator;

// declare the constructor for the HomePage class

constructor(page: Page) {
    this.page = page;

    // Elements
    this.accountButton = page.locator("xpath=//a[@title= 'My Account']");
    this.loginLinkButton = page.getByText("Login");
}
  
   // methods
   async goToURL(){
    await this.page.goto(`${process.env.UI_URL}`)

   };
   async clickAccountButton() {
    await this.accountButton.click();
   };

   async clickLoginButton(){
    await this.loginLinkButton.click();
   };


}

