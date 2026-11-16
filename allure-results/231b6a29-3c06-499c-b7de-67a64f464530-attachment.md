# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice6_API/09_Mock_API_Request.spec.ts >> Mock API test
- Location: tests/Practice6_API/09_Mock_API_Request.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Playwright')
Expected: visible
Error: strict mode violation: getByText('Playwright') resolved to 2 elements:
    1) <a href="https://playwright.dev/docs/mock" class="text-purple-300 hover:text-purple-300 hover:underline">Learn more on API mocking in Playwright</a> aka getByRole('link', { name: 'Learn more on API mocking in' })
    2) <li>Playwright</li> aka getByText('Playwright', { exact: true })

Call log:
  - Expect "toBeVisible" getByText('Playwright') with timeout 5000ms
  - waiting for getByText('Playwright')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Render a List of Fruits" [level=1] [ref=e3]
  - paragraph [ref=e4]: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
  - paragraph [ref=e5]:
    - link "Check out the tests for this repo" [ref=e6] [cursor=pointer]:
      - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
  - paragraph [ref=e7]:
    - link "Learn more on API mocking in Playwright" [ref=e8] [cursor=pointer]:
      - /url: https://playwright.dev/docs/mock
  - list [ref=e12]:
    - listitem [ref=e13]: Playwright
    - listitem [ref=e14]: typeScript
    - listitem [ref=e15]: java
    - listitem [ref=e16]: javaScript
```

# Test source

```ts
  1  | import {test,expect}from '@playwright/test';
  2  | 
  3  | test("Mock API test",async({page})=>{
  4  | 
  5  |     //mock api request
  6  | 
  7  |    await page.route("*/**/api/v1/fruits",async route=>{
  8  |     const json = [
  9  |       { name: "Playwright", id: 12 },
  10 |       { name: "typeScript", id: 13 },
  11 |       { name: "java", id: 14 },
  12 |       { name: "javaScript", id: 15 },
  13 |     ];
  14 |       await route.fulfill({json})
  15 | 
  16 |    }); 
  17 | 
  18 |    //go to the url
  19 | 
  20 |    await page.goto("https://demo.playwright.dev/api-mocking/");
  21 | 
> 22 |    await expect(page.getByText("Playwright")).toBeVisible();
     |                                               ^ Error: expect(locator).toBeVisible() failed
  23 |    await expect(page.getByText("typeScript")).toBeVisible();
  24 |    await expect(page.getByText("java")).toBeVisible();
  25 |    await expect(page.getByText("javaScript")).toBeVisible();
  26 | 
  27 | })
```