# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice5/01_ReadENVFile_Test.spec.ts >> Read ENV file test in playwright
- Location: tests/practice5/01_ReadENVFile_Test.spec.ts:3:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Test source

```ts
  1 | import {test, expect} from '@playwright/test';
  2 | 
  3 | test('Read ENV file test in playwright', async ({page}) => {
  4 | 
  5 |     //go to the url
> 6 |     await page.goto(`${process.env.PRACTICE_URL}`);
    |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  7 | 
  8 | });
  9 | 
```