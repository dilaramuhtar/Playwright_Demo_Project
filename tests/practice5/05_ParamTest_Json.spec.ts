import{test,expect} from "@playwright/test";
import fs from 'fs';

//reading the data from json file
 const jsonpath = "test-data/qa/logindata.json";
 const loginData:any = JSON.parse(fs.readFileSync(jsonpath,'utf-8'));


for (const {email, password,validity} of loginData ){

    test(`login test for ${email} and ${password}`,async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/login");

        //fill login form

        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(password);
        await page.locator("xpath=//input[@value='log in']").click();
    });

}

 

