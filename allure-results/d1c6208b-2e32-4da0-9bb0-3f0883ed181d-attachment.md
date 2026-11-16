# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice6_API/POST_Request.spec.ts >> POST request test with Spartan project
- Location: tests/Practice6_API/POST_Request.spec.ts:8:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "female"
Received: "Female"
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test";
  2  | import postAPIrequest from "../../test-data/api_request/POST_Request.json" with { type: "json" };
  3  | 
  4  | test.use(
  5  |     {baseURL: process.env.API_URL,}
  6  | )
  7  | // create a post api request 
  8  | test("POST request test with Spartan project", async ({request})=>{
  9  | 
  10 | const postAIPresponse = await request.post(`/api/v2/spartans`, { data: postAPIrequest });
  11 | 
  12 | const jsonPOSTAPIresponse = await postAIPresponse.json();
  13 | // print the json response
  14 | console.log('POST API Response :'+ JSON.stringify(jsonPOSTAPIresponse,null,2))
  15 | // validate the api respons
  16 | expect(postAIPresponse.status()).toBe(201);
  17 | // expect(postAIPresponse.statusText()).toBe("Created");
  18 | expect(postAIPresponse.headers()["content-type"]).toContain("application/json");
  19 | 
  20 | // validate property/key name
  21 | 
  22 | expect(jsonPOSTAPIresponse.data).toHaveProperty("name");
  23 | expect(jsonPOSTAPIresponse.data).toHaveProperty("gender");
  24 | 
  25 | // validate api response body 
  26 | expect(jsonPOSTAPIresponse.data.id).toBeGreaterThan(0);
  27 | 
> 28 | expect(jsonPOSTAPIresponse.data.gender).toBe("female");
     |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  29 | });
  30 | 
  31 | 
```