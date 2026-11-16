import{test,expect} from "@playwright/test";

test ("Handling Alert test in playwright ",async({page})=>{
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );

  page.once('dialog',dialog=>{
    dialog.accept();
    console.log (`Alert message is :${dialog.message()}`)
  })

  // get alert example link locater
  const alertLink = page.getByText("See an example alert",{exact:true});
  await alertLink.click();

});

test("Handling popup test in playwright ", async ({ page }) => {
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );

  page.once("dialog", (dialog) => {
    dialog.dismiss();
    console.log(`Alert message is :${dialog.message()}`);
  });

  // get alert example link locater
  const confirmLink = page.getByText("See a sample confirm", { exact: true });
  await confirmLink.click();
});

test("Handling prompt Alert test in playwright ", async ({ page }) => {
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );

  page.once("dialog",async(dialog) => {
   
    console.log(`Alert message is :${dialog.message()}`);
    console.log(`Dialog typing is :${dialog.type()}`);
    await dialog.accept("playwright");
  });

  // get alert example link locater
  const alertLink = page.getByText("See a sample prompt", { exact: true });
  await alertLink.click();
});