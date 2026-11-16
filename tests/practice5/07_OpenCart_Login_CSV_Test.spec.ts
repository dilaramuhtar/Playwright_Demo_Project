import{test,expect} from "@playwright/test";
import fs from "fs";
// pre reqest: npm install csv-parse 
import { parse } from "csv-parse/sync";


// define  the csv file path

const csvFilePath = "test-data/qa/openCartLoginData.csv";
// reading the whole csv data

const csvFileContent = fs.readFileSync(csvFilePath,"utf-8")


//  we need to parse fileContent 
type LoginData = {
  email: string;
  password: string;
};

const csvRecords = parse(csvFileContent,{columns:true,skip_empty_lines:true}) as LoginData[];


for ( const data of csvRecords){
test(`login test for open cart prject ${data.email} and ${data.password}`, async ({ page }) => {
  await page.goto("https://awesomeqa.com/ui/index.php?route=account/login");

  //fill login form

  await page.locator("xpath=//input[@name='email']").fill(data.email);
  await page.locator("xpath=//input[@name='password']").fill(data.password);
  await page.locator("xpath=//input[@type='submit']").click();

});
}