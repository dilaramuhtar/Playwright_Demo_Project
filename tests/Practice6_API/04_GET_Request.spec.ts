import{test,expect}from'@playwright/test';

test.use(
    {baseURL:process.env.API_URL}
)
test('GET request -get all the apartan ',async ({request})=>{
// get the quest

  const requestResponse =await request.get("/api/v2/spartans");

// conver to the json format 

  const jsonResponse = await requestResponse.json();
  

// validate the stutus code
expect(requestResponse.status()).toBe(200);

console.log("json body"+JSON.stringify(jsonResponse,null,2))


});