import{test,expect}from'@playwright/test';

test.use(
    {baseURL:process.env.API_URL}
)
test('GET request -By gender ',async ({request})=>{
// get the quest

  const response = await request.get("/api/v2/spartans/search",{
    params:{
        gender: "Male"
    }
  });

// conver to the json format 

  const jsonBody=  await response.json();
  

// validate the stutus code
expect(response.status()).toBe(200);
const spartans = jsonBody.data;

expect(spartans.length).toBeGreaterThan(0);

for (const spartan of spartans) {
  expect(spartan.gender).toBe("Male");
}



});