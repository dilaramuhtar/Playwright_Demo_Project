import{test,expect} from '@playwright/test';

test('Download file test in playwright' , async ({page}) => {

    // go to the download url
    await page.goto("https://the-internet-5chk.onrender.com/download");

    // locate the download link
    const downloadLink = page.locator(
      "xpath=//a[@href='download/Screenshot 2026-11-10 at 10.01.24 AM.png']",
    );

    // wait for the download to start

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      downloadLink.click(),
    ]);




});