import {test,expect} from"@playwright/test";
import { HomePage } from "../../src/pages/HomePage.js";

test("POM Home page test", async ({page})=>{

  // create an object of homepage

  const homePage = new HomePage(page);
    
   await homePage.goToURL();
   await homePage.clickAccountButton();
   await homePage.clickLoginButton();

   await expect(page).toHaveTitle("Account Login")

})