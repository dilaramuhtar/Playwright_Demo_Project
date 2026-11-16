import{test,expect}from'@playwright/test';
import PUTReqestData from "../../test-data/api_request/PUT_Request.json"with {type: "json"};



test.use(
    {baseURL:
        process.env.API_URL,
    }
)

const id = 114;

test('Put request test update one spartan',async({request})=>{

   const response =  await request.put(`/api/v2/spartans/${id}`,{
        // this is optional step
        headers:{
            "Content-Type":"application/json"
        },
        data:PUTReqestData

    });

    expect(response.status()).toBe(200);

    // verify the json response

    const jsonBody = await response.json();
    expect (jsonBody.data.gender).toBe("Male");

})