import{test,expect} from "@playwright/test";
import fs from "fs";


// define  the json file path

const jsonFilePaht = "test-data/qa/openCartLoginData.json";
// reading the data

const readJson = fs.readFileSync(jsonFilePaht,"utf-8")

// parse it 
const openCartLoginData = JSON.parse(readJson);


for ( const {email,password }of openCartLoginData){
test(`login test for open cart prject ${email} and ${password}`, async ({ page }) => {
  await page.goto("https://awesomeqa.com/ui/index.php?route=account/login");

  //fill login form

  await page.locator("xpath=//input[@name='email']").fill(email);
  await page.locator("xpath=//input[@name='password']").fill(password);
  await page.locator("xpath=//input[@type='submit']").click();

});
}