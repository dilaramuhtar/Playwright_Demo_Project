import {test, expect} from '@playwright/test';

test('Read ENV file test in playwright', async ({page}) => {

    //go to the url
    await page.goto(`${process.env.PRACTICE_URL}`);


});

