import {test, expect} from '@playwright/test';

test("Iterating the element test",async({page})=>{
   // go to the url

    await page.goto("https://the-internet-5chk.onrender.com/");

  // find all the link elements

    const allLists = await page.$$("xpath=//li[@class='list-group-item']");
 //using the for of loop

    // for( const eachElement of allLists){
    
    //     const text = await eachElement.textContent();
    //     console.log("test from loop: "+ text);
    // }

    // using the for loop

    // for(let i = 0; i<allLists.length; i++){
    //   const text2= await  allLists[i]?.textContent();
    //   console.log(text2)
    // }

    // how to use for  loop with nth method
    const link2 = page.locator("xpath=//li[@class='list-group-item']");
    const countOfElements =await link2.count(); 
    for (let i = 0; i < countOfElements; i++) {
        
        const text3 =await link2.nth(i).textContent();

        console.log(text3);
    }



});