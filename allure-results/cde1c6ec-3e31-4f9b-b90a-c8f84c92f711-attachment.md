# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice6_API/03_POST_Request_Faker.spec.ts >> POST request test with Spartan project with dynamic json data
- Location: tests/Practice6_API/03_POST_Request_Faker.spec.ts:8:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'name')
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { APIRequestHelper } from "../../src/utils/APIHepler.js";
  3  | import postAPIrequest from "../../test-data/api_request/POST_Requst_Dynamic.json" with { type: "json" };
  4  | import { faker } from "@faker-js/faker";
  5  | 
  6  | test.use({ baseURL: process.env.API_URL });
  7  | 
  8  | test("POST request test with Spartan project with dynamic json data", async ({
  9  |   request,
  10 | }) => {
  11 |     const fullName = faker.person.fullName();
  12 |     const gender = faker.person.gender();
  13 |     const phone = String(
  14 |       faker.number.int({ min: 1_000_000_000, max: 9_999_999_999 }),
  15 |     );
  16 | 
  17 |   const values = [fullName, gender, phone];
  18 | 
  19 |   const formattedRequest = APIRequestHelper.formatAPIRequest(
  20 |     JSON.stringify(postAPIrequest),
  21 |     values,
  22 |   );
  23 | 
  24 |   const requestBody = JSON.parse(formattedRequest);
  25 | 
  26 |   const response = await request.post("/api/v2/spartans", {
  27 |     data: requestBody,
  28 |   });
  29 | 
  30 | //   expect(response.status()).toBe(201);
  31 | 
  32 |   const responseBody = await response.json();
> 33 |   expect(responseBody.data.name).toBe(fullName);
     |                            ^ TypeError: Cannot read properties of undefined (reading 'name')
  34 | });
  35 | 
```