import{test, expect} from "@playwright/test";

test("Drag and drop test",async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");

  // ab test link locator
  let abTestLinkButton = page.getByRole("link", { name: "A/B Testing" });
  //mouse left click
  await abTestLinkButton.click({ button: "left" });

  // mouse middle click
  let homeButton = page.getByRole("link", { name: "Home" });
  await homeButton.click({ button: "middle" });
  // mouse right click
  await homeButton.click({ button: "right" });
// mouse hover
await homeButton.hover();

//double clink on the element
await homeButton.dblclick();

});