import {test, expect} from "@playwright/test";
import postAPIrequest from "../../test-data/api_request/POST_Request.json" with { type: "json" };

test.use(
    {baseURL: process.env.API_URL,}
)
// create a post api request 
test("POST request test with Spartan project", async ({request})=>{

const postAIPresponse = await request.post(`/api/v2/spartans`, { data: postAPIrequest });

const jsonPOSTAPIresponse = await postAIPresponse.json();
// print the json response
console.log('POST API Response :'+ JSON.stringify(jsonPOSTAPIresponse,null,2))
// validate the api respons
expect(postAIPresponse.status()).toBe(201);
// expect(postAIPresponse.statusText()).toBe("Created");
expect(postAIPresponse.headers()["content-type"]).toContain("application/json");

// validate property/key name

expect(jsonPOSTAPIresponse.data).toHaveProperty("name");
expect(jsonPOSTAPIresponse.data).toHaveProperty("gender");

// validate api response body 
expect(jsonPOSTAPIresponse.data.id).toBeGreaterThan(0);

expect(jsonPOSTAPIresponse.data.gender).toBe("Female");
});

