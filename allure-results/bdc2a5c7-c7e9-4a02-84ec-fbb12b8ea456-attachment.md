# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice6_API/05_GET_Request_Query_Param.spec.ts >> GET request -By gender 
- Location: tests/Practice6_API/05_GET_Request_Query_Param.spec.ts:6:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Male"
Received: undefined
```

# Test source

```ts
  1  | import{test,expect}from'@playwright/test';
  2  | 
  3  | test.use(
  4  |     {baseURL:process.env.API_URL}
  5  | )
  6  | test('GET request -By gender ',async ({request})=>{
  7  | // get the quest
  8  | 
  9  |   const response = await request.get("/api/v2/spartans/search",{
  10 |     params:{
  11 |         gender: "Male"
  12 |     }
  13 |   });
  14 | 
  15 | // conver to the json format 
  16 | 
  17 |   const jsonBody=  await response.json();
  18 |   
  19 | 
  20 | // validate the stutus code
  21 | expect(response.status()).toBe(200);
> 22 | expect(jsonBody.data.geder).toBe("Male")
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  23 | 
  24 | 
  25 | 
  26 | });
```