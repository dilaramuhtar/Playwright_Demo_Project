import type { Locator, Page } from "@playwright/test";


export class LoginPage {
  readonly page: Page;
  readonly emailBox: Locator;
  readonly passwordBox: Locator;
  readonly loginButon: Locator;

  // declare the constructor for the HomePage class

  constructor(page: Page) {
    this.page = page;

    // Elements
    this.emailBox = page.locator("xpath=//a[@id= 'input-email']");
    this.passwordBox = page.locator("xpath= //a[@id='input-password']");
    this.loginButon = page.locator("xpath= //input[@type='submit']");
  }

  // methods
  async fillEmailAddress(keyword:string) {
    await this.emailBox.fill(keyword);
  }

  async fillPassword(keyword:string) {
    await this.emailBox.fill(keyword);
  }
}
