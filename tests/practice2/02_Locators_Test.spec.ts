import {test, expect} from '@playwright/test';

test("Capture Screen Shots", async ({ page }) => {
  // go to url
  await page.goto("https://awesomeqa.com/ui/");

  // use getByRole to get the login link
  const myAccount = page.getByTitle("My Account", { exact: true });
  await myAccount.click();

  let loginLink = page.getByRole('link',{name:'Login',exact:true});
  await loginLink.click();
  // getByAltText to get the image icon
    let imageIcon = page.getByAltText("TheTestingAcademy eCommerce");
    await imageIcon.click();

    //getBytext
     let informationfooter = page.getByText("Information", { exact: true });
     await expect(informationfooter).toBeVisible();


});

