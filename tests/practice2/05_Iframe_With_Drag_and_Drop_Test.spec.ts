import{test, expect} from "@playwright/test";

test("Drag and drop test",async({page})=>{

   await page.goto("https://jqueryui.com/droppable/");

    // locate the iframe
    let iframe = page.frameLocator("xpath=//iframe[@class='demo-frame']");
   // drag element
   let dragElement = iframe.locator("div[id='draggable']");
   // drop element
   let dropElement = iframe.locator("div[id='droppable']");

   await dragElement.dragTo(dropElement);


});